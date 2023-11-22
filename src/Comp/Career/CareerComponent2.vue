<template>
  <div>
    <div class="profile_2"><img src="./기숙사.jpg" alt="기숙사 근로" style="width:30%; height:auto" /></div>
    <br />
    <br />
    <div class="article_font">
      <a>2022년 6월부터 근무하였다.</a><br />
      <a>기숙사에서 일을하게 되면서 커뮤니케이션 능력이 향상되었다.</a><br />
      <a>또 기숙사에서 일어나는 크고 작은 문제들을 해결하면서</a><br />
      <a>효율적으로 일을 처리하는 능력이 생겼다.</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CareerComponent2',
};
</script>

<style scoped>
.profile_2 {
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}


.article_font {
  position: relative;
  display: inline;
  font-family: 'KOTRA_BOLD-Bold';
}

</style>
