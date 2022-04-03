<template>
	<div class="mw-1200">
		<h1>Table Component</h1>
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
		<div class="page">
			<Paging :totaldata="totalCount" :pagingdata="5" :pagingrange="5" @onPaging="pagingNext"></Paging>
		</div>
	</div>
</template>

<script>
import Table from '@/components/Table.vue';
import Paging from '@/components/Paging.vue';
import { ref, onMounted } from 'vue';
import mock from './assets/mock/table';
export default {
	name: 'App',
	setup() {
		const tableHead = ref(['company', 'Contact', 'Country']);
		const tableBody = ref([]);
		const totalCount = ref(6);

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
	},
};
</script>

<style>
body {
	margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	margin: 0;
}

.mw-1200 {
	max-width: 1200px;
	width: 100%;
	margin: 0 auto;
}

.page {
	position: relative;
	margin-top: 10px;
}
</style>
