const hammenu = document.getElementById('hamburger');

const navlinks = document.getElementById('nav__links');

hammenu.addEventListener('click', () => {
    hammenu.classList.toggle('active');
    navlinks.classList.toggle('active');
})