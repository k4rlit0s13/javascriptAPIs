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
export const commentDataPosts = async (commentData) => {
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


//PUT DATA COMMENT
export const putDataComment=async(selectDataComment)=>{
    // Validación de los datos ingresados
    if( !selectDataComment
        ||typeof selectDataComment.id!=='number'||selectDataComment.id===undefined
        ||typeof selectDataComment.postId!=='number'||selectDataComment.postId===undefined
        ||typeof selectDataComment.name!=='string'||selectDataComment.name===undefined
        ||typeof selectDataComment.email!=='string'||selectDataComment.email===undefined
        ||typeof selectDataComment.body!=='string'||selectDataComment.body===undefined
        ){throw new Error('Datos inválidos: asegúrate de que todos los campos sean correctos.');}
    //verificacion del dato existente
    const response=await fetch(`https://jsonplaceholder.typicode.com/posts/${selectDataComment.id}`);
        if(!response.ok){throw new Error('406 dato no existente 😯');}
    //realizar el put
    const put=await fetch(`https://jsonplaceholder.typicode.com/posts/${selectDataComment.id}`,{method:'PUT',body:JSON.stringify(selectDataComment), headers:{'Content-Type':'application/json;charset=UTF-8'}}); 
    //verificacion del put
    if(!put.ok){throw new Error('ERROR, VUELVE A INTENTARLO ☠');}
        const result=await put.json();
        console.log(`Se actualizo el dato id:${selectDataComment.id} en COMMENTS 😎`, result);
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
