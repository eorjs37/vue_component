<template>
	<div class="paging2">
		<div class="pagination2">
			<font-awesome-icon class="arrow" icon="angles-left" @click="paging2.prev()" />
			<span
				v-for="(item, index) in paging2.pagingArray"
				:key="'paging2' + index"
				class="number"
				:class="{ active: paging2.currentPageNumber === item }"
				@click="paging2.currentPageNumber = item"
			>
				{{ item }}
			</span>
			<font-awesome-icon class="arrow" icon="angles-right" @click="paging2.next()" />
		</div>
	</div>
</template>

<script>
import { onMounted, reactive } from 'vue';
import { notify } from '@kyvg/vue3-notification';
export default {
	name: 'Paging2',
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
		const paging2 = reactive({
			totalPaging: 1,
			pagingArray: [],
			currentPageNumber: 1,
			prev: () => {
				if (paging2.currentPageNumber === 1) {
					notify({
						type: 'warn',
						title: '경고',
						text: '첫번째 페이지 입니다.',
					});
					return false;
				}

				paging2.currentPageNumber--;
			},
			next: () => {
				if (paging2.currentPageNumber >= paging2.pagingArray[paging2.pagingArray.length - 1]) {
					notify({
						type: 'warn',
						title: '경고',
						text: '마지막페이지 입니다.',
					});
					return false;
				}
				paging2.currentPageNumber++;
			},
		});
		onMounted(() => {
			//전체 페이징 구하기
			paging2.totalPaging = Math.ceil(props.totaldata / props.pagingrange);

			//페이지 Array 만들기
			const pageArray = Array.from(new Array(paging2.totalPaging), (_, index) => 1 + index);

			// 현재페이지로부터 + 보여주고싶은 페이징단위-1
			const range = paging2.currentPageNumber + (props.pagingrange - 1);
			const newPageArray = pageArray.slice(paging2.currentPageNumber - 1, range);
			paging2.pagingArray = newPageArray;

			//
		});

		return {
			paging2,
		};
	},
};
</script>

<style lang="scss">
.paging2 {
	margin-top: 30px;
	position: relative;
}

.arrow {
	padding: 0 10px;
	cursor: pointer;
}

.pagination2 {
	position: absolute;
	left: 50%;
	transform: translateX(-50%);

	.number {
		color: black;
		cursor: pointer;
		padding: 8px 16px;
	}

	.active {
		background-color: #4caf50;
		color: #fff;
	}
}
</style>
