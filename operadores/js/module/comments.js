import { getOnePosts } from "./posts.js";

// GET ALL DATA COMMENTS
export const getAllComments=async ()=>{
    let response=await fetch('https://jsonplaceholder.typicode.com/comments');
    let data=await response.json();
    return data;
};

//GET ONE DATA COMMENTS
export const getOneComment = async (id) => {
    if (!id||typeof id!=="number"||typeof id===undefined){throw new Error('Dato erroneo, no es el formato correcto');}
    let response = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`);
    if (response.status===404){throw new Error(`The data ${id} doesn't exists`);}
    let data = await response.json();
    return data;
};

//POST DATA COMMENTS
export const asf = async (postId,name,email,body) => {
    // Validación de los datos ingresados
    if(
        !commentData
        ||typeof commentData.body!=='string'||commentData.body===undefined
        ||typeof commentData.email!=='string'||commentData.email===undefined
        ||typeof commentData.name!=='string'||commentData.name===undefined
        ||typeof commentData.postId!=='number'||commentData.postId===undefined
    )//mensaje de error en caso de no cumplirse la condicion anterior
    {throw new Error('Datos inválidos: asegúrate de que todos los campos sean correctos.');}
    const response = await fetch('https://jsonplaceholder.typicode.com/comments',{method: 'POST',body: JSON.stringify(commentData),headers:{'Content-type': 'application/json; charset=UTF-8',},});  
    //la data 
    const data = await response.json();
    return data;
    }; 

//POST DATA POSTS
export const commentDataPosts=async(postId,name,email,body)=>{
    // Validación de los datos ingresados
    if(
        !postId||!name||!email||!body
        ||typeof postId!=='number'||postId===undefined
        ||typeof name!=='string'||name===undefined
        ||typeof email!=='string'||email===undefined
        ||typeof body!=='string'||body===undefined)
    //mensaje de error en caso de no cumplirse la condicion anterior
    {throw new Error('Datos inválidos: asegúrate de que todos los campos sean correctos.');}
    // verificacion de la existencia del userId
    if (!(await getOnePosts(postId))){throw new Error('Error del sistema');}
    //post
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',{method: 'POST',body: JSON.stringify({postId:postId,name:name,email:email,body:body}),headers:{'Content-type': 'application/json; charset=UTF-8',},});  
    //la data      
    const data = await response.json();
    return data;
};


//PUT DATA COMMENT
export const putDataComment=async(id,postId,name,email,body)=>{
    // Validación de los datos ingresados
    if( !id||!postId||!name||!email||!body
        ||typeof id!=='number'||id===undefined
        ||typeof postId!=='number'||postId===undefined
        ||typeof name!=='string'||name===undefined
        ||typeof email!=='string'||email===undefined
        ||typeof body!=='string'||body===undefined
        ){throw new Error('Datos inválidos: asegúrate de que todos los campos sean correctos.');}
    //verificacion del userId
    if (!(await getOnePosts(postId))){throw new Error('Error del sistema');}
    //verificacion del dato existente
    const response=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if(!response.ok){throw new Error('406 dato no existente 😯');}
    //realizar el put
    const put=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{method:'PUT',body:JSON.stringify({postId:postId,name:name,email:email,body:body}), headers:{'Content-Type':'application/json;charset=UTF-8'}}); 
    //verificacion del put
    if(!put.ok){throw new Error('ERROR, VUELVE A INTENTARLO ☠');}
    const result=await put.json();
    console.log(`Se actualizo el dato id:${id} en COMMENTS 😎`, result);
};


//PATCH DATA COMMENTS:

