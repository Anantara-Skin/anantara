import { on as e } from "../../toolbox/event.js";
const t = {
  register: function (t) {
    t.dataset.action.split(" ").forEach((o) => {
      const n = (function (e) {
        const t = /^([a-z.:]*)->([a-z-A-Z-0-9]*.)#([a-z-A-Z]*)$/g.exec(e);
        if (!t) return !1;
        const o = t[1].split(":");
        return {
          event: o.shift(),
          eventModifiers: o,
          controller: t[2],
          method: t[3],
        };
      })(o);
      if (!n)
        throw new Error(
          'The data-action attached must respect the following pattern "actionName->ControllerName#methodName"',
        );
      if (void 0 === this.name)
        throw new Error(`"${n.controller}" controller doesn't exist`);
      if (n.controller === this.name) {
        if ("function" == typeof this[n.method]) {
          const o = {};
          /\./g.test(n.event) && (o.customEvent = !0),
            n.eventModifiers.includes("passive") && (o.passive = !0),
            e(
              n.event,
              t,
              (e) => {
                n.eventModifiers.includes("stop") && e.stopPropagation(),
                  n.eventModifiers.includes("prevent") && e.preventDefault(),
                  this[n.method](e);
              },
              o,
            );
        } else
          window.lora.debug &&
            (console.info(t),
            console.error(
              `"${n.method}" method doesn't exist, please verify "data-action" attached to the HTMLElement`,
            ));
      }
    });
  },
};
export { t as default };
