const d = document

const $nombre = d.getElementById('mi-nombre')
const $apellido = d.getElementById('mi-apellido')
const $edad = d.getElementById('mi-edad')
const $socio = d.getElementById('mi-check-socio')
const $deporte = d.getElementById('mi-lista-depo')

const $modal = d.getElementById('modal')



function confirmData(){

    changeData()
    showModal()
}

/* Llamada al texto y asiganarlo a la variable */
function changeData(){
    d.getElementById('modal-nombre').innerHTML = 'Nombre: ' + $nombre.value
    d.getElementById('modal-apellido').innerHTML = 'Apellido: ' + $apellido.value
    d.getElementById('modal-edad').innerHTML = 'Edad: ' + $edad.value
    d.getElementById('modal-depo').innerHTML = 'Deporte: ' + $deporte.value

    if($socio.checked){
        d.getElementById('modal-socio').innerHTML = 'Socio/a del Club'
    }
    else{
        d.getElementById('modal-socio').innerHTML = 'No es socio/a del Club'
    }
}

/*Acedemos a css para cambiar la vista de la caja POP UP */
function hideModal(){
    $modal.style.display = 'none'
}

function showModal(){
    /*accediendo a los estilos del elemento, (.display) para que aparezca*/
    $modal.style.display = 'block'

}

function clearData(){
    $nombre.value =''
    $apellido.value =''
    $edad.value =''
    $deporte.value =''
    $socio.checked = false
}

function sendConsole(){
    console.clear()
    console.log($nombre.value, $apellido.value)       
    console.log($edad.value)       
    console.log($deporte.value)       
    let socio = $socio.checked
    
    if (socio) {
        console.log('Es socio/a')
    }
    else {
        console.log('No es socio/a')
    }

    alert('Inscripcion Completada Correctamente')
    hideModal()
    clearData()
}


