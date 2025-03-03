<template>
  <div
    class="todo-tile"
    :class="{'tile-list' : type === 'list'}"
    @click="changeTile"
  >
    <div
      v-if="isGridPage || isActive"
      class="btn-icons"
    >
      <div
        v-if=""
        class="timer-check"
      >
        <mdicon
          v-if="!okActive"
          class="timer-icon"
          width="12"
          height="12"
          name="clock-time-four"
        />
        <span
          v-if="!okActive"
          class="timer"
        >
          12:32:45
        </span>
        <span
          class="time-end"
          v-else
        >
          Time is over
        </span>
      </div>
      <div
        v-if="okActive"
        class="task-done-cont">
        <mdicon
          name="check"
          class="task-done"
          width="20"
          height="20"
        />
        Task is done
      </div>
      <div
        class="btn-cont"
      >
        <button
          class="icon-pen"
          @click.stop="$emit('open', tile.id)"
        >
<!--          МЫ НАЧАЛИ ОТСЮДА РЕДАКТИРОВАНИЕ -->
          <img
            src="@/assets/IconPen.svg"
            alt="pen"
        >
        </button>
        <button
          class="icon-ok"
          :class="{'is-ok-btn' : okActive}"
          @click.stop="isOkActive"
        >
          <mdicon
            name="check"
            :class="{'is-ok-img' : okActive}"
            width="20"
            height="20"
          />

        </button>
      </div>
    </div>
    <div
      v-if="!isActive"
      class="body"
    >
      <div
        class="name-tile"
      >
        <img
          :src="getImageSrc(tile.img)"
          alt="status-icon"
        >
        {{ tile.title }}
      </div>
      <div
        class="description"
      >
        <span>
          {{ tile.description }}
        </span>

      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: "TodoTile",
  props: {
    tile: {
      type: Object,
      required: true
    },
    type: {
      type: String,
    },
  },
  data() {
    return {
      isActive: false,
      okActive: false,
    }
  },
  computed: {
    isGridPage() {
      if (this.type === 'list')  {
        return false
      } else {
        return true
      }
    }
  },
  watch: {
    type() {
      this.isActive = false
    }
  },
  methods: {
    changeTile() {
      if (!this.isGridPage) {
        this.isActive = !this.isActive
      }
    },
    getImageSrc(img) {
      return require(`@/assets/${img}`)
    },
    isOkActive() {
      this.okActive = !this.okActive
      console.log(this.okActive)
    }
  }
}
</script>



<style scoped lang="scss">
.todo-tile {
  background-color: #ffffff;
  height: 215px;
  width: 100%;
  border-radius: 10px;
  border: #F3F5F8 2px solid;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  box-sizing: border-box;
  .btn-icons {
    display: flex;
    justify-content: space-between;
    .task-done-cont{
      color: #6df77a;
      font-size: 14px;
      .task-done {
        color: #6df77a;
      }
    }
    .timer-check {
      display: flex;
      border: solid 2px #F3F5F8;
      border-radius: 50px;
      width: 96px;
      height: 40px;
      box-sizing: border-box;
      font-size: 14px;
      align-items: center;
      justify-content: center;
      color: red;
      .timer {
        color: #BABECB ;
      }
      .timer-end {
      }
    }
    .timer-icon {
      color: #B3B6C5;
      padding: 3px;
    }
    .btn-cont {
      display: flex;
      align-items: center;
      .icon-pen {
        border: none;
        background: none;
      }
      .icon-ok {
        border: solid 2px #F3F5F8 ;
        background: none;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        color: #B3B6C5;
      }
    }
  }
  .body {
    .name-tile {
      font-size: 25px;
      margin-bottom: 10px;
    }
    .description {
      font-size: 14px;
      color: #BABECB;
      padding-left: 27px;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-bottom: 10px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }

}
.tile-list {
  width: 100%;
  height: 76px;
  flex-direction: row-reverse;
  justify-content: flex-end;
  overflow-x: hidden;

  .btn-icons {
    width: 100%;
    align-items: center;
    .btn-cont {
      .icon-pen {

      }
      .is-ok-btn {
        .is-ok-img {
          color: #3F50E7;
        }
      }
    }
  }
  .body {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: normal;
    gap: 30px;
    .name-tile {
      max-width: 150px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 20px;
      margin-bottom: 0;
      flex: 0 0 auto;
    }
    .description {
      //width: 40%;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding-left: 0;
      overflow: hidden;
    }
  }
}
@media (min-width: 1900px) {
  .tile-list {
    .body {
      .name-tile {
        max-width: 500px;
      }
    }
  }
}
@media (min-width: 1200px) {
  .tile-list {
    .body {
      .name-tile {
        max-width: 300px;
      }
      .description {
        margin-bottom: 0;
      }
    }
  }
}
</style>