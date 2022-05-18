<template>
	<div>
		<h1 class="menu_title">MENU</h1>

		<div class="menu_list">
			<div class="item">
				<font-awesome-icon icon="home" />
				<span class="pointer" @click="move('/home')"> 홈 </span>
			</div>
			<div class="item">
				<font-awesome-icon icon="chalkboard" />
				<span class="pointer" @click="move('/board')"> 게시판 </span>
			</div>
			<div class="item">
				<font-awesome-icon icon="chart-bar" />
				<span class="pointer"> 차트 </span>
			</div>
			<div class="item">
				<font-awesome-icon icon="recycle" />
				<span class="pointer"> 컴퍼넌트 </span>
			</div>
		</div>
	</div>
</template>

<script>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
export default {
	setup() {
		const router = useRouter();
		const sidebar = reactive({});

		const move = str => {
			router.push(str);
		};

		return {
			sidebar,
			move,
		};
	},
};
</script>

<style></style>
