!function(a){woodmartThemeModule.$document.on("wdProductsTabsLoaded",function(){woodmartThemeModule.productsLoadMore()}),a.each(["frontend/element_ready/wd_products.default","frontend/element_ready/wd_products_tabs.default"],function(a,b){woodmartThemeModule.wdElementorAddAction(b,function(){woodmartThemeModule.productsLoadMore()})}),woodmartThemeModule.productsLoadMore=function(){var b,c=!1;a(".wd-products-element").each(function(){function e(){q=woodmartThemeModule.$window.height()/2,r=woodmartThemeModule.$window.outerWidth(!0),o=f.outerWidth(!0),i=woodmartThemeModule.$window.scrollTop(),j=f.offset().top-q,k=f.offset().left-x,l=o+f.offset().left+x-v.outerWidth(),p=u.outerHeight(),n=f.height()-p,m=j+n,woodmartThemeModule.$window.width()<=1024&&(k+=35,l-=35),u.css({left:k+"px"}),v.css({left:l+"px"}),i<j||i>m?(t.removeClass("show-arrow"),w.addClass("hidden-loader")):(t.addClass("show-arrow"),w.removeClass("hidden-loader"))}var f=a(this),g=[],h=f.find(".wd-products-holder");if(h.hasClass("pagination-arrows")){g[1]={items:h.html(),status:"have-posts"};var i,j,k,l,m,n,o,p,q,r,s=woodmartThemeModule.$body,t=f.find(".products-footer"),u=t.find(".wd-products-load-prev"),v=t.find(".wd-products-load-next"),w=f.find(".wd-products-loader"),x=50;s.hasClass("rtl")&&(u=v,v=t.find(".wd-products-load-prev")),woodmartThemeModule.$window.on("scroll",function(){e()}),setTimeout(function(){e()},500),f.find(".wd-products-load-prev, .wd-products-load-next").on("click",function(e){e.preventDefault();var f=a(this);if(!c&&!f.hasClass("disabled")){c=!0,clearInterval(b);var h=f.parent().parent().prev(),i=f.parent().find(".wd-products-load-next"),j=f.parent().find(".wd-products-load-prev"),k=h.data("atts"),l="woodmart_get_products_shortcode",m=woodmart_settings.ajaxurl,n="json",o="POST",p=h.attr("data-paged");if(p++,f.hasClass("wd-products-load-prev")){if(p<2)return;p-=2}d("arrows",k,m,l,n,o,p,h,f,g,function(c){var d=h.hasClass("products-bordered-grid");if(d||h.addClass("wd-animated-products"),c.items.length&&(h.html(c.items).attr("data-paged",p),h.imagesLoaded().progress(function(){h.parent().trigger("recalc")}),woodmartThemeModule.$document.trigger("wood-images-loaded"),woodmartThemeModule.$document.trigger("wdArrowsLoadProducts")),woodmartThemeModule.$window.width()<768&&a("html, body").stop().animate({scrollTop:h.offset().top-150},400),!d){var e=0;b=setInterval(function(){h.find(".product-grid-item").eq(e).addClass("wd-animated"),e++},100)}p>1?j.removeClass("disabled"):j.addClass("disabled"),"no-more-posts"===c.status?i.addClass("disabled"):i.removeClass("disabled")})}})}}),woodmartThemeModule.clickOnScrollButton(woodmartThemeModule.shopLoadMoreBtn,!1,woodmart_settings.infinit_scroll_offset),woodmartThemeModule.$document.off("click",".wd-products-load-more").on("click",".wd-products-load-more",function(b){if(b.preventDefault(),!c){c=!0;var f=a(this),g=f.parent().siblings(".wd-products-holder"),h=g.data("source"),i="woodmart_get_products_"+h,j=woodmart_settings.ajaxurl,k="POST",l=g.data("atts"),m=g.data("paged");m++,"main_loop"===h&&(j=a(this).attr("href"),k="GET"),d("load-more",l,j,i,"json",k,m,g,f,[],function(a){a.items.length&&(g.hasClass("grid-masonry")?e(g,a.items):g.append(a.items),"no-more-posts"!==a.status&&g.imagesLoaded().progress(function(){woodmartThemeModule.clickOnScrollButton(woodmartThemeModule.shopLoadMoreBtn,!0,woodmart_settings.infinit_scroll_offset)}),woodmartThemeModule.$document.trigger("wood-images-loaded"),woodmartThemeModule.$document.trigger("wdLoadMoreLoadProducts"),g.data("paged",m)),"main_loop"===h&&(f.attr("href",a.nextPage),"no-more-posts"===a.status&&f.hide().remove()),"no-more-posts"===a.status&&f.hide()})}});var d=function(b,d,e,f,g,h,i,j,k,l,m){var n={atts:d,paged:i,action:f,woo_ajax:1};if("GET"===h&&(e=woodmartThemeModule.removeURLParameter(e,"loop"),e=woodmartThemeModule.removeURLParameter(e,"woo_ajax")),l[i])return j.addClass("loading"),void setTimeout(function(){m(l[i]),j.removeClass("loading"),c=!1},300);if("arrows"===b&&j.addClass("loading").parent().addClass("element-loading"),k.addClass("loading"),"woodmart_get_products_main_loop"===f){n={loop:j.find(".product").last().data("loop"),woo_ajax:1}}a.ajax({url:e,data:n,dataType:g,method:h,success:function(a){woodmartThemeModule.removeDuplicatedStylesFromHTML(a.items,function(b){a.items=b,l[i]=a,m(a),"yes"===woodmart_settings.load_more_button_page_url&&window.history.pushState("","",a.currentPage)})},error:function(){console.log("ajax error")},complete:function(){"arrows"===b&&j.removeClass("loading").parent().removeClass("element-loading"),k.removeClass("loading"),c=!1}})},e=function(b,c){var d=a(c);b.append(d).isotope("appended",d),b.imagesLoaded().progress(function(){b.isotope("layout")})}},a(document).ready(function(){woodmartThemeModule.productsLoadMore()})}(jQuery);