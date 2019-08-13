function smallWindow() {
    return jQuery("#ToggleMenu").is(":visible")
}

function initDropdownCart() {
    jQuery("#items-count").is(":empty") && jQuery("#items-count").text("(0)")
}

function initBrandSlider() {
    jQuery(".BrandSlider").length > 0 && $(".BrandSlider").owlCarousel({
        navigation: !0,
        navigationText: !1,
        pagination: !1,
        nav: !0,
        items: 5,
        itemsDesktop: [1199, 5],
        itemsDesktopSmall: [979, 4],
        itemsTablet: [768, 3],
        itemsTabletSmall: [540, 2],
        itemsMobile: [360, 1]
    })
}

function fixMegaMenuOverflow() {
    function e(e, n) {
        var t = n.offset().left + n.outerWidth() - (e.offset().left + e.outerWidth()),
            i = e.offset().left + t - n.offset().left;
        0 > i && (t -= i), 0 > t && e.css("left", t + "px")
    }
    jQuery(".side-menu > .sf-menu > .menu-parent > .menu-container-level-1").parent().hover(function() {
        var n = jQuery(this).children("ul.menu-container-level-1");
        jQuery(this).hasClass("menu-parent") && n.css("left", 0);
        var t = jQuery(this).parents(".side-menu").first();
        e(n, t)
    }, function() {
        jQuery(this).children("ul.menu-container-level-1").css("display", "none"), jQuery(this).children("ul.menu-container-level-1").css("visibility", "hidden"), jQuery(this).children("ul.menu-container-level-1").css("left", "")
    })
}

function initSideBarCat() {
    var e = jQuery(".side-menu").eq(2).find("> ul");
    e.removeClass("category-list"), e.removeClass("sf-menu"), e.find("li").unbind().has("ul").addClass("dropdown"), e.find("li.dropdown > a").after("<span class='toogleClick'>+</span>"), e.find("li ul").removeAttr("style").addClass("dropdown-menu");
    var n = e.find('a[href$="' + location.pathname + '"]');
    n.length > 0 && (n.addClass("active"), n.parents("ul.dropdown-menu").show(), n.parents("li.dropdown").addClass("ActivetoogleClick")), jQuery("span.toogleClick").click(function() {
        "+" == jQuery(this).text() ? (jQuery(this).parent().parent().find(" li ul.dropdown-menu").slideUp("slow"), jQuery(this).parent().parent().find(" li span.toogleClick").text("+"), jQuery(".ActivetoogleClick").removeClass("ActivetoogleClick"), jQuery(this).parent("li").children("ul.dropdown-menu").is(":animated") || (jQuery(this).parent("li").children("ul.dropdown-menu").find("span").removeClass("ClosetoogleClick"), jQuery(this).parent("li").children("ul.dropdown-menu").slideDown("slow"), jQuery(this).text("-"), jQuery(this).parent().addClass("ActivetoogleClick"))) : "-" == jQuery(this).text() && (jQuery(this).parent().parent().find(" li ul.dropdown-menu").is(":animated") || (jQuery(".sf-horizontal li").removeClass("ActivetoogleClick"), jQuery(".sf-horizontal li > a").removeClass("ClosetoogleClick"), jQuery(this).parent("li").removeClass("ActivetoogleClick").find("span").removeClass("ClosetoogleClick"), jQuery(this).parent().parent().find(" li ul.dropdown-menu").find("span").removeClass("ClosetoogleClick"), jQuery(this).parent().parent().find(" li ul.dropdown-menu").slideUp("slow"), jQuery(this).text("+")))
    })
}

function initDefineCurrency() {
    jQuery(".page").addClass(jQuery(".ChooseCurrencyBox").length > 0 ? "HL-HasCurrency" : "HL-NoCurrency")
}
jQuery(document).ready(function() {
    function e() {
        var e = navigator.userAgent.toLowerCase(),
            n = /iphone|android|ipod|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec/i.test(e);
        return n
    }
    if (jQuery(".ProductList > *").each(function() {
            jQuery(this).find(".RetailPriceValue").length > 0 && (jQuery(this).addClass("sale-label"), 0 == jQuery(this).find(".saleItem").length && jQuery(this).append('<span class="saleItem"><strong>Sale</strong></span>'))
        }), "ontouchstart" in window && jQuery(".ProductList > *").on("hover", function() {
            jQuery(this).find("*").on("touchstart", function() {
                jQuery(this).trigger("click")
            })
        }), jQuery(".ProductThumbImage").length > 0 && e() && (jQuery(".ProductThumbImage a").attr("onclick", "").attr("href", "javascript:void(0)"), jQuery(".ProductTinyImageList li").attr("onclick", "").on("touchstart", function() {
            jQuery(this).trigger("hover")
        })), jQuery("#CategoryBreadcrumb").length > 0) {
        var n = jQuery("#CategoryBreadcrumb ul li:eq(1)").text();
        jQuery("#SideCategoryList ul > li > a").each(function() {
            (jQuery(this).text() == n || jQuery(this).text() == n + " »") && jQuery(this).parent().addClass("active")
        })
    }
}), jQuery(window).scroll(function() {
    jQuery(this).scrollTop() > 100 ? jQuery("#back-top").fadeIn() : jQuery("#back-top").fadeOut()
}), jQuery(window).load(function() {
    jQuery("#back-top a").click(function() {
        return jQuery("body,html").animate({
            scrollTop: 0
        }, 800), !1
    })
}), jQuery(document).ready(function() {
    jQuery(".side-menu > ul.sf-menu > li").has("ul").addClass("menu-parent"), jQuery(".side-menu > ul.sf-menu > li").children("ul").addClass("menu-container-level-1")
}), jQuery(window).load(function() {
    fixMegaMenuOverflow()
}), jQuery(window).scroll(function() {
    var e = jQuery(this).scrollTop(),
        n = jQuery(".header").outerHeight() - jQuery(".PageMenu").outerHeight();
    e > n ? jQuery(".header").addClass("on") : jQuery(".header").removeClass("on")
}), jQuery(document).ready(function() {
    initBrandSlider(), initSideBarCat(), initDropdownCart(), initDefineCurrency()
}), jQuery(window).resize(function() {
    initDropdownCart()
});

jQuery(document).ready(function() {
	jQuery('.toogleClick').click(function (){
		if(jQuery(this).parent().parent().is('ul')) {
			jQuery(this).parent().removeClass("active");
		} 
		if(jQuery(this).parent().parent().parent().parent().is('ul')) {
			jQuery(this).parent().parent().parent().addClass("active");
		}
	});
});