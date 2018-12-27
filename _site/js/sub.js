function animateTo(target, offset) {
    $('html,body').animate({
            scrollTop: target.offset().top - offset
        }, 500);
}

! function (a) {
    "use strict";
    var b = function (b, c, d) {
        return this.el = b, this.$el = a(b), this.options = c, this.uuid = this.$el.attr("id") ? this.$el.attr("id") : d, this.state = {}, this.init(), this
    };
    b.prototype = {
        init: function () {
            var b = this;
            b._load(), b.$el.find("ul").each(function (c) {
                var d = a(this);
                d.attr("data-index", c), b.options.save && b.state.hasOwnProperty(c) ? (d.parent().addClass(b.options.openClass), d.show()) : d.parent().hasClass(b.options.openClass) ? (d.show(), b.state[c] = 1) : d.hide()
            });
            var c = a("<span></span>").prepend(b.options.caretHtml),
                d = b.$el.find("li > a");
            b._trigger(c, !1), b._trigger(d, !0), b.$el.find("li:has(ul) > a").prepend(c)
        },
        _trigger: function (b, c) {
            var d = this;
            b.on("click", function (b) {
                b.stopPropagation();
                var e = c ? a(this).next() : a(this).parent().next(),
                    f = !1;
                if (c) {
                    var g = a(this).attr("href");
                    f = void 0 === g || "" === g || "#" === g
                }
                if (e = e.length > 0 ? e : !1, d.options.onClickBefore.call(this, b, e), !c || e && f) b.preventDefault(), d._toggle(e, e.is(":hidden")), d._save();
                else if (d.options.accordion) {
                    var h = d.state = d._parents(a(this));
                    d.$el.find("ul").filter(":visible").each(function () {
                        var b = a(this),
                            c = b.attr("data-index");
                        h.hasOwnProperty(c) || d._toggle(b, !1)
                    }), d._save()
                }
                d.options.onClickAfter.call(this, b, e)
            })
        },
        _toggle: function (b, c) {
            var d = this,
                e = b.attr("data-index"),
                f = b.parent();
            if (d.options.onToggleBefore.call(this, b, c), c) {
                if (f.addClass(d.options.openClass), b.slideDown(d.options.slide), d.state[e] = 1, d.options.accordion) {
                    var g = d.state = d._parents(b);
                    g[e] = d.state[e] = 1, d.$el.find("ul").filter(":visible").each(function () {
                        var b = a(this),
                            c = b.attr("data-index");
                        g.hasOwnProperty(c) || d._toggle(b, !1)
                    })
                }
            } else f.removeClass(d.options.openClass), b.slideUp(d.options.slide), d.state[e] = 0;
            d.options.onToggleAfter.call(this, b, c)
        },
        _parents: function (b, c) {
            var d = {},
                e = b.parent(),
                f = e.parents("ul");
            return f.each(function () {
                var b = a(this),
                    e = b.attr("data-index");
                return e ? void(d[e] = c ? b : 1) : !1
            }), d
        },
        _save: function () {
            if (this.options.save) {
                var b = {};
                for (var d in this.state) 1 === this.state[d] && (b[d] = 1);
                c[this.uuid] = this.state = b, a.cookie(this.options.cookie.name, JSON.stringify(c), this.options.cookie)
            }
        },
        _load: function () {
            if (this.options.save) {
                if (null === c) {
                    var b = a.cookie(this.options.cookie.name);
                    c = b ? JSON.parse(b) : {}
                }
                this.state = c.hasOwnProperty(this.uuid) ? c[this.uuid] : {}
            }
        },
        toggle: function (b) {
            var c = this,
                d = arguments.length;
            if (1 >= d) c.$el.find("ul").each(function () {
                var d = a(this);
                c._toggle(d, b)
            });
            else {
                var e, f = {},
                    g = Array.prototype.slice.call(arguments, 1);
                d--;
                for (var h = 0; d > h; h++) {
                    e = g[h];
                    var i = c.$el.find('ul[data-index="' + e + '"]').first();
                    if (i && (f[e] = i, b)) {
                        var j = c._parents(i, !0);
                        for (var k in j) f.hasOwnProperty(k) || (f[k] = j[k])
                    }
                }
                for (e in f) c._toggle(f[e], b)
            }
            c._save()
        },
        destroy: function () {
            a.removeData(this.$el), this.$el.find("li:has(ul) > a").unbind("click"), this.$el.find("li:has(ul) > a > span").unbind("click")
        }
    }, a.fn.navgoco = function (c) {
        if ("string" == typeof c && "_" !== c.charAt(0) && "init" !== c) var d = !0,
            e = Array.prototype.slice.call(arguments, 1);
        else c = a.extend({}, a.fn.navgoco.defaults, c || {}), a.cookie || (c.save = !1);
        return this.each(function (f) {
            var g = a(this),
                h = g.data("navgoco");
            h || (h = new b(this, d ? a.fn.navgoco.defaults : c, f), g.data("navgoco", h)), d && h[c].apply(h, e)
        })
    };
    var c = null;
    a.fn.navgoco.defaults = {
        caretHtml: "",
        accordion: !1,
        openClass: "open",
        save: !0,
        cookie: {
            name: "navgoco",
            expires: !1,
            path: "/"
        },
        slide: {
            duration: 400,
            easing: "swing"
        },
        onClickBefore: a.noop,
        onClickAfter: a.noop,
        onToggleBefore: a.noop,
        onToggleAfter: a.noop
    }
}(jQuery);
