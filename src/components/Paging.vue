<template>
	<div class="page">
		<div class="pagination">
			<font-awesome-icon class="arrow" icon="angle-left" @click="prevPaging" />

			<span
				v-for="item in page_range"
				:key="'paging' + item"
				class="number"
				:class="page_number === item ? 'active' : ''"
				@click="
					page_number = item;
					movePaging();
				"
			>
				{{ item }}
			</span>
			<font-awesome-icon class="arrow" icon="angle-right" @click="nextPaging" />
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
			default: 50,
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
			}

			page_number.value--;
			if (page_number.value % props.pagingrange === 0) {
				const new_range = return_prev_range();
				page_range.value = new_range;
			}
			movePaging();
		};

		const nextPaging = () => {
			if (totalpaging.value <= page_number.value) {
				notify({
					type: 'warn',
					title: '경고',
					text: '마지막페이지 입니다.',
				});
				return false;
			}
			page_number.value++;
			if (page_number.value % props.pagingrange === 1) {
				const new_range = return_next_range();
				page_range.value = new_range;
			}

			movePaging();
		};

		const movePaging = () => {
			context.emit('onPaging', page_number);
		};

		onMounted(() => {
			totalpaging.value = Math.ceil(props.totaldata / props.pagingdata);
			page_range.value = return_next_range();
		});

		onUpdated(() => {
			totalpaging.value = Math.ceil(props.totaldata / props.pagingdata);
			if (totalpaging.value === 0) {
				page_range.value = [1];
				return false;
			}

			if (page_range.value.length === 0) {
				page_range.value = return_next_range();
			}
		});

		const return_next_range = () => {
			const new_range = Array.from(new Array(props.pagingrange), (_, i) => page_number.value + i);
			return new_range.filter(item => item <= totalpaging.value);
		};

		const return_prev_range = () => {
			const new_range = Array.from(new Array(props.pagingrange), (_, i) => page_number.value - i);
			return new_range.sort((a, b) => a - b);
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

<style scoped lang="scss">
.page {
	position: relative;
	margin-top: 25px;
	height: 32px;
}
.pagination {
	position: absolute;
	left: 50%;
	transform: translateX(-50%);

	.number {
		color: black;
		cursor: pointer;
		padding: 8px 16px;
		user-select: none;
	}

	.active {
		background-color: #264db5;
		color: #fff;
	}
}

.arrow {
	padding: 0 10px;
	cursor: pointer;
	display: inline-block;
	line-height: 32px;
}
</style>
