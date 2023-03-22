<template>
    <div>
        <button @click="QueryCollection"> gets</button>
    </div>
    <div style="margin-left: 20px;margin-right: 20px;">
        <el-table :data="dataTAble.list" style="width: 100%">
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="type" label="type" width="180" />
            <el-table-column prop="describe" label="describe" />
            <el-table-column prop="DateTime" label="DateTime" />
            <el-table-column fixed="right" label="Operations" width="120">
                <template #default="scope" >
                    <div style="display: flex;">
                        <el-button link type="primary" size="small" @click="UpdateFileDescrip(scope.row)">
                            update
                        </el-button>
                        <el-button link type="primary" size="small" @click="DeleteFile(scope.row)">
                            Remove
                        </el-button>
                    </div>

                </template>
            </el-table-column>

        </el-table>
    </div>


    <!-- {{ dataTAble }} -->
</template>

<script lang="ts" setup>
import { map } from 'lodash';
import Files from '../libs/axiosLibs/Files';
import { reactive, ref } from 'vue'
import { ElTable, ElTableColumn } from 'element-plus'

let FileService = new Files()
type myList =
    {
        list: any[]
    }
// var dataTAble = ref<any[]>([])
var dataTAble = reactive<myList>({
    list: []
})

let QueryCollection = async () => {

    var data = await FileService.QueryAllColletionInfo()
    var tempList: any[] = []
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
            tempList.push(myobject)
            // console.log(myobject)
        }
    }
    // return dataTAble
    dataTAble.list = tempList
    // console.log(dataTAble)
}

const DeleteFile = (row: any) => {
    console.log(row["name"])
}

const UpdateFileDescrip = (row: any) => {
    console.log(row["name"])

}

</script>