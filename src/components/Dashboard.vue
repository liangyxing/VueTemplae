<template>
    <div>
        <button @click="QueryCollection"> gets</button>
    </div>
    <div style="margin-left: 20px;margin-right: 20px;">
        <el-table :data="dataTAble" style="width: 100%">
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="type" label="type" width="180" />
            <el-table-column prop="describe" label="describe" />
            <el-table-column prop="DateTime" label="DateTime" />
        </el-table>
    </div>


    <!-- {{ dataTAble }} -->
</template>

<script lang="ts" setup>
import { map } from 'lodash';
import Files from '../libs/axiosLibs/Files';
import { timelineItemProps } from 'element-plus';
import { ref } from 'vue'
let FileService = new Files()
let names = ref<any[]>([])
var dataTAble = ref<any[]>([])
let QueryCollection = async () => {

    var data = await FileService.QueryAllColletionInfo()

    for (var item in data) {
        for (let key in data[item]) {
            var res: any[] = data[item][key]
            let temp: Map<string, any> = new Map()
            temp.set("name", key)
            for (let items in res) {
                for (let item in res[items]) {
                    temp.set(item, res[items][item])
                }
            }
            const myobject = [...temp].reduce((obj: any, [key, value]) => {
                obj[key] = value
                return obj
            }, {})
            dataTAble.value.push(myobject)
            console.log(myobject)
        }
    }
    // return dataTAble
    console.log(dataTAble)
}

// const tableData = [
//     {
//         date: '2016-05-03',
//         name: 'Tom',
//         address: 'No. 189, Grove St, Los Angeles',
//     },
//     {
//         date: '2016-05-02',
//         name: 'Tom',
//         address: 'No. 189, Grove St, Los Angeles',
//     },
//     {
//         date: '2016-05-04',
//         name: 'Tom',
//         address: 'No. 189, Grove St, Los Angeles',
//     },
//     {
//         date: '2016-05-01',
//         name: 'Tom',
//         address: 'No. 189, Grove St, Los Angeles',
//     },
// ]
</script>