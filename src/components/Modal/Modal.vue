<template>
	<div id="modal_wrap" class="modal_wrap">
		<div class="modal" :class="width" id="modal">
			<!-- Modal Head -->
			<div class="modal_head">
				<slot name="modalhead">
					<h3 class="modal_title">헤더내용</h3>
				</slot>
				<slot name="close">
					<h1 class="modal_exit">닫기아이콘</h1>
				</slot>
			</div>
			<!-- Modal Body -->
			<div class="modal_body">
				<div class="modal_content">
					<h1 class="title_box">
						<slot name="titlebox">컨텐트 제목을 작성하세요</slot>
					</h1>
					<div class="content_box">
						<slot name="cotentbox">컨텐트 내용을 채우세요</slot>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';
export default {
	props: {
		modaltype: {
			type: String,
			required: true,
			default: 'modal_w400',
		},
	},
	setup(props) {
		const width = ref(props.modaltype);

		return {
			width,
		};
	},
};
</script>

<style lang="scss" scoped>
.modal_wrap {
	display: flex;
	justify-content: center; //수평 중앙정렬
	align-items: center; //수직 중앙정렬
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.4);
}

.modal {
	width: 100%;
	border-radius: 5px;
	overflow: hidden;
	background-color: #264db5;
	box-shadow: 5px 10px 10px 1px rgba(0, 0, 0, 0.3);
}

.modal_w400 {
	max-width: 400px;
}

.modal_w800 {
	max-width: 800px;
}

.modal_w1200 {
	max-width: 1200px;
}

.modal_head {
	width: 100%;
	font-size: 30px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	line-height: 45px;

	.title {
		padding: 0 10px;
	}
}

.modal_body {
	width: 100%;
	background-color: #ffffff;

	.modal_content {
		padding: 30px;
		min-height: 300px;

		.title_box {
			text-align: center;
			margin-bottom: 18px;
			font-weight: bold;
		}

		.content_box {
			word-break: break-all;
		}
	}
}
</style>
