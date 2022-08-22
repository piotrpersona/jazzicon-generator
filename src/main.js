import { createApp } from 'vue';
import App from './App.vue';
import Jazzicon from 'vue3-jazzicon/src/components';


const app = createApp(App);
app.component(Jazzicon.name, Jazzicon);
app.mount('#app');
