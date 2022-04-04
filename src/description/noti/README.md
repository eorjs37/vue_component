# vue3-notification 
github :  [vue3-notification](https://github.com/kyvg/vue3-notification)


# 사용법

## 1. main.js 추가
```javascript
import { createApp } from 'vue';
import App from './App.vue';
import Notifications from '@kyvg/vue3-notification';
const app = createApp(App);
app.use(Notifications);
app.mount('#app');
```


## 2. notification 사용법
```html javascript
<template>
    <notifications position="bottom center" />
</template>

<script>
import { notify } from '@kyvg/vue3-notification';
import { onMounted } from 'vue';
export default {
    name: 'App',
    onMounted(() => {
        notify({
            type:'error', //type은 warn,success,error가 존재
            title: '오류',
            text: '정확한 정보를 입력해주세요.',
        });
    })
}    
</script>
```