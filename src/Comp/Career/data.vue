<template>
  <div>
    <div v-for="(career, index) in careers" :key="index">
      <h2>{{ career.tab }}</h2>
      {{ career.content }}
    </div>
  </div>
</template>

<script>
import Career1 from "./Career1";
import Career2 from "./Career2";

export default {
  components: {
    Career1,
    Career2,
  },
  data() {
    return {
      careers: [
        {
          tab: "학원/과외",
          content: <Career1 />,
        },
        {
          tab: "기숙사 근로",
          content: <Career2 />,
        },
      ],
    };
  },
};
</script>
