<template>
    <div>
        <h1>login</h1>
    <button @click="isLogins">login</button>
    </div>
    <RouterView></RouterView>
</template>

<script setup lang="ts">
import { useRoute, useRouter, onBeforeRouteUpdate, } from 'vue-router';
import { useAuthStore} from '../Store/useAuthStore';
let router=useRouter()
let authStore=useAuthStore()
// let route=useRoute()
let isLogin=()=>{router.push("/mainPage")}
let isLogins=()=>{
    localStorage.setItem('isAuthenticated',"true")
    window.location.href="/mainPage"
}

</script>