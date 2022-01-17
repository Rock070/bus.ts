import { createApp } from 'vue'
import App from './App.vue'
import { tw } from 'twind'

const app = createApp(App)

app.config.globalProperties.tw = tw
app.mount('#app')
