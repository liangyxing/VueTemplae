<template>
    <Idv>
        <button @click="gets"> gets</button>
    </Idv>
</template>

<script lang="ts" setup>
import Files from '../libs/axiosLibs/Files';
let FileService=new Files()
const gets=()=>FileService.QueryAllColletionInfo()
console.log(gets)
</script>