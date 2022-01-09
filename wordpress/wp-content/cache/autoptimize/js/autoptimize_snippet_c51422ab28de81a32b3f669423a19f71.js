var woodmartThemeModule={};!function(a){woodmartThemeModule.supports_html5_storage=!1;try{woodmartThemeModule.supports_html5_storage="sessionStorage"in window&&null!==window.sessionStorage,window.sessionStorage.setItem("wd","test"),window.sessionStorage.removeItem("wd")}catch(b){woodmartThemeModule.supports_html5_storage=!1}woodmartThemeModule.$window=a(window),woodmartThemeModule.$document=a(document),woodmartThemeModule.$body=a("body"),woodmartThemeModule.windowWidth=woodmartThemeModule.$window.width(),woodmartThemeModule.removeURLParameter=function(a,b){var c=a.split("?");if(c.length>=2){for(var d=encodeURIComponent(b)+"=",e=c[1].split(/[&;]/g),f=e.length;f-- >0;)-1!==e[f].lastIndexOf(d,0)&&e.splice(f,1);return c[0]+(e.length>0?"?"+e.join("&"):"")}return a},woodmartThemeModule.removeDuplicatedStylesFromHTML=function(b,c){var d=a('<div class="temp-wrapper"></div>').append(b),e=d.find("link"),f=0,g=!1;if(0===e.length||"yes"===woodmart_settings.combined_css)return void c(b);setTimeout(function(){f<=e.length&&!g&&(c(a(d.html())),g=!0)},500),e.each(function(){var b=a(this),h=b.attr("id"),i=b.attr("href");b.remove(),void 0===woodmart_page_css[h]?a("head").append(b.on("load",function(){f++,woodmart_page_css[h]=i,f>=e.length&&!g&&(c(a(d.html())),g=!0)})):++f>=e.length&&!g&&(c(a(d.html())),g=!0)})},woodmartThemeModule.debounce=function(a,b,c){var d;return function(){var e=this,f=arguments,g=function(){d=null,c||a.apply(e,f)},h=c&&!d;clearTimeout(d),d=setTimeout(g,b),h&&a.apply(e,f)}},woodmartThemeModule.wdElementorAddAction=function(a,b){woodmartThemeModule.$window.on("elementor/frontend/init",function(){elementorFrontend.isEditMode()&&elementorFrontend.hooks.addAction(a,b)})},woodmartThemeModule.wdElementorAddAction("frontend/element_ready/section",function(a){a.removeClass("wd-animated"),a.data("wd-waypoint",""),a.removeClass("wd-anim-ready"),woodmartThemeModule.$document.trigger("wdElementorSectionReady")}),woodmartThemeModule.wdElementorAddAction("frontend/element_ready/global",function(a){a.attr("style")&&0===a.attr("style").indexOf("transform:translate3d")&&!a.hasClass("wd-parallax-on-scroll")&&a.attr("style",""),a.removeClass("wd-animated"),a.data("wd-waypoint",""),a.removeClass("wd-anim-ready"),woodmartThemeModule.$document.trigger("wdElementorGlobalReady")}),woodmartThemeModule.wdElementorAddAction("frontend/element_ready/column",function(a){a.attr("style")&&0===a.attr("style").indexOf("transform:translate3d")&&!a.hasClass("wd-parallax-on-scroll")&&a.attr("style",""),a.removeClass("wd-animated"),a.data("wd-waypoint",""),a.removeClass("wd-anim-ready"),setTimeout(function(){woodmartThemeModule.$document.trigger("wdElementorColumnReady")},100)}),woodmartThemeModule.ajaxLinks=woodmart_settings.ajax_links,woodmartThemeModule.shopLoadMoreBtn=".wd-products-load-more.load-on-scroll",woodmartThemeModule.mainCarouselArg={rtl:woodmartThemeModule.$body.hasClass("rtl"),items:"centered"===woodmart_settings.product_gallery.thumbs_slider.position?2:1,autoplay:woodmart_settings.product_slider_autoplay,autoplayTimeout:3e3,loop:woodmart_settings.product_slider_autoplay,center:"centered"===woodmart_settings.product_gallery.thumbs_slider.position,startPosition:"centered"===woodmart_settings.product_gallery.thumbs_slider.position?woodmart_settings.centered_gallery_start:0,dots:!1,nav:!0,autoHeight:"yes"===woodmart_settings.product_slider_auto_height,navText:!1,navClass:["owl-prev wd-btn-arrow","owl-next wd-btn-arrow"]},woodmartThemeModule.$window.on("elementor/frontend/init",function(){elementorFrontend.isEditMode()&&"enabled"===woodmart_settings.elementor_no_gap&&(elementorFrontend.hooks.addAction("frontend/element_ready/section",function(a){var b=a.data("model-cid");if(void 0!==elementorFrontend.config.elements.data[b]){elementorFrontend.config.elements.data[b].attributes.content_width.size||a.addClass("wd-negative-gap")}}),elementor.channels.editor.on("change:section",function(b){var c=b.elementSettingsModel.changed;if(void 0!==c.content_width){var d=b._parent.model.id,e=a(".elementor-element-"+d);c.content_width.size?e.removeClass("wd-negative-gap"):e.addClass("wd-negative-gap")}}))}),woodmartThemeModule.$window.on("load",function(){a(".wd-preloader").delay(parseInt(woodmart_settings.preloader_delay)).addClass("preloader-hide"),a(".wd-preloader-style").remove(),setTimeout(function(){a(".wd-preloader").remove()},200)}),"yes"===woodmart_settings.update_fragments_fix&&(a(document).ready(function(){woodmartThemeModule.$body.on("added_to_cart removed_from_cart",function(b,c){c&&a.each(c,function(b,c){a(b.replace("_wd","")).replaceWith(c)})})}),"undefined"!=typeof wc_cart_fragments_params&&woodmartThemeModule.$body.on("wc_fragments_refreshed wc_fragments_lowaded",function(){var b=JSON.parse(sessionStorage.getItem(wc_cart_fragments_params.fragment_name));b&&a.each(b,function(b,c){a(b.replace("_wd","")).replaceWith(c)})}))}(jQuery),window.onload=function(){var a=["keydown","scroll","mouseover","touchmove","touchstart","mousedown","mousemove"],b=function(a){jQuery(window).trigger("wdEventStarted"),c()},c=function(){a.forEach(function(a){window.removeEventListener(a,b)})},d=function(a){window.addEventListener(a,b)};a.forEach(function(a){d(a)})};