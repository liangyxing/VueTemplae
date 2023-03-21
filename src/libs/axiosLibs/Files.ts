import IFiles from "./IFiles";
import request from "./axiosBase";
interface datas{
    [key:string]:string
}
interface infoModel {
    [key: string]: datas[];
}
class Files implements IFiles{
    public QueryData=[]

    async QueryAllColletionInfo(){
        return await request({
            method: 'get'
            , url: "api/FileAppServices/QueryAllColletionInfo"
        }).then((data) => {
            //List<Dictionary<string, List<Dictionary<string, string>>>>
            for (var item in data.data){
                console.log(item)
                for(let key in data.data[item] )
                {
                    var res:[]=data.data[item][key]
                    res.forEach((data)=>{
                        console.log(data)
                    });
                    console.log(res)
                }
                
            }
        })
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