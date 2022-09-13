/******** Swiper View ********/
function myFunction(x) {
    if (x.matches) { // If media query matches
      /***  Initialize Swiper **/
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    } else {
      /***  Initialize Swiper **/
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }
  }

  var x = window.matchMedia("(max-width: 720px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes

 
/******** Swiper1 View client ********/
  
var swiper1 = new Swiper(".mySwiper1", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

  

  /*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
  const scrollTop = document.getElementById('scroll-top');
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 560) scrollTop.classList.add('show-scroll');
  else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)




/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 2000,
  reset: true
});

sr.reveal('.home__col,.services-container,.Team,.client,.footer-section', {
  interval: 200
})



ScrollReveal({ distance: '60px' });
ScrollReveal().reveal('.about__second,.contactus-second,.footer__copy', { origin: 'right' });
ScrollReveal().reveal('.about__first,.contactus-first,.footer_terms', { origin: 'left' });