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