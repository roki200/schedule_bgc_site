// JavaScript для копирования ссылки
document.getElementById('copyButton').addEventListener('click', function () {
    navigator.clipboard.writeText('https://t.me/Schedule_BGC_Robot').then(function () {
        var copyMessage = document.getElementById('copyMessage');
        copyMessage.style.display = 'block';

        setTimeout(function () {
            copyMessage.style.display = 'none';
        }, 3000);
    }).catch(function (err) {
        console.error('Не удалось скопировать текст: ', err);
    });
});



// Функция для проверки видимости элемента
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top < window.innerHeight && // Проверяем, что верхняя часть элемента видима
        rect.bottom >= 0 // Проверяем, что нижняя часть элемента видима
    );
}

// Функция для добавления класса видимости
function checkVisibility() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el, index) => {
        if (isElementInViewport(el)) {
            // Задержка для появления элементов друг за другом
            setTimeout(() => {
                el.classList.add('visible'); // Добавляем класс, если элемент в области видимости
            }, index * 200); // Задержка в 200 мс для каждого элемента
        }
    });
}

// Проверяем видимость при загрузке страницы
window.addEventListener('load', checkVisibility);

// Проверяем видимость при прокрутке
window.addEventListener('scroll', checkVisibility);
