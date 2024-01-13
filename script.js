document.querySelector('#menu').addEventListener('click', () => {
    
  document.querySelector('#menu').classList.toggle('active')
  document.querySelector('body').classList.toggle('lock')
  document.querySelector('nav').classList.toggle('active')
}
)

const parent1 = document.querySelector('.header__inner');
const children1 = document.querySelectorAll('.child');

let lastScrollPosition = 0;

window.addEventListener('scroll', () => {
  const currentScrollPosition = window.scrollY;
  const parent1Top = parent1.getBoundingClientRect().top;
  const parent1Bottom = parent1.getBoundingClientRect().bottom;

  // Если верхняя граница родителя выходит за верхний край экрана, и дочерние элементы видны
  if (parent1Top < window.innerHeight && parent1Bottom > 0) {
    const distanceToTop = Math.abs(parent1Top);
    const shiftAmount = Math.min(10, distanceToTop) / 30;

    // Рассчитываем процент прокрутки относительно высоты экрана
    const scrollPercentage = (currentScrollPosition / window.innerHeight) * 100;

    // Анимация происходит на каждых 10% прокрутки
    const animationCount = Math.floor(scrollPercentage / 10);

    // Плавный сдвиг дочерних элементов
    children1.forEach((child, index) => {
      const sideShiftAmount = shiftAmount * (index % 2 === 0 ? -1 : 1) * 50;
      child.style.transition = 'transform 0.5s ease-out'; // Плавный переход

      // Применяем сдвиг с анимацией
      child.style.transform = `translateX(${sideShiftAmount * animationCount}vw)`;
    });
  } else {
    // Если родитель вышел из зоны видимости, скрываем дочерние блоки
    children1.forEach(child => {
      child.style.transition = 'transform 0.5s ease-in-out'; // Плавный переход
      child.style.transform = 'translateX(0)';
    });
  }

  lastScrollPosition = currentScrollPosition;
});


// const dynamicContainer = document.querySelector('.content_first');
// const dynamicText = document.getElementById('dynamicText');
// function setFontSizeAndWidth() {
//   const containerWidth = dynamicContainer.clientWidth;
//   dynamicContainer.style.height = `${containerWidth * 22.5}px`; // Устанавливаем высоту в половину ширины
//   dynamicText.style.fontSize = `${containerWidth * 11.1}px`; // Устанавливаем размер шрифта в 10% ширины
// }

// // Устанавливаем начальные размеры
// setFontSizeAndWidth();

// // Обновляем размеры при изменении размеров окна
// window.addEventListener('resize', setFontSizeAndWidth);
    // Функция для проверки ширины экрана и замены изображения
    function checkScreenWidth() {
      var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

      // Измените ширину, при которой происходит замена
      var breakpointWidth = 768;

      // Получение ссылки на изображение
      var picture = document.getElementById('picture');

      // Проверка и замена изображения
      if (screenWidth >= breakpointWidth) {
        picture.src = 'img/mar.png'; // Замените путь на путь ко второму изображению
      } else {
        picture.src = 'img/mar-mob.PNG'; // Замените путь на путь к первому изображению
      }
    }

    // Вызов функции при загрузке страницы и изменении размера окна
    window.onload = checkScreenWidth;
    window.onresize = checkScreenWidth;

    var cyberpunkTexts = [
      "ABC",
      "XYZ",
      "123",
      "456",
      "789",
      "DEF",
      "GHI",
      "JKL",
      "MNO",
      "PQR"
      // Добавьте сколько угодно текстов
    ];

    document.querySelectorAll('h1').forEach(function(h1Element) {
      applyCyberpunkEffect(h1Element);
    });

    function applyCyberpunkEffect(element) {
      var originalText = element.textContent;
      var currentIndex = 0;

      function changeText() {
        element.textContent = cyberpunkTexts[currentIndex];
        currentIndex = (currentIndex + 1) % cyberpunkTexts.length;
      }

      var intervalId = setInterval(changeText, 100); // Изменение текста каждые 100 миллисекунд (10 раз в секунду)

      setTimeout(function() {
        clearInterval(intervalId);
        element.textContent = originalText; // Возвращаем к первоначальному тексту
      }, 1000 * cyberpunkTexts.length); // Через определенное время (в данном случае, 10 секунд) после начала изменений
    }