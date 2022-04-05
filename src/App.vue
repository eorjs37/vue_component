<template>
	<div class="mw-1200">
		<h1 class="title">Table Component</h1>
		<!-- Table Component -->
		<Table :tlist="tableBody">
			<template #header>
				<th>Company</th>
				<th>Name</th>
				<th>Contury</th>
			</template>

			<template #list="{ row }">
				<td>{{ row.item1 }}</td>
				<td>{{ row.item2 }}</td>
				<td>{{ row.item3 }}</td>
			</template>
		</Table>
		<!-- Paging Component -->
		<Paging :totaldata="totalCount" :pagingdata="5" :pagingrange="5" @onPaging="pagingNext"></Paging>

		<!-- Image Component -->
		<h1 class="title">Image Component</h1>
		<div class="component">
			<Image></Image>
		</div>
	</div>

	<notifications position="bottom center" />
</template>

<script>
import Table from '@/components/Table.vue';
import Paging from '@/components/Paging.vue';
import Image from '@/components/Image.vue';
import { ref, onMounted } from 'vue';
import mock from './assets/mock/table';
export default {
	name: 'App',
	setup() {
		const tableHead = ref(['company', 'Contact', 'Country']);
		const tableBody = ref([]);
		const totalCount = ref(0);

		const pagingNext = pageNumger => {
			//axios를 태우시오
			const page = pageNumger.value ? pageNumger.value : pageNumger;
			const { data, totalData } = mock;
			totalCount.value = totalData;
			tableBody.value = data[page - 1];
		};
		onMounted(() => {
			pagingNext(1);
		});

		return {
			tableHead,
			tableBody,
			pagingNext,
			totalCount,
		};
	},
	components: {
		Table,
		Paging,
		Image,
	},
};
</script>

<style lang="scss">
@import '@/assets/style/reset.scss';
@import '@/assets/style/common.scss';
</style>
