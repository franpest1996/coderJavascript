const contenedorDatos = $('#datosAlumnos');

$(document).ready(() => {
    if (localStorage.getItem('listaUsuarios')) {
    let usuarios = JSON.parse(localStorage.getItem('listaUsuarios'));
        for(let i = 0; i < usuarios.length; i++){
                let usuario = usuarios[i];
        
                $("#datosAlumnos").append(`
                    <div class="alumnos mb-3"">
                        <div class="${usuario.documento} alumnosNombre">
                            <h3>${usuario.nombre} ${usuario.apellido}</h3>
                        </div>
                        <ul class="lista">
                            <li>DNI: ${usuario.documento}</li>
                            <li>Mail: ${usuario.email}</li>
                            <li>Nota: ${usuario.nota1}</li>
                        <ul>
                        <div class="botones">
                            <button id="a">Editar</button>
                            <button id="b">Borrar</button>  
                        </div>  
                    </div>    
                `);
            $(`#b`).on("click",function(){
                console.log("ENTRE")
                localStorage.removeItem(usuario,'listaUsuarios')
            })
        }
        
    }       
    $(`#borrar`).on("click",function(){
        console.log("Entre")
        localStorage.removeItem('listaUsuarios');
        swal({
            title:"¡Alumnos eliminados con éxito!",
            icon: "success"})
        $(`.alumnos`).fadeOut(500);
        
    })          
});

