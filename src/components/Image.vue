<template>
	<div class="image_component">
		<div class="image">
			<img class="image_fill" :src="imageUrl" />
		</div>
		<div class="buttons">
			<div class="group">
				<button class="button register">등록</button>
			</div>
			<div class="group">
				<button class="button delete">삭제</button>
			</div>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';
export default {
	name: 'Image',
	setup() {
		const imageUrl = ref(require('@/assets/images/no-pictures.png'));

		return {
			imageUrl,
		};
	},
};
</script>

<style scoped lang="scss">
.image_component {
	display: inline-block;
	width: 240px;
}

.image {
	width: inherit;
	height: 150px;
	background-color: #f8f8f8;
	border: 1px solid #dcdcdc;
	box-sizing: border-box;
	border-radius: 5px;
}
.image_fill {
	width: inherit;
	height: inherit;
	object-fit: contain;
}

.buttons {
	width: 100%;

	overflow: hidden;
}

.group {
	float: left;
	width: 50%;
}
.button {
	width: 100%;
	border: none;
	box-sizing: border-box;
	padding: 0;
	cursor: pointer;
	font-size: 16px;
	font-weight: 700;
}

.register {
	background-color: #008cba;
}

.delete {
	background-color: #f44336;
}
</style>
