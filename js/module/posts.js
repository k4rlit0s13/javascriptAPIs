import { getOneUser } from "./users.js";

// GET ALL DATA POSTS
export const getAllPosts=async ()=>{
    let response=await fetch('https://jsonplaceholder.typicode.com/posts');
    let data=await response.json();
    return(data);
};

//GET ONE DATA POSTS
export const getOnePosts = async (id) => {
    if (!id||typeof id!=="number"||typeof id===undefined){throw new Error('Dato erroneo, no es el formato correcto');}
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (response.status===404){throw new Error(`The data ${id} doesn't exists`);}
    let data = await response.json();
    return data;
};


//POST DATA POSTS
export const postDataPosts=async(userId,title,body)=>{
    // Validación de los datos ingresados
    if(
        !userId||!title||!body
        ||typeof userId!=='number'||userId===undefined
        ||typeof title!=='string'||title===undefined
        ||typeof body!=='string'||body===undefined)
    //mensaje de error en caso de no cumplirse la condicion anterior
    {throw new Error('Datos inválidos: asegúrate de que todos los campos sean correctos.');}
    // verificacion de la existencia del userId
    if (!(await getOneUser(userId))){throw new Error('Error del sistema');}
    //post
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',{method: 'POST',body: JSON.stringify({userId:userId,title:title,body:body}),headers:{'Content-type': 'application/json; charset=UTF-8',},});  
    //la data      
    const data = await response.json();
    return data;
};


//PUT DATA POSTS
export const putDataPosts=async(id,userId,title,body)=>{
    // Validación de los datos ingresados
    if (!id||!userId||!title||!body||
        typeof id !== 'number'||id === undefined ||
        typeof userId !== 'number'||userId === undefined ||
        typeof title !== 'string'||title === undefined ||
        typeof body !== 'string'||body === undefined) {
        throw new Error('Datos inválidos: asegúrate de que todos los campos sean correctos.');}
    //verificacion del userId
    if (!(await getOneUser(userId))){throw new Error('Error del sistema');}
    //verificacion del dato existente
    const response=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if(!response.ok){throw new Error('406 dato no existente 😯');}
    //realizar el put
    const put=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{method:'PUT',body:JSON.stringify({userId:userId,title:title,body:body}),headers:{'Content-Type':'application/json;charset=UTF-8'}}); 
    //verificacion del put
    if(!put.ok){throw new Error('ERROR, VUELVE A INTENTARLO ☠');}
    const result=await put.json();
    console.log(`Se actualizo el dato id:${id} en POSTS 😎`, result);
};

//PATCH DATA POSTS:

//PATCH NEW USERID
export const patchUserIdPost=async(id,newUserId)=>{
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
    console.log(`Se actualizó el userId del dato id:${id} en POSTS 😼`, result);
};

//PATCH NEW TITLE
export const patchTitlePost=async(id,newtitle)=>{
    // Validación de los datos ingresados
    if(!id||typeof id!=='number'||id===undefined||!newtitle||typeof newtitle!=='string'||newtitle===undefined) 
    {throw new Error('Datos inválidos: asegúrate de que el ID y los campos a actualizar sean correctos.');}
    //verificar que el nuevo userId exista ya en users
    const response=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if(!response.ok){throw new Error('406 dato no existente 😯');}
    // Realizar el patch
    const patch=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{method:'PATCH',body:JSON.stringify({title:newtitle}),headers:{'Content-Type':'application/json;charset=UTF-8'}});
    // Verificación del patch
    if(!patch.ok){throw new Error('ERROR, VUELVE A INTENTARLO ☠');}
    const result=await patch.json();
    console.log(`Se actualizó el title del dato id:${id} en POSTS 😼`, result);
};

//PATCH NEW BODY
export const patchBodyPost=async(id,newBody)=>{
    // Validación de los datos ingresados
    if(!id||typeof id!=='number'||id===undefined||!newBody||typeof newBody!=='string'||newBody===undefined) 
    {throw new Error('Datos inválidos: asegúrate de que el ID y los campos a actualizar sean correctos.');}
    //verificar que el nuevo userId exista ya en users
    const response=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if(!response.ok){throw new Error('406 dato no existente 😯');}
    // Realizar el patch
    const patch=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{method:'PATCH',body:JSON.stringify({body:newBody}),headers:{'Content-Type':'application/json;charset=UTF-8'}});
    // Verificación del patch
    if(!patch.ok){throw new Error('ERROR, VUELVE A INTENTARLO ☠');}
    const result=await patch.json();
    console.log(`Se actualizó el body del dato id:${id} en POSTS 😼`, result);
};

//DELETE DATA POSTS
export const deleteDataPosts=async(postsToDelete)=>{
    if (typeof postsToDelete !== 'number' || postsToDelete === undefined)
    {throw new Error('ID inválido: asegúrate de que el ID sea un número 👁👅👁.');}
    //verificacion del dato
    const response=await fetch(`https://jsonplaceholder.typicode.com/posts/${postsToDelete}`);
    if (!response.ok){throw new Error('406 dato no existente 👁👄👁');}
    // Realizar el DELETE
    const del=await fetch(`https://jsonplaceholder.typicode.com/posts/${postsToDelete}`,{method: 'DELETE'});
    // Verificación del DELETE
    if (!del.ok){throw new Error('ERROR, VUELVE A INTENTARLO ☠');}
    console.log(`Se eliminó el dato id:${postsToDelete} en POSTS 😎`);
};