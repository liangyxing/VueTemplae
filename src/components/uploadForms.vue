<template>
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
</template>
<script lang="ts" setup>
import { ref,reactive } from 'vue'
import type { UploadInstance } from 'element-plus'

type dialogdata={
    Name:string
    type:string
    describe:string
}
const uppdateInfoDatas= reactive<dialogdata>({
    Name:"",
    type:"",
    describe:""
})
let url=ref(`
api/FileAppServices/Upload?collectionNsame=${uppdateInfoDatas.Name}&type=${uppdateInfoDatas.type}&describe=${uppdateInfoDatas.describe}`
)

const uploadRef = ref<UploadInstance>()

const submitUpload = () => {
    uploadRef.value!.submit()
}
</script>
