var formTitle;
var listItems = [];

var form = document.querySelector('form.form button');
var formTitle = document.querySelector('form.formTitle button');

function renderTitle(title){
  document.querySelector('h1').innerHTML = title;
}

function renderItem(item) {
  var li = document.createElement('li');
  li.innerHTML = item;
  document.querySelector('.list').appendChild(li);
}

formTitle.onclick = function() {
  var input = document.querySelector('.inputTitle');
  var newTitle = input.value;
  renderTitle(newTitle);
  return false;
 };

form.onclick = function() {
  var input = document.querySelector('.input');
  var newItem = input.value;
  listItems.push(newItem);
  renderItem(newItem);
  return false;
};