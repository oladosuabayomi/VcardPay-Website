document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('top-nav');

    menuIcon.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent click event from bubbling up to the document
        menuIcon.classList.toggle('change');
        menu.classList.toggle('open');
    });

    document.addEventListener('click', (event) => {
        const target = event.target;
        if (!menu.contains(target) && !menuIcon.contains(target)) {
            menuIcon.classList.remove('change');
            menu.classList.remove('open');
        }
    });

    // Prevent click on menu from bubbling up to document
    menu.addEventListener('click', (event) => {
        event.stopPropagation();
    });
});
