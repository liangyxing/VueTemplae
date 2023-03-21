<template>
    <div style="margin: 20px;">
        <el-table :data="dataTAble" style="width: 100%">
            <el-table-column prop="date" label="Date" width="180" />
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="address" label="Address" />
        </el-table>
    </div>

    <Idv>
        <button @click="getQueryCollection"> gets</button>
    </Idv>
</template>

<script lang="ts" setup>
import { map } from 'lodash';
import Files from '../libs/axiosLibs/Files';
import { timelineItemProps } from 'element-plus';
import{ref} from 'vue'
let FileService = new Files()

var dataTAble:any[]

let QueryCollection = async () => {
    let dataTAble:any[]=[]
    var data = await FileService.QueryAllColletionInfo()
    console.log(data)
    for (var item in data) {
        for (let key in data[item]) {
            console.log(key);
            var res: any[] = data[item][key]
            let temp:Map<string,any>=new Map()
            temp.set("Name",key)
            for(let items in res){
                for (let item in res[items]){
                    temp.set(item,res[items][item])
                }
            }
            dataTAble.push(temp)
            console.log(temp)
        }
    }   
    console.log(dataTAble)
    return dataTAble
}
let  getQueryCollection=async()=>{
    dataTAble=  await QueryCollection()
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