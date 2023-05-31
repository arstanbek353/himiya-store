export default function () {
  const sectionNodes = document.querySelectorAll('.main-prods')
  sectionNodes.forEach(element => {
    const sliderNode = element.querySelector('.main-prods__slider')
    const prevNode = element.querySelector('.main-prods__prev')
    const nextNode = element.querySelector('.main-prods__next')
    const pagNode = element.querySelector('.main-prods__pag')
    const delay = 3000
    var swiper = new Swiper(sliderNode, {
      slidesPerView: 'auto',
      loopedSlides: 4,
      // autoplay: {
      //   delay: delay,
      // },
      pagination: {
        el: pagNode,
        type: 'fraction',
      },
      navigation: {
        nextEl: nextNode,
        prevEl: prevNode,
        disabledClass: 'disabled',
      },
    });
  })
}