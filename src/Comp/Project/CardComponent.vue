<template>
    <div>
      <Project3Card v-if="selectedProject === 'Spring'" />
      <Project2Card v-if="selectedProject === 'Node.js를 활용한 쇼핑몰 사이트'" />
      <Project1Card v-if="selectedProject === 'React를 기반으로 한 가생이 프로젝트'" />
    </div>
  </template>
  
  <script>
  import Project1Card from "./ProjectComponent1.vue";
  import Project2Card from "./ProjectComponent2.vue";
  import Project3Card from "./ProjectComponent3.vue";
  
  export default {
    data() {
      return {
        selectedProject: "Spring",
      };
    },
    components: {
      Project1Card,
      Project2Card,
      Project3Card,
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  
