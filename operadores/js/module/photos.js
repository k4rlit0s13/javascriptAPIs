import { getOneAlbum } from "./albums.js";

// GET ALL DATA PHOTOS
export const getAllPhotos=async ()=>{
    let response=await fetch('https://jsonplaceholder.typicode.com/photos');
    let data=await response.json();
    return data;
};

//GET ONE DATA PHOTOS
export const getOnePhoto = async (id) => {
    if (!id||typeof id!=="number"||typeof id===undefined){throw new Error('Dato erroneo, no es el formato correcto');}
    let response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
    if (response.status===404){throw new Error(`The data ${id} doesn't exists`);}
    let data = await response.json();
    return data;
};

//POST DATA PHOTOS
export const photosDataPosts=async(albumId,title,URL,thumbnailUrl)=>{
    // Validación de los datos ingresados
    if(
        !photosData
        ||typeof albumId!=='number'||albumId===undefined
        ||typeof title!=='string'||title===undefined
        ||typeof URL!=='string'||URL===undefined
        ||typeof thumbnailUrl!=='string'||thumbnailUrl===undefined
    )//mensaje de error en caso de no cumplirse la condicion anterior
    {throw new Error('Datos inválidos: asegúrate de que todos los campos sean correctos.');}
    // verificacion de la existencia del userId
    if (!(await getOneAlbum(albumId))){throw new Error('Error del sistema');}
    const response = await fetch('https://jsonplaceholder.typicode.com/photos',{method: 'POST',body: JSON.stringify({albumId:albumId,title:title,url:URL,thumbnailUrl:thumbnailUrl}),headers:{'Content-type': 'application/json; charset=UTF-8',},});  
    //la data      
    const data = await response.json();
    return data;
};

//PUT DATA ALBUMS
export const putDataPhotos=async(id,albumId,title,URL,thumbnailUrl)=>{
    // Validación de los datos ingresados
    if( !id||!albumId||!title||!URL||!thumbnailUrl
        ||typeof id!=='number'||id===undefined
        ||typeof albumId!=='number'||albumId===undefined
        ||typeof title!=='string'||title===undefined
        ||typeof URL!=='string'||URL===undefined
        ||typeof thumbnailUrl!=='string'||thumbnailUrl===undefined
        ){throw new Error('Datos inválidos: asegúrate de que todos los campos sean correctos.');}
    // verificacion de la existencia del userId
    if (!(await getOneAlbum(albumId))){throw new Error('Error del sistema');}        
    //verificacion del dato existente
    const response=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if(!response.ok){throw new Error('406 dato no existente 😯');}
    //realizar el put
    const put=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{method:'PUT',body:JSON.stringify({albumId:albumId,title:title,url:URL,thumbnailUrl:thumbnailUrl}), headers:{'Content-Type':'application/json;charset=UTF-8'}}); 
    //verificacion del put
    if(!put.ok){throw new Error('ERROR, VUELVE A INTENTARLO ☠');}
    const result=await put.json();
    console.log(`Se actualizo el dato id:${id} en PHOTOS 😎`, result);
};

//PATCH DATA PHOTOS:

//PATCH NEW ALBUMID
export const patchAlbumIdPhoto=async(id,newAlbumId)=>{
    // Validación de los datos ingresados
    if(!id||typeof id!=='number'||id===undefined||!newAlbumId||typeof newAlbumId!=='number'||newAlbumId===undefined) 
    {throw new Error('Datos inválidos: asegúrate de que el ID y los campos a actualizar sean correctos.');}
    //verificar que el nuevo userId exista ya en users
    if (!(await getOneAlbum(newAlbumId))) throw new Error('Error del sistema');
    const response=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if(!response.ok){throw new Error('406 dato no existente 😯');}
    // Realizar el patch
    const patch=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{method:'PATCH',body:JSON.stringify({albumId:newAlbumId}),headers:{'Content-Type':'application/json;charset=UTF-8'}});
    // Verificación del patch
    if(!patch.ok){throw new Error('ERROR, VUELVE A INTENTARLO ☠');}
    const result=await patch.json();
    console.log(`Se actualizó el userId del dato id:${id} en PHOTOS 😼`, result);
};

