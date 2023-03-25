interface IFiles{
    QueryAllColletionInfo:()=>void
    UpdateFileInfo:(collectionName:string,type:string,describe:string)=>void
}

export default IFiles