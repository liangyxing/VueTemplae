interface IFiles{
    QueryAllColletionInfo:()=>void
    UpdateFileInfo:(collectionName:string,type:string,describe:string)=>void
    UpLoadFile:(collectionName:string,type:string,describe:string)=>void
    DeletedFile:(collectionName:string)=>void
    Download:(collectionName:string)=>void
}

export default IFiles