/* eslint-disable */
!(function (e) {
  var t,
    n,
    o,
    i,
    c,
    d,
    s,
    a =
      '<svg><symbol id="icon-zuixiaohua" viewBox="0 0 1024 1024"><path d="M928.2 548h-832c-17.7 0-32-14.3-32-32s14.3-32 32-32h832c17.7 0 32 14.3 32 32s-14.3 32-32 32z"  ></path></symbol><symbol id="icon-guanbi" viewBox="0 0 1024 1024"><path d="M545.6 512L900.8 156.8c9.6-9.6 9.6-24 0-33.6s-24-9.6-33.6 0L512 478.4 155.2 123.2c-9.6-9.6-24-9.6-33.6 0s-9.6 24 0 33.6L478.4 512 121.6 868.8c-9.6 9.6-9.6 24 0 33.6 4.8 4.8 11.2 6.4 17.6 6.4s12.8-1.6 17.6-6.4L512 545.6l355.2 355.2c4.8 4.8 11.2 6.4 17.6 6.4s12.8-1.6 17.6-6.4c9.6-9.6 9.6-24 0-33.6L545.6 512z"  ></path></symbol><symbol id="icon-zuidahua" viewBox="0 0 1157 1024"><path d="M1016.522 724.44H833.874v236.781h-61.532v-1.168H124.311v1.168H62.779v-662.44h236.002V62.779h779.273v661.662h-61.532zM124.311 898.521h648.031V360.313H124.311v538.208z m892.211-774.21h-656.21v174.47h473.561v364.128h182.648V124.311z"  ></path></symbol></svg>',
    l = (t = document.getElementsByTagName("script"))[
      t.length - 1
    ].getAttribute("data-injectcss");
  if (l && !e.__iconfont__svg__cssinject__) {
    e.__iconfont__svg__cssinject__ = !0;
    try {
      document.write(
        "<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>"
      );
    } catch (e) {
      console && console.log(e);
    }
  }
  function h() {
    d || ((d = !0), i());
  }
  (n = function () {
    var e,
      t,
      n,
      o,
      i,
      c = document.createElement("div");
    (c.innerHTML = a),
      (a = null),
      (e = c.getElementsByTagName("svg")[0]) &&
        (e.setAttribute("aria-hidden", "true"),
        (e.style.position = "absolute"),
        (e.style.width = 0),
        (e.style.height = 0),
        (e.style.overflow = "hidden"),
        (t = e),
        (n = document.body).firstChild
          ? ((o = t), (i = n.firstChild).parentNode.insertBefore(o, i))
          : n.appendChild(t));
  }),
    document.addEventListener
      ? ~["complete", "loaded", "interactive"].indexOf(document.readyState)
        ? setTimeout(n, 0)
        : ((o = function () {
            document.removeEventListener("DOMContentLoaded", o, !1), n();
          }),
          document.addEventListener("DOMContentLoaded", o, !1))
      : document.attachEvent &&
        ((i = n),
        (c = e.document),
        (d = !1),
        (s = function () {
          try {
            c.documentElement.doScroll("left");
          } catch (e) {
            return void setTimeout(s, 50);
          }
          h();
        })(),
        (c.onreadystatechange = function () {
          "complete" == c.readyState && ((c.onreadystatechange = null), h());
        }));
})(window);
