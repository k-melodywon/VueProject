<template>
	<div>
		<div class="profile_2">
			<img src="./react.jpg" alt="React Project" style="width:50%; height:auto"  />
		</div>
		<br />
		<br />
		<div class="article_font">
			<a>react 기반으로 진행한 프로젝트다.</a><br />
			<a>component, useState 등의 리액트 기능을 적절히 사용하였다.</a><br />
			<a>핵심 기술은 동적으로 게시판 리스트가 생성되는 기술이다.</a><br />
			<a>학교 사이트를 발전시키려 했다는데 의의가 있다.</a>
		</div>
	</div>
</template>
  
<script>
export default {
	// 해당 컴포넌트에 대한 로직이나 데이터를 추가할 수 있습니다.
};
</script>
  
<style scoped>
.card_border {
	padding-top: 2%;
	display: flex;
	justify-content: center;
	width: 100%;
	height: 800px;
}


.article_border_project {
	display: inline-block;
	margin: 1%;
	box-shadow: 0px 0px 5px rgba(0, 0, 0, 0);
	transition: box-shadow 0.3s ease;
	width: 75%;
	filter: grayscale(100%);
	border-radius: 5px;
}

.article_border_project:hover {
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
	filter: none;
}

.profile_project {
	width: 30%;
	height: 30%;
	position: relative;
	float: right;
}

@font-face {
	font-family: 'KOTRA_BOLD-Bold';
	src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10-21@1.1/KOTRA_BOLD-Bold.woff') format('woff');
	font-weight: normal;
	font-style: normal;
}

.title {
	font-family: 'KOTRA_BOLD-Bold';
	text-decoration: none;
	color: #000;
	font-size: 40px;
	position: relative;
	display: inline;
	text-decoration: none;
}

.article_font_project {
	font-family: 'Chosunilbo_myungjo';
	position: relative;
	display: inline;
	color: #000;
}

</style>
  