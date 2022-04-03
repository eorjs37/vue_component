import { createApp } from 'vue'
import App from './App.vue'
import Alert from '@/components/Alert.vue';
const app = createApp(App);
app.component('Alert',Alert);
app.mount('#app');
