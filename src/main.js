import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faXmark } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faXmark)

const app = createApp(App)

app
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(store)
    .mount('#app')
