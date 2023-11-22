<template>
  <router-link to="/portfolio/project">
    <div class="article_border_project">
      <div style="margin: 2%">
        <img class="profile_project" src="./리액트.png" alt="React" />
        <a class="title">세상을 변화시킨 프로젝트</a>
        <div class="article_font_project">
          <br />
          최근 쇼핑몰, 룸메이트 매칭서비스, 그리고 학교 홈페이지의 혁신적인 업그레이드가 세상을 변화시켰습니다. 새로운 쇼핑몰 플랫폼은 사용자 경험을 대폭 향상시켜 소비자들에게 더 편리하고 다양한 옵션을 제공하고 있습니다. 룸메이트 매칭서비스는 효율적이고 안전한 방 찾기를 돕는 동시에 사용자 간의 적합성을 높이는 역할을 하고 있습니다. 더불어, 학교 홈페이지의 업그레이드는 학생들에게 더 효과적인 학사 정보 접근을 제공하며 학교 커뮤니티를 활성화시키고 있습니다. 이러한 혁신들은 각 분야에서 더 나은 서비스를 통해 삶의 질을 향상시키고 있습니다.
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
.card_border{
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

.article_font_project{
  font-family:'Chosunilbo_myungjo';
  position: relative;
  display: inline;
  color: #000; 
} 


.card {
  position: fixed;
  width: 5%;
  height: 10%;
  color: #000;
}
</style>

