import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"





/* add icons to the library */
library.add(faFacebook, faTwitter, faLinkedin, faPhone, faEnvelope, faClock, faChevronRight)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
