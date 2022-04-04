<template>
	<div class="mw-1200">
		<div :class="'alert ' + alertkind">
			<strong>Danger!</strong>
			<div class="close_btn">&times;</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		//alert 종류
		alertkind: {
			type: String,
			required: true,
			default: 'info',
		},
	},
	setup() {},
};
</script>

<style scoped>
.mw-1200 {
	position: absolute;
	bottom: 50px;
	width: 40%;
	left: 50%;
	transform: translateX(-50%);
	animation: bottom_to_top 0.5s;
}
.alert {
	text-align: center;
	padding: 20px;
	border-radius: 10px;
	text-align: left;
	color: white;
}

.close_btn {
	float: right;
	color: white;
	font-weight: bold;
	font-size: 22px;
	line-height: 20px;
	cursor: pointer;
}

.danger {
	background-color: #f44336;
}

.success {
	background-color: #04aa6d;
}

.info {
	background-color: #2196f3;
}

.warning {
	background-color: #ff9800;
}

@keyframes bottom_to_top {
	0% {
		bottom: -5px;
	}
	50% {
		bottom: 25px;
	}
	100% {
		bottom: 50px;
	}
}
</style>
