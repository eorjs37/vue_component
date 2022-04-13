<template>
	<div class="page">
		<div class="pagination">
			<a @click="prevPaging">&laquo;</a>
			<a
				v-for="item in page_range"
				:key="'paging' + item"
				:class="page_number === item ? 'active' : ''"
				@click="
					page_number = item;
					movePaging();
				"
			>
				{{ item }}
			</a>
			<a @click="nextPaging">&raquo;</a>
		</div>
	</div>
</template>

<script>
import { ref, onMounted, onUpdated, computed } from 'vue';
import { notify } from '@kyvg/vue3-notification';
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
	emits: ['onPaging'],
	setup(props, context) {
		const page_number = ref(1);
		const totalpaging = ref(5);
		const page_range = ref([]);

		const prevPaging = () => {
			if (page_number.value === 1) {
				notify({
					type: 'warn',
					title: '경고',
					text: '첫번째 페이지 입니다.',
				});
				return false;
			} else if (page_range.value[0] === 1) {
				notify({
					type: 'warn',
					title: '경고',
					text: '존재하지 않습니다',
				});
				return false;
			}
			page_number.value--;
			const new_range = return_new_range();
			page_range.value = new_range;
			movePaging();
		};

		const nextPaging = () => {
			if (totalpaging.value <= page_number.value || totalpaging.value === page_range.value[page_range.value.length - 1]) {
				notify({
					type: 'warn',
					title: '경고',
					text: '마지막페이지 입니다.',
				});
				return false;
			}
			page_number.value++;
			const new_range = return_new_range();
			page_range.value = new_range;
			movePaging();
		};

		const movePaging = () => {
			context.emit('onPaging', page_number);
		};

		onMounted(() => {
			totalpaging.value = Math.ceil(props.totaldata / props.pagingdata);
			page_range.value = return_new_range();
		});

		onUpdated(() => {
			totalpaging.value = Math.ceil(props.totaldata / props.pagingdata);
			if (totalpaging.value === 0) {
				page_range.value = [1];
				return false;
			}

			if (page_range.value.length === 0) {
				page_range.value = return_new_range();
			}
		});

		const return_new_range = () => {
			const new_range = Array.from(new Array(props.pagingrange), (_, i) => page_number.value + i);
			return new_range.filter(item => item <= totalpaging.value);
		};

		return {
			page_number,
			totalpaging,
			page_range,
			prevPaging,
			nextPaging,
			movePaging,
		};
	},
};
</script>

<style scoped>
.page {
	position: relative;
	margin-top: 25px;
	height: 32px;
}
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
