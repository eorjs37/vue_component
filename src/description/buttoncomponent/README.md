## 🛕 Button

- ## props  
   |Name|type|required|default|description|
   |---------|------|----|-|------|
   |btntype|String|false|success|버튼의 타입 종류(success, warn, error)|

- ## emits
   |Name|description|
   |-----------|------|
   |onLoading|로딩 여부|

- ## 사용예시
Home.vue
```html javascript
<template>
    <Button :btntype="'green'" @onLoading="changeLoading1()">
        <template #buttonName v-if="!btnIsLoading1"> <font-awesome-icon icon="plus" /> 등록 </template>
        <template #buttonName v-else> <font-awesome-icon icon="spinner" spin /> </template>
    </Button>
</template>
<script>
import Button from '@/components/Button.vue';
import { notify } from '@kyvg/vue3-notification';
export default {
    setup() {
        const btnIsLoading1 = ref(false);

        const changeLoading1 = () => {
			if (!btnIsLoading1.value) {
				btnIsLoading1.value = !btnIsLoading1.value;
				new Promise((resolve, reject) => {
					setTimeout(function () {
						btnIsLoading1.value = !btnIsLoading1.value;
						resolve('success');
					}, 3000);
				});
			} else {
				notify({
					type: 'warn',
					title: '등록',
					text: '등록중입니다.',
				});
			}
		};

        return {
            btnIsLoading1,
            changeLoading1
        }
    },
	components: {
        Button,
    }
}
</script>
```  