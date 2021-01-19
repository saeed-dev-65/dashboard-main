const check = document.querySelector('#check');

const body = document.querySelector('body');

window.addEventListener('DOMContentLoaded', function() {
    body.classList.add('dark');
});

check.addEventListener('change', function() {
    body.classList.toggle('light');
});