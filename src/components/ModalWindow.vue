<template>
  <div v-if="isVisible" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <div class="task">Create task</div>
      <div
        class="color-options"
      >
        Choose color: {{ currentColor }}
      </div>
      <div class="color-circles">
        <button
          v-for="btn in btnIcons"
          :key="btn.id"
          @click="setColor(btn)"
          class="btn-colors"
        >
          <img
            class="iconsColor"
            :src="getImageSrc(btn.img)"
            alt="icons"
          >

        </button>
      </div>
      <div class="inputs">
        <div class="name-input">
          <Input
            :value="tileData.title"
            :title="'Task name'"
            @setValue="tileData.title = $event"
          />
        </div>
        <div class="input-description">
          <div class="title-description">
            Task description
          </div>
          <textarea
            v-model="tileData.description"
            rows="10"
            class="description-input"
          >
          </textarea>
        </div>
      </div>
      <div
        class="btn-add-timer"
      >
        <div
          v-if="currentStatus"
          class="timer-inputs"
        >
          <input
          type="number"
          placeholder="0"
          class="input-timer"
          />
          :
          <input
          type="number"
          placeholder="0"
          class="input-timer"
          />
          :
          <input
          type="number"
          placeholder="0"
          class="input-timer"
          />
        </div>
        <button
          class="timer-btn"
          :class="{'add-timer' : currentStatus}"
          @click="addTimer"
        >
          {{ currentStatus ? 'Remove timer' : 'Add timer' }}
        </button>
      </div>

      <div class="btn-container">
        <button
          :class="{'disabled': disabled}"
          @click="createTile"
          class="create-btn"
          :disabled="disabled"
        >
          Create
        </button>
         <button
           class="close-btn"
           @click="closeModal"
         >
         Close
        </button>
      </div>
    </div>

  </div>
</template>

<script>
import Input from "@/components/Input.vue";

export default {
  name: "ModalWindow",
  components: {Input},
  props: {
    isVisible: {
      type: Boolean,
      required: true
    },
    tileEdit: {
      type: Object,
      default: null
    } // приняли его како бьект
  },
  data() {
    return {
      btnIcons: [
        {
          id: 1,
          name: 'Blue',
          img: 'blue.svg'
        },
        {
          id: 2,
          name: 'Green',
          img: 'green.svg'
        },
        {
          id: 3,
          name: 'Red',
          img: 'red.svg'
        },
      ],
      currentColor: 'Blue',
      currentStatus: false,
      tileData: {
        title: '',
        description: '',
        img: 'blue.svg',
      },
    }
  },
  computed: {
    disabled() {
      return !(this.tileData.title && this.tileData.description)
    }
  },
  watch: {
    isVisible(value) {
      if (value) {
        if (this.tileEdit) {
          this.tileData = { ...this.tileEdit }
          this.currentColor = this.btnIcons.find(item => item.img === this.tileEdit.img)?.name
        }
      } // сделали вотч функицю на isVisible при которой мы тоброжаем какой цвет у нас приходит вместе с id
    }
  },
  methods: {
    closeModal() {
      this.$emit('close');
      this.tileData = {
        title: '',
        description: '',
        img: 'blue.svg',
      }
    },
    getImageSrc(img) {
      return require(`@/assets/${img}`)
    },
    addTimer() {
      this.currentStatus = !this.currentStatus;
    },
    setColor(color) {
      this.currentColor = color.name
      this.tileData.img = color.img
    },
    createTile() {
      this.$emit('createTile', this.tileData)
      this.closeModal()
    }
  }
}
</script>

<style scoped lang="scss">
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  transform: scale(0.9);
  transition: transform 3s ease;
  .task {
    font-size: 2em;
    color: #393c46;
    margin-bottom: 40px;
  }
  .color-options {
    color: #b3b6c5;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    font-size: 14px;
  }
  .color-circles {
    display: flex;
    margin-bottom: 20px;
    .btn-colors {
      border: none;
      background-color: transparent;
    }
    .iconsColor {
      width: 30px;
      height: 30px;
    }
  }
  .inputs {
    color: #b3b6c5;
    font-size: 14px;
    margin-bottom: 25px;
    .name-input {
      margin-bottom: 20px;
    }
    .input-description {
      .title-description {
        margin-bottom: 20px;
        padding-left: 10px;
      }
      .description-input {
        background: #F6F7FA;
        border: none;
        border-radius: 5px;
        width: 100%;
        box-sizing: border-box;
        padding: 20px;
        &:focus {
          outline: none;
        }
      }
    }
  }
  .timer-btn {
    background-image: linear-gradient(to right, #838BD8, #283BEC);
    background-clip: text;
    color: transparent;
    border: #EFF0F3 solid 2px;
    width: 88px;
    height: 40px;
    font-size: 15px;
    border-radius: 5px;
  }
  .btn-container {
    padding: 20px;
    display: flex;
    gap: 15px;
    justify-content: end;
    .create-btn {
      color: white;
      background: linear-gradient(to right, #61DE6E, #6DF67A);
      width: 88px;
      height: 40px;
      border-radius: 5px;
      border: none;
      font-size: 15px
    }
    .close-btn {
      background-image: linear-gradient(to right, #838BD8, #283BEC);
      background-clip: text;
      color: transparent;
      border: #EFF0F3 solid 2px;
      width: 88px;
      height: 40px;
      border-radius: 5px;
      font-size: 15px
    }
  }
}
.modal-content {
  .btn-add-timer {
    display: flex;
    align-items: center;
    gap: 10px;
    .timer-inputs {
      .input-timer {
        width: 40px;
        color: #b3b6c5;
        font-size: 14px;
        background: #F6F7FA;
        border: none;
        border-radius: 5px;
        height: 30px;
        padding-left: 7px;
        &:focus {
          outline: none;
        }
      }
    }
    .add-timer {
      color: #ffffff;
      background: linear-gradient(to right, #ff3f3f, #ff5858);
      font-size: 15px;
      border: none;

    }
    .add-timer {

    }
  }
  .disabled {
    opacity: 50%;
  }

}

</style>