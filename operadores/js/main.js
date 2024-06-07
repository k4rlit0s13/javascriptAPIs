//let num=5;
//num -=2
//console.log(num);


//let num="Carlos"
//console.log();


    // let num=6;
    // if (num==5) console.log("El numero es igual a 5");
    // else if(num=6) console.log("El numero es igual a 6");
    // else console.log("no hay condicion");

    // let response=confirm("usted tiene la mayoria de edad?");
    // console.log(response);

    // let response=Number(prompt("ingrese el numero", "numero"));
    // console.log(response+2);

    // let response=Number(prompt("ingrese el numero", "numero"));
    // alert(response+2);

    // let response=["a", "b", "c", "d", "e"]
    // console.table(response);



//TABULACION/TABULATE:

    // let response=[
    //     {nonmbre:"Carlos", apellido:"Gomez"},
    //     {nonmbre:"juan", apellido:"martinez"},
    //     {nonmbre:"ernesto", apellido:"perez"}
    // ];
    // console.table(response);

    // let response=[
    //     {nonmbre:"Carlos", apellido:"Gomez"},
    //     {nonmbre:"juan", apellido:"martinez"},
    //     {nonmbre:"ernesto", apellido:"perez"}
    // ];
    // response[1].apellido="pepito"
    // console.table(response);




// ESTRUCTURAS REPETIDAS:

    // let res = ["a", "b", "c", "d"]

    // for (let index = 0; index < res.length; index++) {
    //     console.log(res[index]);
    // }



// FUNCIONES

    // let res=saludar("como te llamas");
    //     alert(res);

    // function saludar(nombre) {
    //     return `Hola ${nombre}`
    // }



    // let saludar=function(nombre="comoestas"){
    //     return `hola ${nombre}`
    // }
    // let res=saludar();
    // console.log(res)

//CALLBACK

    // const nombre=function() {
    //     return"miguel"
    // }
    // const saludar=function(callback) {
    //     return`hola ${callback()}`
    // }
    // let res=saludar(nombre)
    // console.log(res);



    // let lista=["a", "b", "c", "d", "e", "f", "g"];
    // lista.forEach(function(value, indice, copy) {
    //     console.log(value);
    // })


    
    // let lista=["a", "b", "c", "d", "e", "f", "g"];
    // const getAllArray=function(value, indice, copy) {
    //     console.log(value);
    // }
    // lista.forEach(getAllArray);


//FUNCION AUTOEJECUTADA

    // (function() {
    //     console.log("Hola")
    // })()


    
    // (function(nombre) {
    //     console.log(`Hola ${nombre}`);
    // })("Miguel")


//CLAUSULAS

    // const saludar=(function() {
    //     let num=0;
    //     return function() {
    //         num++;
    //         return num
    //     }
    // })()
    // console.log(saludar());
    // console.log(saludar());


//FUNCIONES DE FLECHA, ARROW FUNCTIONS

    
// const saludar=nombre=>{
    //     return `hola ${nombre}`
    // }

    
    // const saludar=nombre=>`hola ${nombre}`
    // let res=saludar("miguel");
    // console.log(res);


    // let obj={
    //     nombre:"calos",
    //     saludar:function () {
    //         console.log(this);
    //     }
    // }
    // console.log(obj.saludar());


// MIRAR MDM MOZILLA











// COMO TRAER DATOS, this y demas, DECLARACION DE VARIABLES(OBJETO)


    // const miObjeto = {
    
    // nombre: "Ejemplo Objeto",
    // version: 1.0,
    // descripcion: "Un objeto de ejemplo con una función",

    // // funcion anonima
    //  mostrarInformacion (p1, p2) {
    //  console.log("Nombre: " + this.nombre);
    //  console.log("Versión: " + this.version);
    //  console.log("Descripción: " + this.descripcion);
    //  console.log("Parámetro 1: " + p1);
    //  console.log("Parámetro 2: " + p2);

    //  }
    //  };


