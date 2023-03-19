<template>
    <div id="app">
        <el-tabs v-model:activeName="tabsStore.activeTab" type="card"  
        @tab-click='tabClick'
        @tab-remove="removeTab"
        closable>
            <el-tab-pane v-for="tab in tabsStore.tabs" :key="tab.name" :name="tab.path" :label="tab.name">
                <!-- <component :is="tab.component" /> -->
            </el-tab-pane>
        </el-tabs>
        <RouterView></RouterView>
    </div>
</template>

<script setup lang="ts">
import { defineComponent, onMounted, watch } from 'vue';
import { useTabsStore } from '../../Store/TabRoute';
import { useRoute, useRouter, onBeforeRouteUpdate } from 'vue-router';
import { RouteLocationNormalized } from 'vue-router'
import type { TabsPaneContext } from 'element-plus'
const tabsStore = useTabsStore();
const router = useRouter();
const route = useRoute();

// watch(
//     () => tabsStore.tabs,
//     (tabs) => {
//         const routeName = router.currentRoute.value.name;
//         const activeTab = tabs.find((tab: any) => tab.name === routeName);
//         if (activeTab) {
//             tabsStore.setActiveTab(activeTab.name);
//         } else if (tabs.length > 0) {
//             tabsStore.setActiveTab(tabs[0].name);
//         } else {
//             tabsStore.setActiveTab('');
//         }
//     }
// );

onBeforeRouteUpdate((to: RouteLocationNormalized, from: RouteLocationNormalized) => {
    console.log(`路由从 ${from.fullPath} 切换到 ${to.fullPath}`)
    let tabs = tabsStore.tabs
    const routeName = router.currentRoute.value.name;
    const activeTab = tabs.find((tab: any) => tab.name === to.name);

    if (activeTab) {
        tabsStore.setActiveTab(to.path);
        console.log("if ")
    } 
    else {
        
        tabsStore.addTab(to);
        tabsStore.setActiveTab(to.path);
        console.log("else ")
    }
})

onMounted(
    ()=>{

        tabsStore.setTagBull("/mainPage/home")
        tabsStore.addTab({route: '/mainPage/home', name: 'home',path:"/mainPage/home"})
        tabsStore.setActiveTab('/mainPage/home')
        router.push('/mainPage/home');

    }
)

let tabClick=(tab: TabsPaneContext, event: Event)=>{
    router.push({path: String(tab.paneName)});
}

let removeTab = (tab: TabsPaneContext, event: Event) => {
    if (String(tab)!="/mainPage/home") {
        tabsStore.removeTab(String(tab));
    } 
};



</script>
