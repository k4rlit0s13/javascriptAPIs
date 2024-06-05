import{getUser} from "./users.js";

// GET ALL DATA ALBUMS
export const getAllAlbums=async ()=>{
    let response=await fetch('https://jsonplaceholder.typicode.com/albums');
    let data=await response.json();
    return data;
};

//POST DATA POSTS
export const albumDataPosts = async (albumData) => {
    // Validación de los datos ingresados
    if(
        !albumData
        ||typeof albumData.title!=='string'||albumData.title===undefined
        ||typeof albumData.userId!=='number'||albumData.userId===undefined
    )//mensaje de error en caso de no cumplirse la condicion anterior
    {throw new Error('Datos inválidos: asegúrate de que todos los campos sean correctos.');}
      const response = await fetch('https://jsonplaceholder.typicode.com/albums',{method: 'POST',body: JSON.stringify(albumData),headers:{'Content-type': 'application/json; charset=UTF-8',},});  
      //la data      
      const data = await response.json();
      return data;
    };