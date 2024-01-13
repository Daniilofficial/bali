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
