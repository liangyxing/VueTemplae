import { defineStore } from 'pinia';

export const useTabsStore = defineStore({
    id: 'tabs',
    state: () => ({
        tabs: [] as any[],
        activeTab: '/',
    }),
    actions: {
        addTab(tab: any) {
            this.tabs.push(tab);
        },
        removeTab(tabName: string) {
            const index = this.tabs.findIndex((tab) => tab.name === tabName);
            if (index !== -1) {
                this.tabs.splice(index, 1);
            }
        },
        setActiveTab(tabName: string) {
            this.activeTab = tabName;
        },
    },
});
