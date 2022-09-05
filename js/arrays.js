class alumnos {
  constructor(nombre, apellido, edad, estudio, disponibilidad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.estudio = estudio;
    this.disponibilidad = disponibilidad;
  }

  habilitar() {
    let error = "alumno disponible";
    if (this.disponibilidad == false) {
      this.disponibilidad = true;
    } else {
      console.log(error);
    }
  }
  desabilitar() {
    let error = "alumno no disponible ";
    if (this.disponibilidad == true) {
      this.disponibilidad = false;
    } else {
      console.log(error);
    }
  }
}

const salon = [];

let alumnos1 = new alumnos("Pepe", "Sandosval", "3", "Matematicas", true);
let alumnos2 = new alumnos("Felipe", "Ursupial", "20", "computacion", false);
let alumnos3 = new alumnos("Rocio", "Borito", "15", "comunicacion", true);
let alumnos4 = new alumnos("Lenny", "Cangres", "12", "cta", true);
let alumnos5 = new alumnos("Jaime", "yondaime", "20", "fisica", false);

salon.push(alumnos1);
salon.push(alumnos2);
salon.push(alumnos3);
salon.push(alumnos4);
salon.push(alumnos5);

console.log(salon);

// // alumnos2.habil itar()
// // console.log(libro2)

// alumnos1.desabilitar();
// console.log(alumnos1);

let disponible = salon.filter((alumno) => alumno.disponibilidad == true);
console.log(disponible);
