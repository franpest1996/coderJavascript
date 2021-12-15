const contenedorDatos = $('#datosAlumnos');


if (localStorage.getItem('listaUsuarios')) {
         let usuarios = JSON.parse(localStorage.getItem('listaUsuarios'));
         crearAlumno(usuarios, contenedorDatos);
     }

function profesores(){
    const url = "jsonLocal.json"
    $.get(url,function(respuesta,estado){
    console.log(respuesta);
    console.log(estado);
    if (estado === "success"){
        let datos = respuesta.profesores;
        for (const dato of datos){
            $("#datosProfesores").prepend(`<div class="profesores">
                                <p>Profesor: ${dato.nombre} ${dato.apellido}</p>
                                </div>

            `)
        }
    } 
})
}

function tutores(){
    const url = "jsonLocal.json"
    $.get(url,function(respuesta,estado){
    console.log(respuesta);
    console.log(estado);
    if (estado === "success"){
        let datos = respuesta.tutores;
        for (const dato of datos){
            $("#datosProfesores").prepend(`<div class="profesores">
                                <p>Tutor: ${dato.nombre} ${dato.apellido}</p>
                                </div>

            `)
        }
    } 
})
}     

tutores();
profesores();


function crearAlumno(usuarios){
    $(usuarios).each((index, usuario) => {
        $(".table").append(`
                            <tbody>
                            <tr>
                                <td>${usuario.apellido}</td>
                                <td>${usuario.nombre}</td>
                                <td>${usuario.documento}</td>
                                <td>${usuario.email}</td>
                                <td>${usuario.nota1}</td>
                            </tr>
                            </tbody>
        `);
    });
}


// function crearAlumno(usuarios){ 
    
   
//     $(usuarios).each((index, usuario) => {
        
//         $("#tarjetasAlumnos").append(`
//             <div class="alumnos mb-3"">
//                 <div class="alumnosNombre">${usuario.nombre} ${usuario.apellido}</div>
//                 <ul class="lista">
//                     <li>DNI: ${usuario.documento}</li>
//                     <li>Mail: ${usuario.email}</li>
//                     <li>Cel: ${usuario.telefono}</li>
//                     <li>Ciudad: ${usuario.ciudad}</li>
//                     <li>Primer entrega: ${usuario.nota1}</li>
//                     <li>Segunda entrega: ${usuario.nota2}</li>
//                     <button id="">Editar</button>
//                     <button id="">Eliminar</button>
//                 <ul>
//             </div>    
//         `);
//     });
// }