// Llamada a la función dentro del objeto
    // miObjeto.mostrarInformacion("Valor 1", "Valor 2");

//COMO VOLVER UN OBJETO A FORMATO JSON
    // let respuesta = JSON.stringify(miObjeto)
    // console.log(respuesta);






//REPLACER

// //Filtrando y protegiendo datos sensibles al serializar un Objeto JSON
//     const persona = {
//         nombre: "Alice",
//         edad: 28,
//         casado: true,
//         secretos: {
//         contraseña: "miContraseñaSecreta",
//         hobby: "programación"
//         }
//     };
// Definir una función replacer para filtrar y transforma
//     function filtroReplacer(key, value) {
//         return (key === "nombre") ? "ALICE" : value && (key === "hobby") ? "Meter vicio 😈" : value;
//     }

//    Resultado: '{"nombre":"Alice","edad":28,"casado":true,
//     console.log(JSON.stringify(persona, filtroReplacer, 4));

   






//DESCOMPONER, DESTRUCTURAR, DTO


// //1 NIVEL
//     let array= ["a" ,"b" ,"c" ,"d" ,"e" ,"f"]
//     let[,,,data4]=array;
//     console.log(data4);

// //2 NIVELES
//     let array= ["a" ,"b", ["MIGUEL" ,"JUAN" ],"e" ,"f"]
//     let[,,[Nombre1]=nombres,data4]=array;
//     console.log(Nombre1);

//3 NIVELES
    // let array= ["a" ,"b", ["MIGUEL",["Escamilla","gonzales"]],"e" ,"f"]
    // let[,,[,[,apellido2]=apellidos]=nombres,data4]=array;
    // console.log(apellido2);


//ejemplo propio
    // let miObjeto=[
    //     "Juan Pérez","López",
    //     "Ana","González",
    //     "Pedro","Sánchez"
    // ]
       
    // let [,data2]=miObjeto;
    // console.log(data2);





    // let miObjeto=[
    //     "Juan Pérez","López",["miguel",["Escamilla","Gonzales"]]
    //     ,"Ana","González",
    //     "Pedro","Sánchez"
    // ];
       
    // let getName=(dato1,dato2,[nombre,apellidos])=>{
    //     console.log(apellidos);
    // }
    // getName(...miObjeto)
   









// // Función flecha con desestructuración de parámetros
// const calcularExpresion = ({ a, b, c }) => (a * b) + c;

// // Ejemplo de ejecución
// const objeto = { a: 2, b: 3, c: 4 };
// const resultado = calcularExpresion(objeto);

// // Mostrar el resultado
// console.log(`El valor total calculado de la expresión ${resultado}`);



// const persona = {
//     nombre: "alice",
//     edad: 28,
//     casado: true,
//     secretos: {
//     contraseña: "miContraseñaSecreta",
//     hobby: "programación"
//     }
//    };
//    // Definir una función replacer para filtrar y transforma
//    function filtroReplacer(key, value) {
//     return (key === "contraseña") ? "********" : value && (key === "nombre") ? value.toUpperCase() : value;
//    }
//    console.log(JSON.stringify(persona, filtroReplacer, 4));







//ARRAYS

//PUSH MEZCLA

    // const frutas=["Manzana", "Banana", "Naranaja"];
    // const frutas2=["Manzana2", "Banana2", "Naranaja2"];
    // // frutas.push("Mandarina")
    // // let longitud=frutas.push("Mandarina")
    // // let longitud=frutas.push(...frutas2)
    // let longitud=frutas.push({fruta:"Mandarina"})
    // console.log(longitud);
    // console.log(frutas);

//POP ELIMINA
    // const frutas=["Manzana", "Banana", "Naranaja"];
    // let datoeliminado=frutas.pop()
    // console.log(datoeliminado);
    // console.log(frutas);


