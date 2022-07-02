<template>
	<table>
		<!-- ##################### thead ##################### -->
		<thead>
			<tr>
				<th v-if="props.isCheckBox" class="txt_center">
					<input type="checkbox" class="checkbox" v-model="allChecked" :class="{ active: allChecked }" />
					<label for="cb1" @click="allCheck()"></label>
				</th>

				<template v-for="(item, index) in tabledata.head" :key="'head' + index">
					<slot :name="'Head' + item.headkey">
						<th>
							{{ item.colname }}
						</th>
					</slot>
				</template>
			</tr>
		</thead>
		<!--##################### tbody #####################-->
		<tbody>
			<template v-for="(rowItem, index) in bodyData" :key="'rowItem' + index">
				<tr>
					<td v-if="props.isCheckBox" class="txt_center">
						<input type="checkbox" class="checkbox" v-model="rowItem.isCheck" :class="{ active: rowItem.isCheck }" />
						<label for="cb1" @click="selectedCheckBox(rowItem)"></label>
					</td>
					<td v-for="(headitem, index) in tabledata.head" :key="'head' + index" @click="rowSelected(rowItem)">
						<slot :name="headitem.headkey" :row="rowItem">
							{{ rowItem[headitem.headkey] }}
						</slot>
					</td>
				</tr>
			</template>
			<tr v-if="tabledata.body.length === 0">
				<td colspan="99">검색결과가 없습니다</td>
			</tr>
		</tbody>
	</table>
</template>
<script>
import { onMounted, reactive, ref, toRefs, watch } from 'vue';
import _ from 'lodash';
export default {
	props: {
		isCheckBox: {
			type: Boolean,
			required: false,
			default: true,
		},
		tabledata: {
			type: Object,
			required: false,
			default() {
				return {
					head: [],
					body: [],
				};
			},
		},
	},
	emits: ['rowselected'],
	setup(props, context) {
		const allChecked = ref(false);
		const selectItem = reactive([]);
		const bodyData = ref(props.tabledata.body);
		/*
		 * @description: 전체 체크
		 */
		const allCheck = () => {
			allChecked.value = !allChecked.value;
			for (let item in bodyData.value) {
				bodyData.value[item]['isCheck'] = allChecked.value;
			}

			//isCheck true이면 존재하는지 확인 후 존재하지 않을때만 push
			//isCheck false이면 존재하는지 확인 후 존재하면 splice
			for (let item in bodyData.value) {
				const findIdx = selectItem.findIndex(findItem => findItem.id === bodyData.value[item]['id']);
				if (bodyData.value[item]['isCheck']) {
					if (findIdx < 0) {
						selectItem.push(bodyData.value[item]);
					}
				} else {
					if (findIdx > -1) {
						selectItem.splice(findIdx, 1);
					}
				}
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

		const rowSelected = item => {
			context.emit('rowselected', item);
		};

		/* reactive */
		watch(
			() => _.cloneDeep(props.tabledata.body),
			cur => {
				const copyCur = [...cur];
				for (let i = 0; i < copyCur.length; i++) {
					copyCur[i]['isCheck'] = false;
				}
				bodyData.value = copyCur;
				selectItem.length = 0;
				allChecked.value = false;
			},
		);

		onMounted(() => {
			console.log('TableComponent onMounted');
		});

		return {
			props,
			bodyData,
			allChecked,
			selectItem,
			allCheck,
			selectedCheckBox,
			rowSelected,
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
