<template>
  <div class="card_border">
    <div class="carousel">
      <button v-if="active > 0" class="nav left" @click="setActive(active - 1)">
        ←
      </button>
      <div v-for="(card, i) in cardData" :key="i" class="card-container" :style="getCardStyles(i)">
        <div v-if="i === active" class="card">
          <h2 class="title">{{ card.title }}</h2>
          <div class="content"><component :is="card.content"/></div>
        </div>
      </div>
      <button v-if="active < cardData.length - 1" class="nav right" @click="setActive(active + 1)">
        →
      </button>
    </div>
  </div>
</template>

<script>
import CareerComponent1 from './CareerComponent1.vue';
import CareerComponent2 from './CareerComponent2.vue';
import CareerComponent3 from './CareerComponent3.vue';
export default {
  data() {
    return {
      active: 2,
      MAX_VISIBILITY: 2,
      cardData: [
        {
          title: "피자집 아르바이트",
          content: CareerComponent3, // Replace with the appropriate component or content
        },
        {
          title: "제2 학생생활관 근로",
          content: CareerComponent2, // Replace with the appropriate component or content
        },
        {
          title: "학원/과외",
          content: CareerComponent1, // Replace with the appropriate component or content
        },
      ],
    };
  },
  methods: {
    setActive(index) {
      this.active = index;
    },
    getCardStyles(i) {
      return {
        '--active': i === this.active ? 1 : 0,
        '--offset': (this.active - i) / 3,
        '--direction': Math.sign(this.active - i),
        '--abs-offset': Math.abs(this.active - i) / 3,
        'pointer-events': this.active === i ? 'auto' : 'none',
        'opacity': Math.abs(this.active - i) >= this.MAX_VISIBILITY ? '0' : '1',
        'display': Math.abs(this.active - i) > this.MAX_VISIBILITY ? 'none' : 'block',
      };
    },
  },
  components: {
  },
};
</script>


<style scoped>
.card_border{
  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
}
.carousel {
  margin-top: 50px;
  margin-bottom: 55px;
  justify-content: center;
  text-align: center;
  position: relative;
  width: 65%;
  height: 70%;
  perspective: 500px;
  transform-style: preserve-3d;
}

.card-container {
  position: relative;
  display: inline;
  width: 100%;
  height: 100%;
  transform:
    rotateY(calc(var(--offset) * 50deg)) scaleY(calc(1 + var(--abs-offset) * -0.4)) translateZ(calc(var(--abs-offset) * -30rem)) translateX(calc(var(--direction) * -5rem));
  filter: blur(calc(var(--abs-offset) * 1rem));
  transition: all 0.3s ease-out;
}

.card {
  text-align: center;
  width: 90%;
  height: 100%;
  padding: 5%;
  background-color: hsl(0deg, 0%, calc(100% - var(--abs-offset) * 50%));
  border-radius: 1rem;
  color: #1F2937;
  text-align: justify;
  transition: all 0.3s ease-out;
}

.card h2 {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin: 0 0 0.7em;
  color: #1F2937;
  transition: all 0.3s ease-out;
}

.card p,
.card h2 {
  transition: all 0.3s ease-out;
  opacity: var(--active);
}

.nav {
  color: white;
  font-size: 5rem;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  z-index: 2;
  cursor: pointer;
  user-select: none;
  background: unset;
  border: unset;
}

.nav.left {
  transform: translateX(-100%) translateY(-50%);
}

.nav.right {
  right: 0;
  transform: translateX(100%) translateY(-50%);
}

@font-face {
    font-family: 'KOTRA_BOLD-Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10-21@1.1/KOTRA_BOLD-Bold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
.title{
    font-family: 'KOTRA_BOLD-Bold';
    text-decoration: none;
    color: #000; 
    font-size: 40px;
    position: relative;
    display: inline;
  }

</style>
