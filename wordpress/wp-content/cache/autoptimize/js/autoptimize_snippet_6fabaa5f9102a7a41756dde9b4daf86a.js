!function(a){woodmartThemeModule.product360Button=function(){void 0!==a.fn.magnificPopup&&a(".product-360-button a").magnificPopup({type:"inline",mainClass:"mfp-fade",preloader:!1,tClose:woodmart_settings.close,tLoading:woodmart_settings.loading,fixedContentPos:!1,removalDelay:500,callbacks:{beforeOpen:function(){this.st.mainClass="mfp-move-horizontal"},open:function(){woodmartThemeModule.$window.trigger("resize")}}})},a(document).ready(function(){woodmartThemeModule.product360Button()})}(jQuery);