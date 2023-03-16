<script setup lang="ts">
  import MainPage from "./Views/MainPage/index.vue"
</script>

<template>
  <!-- <MainPage></MainPage> -->
  <div class="appLayout">
    <RouterView></RouterView>
  </div>



</template>

<style>
html,
body,
.el-container,#app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
  height: 100%;
  margin: 0px;
}

.appLayout {
  /* /display: grid; */
  /* align-items: center; */
  height: 100%;
  width: 100%;
}

</style>
