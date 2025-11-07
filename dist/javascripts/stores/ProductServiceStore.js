import s from "./BaseStore.js";
const e = { pid: null, services: [] },
  i = new s(e, {
    setPid: (s, e) => ((s.pid = e), Object.assign({}, s)),
    setServices: (s, e) => (
      s.pid && (s.services = Object.assign(s.services, e)), Object.assign({}, s)
    ),
    reset: (s) => Object.assign({}, s, e),
  });
export { i as default };
