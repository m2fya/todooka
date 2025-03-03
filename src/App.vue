<template>
  <div id="app">
    <Header/>
    <div class="main-container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "App.vue",
  components: {Header},
}

</script>

<style lang="scss">
#app {
  height: 100%;
  overflow-x: hidden;
}
html, body {
  height: 100%;
  margin: 0;
  font-family: "Space Grotesk"
}
.main-container {
  height: 100%;
}
</style>
