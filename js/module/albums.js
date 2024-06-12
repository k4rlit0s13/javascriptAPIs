import { getOneUser } from "./users.js";


// GET ALL DATA ALBUMS
export const getAllAlbums=async ()=>{
    let response=await fetch('https://jsonplaceholder.typicode.com/albums');
    let data=await response.json();
    return data;
};

//GET ONE DATA ALBUMS
export const getOneAlbum = async (id) => {
    if (!id||typeof id!=="number"||typeof id===undefined){throw new Error('Dato erroneo, no es el formato correcto');}
    let response = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`);
    if (response.status===404){throw new Error(`The data ${id} doesn't exists`);}
    let data = await response.json();
    return data;
};

//POST DATA POSTS
export const albumDataPosts = async (userId,title) => {
    // Validación de los datos ingresados
    if(
        !userId||!title
        ||typeof userId!=='number'||userId===undefined
        ||typeof title!=='string'||title===undefined
    )//mensaje de error en caso de no cumplirse la condicion anterior
    {throw new Error('Datos inválidos: asegúrate de que todos los campos sean correctos.');}
    // verificacion de la existencia del userId
    if (!(await getOneUser(userId))){throw new Error('Error del sistema');}
    const response = await fetch('https://jsonplaceholder.typicode.com/albums',{method: 'POST',body: JSON.stringify({userId:userId,title:title}),headers:{'Content-type': 'application/json; charset=UTF-8',},});  
    //la data      
    const data = await response.json();
    return data;
};

//PUT DATA ALBUMS
export const putDataAlbums=async(id,userId,title)=>{
    // Validación de los datos ingresados
    if( !id||!userId||!title
        ||typeof id!=='number'||id===undefined
        ||typeof userId!=='number'||userId===undefined
        ||typeof title!=='string'||title===undefined  
        ){throw new Error('Datos inválidos: asegúrate de que todos los campos sean correctos.');}
    //verificacion del userId
    if (!(await getOneUser(userId))){throw new Error('Error del sistema');}
    //verificacion del dato existente
    const response=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if(!response.ok){throw new Error('406 dato no existente 😯');}
    //realizar el put
    const put=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{method:'PUT',body:JSON.stringify({userId:userId,title:title}), headers:{'Content-Type':'application/json;charset=UTF-8'}}); 
    //verificacion del put
    if(!put.ok){throw new Error('ERROR, VUELVE A INTENTARLO ☠');}
    const result=await put.json();
    console.log(`Se actualizo el dato id:${id} en ALBUMS 😎`, result);
};

//PATCH DATA ALBUMS:

//PATCH NEW USERID
export const patchUserIdAlbum=async(id,newUserId)=>{
    // Validación de los datos ingresados
    if(!id||typeof id!=='number'||id===undefined||!newUserId||typeof newUserId!=='number'||newUserId===undefined) 
    {throw new Error('Datos inválidos: asegúrate de que el ID y los campos a actualizar sean correctos.');}
    //verificar que el nuevo userId exista ya en users
    if (!(await getOneUser(newUserId))) throw new Error('Error del sistema');
    const response=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if(!response.ok){throw new Error('406 dato no existente 😯');}
    // Realizar el patch
    const patch=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{method:'PATCH',body:JSON.stringify({userId:newUserId}),headers:{'Content-Type':'application/json;charset=UTF-8'}});
    // Verificación del patch
    if(!patch.ok){throw new Error('ERROR, VUELVE A INTENTARLO ☠');}
    const result=await patch.json();
    console.log(`Se actualizó el userId del dato id:${id} en ALBUMS 😼`, result);
};

//PATCH NEW USERID
export const patchTitleAlbum=async(id,newTitle)=>{
    // Validación de los datos ingresados
    if(!id||typeof id!=='number'||id===undefined||!newTitle||typeof newTitle!=='string'||newTitle===undefined) 
    {throw new Error('Datos inválidos: asegúrate de que el ID y los campos a actualizar sean correctos.');}
    //verificacion del dato
    const response=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if(!response.ok){throw new Error('406 dato no existente 😯');}
    // Realizar el patch
    const patch=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{method:'PATCH',body:JSON.stringify({title:newTitle}),headers:{'Content-Type':'application/json;charset=UTF-8'}});
    // Verificación del patch
    if(!patch.ok){throw new Error('ERROR, VUELVE A INTENTARLO ☠');}
    const result=await patch.json();
    console.log(`Se actualizó el userId del dato id:${id} en ALBUMS 😼`, result);
};

//DELETE DATA COMMENTS
export const deleteDataAlbums=async(albumToDelete)=>{
    if(typeof albumToDelete!=='number'||albumToDelete===undefined)
    {throw new Error('ID inválido: asegúrate de que el ID sea un número 👁👅👁.');}
    const response=await fetch(`https://jsonplaceholder.typicode.com/comments/${albumToDelete}`);
    if (!response.ok) {throw new Error('406 dato no existente 👁👄👁');}
    // Realizar el DELETE
    const del=await fetch(`https://jsonplaceholder.typicode.com/comments/${albumToDelete}`,{method: 'DELETE'});
    // Verificación del DELETE
    if (!del.ok){throw new Error('ERROR, VUELVE A INTENTARLO ☠');}
    console.log(`Se eliminó el dato id:${albumToDelete} en ALBUMS 😎`);
};