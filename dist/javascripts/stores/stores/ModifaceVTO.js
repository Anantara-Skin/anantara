import BaseStore from "stores/BaseStore";
const initialData = {
  vtoActivationHistory: {}, // list of variations where VTO was activated during current page visit
  isVTOActivated: false, // current "activation" state of Modiface VTO
  currentPid: null, // current product id
  category: null, // Modiface category
  currentLook: null, // object with current look data [{"category":"eyeshadow","upc":"3605533330142","color_id":0}, ...]
  // data about list of products and quantities which will be addded to basket
  previewProductsMap: [], // list of product which should be added to basket
  currentEditPid: null, // product id which is currently editing
  isMultipleSelection: false, // is multiple product selection allowed
  mode: null, // Modiface VTO iframe mode
};
const modifaceStore = new BaseStore(initialData, {
  enableVTO: (state, data) => {
    const currentVtoStates = Object.assign({}, state.vtoActivationHistory);
    if (data.pid) {
      currentVtoStates[data.pid] = true;
    }
    const look = data.look || state.currentLook;
    // add look products to VTO state history
    if (look) {
      look.forEach((item) => {
        currentVtoStates[item.upc] = true;
      });
    }
    return Object.assign({}, state, {
      vtoActivationHistory: currentVtoStates,
      isVTOActivated: true,
      currentPid: data.pid,
      currentLook: data.look || state.currentLook,
    });
  },
  disableVTO: (state) =>
    Object.assign({}, state, {
      isVTOActivated: false,
    }),
  selectLook: (state, data) =>
    Object.assign({}, state, {
      currentPid: data.pid,
      currentLook: data.look || state.currentLook,
      previewProductsMap: data.lookProductsMap || [],
      currentEditPid: null,
    }),
  unSelectLook: (state) =>
    Object.assign({}, state, {
      currentPid: null,
      currentLook: null,
      previewProductsMap: [],
      currentEditPid: null,
    }),
  removeProduct: (state, data) => {
    const previewProductsMap = state.previewProductsMap.filter(
      (item) => data.pid !== item.pid,
    );
    return Object.assign({}, state, {
      previewProductsMap,
    });
  },
  editProduct: (state, data) =>
    Object.assign({}, state, {
      currentEditPid: data.pid,
    }),
  updateProductQuantity: (state, data) => {
    const previewProductsMap = state.previewProductsMap.map((productData) => {
      const newProductData = Object.assign({}, productData);
      if (data.pid === newProductData.pid) {
        newProductData.qty = data.qty || 1;
      }
      return newProductData;
    });
    return Object.assign({}, state, {
      previewProductsMap,
    });
  },
  reset: (state) =>
    Object.assign({}, state, {
      isVTOActivated: false,
      currentPid: null,
      category: null,
      currentLook: null,
      vtoActivationHistory: {},
      previewProductsMap: [],
      currentEditPid: null,
      accessBy: null,
      mode: null,
    }),
  resetLook: (state) =>
    Object.assign({}, state, {
      currentLook: null,
      previewProductsMap: [],
      currentEditPid: null,
    }),
  selectMode: (state, data) =>
    Object.assign({}, state, {
      mode: data,
    }),
  unselectMode: (state) =>
    Object.assign({}, state, {
      mode: null,
    }),
});
export default modifaceStore;
