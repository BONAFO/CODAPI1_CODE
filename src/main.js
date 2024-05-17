import "./assets/base.css"

import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/router";
import 'bootstrap/dist/css/bootstrap.min.css';
import { registerPlugins } from '@/plugins'
const app = createApp(App);

app.use(router)

registerPlugins(app)

app.mount('#app')
