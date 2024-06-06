// GET ALL DATA USERS
export const getAllUsers=async ()=>{
    let response=await fetch('https://jsonplaceholder.typicode.com/users');
    let data=await response.json();
    return data;
};


//GET ONE DATA USER
export const getOneUser = async (id) => {
    if (!id||typeof id!=="number"||typeof id===undefined){throw new Error('Dato erroneo, no es el formato correcto');}
    let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (response.status===404){throw new Error(`The data ${id} doesn't exists`);}
    let data = await response.json();
    return data;
};



//POST DATA USERS
export const usersDataPosts = async (usersData) => {
    // Validación de los datos ingresados
    if(
        !usersData ||
        typeof usersData.name !== "string" || usersData.name === undefined ||
        typeof usersData.username !== 'string' || usersData.username === undefined ||
        typeof usersData.email !== 'string' || usersData.email === undefined ||
        
        // Validación de la dirección
        !usersData.address || typeof usersData.address !== 'object' ||
        typeof usersData.address.street !== 'string' || usersData.address.street === undefined ||
        typeof usersData.address.suite !== 'string' || usersData.address.suite === undefined ||
        typeof usersData.address.city !== 'string' || usersData.address.city === undefined ||
        typeof usersData.address.zipcode !== 'string' || usersData.address.zipcode === undefined ||
         // Validación de geo
        !usersData.address.geo || typeof usersData.address.geo !== 'object' ||
        typeof usersData.address.geo.lat !== 'string' || usersData.address.geo.lat === undefined ||
        typeof usersData.address.geo.lng !== 'string' || usersData.address.geo.lng === undefined ||

        typeof usersData.phone !== 'string' || usersData.phone === undefined ||
        typeof usersData.website !== 'string' || usersData.website === undefined ||

        // Validación de la compañía
        !usersData.company || typeof usersData.company !== 'object' ||
        typeof usersData.company.name !== 'string' || usersData.company.name === undefined ||
        typeof usersData.company.catchPhrase !== 'string' || usersData.company.catchPhrase === undefined ||
        typeof usersData.company.bs !== 'string' || usersData.company.bs === undefined

    )//mensaje de error en caso de no cumplirse la condicion anterior
    {throw new Error('Datos inválidos: asegúrate de que todos los campos sean correctos.');}
      const response = await fetch('https://jsonplaceholder.typicode.com/users',{method: 'POST',body: JSON.stringify(usersData),headers:{'Content-type': 'application/json; charset=UTF-8',},});  
      //la data      
      const data = await response.json();
      return data;
    };

//PUT DATA USERS
export const putDataUsers=async(selectDataUsers)=>{
    // Validación de los datos ingresados
    if( 
        !selectDataUsers ||
        typeof selectDataUsers.name !== "string" || selectDataUsers.name === undefined ||
        typeof selectDataUsers.username !== 'string' || selectDataUsers.username === undefined ||
        typeof selectDataUsers.email !== 'string' || selectDataUsers.email === undefined ||
        
        // Validación de la dirección
        !selectDataUsers.address || typeof selectDataUsers.address !== 'object' ||
        typeof selectDataUsers.address.street !== 'string' || selectDataUsers.address.street === undefined ||
        typeof selectDataUsers.address.suite !== 'string' || selectDataUsers.address.suite === undefined ||
        typeof selectDataUsers.address.city !== 'string' || selectDataUsers.address.city === undefined ||
        typeof selectDataUsers.address.zipcode !== 'string' || selectDataUsers.address.zipcode === undefined ||
         // Validación de geo
        !selectDataUsers.address.geo || typeof selectDataUsers.address.geo !== 'object' ||
        typeof selectDataUsers.address.geo.lat !== 'string' || selectDataUsers.address.geo.lat === undefined ||
        typeof selectDataUsers.address.geo.lng !== 'string' || selectDataUsers.address.geo.lng === undefined ||

        typeof selectDataUsers.phone !== 'string' || selectDataUsers.phone === undefined ||
        typeof selectDataUsers.website !== 'string' || selectDataUsers.website === undefined ||

        // Validación de la compañía
        !selectDataUsers.company || typeof selectDataUsers.company !== 'object' ||
        typeof selectDataUsers.company.name !== 'string' || selectDataUsers.company.name === undefined ||
        typeof selectDataUsers.company.catchPhrase !== 'string' || selectDataUsers.company.catchPhrase === undefined ||
        typeof selectDataUsers.company.bs !== 'string' || selectDataUsers.company.bs === undefined

        ){throw new Error('Datos inválidos: asegúrate de que todos los campos sean correctos.');}
    //verificacion del dato existente
    const response=await fetch(`https://jsonplaceholder.typicode.com/posts/${selectDataUsers.id}`);
        if(!response.ok){throw new Error('406 dato no existente 😯');}
    //realizar el put
    const put=await fetch(`https://jsonplaceholder.typicode.com/posts/${selectDataUsers.id}`,{method:'PUT',body:JSON.stringify(selectDataUsers), headers:{'Content-Type':'application/json;charset=UTF-8'}}); 
    //verificacion del put
    if(!put.ok){throw new Error('ERROR, VUELVE A INTENTARLO ☠');}
        const result=await put.json();
        console.log(`Se actualizo el dato id:${selectDataUsers.id} en USERS 😎`, result);
        };


//DELETE DATA USERS
export const deleteDataUsers=async(usersToDelete)=>{
    if(typeof usersToDelete!=='number'||usersToDelete===undefined)
        {throw new Error('ID inválido: asegúrate de que el ID sea un número 👁👅👁.');}
        
    const response=await fetch(`https://jsonplaceholder.typicode.com/comments/${usersToDelete}`);
        if (!response.ok) {throw new Error('406 dato no existente 👁👄👁');}
// Realizar el DELETE
    const del=await fetch(`https://jsonplaceholder.typicode.com/comments/${usersToDelete}`,{method: 'DELETE'});
// Verificación del DELETE
    if (!del.ok){throw new Error('ERROR, VUELVE A INTENTARLO ☠');}
        console.log(`Se eliminó el dato id:${usersToDelete} en USERS 😎`);
};