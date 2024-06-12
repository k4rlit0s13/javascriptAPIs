// GET ALL DATA USERS
export const getAllUsers=async()=>{
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
export const usersDataPosts=async({ name, username, email, address, phone, website, company })=>{
    // Validación de los datos ingresados
    if(
        !name||!username ||!email||
        typeof name !== "string" || name === undefined ||
        typeof username !== 'string' || username === undefined ||
        typeof email !== 'string' || email === undefined ||
        // Validación de la dirección
        !address || typeof address !== 'object' ||
        typeof address.street !== 'string' || address.street === undefined ||
        typeof address.suite !== 'string' || address.suite === undefined ||
        typeof address.city !== 'string' || address.city === undefined ||
        typeof address.zipcode !== 'string' || address.zipcode === undefined ||
         // Validación de geo
        !address.geo || typeof address.geo !== 'object' ||
        typeof address.geo.lat !== 'string' || address.geo.lat === undefined ||
        typeof address.geo.lng !== 'string' || address.geo.lng === undefined ||
        typeof phone !== 'string' || phone === undefined ||
        typeof website !== 'string' || website === undefined ||
        // Validación de la compañía
        !company || typeof company !== 'object' ||
        typeof company.name !== 'string' || company.name === undefined ||
        typeof company.catchPhrase !== 'string' || company.catchPhrase === undefined ||
        typeof company.bs !== 'string' || company.bs === undefined

    )//mensaje de error en caso de no cumplirse la condicion anterior
    {throw new Error('Datos inválidos: asegúrate de que todos los campos sean correctos.');}
    const response = await fetch('https://jsonplaceholder.typicode.com/users',{method: 'POST',body: JSON.stringify({ name, username, email, address, phone, website, company }),headers:{'Content-type': 'application/json; charset=UTF-8',},});  
    //la data      
    const data = await response.json();
    return data;
};

//PUT DATA USERS
export const putDataUsers=async({id, name, username, email, address, phone, website, company})=>{
    // Validación de los datos ingresados
    if( 
        !id||!name||! username||! email||! address||! phone||! website||! company ||
        typeof id !== "number" || name === undefined ||
        typeof name !== "string" || name === undefined ||
        typeof username !== 'string' || username === undefined ||
        typeof email !== 'string' || email === undefined ||    
        // Validación de la dirección
        !address || typeof address !== 'object' ||
        typeof address.street !== 'string' || address.street === undefined ||
        typeof address.suite !== 'string' || address.suite === undefined ||
        typeof address.city !== 'string' || address.city === undefined ||
        typeof address.zipcode !== 'string' || address.zipcode === undefined ||
         // Validación de geo
        !address.geo || typeof address.geo !== 'object' ||
        typeof address.geo.lat !== 'string' || address.geo.lat === undefined ||
        typeof address.geo.lng !== 'string' || address.geo.lng === undefined ||
        typeof phone !== 'string' || phone === undefined ||
        typeof website !== 'string' || website === undefined ||
        // Validación de la compañía
        !company || typeof company !== 'object' ||
        typeof company.name !== 'string' || company.name === undefined ||
        typeof company.catchPhrase !== 'string' || company.catchPhrase === undefined ||
        typeof company.bs !== 'string' || company.bs === undefined)
    {throw new Error('Datos inválidos: asegúrate de que todos los campos sean correctos.');}
    //verificacion del dato existente
    const response=await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if(!response.ok){throw new Error('406 dato no existente 😯');}
    //realizar el put
    const put=await fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{method:'PUT',body:JSON.stringify({name, username, email, address, phone, website, company}), headers:{'Content-Type':'application/json;charset=UTF-8'}}); 
    //verificacion del put
    if(!put.ok){throw new Error('ERROR, VUELVE A INTENTARLO ☠');}
    const result=await put.json();
    console.log(`Se actualizo el dato id:${id} en USERS 😎`, result);
};

//PATCH DATA TODOS:

//PATCH NEW name
export const patchNameUsers=async(id,newName)=>{
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
    console.log(`Se actualizó el name del dato id:${id} en USERS 😼`, result);
};

//PATCH NEW username
export const patchNameUsername=async(id,newUsername)=>{
    // Validación de los datos ingresados
    if(!id||typeof id!=='number'||id===undefined||!newUsername||typeof newUsername!=='string'||newUsername===undefined) 
    {throw new Error('Datos inválidos: asegúrate de que el ID y los campos a actualizar sean correctos.');}
    const response=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if(!response.ok){throw new Error('406 dato no existente 😯');}
    // Realizar el patch
    const patch=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{method:'PATCH',body:JSON.stringify({username:newUsername}),headers:{'Content-Type':'application/json;charset=UTF-8'}});
    // Verificación del patch
    if(!patch.ok){throw new Error('ERROR, VUELVE A INTENTARLO ☠');}
    const result=await patch.json();
    console.log(`Se actualizó el username del dato id:${id} en USERS 😼`, result);
};

