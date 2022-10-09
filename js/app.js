const burgerBtn = document.querySelector('#nav-icon3')
const headerBody = document.querySelector('.header__body')

burgerBtn.addEventListener('click', showBurger)

function showBurger() {
    headerBody.classList.toggle('active')
    burgerBtn.classList.toggle('active')
    document.body.classList.toggle('_lock')
}

//=======<SLIDER>=========
const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    initialSlide: 1,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    breakpoints: {
        768: {
          slidesPerView: 3,
          initialSlide: 1
        },
      },
    pagination: {
      el: ".swiper-pagination",
    },
  });

//===============
const menuLinks = document.querySelectorAll(".menu__link[data-goto]");

if(menuLinks.length > 0){
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener('click', onMenuLink);
	});
}
function onMenuLink(e){
  const menuLink = e.target;
  headerBody.classList.remove('active')
  burgerBtn.classList.remove('active')
  if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
    const gotoBlock = document.querySelector(menuLink.dataset.goto);
    const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header__items').offsetHeight -50

    window.scrollTo({
      top: gotoBlockValue,
      behavior: 'smooth',
    });
    e.preventDefault();
  }
}
//============
const intro = document.querySelector('.header')
const header = document.querySelector('.header__items')

window.addEventListener('scroll', function() {
  if(scrollY > intro.offsetHeight) {
    header.classList.add('header__fixed')
  } else {
    header.classList.remove('header__fixed')
  } 
})