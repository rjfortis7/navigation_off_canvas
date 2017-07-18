import navigationOffCanvas from './components/navigation_off_canvas'
import transparentHeader from './components/transparent_header'
import youtubeVideo from './components/youtube_video'
import headerVideo from './components/header_video'
import googleMaps from './components/google_maps'
import contactForm from './components/contact_form'

navigationOffCanvas()
transparentHeader()
youtubeVideo()

if ( location.pathname.includes('contacto') ) {
  headerVideo()
  googleMaps()
  contactForm()
}
