let tareas = {
    titulo: "",
    estado: false
};


var txtTarea = document.getElementById("txt_tarea");
var txtEstado = document.getElementById("txt_estado");
var btnAgregar = document.getElementById("btn_agregar");
var mostrarTareas = document.getElementById("txt_mostrar_tareas");
var mostrarEstado = document.getElementById("txt_mostrar_estado");

var mostrarCompletadas =document.getElementById("txt_mostrar_completadas");
var mostrarPendientes =document.getElementById("txt_mostrar_pendientes");

btnAgregar.addEventListener("click",function(e){
    let tituloIngresado = txtTarea.value;
    let estadoTexto = txtEstado.value.toLowerCase();

    let tareasCompletadas=0;
    let tareasPendientes=0;

    
    if (estadoTexto === "completado") {
        tareas.estado = true;
        tareasCompletadas++;
    } else if (estadoTexto === "pendiente") {
        tareas.estado = false;
        tareasPendientes++;
    } else {
        console.log("Estado debe ser 'Completado' o 'Pendiente'");
        return;
    }

    tareas.titulo = tituloIngresado;

    txtTarea.value = "";
    txtEstado.value = "";

    mostrar();
    mostrarCompletadas();
    mostrarPendientes();
});


function mostrar() {
    mostrarTareas.innerHTML = `<p>${tareas.titulo}</p>`;

    if (tareas.estado === true) {
        mostrarEstado.innerHTML = `<p>Completado</p>`;
    } else {
        mostrarEstado.innerHTML = `<p>Pendiente</p>`;
    }
}


function mostrarTareasCompletadas(){
    mostrarCompletadas.innerHTML=`<p>${tareasCompletadas}</p>`;

}

function mostrarTareasPendientes(){
    mostrarPendientes.innerHTML=`<p>${tareasPendientes}</p>`;

}
