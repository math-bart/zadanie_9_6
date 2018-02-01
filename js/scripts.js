var buttonElem = document.getElementById('addElem');
var listElem = document.getElementById('list');

buttonElem.addEventListener('click', function (e) {
    var itemsByTagName = document.getElementsByTagName('li');
    var counter = itemsByTagName.length;
    var newElem = document.createElement('li');
    newElem.innerHTML = 'item ' + counter;
    listElem.appendChild(newElem);
});
