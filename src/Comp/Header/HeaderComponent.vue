<template>
  <div>
    <header class="header">
      <router-link to="/" style="text-decoration: none; color: black;">여원 일보</router-link>
    </header>
    <hr class="black" />
    <div class="line">
      <div>가천대학교</div>
      <div>컴퓨터공학과</div>
      <div>202035128 김여원</div>
    </div>
    <hr class="black" />
  </div>
</template>

<script>
export default {
  // Add any logic if needed
};
</script>

<style scoped>
@font-face {
  font-family: 'OKGUNG';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-02@1.0/OKGUNG.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

.header {
  font-family: 'OKGUNG', sans-serif;
  font-size: 100px;
  text-align: center;
}

.black {
  color: black;
}

.line {
  display: flex;
  align-items: center;
  border-style: double;
  border-width: 2px 0;

  >div {
    font-family: 'OKGUNG', sans-serif;
    width: 100%;
    text-align: center;
  }
}
</style>
