<template>
  <div>
    <div class="a">
      <Intro />
      <Article />
    </div>
    <hr />
    <div class="b">
      <Article2 />
      <Project />
    </div>
    <hr />
    <div class="c">
      <Career style="float: left;  width: 45%;text-align: center;"/>
      <div class="right">
        <Study />
        <Article3 />
      </div>
    </div>
  </div>
</template>

<script>
import Intro from "./Intro/IntroComponent.vue";
import Project from "./Project/ProjectComponent.vue";
import Article from "./Article/ArticleComponent.vue";
import Article2 from "./Article/ArticleComponent2.vue";
import Article3 from "./Article/ArticleComponent3.vue";
import Study from "./Study/StudyComponent.vue";
import Career from "./Career/CareerComponent.vue";

export default {
  components: {
    Intro,
    Project,
    Article,
    Article2,
    Article3,
    Study,
    Career,
  },
};
</script>

<style scoped>
.right{
  width: 55%;
  float: right;
}
.c{
  display: flex;
  position: relative;
}
</style>
