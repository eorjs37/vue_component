<template>
	<transition name="fade">
		<Modal v-if="ismodal">
			<template #modalhead> Modal Header </template>

			<template #close>
				<h1 @click="exitmodal()">close</h1>
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

		return {
			exitmodal,
		};
	},
	components: {
		Modal,
	},
};
</script>

<style lang="scss" scoped>
.fade-enter-active {
	animation: fadein 3s;
}

.fade-leave-active {
	animation: fadeout 3s;
}

@keyframes fadein {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}

@keyframes fadeout {
	from {
		opacity: 1;
	}
	to {
		opacity: 0;
	}
}
</style>
