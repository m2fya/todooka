<template>
  <div class="card">
    <div class="log">
      {{ isLoginPage ? 'Log in' : 'Sign in' }}
    </div>
    <div class="input-block">
      <Input
        v-if="!isLoginPage"
        :isValid="validation.firstName"
        :title="'First name'"
        @setValue="firstName = $event"
      />
      <Input
        :isValid="validation.email"
        :title="'E-mail'"
        @setValue="email = $event"
      />
      <Input
        :isValid="validation.password"
        :type="'password'"
        :title="'Password'"
        @setValue="password = $event"
      />
    </div>
    <div>
      <button
        :class="{'disabled': disabled}"
        class="btn"
        @click="logIn"
      >
        {{ isLoginPage ? 'Log in' : 'Sign in' }}
      </button>
    </div>
    <div class="todooist">
      {{ isLoginPage ? 'Not ' : 'Already ' }} a todooist?
    </div>
    <div
      class="create"
      @click="goToPage"
    >
      {{ isLoginPage ? 'Create an ' : 'Log in ' }} account
    </div>
  </div>
</template>

<script>
import Input from "@/components/Input.vue";

export default {
  name: "LoginCard",
  components: {Input},
  props: {
    currentPage: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      email: '',
      password: '',
      firstName: '',
      validation: {
        email: true,
        password: true,
        firstName: true,
      },
      regex: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    }
  },
  computed: {
    disabled() {
      return !(this.validation.email && this.validation.password)
    },
    isLoginPage() {
      return this.currentPage === 'login'
    }
  },
  watch: {
    firstName(value) {
      this.validation.firstName = !!value && value.length >= 4
    },
    email(value) {
      this.validation.email = !!value && this.regex.test(value)
    },
    password(value) {
      this.validation.password = !!value && value.length >= 4
    }
  },
  methods: {
    logIn() {
      if (!(this.email && this.password)) {
        this.validation.firstName = !!this.firstName && this.firstName.length >= 4
        this.validation.email = !!this.email && this.regex.test(this.email)
        this.validation.password = !!this.password && this.password.length >= 4
      }
      if (this.email && this.password) {
        this.$router.replace({ name: 'home' })
      }
      console.log(this.validation)
    },
    goToPage() {
      this.$router.replace({name: this.isLoginPage ? 'register' : 'login'})
    }
  }
}
</script>

<style scoped lang="scss">
.card {
  background: #fff;
  width: 100%;
  border-radius: 10px;
  padding: 25px 20px 20px 20px;
  box-shadow: 0px 0px 20px 0px rgba(66, 68, 90, 1);
  align-items: center;
  .log {
    margin-bottom: 30px;
    font-size: 25px;
    box-sizing: border-box;
  }
  .input-block {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 50px;
  }
  .btn {
    color: #fff;
    background: linear-gradient(to right, #61DE6E, #6DF67A);
    border: none;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    width: 100%;
    height: 50px;
    margin-bottom: 30px;
    box-sizing: border-box;
  }
  .disabled {
    opacity: 50%;
  }
  .todooist {
    display: flex;
    color: #B3B6C5;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    box-sizing: border-box;
  }
  .create {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    padding: 0px;
    color: blue;
    cursor: pointer;
  }
}
</style>