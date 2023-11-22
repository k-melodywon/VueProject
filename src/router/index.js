import { createWebHistory, createRouter } from "vue-router";
import Main from "@/Comp/MainComponent.vue";
import IntroMain from "@/Comp/Intro/IntroMain.vue";
import ProjectCard from "@/Comp/Project/ProjectCard.vue";
import CareerCard from "@/Comp/Career/CareerCard.vue";
import StudyCard from "@/Comp/Study/StudyCard.vue";

const routes = [    // 라우터 설정
  {
    path: "/",               // 라우터
    component: Main,
  },
  {
    path: "/portfolio/intro",       // touter
    component: IntroMain,
  },
  {
    path: "/portfolio/career",       // touter
    component: CareerCard,
  },
  {
    path: "/portfolio/project",       // touter
    component: ProjectCard,
  },
  {
    path: "/portfolio/study",       // touter
    component: StudyCard,
  },

];

const router = createRouter({  // 라우트 생성
  history: createWebHistory(),
  routes,
});

export default router;
