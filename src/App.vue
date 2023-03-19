<script setup lang="ts">
  import MainPage from "./Views/MainPage/index.vue"
  import login from "./components/login.vue";
</script>

<template>
  <!-- <MainPage></MainPage> -->

  <div>
    <!-- <login></login> -->
    <RouterView></RouterView>
  </div>



</template>

<style lang="less">

#app ,body,html,.el-container{
  margin: 0px;
  height: 100%;
  width: 100%;
  padding: 0%;
  max-width: 100%;
}
// body{
  //   background-color: aquamarine;
  // }
// #app{
  //   background-color: beige;
  // }
html{
  background-color: black;
}

</style>