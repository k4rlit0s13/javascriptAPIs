import { getOneUser } from "./users.js";

// GET ALL DATA TODOS
export const getAllTodos=async ()=>{
    let response=await fetch('https://jsonplaceholder.typicode.com/todos');
    let data=await response.json();
    return data;
};

//GET ONE DATA PHOTOS
export const getOneTodos = async (id) => {
    if (!id||typeof id!=="number"||typeof id===undefined){throw new Error('Dato erroneo, no es el formato correcto');}
    let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    if (response.status===404){throw new Error(`The data ${id} doesn't exists`);}
    let data = await response.json();
    return data;
};

//POST DATA TODOS
export const todosDataPosts = async (userId,title,completed) => {
    // Validación de los datos ingresados
    if(
        !userId||!title||!completed
        ||typeof completed!=="boolean"||completed===undefined
        ||typeof title!=='string'||title===undefined
        ||typeof userId!=='number'||userId===undefined
    )//mensaje de error en caso de no cumplirse la condicion anterior
    {throw new Error('Datos inválidos: asegúrate de que todos los campos sean correctos.');}
    //verificar que el nuevo userId exista ya en users
    if (!(await getOneUser(userId))) throw new Error('Error del sistema');
    const response = await fetch('https://jsonplaceholder.typicode.com/todos',{method:'POST',body:JSON.stringify({userId:userId,title:title,completed:completed}),headers:{'Content-type':'application/json; charset=UTF-8',},});  
    //la data      
    const data = await response.json();
    return data;
};

//PUT DATA TODOS
export const putDataTodos=async(id,userId,title,completed)=>{
    // Validación de los datos ingresados
    if( 
        !id||!userId||!title||!completed
        ||typeof id!=="number"||id===undefined
        ||typeof completed!=="boolean"||completed===undefined
        ||typeof title!=='string'||title===undefined
        ||typeof userId!=='number'||userId===undefined)
    {throw new Error('Datos inválidos: asegúrate de que todos los campos sean correctos.');}
    //verificar que el nuevo userId exista ya en users
    if (!(await getOneUser(userId))) throw new Error('Error del sistema');
    //verificacion del dato existente
    const response=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if(!response.ok){throw new Error('406 dato no existente 😯');}
    //realizar el put
    const put=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{method:'PUT',body:JSON.stringify({userId:userId,title:title,completed:completed}), headers:{'Content-Type':'application/json;charset=UTF-8'}}); 
    //verificacion del put
    if(!put.ok){throw new Error('ERROR, VUELVE A INTENTARLO ☠');}
    const result=await put.json();
    console.log(`Se actualizo el dato id:${id} en TODOS 😎`, result);
};

//PATCH DATA TODOS:

//PATCH NEW userId
export const patchUserIdTodos=async(id,userId)=>{
    // Validación de los datos ingresados
    if(!id||typeof id!=='number'||id===undefined||!userId||typeof userId!=='number'||userId===undefined) 
    {throw new Error('Datos inválidos: asegúrate de que el ID y los campos a actualizar sean correctos.');}
    //verificar que el nuevo userId exista ya en users
    if (!(await getOneUser(userId))) throw new Error('Error del sistema');
    const response=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if(!response.ok){throw new Error('406 dato no existente 😯');}
    // Realizar el patch
    const patch=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{method:'PATCH',body:JSON.stringify({userId:userId}),headers:{'Content-Type':'application/json;charset=UTF-8'}});
    // Verificación del patch
    if(!patch.ok){throw new Error('ERROR, VUELVE A INTENTARLO ☠');}
    const result=await patch.json();
    console.log(`Se actualizó el userId del dato id:${id} en TODOS 😼`, result);
};

//PATCH NEW title
export const patchTitleTodos=async(id,title)=>{
    // Validación de los datos ingresados
    if(!id||typeof id!=='number'||id===undefined||!title||typeof title!=='string'||title===undefined) 
    {throw new Error('Datos inválidos: asegúrate de que el ID y los campos a actualizar sean correctos.');}
    const response=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if(!response.ok){throw new Error('406 dato no existente 😯');}
    // Realizar el patch
    const patch=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{method:'PATCH',body:JSON.stringify({title:title}),headers:{'Content-Type':'application/json;charset=UTF-8'}});
    // Verificación del patch
    if(!patch.ok){throw new Error('ERROR, VUELVE A INTENTARLO ☠');}
    const result=await patch.json();
    console.log(`Se actualizó el userId del dato id:${id} en TODOS 😼`, result);
};

//PATCH NEW completed
export const patchCompletedTodos=async(id,completed)=>{
    // Validación de los datos ingresados
    if(!id||typeof id!=='number'||id===undefined||!completed||typeof completed!=='boolean'||completed===undefined) 
    {throw new Error('Datos inválidos: asegúrate de que el ID y los campos a actualizar sean correctos.');}
    const response=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if(!response.ok){throw new Error('406 dato no existente 😯');}
    // Realizar el patch
    const patch=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{method:'PATCH',body:JSON.stringify({completed:completed}),headers:{'Content-Type':'application/json;charset=UTF-8'}});
    // Verificación del patch
    if(!patch.ok){throw new Error('ERROR, VUELVE A INTENTARLO ☠');}
    const result=await patch.json();
    console.log(`Se actualizó el userId del dato id:${id} en TODOS 😼`, result);
};

//DELETE DATA TODOS
export const deleteDataTodos=async(todosToDelete)=>{
    if(typeof todosToDelete!=='number'||todosToDelete===undefined)
    {throw new Error('ID inválido: asegúrate de que el ID sea un número 👁👅👁.');}
        
    const response=await fetch(`https://jsonplaceholder.typicode.com/comments/${todosToDelete}`);
    if (!response.ok) {throw new Error('406 dato no existente 👁👄👁');}
    // Realizar el DELETE
    const del=await fetch(`https://jsonplaceholder.typicode.com/comments/${todosToDelete}`,{method: 'DELETE'});
    // Verificación del DELETE
    if (!del.ok){throw new Error('ERROR, VUELVE A INTENTARLO ☠');}
    console.log(`Se eliminó el dato id:${todosToDelete} en TODOS 😎`);
};