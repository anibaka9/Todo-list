$(document).ready(function() {
  var num_last = 0;
  if (localStorage['data'] === undefined) {localStorage['data'] = ''};
  var data = localStorage['data'].split(',');
  var flag = '';
  if (data == '') {data = []};
  for (var i = 0; i <= data.length - 1; i += 2) {
  	  	if (data[i + 1] === ' ') {
  		num_last += 1;
        $('#app-fotter').text(num_last + ' items left');
        flag = '';
    } else {
    	flag = 'checked';
    }
  	$('#Todo-List').append((
          `<li>
             <div class="list-element el-not-edit ` + data[i + 1] + `">
                <form class="pure-form todo-edit-form">
                   <fieldset>
                   <input type="checkbox" class="rec-check" ` + flag + `>
                   <p class="todo-item">` + data[i] + `</p>
                   <input class="todo-edit" type="text">
                   <a class="del">[X]</a>`));

  };

  $('#editer').keydown(function(e) {
  	if (e.keyCode == 13) {
        e.preventDefault();
        var list_el = $(
          `<li>
             <div class="list-element el-not-edit">
                <form class="pure-form todo-edit-form">
                   <fieldset>
                   <input type="checkbox" class="rec-check">
                   <p class="todo-item">` + $(this).val() + `</p>
                   <input class="todo-edit" type="text">
                   <a class="del">[X]</a>`);
        $('#Todo-List').append(list_el);
        data.push($(this).val(), ' ');
        localStorage['data'] = data;
        $(this).val('');
        num_last += 1;
        $('#app-fotter').text(num_last + ' items left');
    };
});

$(document).on('click', '.del', function () {
  if (!($(this).parent().parent().parent().hasClass('checked'))) {
    num_last -= 1;
    $('#app-fotter').text(num_last + ' items left');
  };
  data.splice($('li').index($(this).parent().parent().parent().parent()) * 2, 2);
  localStorage['data'] = data;
  $(this).parent().parent().parent().parent().remove();

});

$(document).on('click', '.rec-check', function () {
  if (this.checked) {
    $(this).parent().parent().parent().addClass('checked');
    data[$('li').index($(this).parent().parent().parent().parent()) * 2 + 1] = 'checked';
    localStorage['data'] = data;
    num_last -= 1;
    $('#app-fotter').text(num_last + ' items left');
  }
  else {
    $(this).parent().parent().parent().removeClass('checked');
    data[$('li').index($(this).parent().parent().parent().parent()) * 2 + 1] = ' ';
    localStorage['data'] = data;
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
    data[$('li').index($(this).parent().parent().parent().parent()) * 2] = $(this).val();
    localStorage['data'] = data;
    $(this).parent().parent().parent().removeClass('editing');
    $(this).parent().parent().parent().addClass('el-not-edit');
  };
});
})