//SPLICE, MODIFICAR, ELIMINAR, ACTUALIZAR
    // const frutas=["Manzana", "Banana", "Naranaja"];
    // frutas.splice(0,0,"Mandarina") //posicion 1(0,1,2.3) y el 0 es otra posicion 0 agrega el resto reemplaza la posicion
    // console.log(frutas);

//TOTSTRING , CONVIERTE UN ARRAT EN UNA CADENA DE TEXTO(PARA QUE IMPRIMA BONITO EN TEXTO)
    // const frutas=["Manzana", "Banana", "Naranaja"];
    // let res=frutas.toString()
    // console.log(res);









//METODOS DE BUSQUEDA 



//INDEXOF , BUSCA LA PRIMERA APARICION DE UN ELEMENTO ESPECIFICO EN UN ARRAY(muestra el numero de la posicion, 0,1,2,3,4)
    // const frutas=["Manzana", "Banana", "Naranaja"];
    // let res=frutas.indexOf("Naranja")
    // console.log(res);

//SI HAY UN ARRAY DENTRO DE OTRO
    // const frutas=["Manzana", ["Banana"], "Naranaja"];
    // let res=frutas[1].indexOf("Banana")
    // console.log(res);


//FIND BUSCA, EL PRIMER ELEMENTO DE UN ARRAY QUE CUMPLE CON UNA CONDICION ESPECIFICA
    // const frutas=["Manzana", "Banana", "Naranaja", "Manzana", "Pera"];
    // frutas.find((val,index)=>{
    //     if(val=="Manzana") frutas.splice(index,1);
    // });
    // console.log(frutas);






//TIPOS DE OBJETO


//SET
    // let miSet= new Set();
    // miSet.add(1);
    // miSet.add(2);
    // console.log(miSet);


//DELETE
    



//ASINCRONIA 


// //EL CALLBACK (OJO NO DEPENDER DE ESTE EN LA ASINCRONIA, MEJOR USAR PROMESAS A LARGO PLAZO)

// const realizarOperacion=(num1,num2,operacionCallback)=>{
//     console.log(`operacion: ${num1} y ${num2}`);
//     //llama callback pasandole los 2 numeros como argumentos
//         operacionCallback(num1,num2);
// }

// //calback que suma 2 num    
//     const sumar=(a,b)=>{
//         console.log(`Suma: ${a+b}`);
//     }

// //calback que multiplica 2 num
//     const multiplicar=(a,b)=>{
//         console.log(`Multiplicacion: ${a*b}`);
//     }

//     realizarOperacion(5,3,sumar)
//     realizarOperacion(5,3,multiplicar)






// ALGO SINCRONO: 
    //que implica coincidir con el tiempo


    //EJ: IMCREMENTO DE UNA VARIABLE

        // let x=1
        // x++;
        // console.log(x);







// ALGO ASINCRONO: 
    //falta de necesidad de respetas el orden de las sentencias durante su ejecución en el tiempo, osea, las sentencias pueden aparecer de una forma en codigo y ejecutarse de otra forma.

    // //EJ: RETARDO DE EJECUCION DE 2 SEGUNDOS
        // setTimeout(function() {
        //     console.log('pasaron 2 segundos');
        // },2000);

    // //MI EJEMPLO
        // setTimeout(timeout=()=>{
        //     console.log('pasaron 2 segundos');
        // },2000);

    // //EJEMPLO SOLO CON ARROW
        // setTimeout(()=>{
        //     console.log('pasaron 2 segundos');
        // },2000);






//LENGUAJE NO BLOQUEANTE


//funcion simulacion de una tarea que tomara un tiempo

    // const tareaNoBloqueante=(callback)=>{
    //     console.log('iniciando tarea no bloqueante...');
        
    //     //simulacmos un retardo de 2 segundos para la tarea
    //     setTimeout(paratiempo=()=>{
    //         console.log('Tarea no Bloqueante completada.');
    //         callback(); //llamamos la funcion de retorno cuando la tarea esta completada
    //     },2000);
        
    // }

    // console.log('Inicio del programa');

    // //llamamos a la funcion no bloqueante
    // tareaNoBloqueante(paratiempo=()=>{
    //     console.log('continuando con el resto de tareas despues de la tarea no bloqueante');
    // });

    // console.log('Fin del programa.');




