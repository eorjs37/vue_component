import { createApp } from 'vue';
import App from './App.vue';
import Notifications from '@kyvg/vue3-notification';

//fort-awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret, faSpinner, faPlus, faMinus, faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faUserSecret, faSpinner, faPlus, faMinus, faList);

//router
import { router } from './router/router';

const app = createApp(App);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(Notifications);
app.mount('#app');
