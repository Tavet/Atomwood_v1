!function(a){a.each(["frontend/element_ready/wd_3d_view.default"],function(a,b){woodmartThemeModule.wdElementorAddAction(b,function(){woodmartThemeModule.view3d()})}),woodmartThemeModule.view3d=function(){function b(a){var b=a.data("args");if(!b||a.hasClass("wd-threed-view-inited"))return!1;a.ThreeSixty({totalFrames:b.frames_count,endFrame:b.frames_count,currentFrame:1,imgList:".threed-view-images",progress:".spinner",imgArray:b.images,height:b.height,width:b.width,responsive:!0,navigation:!0,framerate:woodmart_settings.three_sixty_framerate}),a.addClass("wd-threed-view-inited")}a(".wd-threed-view:not(.wd-product-threed)").each(function(){b(a(this))}),a(".product-360-button a").on("click",function(c){c.preventDefault(),b(a(".wd-threed-view.wd-product-threed"))})},a(document).ready(function(){woodmartThemeModule.view3d()})}(jQuery);