//JAVASCRIPT ES UN LENGUAJE BLOQUEANTE O NO BLOQUEANTE
    //Puede ser ambas dependiendo del caso 

    //EJ TAREAS ASINCRONAS:
    //  -fetch a una URL para obtener un archivo.json
    //  -play de un mp3 mediante new audio()
    //  -tarea programada con setTimeout()
    //  -comunicacion a la API de sintetizador de voz
    //  -comunicacion a la API de un sensor del smartphone
    
    

//COMO GESTIONAR LA ASINCRONIA? 

// -CALLBACKS (LLAMAR UNA FUNCION)
// -PROMESAS
// -ASYNC/AWAIT







//PROMESA


//  estructura BASICA DE PROMESA:

// // const myPromise=new Promise((resolve,reject)=>{
// //     //aqui se realiza la operacion asincrona
// //     //si es exitosa se llama a resolve(valor)
// //     //si ocurre error, se llama a reject(error)
// // });

// // myPromise
// // .then(resultado=>{
// //     //manejar el resultado si la promesa se cumple
// // })
// // .catch(error=>{
// //     //manejar el error si la promesa es rechazada
// // })










//EJERCICIO simulacion de una funcion que procesa un pago
    //     const procesarPago=(total)=>{
    //         return new Promise((resolve,reject)=>{
    //             setTimeout(()=>{
    //                 const exito=Math.random()<0.8; //simulamos que el 80% de las veces el pago es exitoso
                    
    //             if (exito) {
    //                 resolve("Pago Exitoso")
    //             }else{
    //                 reject(new Error('Error en el pago'));
    //             }
    //             },1500); //simulamos un retraso de 1.5 seg para el proceso del pago
    //         });
    //     }

    // //EJEMPLO DE USO DE LA FUNCION DE PROCESAMIENTO DE PAGOS
    // const totalAPagar=100; //monto a pagar

    // procesarPago(totalAPagar)
    // .then(resultado=>{
    //     console.log(resultado);  //se ejecutara en caso de pago exitoso
    // })

    // .catch(error=>{
    //     console.error(error.message);  //se ejecuta en caso de fallo del pago
    // });




//EJEMPLO PROMESA DEL PROFE MIGUE

//CLASICO
    // let callback=function(resolve,reject) {
    //     setTimeout(()=>{
    //         let num=Math.random()*100;
    //         if (num>=50) {
    //             resolve(`ok: ${num}`);
    //         }else{
    //             reject(`Error: ${num}`);
    //         }
    //     },1000);
    // }
    // let myPromise=new Promise(callback);

    // myPromise
    // .then(res=>{
    //     console.log(res);
    // }).catch(res=>{
    //     console.error(res);
    // });


//ACTUALIZADO SEGUN LA ACTUALIZACION DE JAVA
    
    // let callback=async()=>{
    //     let num=Match.random()*100
    //     return(num>50) ? {status:200,data:num}:{status:204,data:num};
    // }

    // let res=await callback();
    // if(res.status==200){
    //     console.log(res.data);
    // }else{
    //     console.error(res.data);
    // }


// //EJERCICIO DE REQUEST APIS CON JAVA Y FETCH
//     let peticion=await fetch('https://jsonplaceholder.typicode.com/photos');
//     let data=await peticion.json();
//     console.log(data);


