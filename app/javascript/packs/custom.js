import { evaluate } from 'mathjs';

$( document ).on('turbolinks:load', function() {
  $('.answer-option').on("click", function () {
    const question = $(this).data('question');
    const answer = $(this).data('answer');
    const order = $(this).data('order');
    status = evaluate(order.formula.replace(`${question.variable}` , `${answer.value}`));
    const clickStatus = $(`.order-msg[data-source=${question.id}]`).text().length;
    if(clickStatus.toString() === '0' ){
      $(`.order-msg[data-source=${question.id}]`).show();
      $(`.order-msg[data-source=${question.id}]`).append(`${order.name}`);
      status === 'true' ? $(`.order-msg[data-source=${question.id}]`).addClass('alert-success') : $(`.order-msg[data-source=${question.id}]`).addClass('alert-danger');
    }
  });
});