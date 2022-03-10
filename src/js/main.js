// Импорты
import Flickity from 'flickity';
import 'flickity/dist/flickity.min.css';

import '../scss/standard.scss';
import '../scss/style.scss';

var flkty = new Flickity( '.gallery', {
});

// Счетчик времени
let allTime = Date.now();

// Тестовый стенд для строк
console.log('\x1b[32m%s', '--------------------START--------------------');

const textStart = 'Привет, мир!';
console.log(textStart);

let textLetters = [];
Array.from(textStart).forEach(elem => {
  textLetters.push(elem);
});

console.log(textLetters);
textLetters.forEach(elem => {
  console.log(elem);
});

const textDone = textLetters.join('');
console.log(textDone);

console.log('\x1b[32m%s', '--------------------END--------------------');

// Деструктуризация
console.log('\x1b[32m%s', '--------------------START--------------------');

function nestedArrayAndObject() {
  const info = {
    title: 'Once Upon a Time',
    protagonist: {
      name: 'Emma Swan',
      enemies: [
        { name: 'Regina Mills', title: 'Evil Queen' },
        { name: 'Cora Mills', title: 'Queen of Hearts' },
        { name: 'Peter Pan', title: "The boy who wouldn't grow up" },
        { name: 'Zelena', title: 'The Wicked Witch' },
      ],
    },
  };
  const {
    title,
    protagonist: { name: protagonistName },
    protagonist: {
      enemies: { 3: enemy },
    },
    enemyTitle = enemy.title,
    enemyName = enemy.name,
  } = info;
  return `${enemyName} (${enemyTitle}) is an enemy to ${protagonistName} in "${title}"`;
}

console.log(nestedArrayAndObject());

console.log('\x1b[32m%s', '--------------------END--------------------');

// Параметры по умолчанию
console.log('\x1b[32m%s', '--------------------START--------------------');

function plusTest(a = 5, b = 5) {
  return a + b;
}

console.log(plusTest());
console.log(plusTest(10));
console.log(plusTest(10, 10));

console.log('\x1b[32m%s', '--------------------END--------------------');

// Замер времени
console.log('\x1b[32m%s', '--------------------START--------------------');

let time = Date.now();

let numberOfIterations = 30;
let bits = 1;
let bitsAll = [];

for (let i = 0; i < numberOfIterations; i++) {
  bits += bits;
  bitsAll.push(bits);
}

console.log(bitsAll);

time = Date.now() - time;
console.log(`Время вычисления = ${time} миллисекунд`);

console.log('\x1b[32m%s', '--------------------END--------------------');

// Авто-вставка контента в блоки
console.log('\x1b[32m%s', '--------------------START--------------------');

const testGalleryElements = document.querySelectorAll(
  '.test-gallery-container div',
);

function fillContent(arr) {
  if (!arr.length) return;
  const [even, odd, ...rest] = arr;
  even.innerHTML = '<p>ТЕСТОВЫЙ ТЕКСТ</p>';
  odd.innerHTML =
    '<img src="https://via.placeholder.com/300x200?text=ТЕСТОВАЯ%20КАРТИНКА">';
  return fillContent(rest);
}

fillContent(testGalleryElements);

console.log('\x1b[32m%s', '--------------------END--------------------');

allTime = Date.now() - allTime;
console.log(
  '%c%s',
  'color: green; font: 1.5rem Tahoma;',
  `Время выполнения этой части скрипта = ${allTime} миллисекунд`,
);