//EJERCICIO DE REQUEST APIS CON JAVA Y FETCH
    // let peticion=await fetch('https://jsonplaceholder.typicode.com/photos');
    // let data=await peticion.json();

    // //FUNCION QUE SOLO SAQUE LOS PARES
    //     let solopares=[];

    //     for (let i = 0; i < data.length; i++) {
    //         if (data[i].id%2===0) {
    //             solopares.push(data[i]);
    //         }
    //     };
    //     console.table(solopares);




    //FUNCION QUE SUBA UN DATO

    //     fetch('https://jsonplaceholder.typicode.com/posts/1',{
    //     method:'PUT',
    //     body: JSON.stringify({
    //         id:1,
    //         title:'foo',
    //         body:'bar',
    //         userId:1,
    //     }),
    //     headers:{
    //         'Content-type': 'application/json; charset=UTF-8',
    //     },
    // })
    //     .then((response)=>response.json())
    //     .then((json)=>console.log(json));












//APIS

// import { addAlbum } from "./module/albums.js";
// console.table(await addAlbum({userId:10,title:"ajksfj"}));


// import { addPost } from "./module/posts.js";
// console.table(await addPost({userId:10,title:"ajksfj"}));


//            EJERCICIOS APIS JAVASCRIPT

//====================================================================================================//

//import formulas GET DATAS:

//======================================================================================================//

//  GET ALL POSTS
import { getAllPosts } from "./module/posts.js";
// GET ALL COMMENTS
import { getAllComments } from "./module/comments.js";
// GET ALL ALBUMS
import { getAllAlbums } from "./module/albums.js";
// GET ALL PHOTOS
import { getAllPhotos } from "./module/photos.js";
// GET ALL TODOS
import { getAllTodos } from "./module/todos.js";
// GET ALL USERS
import { getAllUsers } from "./module/users.js";

//======================================================================================================//

//import formulas GET ONE DATA:

//======================================================================================================//

//  GET ONE POSTS
import { getOnePosts } from "./module/posts.js";
//  GET ONE COMMENTS
import { getOneComment } from "./module/comments.js";
//  GET ONE ALBUMS
import { getOneAlbum } from "./module/albums.js";
//  GET ONE PHOTOS
import { getOnePhoto } from "./module/photos.js";
//  GET ONE TODOS
import { getOneTodos } from "./module/todos.js";
//  GET ONE USERS
import { getOneUser } from "./module/users.js";

//======================================================================================================//

//import formulas POST

//======================================================================================================//

//import posts POSTS
import { postDataPosts } from "./module/posts.js";
//  GET ONE COMMENTS
import { commentDataPosts } from "./module/comments.js";
//import albums POSTS
import { albumDataPosts } from "./module/albums.js";
//import photos POSTS
import { photosDataPosts } from "./module/photos.js";
//import todos POSTS
import { todosDataPosts } from "./module/todos.js";
//import users POSTS
import { usersDataPosts } from "./module/users.js";

//======================================================================================================//

//import formulas PUT

//======================================================================================================//

//import put POSTS
import { putDataPosts } from "./module/posts.js";

//import put COMMENTS
import { putDataComment } from "./module/comments.js";

//import put ALBUMS
import { putDataAlbums } from "./module/albums.js";

//import put PHOTOS
import { putDataPhotos } from "./module/photos.js";

//import put TODOS
import { putDataTodos } from "./module/todos.js";

//import put USERS
import { putDataUsers } from "./module/users.js";

//======================================================================================================//

//import formulas DELETE

//======================================================================================================//

//import delete POSTS
import { deleteDataPosts } from "./module/posts.js";

//import delete COMMENTS
import { deleteDataComment } from "./module/comments.js";

//import delete ALBUMS
import { deleteDataAlbums } from "./module/albums.js";

//import delete PHOTOS
import { deleteDataPhotos } from "./module/photos.js";

//import delete TODOS
import { deleteDataTodos } from "./module/todos.js";

//import delete USERS
import { deleteDataUsers } from "./module/users.js";

//======================================================================================================//

//ACTIVACION DE FUNCIONES:

//======================================================================================================//

// FUNCIONES GET DATA ALL:
    // console.table(await getAllPosts());  
    // console.table(await getAllComments());  
    // console.table(await getAllAlbums());  
    // console.table(await getAllPhotos());  
    // console.table(await getAllTodos());  
    // console.table(await getAllUsers());  

