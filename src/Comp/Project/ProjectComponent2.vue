<template>
  <div>
    <div class="profile_2">
      <img src="./node.jpg" alt="Node.js Project" style="width:50%; height:auto"  />
    </div>
    <br />
    <br />
    <div class="article_font">
      <a>node.js 기반으로 한 쇼핑몰 프로젝트다.</a><br />
      <a>로그인& 로그아웃, 게시판, 쇼핑몰 리스트, 구매, 장바구니 등의 기능을 구현했다.</a><br />
      <a>핵심 기술은 stock컬럼을 사용하여 3개의 테이블(고객, 책정보, 판매)을 조인하여 만든 기능으로</a><br />
      <a>여러 계정이 동시에 구매할 때 재고에 따라 구매가 가능한지 불가능한지 나뉘게 만들었다.</a><br />
      <a>첫 프로젝트라는 의의가 있다.</a>
    </div>
  </div>
</template>

<script>
export default {
  // 해당 컴포넌트에 대한 로직이나 데이터를 추가할 수 있습니다.
};
</script>

<style scoped>
.article_font {
  font-family: 'KOTRA_BOLD-Bold';
  position: relative;
  display: inline;
  font-family: 'KOTRA_BOLD-Bold';
}
</style>
