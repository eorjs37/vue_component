import { createApp } from 'vue';
import App from './App.vue';
import Notifications from '@kyvg/vue3-notification';

//fort-awesome
import 'plugins/fontawesome.js';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

//router
import { router } from 'router/router';

import moudles from 'utils/filters';

//global component
import Paging from '@/components/Paging.vue';
import Table from '@/components/Table.vue';
import Image from '@/components/Image.vue';
import Button from '@/components/Button.vue';
import Modal400 from '@/components/Modal/Modal400.vue';
import Modal800 from '@/components/Modal/Modal800.vue';
import Modal1200 from '@/components/Modal/Modal1200.vue';
import StudentListModal from '@/components/Modal/StudentListModal.vue';
import Paging2 from '@/components/Paging2.vue';

//date-picker
const app = createApp(App);
app.use(router);

//font-awesome-icon
app.component('font-awesome-icon', FontAwesomeIcon);

//global filter
app.config.globalProperties.$filters = moudles;

//global component
app.component('Paging', Paging);
app.component('Table', Table);
app.component('Image', Image);
app.component('Buttons', Button);
app.component('Modal400', Modal400);
app.component('Modal800', Modal800);
app.component('Modal1200', Modal1200);
app.component('StudentListModal', StudentListModal);
app.component('Paging2', Paging2);

app.use(Notifications);
app.mount('#app');
