import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import mavonEditor from 'mavon-editor'
// import 'mavon-editor/dist/css/index.css'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

const app = createApp(App)

app.use(router)
// app.use(mavonEditor)
app.component('QuillEditor', QuillEditor)

app.mount('#app')
