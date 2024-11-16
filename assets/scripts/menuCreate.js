function createMenuItem(item) {
  // Контейнер для одного пункта меню
  const li = document.createElement('div');
  li.classList.add('menu-item'); // Класс для контейнера

  // Изображение
  const img = document.createElement('img');
  img.src = `/kinza/assets/resource/menu/item1.png`; // Предположим, у вас есть свойство image в объекте item
  img.alt = '';
  
  // Заголовок
  const name = document.createElement('h3');
  name.textContent = item.name;

  // Рейтинг
  const ratingContainer = document.createElement('div');
  ratingContainer.classList.add('menu-item-raiting');
  const ratingCount = item.rating;
  for (let i = 0; i < ratingCount; i++) { // Предполагаю, что рейтинг хранится в виде числа от 1 до 5
    const star = document.createElement('img');
    star.src = '/kinza/assets/resource/menu/Star.svg'; // Звезда заполнена
    star.alt = '';
    ratingContainer.appendChild(star);
  }
  for (let j = ratingCount; j < 5; j++) { // Оставшиеся звезды пустые
    const emptyStar = document.createElement('img');
    emptyStar.src = '/kinza/assets/resource/menu/StarEmpty.svg'; // Пустая звезда
    emptyStar.alt = '';
    ratingContainer.appendChild(emptyStar);
  }

  // Описание
  const description = document.createElement('p');
  description.textContent = item.description;

  // Цена
  const price = document.createElement('h4');
  price.classList.add('menu-item_last-price'); // Класс для цены
  price.textContent = `${item.price} ₽`;

  // Кнопка "Добавить"
  const addButton = document.createElement('a');
  addButton.href = '#';
  addButton.textContent = 'Добавить';

  // Контейнер для кнопки и цены
  const lastInfoContainer = document.createElement('div');
  lastInfoContainer.classList.add('menu-item-last');
  lastInfoContainer.appendChild(price);
  lastInfoContainer.appendChild(addButton);

  // Собираем все вместе
  li.appendChild(img);        // Изображение
  li.appendChild(name);       // Название
  li.appendChild(ratingContainer); // Рейтинг
  li.appendChild(description); // Описание
  li.appendChild(lastInfoContainer); // Цена и кнопка

  return li;
}

async function loadMenu() {
  try {
    //const response = await fetch('/kinza/assets/scripts/menu.json');
    const response = await fetch('menu.json');
    const data = await response.json();

    const menuContainer = document.getElementById('menu-items');
    const ul = document.createElement('ul');
    ul.classList.add("menu-items");

    data.forEach(item => {
      const menuItem = createMenuItem(item);
      ul.appendChild(menuItem);
    });

    menuContainer.appendChild(ul);
  } catch (error) {
    console.error('Ошибка при загрузке данных:', error);
  }
}

document.addEventListener('DOMContentLoaded', loadMenu)
