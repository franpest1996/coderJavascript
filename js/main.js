// Selectores
const contenedorFormulario = $('#creadorAlumno');
const contenedorDatos = $('#datosAlumnos');
const claveUsuarios = "listaUsuarios"

// Array de usuarios
let usuarios = [];

// // // Validación del Storage
// if (localStorage.getItem('listaUsuarios')) {
//     let usuarios = JSON.parse(localStorage.getItem('listaUsuarios'));
//     crearCard(usuarios, contenedorDatos);
// }

// Class Usuario
class Usuario {
    constructor(nombre, apellido, email, documento, telefono, ciudad, nota1, nota2, id){
        this.email = email;
        this.nombre = nombre;
        this.apellido = apellido;
        this.documento = documento;
        this.telefono = telefono;
        this.ciudad = ciudad;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.id = id;
    }
    getId(){
        return this.id;
    }
}



// Creamos Formulario
function crearFormulario(contenedor){
    contenedor.append(`
        <form class="row g-3" id="formulario">
            <div class="col-md-6">
                <label for="nombre" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="nombre" aria-describedby="emailHelp">
            </div>
            <div class="col-md-6">
                <label for="apellido" class="form-label">Apellido</label>
                <input type="text" class="form-control" id="apellido" aria-describedby="emailHelp">
            </div>
            <div class="col-md-6">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
            </div>
            <div class="col-md-6">
                <label for="documento" class="form-label">Documento</label>
                <input type="number" class="form-control" id="documento" aria-describedby="emailHelp">
            </div>
            <div class="col-md-6">
                <label for="nota" class="form-label">Nota</label>
                <input type="number" class="form-control" id="nota1">
            </div>
            <button type="submit" class="btn">Agregar</button>
        </form>
    `);
}

crearFormulario(contenedorFormulario);

// Seleccionar Formulario e inputs
const formulario = $('#formulario');
const inputNombre = $('#nombre');
const inputApellido = $('#apellido');
const inputEmail = $('#email');
const inputDocumento = $('#documento');
const inputTelefono = $('#telefono');
const inputCiudad = $('#ciudad');
const inputNota1 = $('#nota1');
const inputNota2 = $('#nota2');


$(`#btn`).on("keyup",function(){
    if(event.keyCode === 13){
        validar();
    }
})

$(".btn").on("click",function validar(e){{
    e.preventDefault();
    if(inputNombre.val() === ''){
            swal('Ingrese un nombre',"","error");
            inputNombre.focus();
            return false;
        }

    if(inputApellido.val() === ''){
        swal('Ingrese un apellido',"","error");
        inputApellido.focus();
        return false;
    }
    
    if(inputEmail.val() === ''){
        swal('Ingrese un email',"","error");
        inputEmail.focus();
        return false;
    }

    if(inputDocumento.val() === ''){
        swal('Ingrese un número de documento válido',"","error");
        inputDocumento.focus();
        return false;
    }

    if(inputTelefono.val() === ''){
        swal('Ingrese un número de telefono',"","error");
        inputTelefono.focus();
        return false;
    }
    if(inputCiudad.val() === ''){
        swal('Ingrese la Ciudad',"","error");
        inputCiudad.focus();
        return false;
    }
    if(inputNota1.val() === ''){
        swal('Ingrese una nota',"","error");
        inputCiudad.focus();
        return false;
    }
    else{
        console.log("ENTRE")
        swal({
            title:"¡Alumno agregado con éxito!",
            icon: "success"})
    }


    // Valores ingresados
    let nombre = inputNombre.val();
    let apellido = inputApellido.val();
    let email = inputEmail.val();
    let documento = inputDocumento.val();
    let telefono = inputTelefono.val();
    let ciudad = inputCiudad.val();
    let nota1 = inputNota1.val();
    let nota2 = inputNota2.val();

    // Resetear formulario
    formulario[0].reset();

    crearUsuario(nombre, apellido, email, documento, telefono, ciudad, nota1, nota2);
}
})

// Crear Usuario
function crearUsuario(nombre, apellido, email, documento, telefono, ciudad, nota1, nota2){
    let usuario = new Usuario(nombre, apellido, email, documento, telefono, ciudad, nota1, nota2);

    // Agregamos el nuevo usuario al array
    usuarios.push(usuario);

    // guardarEnStorage('usuarios', usuarios);
    // usuarios = recuperarDelStorage('usuarios');
    guardarUsuario(usuario)
}

function guardarUsuario(usuario){
    let item = localStorage.getItem(claveUsuarios);
    if (item){
        let usuarios = JSON.parse(localStorage.getItem(claveUsuarios));
        usuarios.push(usuario);
        let usuariosString = JSON.stringify(usuarios);
        localStorage.setItem(claveUsuarios,usuariosString)
    }else {
        let usuarios = [];
        usuarios.push(usuario);
        let usuariosString = JSON.stringify(usuarios);
        localStorage.setItem(claveUsuarios,usuariosString);
    }
}

// // Guardar en Storage
// function guardarEnStorage(clave, valor){
//     localStorage.setItem(clave, JSON.stringify(valor));
// }

// // Recuperar del Storage
// function recuperarDelStorage(clave){
//     const usuarios = JSON.parse(localStorage.getItem(clave));
//     return usuarios
// }

// // Creación de card
// function crearCard(usuarios, contenedor){
//     // Limpiamos lo anterior
//     contenedor.html('');
//     console.log("entre")
//     $(usuarios).each((index, usuario) => {
//         console.log("entreeee")
//         contenedor.append(`
//             <h2>Datos Usuario</h2>
//             <div class="card border-secondary mb-3" style="max-width: 18rem;">
//                 <div class="card-header">Nombre completo: ${usuario.nombre} ${usuario.apellido}</div>
//                 <div class="card-body text-secondary">
//                     <h5 class="card-title">Nro. de documento: ${usuario.documento}</h5>
//                     <p class="card-text">Email: ${usuario.email}</p>
//                 </div>
//             </div>    
//         `);
//     });
// }


