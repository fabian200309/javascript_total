function enviarformulario(){
    //capturar informacion del formulario
    const nombre=document.getElementById("nombre").value;
    const anio=document.getElementById("anio").value;
    const email=document.getElementById("email").value;

    //crear un documento xml
    const xmlData=`
    <usuario>
        <nombre>${nombre}</nombre>
        <email>${email}</email>
        <anio>${anio}</anio>
    </usuario>`;

    //Almacenar el xml en el localStorage
    localStorage.setItem('usuarioXML', xmlData);

    //redirigir a la pàgina de visualizacion
    window.location.href= 'visualizar.html'

    //Enviar que el formulario se envie de la manera tradicional
    return false;
}