// Preguntar notas hasta que el usuario cancele
function ingresarNotasDinamicamente() {
  let notas = [];

  while (true) {
    const nombre = prompt("Nombre del estudiante (o presiona Cancelar para terminar):");
    if (!nombre) break;

    let nota;
    do {
      nota = parseInt(prompt(`Ingresa la nota para ${nombre} (0-100):`));
    } while (isNaN(nota) || nota < 0 || nota > 100);

    notas.push({ nombre, nota });
  }

  // Guardar en localStorage
  localStorage.setItem("notasEstudiantes", JSON.stringify(notas));
  alert("Notas guardadas correctamente.");
}

// Mostrar notas guardadas
function mostrarNotasGuardadas() {
  const notas = JSON.parse(localStorage.getItem("notasEstudiantes")) || [];
  const contenedor = document.getElementById("resultados");
  contenedor.innerHTML = "<h3>Listado de Estudiantes</h3>";

  notas.forEach(est => {
    const div = document.createElement("div");
    div.textContent = `${est.nombre} - Nota: ${est.nota}`;
    contenedor.appendChild(div);
  });
}