import { evaluate } from 'mathjs';

$( document ).on('turbolinks:load', function() {
  $('.answer-option').on("click", function () {
    const question = $(this).data('question');
    const answer = $(this).data('answer');
    const orderFirst = $(this).data('orderfirst');
    const orderSecond = $(this).data('ordersecond');
    status = evaluate(orderFirst.formula.replace(`${question.variable}` , `${answer.value}`));
    const clickStatus = $(`.order-msg[data-source=${question.id}]`).text().length;
    if( clickStatus.toString() === '0' ){
      $(`.order-msg[data-source=${question.id}]`).show();
      status === 'true' ? $(`.order-msg[data-source=${question.id}]`).append(`${orderFirst.name}`) : $(`.order-msg[data-source=${question.id}]`).append(`${orderSecond.name}`);
      status === 'true' ? $(`.order-msg[data-source=${question.id}]`).addClass('alert-success') : $(`.order-msg[data-source=${question.id}]`).addClass('alert-danger');
    }
    else $(this).attr('disabled', true);
  });
});