$(document).ready(function() {
  
  $('#editer').keydown(function(e) {
  	if (e.keyCode == 13) {
        e.preventDefault();
        var list_el = $('<li><div class="list-element el-not-edit"><form class="pure-form todo-edit-form"><fieldset><input type="checkbox" class="rec-check"><label class="todo-item">' + $(this).val() + '</label><input class="todo-edit" type="text">')
        $('#Todo-List').append(list_el);
        $(this).val('')
        $('.rec-check').click(function () {
    $(this).parent().parent().parent().toggleClass('checked');
  })
  $('.todo-item').dblclick(function () {
    $(this).parent().parent().parent().addClass('editing');
    $(this).parent().parent().parent().removeClass('el-not-edit');
    $(this).siblings('.todo-edit').val($(this).text())
  })
  $('.todo-edit').keydown(function(e) {
    if (e.keyCode == 13) {
        e.preventDefault();
        $(this).siblings('.todo-item').text($(this).val())
        $(this).parent().parent().parent().removeClass('editing');
        $(this).parent().parent().parent().addClass('el-not-edit');
    }
  });
    };
  });
})
