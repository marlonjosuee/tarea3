function esAprobado(nota) {
  if (nota > 5) return nota + " es nota aprobatoria. Aprobaste!";
  else return nota + " no es nota aprobatoria. Desaprobaste!";
}
function funcionPromedio() {
  let n = parseInt(prompt("escribe la cantidad de notas a promediar "));

  let sumaNotas = 0;
  let i = 0;
  for (i = 0; i < n; i++) {
    let nota = parseInt(prompt("escribe la nota ", i + 1, ": "));
    sumaNotas = sumaNotas + nota;
  }
  let promedioNotas = sumaNotas / n;
  console.log("La el promedio de notas " + esAprobado(promedioNotas));
}

funcionPromedio();
