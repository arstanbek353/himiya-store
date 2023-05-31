import { apiUrls } from './const.js'

export default function () {
  const wrapper = document.querySelector('.catalog-wrapper')
  const content = document.querySelector('.js-catalog-content')
  if (!wrapper) return
  const formHeadNode = document.querySelector('.catalog-head__sort')
  const formAsideNode = document.querySelector('.catalog-filter__content')
  const openNode = document.querySelector('.catalog-filter__open')
  const closeNode = document.querySelector('.catalog-filter__close')
  const resetNode = document.querySelector('.catalog-filter__reset')
  const applyNode = document.querySelector('.catalog-filter__apply')
  const rangeNodes = document.querySelectorAll('.catalog-filter__range')
  const openBoxNodes = document.querySelectorAll('.catalog-filter__title .open')
  const boxNodes = document.querySelectorAll('.catalog-filter__cr-box')
  const showAllNodes = document.querySelectorAll('.catalog-filter__item .all')
  const rangeInstanceArray = []

  openBoxNodes.forEach((element, index) => {
    element.addEventListener('click', () => {
      openBoxNodes[index].classList.toggle('opened')
      boxNodes[index].classList.toggle('opened')
    })
  })

  showAllNodes.forEach((element, index) => {
    element.addEventListener('click', () => {
      boxNodes[index].classList.toggle('allshowes')
    })
  })

  rangeNodes.forEach(element => {
    const inputRange = element.querySelector('.js-range-slider')
    const inputFrom = element.querySelector('.catalog-filter__range-input--from')
    const inputTo = element.querySelector('.catalog-filter__range-input--to')
    window.$(inputRange).ionRangeSlider({

      onChange: function (data) {
        inputFrom.value = data.from
        inputTo.value = data.to
      },
      onUpdate: function (data) {
        inputFrom.value = data.from
        inputTo.value = data.to
      }
    });

    // 2. Save instance to variable
    const rangeInstance = window.$(inputRange).data("ionRangeSlider");
    rangeInstanceArray.push(rangeInstance)

    inputFrom.addEventListener('blur', (e) => {
      const isValid = +e.target.value >= rangeInstance.options.min
      if (!isValid) {
        inputFrom.value = rangeInstance.options.min
      }
      rangeInstance.update({
        from: isValid ? +e.target.value : rangeInstance.options.min,
        to: inputTo.value
      });
    })

    inputTo.addEventListener('blur', (e) => {
      const isValid = +e.target.value <= rangeInstance.options.max
      if (!isValid) {
        inputTo.value = rangeInstance.options.max
      }
      rangeInstance.update({
        from: inputFrom.value,
        to: isValid ? +e.target.value : rangeInstance.options.max,
      });
    })
  })

  resetNode.addEventListener('click', () => {
    formHeadNode.reset()
    formAsideNode.reset()
    rangeInstanceArray.forEach(instance => {
      instance.reset()
    })
  })

  openNode.addEventListener('click', () => {
    document.body.style.overflow = 'hidden'
    formAsideNode.classList.add('active')
  })

  closeNode.addEventListener('click', () => {
    document.body.style.overflow = 'visible'
    formAsideNode.classList.remove('active')
  })

}