import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/styles.css' 
import 'bootstrap/dist/css/bootstrap.min.css'
import VueSplide from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import store from './store';
import axios from "axios";
axios.defaults.baseURL="http://localhost:8000/api/";
const app = createApp(App).use(store).use(router).use( VueSplide );
app.mount('#app')

this.$request
