<template>
	<div class="mw_1920">
		<SideBar class="sidebar"></SideBar>

		<div class="main">
			<h1 class="title">Table Component</h1>
			<!-- Table Component -->
			<Table :tlist="tableBody">
				<template #header>
					<th class="w_20per">Company</th>
					<th class="w_50per">Name</th>
					<th class="w_30per">Contury</th>
				</template>

				<template #list="{ row }">
					<td>{{ row.item1 }}</td>
					<td>{{ row.item2 }}</td>
					<td>{{ row.item3 }}</td>
				</template>
			</Table>
			<!-- Paging Component -->
			<Paging :totaldata="totalCount" :pagingdata="5" :pagingrange="5" @onPaging="pagingNext"></Paging>

			<!-- Date Picker -->
			<h1 class="title mt-30">Date Picker</h1>
			<Datepicker class="date_picker component" v-model="date"></Datepicker>

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

			<!-- Modal Component -->
			<h1 class="title mt-30">Modal Component</h1>
			<div class="component">
				<Button :btntype="'green'" @click="isModal400 = true">
					<template #buttonName> <font-awesome-icon icon="window-maximize" /> Modal400 </template>
				</Button>

				<Button class="ml-15" :btntype="'green'" @click="isModal800 = true">
					<template #buttonName> <font-awesome-icon icon="window-maximize" /> Modal800 </template>
				</Button>

				<Button class="ml-15" :btntype="'green'" @click="isModal1200 = true">
					<template #buttonName> <font-awesome-icon icon="window-maximize" /> Modal1200 </template>
				</Button>
			</div>
		</div>
	</div>

	<notifications position="bottom center" />
	<Modal400 :ismodal="isModal400" @exitmodal="exitModal400()"></Modal400>
	<Modal800 :ismodal="isModal800" @exitmodal="exitModal800()"></Modal800>
	<Modal1200 :ismodal="isModal1200" @exitmodal="exitModal1200()"></Modal1200>
</template>

<script>
import Table from '@/components/Table.vue';
import Paging from '@/components/Paging.vue';
import Image from '@/components/Image.vue';
import Button from '@/components/Button.vue';
import Modal400 from '@/components/Modal/Modal400.vue';
import Modal800 from '@/components/Modal/Modal800.vue';
import Modal1200 from '@/components/Modal/Modal1200.vue';
import { ref, onMounted } from 'vue';
import mock from '@/assets/mock/table';
import { notify } from '@kyvg/vue3-notification';
import Datepicker from 'vue3-datepicker';

//sidebar
import SideBar from '@/components/SideBar.vue';

//router
import { useRouter } from 'vue-router';
export default {
	name: 'App',
	components: {
		Table,
		Paging,
		Image,
		Button,
		Modal400,
		Modal800,
		Modal1200,
		Datepicker,
		SideBar,
	},
	setup() {
		const tableHead = ref(['company', 'Contact', 'Country']);
		const tableBody = ref([]);
		const totalCount = ref(0);
		const fileData = ref(null);
		const btnIsLoading1 = ref(false);
		const btnIsLoading2 = ref(false);
		const btnIsLoading3 = ref(false);
		const isModal400 = ref(false);
		const isModal800 = ref(false);
		const isModal1200 = ref(false);

		const date = ref(new Date());
		const router = useRouter();
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
				new Promise(resolve => {
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

		const exitModal400 = () => {
			isModal400.value = false;
		};

		const exitModal800 = () => {
			isModal800.value = false;
		};

		const exitModal1200 = () => {
			isModal1200.value = false;
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
			isModal400,
			isModal800,
			isModal1200,
			date,
			pagingNext,
			returnFile,
			changeLoading1,
			changeLoading2,
			changeLoading3,
			exitModal400,
			exitModal800,
			exitModal1200,
		};
	},
};
</script>

<style lang="scss">
@import '@/assets/style/reset.scss';
@import '@/assets/style/common.scss';

.date_picker {
	width: 100%;
	padding: 12px 18px;
	margin: 8px 0;
	display: inline-block;
	border: 1px solid #ccc;
	border-radius: 4px;
	box-sizing: border-box;

	&:focus {
		outline: none;
	}
}

.slideimage {
	width: 100%;
}

.swiper-container-free-mode > .swiper-wrapper {
	transition-timing-function: linear;
}
</style>
