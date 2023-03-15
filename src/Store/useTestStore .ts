import { defineStore } from 'pinia'
import { Names } from './index'


type Result = {
    name: string
    isChu: boolean
}

const Login = (): Promise<Result> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: '小满',
                isChu: true
            })
        }, 3000)
    })
}

const res=(num:number)=>{
    num=num+1;
    console.log(num)
    return num
}
export const useTestStore = defineStore(Names.Test, {
    state: () => {
        return {
            current: 1
            ,count:2
        }
    },
    //类似于computed 可以帮我们去修饰我们的值
    getters: {

    },
    //可以操作异步 和 同步提交state
    actions: {
        setCurrent(){
            this.current++
        },
        setCount(){
            this.count++
        },
        async addCount(){
            const ress=await res(this.count)
            console.log(ress)
        }
    }
})