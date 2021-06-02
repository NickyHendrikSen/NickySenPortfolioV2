import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAnimateOnScroll from 'vue-animate-onscroll'
import ScrollAnimation from './directives/scrollanimation'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { fab, faJs, faVuejs, faLinkedinIn, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee)

library.add(faCoffee, faJs, faVuejs, faLinkedinIn, faLinkedin, faYoutube, fab);
Vue.component('fa', FontAwesomeIcon)

Vue.use(VueAnimateOnScroll)
Vue.directive('scrollanimation', ScrollAnimation)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

