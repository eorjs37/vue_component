<template>
	<div class="mw_1920">
		<SideBar class="sidebar"></SideBar>
		<router-view></router-view>
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

<style></style>
