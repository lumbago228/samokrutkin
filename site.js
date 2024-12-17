// Простой скрипт для демонстрации анимации кнопок
document.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Товар добавлен в корзину!');
    });
});



