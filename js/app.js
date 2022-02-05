const anime = document.querySelectorAll('[data-anime]');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const slider = document.querySelector('.header__sliders');
const divOne = document.querySelector('.header__slider-rightOne div');
const divTwo = document.querySelector('.header__slider-rightTwo div');

anime.forEach(item => {
    item.style.transform = 'translateY(-50%)';
    item.style.opacity = '0';
});

setTimeout(() => {
    divOne.classList.add('animate');
}, 500);

const mySlider = () => {
    next.classList.toggle('active');
    prev.classList.toggle('active');
}

next.addEventListener('click', () => {
    mySlider();
    slider.classList.remove('prev');
    slider.classList.add('next');
    divOne.classList.remove('animate');
    setTimeout(() => {
        divTwo.classList.add('animate');
    }, 500);
})
prev.addEventListener('click', () => {
    mySlider();
    slider.classList.remove('next');
    slider.classList.add('prev');
    divTwo.classList.remove('animate');
    setTimeout(() => {
        divOne.classList.add('animate');
    }, 500);
})

// --------------------------------- Okienko Subscribe

const sub = document.querySelector('.subscribe');
const subCon = document.querySelector('.subscribe__content');
const exit = document.querySelector('.btnClose');
window.addEventListener('load', () => {
    sub.classList.add('active');
    subCon.classList.add('active');
});

exit.addEventListener('click', () => {
    sub.classList.remove('active');
})

//--------------------------------- Podmenu - Pupile

const pupils = document.querySelector('.pupils');
const navItems = document.querySelector('.nav-item__pupils');

pupils.addEventListener('mouseover', () => {
    navItems.classList.add('active');
})

pupils.addEventListener('mouseleave', () => {
    navItems.classList.remove('active');
})

//---------------------------------Top Categories

const categories = [...document.querySelectorAll('.topCategories__category')];

// console.log(categories);

const gallery = () => {
    let position = 0;
    for (let i = 0; i < categories.length; i++) {
        categories[i].style.transform = `translateX(${position}px)`;

    }
}
setInterval(gallery, 4000);
