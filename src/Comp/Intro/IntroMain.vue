<template>
  <div>
    <div style="text-align: center">
      <button v-for="(intro, i) in intros" :key="i" @click="contentChange(i)" class="transparent-button">
        {{ intro.tab }}
      </button>
    </div>
    <br /><br />
    <component :is="intros[index].content"/>
  </div>
</template>

<script>
import ResumComponent from './ResumComponent.vue';
import SelfInfoComponent from './SelfInfoComponent.vue';
export default {
  data() {
    return {
      intros: [
        {
          tab: "이력서",
          content: ResumComponent
        },
        {
          tab: "자기소개서",
          content: SelfInfoComponent 
        },
      ],
      index: 0
    };
  },
  methods: {
    contentChange(index) {
      this.index = index;
    },
  },
};
</script>

<style scoped>
  .transparent-button {
    font-family: 'KOTRA_BOLD-Bold';
    background-color: transparent;
    border: transparent;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
</style>