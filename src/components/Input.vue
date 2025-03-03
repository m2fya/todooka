<template>
<div
  :class="{'invalid' : !isValid}"
  class="MainInput"
>
  <div class="label">
    {{ title }}
  </div>
  <div class="input-block">
    <input
      v-model="inputValue"
      :type="type"
      class="input"
      @blur="$emit('setValue', inputValue)"

    />
    <div class="icons">
      <img
        v-if="isValid && inputValue"
        class="icon-approve"
        src="@/assets/approve.svg" alt="ok">
      <img
        v-else-if="!isValid"
        class="icon-decline"
        src="@/assets/decline.svg" alt="cancel">
    </div>
  </div>


</div>
</template>

<script>
export default {
  name: "Input",
  props: {
    title: String,
    type: {
      type: String,
      default: 'text',
    },
    isValid: {
      type: Boolean,
      default: true,
    },
    value: {
      type: String,
      default: '',
    }
  },
  data() {
    return {
      inputValue: this.value,
    }
  },

}
</script>



<style scoped lang="scss">
.MainInput {

  .label {
    padding: 10px;
    color: #B3B6C5;
  }
  .input-block {
    position: relative;
    .input {
      background: #F6F7FA;
      border: none;
      border-radius: 5px;
      width: 100%;
      height: 50px;
      padding-left: 20px;
      padding-right: 60px;
      box-sizing: border-box;
      &:focus {
        outline: none;
      }

    }
    .icons {
      position: absolute;
      top: 15px;
      right: 15px;
      .icon-approve {

      }
      .icon-decline {

      }
    }
  }
}
.invalid {
  .label {
    color: #EF4444;
  }
  .input-block {
    .input {
      background: #FAF6F6;
    }
  }
}
</style>