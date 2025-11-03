/**
 * Custom validators
 */
/**
 * This is a description of the Validators constructor function.
 * @class
 * @classdesc It is a class with static custom field validation functions.
 */
export default class Validators {
  /**
   * Prepares custom validators for the field
   * @param {Object} validators object with validator IDs
   * @returns {Object} object with validator functions
   */
  static async getValidators(validators) {
    const obj = {};
    // eslint-disable-next-line no-restricted-syntax
    for (const validatorId in validators) {
      if (
        typeof validators[validatorId] === "object" &&
        validators[validatorId].module
      ) {
        try {
          // eslint-disable-next-line no-await-in-loop
          const module = await SystemJS.import(
            `toolbox/${validators[validatorId].module}`,
          );
          // eslint-disable-next-line max-depth
          if (typeof module[validatorId] === "function") {
            obj[validatorId] = module[validatorId];
          } else {
            console.error(
              `Validator '${validators[validatorId].module}.${validatorId}' doesn't exist!`,
            );
          }
        } catch (error) {
          console.error(error);
        }
      } else if (typeof Validators[validatorId] === "function") {
        obj[validatorId] = Validators[validatorId];
      }
    }
    return obj;
  }
  /**
   * Custom validator for detection emoji in field value
   * @param {HTMLElement} field field to check
   * @returns {Boolean} true if fields value does not include emoji
   */
  static emoji(field) {
    const valid = !/[\u25A0-\u27FF\uD800-\uDFFF]/.test(field.value);
    if (!valid) {
      field.setCustomValidity("emoji"); // makes field natively invalid
      field.checkValidity(); // onNativeError() will handle 'invalid' event at this point
    } else {
      field.setCustomValidity(""); // makes field natively valid
      field.dispatchEvent(new Event("error.reset"));
    }
    return valid;
  }
  /**
   * Custom validator for values equality check
   * @param {HTMLElement} field field to check equality
   * @param {String} data dependent field name
   * @returns {Boolean} true if values are equal
   */
  static equalto(field, data) {
    let valid = true;
    const dependentField = field.form[data];
    // set dependency so both fields changes leads to validation
    if (!dependentField.getAttribute("data-js-dependency-is-set")) {
      dependentField.addEventListener(
        "change",
        field.dispatchEvent.bind(field, new Event("change")),
      );
      dependentField.setAttribute("data-js-dependency-is-set", true);
    }
    // main check
    if (field.required && field.value.length === 0) {
      valid = false;
      field.setCustomValidity("required");
      field.checkValidity();
    } else if (field.value !== dependentField.value) {
      valid = false;
      field.setCustomValidity("equalto"); // makes field natively invalid
      field.checkValidity(); // onNativeError() will handle 'invalid' event at this point
    } else {
      field.setCustomValidity(""); // makes field natively valid
      field.dispatchEvent(new Event("error.reset"));
    }
    return valid;
  }
  /**
   * Custom validator for values equality check without case sensentivity
   * @param {HTMLElement} field field to check equality
   * @param {String} data dependent field name
   * @returns {Boolean} true if values are equal
   */
  static equaltoignorecase(field, data) {
    let valid = true;
    const dependentField = field.form[data];
    // set dependency so both fields changes leads to validation
    if (!dependentField.getAttribute("data-js-dependency-is-set")) {
      dependentField.addEventListener(
        "change",
        field.dispatchEvent.bind(field, new Event("change")),
      );
      dependentField.setAttribute("data-js-dependency-is-set", true);
    }
    // main check
    if (field.required && field.value.length === 0) {
      valid = false;
      field.setCustomValidity("required");
      field.checkValidity();
    } else if (
      field.value.toLowerCase() !== dependentField.value.toLowerCase()
    ) {
      valid = false;
      field.setCustomValidity("equaltoignorecase"); // makes field natively invalid
      field.checkValidity(); // onNativeError() will handle 'invalid' event at this point
    } else {
      field.setCustomValidity(""); // makes field natively valid
      field.dispatchEvent(new Event("error.reset"));
    }
    return valid;
  }
  /**
   * Custom validator for maximum items in field value
   * @param {HTMLElement} field field to check
   * @param {HTMLElement} rules - validation rules
   * @returns {Boolean} true if field value is valid
   */
  static maxitems(field, rules) {
    let valid = true;
    const itemsCount = field.value.split(rules.limitSeparator).length;
    field.setCustomValidity(""); // makes field natively valid
    if (field.checkValidity()) {
      field.setCustomValidity("");
      field.dispatchEvent(new Event("error.reset"));
    }
    if (itemsCount > rules.limitItems) {
      field.setCustomValidity("maxitems"); // makes field natively invalid
      field.checkValidity(); // onNativeError() will handle 'invalid' event at this point
      valid = false;
    }
    return valid;
  }
  /**
   * Custom validator for detection emails in field value
   * @param {HTMLElement} field field to check
   * @returns {Boolean} true if fields value include only emails
   */
  static emails(field) {
    const regex = new RegExp(
      "^[a-zA-Z0-9_\\-\\.\\+]{1,}@([\\da-zA-Z-]{1,}\\.){1,}[\\da-zA-Z-]{2,20}$",
    );
    const emailList = field.value.split(/\s*,\s*/);
    const valid = emailList.every((email) => regex.test(email.trim()));
    if (!valid) {
      field.setCustomValidity("emails"); // makes field natively invalid
      field.checkValidity(); // onNativeError() will handle 'invalid' event at this point
    } else {
      field.setCustomValidity(""); // makes field natively valid
      field.dispatchEvent(new Event("error.reset"));
    }
    return valid;
  }
  /**
   * Custom validator for detect if year is valid
   * @param {HTMLElement} field field to check
   * @returns {Boolean} true if fields value not less then current year
   */
  static expirationyear(field) {
    let valid = true;
    const fieldValue = field.value;
    const currentYear = new Date().getFullYear();
    let expirationYear;
    if (field.maxLength === fieldValue.length) {
      if (fieldValue.length === 2) {
        expirationYear = Number(
          currentYear.toString().slice(0, 2) + fieldValue,
        );
      } else if (fieldValue.length === 4) {
        expirationYear = Number(fieldValue);
      }
    }
    if (fieldValue.length) {
      if (expirationYear && expirationYear < currentYear) {
        valid = false;
        field.setCustomValidity("expirationyear"); // makes field natively invalid
        field.checkValidity(); // onNativeError() will handle 'invalid' event at this point
      } else {
        field.setCustomValidity(""); // makes field natively valid
        field.dispatchEvent(new Event("error.reset"));
      }
    }
    return valid;
  }
  /**
   * Custom validator for detect if month/year is valid
   * @param {HTMLElement} field field to check
   * @returns {Boolean} true if fields value not less then current year
   */
  static expirationmonthyear(field) {
    let valid = true;
    const [month, year] = field.value.split("/");
    const currentDate = new Date();
    const expirationDate = new Date(year, month - 1);
    if (expirationDate && (expirationDate < currentDate || +month > 12)) {
      valid = false;
      field.setCustomValidity("expirationmonthyear"); // makes field natively invalid
      field.checkValidity(); // onNativeError() will handle 'invalid' event at this point
    } else {
      field.setCustomValidity(""); // makes field natively valid
      field.dispatchEvent(new Event("error.reset"));
    }
    return valid;
  }
  /**
   * Custom validator for detect html tags in field value
   * @param {HTMLElement} field field to check
   * @returns {Boolean} true if fields value has html tags
   */
  static tags(field) {
    const valid = !/<\/?[^>]+>/g.test(field.value);
    if (!valid) {
      field.setCustomValidity("tags"); // makes field natively invalid
      field.checkValidity(); // onNativeError() will handle 'invalid' event at this point
    } else {
      field.setCustomValidity(""); // makes field natively valid
      field.dispatchEvent(new Event("error.reset"));
    }
    return valid;
  }
  /**
   * Custom validator for detection whether a field contains at least a specified number of uppercase letters
   * @param {HTMLElement} field field to check
   * @param {Number} n The minimum number of uppercase letters required
   * @returns {Boolean} true if fields value does not include emoji
   */
  static minimumuppercaseletters(field, n) {
    const uppercaseLetters = field.value.match(/[A-Z]/g);
    const valid = uppercaseLetters !== null && uppercaseLetters.length >= n;
    if (!valid) {
      field.setCustomValidity("minimumuppercaseletters"); // makes field natively invalid
      field.checkValidity(); // onNativeError() will handle 'invalid' event at this point
    } else {
      field.setCustomValidity(""); // makes field natively valid
      field.dispatchEvent(new Event("error.reset"));
    }
    return valid;
  }
  /**
   * Custom validator for detection whether a field contains at least a specified number of lowercase letters
   * @param {HTMLElement} field field to check
   * @param {Number} n The minimum number of lowercase letters required
   * @returns {Boolean} true if fields value does not include emoji
   */
  static minimumlowercaseletters(field, n) {
    const lowercaseLetters = field.value.match(/[a-z]/g);
    const valid = lowercaseLetters !== null && lowercaseLetters.length >= n;
    if (!valid) {
      field.setCustomValidity("minimumlowercaseletters"); // makes field natively invalid
      field.checkValidity(); // onNativeError() will handle 'invalid' event at this point
    } else {
      field.setCustomValidity(""); // makes field natively valid
      field.dispatchEvent(new Event("error.reset"));
    }
    return valid;
  }
  /**
   * Custom validator for detection whether a field contains at least a specified number of numbers
   * @param {HTMLElement} field field to check
   * @param {Number} n The minimum number of numbers required
   * @returns {Boolean} true if fields value does not include emoji
   */
  static minimumnumbers(field, n) {
    const numbers = field.value.match(/\d/g);
    const valid = numbers !== null && numbers.length >= n;
    if (!valid) {
      field.setCustomValidity("minimumnumbers"); // makes field natively invalid
      field.checkValidity(); // onNativeError() will handle 'invalid' event at this point
    } else {
      field.setCustomValidity(""); // makes field natively valid
      field.dispatchEvent(new Event("error.reset"));
    }
    return valid;
  }
  /**
   * Custom validator for detection whether a field contains at least a specified number of special characters
   * @param {HTMLElement} field field to check
   * @param {Number} params params (The minimum number of special characters required and characters to count occurrences of)
   * @returns {Boolean} true if fields value does not include emoji
   */
  static minimumspecialcharacters(field, params) {
    const n = params[0];
    let chars = params[1];
    chars = chars.split("");
    const fieldValue = field.value;
    const count = fieldValue.split("").reduce((cnt, char) => {
      if (chars.includes(char)) {
        cnt += 1;
      }
      return cnt;
    }, 0);
    const valid = count >= n;
    if (!valid) {
      field.setCustomValidity("minimumspecialcharacters"); // makes field natively invalid
      field.checkValidity(); // onNativeError() will handle 'invalid' event at this point
    } else {
      field.setCustomValidity(""); // makes field natively valid
      field.dispatchEvent(new Event("error.reset"));
    }
    return valid;
  }
  /**
   * Custom validator for detection whether length of a field falls within a specified range.
   * @param {HTMLElement} field field to check
   * @param {Array} range - A specified range
   * @returns {Boolean} true if fields value does not include emoji
   */
  static stringlengthrange(field, range) {
    const { length } = field.value;
    const [min, max] = range;
    const valid = length >= min && length <= max;
    if (!valid) {
      field.setCustomValidity("stringlengthrange"); // makes field natively invalid
      field.checkValidity(); // onNativeError() will handle 'invalid' event at this point
    } else {
      field.setCustomValidity(""); // makes field natively valid
      field.dispatchEvent(new Event("error.reset"));
    }
    return valid;
  }
}
