<template>
    <div>
        <h1>login</h1>
    <button @click="isLogins">login</button>
    </div>
    <RouterView></RouterView>
</template>

<script setup lang="ts">
import { useRoute, useRouter, onBeforeRouteUpdate, } from 'vue-router';
let router=useRouter()
// let route=useRoute()
let isLogin=()=>{router.push("/mainPage")}
let isLogins=()=>{window.location.href="/mainPage"}

</script>