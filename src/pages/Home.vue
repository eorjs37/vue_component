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
			<Image
				:imageurl="'https://imgnews.pstatic.net/image/425/2022/04/07/20220407032632026624fed20d3049816221754_20220407032901728.jpg?type=w647'"
				@onReturnFile="returnFile"
			></Image>
		</div>

		<!-- Button Component -->
		<h1 class="title mt-30">Button Component</h1>
		<div class="component">
			<Button :btntype="'green'" @onLoading="changeLoading1()">
				<template #buttonName v-if="!btnIsLoading1"> <font-awesome-icon icon="plus" /> 등록 </template>
				<template #buttonName v-else> <font-awesome-icon icon="spinner" spin /> </template>
			</Button>

			<Button class="ml-15" :btntype="'red'" @onLoading="changeLoading2()">
				<template #buttonName v-if="!btnIsLoading2"> <font-awesome-icon icon="minus" /> 삭제 </template>
				<template #buttonName v-else>
					<font-awesome-icon icon="spinner" spin />
				</template>
			</Button>

			<Button class="ml-15" :btntype="'blue'" @onLoading="changeLoading3()">
				<template #buttonName v-if="!btnIsLoading3"> <font-awesome-icon icon="list" /> 목록 </template>
				<template #buttonName v-else>
					<font-awesome-icon icon="spinner" spin />
				</template>
			</Button>
		</div>
	</div>
	<Footer></Footer>
	<notifications position="bottom center" />
</template>

<script>
import Table from '@/components/Table.vue';
import Paging from '@/components/Paging.vue';
import Image from '@/components/Image.vue';
import Button from '@/components/Button.vue';
import { ref, onMounted } from 'vue';
import mock from '@/assets/mock/table';
import Footer from '@/pages/Footer.vue';
import { notify } from '@kyvg/vue3-notification';
export default {
	name: 'App',
	setup() {
		const tableHead = ref(['company', 'Contact', 'Country']);
		const tableBody = ref([]);
		const totalCount = ref(0);
		const fileData = ref(null);
		const btnIsLoading1 = ref(false);
		const btnIsLoading2 = ref(false);
		const btnIsLoading3 = ref(false);
		const pagingNext = pageNumger => {
			//axios를 태우시오
			const page = pageNumger.value ? pageNumger.value : pageNumger;
			const { data, totalData } = mock;
			totalCount.value = totalData;
			tableBody.value = data[page - 1];
		};

		const returnFile = file => {
			fileData.value = file;
		};

		const changeLoading1 = () => {
			if (!btnIsLoading1.value) {
				btnIsLoading1.value = !btnIsLoading1.value;
				new Promise((resolve, reject) => {
					setTimeout(function () {
						btnIsLoading1.value = !btnIsLoading1.value;
						resolve('success');
					}, 3000);
				});
			} else {
				notify({
					type: 'warn',
					title: '등록',
					text: '등록중입니다.',
				});
			}
		};

		const changeLoading2 = () => {
			btnIsLoading2.value = !btnIsLoading2.value;
		};

		const changeLoading3 = () => {
			btnIsLoading3.value = !btnIsLoading3.value;
		};

		onMounted(() => {
			pagingNext(1);
		});

		return {
			tableHead,
			tableBody,
			totalCount,
			btnIsLoading1,
			btnIsLoading2,
			btnIsLoading3,
			pagingNext,
			returnFile,
			changeLoading1,
			changeLoading2,
			changeLoading3,
		};
	},
	components: {
		Table,
		Paging,
		Image,
		Button,
		Footer,
	},
};
</script>

<style lang="scss">
@import '@/assets/style/reset.scss';
@import '@/assets/style/common.scss';
</style>