//PATCH NEW email
export const patchNameEmail=async(id,newEmail)=>{
    // Validación de los datos ingresados
    if(!id||typeof id!=='number'||id===undefined||!newEmail||typeof newEmail!=='string'||newEmail===undefined) 
    {throw new Error('Datos inválidos: asegúrate de que el ID y los campos a actualizar sean correctos.');}
    const response=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if(!response.ok){throw new Error('406 dato no existente 😯');}
    // Realizar el patch
    const patch=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{method:'PATCH',body:JSON.stringify({username:newEmail}),headers:{'Content-Type':'application/json;charset=UTF-8'}});
    // Verificación del patch
    if(!patch.ok){throw new Error('ERROR, VUELVE A INTENTARLO ☠');}
    const result=await patch.json();
    console.log(`Se actualizó el email del dato id:${id} en USERS 😼`, result);
};

// PATCH ADDRESS
export const patchAddressUsers = async (id, newAddress) => {
    // Validación de los datos ingresados
    if (!id || typeof id !== 'number' || id === undefined || !newAddress || typeof newAddress !== 'object') {
    throw new Error('Datos inválidos: asegúrate de que el ID y los campos a actualizar sean correctos.');}
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!response.ok) {
    throw new Error('406 dato no existente 😯');}
    // Realizar el patch
    const patch = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {method: 'PATCH',body: JSON.stringify({ address: newAddress }),headers: { 'Content-Type': 'application/json;charset=UTF-8' }});
    // Verificación del patch
    if (!patch.ok) {throw new Error('ERROR, VUELVE A INTENTARLO ☠');}
    const result = await patch.json();
    console.log(`Se actualizó el address del dato id:${id} en USERS 😼`, result);
};

// PATCH phone
export const patchPhoneUsers = async (id, newPhone) => {
    // Validación de los datos ingresados
    if (!id || typeof id !== 'number' || id === undefined || !newPhone || typeof newPhone !== 'string') {
    throw new Error('Datos inválidos: asegúrate de que el ID y los campos a actualizar sean correctos.');}
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!response.ok) {
    throw new Error('406 dato no existente 😯');}
    // Realizar el patch
    const patch = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {method: 'PATCH',body: JSON.stringify({ phone: newPhone }),headers: { 'Content-Type': 'application/json;charset=UTF-8' }});
    // Verificación del patch
    if (!patch.ok) {throw new Error('ERROR, VUELVE A INTENTARLO ☠');}
    const result = await patch.json();
    console.log(`Se actualizó el phone del dato id:${id} en USERS 😼`, result);
};

// PATCH website
export const patchWebsiteUsers = async (id, newWebsite) => {
    // Validación de los datos ingresados
    if (!id || typeof id !== 'number' || id === undefined || !newWebsite || typeof newWebsite !== 'string') {
    throw new Error('Datos inválidos: asegúrate de que el ID y los campos a actualizar sean correctos.');}
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!response.ok) {
    throw new Error('406 dato no existente 😯');}
    // Realizar el patch
    const patch = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {method: 'PATCH',body: JSON.stringify({ website: newWebsite }),headers: { 'Content-Type': 'application/json;charset=UTF-8' }});
    // Verificación del patch
    if (!patch.ok) {throw new Error('ERROR, VUELVE A INTENTARLO ☠');}
    const result = await patch.json();
    console.log(`Se actualizó el phone del dato id:${id} en USERS 😼`, result);
};

// PATCH company
export const patchCompanyUsers = async (id, newCompany) => {
    // Validación de los datos ingresados
    if (!id || typeof id !== 'number' || id === undefined || !newCompany || typeof newCompany !== 'object') {
    throw new Error('Datos inválidos: asegúrate de que el ID y los campos a actualizar sean correctos.');}
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!response.ok) {
    throw new Error('406 dato no existente 😯');}
    // Realizar el patch
    const patch = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {method:'PATCH',body: JSON.stringify({ company: newCompany }),headers: { 'Content-Type': 'application/json;charset=UTF-8' }});
    // Verificación del patch
    if (!patch.ok) {throw new Error('ERROR, VUELVE A INTENTARLO ☠');}
    const result = await patch.json();
    console.log(`Se actualizó la company del dato id:${id} en USERS 😼`, result);
};

//DELETE DATA USERS
export const deleteDataUsers=async(usersToDelete)=>{
    if(typeof usersToDelete!=='string'||usersToDelete===undefined)
    {throw new Error('ID inválido: asegúrate de que el ID sea un número 👁👅👁.');}
    const response=await fetch(`https://jsonplaceholder.typicode.com/users/${usersToDelete}`);
    if (!response.ok) {throw new Error('406 dato no existente 👁👄👁');}
    // Realizar el DELETE
    const del=await fetch(`https://jsonplaceholder.typicode.com/users/${usersToDelete}`,{method: 'DELETE'});
    // Verificación del DELETE
    if (!del.ok){throw new Error('ERROR, VUELVE A INTENTARLO ☠');}
    console.log(`Se eliminó el dato id:${usersToDelete} en USERS 😎`);
};