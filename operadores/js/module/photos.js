// GET ALL DATA PHOTOS
export const getAllPhotos=async ()=>{
    let response=await fetch('https://jsonplaceholder.typicode.com/photos');
    let data=await response.json();
    return data;
};


//POST DATA PHOTOS
export const photosDataPosts = async (photosData) => {
    // Validación de los datos ingresados
    if(
        !photosData
        ||typeof photosData.thumbnailUrl!=='string'||photosData.thumbnailUrl===undefined
        ||typeof photosData.url!=='string'||photosData.url===undefined
        ||typeof photosData.title!=='string'||photosData.title===undefined
        ||typeof photosData.albumId!=='number'||photosData.albumId===undefined
    )//mensaje de error en caso de no cumplirse la condicion anterior
    {throw new Error('Datos inválidos: asegúrate de que todos los campos sean correctos.');}
      const response = await fetch('https://jsonplaceholder.typicode.com/photos',{method: 'POST',body: JSON.stringify(photosData),headers:{'Content-type': 'application/json; charset=UTF-8',},});  
      //la data      
      const data = await response.json();
      return data;
    };