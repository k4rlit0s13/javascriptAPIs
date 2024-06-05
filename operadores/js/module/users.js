// GET ALL DATA USERS
export const getAllUsers=async ()=>{
    let response=await fetch('https://jsonplaceholder.typicode.com/users');
    let data=await response.json();
    return data;
};









const validateGetUser=async({userId})=>{
    if(typeof userId !=="number"||userId===undefined)return{status:406,message:""}
}
export const getUser=async(arg)=>{
    let val=await validateGetUser(arg);    
    if(val)return val;
    let res=await fetch(`https://jsonplaceholder.typicode.com/users/${arg.userId}`)
    if(res.status===404)return{status:204,message:" "}
    let data=await res.json();
    return data;
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

