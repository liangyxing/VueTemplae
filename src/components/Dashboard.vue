<template>
    <div>
        <el-button type="primary" @click="uploadFormBtn">uploadFile</el-button>
        <el-button type="primary" @click="QueryCollection"> refresh</el-button>
    </div>
    <div style="margin-left: 20px;margin-right: 20px;" v-loading="isLoadding">
        <el-table :data="dataTAble.list" style="width: 100%">
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="type" label="type" width="180" />
            <el-table-column prop="describe" label="describe" />
            <el-table-column prop="DateTime" label="DateTime" />
            <el-table-column fixed="right" label="Operations" width="120">
                <template #default="scope" >
                    <div >
                        <el-button link type="primary" size="small" @click="UpdateFileDescrip(scope.row)">
                            update
                        </el-button>
                        <el-button link type="primary" size="small" @click="DeleteFile(scope.row)">
                            Remove
                        </el-button>

                        <el-button link type="primary" size="small" @click="DownloadFile(scope.row)">
                            Download
                        </el-button>
                    </div>

                </template>
            </el-table-column>

        </el-table>
    </div>
    <!-- update 弹窗 -->
    <div>
        <dialog-form :name="dialong.Name " :type="dialong.type" :describe="dialong.describe"></dialog-form> 
        <uploadform></uploadform>
    </div>

    <!-- {{ dataTAble }} -->
</template>

<script lang="ts" setup>
import { map } from 'lodash';
import Files from '../libs/axiosLibs/Files';
import { reactive, ref } from 'vue'
import { ElTable, ElTableColumn } from 'element-plus'
import uploadform   from "../components/uploadForm.vue"
import DialogForm from './DialogForm.vue';


import { getCurrentInstance } from 'vue'
const instance = getCurrentInstance();
const isLoadding=ref(false)

const emit1 = (num:any) => {
    instance?.proxy?.$Bus.emit('isShowUpdateDialog',num)
}
const emit2 = () => {
    instance?.proxy?.$Bus.emit('isShowFileInfoUpdateDialog')
}

instance?.proxy?.$Bus.on('updatePage', () => {
    QueryCollection()
})


let FileService = new Files()


type myList =
    {
        list: any[]
    }
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

const DeleteFile = async(row: any) => {
    console.log(row["name"])
    isLoadding.value=true
    let res=await FileService.DeletedFile(row["name"])
    console.log(res.data)
    

    if(res.data==true)
    {
        await QueryCollection()
        isLoadding.value=false
    }

}

type dialogdata={
    Name:string
    type:string
    describe:string
    
}
let dialong=reactive<dialogdata>({
    Name:"",
    type:"",
    describe:""
})
const UpdateFileDescrip = (row: any) => {
    console.log(row["name"])
    dialong.Name=row["name"]
    dialong.type=row["type"]
    dialong.describe=row["describe"]
    emit1(dialong)
}

const DownloadFile=async(row:any)=>{
    console.log(row["name"])
    
    await FileService.Download(row["name"])
}

const uploadFormBtn=()=>{
    emit2()
}

</script>