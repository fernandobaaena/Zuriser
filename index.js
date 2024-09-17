// Evento para abrir/cerrar el menú cuando se hace clic en el icono de menú
document.getElementById('menu-icon').addEventListener('click', function() {
    const navBar = document.querySelector('.nav-bar');
    navBar.classList.toggle('active');
});

// Evento para añadir sombra en el header al hacer scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.style.boxShadow = '0px 0px 15px rgba(0, 0, 0, 0.3)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// Cerrar el menú automáticamente cuando se selecciona una opción
document.querySelectorAll('.nav-bar li a').forEach(link => {
    link.addEventListener('click', function() {
        const navBar = document.querySelector('.nav-bar');
        navBar.classList.remove('active');  // Cierra el menú
    });
});

