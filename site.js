samokrutkin - store /
├── index.html
├── css /
│   └── style.css
├── js /
│   └── script.js
├── img /
│   ├── logo.png
│   ├── product1.jpg
│   ├── product2.jpg
│   └── ...

document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.btn-add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            alert('Товар добавлен в корзину! (Эта функция пока не реализована полностью)');
        });
    });
});