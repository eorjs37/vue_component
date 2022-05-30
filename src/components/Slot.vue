<template>
	<table>
		<thead>
			<tr>
				<slot name="header"></slot>
			</tr>
		</thead>
		<tbody>
			<template v-for="(item, index) in tlist" :key="'item' + index">
				<tr>
					<slot name="list" :row="item"></slot>
				</tr>
			</template>
		</tbody>
	</table>
</template>

<script>
export default {
	props: {
		tlist: {
			type: Array,
			default() {
				return [];
			},
		},
	},
};
</script>

<style></style>
