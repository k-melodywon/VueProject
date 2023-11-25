<template>
  <div>
    <div class="profile_2"><img src="./과외.jpg" alt="프로필 이미지" width="30%" height="auto" /></div>
    <br />
    <br />
    <div class="article_font">
      <a>가장 오래 지속해온 일로, 2021년부터 학원&과외일을 하게되었다.</a><br />
      <a>학생들을 가르치면서 눈높이에 맞춰 설명하는 능력이 향상되었다.</a><br />
      <a>이는 개발자로서 기능 구현을 할 때 어떤 기능을 정확히 구현하는지 설명하는데 많은 도움이 되었다.</a><br />
      <a>또한 어려운 문제를 지속적으로 고민하고 해결해야하는 수학을 가르치면서</a><br />
      <a>알고리즘을 짜는데에도 많은 도움을 얻을 수 있었다.</a><br />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CareerComponent1',
};
</script>

<style scoped>
.profile_2 {
  align-items: center;
  justify-content: center;
  /* 가로 가운데 정렬도 필요하면 추가 */
  width: 100%;
  /* 필요한 경우 가로 가운데 정렬을 위한 너비 설정 */
  height: 100%;
}


.article_font {
  font-family: 'KOTRA_BOLD-Bold';
  position: relative;
  display: inline;
  font-family: 'KOTRA_BOLD-Bold';
}
</style>
