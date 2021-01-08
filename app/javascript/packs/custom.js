
$( document ).on('turbolinks:load', function() {

  $('.myClass').on("click",function(){
    var inputValue = $(this).attr("value");
    var targetBox = $("." + inputValue);
    // $(".name-" + inputValue).not(targetBox).hide();
    $(targetBox).toggle();
  });

  //   $('.myClass').on("click",function(){
  //   console.log('hey');
  //   // var inputValue = $(this).attr("value");
  //   // var targetBox = $("." + inputValue);
  //   // // $(".name-" + inputValue).not(targetBox).hide();
  //   // $(targetBox).toggle();
  // });

});