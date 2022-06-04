<template>
	<transition name="fade">
		<Modal v-if="ismodal" @click="outslideClick($event)" :modaltype="'modal_w400'">
			<template #modalhead>
				<h1 class="modal_title white bold">Modal Head</h1>
			</template>

			<template #close>
				<h1 class="modal_exit" @click="exitmodal()"><font-awesome-icon class="white" icon="xmark" /></h1>
			</template>

			<template #titlebox>Modal Contents Header</template>

			<template #cotentbox>
				컨텐츠 내용을 작성하는 곳입니다. <br />
				content_box
			</template>
		</Modal>
	</transition>
</template>

<script>
import Modal from '@/components/Modal/Modal.vue';
import { onMounted } from '@vue/runtime-core';
export default {
	emits: ['exitmodal'],
	props: {
		ismodal: {
			type: Boolean,
			required: true,
			default: false,
		},
	},
	setup(_, context) {
		const exitmodal = () => {
			context.emit('exitmodal');
		};

		/**
		 * @description 외부 클릭 이벤트
		 */
		const outslideClick = event => {
			const id = event.srcElement.id;
			if (id === 'modal_wrap') {
				exitmodal();
			}
		};

		return {
			exitmodal,
			outslideClick,
		};
	},
	components: {
		Modal,
	},
};
</script>

<style lang="scss" scoped></style>
