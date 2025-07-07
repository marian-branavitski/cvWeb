let sliderPresent = 0;
try {
    const dots = document.querySelectorAll(".next-main-slider-dots>span");
    const slides = document.querySelectorAll('.hero>li');
    const interval = 2;

    let activeSlide = 0;

    sliderPresent = 1;

    const reset = () => {
        dots.forEach(dot => dot.removeAttribute('class'))
        dots[activeSlide].className = 'active';

        slides.forEach(slide => slide.style.display = 'none');
        slides[activeSlide].style.display = 'block';
    };

    reset();

    setInterval(() => {
        reset();

        if (activeSlide < slides.length - 1) {
            activeSlide++;
        } else {
            activeSlide = 0;
        }
    }, interval * 1000);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            activeSlide = index;
            reset();
        });
    });
} catch (error) {
    console.log(error);
}

try {
    const dots = document.querySelectorAll(".next-main-slider-dots>span");
    const slides = document.querySelectorAll('.carousel>li');
    const interval = 2;

    let activeSlide = 0;

    const reset = () => {
        dots.forEach(dot => dot.removeAttribute('class'))
        dots[activeSlide].className = 'active';

        slides.forEach(slide => slide.style.display = 'none');
        slides[activeSlide].style.display = 'block';
    };

    reset();

    setInterval(() => {
        reset();

        if (activeSlide < slides.length - 1) {
            activeSlide++;
        } else {
            activeSlide = 0;
        }
    }, interval * 1000);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            activeSlide = index;
            reset();
        });
    });
} catch (error) {
    console.log(error);
}

let checkpoint = 0;

if (sliderPresent) {
    let checkpoint = 120;
} else {
    let checkpoint = 15;
}

let nav_bg = 'transparent';
let opacity = 1;

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= checkpoint) {
        nav_bg = 'transparent';
        opacity = 1 - currentScroll / checkpoint;
    } else {
        nav_bg = '#000';
        opacity = 0;
    }

    document.querySelector(".header-nav").style.background = nav_bg;

    slides.forEach(slide => slide.getElementsByTagName('img')[0].style.opacity = opacity);
})

const menu = document.querySelector('.mobile-btn');
const submenu = document.querySelector('.middle-menu-mobile');
const menuImg = menu.getElementsByTagName('img')[0]

let is_open = 0;

menu.addEventListener('click', () => {
    if (!is_open) {
        submenu.style.display = 'block';
        menuImg.src = 'assets/imgs/close.png';
        menuImg.style.width = '25px';
        menuImg.style.height = '25px';
        is_open = 1;        
    } else {
        submenu.style.display = 'none';
        menuImg.src = 'assets/imgs/MenuIcon.svg';
        is_open = 0;
    }
});