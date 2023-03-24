<template>
    <div>
        <el-dialog v-model="dialogFormVisible" >
        <el-form-item label="Name" :label-width="formLabelWidth">
            <el-input v-model="dialogdatas.Name" autocomplete="off" />
        </el-form-item>

        <el-form-item label="type" :label-width="formLabelWidth">
            <el-input v-model="dialogdatas.type" autocomplete="off" />
        </el-form-item>

        <el-form-item label="describe" :label-width="formLabelWidth">
            <el-input v-model="dialogdatas.describe" autocomplete="off" />
        </el-form-item>
        <div>
        <el-upload ref="uploadRef" class="upload-demo" 
        action=url
        :auto-upload="false">
        <template #trigger>
            <el-button type="primary">select file</el-button>
        </template>

        <el-button class="ml-3" type="success" @click="submitUpload">
            upload to server
        </el-button>

        <template #tip>
            <div class="el-upload__tip">
                jpg/png files with a size less than 500kb
            </div>
        </template>
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
const dialogFormVisible = ref(false)
const instance = getCurrentInstance()

instance?.proxy?.$Bus.on('isShowFileInfoUpdateDialog', () => {
    dialogFormVisible.value = true
    // dialogdatas.Name=num["Name"]
    // dialogdatas.type=num["type"]
    // dialogdatas.describe=num["describe"]

})

const emit1 = () => {
    instance?.proxy?.$Bus.emit('updatePage')
}


const formLabelWidth = '140px'

type dialogdata={
    Name:string
    type:string
    describe:string
}
const dialogdatas= reactive<dialogdata>({
    Name:"",
    type:"",
    describe:""
})

const comfirmBtn=async()=>{
    let files= new Files()
    await files.UpdateFileInfo(dialogdatas.Name,dialogdatas.type,dialogdatas.describe)
    emit1()
    dialogFormVisible.value = false
}


let url=ref(`
api/FileAppServices/Upload?collectionNsame=${dialogdatas.Name}&type=${dialogdatas.type}&describe=${dialogdatas.describe}`
)

const uploadRef = ref<UploadInstance>()

const submitUpload = () => {
    uploadRef.value!.submit()
}

</script>
<style scoped>
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
