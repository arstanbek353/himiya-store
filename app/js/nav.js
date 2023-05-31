
const light = document.querySelectorAll('.contact-brc, .product-detail, .faq-banner')
export default function nav() {
  class Nav {
    constructor() {
      this.htmlNode = document.querySelector(`html`)
      this.body = document.querySelector(`body`)
      this.root = document.querySelector(`.root`)
      this.header = document.querySelector(`.header`)
      this.navNode = document.querySelector(`.header__nav`)
      this.burgerNode = document.querySelector('.header__burger')
      this.closeNode = document.querySelector('.header__close')
      this.items = document.querySelectorAll('.nav__item--drop')
      this.arrowsF = document.querySelectorAll('.nav__arrow--f')
      this.drops = document.querySelectorAll('.nav__under')
      this.init()
    }
    init() {
      if (this.navNode && this.burgerNode) {
        this.openHendler()
        this.closeHendler()
        this.scrollHendler()
      }
      if (light.length) {
        this.header.classList.remove('dark')
        this.header.classList.add('light')
      }
      this.dropHandler()
    }
    open() {
      console.log('n open')
      this.navNode ? this.navNode.classList.add('active') : null;
      this.burgerNode ? this.burgerNode.classList.add('active') : null;
      this.body ? this.body.classList.add('o-hidden') : null;
    }
    close() {
      console.log('n close')
      this.navNode ? this.navNode.classList.remove('active') : null;
      this.burgerNode ? this.burgerNode.classList.remove('active') : null;
      this.body ? this.body.classList.remove('o-hidden') : null;
    }
    openHendler() {
      this.burgerNode.addEventListener('click', (e) => {
        e.preventDefault()
        this.open()
      })
    }
    closeHendler() {
      this.closeNode.addEventListener('click', (e) => {
        e.preventDefault()
        this.close()
      })
    }
    scrollHendler() {
      let lastScroll = 0;
      window.addEventListener('scroll', () => {

        if (lastScroll < this.htmlNode.scrollTop) { // down
          this.header ? this.header.classList.add('scroll') : null;
          this.header ? this.header.classList.remove('down') : null;
          this.burgerNode ? this.burgerNode.classList.add('active') : null;
          this.navNode ? this.navNode.classList.remove('open') : null;
        } else if (this.htmlNode.scrollTop === 0) {
          this.header ? this.header.classList.remove('down') : null;
          this.burgerNode ? this.burgerNode.classList.add('active') : null;
        } else { // up
          this.header ? this.header.classList.add('down') : null;
          this.burgerNode ? this.burgerNode.classList.remove('active') : null;
        }
        if (this.htmlNode.scrollTop < this.header.clientHeight - (this.header.clientHeight * 60 / 100)) {
          this.header ? this.header.classList.remove('scroll') : null;
          this.burgerNode ? this.burgerNode.classList.remove('active') : null;
        }
        lastScroll = this.htmlNode.scrollTop

      })
    }
    dropHandler() {
      this.arrowsF.forEach((arrow, idx) => {
        arrow.addEventListener('click', () => {
          this.items.forEach((i, idex) => idex !== idx ? i.classList.remove('active') : null)
          this.items[idx].classList.toggle('active')
        })
      })
      this.items.forEach((item, idx) => {
        const arrows = item.querySelectorAll('.nav__arrow--s')
        const items = item.querySelectorAll('.nav__under-item')

        arrows.forEach((arrow, idx) => {
          arrow.addEventListener('click', () => {
            items.forEach((i, idex) => idex !== idx ? i.classList.remove('active') : null)
            items[idx].classList.toggle('active')
          })
        })
      })
    }
  }

  const nav = new Nav();
  window.nav = nav
}