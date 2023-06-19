window._iconfont_svg_string_4092399 = '<svg><symbol id="icon-kongxinduigou" viewBox="0 0 1024 1024"><path d="M512 992C246.912 992 32 777.088 32 512 32 246.912 246.912 32 512 32c265.088 0 480 214.912 480 480 0 265.088-214.912 480-480 480z m0-64c229.76 0 416-186.24 416-416S741.76 96 512 96 96 282.24 96 512s186.24 416 416 416z m187.168-608L768 390.528 432.128 718.4 256 550.176l68.064-71.296 107.328 102.464L699.168 320z"  ></path></symbol></svg>',
    function(n) {
        var t = (t = document.getElementsByTagName("script"))[t.length - 1],
            e = t.getAttribute("data-injectcss"),
            t = t.getAttribute("data-disable-injectsvg");
        if (!t) {
            var o, i, c, d, s, a = function(t, e) { e.parentNode.insertBefore(t, e) };
            if (e && !n.__iconfont__svg__cssinject__) { n.__iconfont__svg__cssinject__ = !0; try { document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>") } catch (t) { console && console.log(t) } }
            o = function() {
                var t, e = document.createElement("div");
                e.innerHTML = n._iconfont_svg_string_4092399, (e = e.getElementsByTagName("svg")[0]) && (e.setAttribute("aria-hidden", "true"), e.style.position = "absolute", e.style.width = 0, e.style.height = 0, e.style.overflow = "hidden", e = e, (t = document.body).firstChild ? a(e, t.firstChild) : t.appendChild(e))
            }, document.addEventListener ? ~["complete", "loaded", "interactive"].indexOf(document.readyState) ? setTimeout(o, 0) : (i = function() { document.removeEventListener("DOMContentLoaded", i, !1), o() }, document.addEventListener("DOMContentLoaded", i, !1)) : document.attachEvent && (c = o, d = n.document, s = !1, r(), d.onreadystatechange = function() { "complete" == d.readyState && (d.onreadystatechange = null, l()) })
        }

        function l() { s || (s = !0, c()) }

        function r() {
            try { d.documentElement.doScroll("left") } catch (t) { return void setTimeout(r, 50) }
            l()
        }
    }(window);