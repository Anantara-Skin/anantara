function e() {
  const e = navigator.userAgent || navigator.vendor || window.opera;
  return /windows phone/i.test(e)
    ? "Windows Phone"
    : /android/i.test(e)
      ? "Android"
      : /iPad|iPhone|iPod/.test(e) && !window.MSStream
        ? "IOS"
        : e;
}
function n() {
  return window.matchMedia("(orientation: portrait)").matches
    ? "portrait"
    : window.matchMedia("(orientation: landscape)").matches
      ? "landscape"
      : void 0;
}
function i() {
  const e = navigator.userAgent;
  let n = e.match(/version\/(\d+)/i),
    i =
      e.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) ||
      [];
  return /trident/i.test(i[1])
    ? ((n = /\brv[ :]+(\d+)/g.exec(e) || []),
      { name: "IE", version: n[1] || "" })
    : "Chrome" === i[1] && ((n = e.match(/\b(OPR|Edge)\/(\d+)/)), null != n)
      ? { name: n[1].replace("OPR", "Opera"), version: n[2] }
      : ((i = i[2]
          ? [i[1], i[2]]
          : [navigator.appName, navigator.appVersion, "-?"]),
        null != n && i.splice(1, 1, n[1]),
        { name: i[0], version: i[1] });
}
function o() {
  return !!window.ApplePaySession;
}
function t() {
  return "IOS" === e();
}
function r() {
  const e = window.chrome,
    n = window.navigator,
    i = n.vendor,
    o = void 0 !== window.opr,
    t = n.userAgent.indexOf("Edg") > -1;
  return (
    !!n.userAgent.match("CriOS") ||
    (null != e && "Google Inc." === i && !1 === o && !1 === t)
  );
}
function a() {
  const e = navigator.userAgent.toLowerCase();
  return /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(
    e,
  );
}
function d() {
  return new Promise((e, n) => {
    window.navigator.mediaDevices.enumerateDevices().then((i) => {
      let o = !1;
      for (let e = 0, n = i.length; e < n; e++)
        if ("videoinput" === i[e].kind || "video" === i[e].kind) {
          o = !0;
          break;
        }
      o ? e() : n();
    }, n);
  });
}
function s() {
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
}
export {
  o as applePay,
  i as browserInfo,
  e as getOS,
  n as getOrientation,
  d as hasCamera,
  r as isChrome,
  s as isDarkColorScheme,
  t as isIOS,
  a as isTablet,
};
