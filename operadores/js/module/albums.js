import{getUser} from "./users.js";


// GET ALL DATA ALBUMS
export const getAllAlbums=async ()=>{
    let response=await fetch('https://jsonplaceholder.typicode.com/albums');
    let data=await response.json();
    return data;
};

export const validateAddAlbum=async({userId,title})=>{
    if (typeof userId!=="number"||userId===undefined) return {status:406,message:`The data ${userId}, received doesn't comply with the data type`};
    if (typeof title!=="string"||title===undefined) return {status:406,message:`The data ${title}, received doesn't comply with the data type`};
    let user=await getUser({userId});
    if(user.status===204) return {status:200,message:`The user to search does not exist`}
}

export const addAlbum=async(arg)=>{
    let val=await validateAddAlbum(arg);    
    if(val) return val;
    let config  ={
        method:"POST",
        headers:{'Content-Type':"application/json"},
        body: JSON.stringify(arg)
    }
    let res = await fetch('https://jsonplaceholder.typicode.com/albums', config);
    let data=await res.json();
    return data;
}

