import { createApp } from 'vue';
import App from './App.vue';
import Notifications from '@kyvg/vue3-notification';

//fort-awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import {
	faUserSecret,
	faSpinner,
	faPlus,
	faMinus,
	faList,
	faWindowMaximize,
	faXmark,
	faHome,
	faChalkboard,
	faChartBar,
	faRecycle,
	faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faUserSecret, faSpinner, faPlus, faMinus, faList, faWindowMaximize, faXmark, faHome, faChalkboard, faChartBar, faRecycle, faMagnifyingGlass);

//router
import { router } from './router/router';

//global component
import Paging from '@/components/Paging.vue';
import Table from '@/components/Table.vue';
import Image from '@/components/Image.vue';
import Button from '@/components/Button.vue';
import Modal400 from '@/components/Modal/Modal400.vue';
import Modal800 from '@/components/Modal/Modal800.vue';
import Modal1200 from '@/components/Modal/Modal1200.vue';

//date-picker
const app = createApp(App);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);

//global component
app.component('Paging', Paging);
app.component('Table', Table);
app.component('Image', Image);
app.component('Button', Button);
app.component('Modal400', Modal400);
app.component('Modal800', Modal800);
app.component('Modal1200', Modal1200);

app.use(Notifications);
app.mount('#app');
