<template>
  <router-link to="/portfolio/study">
    <div class="article_border_study">
      <div style="margin: 2%">
        <img class="profile_study" src="./book.png" alt="Book" />
        <a class="title">밑거름이 되었던 공부</a>
        <div class="article_font_study">
          <br />
          현대 기술 분야에서 주목받는 김여원은 머신러닝, 스프링, 리액트에 대한 탁월한 지식과 기술력으로 인정받고 있습니다. 그녀의 공부 노트는
          전문적이고 체계적으로 정리되어 있어 많은 이들이 그녀의 경험과 지식을 배우고 싶어합니다. 김여원의 머신러닝, 스프링, 리액트에 대한 풍부한 경험과
          노하우를 공부하고 싶어하는 이들에게는 그 노트를 열람하는 것이 귀중한 학습 기회로 될 것입니다. 그녀의 전문성은 기술 커뮤니티에서 큰 주목을
          받으며, 많은 이들에게 영감을 주고 있습니다.
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  // You can add component-specific logic here
};
</script>

<style scoped>
.article_border_study {
  margin: 1%;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0);
  /* 초기 그림자 없음 */
  transition: box-shadow 0.3s ease;
  width: 100%;
  position: relative;
  filter: grayscale(100%);
  float: right;
  border-radius: 5px;
}

.article_border_study:hover {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  /* 그림자 효과 설정 */
  filter: none;
}

.profile_study {
  width: 40%;
  height: 40%;
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
}

.article_font_study {
  font-family: 'Chosunilbo_myungjo';
  position: relative;
  display: inline;
  color: #000;
}


.card {
  position: fixed;
  width: 5%;
  height: 10%;
  color: #000;
}</style>

