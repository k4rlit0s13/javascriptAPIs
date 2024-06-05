// GET ALL DATA PHOTOS
export const getAllPhotos=async ()=>{
    let response=await fetch('https://jsonplaceholder.typicode.com/photos');
    let data=await response.json();
    return data;
};