//======================================================================================================//

// FUNCIONES GET ONE DATA:

//======================================================================================================//

// //  GET ONE POSTS
// const idPost=11;
//     getOnePosts(idPost).then(data=>console.table(data)).catch(error=>console.error('Error:',error)); //APLICAMOS FORMULA DE LA DOCUMENTACION

// //GET ONE DATA COMMENTS
// const idComment=5;
//     getOneComment(idComment).then(data=>console.table(data)).catch(error=>console.error('Error:',error)); //APLICAMOS FORMULA DE LA DOCUMENTACION

// //GET ONE DATA ALBUMS
// const idAlbums=7;
//     getOneAlbum(idAlbums).then(data=>console.table(data)).catch(error=>console.error('Error:',error)); //APLICAMOS FORMULA DE LA DOCUMENTACION

// //GET ONE DATA TODOS
// const idTodos=9;
//     getOnePhoto(idTodos).then(data=>console.table(data)).catch(error=>console.error('Error:',error)); //APLICAMOS FORMULA DE LA DOCUMENTACION

// //GET ONE DATA USER
// const idUser=9;
//     getOneUser(idUser).then(data=>console.table(data)).catch(error=>console.error('Error:',error)); //APLICAMOS FORMULA DE LA DOCUMENTACION


//======================================================================================================//

// FUNCIONES POST DATA:

//======================================================================================================//
// //POSTS
// const newpost={title:'El principito',body:'wasaaaa',userId:1};
//     postDataPosts(newpost).then(data=>console.log(data)).catch(error=>console.error('Error:',error)); //APLICAMOS FORMULA DE LA DOCUMENTACION

// //COMMENTS
// const newcomment={email:'calos3@gmail.com',name:'calos',body:'bar',postId:1};
//     commentDataPosts(newcomment).then(data=>console.log(data)).catch(error=>console.error('Error:',error)); //APLICAMOS FORMULA DE LA DOCUMENTACION

// //ALBUMS
// const newAlbum={title:'El bogotaso',userId:1};
//     albumDataPosts(newAlbum).then(data=>console.log(data)).catch(error=>console.error('Error:',error)); //APLICAMOS FORMULA DE LA DOCUMENTACION

// //PHOTOS
// const newphoto={thumbnailUrl:'http nose',url:'httpsdadafha',title:'Diomeedias 😈',albumId:1};
//     photosDataPosts(newphoto).then(data=>console.log(data)).catch(error=>console.error('Error:',error)); //APLICAMOS FORMULA DE LA DOCUMENTACION

// //TODOS
// const newTodos={completed:true,title:'la monda 😈',userId:1};
//     todosDataPosts(newTodos).then(data=>console.log(data)).catch(error=>console.error('Error:',error)); //APLICAMOS FORMULA DE LA DOCUMENTACION

// //USERS
// const newUser={name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}};
//     usersDataPosts(newUser).then(data=>console.log(data)).catch(error=>console.error('Error:',error)); //APLICAMOS FORMULA DE LA DOCUMENTACION

