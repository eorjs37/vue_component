<template>
	<table>
		<thead>
			<tr>
				<th v-if="props.isCheckBox">
					<input type="checkbox" class="checkbox" v-model="allChecked" :class="{ active: allChecked }" />
					<label for="cb1" @click="allCheck()"></label>
				</th>
				<slot name="header">
					<th colspan="99">헤더에 데이터를 넣어주세요</th>
				</slot>
			</tr>
		</thead>
		<tbody>
			<template v-for="(item, index) in tlist" :key="'item' + index">
				<tr>
					<td v-if="props.isCheckBox">
						<input type="checkbox" class="checkbox" v-model="item.isCheck" :class="{ active: item.isCheck }" />
						<label for="cb1" @click="selectedCheckBox(item)"></label>
					</td>
					<slot name="list" :row="item"></slot>
				</tr>
			</template>
			<tr v-if="tlist.length === 0">
				<td colspan="99">검색결과가 없습니다</td>
			</tr>
		</tbody>
	</table>
</template>
<script>
import { reactive, ref } from 'vue';
export default {
	props: {
		isCheckBox: {
			type: Boolean,
			required: false,
			default: false,
		},
		tlist: {
			type: Array,
			default() {
				return [];
			},
		},
	},
	setup(props) {
		const allChecked = ref(false);
		const selectItem = reactive([]);
		/*
		 * @description: 전체 체크
		 */
		const allCheck = () => {
			allChecked.value = !allChecked.value;
			for (let item in props.tlist) {
				props.tlist[item].isCheck = allChecked.value;
			}
		};

		const selectedCheckBox = item => {
			item.isCheck = !item.isCheck;

			if (!item.isCheck) {
				const findIdx = selectItem.findIndex(findItem => findItem.id === item.id);
				if (findIdx > -1) {
					selectItem.splice(findIdx, 1);
				}
			} else {
				selectItem.push(item);
			}
		};

		return {
			props,
			allChecked,
			selectItem,
			allCheck,
			selectedCheckBox,
		};
	},
};
</script>

<style lang="scss">
input.checkbox {
	position: relative;
	display: none;
}
input.checkbox + label {
	display: inline-block;
	width: 18px;
	height: 18px;
	border: 1px solid #eee;
	border-radius: 3px;
	cursor: pointer;
	position: relative;
	background-color: #fff;
}

input.checkbox.active + label::after {
	content: '✔';
	font-size: 12px;
	width: 12px;
	height: 12px;
	text-align: center;
	position: absolute;
	font-weight: 700;
	color: #fff;
	background-color: #274cb1;
	border-radius: 3px;
	left: 0;
	top: 0;
	padding: 3px;
}
</style>
