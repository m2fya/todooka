<template>
  <div class="main">
    <LoginCard
      :currentPage="currentPage"
    />
  </div>
</template>


<script>
import LoginCard from "@/components/LoginCard.vue";

export default {
  name: "LoginView.vue",
  components: {LoginCard},
  computed: {
    currentPage() {
      return this.$route.name
    }
  }

}
</script>

<style scoped lang="scss">
.main {
  background: #fff;
  width: 100%;
  background: url("@/assets/background.png");
  background-size: cover;
  background-repeat: no-repeat;
  height: calc(100vh + 1px);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 50px 15px;
  box-sizing: border-box;
}
</style>