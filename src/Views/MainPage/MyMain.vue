<template>
    <div id="app">
        <el-tabs v-model:activeName="tabsStore.activeTab" type="card" closable>
            <el-tab-pane v-for="tab in tabsStore.tabs" :key="tab.name" :name="tab.name" :label="tab.label"
                @close="removeTab(tab.name)">
                <component :is="tab.component" />
            </el-tab-pane>
        </el-tabs>
        <RouterView></RouterView>
    </div>
</template>

<script setup lang="ts">
import { defineComponent, onMounted, watch } from 'vue';
import { useTabsStore } from '../../Store/TabRoute';
import { useRoute, useRouter } from 'vue-router';


const tabsStore = useTabsStore();
const router = useRouter();
const route = useRoute();

watch(
    () => tabsStore.tabs,
    (tabs) => {
        const routeName = router.currentRoute.value.name;
        const activeTab = tabs.find((tab: any) => tab.name === routeName);
        if (activeTab) {
            tabsStore.setActiveTab(activeTab.name);
        } else if (tabs.length > 0) {
            tabsStore.setActiveTab(tabs[0].name);
        } else {
            tabsStore.setActiveTab('');
        }
    }
);

const removeTab = (tabName: string) => {
    tabsStore.removeTab(tabName);
    if (router.currentRoute.value.name === tabName) {
        const lastTab = tabsStore.tabs[tabsStore.tabs.length - 1];
        if (lastTab) {
            router.push({ name: lastTab.name });
        } else {
            router.push('/');
        }
    }
};



</script>
