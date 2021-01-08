
$( document ).on('turbolinks:load', function() {
  $('.answer-option').on("click", function () {
    const questionId = $(this).data('question');
    $(`.order-msg[data-source=${questionId}]`).show();
  });
});