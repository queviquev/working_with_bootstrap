const myCarouselElement = document.querySelector('#carousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})

const scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#nav'
})



