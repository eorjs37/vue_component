<template>
	<div class="mw_1920">
		<SideBar class="sidebar"></SideBar>
		<router-view class="main"></router-view>
	</div>
</template>

<script>
//sidebar
import SideBar from '@/components/SideBar.vue';
export default {
	name: 'Main',
	components: {
		SideBar,
	},
};
</script>

<style lang="scss">
@import '@/assets/style/reset.scss';
@import '@/assets/style/common.scss';
</style>
