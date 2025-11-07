class t {
  constructor() {
    (this.activeFocus = null),
      (this.lastScroll = null),
      (this.removedIndex = null);
  }
}
class e {
  constructor() {
    if (e.instance) return e.instance;
    (this.state = new t()),
      (this.stateStack = []),
      (this.listeners = { "state.restore": new Map() }),
      (e.instance = this);
  }
  setActiveFocus(t, e) {
    this.state.activeFocus = { [t]: e };
  }
  setLastScroll(t, e) {
    this.state.lastScroll = { [t]: e };
  }
  setRemovedIndex(t, e) {
    this.state.removedIndex = { [t]: e };
  }
  getRemovedIndex(t) {
    return this.state.removedIndex && this.state.removedIndex[t];
  }
  resetRemovedIndex() {
    this.state.removedIndex = null;
  }
  saveElement(t) {
    this.state.savedElement = t;
  }
  getElement() {
    return this.state.savedElement;
  }
  getActiveFocusByKey(t) {
    return this.state.activeFocus && this.state.activeFocus[t];
  }
  getLastScrollByKey(t) {
    return this.state.lastScroll && this.state.lastScroll[t];
  }
  resetActiveFocus() {
    this.state.activeFocus = null;
  }
  resetLastScroll() {
    this.state.lastScroll = null;
  }
  resetSavedElement() {
    this.state.savedElement = null;
  }
  addNewState() {
    this.stateStack.push(this.state), (this.state = new t());
  }
  restorePrevState() {
    const t = this.stateStack.pop();
    t && ((this.state = t), this.trigger("state.restore"));
  }
  listen(t, e, s) {
    const a = this.listeners[t];
    a && a.set(s, e.bind(s));
  }
  unlisten(t, e) {
    const s = this.listeners[t];
    s && s.delete(e);
  }
  trigger(t) {
    const e = this.listeners[t];
    e &&
      Array.from(e.values()).forEach((t) => {
        t();
      });
  }
}
const s = new e();
export { s as default };
