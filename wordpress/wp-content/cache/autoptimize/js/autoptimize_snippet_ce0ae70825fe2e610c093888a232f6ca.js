!function(a){woodmartThemeModule.scrollTop=function(){var b=a(".scrollToTop");woodmartThemeModule.$window.on("scroll",function(){a(this).scrollTop()>100?b.addClass("button-show"):b.removeClass("button-show")}),b.on("click",function(){return a("html, body").animate({scrollTop:0},800),!1})},a(document).ready(function(){woodmartThemeModule.scrollTop()})}(jQuery);