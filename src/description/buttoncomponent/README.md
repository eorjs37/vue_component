## π Button

- ## props  
   |Name|type|required|default|description|
   |---------|------|----|-|------|
   |btntype|String|false|success|λ²νΌμ νμ μ’λ₯(success, warn, error)|

- ## emits
   |Name|description|
   |-----------|------|
   |onLoading|λ‘λ© μ¬λΆ|

- ## μ¬μ©μμ
Home.vue
```html javascript
<template>
    <Button :btntype="'green'" @onLoading="changeLoading1()">
        <template #buttonName v-if="!btnIsLoading1"> <font-awesome-icon icon="plus" /> λ±λ‘ </template>
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
					title: 'λ±λ‘',
					text: 'λ±λ‘μ€μλλ€.',
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