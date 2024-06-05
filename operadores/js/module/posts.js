// GET ALL DATA POSTS
export const getAllPosts=async ()=>{
    let response=await fetch('https://jsonplaceholder.typicode.com/posts');
    let data=await response.json();
    return data;
};

//POST DATA POSTS
export const postDataPosts = async (postData) => {
    // Validación de los datos ingresados
    if(
        !postData
        ||typeof postData.body!=='string'||postData.body===undefined
        ||typeof postData.title!=='string'||postData.title===undefined
        ||typeof postData.userId!=='number'||postData.userId===undefined
    )//mensaje de error en caso de no cumplirse la condicion anterior
    {throw new Error('Datos inválidos: asegúrate de que todos los campos sean correctos.');}
      const response = await fetch('https://jsonplaceholder.typicode.com/posts',{method: 'POST',body: JSON.stringify(postData),headers:{'Content-type': 'application/json; charset=UTF-8',},});  
      //la data      
      const data = await response.json();
      return data;
    };