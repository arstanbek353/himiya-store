
import mainSlider from '~/app/js/main-slider.js'
import prodSlider from '~/app/js/prod-slider.js'
import akcii from '~/app/js/akcii.js'
import partnersSlider from '~/app/js/partners-slider.js'
import newsSlider from '~/app/js/news-slider.js'
import detailSlider from '~/app/js/detail-slider.js'
import modal from '~/app/js/modal.js'
import contact from '~/app/js/contact.js'
import nav from '~/app/js/nav.js'
import search from '~/app/js/search.js'
import catalog from '~/app/js/catalog.js'

document.addEventListener('DOMContentLoaded', () => {
  mainSlider()
  prodSlider()
  partnersSlider()
  newsSlider()
  detailSlider()
  modal()
  contact()
  nav()
  search()
  akcii()
  catalog()
  const contactBtn = document.querySelector('.contact__btn')
  const poster = document.querySelector('.contact__poster')
  const map = document.querySelector('.contact__map')
  const body = document.querySelector('body')

  if (contactBtn) {
    contactBtn.addEventListener('click', () => {
      poster.classList.toggle('active')
      map.classList.toggle('active')
    })
  }

  const filterBtn = document.querySelector('.catalog-filter__open')
  const filterClose = document.querySelector('.catalog-filter__close')
  const filterContent = document.querySelector('.catalog-filter__content')

  if (filterBtn) {
    filterBtn.addEventListener('click', () => {
      filterContent.classList.add('active')
      body.classList.add('o-hidden')
    })
    filterClose.addEventListener('click', () => {
      filterContent.classList.remove('active')
      body.classList.remove('o-hidden')
    })
  }

  const faqs = document.querySelectorAll('.faq__item')

  faqs.forEach((element, index) => {
    const title = element.querySelector('.faq__title')

    title.addEventListener('click', () => {
      faqs.forEach((i, idx) => index !== idx ? i.classList.remove('active') : null)
      element.classList.toggle('active')
    })
  })
})
