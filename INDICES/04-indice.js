var apellidos = [
    "Adcock",
    "Keith",
    "Hodges",
    "Barnett",
    "Goodman",
    "Perez",
    "Werner",
    "Barr",
    "White",
    "Song",
    "McKenzie",
    "Cole",
    "Hardin",
    "Avery",
    "Montgomery",
    "Patel"
    
    ]
    let array = [];
    var dato;
    
    const loadFile = async (file) => {
        const response = await fetch(file)
         text = await response.text()
         data = JSON.parse(text)
    
       for (let i = 0; i < data.length; i++) {
           const valor = data[i];
           array[i] =valor;
           
       }

    }
    
    loadFile('apellidos');
    console.log(array);
    
    
    
    // console.log(typeof apellidos);
    // arreglo1 = apellidos.map(x=> x);
    // console.log(arreglo1);
    
    // // 01-apellidos.json
    
    
    // arreglo1.forEach(element => {
    //     console.log(element);
    // });
    
    // function readTextFile(file, callback) {
    //     var rawFile = new XMLHttpRequest();
    //     rawFile.overrideMimeType("application/json");
    //     rawFile.open("GET", file, true);
    //     rawFile.onreadystatechange = function() {
    //         if (rawFile.readyState === 4 && rawFile.status == "200") {
    //             callback(rawFile.responseText);
    //         }
    //     }
    //     rawFile.send(null);
    // }
    
    // //usage:
    // readTextFile("01-apellidos.json", function(text){
    //     var data = JSON.parse(text);
    //     // console.log(data);
    //     data.forEach(element => {
    //         // console.log(typeof element);
    //         arreglo1.push(element);
    //     });
    // });
    
    // console.log(arreglo1);
    
    // const leerArchivo = (file)=>{
    //     fetch(file)
    //         .then(res => res.json())
    //         .then( data => {
    //             console.log(typeof data);
    
    //             data.forEach(element => {
    //                 // console.log(typeof element);
    //                 apellido = element;
    //                 arreglo1.push(apellido);
    //             });
    //         })
    // }
    
    
    
    // console.log(leerArchivo('01-apellidos.json'));
    
    // arreglo1.forEach(element => {
    //     console.log(element);
    // });
    
    
    // const logFileText = async file => {
    //     const response = await fetch(file)
    //     return text = await response.text()
    //     console.log(JSON.parse(text));
    // }
    
    
    // console.log(logFileText('01-apellidos.json'));
    
    // const leerArchivo =(file)=>{
    
    //     const xhttp = new XMLHttpRequest();
    //     xhttp.open("GET", file, true);
    //     xhttp.send();
    
    //      xhttp.onreadystatechange = function() {
    //         if (xhttp.readyState === 4 && xhttp.status == "200") {
    //           dato = JSON.parse(this.responseText);
    //           console.log(dato);
              
    //         }
    //     }
        
    // }
    
    // console.log(leerArchivo('01-apellidos.json'));
    
    
    
    
    
    
    
    
    
    // const readTextFile = (file, callback)=> {
    //     var rawFile = new XMLHttpRequest();
    //     rawFile.overrideMimeType("application/json");
    //     rawFile.open("GET", file, true);
    
    //     rawFile.onreadystatechange = function() {
    //         if (rawFile.readyState === 4 && rawFile.status == "200") {
    //             callback(rawFile.responseText);
    //         }
    //     }
    //     rawFile.send(null);
    // }
    
    // // LECTURA 
    // const apellidos = readTextFile("01-apellidos.json",(file)=>{
    
    //     data = JSON.parse(file);
    //     // crearLista(data);
      
    
    // });
    
    //  console.log(apellidos);
    

    
// const loadFile = async (file) => {
//     const response = await fetch(file)
//      text = await response.text()
//      data = JSON.parse(text)

// array = data.map(x=>({
//     ...x,
//     id:1,

// }));

// //    for (let i = 0; i < data.length; i++) {
// //        const valor = data[i];
// //        array[i] =valor;
       
// //    }
   
// }

// loadFile('apellidos.json');
// console.log(array);




