import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

import PiniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(PiniaPluginPersistedstate)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
