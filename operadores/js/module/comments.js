// GET ALL DATA COMMENTS
export const getAllComments=async ()=>{
    let response=await fetch('https://jsonplaceholder.typicode.com/comments');
    let data=await response.json();
    return data;
};