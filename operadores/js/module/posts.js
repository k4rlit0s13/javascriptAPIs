// GET ALL DATA POSTS
export const getAllPosts=async ()=>{
    let response=await fetch('https://jsonplaceholder.typicode.com/posts');
    let data=await response.json();
    return data;
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


//PUT DATA POSTS
export const putDataPosts=async(selectDataPost)=>{
    // Validación de los datos ingresados
    if( !selectDataPost
        ||typeof selectDataPost.id!=='number'||selectDataPost.id===undefined
        ||typeof selectDataPost.userId!=='number'||selectDataPost.userId===undefined
        ||typeof selectDataPost.title!=='string'||selectDataPost.title===undefined
        ||typeof selectDataPost.body!=='string'||selectDataPost.body===undefined
        ){throw new Error('Datos inválidos: asegúrate de que todos los campos sean correctos.');}
    //verificacion del dato existente
    const response=await fetch(`https://jsonplaceholder.typicode.com/posts/${selectDataPost.id}`);
        if(!response.ok){throw new Error('406 dato no existente 😯');}
    //realizar el put
    const put=await fetch(`https://jsonplaceholder.typicode.com/posts/${selectDataPost.id}`,{method:'PUT',body:JSON.stringify(selectDataPost), headers:{'Content-Type':'application/json;charset=UTF-8'}}); 
    //verificacion del put
    if(!put.ok){throw new Error('ERROR, VUELVE A INTENTARLO ☠');}
        const result=await put.json();
        console.log(`Se actualizo el dato id:${selectDataPost.id} en POSTS 😎`, result);
        };