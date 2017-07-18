import Hammer from 'hammerjs'

export default function navigationOffCanvas() {
  const d = document,
    w = window,
    panel = d.querySelector('.Panel'),
    panelBtn = d.querySelector('.Panel-button'),
    mq = w.matchMedia('(min-width: 64em)'),
    hamburger = d.querySelector('.hamburger'),
    hammerBody = new Hammer(d.body),
    hammerPanel = new Hammer(panel)

  function closePanel (mq) {
    if (mq.matches) {
      panel.classList.remove('is-active')
      hamburger.classList.remove('is-active')
    }
  }

  function hammerTouches (e) {
    if (e.type == 'swipeleft') {
      panel.classList.remove('is-active')
      hamburger.classList.remove('is-active')
    } else if (e.type == 'swiperight') {
      panel.classList.add('is-active')
      hamburger.classList.add('is-active')
    }
  }

  panelBtn.addEventListener('click', e => {
    e.preventDefault()
    panel.classList.toggle('is-active')
    hamburger.classList.toggle('is-active')
  })

  mq.addListener(closePanel)
  closePanel(mq)

  hammerPanel.on('swipeleft  swiperight', hammerTouches)
  hammerBody.on('swipeleft  swiperight', hammerTouches)
}
