!function(a){a.each(["frontend/element_ready/wd_products.default","frontend/element_ready/wd_products_tabs.default"],function(a,b){woodmartThemeModule.wdElementorAddAction(b,function(){woodmartThemeModule.quickViewInit()})}),woodmartThemeModule.$document.on("wdReplaceMainGallery",function(){woodmartThemeModule.quickViewCarousel()}),woodmartThemeModule.quickViewInit=function(){woodmartThemeModule.$document.on("click",".open-quick-view",function(b){if(b.preventDefault(),a(".open-quick-view").hasClass("loading"))return!0;var c=a(this),d=c.data("id"),e=c.data("loop-name"),f=c.data("loop"),g="",h="",i=a(".quick-view").find('[data-loop-name="'+e+'"]');c.addClass("loading"),void 0!==i[f-1]&&(g=i.eq(f-1).addClass("quick-view-prev"),g=a("<div>").append(g.clone()).html()),void 0!==i[f+1]&&(h=i.eq(f+1).addClass("quick-view-next"),h=a("<div>").append(h.clone()).html()),woodmartThemeModule.quickViewLoad(d,c,g,h)})},woodmartThemeModule.quickViewCarousel=function(){if(void 0!==a.fn.owlCarousel){var b=a(".product-quick-view .woocommerce-product-gallery__wrapper");b.trigger("destroy.owl.carousel"),b.addClass("owl-carousel").owlCarousel({rtl:woodmartThemeModule.$body.hasClass("rtl"),items:1,dots:!1,nav:!0,navText:!1,navClass:["owl-prev wd-btn-arrow","owl-next wd-btn-arrow"]})}},woodmartThemeModule.quickViewLoad=function(b,c){var d={id:b,action:"woodmart_quick_view"},e=function(b){var c=a(b);a.magnificPopup.open({items:{src:c,type:"inline"},tClose:woodmart_settings.close,tLoading:woodmart_settings.loading,removalDelay:500,callbacks:{beforeOpen:function(){this.st.mainClass="mfp-move-horizontal quick-view-wrapper"},open:function(){var b=a(".variations_form");b.each(function(){a(this).wc_variation_form().find(".variations select:eq(0)").change()}),b.trigger("wc_variation_form"),woodmartThemeModule.$body.trigger("woodmart-quick-view-displayed"),woodmartThemeModule.$document.trigger("wdQuickViewOpen"),setTimeout(function(){woodmartThemeModule.$document.trigger("wdQuickViewOpen300")},300),woodmartThemeModule.quickViewCarousel()}}})};a.ajax({url:woodmart_settings.ajaxurl,data:d,method:"get",success:function(b){woodmartThemeModule.removeDuplicatedStylesFromHTML(b,function(b){woodmart_settings.quickview_in_popup_fix?(a.magnificPopup.close(),setTimeout(function(){e(b)},500)):e(b)})},complete:function(){c.removeClass("loading")}})},a(document).ready(function(){woodmartThemeModule.quickViewInit(),woodmartThemeModule.quickViewCarousel()})}(jQuery);