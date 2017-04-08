$(document).ready(function() {
  $('.rec-check').click(function () {
    $(this).parent().parent().parent().toggleClass('checked');
  })
  $('.todo-item').dblclick(function () {
    $(this).parent().parent().parent().addClass('editing');
    $(this).parent().parent().parent().removeClass('el-not-edit');
  })
})
