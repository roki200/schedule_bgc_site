// scripts.js

// Добавляем событие для кнопки копирования ссылки
document.getElementById('copyButton').addEventListener('click', function () {
    // Создаем временный элемент для копирования текста
    var tempInput = document.createElement('input');
    tempInput.value = 'https://t.me/Schedule_BGC_Robot';
    document.body.appendChild(tempInput);

    // Выделяем текст и копируем в буфер обмена
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    // Показываем сообщение о копировании
    var copyMessage = document.getElementById('copyMessage');
    copyMessage.style.display = 'block';

    // Скрываем сообщение через 3 секунды
    setTimeout(function () {
        copyMessage.style.display = 'none';
    }, 3000);
});

// Добавляем событие для показа футера при достижении конца страницы
window.addEventListener('scroll', function () {
    var footer = document.getElementById('footer');
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        footer.style.display = 'block';
    } else {
        footer.style.display = 'none';
    }
});
