<template>
	<div class="image_component">
		<div class="image">
			<img class="image_fill" :src="image_url" />
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
import { extract } from '@/utils/utils';
import { notify } from '@kyvg/vue3-notification';
export default {
	name: 'Image',
	emits: ['onReturnFile'],
	props: {
		imageurl: {
			type: String,
			required: true,
			default: require('@/assets/images/no-pictures.png'),
		},
	},
	setup(props, context) {
		const image_url = ref(props.imageurl);

		const imageUpload = () => {
			const inputFile = document.getElementById('image_file');
			inputFile.click();

			inputFile.addEventListener('change', fileChangeEvent);
		};

		const deleteImage = () => {
			image_url.value = require('@/assets/images/no-pictures.png');
		};

		const fileChangeEvent = () => {
			const inputFile = document.getElementById('image_file');

			if (inputFile.files[0] && extract('IMAGE', inputFile.files[0])) {
				let reader = new FileReader();
				context.emit('onReturnFile', inputFile.files[0]);
				reader.onload = e => {
					image_url.value = e.target.result;
				};
				reader.readAsDataURL(inputFile.files[0]);
			} else {
				notify({
					type: 'error',
					title: '오류',
					text: '이미지 파일이 아닙니다.',
				});
			}
		};
		return {
			image_url,
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
	object-fit: cover;
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
