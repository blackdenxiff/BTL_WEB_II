function slideEffectAjax() {
	var a = $(window).width();
	a > 960 ? ($(".top-cart-contain").mouseenter(function() {
		$(this).find(".top-cart-content").stop(!0, !0).slideDown()
	}), $(".top-cart-contain").mouseleave(function() {
		$(this).find(".top-cart-content").stop(!0, !0).slideUp()
	})) : $(".top-cart-contain").click(function() {
		$(this).find(".top-cart-content").toggle(300)
	})
}
jQuery(document).ready(function() {
	"use strict";
	
	var a = $(window).width();
	if(a > 767){
		var fh = $('.container-footer').height();
		if(a < 992){
			var f = $('.container-footer .col-md-3.col-sm-12.col-xs-12.col-lg-3').height();
			$('.col-footer-border').css('height',fh-f);
		}else{
			$('.col-footer-border').css('height',fh);
		}
	}
	
	
	jQuery(".toggle").click(function() {
		return jQuery(".submenu").is(":hidden") ? jQuery(".submenu").slideDown("fast") : jQuery(".submenu").slideUp("fast"), !1
	}), jQuery(".topnav").accordion({
		accordion: !1,
		speed: 300,
		closedSign: "+",
		openedSign: "-"
	}), $("#nav > li").hover(function() {
		var a = $(this).find(".level0-wrapper");
		a.hide(), a.css("left", "0"), a.stop(!0, !0).delay(150).fadeIn(300, "easeOutCubic")
	}, function() {
		$(this).find(".level0-wrapper").stop(!0, !0).delay(300).fadeOut(300, "easeInCubic")
	});
	jQuery("#nav li.level0.drop-menu").mouseover(function() {
		return jQuery(window).width() >= 740 && jQuery(this).children("ul.level1").fadeIn(100), !1
	}).mouseleave(function() {
		return jQuery(window).width() >= 740 && jQuery(this).children("ul.level1").fadeOut(100), !1
	}), jQuery("#nav li.level0.drop-menu li").mouseover(function() {
		if (jQuery(window).width() >= 740) {
			jQuery(this).children("ul").css({
				top: 0,
				left: "165px"
			});
			var a = jQuery(this).offset();
			a && jQuery(window).width() < a.left + 325 ? (jQuery(this).children("ul").removeClass("right-sub"), jQuery(this).children("ul").addClass("left-sub"), jQuery(this).children("ul").css({
				top: 0,
				left: "-167px"
			})) : (jQuery(this).children("ul").removeClass("left-sub"), jQuery(this).children("ul").addClass("right-sub")), jQuery(this).children("ul").fadeIn(100)
		}
	}).mouseleave(function() {
		jQuery(window).width() >= 740 && jQuery(this).children("ul").fadeOut(100)
	}), jQuery("#best-seller-slider .slider-items").owlCarousel({
		items: 4,
		itemsDesktop: [1024, 4],
		itemsDesktopSmall: [900, 3],
		itemsTablet: [600, 2],
		itemsMobile: [320, 1],
		navigation: !0,
		navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
		slideSpeed: 500,
		pagination: !1
	}), jQuery("#featured-product-slider .slider-items").owlCarousel({
		items: 4,
		itemsDesktop: [1024, 4],
		itemsDesktopSmall: [900, 3],
		itemsTablet: [600, 2],
		itemsMobile: [320, 1],
		navigation: !0,
		navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
		slideSpeed: 500,
		pagination: !1
	}), jQuery("#bag-seller-slider .slider-items").owlCarousel({
		items: 3,
		itemsDesktop: [1024, 3],
		itemsDesktopSmall: [900, 3],
		itemsTablet: [600, 2],
		itemsMobile: [320, 1],
		navigation: !0,
		navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
		slideSpeed: 500,
		pagination: !1
	}), jQuery("#bag-seller-slider1 .slider-items").owlCarousel({
		items: 3,
		itemsDesktop: [1024, 3],
		itemsDesktopSmall: [900, 3],
		itemsTablet: [600, 2],
		itemsMobile: [320, 1],
		navigation: !0,
		navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
		slideSpeed: 500,
		pagination: !1
	}), jQuery("#featured-slider .slider-items").owlCarousel({
		items: 4,
		itemsDesktop: [1024, 4],
		itemsDesktopSmall: [900, 3],
		itemsTablet: [600, 2],
		itemsMobile: [320, 1],
		navigation: !0,
		navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
		slideSpeed: 500,
		pagination: !1
	}), jQuery("#recommend-slider .slider-items").owlCarousel({
		items: 6,
		itemsDesktop: [1024, 4],
		itemsDesktopSmall: [900, 3],
		itemsTablet: [600, 2],
		itemsMobile: [320, 1],
		navigation: !0,
		navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
		slideSpeed: 500,
		pagination: !1
	}), jQuery("#brand-logo-slider .slider-items").owlCarousel({
		autoplay: !0,
		items: 6,
		itemsDesktop: [1024, 4],
		itemsDesktopSmall: [900, 3],
		itemsTablet: [600, 2],
		itemsMobile: [320, 1],
		navigation: !0,
		navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
		slideSpeed: 500,
		pagination: !1
	}), jQuery("#category-desc-slider .slider-items").owlCarousel({
		autoplay: !0,
		items: 1,
		itemsDesktop: [1024, 1],
		itemsDesktopSmall: [900, 1],
		itemsTablet: [600, 1],
		itemsMobile: [320, 1],
		navigation: !0,
		navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
		slideSpeed: 500,
		pagination: !1
	}), jQuery("#more-views-slider .slider-items").owlCarousel({
		autoplay: !0,
		items: 5,
		itemsDesktop: [1024, 4],
		itemsDesktopSmall: [900, 3],
		itemsTablet: [600, 2],
		itemsMobile: [320, 1],
		navigation: !0,
		navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
		slideSpeed: 500,
		pagination: !1
	}), jQuery("#related-products-slider .slider-items").owlCarousel({
		items: 4,
		itemsDesktop: [1024, 4],
		itemsDesktopSmall: [900, 3],
		itemsTablet: [600, 2],
		itemsMobile: [320, 1],
		navigation: !0,
		navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
		slideSpeed: 500,
		pagination: !1
	}), 
		jQuery("#abc-products-slider").owlCarousel({
		items: 6,
		itemsDesktop: [1024,6],
		itemsDesktopSmall: [900,4],
		itemsTablet: [600,3],
		itemsMobile: [320,2],
		navigation: !0,
		navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
		loop:true,
		autoplay: true,
		slideSpeed: 200,
		pagination: !1
	}),
		
		jQuery("#abc-products-sliderdemo").owlCarousel({
		items: 4,
		itemsDesktop: [1024,6],
		itemsDesktopSmall: [900,4],
		itemsTablet: [600,4],
		itemsMobile: [320,4],
		navigation: !0,
		navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
		loop:true,
		autoplay: true,
		slideSpeed: 200,
		pagination: !1
	}),
		
		
		jQuery("#abc-products-slider2").owlCarousel({
		items: 6,
		itemsDesktop: [1024,6],
		itemsDesktopSmall: [900,4],
		itemsTablet: [600,3],
		itemsMobile: [320,2],
		navigation: !0,
		navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
		loop:true,
		autoplay: true,
		slideSpeed: 200,
		pagination: !1
	}),
		
		jQuery("#abc-products-slider2demo").owlCarousel({
		items: 4,
		itemsDesktop: [1024,6],
		itemsDesktopSmall: [900,4],
		itemsTablet: [600,4],
		itemsMobile: [320,4],
		navigation: !0,
		navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
		loop:true,
		autoplay: true,
		slideSpeed: 200,
		pagination: !1
	}),
		
		jQuery("#upsell-products-slider .slider-items").owlCarousel({
		items: 4,
		itemsDesktop: [1024, 4],
		itemsDesktopSmall: [900, 3],
		itemsTablet: [600, 2],
		itemsMobile: [320, 1],
		navigation: !0,
		navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
		slideSpeed: 500,
		pagination: !1
	}), jQuery("#more-views-slider .slider-items").owlCarousel({
		autoplay: !0,
		items: 3,
		itemsDesktop: [1024, 4],
		itemsDesktopSmall: [900, 3],
		itemsTablet: [600, 2],
		itemsMobile: [320, 1],
		navigation: !0,
		navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
		slideSpeed: 500,
		pagination: !1
	}), jQuery("ul.accordion li.parent, ul.accordion li.parents, ul#magicat li.open").each(function() {
		jQuery(this).append('<em class="open-close">&nbsp;</em>')
	}), jQuery("ul.accordion, ul#magicat").accordionNew(), jQuery("ul.accordion li.active, ul#magicat li.active").each(function() {
		jQuery(this).children().next("div").css("display", "block")
	})
}), $(document).ready(function() {
	slideEffectAjax()
});
var isTouchDevice = "ontouchstart" in window || navigator.msMaxTouchPoints > 0;
jQuery(window).on("load", function() {
	isTouchDevice && jQuery("#nav a.level-top").click(function(a) {
		if ($t = jQuery(this), $parent = $t.parent(), $parent.hasClass("parent")) {
			if (!$t.hasClass("menu-ready")) return jQuery("#nav a.level-top").removeClass("menu-ready"), $t.addClass("menu-ready"), !1;
			$t.removeClass("menu-ready")
		}
	}), jQuery().UItoTop()
}), $(window).scroll(function() {
	$(this).scrollTop() > 1 ? $("nav").addClass("sticky") : $("nav").removeClass("sticky")
}), $(window).scroll(function() {
	$(this).scrollTop() > 1 ? $(".phone-menu").css("display", "block") : $(".phone-menu").css("display", "none")
}),
	function(a) {
	jQuery.fn.UItoTop = function(b) {
		var c = {
			text: "",
			min: 200,
			inDelay: 600,
			outDelay: 400,
			containerID: "toTop",
			containerHoverID: "toTopHover",
			scrollSpeed: 1200,
			easingType: "linear"
		}, d = a.extend(c, b),
			e = "#" + d.containerID,
			f = "#" + d.containerHoverID;
		jQuery("body").append('<a href="#" id="' + d.containerID + '">' + d.text + "</a>"), jQuery(e).hide().click(function() {
			return jQuery("html, body").animate({
				scrollTop: 0
			}, d.scrollSpeed, d.easingType), jQuery("#" + d.containerHoverID, this).stop().animate({
				opacity: 0
			}, d.inDelay, d.easingType), !1
		}).prepend('<span id="' + d.containerHoverID + '"></span>').hover(function() {
			jQuery(f, this).stop().animate({
				opacity: 1
			}, 600, "linear")
		}, function() {
			jQuery(f, this).stop().animate({
				opacity: 0
			}, 700, "linear")
		}), jQuery(window).scroll(function() {
			var b = a(window).scrollTop();
			"undefined" == typeof document.body.style.maxHeight && jQuery(e).css({
				position: "absolute",
				top: a(window).scrollTop() + a(window).height() - 50
			}), b > d.min ? jQuery(e).fadeIn(d.inDelay) : jQuery(e).fadeOut(d.Outdelay)
		})
	}
}(jQuery), jQuery.extend(jQuery.easing, {
	easeInCubic: function(a, b, c, d, e) {
		return d * (b /= e) * b * b + c
	},
	easeOutCubic: function(a, b, c, d, e) {
		return d * ((b = b / e - 1) * b * b + 1) + c
	}
}),
	function(a) {
	a.fn.extend({
		accordion: function() {
			return this.each(function() {})
		}
	})
}(jQuery), jQuery(function(a) {
	a(".accordion").accordion(), a(".accordion").each(function(b) {
		var c = a(this).find("li.active");
		c.each(function(b) {
			a(this).children("ul").css("display", "block"), b == c.length - 1 && a(this).addClass("current")
		})
	})
}),
	function(a) {
	a.fn.extend({
		accordion: function(b) {
			var c = {
				accordion: "true",
				speed: 300,
				closedSign: "[+]",
				openedSign: "[-]"
			}, d = a.extend(c, b),
				e = a(this);
			e.find("li").each(function() {
				0 != a(this).find("ul").size() && (a(this).find("a:first").after("<em>" + d.closedSign + "</em>"), "#" == a(this).find("a:first").attr("href") && a(this).find("a:first").click(function() {
					return !1
				}))
			}), e.find("li em").click(function() {
				0 != a(this).parent().find("ul").size() && (d.accordion && (a(this).parent().find("ul").is(":visible") || (parents = a(this).parent().parents("ul"), visible = e.find("ul:visible"), visible.each(function(b) {
					var c = !0;
					parents.each(function(a) {
						if (parents[a] == visible[b]) return c = !1, !1
							}), c && a(this).parent().find("ul") != visible[b] && a(visible[b]).slideUp(d.speed, function() {
						a(this).parent("li").find("em:first").html(d.closedSign)
					})
				}))), a(this).parent().find("ul:first").is(":visible") ? a(this).parent().find("ul:first").slideUp(d.speed, function() {
					a(this).parent("li").find("em:first").delay(d.speed).html(d.closedSign)
				}) : a(this).parent().find("ul:first").slideDown(d.speed, function() {
					a(this).parent("li").find("em:first").delay(d.speed).html(d.openedSign)
				}))
			})
		}
	})
}(jQuery),
	function(a) {
	a.fn.extend({
		accordionNew: function() {
			return this.each(function() {
				function j(c, i) {
					a(c).parent(h).siblings().removeClass(d).children(f).slideUp(g), a(c).siblings(f)[i || e]("show" == i && g, function() {
						a(c).siblings(f).is(":visible") ? a(c).parents(h).not(b.parents()).addClass(d) : a(c).parent(h).removeClass(d), "show" == i && a(c).parents(h).not(b.parents()).addClass(d), a(c).parents().show()
					})
				}
				var b = a(this),
					c = "accordiated",
					d = "active",
					e = "slideToggle",
					f = "ul, div",
					g = "fast",
					h = "li";
				if (b.data(c)) return !1;
				a.each(b.find("ul, li>div"), function() {
					a(this).data(c, !0), a(this).hide()
				}), a.each(b.find("em.open-close"), function() {
					a(this).click(function(a) {
						j(this, e)
					}), a(this).bind("activate-node", function() {
						b.find(f).not(a(this).parents()).not(a(this).siblings()).slideUp(g), j(this, "slideDown")
					})
				});
				var i = location.hash ? b.find("a[href=" + location.hash + "]")[0] : b.find("li.current a")[0];
				i && j(i, !1)
			})
		}
	})
}(jQuery);