// //USERS prueba server miguel
// const newUser = {
//     name: "A las 3 se va pal' beauty, a las 4 va pal' mall Pa' eso de las 5 está a vapor Se hizo las boobies y el booty, viste de christian dior Activa a toas' sus amigas con un call",
//     username: "La bebecita bebe lean y bebe whisky Fuma marihuana y también se mete picky Senda bellacona, frikitona, friky friky Es media salvaje, ella es adicta a mi dicky",
//     email: "Le mete al lean y le mete al whisky Fuma marihuana y también se mete picky Senda bellacona, frikitona, friky friky En la cama una salvaje y la castigo con mi dicky",
//     address: {
//       street: "Baby toma, dos chollys, en un vaso de lean Dando más vueltas que un patín, en la cama ella tiene el swing Con el pelo sayayin En el lexus dando vueltas con mi queen No la mires, evitate el motín",
//       suite: "Whisky, toma, toma, va quedar en coma Ojos chiquititos, falta que hable en otro idioma Con sus posiciones parece de goma A mi me encanta cuando llama, para que llegue y me la coma",
//       city: "Le mete al lean y le mete al whisky Fuma fumarihuana y también se mete picky Senda bellacona, frikitona, friky friky En la cama una salvaje y la castigo con mi dicky",
//       zipcode: "La bebecita bebe lean y bebe whisky Fuma marihuana y también se mete picky Senda bellacona, frikitona, friky friky Es media salvaje, ella es adicta a mi dicky",
//       geo: {
//         lat: "Ella es una bellaca, chingamos en la sala y en la hamaca Recostados de la butaca, encima de todas las pacas 5: 12 para el sistema y media flaca y te meto toda la noche Ponte en 4 mami pero en tacas De giuseppe, yo soy el que le reparte a todos el pety Y me roncan de mujeres y andan con betty spaghetti Me recuerdo aquel día en que yo te metí Apuntamos el blanco, en tu culo te puse una equis",
//         lng: "La bebecita bebe lean y bebe whisky Fuma marihuana y también se mete picky Senda bellacona, frikitona, friky friky Es media salvaje, ella es adicta a mi dicky"
//       }
//     },
//     phone: "Le mete al lean y le mete al whisky Fuma fumarihuana y también se mete picky Senda bellacona, frikitona, friky frikyEn la cama una salvaje y la castigo con mi dicky",
//     website: "Yo no me meto palys, porque siempre borro cinta Me ves en la disco, tú te pegas y te afincas Te trincas y brincas, brincoteando tú te desenvuelves Y te envuelves rápido, que la redonda se disuelve en tu sistema",
//     company: {
//       name: "El opio baja por lo digestivo pal hígado es el castigo El efecto secundario es efectivo Masivo, yo nunca me fatigo Cabeza grande para tu toto, es algo destructivo",
//       catchPhrase: "La bebecita bebe lean y bebe whisky Fuma marihuana y también se mete picky Senda bellacona, frikitona, frky friky Es media salvaje, ella es adicta a mi dicky",
//       bs: "Le mete al lean y le mete al whisky Fuma fumarihuana y también se mete picky Senda bellacona, frikitona, friky friky En la cama una salvaje y la castigo con mi dicky"
//     },
//   };
    // usersDataPosts(newUser).then(data=>console.log(data)).catch(error=>console.error('Error:',error)); //APLICAMOS FORMULA DE LA DOCUMENTACION

//=================================================================================================================================================================//

//FUNCIONES PUT DATA

//=================================================================================================================================================================//

// //POSTS
// const selectDataPost={id:1,userId:2,title:"el valenciaja",body:"que lo que"};
//     putDataPosts(selectDataPost).then(data=>console.log(data)).catch(error=>console.error('Error:',error)); //APLICAMOS FORMULA DE LA DOCUMENTACION

// //COMMENTS 
// const selectDataComment={id:5,postId:1,name:"Como tu te llama io no c 😭",email:"Guayascript12@gmail.com",body:"como que tu diceeeee 😼"};
// putDataComment(selectDataComment).then(data=>console.log(data)).catch(error=>console.error('Error:',error)); //APLICAMOS FORMULA DE LA DOCUMENTACION

// //ALBUMS
// const selectDataAlbums={id:2,userId:1,title:"LA BUENA 😼"};
// putDataAlbums(selectDataAlbums).then(data=>console.log(data)).catch(error=>console.error('Error:',error)); //APLICAMOS FORMULA DE LA DOCUMENTACION

// //PHOTOS
// const selectDataPhotos={id:50,albumId:1,title:"COMO ESTAN MUCHACHOS",url:"comotanmuchachos.com",thumbnailUrl:"noc,comotanmuchachosXD"};
// putDataPhotos(selectDataPhotos).then(data=>console.log(data)).catch(error=>console.error('Error:',error)); //APLICAMOS FORMULA DE LA DOCUMENTACION

