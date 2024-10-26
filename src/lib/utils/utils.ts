export const getImgURL = (collectionId, recordId, fileName) =>{
  return `http://defii.pockethost.io/api/files/${collectionId}/${recordId}/${fileName}`
}
// export const getImgURL = (collectionId, recordId, fileName) =>{
//   return `http://localhost:8090/api/files/${collectionId}/${recordId}/${fileName}`
// }