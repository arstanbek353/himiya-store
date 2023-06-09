export default function () {
  const sectionNodes = document.querySelectorAll('.main-slider')
  sectionNodes.forEach(element => {
    const sliderNode = element.querySelector('.main-slider__slider')
    const prevNode = element.querySelector('.main-slider__prev')
    const nextNode = element.querySelector('.main-slider__next')
    const pagNode = element.querySelector('.main-slider__pag')
    const delay = 3000
    var swiper = new Swiper(sliderNode, {
      slidesPerView: 1,
      loop: true,
      effect: 'fade',
      loopedSlides: 4,
      // autoplay: {
      //   delay: delay,
      // },
      pagination: {
        el: pagNode,
        type: 'bullets',
        bulletClass: 'bullet',
        bulletActiveClass: 'active',
      },
      navigation: {
        nextEl: nextNode,
        prevEl: prevNode,
        disabledClass: 'disabled',
      },
    });
  })
}