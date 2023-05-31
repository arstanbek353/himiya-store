export default function () {
  const sectionNodes = document.querySelectorAll('.akcii')
  sectionNodes.forEach(element => {
    const sliderNode = element.querySelector('.akcii__slider')
    const prevNode = element.querySelector('.akcii__prev')
    const nextNode = element.querySelector('.akcii__next')
    const pagNode = element.querySelector('.akcii__pag')
    const delay = 3000
    var swiper = new Swiper(sliderNode, {
      slidesPerView: 'auto',
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