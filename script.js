const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');
// btn.onclick = function() {
//     alert(10);
// };

// btn.addEventListener('click', () => { // Событие при клике
//     alert(10);
// });
// btn.addEventListener('mouseenter', (e) => { // При наведении на кнопку
//     console.log(e.target);
//     e.target.remove();
    
// });
let i = 0;
const deletElement = (e) => { // Событие при клике
    console.log(e.target);
    console.log(e.type);
    // i++;
    // if(i = 1) {
    //     btn.removeEventListener('click', deletElement);
    // }
};

// btn.addEventListener('click', deletElement);
// overlay.addEventListener('click', deletElement);

btns.forEach(btn => { // Перебор элементов
    btn.addEventListener('click', deletElement, {once: true}) // Объект once - нажать один раз
});

const link = document.querySelector('a');

link.addEventListener('click', function(event){
    event.preventDefault(); // Удаление стилей браузера
    console.log(event.target);
});

