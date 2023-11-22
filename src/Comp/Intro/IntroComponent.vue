<template>
  <router-link to="/portfolio/intro">
    <div class="article_border">
      <div style="margin: 2%;">
        <img class="profile" :src="require('./profile.jpg')" />
        <a class="title">김여원, 현대 사회의 희망을 이끄는<br />젊은 리더로 주목</a>
        <div class="article_font_int">
          <br />
          김여원은 뛰어난 머신러닝, 스프링, 리액트에 대한 전문 지식을 보유한 주목받는 개발자로 성장하고 있다.
          그녀는 '아이디어뱅크'라는 타이틀과 함께 현재까지의 학력, 자격증, 기술 스택을 효과적으로 표현한 이력서로 인재로서의 능력을 입증하고 있다.
          얻은 자격증으로는 운전면허증, HSK, 리눅스 마스터를 소지하고 있어 다양한 분야에서의 역량을 보여주고 있다.
          <br />
          특히, 그녀의 기술 스택은 React, Spring, Node, C++ 등 다양한 언어와 프레임워크에 대한 높은 이해와 능력을 시사한다.
          이는 프로젝트 경험과 자발적인 대외활동, 봉사활동, 그리고 다양한 경력을 통해 실제로 적용되고 있는 것으로 나타났다.
          대외활동에서는 쇼핑몰 프로젝트와 '가생이' 졸업 프로젝트 등 다양한 프로젝트에 참여하며 풀스택 개발과 Spring백엔드에 능숙하게 참여했다.
          또한, "코딩 알리미" 봉사활동을 통해 행사 주관 및 참여를 통해 리더십과 협업 능력을 키웠다.
          <br />
          김여원은 다양한 경험과 지식으로 성장하며, 머신러닝, 스프링, 리액트 등 다양한 분야에서 전문가로서 주목받을 것으로 기대된다.
          그녀의 업적은 기술계를 주도하는데 기여할 것으로 기대된다.
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
};
</script>

<style scoped>
.article_border {
  display: inline-block;
  margin: 1%;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0);
  /* 초기 그림자 없음 */
  transition: box-shadow 0.3s ease;
  width: 76%;
  filter: grayscale(100%);
  border-radius: 5px;
}

.article_border:hover {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  /* 그림자 효과 설정 */
  filter: none;
}

.profile {
  width: 35%;
  height: 80%;
  position: relative;
  float: left;
}

.title {
  font-family: 'KOTRA_BOLD-Bold';
  font-size: 40px;
  text-decoration: none;
  color: #000;
  position: relative;
  display: inline;
}

.article_font_int {
  font-family: 'Chosunilbo_myungjo';
  position: relative;
  display: inline;
  color: #000;
}

.transparent-button {
  font-family: 'KOTRA_BOLD-Bold';
  background-color: transparent;
  border: transparent;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.transparent-button:hover {
  background-color: rgba(52, 152, 219, 0.1);
  /* hover 시 배경색 */
}</style>
