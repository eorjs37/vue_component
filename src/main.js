import { createApp } from 'vue';
import App from './App.vue';
import Notifications from '@kyvg/vue3-notification';

//fort-awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faUserSecret, faSpinner);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(Notifications);
app.mount('#app');
