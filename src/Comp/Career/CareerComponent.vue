<template>
  <router-link to="/portfolio/career">
    <div class="article_border2">
      <div style="margin: 2%;">
        <img class="profile_4" src="./커리.jpg" alt="프로필 이미지" />
        <a class="title"><br />빛나는 경력과 성취,<br />업계에서 주목받는 여성</a>
        <div class="article_font_car">
          <br />5살부터 코딩을 시작한 이 여성은 혁신적인<br />리액트 프로젝트를 개발하여 기술 세계를 놀라게 했습니다.<br />
          그녀의 끈기와 열정은 새로운 기술을 선도하는데 기여하며<br />다양성을 장려했습니다.<br />
          그녀는 어린이와 여성들에게 영감을 주고 있습니다.
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'CareerComponent',
};
</script>

<style scoped>
.article_border2 {
  display: inline-block;
  margin: 1%;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0);
  /* 초기 그림자 없음 */
  transition: box-shadow 0.3s ease;
  width: 80%;
  filter: grayscale(100%);
  border-radius: 5px;
}

.article_border2:hover {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  /* 그림자 효과 설정 */
  filter: none;
}

.profile_4 {
  width: 80%;
  height: 80%;
  position: relative;
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
}

.article_font_car {
  font-family: 'Chosunilbo_myungjo';
  position: relative;
  display: inline;
  color: #000;
}</style>
