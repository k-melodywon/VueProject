<template>
    <div class="sub_article">
        <router-link to="/article" class="title_2">3일간 씻지않은 햄스터 발견</router-link>
        <p style="font-family: 'Chosunilbo_myungjo';">
            왜 씻지 않았냐는 물음에<br />
            "기숙사에 온수가 안 나와..."
        </p>
        <br />
        <div>
            <img class="profile_2" :src="require('./망.jpg')" alt="프로필 이미지" />
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'ArticleComponent',
};
</script>
  
<style scoped>
.sub_article {
    float: right;
    width: 20%;
    margin: 1%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.title_2 {
    font-family: 'KOTRA_BOLD-Bold';
    text-decoration: none;
    color: #000;
    font-size: 17px;
}

.profile_2 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}

/* 다른 스타일들도 필요한 경우 여기에 추가할 수 있습니다. */
</style>