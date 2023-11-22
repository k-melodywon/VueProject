<template>
  <div>
    <Study1 v-if="selectedTab === '스터디1'" />
    <Study2 v-if="selectedTab === '스터디2'" />
    <Study3 v-if="selectedTab === '스터디3'" />
  </div>
</template>

<script>
import Study1 from "./StudyComponent1.vue";
import Study2 from "./StudyComponent2.vue";
import Study3 from "./StudyComponent3.vue";

export default {
  data() {
    return {
      selectedTab: "스터디1",
    };
  },
  components: {
    Study1,
    Study2,
    Study3,
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
