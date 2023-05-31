export default function () {
  const sectionNodes = document.querySelectorAll('.partners')
  sectionNodes.forEach(element => {
    const sliderNode = element.querySelector('.partners__slider')
    const prevNode = element.querySelector('.partners__prev')
    const nextNode = element.querySelector('.partners__next')
    const pagNode = element.querySelector('.partners__pag')
    const delay = 3000
    var swiper = new Swiper(sliderNode, {
      slidesPerView: 'auto',
      // autoplay: {
      //   delay: delay,
      // },
      pagination: {
        el: pagNode,
        type: 'fraction',
      },
      slidesPerColumn: 2,
      navigation: {
        nextEl: nextNode,
        prevEl: prevNode,
        disabledClass: 'disabled',
      },
    });
  })
}