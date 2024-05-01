import './styles/app.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { GDialog } from 'gitart-vue-dialog'
import { QuillEditor } from '@vueup/vue-quill'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()

app
  .mount('#app')
  .use(router)
  .use(pinia)
  .component('GDialog', GDialog)
  .component('QuillEditor', QuillEditor)
