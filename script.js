particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 180,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#fff1ff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 100,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

gsap.fromTo("h1", 
  { rotateY: 0 }, // начальные значения
  { 
      rotateY: 360, // конечные значения
      duration: 1.5, 
      ease: "power2.inOut", 
      repeat: 1, 
      yoyo: true 
  }
);  

gsap.to("h2", {
  text: "Frontend Entwicklerin",
  duration: 3,
  ease: "power1.in",
  repeat: 0,
  yoyo: true,
});

function addBlinkingCursor(selector) {
  const headings = document.querySelectorAll(selector); // Находим все заголовки

  headings.forEach((heading) => {
    heading.classList.add('animated-heading'); // Добавляем класс для мигающего курсора
  });
}

// Запуск функции для всех h3 с классом .animated-heading
window.addEventListener("load", () => {
  addBlinkingCursor(".animated-heading");
});


const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

// Клонируем меню, чтобы задать свои стили для мобильной версии
const menu = document.querySelector("#menu").cloneNode(1);

// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener("click", hambHandler);

// Выполняем действия при клике ..
function hambHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

// Здесь мы рендерим элементы в наш попап
function renderPopup() {
  popup.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
};

const modal = document.getElementById('modal');
const openModal1 = document.getElementById('openModal1');
const openModal2 = document.getElementById('openModal2');
const closeModal = document.getElementById('closeModal');

// Функция для открытия модального окна
function openModalHandler() {
  modal.style.display = 'flex'; // Показываем модальное окно
}

// Привязываем обработчик к каждой кнопке
openModal1.addEventListener('click', openModalHandler);
openModal2.addEventListener('click', openModalHandler);

// Закрытие модального окна
closeModal.addEventListener('click', () => {
  modal.style.display = 'none'; // Скрываем модальное окно
});

// Закрытие при клике за пределы модального окна
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

const image = document.querySelector('.aboutImg'); // Картинка
const icons = document.querySelectorAll('.icons-container i'); // Все иконки
const iconsContainer = document.querySelector('.icons-container');

// Функция для обновления позиций иконок
function updateIconsPosition() {
const radius = image.offsetWidth / 2 + 50; // Радиус с учетом отступа (картинка + отступ для окружности)

icons.forEach((icon, index) => {
  const angle = (index / icons.length) * Math.PI * 2; // Распределение по кругу
  const x = Math.cos(angle) * radius; // X координата
  const y = Math.sin(angle) * radius; // Y координата

  // Устанавливаем начальную позицию иконки
  gsap.set(icon, {
    x: x,
    y: y,
  });

  // Анимация вращения каждой иконки вокруг своей оси
  gsap.to(icon, {
    rotation: 360, // Полный оборот
    repeat: -1, // Бесконечная анимация
    duration: 5, // Время одного оборота
    ease: "linear",
  });
});
}
 
// Следим за изменением размера картинки
const observer = new ResizeObserver(() => {
updateIconsPosition(); // Обновляем позицию иконок
});
observer.observe(image);

// Начальная расстановка иконок
updateIconsPosition();

document.getElementById('downloadButton').addEventListener('click', function() {
// Укажите путь к PDF файлу
const pdfUrl = 'Barth_Mariia_Lebenslauf.pdf';

// Открывает PDF файл, что приводит к его скачиванию
window.location.href = pdfUrl;
});


$(document).ready(function () {
  $(".slider").slick({
    lazyLoad: "ondemand",
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
