<template>
  <div class="home">
    <div class="firstInfo">
      <div class="project-title">
        Project:
        <div class="develop-title">
          Develop new app
        </div>
      </div>
      <div class="btn-and-title">
        <div class="title">
          Connection and Setup
        </div>
        <div class="icons-container">
          <button
            class="btn-rectangle"
            @click="openModal"
          >
            <img
              class="icon-rectangle"
              src="@/assets/Rectangle.svg"
              alt="circle"
            >
          </button>
          <button
            class="btn"
            :class="{'activeBtn' : type === 'grid' }"
            @click="changeView('grid')"
          >
            <mdicon
              width="30"
              height="30"
              class="icon-grid"
              name="grid"
            />
          </button>
          <button
            class="btn"
            :class="{'activeBtn' : type === 'list'}"
            @click="changeView('list')"
          >
            <mdicon
              width="33"
              height="33"
              class="icon-list"
              name="format-list-bulleted-square"
            />
          </button>
        </div>
      </div>
    </div>
    <div
      :class="{'list-tile' : type === 'list'}"
      class="todo-tiles"
    >
      <TodoTile
        v-for="tile in tileInfos"
        :key="tile.id"
        :tile="tile"
        class="todo-tile"
        :type="type"
        @open="openModal($event)"
      />
    </div>
    <ModalWindow
      :tileEdit="currentTileEdit"
      :isVisible="isModalVisible"
      @close="closeModal"
      @createTile="addNewTile($event)"
    />
  </div>
</template>

<script>
import TodoTile from "@/components/TodoTile.vue";
import ModalWindow from "@/components/ModalWindow.vue";

export default {
  name: 'MainView',
  components: {ModalWindow, TodoTile},
  data() {
    return {
      type: 'grid',
      isModalVisible: false,
      currentTileEdit: null, //2 мы создали переменную
      tileInfos: [
        {
          id: 1,
          title: "Development",
          description: "Complete all sections on the main page, launch the fourth stag...",
          img: 'blue.svg'
        },
        {
          id: 2,
          title: "Design",
          description: "Complete all sections on the main page, launch the fourth stag...",
          img: 'red.svg'
        },
        {
          id: 3,
          title: "Illustration",
          description: "Complete all sections on the main page, launch the fourth stag...",
          img: 'green.svg'
        },
      ]
    }
  },
  methods: {
    changeView(type) {
      this.type = type
      console.log(type)
    },
    openModal(id) {
      this.isModalVisible = true
      this.currentTileEdit = this.tileInfos.find(item => item.id === id) //потом нашли по айди обьект отрпавили пропсом
    },
    closeModal() {
      this.isModalVisible = false
    },
    addNewTile(tile) {   // и потом сделали вот это что бы оно делало проверку на то создается или редактируется плита
      if (tile.id) {
        this.tileInfos = this.tileInfos.map(item => {
          if (item.id === tile.id) {
            return {
              ...tile
            }
          } else {
            return item
          }
        })
      } else {
        this.tileInfos.push({
          id: this.tileInfos.length + 1,
          ...tile
        })
      }

    }
  }
}
</script>
<style scoped lang="scss">
.home {
  background-color: #FAFBFC;
  width: 100%;
  height: 100%;
  margin-top: 70px;
  .firstInfo {
    padding: 20px;
    padding-top: 30px;
      .project-title {
      color: #B3B6C5;
      font-size: 15px;
      display: flex;
      gap: 7px;
      .develop-title {
        text-decoration: underline;
        font-size: 15px;
      }
    }
    .btn-and-title {
      display: flex;
      flex-direction: column;
      align-content: center;
      border-bottom: #E6E9F0 2px solid;
      .title {
        color: #3F50E7;
        font-size: 40px;
        padding-top: 15px;
      }
      .icons-container {
        display: flex;
        justify-content: flex-start;
        gap: 25px;
        padding-top: 35px;
        padding-bottom: 50px;

        .btn-rectangle {
          border: none;
          background: none;

          .icon-rectangle {

          }
        }
        .btn {
          border: none;
          background: none;
          color: #B3B6C5;
          &:hover {
            color: #838bd8;
          }

        }
        .activeBtn {
          color: #3F50E7;
        }
      }
    }
  }
  .todo-tiles {
    display: grid;
    justify-items: center;
    box-sizing: border-box;
    padding: 20px;
    gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(355px, 1fr));
  }
}
@media (min-width: 1900px) {
  .home {
    padding: 50px;
    box-sizing: border-box;
    .firstInfo {
      .project-title {
        font-size: 19px;
        .develop-title {
          font-size: 19px;
        }
      }
      .btn-and-title {
        display: flex;
        align-content: center;
        flex-direction: row;
        justify-content: space-between;
        .title {
          font-size: 70px;
          position: absolute;
        }
        .icons-container {
          flex-direction: row-reverse;
          width: 100%;
        }
      }
    }
  }
  .todo-tiles {
    width: 100%;

  }
  .list-tile {
    display: flex!important;
    flex-direction: column;
  }
}
@media (min-width: 1200px) {
  .home {
    padding: 50px;
    box-sizing: border-box;
    .firstInfo {
      .project-title {
        font-size: 19px;
        .develop-title {
          font-size: 19px;
        }
      }
      .btn-and-title {
        display: flex;
        align-content: center;
        flex-direction: row;
        justify-content: space-between;
        .title {
          font-size: 55px;
          width: 100%;
        }
        .icons-container {
          width: 100%;
          flex-direction: row-reverse;
        }
      }
    }
  }
  .todo-tiles {
    width: 100%;

  }
  .list-tile {
    display: flex!important;
    flex-direction: column;
  }
}
</style>