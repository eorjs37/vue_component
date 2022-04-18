<template>
	<Modal>
		<template #modalhead> Modal Header </template>

		<template #titlebox>Modal Contents Header</template>

		<template #cotentbox>
			컨텐츠 내용을 작성하는 곳입니다. <br />
			content_box
		</template>
	</Modal>
</template>

<script>
import Modal from '@/components/Modal/Modal.vue';
export default {
	components: {
		Modal,
	},
};
</script>

<style lang="scss" scoped></style>
