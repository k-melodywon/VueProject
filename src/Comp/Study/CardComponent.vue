<template>
  <div>
    <Study3Card v-if="selectedCard === 'React'" />
    <Study2Card v-if="selectedCard === 'Spring'" />
    <Study1Card v-if="selectedCard === '머신러닝'" />
  </div>
</template>

<script>
import Study1Card from "./StudyComponent1.vue";
import Study2Card from "./StudyComponent2.vue";
import Study3Card from "./StudyComponent3.vue";

export default {
  data() {
    return {
      selectedCard: "React",
    };
  },
  components: {
    Study1Card,
    Study2Card,
    Study3Card,
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>