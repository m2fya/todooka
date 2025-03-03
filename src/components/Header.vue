<template>
  <div class="header">
    <div class="logo">
      <img src="@/assets/Ellipse.svg" alt="logo">
      <div class="text">
        Todooka
      </div>
    </div>
    <button
      :class="{'logout': isHomePage}"
      class="btn"
      @click="goToPage"
    >
      {{ buttonName }}
    </button>

  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {

    }
  },
  computed:{
    currentRoute() {
      return this.$route.name;
    },
    isHomePage() {
      return this.currentRoute === 'home';
    },
    buttonName() {
     if (this.isHomePage) {
       return 'Log out'
     } else {
       return this.isLoginPage ? 'Sign in' : 'Log in'
     }
    },
    isLoginPage() {
      return this.currentRoute === 'login'
    },

  },
  methods: {
    goToPage() {
      this.$router.replace({name: this.isLoginPage ? 'register' : 'login'})
    }
  },
}
</script>



<style scoped lang="scss">
.header {
  position: fixed;
  background: #fff;
  padding: 15px;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  box-shadow: 0px 3px 20px 1px rgba(146, 148, 163, 0.6);
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    width: 30px;
    display: flex;
    .text {
      font-size: 20px;
      padding: 5px;
    }
  }
  .btn {
    color: white;
    background: linear-gradient(to right, #838BD8, #283BEC);
    width: 88px;
    height: 40px;
    border-radius: 5px;
    border: none;
  }
  .logout {
    background-image: linear-gradient(to right, #838BD8, #283BEC);
    background-clip: text;
    color: transparent;
    border: #EFF0F3 solid 2px;
  }
}
@media (max-width: 2000px) {
  .header {
    .logo {
      .text {
        font-size: 30px;
      }
    }
    .btn {
      font-size: 20px;
      width: 95px;
      height: 50px;
    }
  }
}
@media (max-width: 1200px) {

}
@media (max-width: 1000px) {
  .header {
    .logo {
      .text {
        font-size: 24px;
      }
    }
    .btn {
      font-size: 15px;
      width: 80px;
      height: 40px;
    }
  }
}
@media (max-width: 760px) {

}
@media (max-width: 480px) {

}
</style>