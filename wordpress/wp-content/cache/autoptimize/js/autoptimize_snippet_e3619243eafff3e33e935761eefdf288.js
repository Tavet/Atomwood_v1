!function(a){woodmartThemeModule.$document.on("wdShopPageInit wdBackHistory",function(){woodmartThemeModule.backHistory()}),woodmartThemeModule.backHistory=function(){a(".wd-back-btn > a").on("click",function(b){b.preventDefault(),history.go(-1),setTimeout(function(){a(".filters-area").removeClass("filters-opened").stop().hide(),woodmartThemeModule.$window.width()<=1024&&a(".wd-nav-product-cat").removeClass("categories-opened").stop().hide(),woodmartThemeModule.$document.trigger("wdBackHistory")},20)})},a(document).ready(function(){woodmartThemeModule.backHistory()})}(jQuery);