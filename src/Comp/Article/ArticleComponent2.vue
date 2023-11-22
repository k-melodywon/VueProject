<template>
  <div class="sub_article_2">
    <div class="profile_2">
      <img src="./탕.png" alt="탕후루 이미지" width="100px" height="120px" />
    </div>
    <br />
    <router-link to="/article2" class="title_2">탕후루 많이 먹기 대회 우승</router-link>
    <p style="font-family: 'Chosunilbo_myungjo';">
      통귤 탕후루로 승부를 두다.<br />
      한번에 5개까지도 먹어...
    </p>
  </div>
</template>

<script>
export default {
  name: 'ArticleComponent2',
};
</script>

<style scoped>
.sub_article_2 {
  float: left;
  width: 20%;
  height: 200px;
  margin: 1%;
  display: flex;
  flex-direction: column;
  align-items: center;
  filter: grayscale(100%);
}

.profile_2 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.title_2 {
  font-family: 'KOTRA_BOLD-Bold';
  text-decoration: none;
  color: #000;
  font-size: 17px;
}

/* 다른 스타일들도 필요한 경우 여기에 추가할 수 있습니다. */
</style>
