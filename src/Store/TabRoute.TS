import { defineStore } from 'pinia';

export const useTabsStore = defineStore({
    id: 'tabs',
    state: () => ({
        tabs: [] as any[],
        activeTab: '/home',
    }),
    actions: {
        addTab(tab: any) {
            this.tabs.push(tab);
        },
        removeTab(tabName: string) {
            const index = this.tabs.findIndex((tab) => tab.path === tabName);
            if (index !== -1) {
                this.tabs.splice(index,1)
            }

        },
        setActiveTab(tabName: string) {
            this.activeTab = tabName;
        },
        setTagBull(tabName: string){
            this.tabs=[]
            this.activeTab=tabName
        },
    },
});
