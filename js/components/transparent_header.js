export default function transparentHeader () {
  const d = document,
    w = window,
    header = d.querySelector('.Header'),
    firstContent = d.querySelector('.u-firstContent'),
    firstContentHeight = w.getComputedStyle(firstContent, null).getPropertyValue('height').split('px')[0],
    headerHeight = w.getComputedStyle(header, null).getPropertyValue('height').split('px')[0]

  let scrollTopLimit = firstContentHeight - headerHeight
  //console.log(firstContentHeight, headerHeight, scrollTopLimit)

  function headerScroll () {
    let scrollTop = w.pageYOffset || d.documentElement.scrollTop

    if (scrollTop > scrollTopLimit) {
      //console.log('abajo', scrollTop)
      header.classList.add('is-active')
    } else {
      //console.log('arriba', scrollTop)
      header.classList.remove('is-active')
    }
  }

  d.addEventListener('DOMContentLoaded', headerScroll)
  w.addEventListener('scroll', headerScroll, false)
}
