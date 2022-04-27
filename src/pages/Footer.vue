<template>
	<footer>
		<div class="wrap">
			<div class="familysite border_bottom pb-30px">
				<ul class="ov_hidden">
					<li class="float_left ov_hidden">
						<div class="menu mr-50px">
							<h3 class="menu_title">기업교육: 글로벌 역량</h3>
							<ul>
								<li class="sub_menu_item">커뮤니케이션 역량 강화</li>
								<li class="sub_menu_item">글로벌 직무역량 강화</li>
								<li class="sub_menu_item">이문화 역량 강화</li>
								<li class="sub_menu_item">리더십 솔루션</li>
								<li class="sub_menu_item">법정필수교육</li>
								<li class="sub_menu_item">진단 및 컨설팅</li>
								<li class="sub_menu_item">교육문의</li>
							</ul>
						</div>

						<div class="menu mr-50px">
							<h3 class="menu_title">전화영어: 모바일화상</h3>
							<ul>
								<li class="sub_menu_item">무료 레벨테스트</li>
								<li class="sub_menu_item">수강신청</li>
								<li class="sub_menu_item">과정소개</li>
								<li class="sub_menu_item">주니어 과정</li>
								<li class="sub_menu_item">기업문의</li>
							</ul>
						</div>

						<div class="menu mr-50px">
							<h3 class="menu_title">i:MOOC: 신개념 이러닝</h3>
							<ul>
								<li class="sub_menu_item">Language Cafeteria</li>
								<li class="sub_menu_item">Cross-Cultural</li>
								<li class="sub_menu_item">REUTERS</li>
								<li class="sub_menu_item">MOOCs</li>
								<li class="sub_menu_item">Mind-Balance</li>
							</ul>
						</div>

						<div class="menu mr-50px">
							<h3 class="menu_title">SPAC: 말하기 평가센터</h3>
							<ul>
								<li class="sub_menu_item">SPAC^(영어/중국어/베트남어)</li>
							</ul>
						</div>

						<div class="menu mr-50px">
							<h3 class="menu_title">gCAT : 글로벌 역량진단</h3>
							<ul>
								<li class="sub_menu_item">gCAT</li>
							</ul>
						</div>

						<div class="menu">
							<h3 class="menu_title">회사소개</h3>
							<ul>
								<li class="sub_menu_item">경영철학</li>
								<li class="sub_menu_item">기업문화</li>
								<li class="sub_menu_item">CEO 메세지</li>
								<li class="sub_menu_item">논문 및 발표</li>
								<li class="sub_menu_item">회사연혁</li>
								<li class="sub_menu_item">보도자료</li>
								<li class="sub_menu_item">인재채용</li>
							</ul>
						</div>
					</li>
				</ul>
			</div>
			<div class="companyinformation"></div>
		</div>
	</footer>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
footer {
	width: 100%;
	margin: 0 auto;
	background-color: #303740;
}

.wrap {
	max-width: 1200px;
	width: 100%;
	margin: auto;
	display: flex;
	flex-direction: column;
	padding: 30px 0;

	.menu {
		float: left;
	}

	.menu_title {
		font-size: 14px;
		color: #ffffff;
		line-height: 1.6rem;
	}

	.sub_menu_item {
		font-size: 12px;
		color: #999999;
		line-height: 2.1rem;
		cursor: pointer;
	}
}
</style>
