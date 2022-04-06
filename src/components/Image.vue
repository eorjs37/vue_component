<template>
	<div class="image_component">
		<div class="image">
			<img class="image_fill" :src="imageUrl" />
		</div>
		<div class="buttons">
			<div class="group">
				<button class="button register" @click="imageUpload">등록</button>
			</div>
			<div class="group">
				<button class="button delete" @click="deleteImage">삭제</button>
			</div>
		</div>
		<input type="file" id="image_file" class="image_file" />
	</div>
</template>

<script>
import { ref } from 'vue';
export default {
	name: 'Image',
	setup() {
		const imageUrl = ref(require('@/assets/images/no-pictures.png'));

		const imageUpload = () => {
			const inputFile = document.getElementById('image_file');
			inputFile.click();

			inputFile.addEventListener('change', fileChangeEvent);
		};

		const deleteImage = () => {
			imageUrl.value = require('@/assets/images/no-pictures.png');
		};

		const fileChangeEvent = () => {
			const inputFile = document.getElementById('image_file');
			if (inputFile.files[0]) {
				let reader = new FileReader();
				reader.onload = e => {
					imageUrl.value = e.target.result;
				};
				reader.readAsDataURL(inputFile.files[0]);
			}
		};
		return {
			imageUrl,
			imageUpload,
			deleteImage,
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
	background-color: #405cf5;
}

.delete {
	background-color: #f44336;
}

.image_file {
	display: none;
}
</style>
