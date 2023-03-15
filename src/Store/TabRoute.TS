import { defineStore } from 'pinia'
import { Names } from './index'




const res = (num: number) => {
    num = num + 1;
    console.log(num)
    return num
}
export const useTestStore = defineStore(Names.Test, {
    state: () => {
        return {
            openTab: [],//所有打开的路由

            //activeIndex:'' //激活状态

            activeIndex: '/mainPage/home' //激活状态
        }
    },
    //类似于computed 可以帮我们去修饰我们的值
    getters: {

    },
    //可以操作异步 和 同步提交state
    actions: {
        // 添加tabs
        add_tabs(state, data) {
            this.state.openTab.push(data);
        },
        // 删除tabs
        delete_tabs(state, route) {
            let index = 0;
            for (let option of state.openTab) {
                if (option.route === route) {
                    break;
                }
                index++;
            }
            this.state.openTab.splice(index, 1);
        },
        // 设置当前激活的tab
        set_active_index(state, index) {
            this.state.activeIndex = index;
        },
        set_tag_bull(state) {
            this.state.openTab = []
            this.state.activeIndex = '/mainPage/home'
        }
    }
})