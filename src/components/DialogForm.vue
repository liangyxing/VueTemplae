<template>
    <!-- Form -->
    <!-- :title="dialogdatas.Name " -->
    <el-dialog v-model="dialogFormVisible" >
        <h1>{{ dialogdatas.Name}}</h1>
        <el-form-item label="type" :label-width="formLabelWidth">
            <el-input v-model="dialogdatas.type" autocomplete="off" />
        </el-form-item>
        <el-form-item label="describe" :label-width="formLabelWidth">
            <el-input v-model="dialogdatas.describe" autocomplete="off" />
        </el-form-item>



        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogFormVisible = false">Cancel</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">
                    Confirm
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script lang="ts" setup>

import { reactive, ref } from 'vue'
import { getCurrentInstance } from 'vue'

const dialogFormVisible = ref(false)
const instance = getCurrentInstance()
instance?.proxy?.$Bus.on('isShowUpdateDialog', (num:any) => {
    dialogFormVisible.value = true
    dialogdatas.Name=num["Name"]
    dialogdatas.type=num["type"]
    dialogdatas.describe=num["describe"]

})


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

const comfirmBtn=()=>{
    
    dialogFormVisible.value = false
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
