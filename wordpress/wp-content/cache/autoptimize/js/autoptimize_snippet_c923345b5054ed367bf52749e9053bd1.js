!function(a){woodmartThemeModule.$document.on("wdFiltersOpened wdShopPageInit wdPjaxStart",function(){woodmartThemeModule.shopLoader()}),woodmartThemeModule.shopLoader=function(){var b=function(){var b=a('.products[data-source="main_loop"], .wd-portfolio-holder[data-source="main_loop"]'),c=b.parent().find(".wd-sticky-loader");if(!(b.length<1)){var d=woodmartThemeModule.$window.height()/2,e=woodmartThemeModule.$window.scrollTop(),f=b.offset().top-d+45,g=b.height(),h=f+g-170;e<f?(c.addClass("wd-position-top"),c.removeClass("wd-position-stick")):e>h?(c.addClass("wd-position-bottom"),c.removeClass("wd-position-stick")):(c.addClass("wd-position-stick"),c.removeClass("wd-position-top wd-position-bottom"))}};woodmartThemeModule.$window.off("scroll.loaderVerticalPosition"),woodmartThemeModule.$window.on("scroll.loaderVerticalPosition",b)},a(document).ready(function(){woodmartThemeModule.shopLoader()})}(jQuery);