//PATCH NEW POSTID
export const patchPostIdComment=async(id,newPostId)=>{
    // Validación de los datos ingresados
    if(!id||typeof id!=='number'||id===undefined||!newPostId||typeof newPostId!=='number'||newPostId===undefined) 
    {throw new Error('Datos inválidos: asegúrate de que el ID y los campos a actualizar sean correctos.');}
    //verificar que el nuevo userId exista ya en users
    if (!(await getOnePosts(newPostId))) throw new Error('Error del sistema');
    const response=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if(!response.ok){throw new Error('406 dato no existente 😯');}
    // Realizar el patch
    const patch=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{method:'PATCH',body:JSON.stringify({postId:newPostId}),headers:{'Content-Type':'application/json;charset=UTF-8'}});
    // Verificación del patch
    if(!patch.ok){throw new Error('ERROR, VUELVE A INTENTARLO ☠');}
    const result=await patch.json();
    console.log(`Se actualizó el userId del dato id:${id} en COMMENTS 😼`, result);
};

//PATCH NEW NAME
export const patchNameComment=async(id,newName)=>{
    // Validación de los datos ingresados
    if(!id||typeof id!=='number'||id===undefined||!newName||typeof newName!=='string'||newName===undefined) 
    {throw new Error('Datos inválidos: asegúrate de que el ID y los campos a actualizar sean correctos.');}
    const response=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if(!response.ok){throw new Error('406 dato no existente 😯');}
    // Realizar el patch
    const patch=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{method:'PATCH',body:JSON.stringify({name:newName}),headers:{'Content-Type':'application/json;charset=UTF-8'}});
    // Verificación del patch
    if(!patch.ok){throw new Error('ERROR, VUELVE A INTENTARLO ☠');}
    const result=await patch.json();
    console.log(`Se actualizó el userId del dato id:${id} en COMMENTS 😼`, result);
};

//PATCH NEW EMAIL
export const patchEmailComment=async(id,newEmail)=>{
    // Validación de los datos ingresados
    if(!id||typeof id!=='number'||id===undefined||!newEmail||typeof newEmail!=='string'||newEmail===undefined) 
    {throw new Error('Datos inválidos: asegúrate de que el ID y los campos a actualizar sean correctos.');}
    const response=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if(!response.ok){throw new Error('406 dato no existente 😯');}
    // Realizar el patch
    const patch=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{method:'PATCH',body:JSON.stringify({email:newEmail}),headers:{'Content-Type':'application/json;charset=UTF-8'}});
    // Verificación del patch
    if(!patch.ok){throw new Error('ERROR, VUELVE A INTENTARLO ☠');}
    const result=await patch.json();
    console.log(`Se actualizó el userId del dato id:${id} en COMMENTS 😼`, result);
};

//PATCH NEW BODY
export const patchBodyComment=async(id,newBody)=>{
    // Validación de los datos ingresados
    if(!id||typeof id!=='number'||id===undefined||!newBody||typeof newBody!=='string'||newBody===undefined) 
    {throw new Error('Datos inválidos: asegúrate de que el ID y los campos a actualizar sean correctos.');}
    const response=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if(!response.ok){throw new Error('406 dato no existente 😯');}
    // Realizar el patch
    const patch=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{method:'PATCH',body:JSON.stringify({body:newBody}),headers:{'Content-Type':'application/json;charset=UTF-8'}});
    // Verificación del patch
    if(!patch.ok){throw new Error('ERROR, VUELVE A INTENTARLO ☠');}
    const result=await patch.json();
    console.log(`Se actualizó el userId del dato id:${id} en COMMENTS 😼`, result);
};

//DELETE DATA COMMENTS
export const deleteDataComment=async(commentToDelete)=>{
    if(typeof commentToDelete!=='number'||commentToDelete===undefined)
    {throw new Error('ID inválido: asegúrate de que el ID sea un número 👁👅👁.');} 
    const response=await fetch(`https://jsonplaceholder.typicode.com/comments/${commentToDelete}`);
    if (!response.ok) {throw new Error('406 dato no existente 👁👄👁');}
    // Realizar el DELETE
    const del=await fetch(`https://jsonplaceholder.typicode.com/comments/${commentToDelete}`,{method: 'DELETE'});
    // Verificación del DELETE
    if (!del.ok){throw new Error('ERROR, VUELVE A INTENTARLO ☠');}
    console.log(`Se eliminó el dato id:${commentToDelete} en COMMENTS 😎`);
};
