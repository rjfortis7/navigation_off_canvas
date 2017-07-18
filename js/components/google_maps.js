export default function googleMaps() {
  const d = document,
    w = window,
    mq = w.matchMedia('(min-width: 64em)'),
    map = d.querySelector('.GoogleMap')

  function showMap (mq) {
    return (mq.matches)
      ? map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.7961253699386!2d-99.16457235408592!3d19.37797846073825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ffa3f81151c7%3A0x6d8da7a2f98d9c75!2sParque+Arboledas!5e0!3m2!1ses-419!2smx!4v1490284104796" frameborder="0" style="border:0;" allowfullscreen></iframe>'
      : map.innerHTML = '<a href="https://goo.gl/maps/tUDUxaPcVcA2" target="_blank">Ver Mapa</a>'
  }

  mq.addListener(showMap)
  showMap(mq)
}
