$(document).ready(function() {
  $('.rec-check').click(function () {
    $(this).parent().parent().parent().toggleClass('checked');
  })
  $('.todo-item').dblclick(function () {
    $(this).parent().parent().parent().addClass('editing');
    $(this).siblings('.todo-edit')[0].addClass('display');
  })
})
