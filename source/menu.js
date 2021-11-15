export default function (array, className) {
    const newLocal = "ul";
    var menu = document.createElement(newLocal);
    menu.className = className;
    var listItems = '';
    array.forEach(function(item) {
    listItems += '<li>' + item + '</li>';
    });
    menu.innerHTML = listItems;
    return menu;
   }