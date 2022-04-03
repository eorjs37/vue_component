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
		<button @click="addComponent">버튼</button>
		<button @click="removeComponent">제거</button>
		<!-- 컴퍼넌트 동적 추가 -->
		<component v-for="(item,index) in alert" :is="item.name" :key="'alert'+index" :alertkind="item.alertkind"></component>
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
		const totalCount = ref(0);
		const alert = ref([]);

		const pagingNext = pageNumger => {
			//axios를 태우시오
			const page = pageNumger.value ? pageNumger.value : pageNumger;
			const { data, totalData } = mock;
			totalCount.value = totalData;
			tableBody.value = data[page - 1];
		};

		const addComponent = () =>{
			alert.value.push({
				'name':'Alert',
				'alertkind':'danger'
			})
		}

		const removeComponent = () =>{
			if(alert.value.length > 0) alert.value.splice(alert.value.length-1,1);
		}

		onMounted(() => {
			pagingNext(1);
		});

		return {
			tableHead,
			tableBody,
			pagingNext,
			totalCount,
			alert,
			addComponent,
			removeComponent
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
