<template>
	<div class="mail">
		<h1>메일패드 작성</h1>
	</div>
</template>

<script>
import { onMounted } from '@vue/runtime-core';
import { useRoute, useRouter } from 'vue-router';
export default {
	name: 'mail',
	setup() {
		const route = useRoute();
		const router = useRouter();
		onMounted(() => {
			console.log('route : ', route.params.username);
			console.log('router : ', router);
		});
	},
};
</script>

<style scoped lang="scss">
.mail {
	max-width: 512px;
	width: 100%;
	margin: 0 auto;
}
</style>
