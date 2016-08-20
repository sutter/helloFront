const btnHaveGutter = document.getElementById('haveGutter');
const btnNoGutter = document.getElementById('noGutter');
const grid = document.querySelectorAll('.grid');

btnHaveGutter.addEventListener('click', function () {
    this.classList.add('is-active');
    btnNoGutter.classList.remove('is-active');
    for (let value of grid) {
        value.classList.remove('grid--noGutter');
    }
});

btnNoGutter.addEventListener('click', function () {
    this.classList.add('is-active');
    btnHaveGutter.classList.remove('is-active');
    for (let value of grid) {
        value.classList.add('grid--noGutter');
    }
});
