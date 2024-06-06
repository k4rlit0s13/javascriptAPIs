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

//PUT DATA ALBUMS
export const putDataAlbums=async(selectDataAlbums)=>{
    // Validación de los datos ingresados
    if( !selectDataAlbums
        ||typeof selectDataAlbums.id!=='number'||selectDataAlbums.id===undefined
        ||typeof selectDataAlbums.userId!=='number'||selectDataAlbums.userId===undefined
        ||typeof selectDataAlbums.title!=='string'||selectDataAlbums.title===undefined
        ){throw new Error('Datos inválidos: asegúrate de que todos los campos sean correctos.');}
    //verificacion del dato existente
    const response=await fetch(`https://jsonplaceholder.typicode.com/posts/${selectDataAlbums.id}`);
        if(!response.ok){throw new Error('406 dato no existente 😯');}
    //realizar el put
    const put=await fetch(`https://jsonplaceholder.typicode.com/posts/${selectDataAlbums.id}`,{method:'PUT',body:JSON.stringify(selectDataAlbums), headers:{'Content-Type':'application/json;charset=UTF-8'}}); 
    //verificacion del put
    if(!put.ok){throw new Error('ERROR, VUELVE A INTENTARLO ☠');}
        const result=await put.json();
        console.log(`Se actualizo el dato id:${selectDataAlbums.id} en ALBUMS 😎`, result);
        };
