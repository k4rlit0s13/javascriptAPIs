// GET ALL DATA TODOS
export const getAllTodos=async ()=>{
    let response=await fetch('https://jsonplaceholder.typicode.com/todos');
    let data=await response.json();
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