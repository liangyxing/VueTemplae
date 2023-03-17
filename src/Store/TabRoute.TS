import { State } from '@popperjs/core';
import { defineStore } from 'pinia'
import { Names } from './index'
import { useRoute, RouteLocationNormalized } from 'vue-router'



const res = (num: number) => {
    num = num + 1;
    console.log(num)
    return num

}

var openTab:RouteLocationNormalized[]
export const tabRoute = defineStore(Names.Test, {
    state: () => {
        
        return {
            openTab,//所有打开的路由

            //activeIndex:'' //激活状态

           activeIndex:'/mainPage/home' //激活状态
        }
    },
    //类似于computed 可以帮我们去修饰我们的值
    getters: {

    },
    //可以操作异步 和 同步提交state
    actions: {
        // 添加tabs
        add_tabs(data:RouteLocationNormalized) {
            this.openTab.push(data);
        },
        // 删除tabs
        delete_tabs(route:string) {
            let index = 0;
            for (let option of openTab) {
                if (option.path  === route) {
                    break;
                }
                index++;
            }
        this.openTab.splice(index, 1);
        },
        // 设置当前激活的tab
        set_active_index(index:string) {
            this.activeIndex = index;
        },
        set_tag_bull() {
            openTab = []
            this.activeIndex = '/mainPage/home'
        }
    }
})