//PATCH NEW title
export const patchTitlePhoto=async(id,newTitle)=>{
    // Validación de los datos ingresados
    if(!id||typeof id!=='number'||id===undefined||!newTitle||typeof newTitle!=='string'||newTitle===undefined) 
    {throw new Error('Datos inválidos: asegúrate de que el ID y los campos a actualizar sean correctos.');}
    const response=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if(!response.ok){throw new Error('406 dato no existente 😯');}
    // Realizar el patch
    const patch=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{method:'PATCH',body:JSON.stringify({title:newTitle}),headers:{'Content-Type':'application/json;charset=UTF-8'}});
    // Verificación del patch
    if(!patch.ok){throw new Error('ERROR, VUELVE A INTENTARLO ☠');}
    const result=await patch.json();
    console.log(`Se actualizó el userId del dato id:${id} en PHOTOS 😼`, result);
};

//PATCH NEW url
export const patchURLPhoto=async(id,newURL)=>{
    // Validación de los datos ingresados
    if(!id||typeof id!=='number'||id===undefined||!newURL||typeof newURL!=='string'||newURL===undefined) 
    {throw new Error('Datos inválidos: asegúrate de que el ID y los campos a actualizar sean correctos.');}
    const response=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if(!response.ok){throw new Error('406 dato no existente 😯');}
    // Realizar el patch
    const patch=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{method:'PATCH',body:JSON.stringify({url:newURL}),headers:{'Content-Type':'application/json;charset=UTF-8'}});
    // Verificación del patch
    if(!patch.ok){throw new Error('ERROR, VUELVE A INTENTARLO ☠');}
    const result=await patch.json();
    console.log(`Se actualizó el userId del dato id:${id} en PHOTOS 😼`, result);
};

//PATCH NEW ThumbnailUrl
export const patchThumbnailUrlPhoto=async(id,newthumbnailUrl)=>{
    // Validación de los datos ingresados
    if(!id||typeof id!=='number'||id===undefined||!newthumbnailUrl||typeof newthumbnailUrl!=='string'||newthumbnailUrl===undefined) 
    {throw new Error('Datos inválidos: asegúrate de que el ID y los campos a actualizar sean correctos.');}
    const response=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if(!response.ok){throw new Error('406 dato no existente 😯');}
    // Realizar el patch
    const patch=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{method:'PATCH',body:JSON.stringify({thumbnailUrl:newthumbnailUrl}),headers:{'Content-Type':'application/json;charset=UTF-8'}});
    // Verificación del patch
    if(!patch.ok){throw new Error('ERROR, VUELVE A INTENTARLO ☠');}
    const result=await patch.json();
    console.log(`Se actualizó el userId del dato id:${id} en PHOTOS 😼`, result);
};


//DELETE DATA COMMENTS
export const deleteDataPhotos=async(photosToDelete)=>{
    if(typeof photosToDelete!=='number'||photosToDelete===undefined)
    {throw new Error('ID inválido: asegúrate de que el ID sea un número 👁👅👁.');}
        
    const response=await fetch(`https://jsonplaceholder.typicode.com/comments/${photosToDelete}`);
    if (!response.ok) {throw new Error('406 dato no existente 👁👄👁');}
    // Realizar el DELETE
    const del=await fetch(`https://jsonplaceholder.typicode.com/comments/${photosToDelete}`,{method: 'DELETE'});
    // Verificación del DELETE
    if (!del.ok){throw new Error('ERROR, VUELVE A INTENTARLO ☠');}
    console.log(`Se eliminó el dato id:${photosToDelete} en PHOTOS 😎`);
};