// //TODOS
// const selectDataTodos={id:1,userId:1,title:"QUIUBO",completed:true};
// putDataTodos(selectDataTodos).then(data=>console.log(data)).catch(error=>console.error('Error:',error)); //APLICAMOS FORMULA DE LA DOCUMENTACION

// //USERS
// const selectDataUsers={id:2,name:"Lebron James",username:"Libra",email:"libronjames@gamil.com",address:{street:"Kulas Light",suite:"Apt. 465",city:"wiwiwii",zipcode:"98415-65423",geo:{lat:"-65165165",lng:"81.1496"}},phone:"1-2-496687564-498",website:"libraypapa.com",company:{name:"libros James",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}};
// putDataUsers(selectDataUsers).then(data=>console.log(data)).catch(error=>console.error('Error:',error)); //APLICAMOS FORMULA DE LA DOCUMENTACION

// //USERS prueba server miguel
// const selectDataUsers = {
//     id: "b87f",
//     name: "Para entender la historia de Five Nights at Freddy's hay que olvidarse que estos son juegos y quiero que tomen realmente a esta saga como lo que es: una historia de terror. Empezamos con William Afton, el hombre detrás de todo. William y Henry Emily abren juntos una pizzería llamada Fredbear's Family Diner. Es aquí donde comienzan los asesinatos, con William como el principal culpable. Con la apertura de Freddy Fazbear's Pizza, los animatrónicos comienzan a tener comportamientos extraños debido a los espíritus de los niños asesinados. Cada juego nos revela más sobre los oscuros secretos de Afton y su obsesión con la inmortalidad. La saga es una compleja mezcla de tragedia, venganza y el oscuro deseo de vivir para siempre",
//     username: "Lebron James",
//     email: "libronjames@gmail.com",
//     address: {
//       street: "Kulas Light",
//       suite: "Apt. 465",
//       city: "wiwiwii",
//       zipcode: "98415-65423",
//       geo: {
//         lat: "-65165165",
//         lng: "81.1496"
//       }
//     },
//     phone: "1-2-496687564-498",
//     website: "libraypapa.com",
//     company: {
//       name: "libros James",
//       catchPhrase: "Multi-layered client-server neural-net",
//       bs: "harness real-time e-markets"
//     }
//   };
//   putDataUsers(selectDataUsers).then(data=>console.log(data)).catch(error=>console.error('Error:',error)); //APLICAMOS FORMULA DE LA DOCUMENTACION

//=================================================================================================================================================================//

//FUNCIONES DELETE DATA

//=================================================================================================================================================================//

//POSTS
// const postsToDelete=1;
// deleteDataPosts(postsToDelete).then(()=>console.log(`Eliminación completada de ${dataToDelete}`)).catch(error=>console.error('Error:', error));

// //COMMENTS
// const commentToDelete=2;
// deleteDataComment(commentToDelete).then(()=>console.log(`Eliminación completada de ${dataToDelete}`)).catch(error=>console.error('Error:', error));

// //ALBUMS
// const albumToDelete=3;
// deleteDataAlbums(albumToDelete).then(()=>console.log(`Eliminación completada de ${dataToDelete}`)).catch(error=>console.error('Error:', error));

// //PHOTOS
// const photosToDelete=4;
// deleteDataPhotos(photosToDelete).then(()=>console.log(`Eliminación completada de ${dataToDelete}`)).catch(error=>console.error('Error:', error));

// //TODOS
// const todosToDelete=5;
// deleteDataTodos(todosToDelete).then(()=>console.log(`Eliminación completada de ${dataToDelete}`)).catch(error=>console.error('Error:', error));

// //USERS
// const usersToDelete="";
// deleteDataUsers(usersToDelete).then(()=>console.log(`Eliminación completada de ${dataToDelete}`)).catch(error=>console.error('Error:', error));
