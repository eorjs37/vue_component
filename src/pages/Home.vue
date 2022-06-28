<template>
	<div>
		<h1 class="title">Table2 Component</h1>
		<div class="right-box">
			<Buttons :btntype="'blue'">
				<template #buttonName> <font-awesome-icon icon="plus" /> 추가 </template>
			</Buttons>
		</div>

		<!-- TableV2 Component -->
		<TableV2 :tabledata="tableData" @rowselected="onRowSelected">
			<!-- ############## Head Custom  ############## -->
			<template #HeadCompany>
				<th class="col1">111</th>
			</template>

			<!-- ############## Body Custom ############## -->
			<template #Company="{ row }">
				<span @click="clickEvent(row)"> {{ row.Company }}111 </span>
			</template>
		</TableV2>

		<!-- Paging Component -->
		<Paging :totaldata="11" :pagingdata="5" :pagingrange="5" @onPaging="pagingNext"></Paging>

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
			<Buttons :btntype="'green'" @onLoading="changeLoading1()">
				<template #buttonName v-if="!btnIsLoading1"> <font-awesome-icon icon="plus" /> 등록 </template>
				<template #buttonName v-else> <font-awesome-icon icon="spinner" spin /> </template>
			</Buttons>

			<Buttons class="ml-15" :btntype="'red'" @onLoading="changeLoading2()">
				<template #buttonName v-if="!btnIsLoading2"> <font-awesome-icon icon="minus" /> 삭제 </template>
				<template #buttonName v-else>
					<font-awesome-icon icon="spinner" spin />
				</template>
			</Buttons>

			<Buttons class="ml-15" :btntype="'blue'" @onLoading="changeLoading3()">
				<template #buttonName v-if="!btnIsLoading3"> <font-awesome-icon icon="list" /> 목록 </template>
				<template #buttonName v-else>
					<font-awesome-icon icon="spinner" spin />
				</template>
			</Buttons>
		</div>

		<!-- Modal Component -->
		<h1 class="title mt-30">Modal Component</h1>
		<div class="component">
			<Buttons :btntype="'green'" @click="isModal400 = true">
				<template #buttonName> <font-awesome-icon icon="window-maximize" /> Modal400 </template>
			</Buttons>

			<Buttons class="ml-15" :btntype="'green'" @click="isModal800 = true">
				<template #buttonName> <font-awesome-icon icon="window-maximize" /> Modal800 </template>
			</Buttons>

			<Buttons class="ml-15" :btntype="'green'" @click="isModal1200 = true">
				<template #buttonName> <font-awesome-icon icon="window-maximize" /> Modal1200 </template>
			</Buttons>

			<Buttons class="ml-15" :btntype="'green'" @click="studentListModal = true">
				<template #buttonName> <font-awesome-icon icon="window-maximize" /> StudentList </template>
			</Buttons>
		</div>

		<!-- Modal Component -->
		<h1 class="title mt-30">QuillEditor Component</h1>
		<div class="mt-30">
			<QuillEditor theme="snow" />
		</div>

		<!-- Modal Component -->
		<h1 class="title mt-30">Paging2 Component</h1>
		<Paging2 :totaldata="paging2.pTotalData" :pagingdata="paging2.pPagingdata" :pagingrange="paging2.pPagingrange"></Paging2>
	</div>

	<notifications position="bottom center" />
	<Modal400 :ismodal="isModal400" @exitmodal="exitModal400()"></Modal400>
	<Modal800 :ismodal="isModal800" @exitmodal="exitModal800()"></Modal800>
	<Modal1200 :ismodal="isModal1200" @exitmodal="exitModal1200()"></Modal1200>
	<StudentListModal :ismodal="studentListModal" @exitmodal="exitStudentListModal()"></StudentListModal>
</template>

<script>
import { ref, onMounted, reactive, computed } from 'vue';
import mock from '@/assets/mock/table';
import { notify } from '@kyvg/vue3-notification';
import Datepicker from 'vue3-datepicker';

//vue-quill(editor)
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
export default {
	name: 'App',
	inheritAttrs: true,
	components: {
		Datepicker,
		QuillEditor,
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
		const studentListModal = ref(false);

		const date = ref(new Date());

		const tableData = ref({
			head: [
				{ headkey: 'Company', colname: '회사명' },
				{ headkey: 'Name', colname: '이름' },
				{ headkey: 'Contury', colname: '국가' },
			],
			body: [],
		});

		const paging2 = reactive({
			pTotalData: 51,
			pPagingdata: 5,
			pPagingrange: 5,
		});

		const pagingNext = pageNumger => {
			//axios를 태우시오
			const page = pageNumger.value ? pageNumger.value : pageNumger;
			const { data, totalData } = mock;
			totalCount.value = totalData;
			tableBody.value = data[page - 1];
			tableData.value.body = data[page - 1];
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

		const exitStudentListModal = () => {
			studentListModal.value = false;
		};

		const clickEvent = row => {
			console.log(row);
		};

		const onRowSelected = item => {
			console.log('item : ', item);
		};

		const computeds = computed(() => {
			return data => {
				console.log('computed');
				return `$${data}`;
			};
		});

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
			studentListModal,
			date,
			tableData,
			pagingNext,
			returnFile,
			changeLoading1,
			changeLoading2,
			changeLoading3,
			exitModal400,
			exitModal800,
			exitModal1200,
			exitStudentListModal,
			paging2,
			clickEvent,
			onRowSelected,
			computeds,
		};
	},
};
</script>

<style lang="scss">
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

.right-box {
	display: flex;
	justify-content: flex-end;
}

.col1 {
	width: 25%;
}
</style>
