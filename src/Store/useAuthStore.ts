import { defineStore } from 'pinia';

export const useAuthStore = defineStore({
    id: 'atuh',
    state: () => ({
        isAuthenticated: false,
    }),
    actions: {
        setActiveTab(isAuthenticated: boolean) {
            this.isAuthenticated = isAuthenticated;
        },
    },
});
