import IFiles from "./IFiles";
import request from "./axiosBase";
import { saveAs } from 'file-saver';
interface datas {
    [key: string]: string
}
interface infoModel {
    [key: string]: datas[];
}
class Files implements IFiles {
    private QueryData = []

    private async getColletionInfo() {

        return await request({
            method: 'get'
            , url: "api/FileAppServices/QueryAllColletionInfo"
        })
    }

    private async postUpdateFile(collectionName: string, type: string, describe: string) {


        // urls="api/FileAppServices/UpdateFileInfo?collectionName=${}&type=KEBA&describe=modbus%20tcp"
        return await request({
            method: "post",
            url: `api/FileAppServices/UpdateFileInfo?collectionName=${collectionName}&type=${type}&describe=${describe}`

        })
    }

    async QueryAllColletionInfo() {
        let res = await this.getColletionInfo().then((data) => {
            //List<Dictionary<string, List<Dictionary<string, string>>>>
            // for (var item in data.data){
            //     console.log(item)
            //     for(let key in data.data[item] )
            //     {
            //         var res:[]=data.data[item][key]
            //         res.forEach((data)=>{
            //             console.log(data)
            //         });
            //         console.log(res)
            //     }

            // }
            this.QueryData = data.data
            // console.log(data.data)

        })
        return this.QueryData;
    }

    async UpdateFileInfo(collectionName: string, type: string, describe: string) {
        return await this.postUpdateFile(collectionName, type, describe)
    }

    async UpLoadFile(collectionName: string, type: string, describe: string) {
        return await request({
            method: 'post',
            url: `api/FileAppServices/Upload?collectionNsame=${collectionName}&type=${type}&describe=${describe}`
        })
    }

    async DeletedFile(collectionName: string) {
        return await request({
            method: "post",
            url: `api/FileAppServices/Delete?collectionName=${collectionName}`
        })
    }
    async Download(collectionName: string) {
        // return  request({
        //     method:"get",
        //     url:`https://localhost:44363/api/FileAppServices/DownLoad?collectionName=${collectionName}`
        // })
        // const url=`https://localhost:44363/api/FileAppServices/DownLoad?collectionName=${collectionName}`
        // const link = document.createElement('a')
        // link.href = url;
        // link.download = 'file.csv'; // 下载后的文件名
        // document.body.appendChild(link);
        // link.click();
        // document.body.removeChild(link);


        const url=`https://localhost:44363/api/FileAppServices/DownLoad?collectionName=${collectionName}`// 文件的下载链接
        try {
            const response = await fetch(url);
            const blob = await response.blob();
            saveAs(blob, 'file.csv'); // 下载文件
        } catch (error) {
            console.error(error);
        }
    

}
    
}

// const Files: IFiles = {
//     QueryAllColletionInfo() {
//         return request({
//             method: 'get'
//             , url: "api/FileAppServices/QueryAllColletionInfo"
//         }).then((data) => {
//             console.log(data.data)
//         })
//     },
// }


export default Files