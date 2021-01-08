
$( document ).on('turbolinks:load', function() {
    $('.myClass').on("click",function(){
      let id = $('.order-msg').data('source');
      var targetBox = $("." + id);
      $("." + id).show();
    });
  // $('.myClass').on("click",function(){
    //   $(".order-msg").show();
    // });

  // // $('.myClass').on("click",function(){
  //   //   var inputValue = $(this).attr("value");
  //   //   var targetBox = $("." + inputValue);
  //   //   $(".name-" + inputValue).not(targetBox).hide();
  //   //   $(targetBox).toggle();
  //   // });

  //   $('.myClass').on("change",function(e){
  //     // console.log('target', e.target);
  //     let inputValue = $(this).attr("value");
  //     let targetBox = $("." + inputValue);
  //     $(targetBox).toggle();
  //     hidethediv(e.target);
  //   });
  // // $('.myClass').on("deselect",function(){
  //   //   var inputValue = $(this).attr("value");
  //   //   var targetBox = $("." + inputValue);
  // //   // $(".name-" + inputValue).not(targetBox).hide();
  // //   $(targetBox).toggle();
  // // });
  // function hidethediv(e) {
  //   if($('.myClass').css('display') === 'none' && e != $('.order-msg') )
  //   {
  //     $('.order-msg').toggleClass("d-none");
  //     // $('.order-msg').toggleClass("d-none");
  //   }else{
  //     console.log($('.order-msg').attr('name'));
  //   }
  // }
});