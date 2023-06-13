// paint spill nav bar

const menuButton = document.querySelector('.toggle .fas');
const spill = document.querySelector('.menu');

function toggleNav() {
    if (menuButton.classList.contains('fa-bars')) {
        menuButton.classList.replace('fa-bars', 'fa-times');
        menuButton.style.color = "#fff";
        spill.classList.add('active');
    } else {
        menuButton.classList.replace('fa-times', 'fa-bars');
        menuButton.style.color = "#000";
        spill.classList.remove('active');
    }
}
menuButton.addEventListener('click', toggleNav);