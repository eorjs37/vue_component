<template>
	<transition name="fade">
		<Modal v-if="ismodal" @click="outslideClick($event)" :modaltype="'modal_w1200'">
			<template #modalhead>
				<h1 class="modal_title white bold">수강생검색</h1>
			</template>

			<template #close>
				<h1 class="modal_exit" @click="exitmodal()"><font-awesome-icon class="white" icon="xmark" /></h1>
			</template>

			<template #cotentbox>
				<div class="ov_hidden">
					<div class="searchbox">
						<input class="input" type="text" placeholder="수강생을 입력해주세요" />
						<div class="icon">
							<font-awesome-icon icon="magnifying-glass" />
						</div>
					</div>
				</div>

				<div class="mt-30">
					<Table :tlist="list">
						<template #header>
							<th class="w_20per">Name <font-awesome-icon icon="caret-down" class="pointer" /></th>
							<th class="w_80per">createDate <font-awesome-icon icon="caret-down" class="pointer" /></th>
						</template>

						<template #list="{ row }">
							<td>{{ row.name }}</td>
							<td>{{ row.createDate }}</td>
						</template>
					</Table>

					<Paging :totaldata="totalCount" :pagingdata="5" :pagingrange="5" @onPaging="pagingNext"></Paging>
				</div>
			</template>
		</Modal>
	</transition>
</template>

<script>
import Modal from '@/components/Modal/Modal.vue';
import { ref, reactive } from 'vue';
export default {
	emits: ['exitmodal'],
	props: {
		ismodal: {
			type: Boolean,
			required: true,
			default: false,
		},
	},
	components: {
		Modal,
	},
	setup(_, context) {
		const list = reactive([{ name: '최대건', createDate: '2022-01-01' }]);
		const totalCount = ref(26);
		const exitmodal = () => {
			context.emit('exitmodal');
		};
		/**
		 * @description 외부 클릭 이벤트
		 */
		const outslideClick = event => {
			const id = event.srcElement.id;
			if (id === 'modal_wrap') {
				exitmodal();
			}
		};

		const pagingNext = () => {};

		return {
			list,
			totalCount,
			exitmodal,
			outslideClick,
			pagingNext,
		};
	},
};
</script>

<style lang="scss" scoped>
.searchbox {
	display: flex;

	.input {
		box-sizing: border-box;
		border: none;
		width: 300px;
		border: 2px solid #eee;
		padding: 10px;

		&:focus {
			outline: none;
		}
	}

	.icon {
		box-sizing: border-box;
		background-color: #264db5;
		padding: 10px;
		text-align: center;
		color: #eee;
		cursor: pointer;
	}
}
</style>
