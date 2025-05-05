let empleados=[];
function cargar(){
    const expediente=document.getElementById("txtExpediente").value;
    const nombre=document.getElementById("txtNombre").value;
    const apellido=document.getElementById("txtApellido").value;
    const fechadenacimiento=document.getElementById("txtFechaDeNacimiento").value;
    const cargo=document.getElementById("txtCargo").value;
}
function Perro(){
    this.nombre="";
    this.patas=4;
    this.ladrar=function (){
        console.log("Guau");
    };
};
let Empleado= new empleado();
empleados.push(Empleado)
function mostrar(){
  
    alert(empleados);
    const expediente=document.getElementById("txtExpediente").value="";
    const nombre=document.getElementById("txtNombre").value="";
    const apellido=document.getElementById("txtApellido").value="";
    const fechadenacimiento=document.getElementById("txtFechaDeNacimiento").value="";
    const cargo=document.getElementById("txtCargo").value="";
   
}