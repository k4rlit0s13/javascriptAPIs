// GET ALL DATA TODOS
export const getAllTodos=async ()=>{
    let response=await fetch('https://jsonplaceholder.typicode.com/todos');
    let data=await response.json();
    return data;
};

//GET ONE DATA PHOTOS
export const getOneTodos = async (id) => {
    if (!id||typeof id!=="number"||typeof id===undefined){throw new Error('Dato erroneo, no es el formato correcto');}
    let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    if (response.status===404){throw new Error(`The data ${id} doesn't exists`);}
    let data = await response.json();
    return data;
};

//POST DATA TODOS
export const todosDataPosts = async (todosData) => {
    // Validación de los datos ingresados
    if(
        !todosData
        ||typeof todosData.completed!=="boolean"||todosData.completed===undefined
        ||typeof todosData.title!=='string'||todosData.title===undefined
        ||typeof todosData.userId!=='number'||todosData.userId===undefined
    )//mensaje de error en caso de no cumplirse la condicion anterior
    {throw new Error('Datos inválidos: asegúrate de que todos los campos sean correctos.');}
      const response = await fetch('https://jsonplaceholder.typicode.com/todos',{method: 'POST',body: JSON.stringify(todosData),headers:{'Content-type': 'application/json; charset=UTF-8',},});  
      //la data      
      const data = await response.json();
      return data;
    };

//PUT DATA TODOS
export const putDataTodos=async(selectDataTodos)=>{
    // Validación de los datos ingresados
    if( !selectDataTodos
        ||typeof selectDataTodos.completed!=="boolean"||selectDataTodos.completed===undefined
        ||typeof selectDataTodos.title!=='string'||selectDataTodos.title===undefined
        ||typeof selectDataTodos.userId!=='number'||selectDataTodos.userId===undefined
        ){throw new Error('Datos inválidos: asegúrate de que todos los campos sean correctos.');}
    //verificacion del dato existente
    const response=await fetch(`https://jsonplaceholder.typicode.com/posts/${selectDataTodos.id}`);
        if(!response.ok){throw new Error('406 dato no existente 😯');}
    //realizar el put
    const put=await fetch(`https://jsonplaceholder.typicode.com/posts/${selectDataTodos.id}`,{method:'PUT',body:JSON.stringify(selectDataTodos), headers:{'Content-Type':'application/json;charset=UTF-8'}}); 
    //verificacion del put
    if(!put.ok){throw new Error('ERROR, VUELVE A INTENTARLO ☠');}
        const result=await put.json();
        console.log(`Se actualizo el dato id:${selectDataTodos.id} en TODOS 😎`, result);
        };
