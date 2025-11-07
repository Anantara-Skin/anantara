import t from "../../core/Component.js";
import {deepMerge as e} from "../../toolbox/deepMerge.js";
import {Event as s} from "../../services/EventEmitter.js";
class i extends t {
    constructor(t, s={}) {
        super(t, e({
            dataModelId: null
        }, s))
    }
    afterInit() {
        this.analytics && this.analytics.init && s.emit("analytics.event", this.analytics.init)
    }
    destroy() {
        super.destroy()
    }
}
export {i as default};

