function toggleMenu() {
    const menuList = document.getElementById('menuList');
    const menuButton = document.getElementById('menubutton');
    menuList.classList.toggle('show-menu');
    
    // Change button icon or text to indicate open/close state (optional)
    if(menuList.classList.contains('show-menu')) {
        menuButton.innerHTML = '<img class="menu_btn" src="images/menu.png" alt="">'; // Close icon
    } else {
        menuButton.innerHTML = '<img class="menu_btn" src="images/menu.png" alt="">'; // Menu icon
    }
}

// IMAGES CLICKABLE ######################

const images = document.querySelectorAll('.w1 img, .w2 img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const close = document.querySelector('.close');

images.forEach(image => {
    image.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = image.src;
    });
});

close.addEventListener('click', () => {
    lightbox.style.display = 'none';
});