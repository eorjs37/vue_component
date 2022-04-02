<template>
	<div class="pagination">
		<a @click="prevPaging">&laquo;</a>
		<a v-for="item in page_range" :key="'paging' + item" :class="page_number === item ? 'active' : ''" @click="page_number = item">
			{{ item }}
		</a>
		<a @click="nextPaging">&raquo;</a>
	</div>
</template>

<script>
import { onMounted, ref } from 'vue';
export default {
	name: 'Paging',
	props: {
		//전체 데이터
		totaldata: {
			type: Number,
			required: true,
			default: 1,
		},
		//보여주고 싶은 데이터 개수
		pagingdata: {
			type: Number,
			required: true,
			default: 5,
		},
		//보여주고 싶은 페이징 단위
		pagingrange: {
			type: Number,
			required: true,
			default: 5,
		},
	},
	setup(props) {
		const page_number = ref(1);
		const totalpaging = ref(5);
		const page_range = ref(Array.from(new Array(props.pagingrange), (_, i) => i + 1));

		const prevPaging = () => {
			if (page_number.value === 1) {
				alert('첫번째 페이지 입니다.');
				return false;
			}
			page_number.value--;
			const new_range = return_new_range();
			page_range.value = new_range;
		};

		const nextPaging = () => {
			if (totalpaging.value <= page_number.value) {
				alert('마지막페이지 입니다.');
				return false;
			}
			page_number.value++;
			const new_range = return_new_range();
			page_range.value = new_range;
		};

		const return_new_range = () => {
			const new_range = Array.from(new Array(props.pagingrange), (_, i) => page_number.value + i);
			return new_range.filter(item => item <= totalpaging.value);
		};

		onMounted(() => {
			totalpaging.value = Math.ceil(props.totaldata / props.pagingdata);
		});

		return {
			page_number,
			totalpaging,
			page_range,
			prevPaging,
			nextPaging,
		};
	},
};
</script>

<style scoped>
.pagination {
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
}

.pagination a {
	color: black;
	float: left;
	padding: 8px 16px;
	text-decoration: none;
	cursor: pointer;
}

.pagination a.active {
	background-color: #4caf50;
	color: white;
}

.pagination a:hover:not(.active) {
	background-color: #ddd;
}
</style>
