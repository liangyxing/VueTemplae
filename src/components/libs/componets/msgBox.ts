import { ElMessage, ElMessageBox } from 'element-plus'

const openDialog = () => {
    ElMessageBox.prompt('Please input your e-mail', 'Tip', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
    }) 

}

export default openDialog