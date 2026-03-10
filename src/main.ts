import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuestic } from 'vuestic-ui'

import App from './App.vue'
import router from './router'
import './assets/style.css'
import 'vuestic-ui/styles/essential.css'
import 'vuestic-ui/styles/typography.css'

const app = createApp(App)

app.use(createPinia())
app.use(createVuestic())
app.use(router)

app.mount('#app')
