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
export const photosDataPosts = async (photosData) => {
    // Validación de los datos ingresados
    if(
        !photosData
        ||typeof photosData.albumId!=='number'||photosData.albumId===undefined
        ||typeof photosData.title!=='string'||photosData.title===undefined
        ||typeof photosData.url!=='string'||photosData.url===undefined
        ||typeof photosData.thumbnailUrl!=='string'||photosData.thumbnailUrl===undefined
    )//mensaje de error en caso de no cumplirse la condicion anterior
    {throw new Error('Datos inválidos: asegúrate de que todos los campos sean correctos.');}
      const response = await fetch('https://jsonplaceholder.typicode.com/photos',{method: 'POST',body: JSON.stringify(photosData),headers:{'Content-type': 'application/json; charset=UTF-8',},});  
      //la data      
      const data = await response.json();
      return data;
    };

//PUT DATA ALBUMS
export const putDataPhotos=async(selectDataPhotos)=>{
    // Validación de los datos ingresados
    if( !selectDataPhotos
        ||typeof selectDataPhotos.id!=='number'||selectDataPhotos.id===undefined
        ||typeof selectDataPhotos.albumId!=='number'||selectDataPhotos.albumId===undefined
        ||typeof selectDataPhotos.title!=='string'||selectDataPhotos.title===undefined
        ||typeof selectDataPhotos.url!=='string'||selectDataPhotos.url===undefined
        ||typeof selectDataPhotos.thumbnailUrl!=='string'||selectDataPhotos.thumbnailUrl===undefined
        ){throw new Error('Datos inválidos: asegúrate de que todos los campos sean correctos.');}
    //verificacion del dato existente
    const response=await fetch(`https://jsonplaceholder.typicode.com/posts/${selectDataPhotos.id}`);
        if(!response.ok){throw new Error('406 dato no existente 😯');}
    //realizar el put
    const put=await fetch(`https://jsonplaceholder.typicode.com/posts/${selectDataPhotos.id}`,{method:'PUT',body:JSON.stringify(selectDataPhotos), headers:{'Content-Type':'application/json;charset=UTF-8'}}); 
    //verificacion del put
    if(!put.ok){throw new Error('ERROR, VUELVE A INTENTARLO ☠');}
        const result=await put.json();
        console.log(`Se actualizo el dato id:${selectDataPhotos.id} en PHOTOS 😎`, result);
        };
