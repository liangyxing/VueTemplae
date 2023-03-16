<template>
  <div>
    <button @click="Add2">+</button>
    <div>
      {{ Test.current }}
      {{ Test.count }}
    </div>
    <RouterView></RouterView>
  </div>
</template>

<style scoped>

</style>

<script setup lang="ts">
    import { ref } from 'vue'
    import { useTestStore } from '../Store/useTestStore '

    const Test = useTestStore()

    const Add = () => {
      Test.current++
    }
    //批量更新
    const Add2=()=>{
      Test.$patch((state)=>{
        state.current=3
        state.count=4
      })
    }

    const Add3=()=>{
      Test.setCurrent()
    }
    //Action异步调用
    const Add4=()=>{
      Test.addCount()
    }
</script>
