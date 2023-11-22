<template>
  <div>
    <ResumCard v-if="selectedTab === '이력서'" />
    <SelfInfoCard v-if="selectedTab === '자기소개서'" />
  </div>
</template>

<script>
import ResumCard from "./ResumComponent.vue";
import SelfInfoCard from "./SelfInfoComponent.vue";

export default {
  data() {
    return {
      selectedTab: "이력서",
    };
  },
  components: {
    ResumCard,
    SelfInfoCard,
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
