
(function($){
   $.noConflict();

   console.log("1");
    // tab
    console.log("2");
    console.log($('.first_menu'));
    $('.first_menu').hover(function(){
        console.log("2");
        var index = $('.first_menu').index($(this));
        $('.head_list_back').eq(index).show().addClass("show");
    },function(){
        var index = $('.first_menu').index($(this));
        $('.head_list_back').eq(index).hide().removeClass("show");
    })


   //注册页面
    $(".right .login_sub").click(function () {
        console.log("2");
        $("#registerImately").show();
    })
    
   $(".ng-scope .cancel .cancel1 .main100").click(function(){
            $(".registerImately").hide();
   })

   //登录页面
//    $(".left .login_sub").click(function(){
//     console.log("3");
//        $(".ng-scope .baison-base").css("display","block");
//    })
//    $(".left .login_sub").click(function(){
//          $(".ng-scope .baison-base").css("display","none");
//          $(".ng-scope .baison-base").hide();
//    })
   
   //登录页面
   $(".left .login_sub").click(function () {
    console.log("2");
    $(".registerImately").show();
})

    $(".ng-scope .cancel .cancel1 .main100").click(function(){
            $(".registerImately").hide();
    })



})(jQuery);
