import { Event as t } from "../services/EventEmitter.js";
import i from "./ComponentRegistry.js";
import s from "../services/Accessibility.js";
const e = new (class {
  constructor() {
    (this.modalList = {}),
      (this.waitModals = []),
      this.bindEvents(),
      (this.isOpeningModal = !1);
  }
  bindEvents() {
    t.on("modal.open", this.onOpen.bind(this), this),
      t.on("modal.open.before", this.onBeforeOpen.bind(this), this),
      t.on("modal.close.after", this.onAfterClose.bind(this), this);
  }
  onOpen(t) {
    const i = t || { type: "Modal" };
    if (
      (this.currentModal && this.currentModal.id === i.id) ||
      !0 === this.isOpeningModal
    )
      return Promise.resolve();
    if (((this.isOpeningModal = !0), this.currentModal)) {
      this.manageStacking(i), (this.nextModal = i);
      const t = [this.currentModal.close()];
      return Promise.all(t)
        .then(() => {
          delete this.nextModal;
        })
        .then(this.importModal.bind(this, i))
        .then(this.openModal.bind(this));
    }
    return s.addNewState(), this.importModal(i).then(this.openModal.bind(this));
  }
  onBeforeOpen(t) {
    this.currentModal = t;
  }
  onAfterClose(t) {
    if (
      (t.closeAll &&
        (this.waitModals = this.waitModals.filter(
          (t) => (t.instance.element.remove(), !1),
        )),
      this.currentModal)
    ) {
      const t = this.currentModal.id,
        i = this.waitModals[this.waitModals.length - 1];
      i && t !== i.instance.id && !i.hasPendingSuccessor
        ? this.openWaitingModal(t)
        : ((this.currentModal = null), this.nextModal || s.restorePrevState());
    }
  }
  importModal(t) {
    const s = "Modal";
    t.type || (t.type = s);
    const e = t.type === s ? `global/${s}` : `modal/${t.type}`;
    return i
      .importComponent({ name: e, options: t.options })
      .then(
        (i) => (
          this.register(i),
          t.options.analytics && (i.analytics = t.options.analytics),
          i
        ),
      );
  }
  openModal(t) {
    return t
      ? (this.waitModals.length &&
          (this.waitModals[this.waitModals.length - 1].hasPendingSuccessor =
            !1),
        (this.isOpeningModal = !1),
        t.open())
      : ((this.isOpeningModal = !1), Promise.reject());
  }
  openWaitingModal() {
    let t = this.waitModals.pop();
    (t = (t && t.instance) || null),
      t &&
        t.open().then(() => {
          (t.enableStacking = !1), (t = null);
        });
  }
  register(t) {
    this.modalList[t.id] = t;
  }
  manageStacking(t) {
    this.currentModal.options.isStackable &&
    (t.options.enableStacking || t.enableStacking)
      ? this.waitModals.push({
          hasPendingSuccessor: !0,
          instance: this.currentModal,
        })
      : this.waitModals.length &&
        (this.waitModals[this.waitModals.length - 1].hasPendingSuccessor = !0),
      (this.currentModal.enableStacking = !!t.options.enableStacking);
  }
})();
export { e as default };
