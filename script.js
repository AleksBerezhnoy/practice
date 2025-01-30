// console.log(document.head);
// console.log(document.documentElement); // Html в консоль
// console.log(document.body.childNodes); // Все node узлы из body в псевдомассиве
// console.log(document.body.firstChild); // Первый тестовый нод
// console.log(document.body.firstElementChild); // Первый элемент
// console.log(document.body.lastChild);

// console.log(document.querySelector('#current').parentNode); // Получить родителя
// console.log(document.querySelector('#current').parentNode.parentNode); // Получить родителя родителя
// console.log(document.querySelector('#current').parentElement.parentElement); // Получить родителя родителя


// атрибут из HTML //nextSibling - Следующий сосед node, previousSibling - наоборот
// console.log(document.querySelector('[data-current="3"]').previousSibling);

// console.log(document.querySelector('[data-current="3"]').nextElementSibling); //Следующий сосед элемент


for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node);
}