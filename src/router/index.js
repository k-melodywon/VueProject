import { createWebHistory, createRouter } from "vue-router";
import Main from "@/Comp/MainComponent.vue";
import IntroMain from "@/Comp/Intro/IntroMain.vue";
import ProjectCard from "@/Comp/Project/ProjectCard.vue";
import CareerCard from "@/Comp/Career/CareerCard.vue";
import StudyCard from "@/Comp/Study/StudyCard.vue";

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/portfolio/intro",
    component: IntroMain,
  },
  {
    path: "/portfolio/career",
    component: CareerCard,
  },
  {
    path: "/portfolio/project",
    component: ProjectCard,
  },
  {
    path: "/portfolio/study",
    component: StudyCard,
  },

];

const router = createRouter({  // 라우트 생성
  history: createWebHistory(),
  routes,
});

export default router;
