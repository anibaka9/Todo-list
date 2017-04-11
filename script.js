$(document).ready(function() {
  var num_last = 0;
  $('#editer').keydown(function(e) {
  	if (e.keyCode == 13) {
        e.preventDefault();
        var list_el = $('<li><div class="list-element el-not-edit"><form class="pure-form todo-edit-form"><fieldset><input type="checkbox" class="rec-check"><label class="todo-item">' + $(this).val() + '</label><input class="todo-edit" type="text">')
        $('#Todo-List').append(list_el);
        $(this).val('')
        num_last += 1;
        $('#app-fotter').text(num_last + ' items left');
    };
});

$(document).on('click', '.rec-check', function () {
  if (this.checked) {
    $(this).parent().parent().parent().addClass('checked');
    num_last -= 1;
    $('#app-fotter').text(num_last + ' items left');
  }
  else {
    $(this).parent().parent().parent().removeClass('checked');
    num_last += 1;
    $('#app-fotter').text(num_last + ' items left');
  };
});
$(document).on('dblclick', '.todo-item', function () {
   $(this).parent().parent().parent().addClass('editing');
   $(this).parent().parent().parent().removeClass('el-not-edit');
   $(this).siblings('.todo-edit').val($(this).text())
});
$(document).on('keydown', '.todo-edit', function(e) {
  if (e.keyCode == 13) {
    e.preventDefault();
    $(this).siblings('.todo-item').text($(this).val())
    $(this).parent().parent().parent().removeClass('editing');
    $(this).parent().parent().parent().addClass('el-not-edit');
  };
});
})
