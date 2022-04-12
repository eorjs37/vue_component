<template>
	<button class="button" :class="btntype" @click="btnClick()">
		<font-awesome-icon v-if="loading" icon="spinner" spin /> <slot name="buttonName"> 버튼명을입력하세요 </slot>
	</button>
</template>

<script>
import { toRef } from 'vue';

export default {
	emits: ['onLoading'],
	props: {
		btntype: {
			type: String,
			required: false,
			default: 'success',
		},
		isloading: {
			type: Boolean,
			required: true,
			default: false,
		},
	},
	setup(props, context) {
		const loading = toRef(props, 'isloading');

		const btnClick = () => {
			context.emit('onLoading');
		};

		return {
			loading,
			btnClick,
		};
	},
};
</script>

<style lang="scss" scoped>
.button {
	background-color: #fff;
	border: none;
	color: #000;
	text-align: center;
	font-size: 16px;
	padding: 16px 32px;
	border: 2px solid #4caf50;
	cursor: pointer;
	transition-duration: 0.4s;

	&:hover {
		background-color: #4caf50;
		color: white;
	}
}

.green {
	border: 2px solid #4caf50;

	&:hover {
		background-color: #4caf50;
		color: white;
	}
}

.red {
	border: 2px solid #f44336;

	&:hover {
		background-color: #f44336;
		color: white;
	}
}

.blue {
	border: 2px solid #008cba;

	&:hover {
		background-color: #008cba;
		color: white;
	}
}
</style>
