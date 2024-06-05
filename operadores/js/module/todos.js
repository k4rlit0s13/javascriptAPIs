// GET ALL DATA TODOS
export const getAllTodos=async ()=>{
    let response=await fetch('https://jsonplaceholder.typicode.com/todos');
    let data=await response.json();
    return data;
};