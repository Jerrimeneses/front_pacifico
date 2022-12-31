import Swal from "sweetalert2";

export function show_alerta(message,icon,focus=''){
    if (focus !='') {
        document.getElementById(focus).focus();
    }
    Swal.fire({
        title:message,
        icon:icon,
        customClass: {confirmButton: 'btn btn-primary', popup:'animated zoomIn'},
        buttonsStyling:false
    });
}

// export function confirmar(id,name){
//     var url = 'http://localhost/back_construyendo_pacifico/public/api/eliminar_usuario/'+id;
//     const swalWithBootstrapButtons = Swal.mixin({
//         customClass:{confirmButton: 'btn btn-success me-3',cancelButton:'btn btn-danger'},
//         buttonsStyling:false
//     });
//     swalWithBootstrapButtons.fire({
//         title: 'Seguro de eliminar el usuario '+name,
//         text: 'Se perderá la información del usurio',
//         icon: 'question',
//         showCancelButton:true,
//         confirmButtonText:'<i class="fa-solid fa-check"></i> Si, eliminar',
//         cancelButtonText:'<i class="fa-solid fa-ban"></i> Cancelar'
//     }).then((ressult) => {
//         if (ressult.isConfirmed) {
//             enviarSolicitud('DELETE', {id:id}, url, 'Usuario eliminado');
//         }else{
//              show_alerta('operación cancelada', 'info');
//         }
//     })
// }

// export function enviarSolicitud(metodo,parametros,url,mensaje){ 
//     axios({method:metodo, url:url, data:parametros}).then(function(respuesta){
//        console.log(respuesta.data);
//         var status = respuesta.data['status'];
//         if (status == 'success') {
//             show_alerta(mensaje, status);
//             window.setTimeout(function() {
//                 window.location.href='/';
//             }, 1000);
//         }else{
//             var listado ='';
//             var errores = respuesta.data['errores'];
//             Object.keys(errores).forEach(
//                 key =>  listado += errores[key][0]+'.'
//             );
//             show_alerta(listado, 'error')
//         }
//     }).catch(function(error){
//         show_alerta('Error en la solicitud', error);
//     })
// }