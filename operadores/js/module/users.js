// GET ALL DATA USERS
export const getAllUsers=async ()=>{
    let response=await fetch('https://jsonplaceholder.typicode.com/users');
    let data=await response.json();
    return data;
};



const validateGetUser=async({userId})=>{
    if(typeof userId !=="number"||userId===undefined)return{status:406,message:""}
}
export const getUser=async(arg)=>{
    let val=await validateGetUser(arg);    
    if(val)return val;
    let res=await fetch(`https://jsonplaceholder.typicode.com/users/${arg.userId}`)
    if(res.status===404)return{status:204,message:" "}
    let data=await res.json();
    return data;
}



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