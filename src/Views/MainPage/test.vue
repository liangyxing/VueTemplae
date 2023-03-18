<template>
    <div>
        <div>
            <el-tabs v-model="activeIndex" type="border-card" @tab-click="tabClick" @tab-remove="tabRemove">
                <el-tab-pane :key="item.name" v-for="(item, index) in openTab" :label="item.name" :name="item.path">
                    <keep-alive>
                        <router-view />
                    </keep-alive>
                </el-tab-pane>
            </el-tabs>
        </div>
        <div></div>
    </div>
</template>
<script setup lang="ts">
import { computed, ref, watch, onMounted } from 'vue'
import { tabRoute } from '../../Store/TabRoute'
import { useRoute, RouteLocationNormalized } from 'vue-router'

let tabRemove = () => { }

let tabClick = () => { }

const tabRoutes = tabRoute()

let openTab = computed(() => {
    return tabRoutes.$state.openTab
})

var activeIndex = computed({
    get: () => {
        return tabRoutes.$state.activeIndex
    },
    set: (value: string) => {
        tabRoutes.set_active_index(value)
    },
})
var route = useRoute()
watch(
    () => route.path,
    (newVal, oldVal) => {
        console.log(`路由从 ${oldVal} 切换到 ${newVal}`)
    },
)

onMounted(() => {

})
</script>
