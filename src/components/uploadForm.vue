<template>
    <div>
        <el-dialog v-model="dialogFormVisible">
            <el-form-item label="Name" :label-width="formLabelWidth">
                <el-input v-model="dialogdatas.Name" autocomplete="off" />
            </el-form-item>

            <el-form-item label="type" :label-width="formLabelWidth">
                <el-input v-model="dialogdatas.type" autocomplete="off" />
            </el-form-item>

            <el-form-item label="describe" :label-width="formLabelWidth">
                <el-input v-model="dialogdatas.describe" autocomplete="off" />
            </el-form-item>
            <div >
                <el-upload ref="uploadRef" 
                class="upload-demo"
                v-loading="isLoadding"
                :action=url 
                :on-success="handleSuccess" 
                :auto-upload="false">
                    <template #trigger>
                        <el-button type="primary">select file</el-button>
                    </template>

                    <el-button class="ml-3" type="success" @click="submitUpload">
                        upload
                    </el-button>

                </el-upload>
            </div>
        </el-dialog>

    </div>
</template>

<script lang="ts" setup>

import { reactive, ref } from 'vue'
import { getCurrentInstance } from 'vue'
import Files from '../libs/axiosLibs/Files';
import type { UploadInstance } from 'element-plus'
import { emit } from 'process';


const dialogFormVisible = ref(false)
const instance = getCurrentInstance()

instance?.proxy?.$Bus.on('isShowFileInfoUpdateDialog', () => {
    dialogFormVisible.value = true
})

const formLabelWidth = '140px'

type dialogdata = {
    Name: string
    type: string
    describe: string
}
const dialogdatas = reactive<dialogdata>({
    Name: "",
    type: "",
    describe: ""
})

const uploadRef = ref<UploadInstance>()

var url = ref("")
var isLoadding=ref(false)


const submitUpload = () => {
    //url=ref(`api/FileAppServices/Upload?collectionNsame=${dialogdatas.Name}&type=${dialogdatas.type}&describe=${dialogdatas.describe}`)
    url.value = `https://localhost:44363/api/FileAppServices/Upload?collectionName=${dialogdatas.Name}&type=${dialogdatas.type}&describe=${dialogdatas.describe}`
    uploadRef.value!.submit()
    isLoadding.value=true
}
const emit11 = () => {
    instance?.proxy?.$Bus.emit('updatePage')
}
const handleSuccess = () => {
    dialogFormVisible.value = false
    emit11()
    isLoadding.value=false
}
const isShowLoadding=()=>{
    isLoadding.value=false
}

</script>

<style scoped>
.example-showcase .el-loading-mask {
    z-index: 9;
}
.el-button--text {
    margin-right: 15px;
}

.el-select {
    width: 300px;
}

.el-input {
    width: 300px;
}

.dialog-footer button:first-child {
    margin-right: 10px;
}
</style>
