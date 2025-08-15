import { createApp } from 'vue'
import Header from './Header.vue'
import App from './Accueil.vue'

import './styles/reset.scss'

const app = createApp(App)
app.component('HeaderComponent', Header)
app.mount('#app')

