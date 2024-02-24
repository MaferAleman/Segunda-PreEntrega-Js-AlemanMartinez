// BASE DE DATOS DE CURSO DE VERANO

function solicitarNombre() {
    let nombre = prompt("Por favor, introduce tu nombre completo:");
    if (nombre) {
      alert("¡Hola, " + nombre + "! Bienvenido/a.");
    } else {
      alert("¡Por favor, introduce tu nombre correctamente!");
    }
  }
  
  let saludo = alert(
    "¡Bienvenidos a nuestra plataforma digital. ¡Gracias por elegirnos!"
  );
  
  solicitarNombre()
  
  let bd = [
    {
      id: 111,
      nombre: "María García",
      cursoInscrito: "Natación",
      estado: "¡Aprobado!",
      notaFinal: 20,
    },
    {
      id: 121,
      nombre: "Julian Roche",
      cursoInscrito: "Matemáticas",
      estado: "Desaprobado",
      notaFinal: 11,
    },
    {
      id: 132,
      nombre: "Luis López",
      cursoInscrito: "Química",
      estado: "¡Aprobado!",
      notaFinal: 15,
    },
    {
      id: 321,
      nombre: "Sergio Calderón",
      cursoInscrito: "Física",
      estado: "¡Aprobado!",
      notaFinal: 18,
    },
    {
      id: 231,
      nombre: "Juan Morán",
      cursoInscrito: "Lenguaje",
      estado: "Desaprobado",
      notaFinal: 8,
    },
  ];
  
  let opcion;
  let mensaje =
    "¡Hola estudiantes! Ingresa tu opción elegida:\n" +
    [
      "1 - Ingrese nombre del estudiante",
      "2 - ¿Qué curso tienes?",
      "3 - Promedio final",
      "4 - Nota final",
      "0 - Salir",
    ].join("\n");
  
  do {
    opcion = Number(prompt(mensaje))
    if (opcion === 1) {
      let nombreEstudiante = prompt("Ingrese el nombre del estudiante:")
      let estudianteEncontrado = bd.find(
        (estudiante) => estudiante.nombre === nombreEstudiante
      );
      if (estudianteEncontrado) {
        console.log("Estudiante encontrado:")
        console.log(estudianteEncontrado)
        alert("¡Bienvenido/a " + nombreEstudiante + "!")
      } else {
        console.log("Estudiante no encontrado.")
        alert("Estudiante no encontrado.")
      }
    } else if (opcion === 2) {
      // Lógica para filtrar por curso
      let idEstudiante = parseInt(prompt("Ingrese su ID:"))
      let estudianteEncontrado = null
  
      for (let estudiante of bd) {
        if (estudiante.id === idEstudiante) {
          estudianteEncontrado = estudiante
          break;
        }
      }
  
      if (estudianteEncontrado) {
        let cursoEstudiante = prompt("Ingrese el curso en el que está inscrito:")
  
        if (estudianteEncontrado.cursoInscrito === cursoEstudiante) {
          console.log(
            "Estudiante encontrado en el curso de " + cursoEstudiante + "."
          );
          alert("¡Estás inscrito en el curso de " + cursoEstudiante + "!");
        } else {
          console.log(
            "Estudiante no encontrado en el curso de " + cursoEstudiante + "."
          );
          alert("No estás inscrito en el curso de " + cursoEstudiante + ".");
        }
      } else {
        console.log("Estudiante no encontrado.")
        alert("Estudiante no encontrado.")
      }
    } else if (opcion === 3) {
      // Lógica para calcular el promedio final
      let nombreEstudiante = prompt("Ingrese el nombre del estudiante:")
      let estudianteEncontrado = bd.find(
        (estudiante) => estudiante.nombre === nombreEstudiante
      );
      if (estudianteEncontrado) {
        console.log("Estudiante encontrado:")
        console.log(estudianteEncontrado)
        if (estudianteEncontrado.estado === "¡Aprobado!") {
          alert("El estudiante " + nombreEstudiante + " ha aprobado el curso.")
        } else {
          alert(
            "El estudiante " + nombreEstudiante + " no ha aprobado el curso."
          );
        }
      } else {
        console.log("Estudiante no encontrado.")
      }
    } else if (opcion === 4) {
      // Lógica para mostrar la nota final
      let nombreEstudiante = prompt("Ingrese el nombre del estudiante:")
      let estudianteEncontrado = bd.find(
        (estudiante) => estudiante.nombre === nombreEstudiante
      );
      if (estudianteEncontrado) {
        console.log("Estudiante encontrado:")
        console.log(estudianteEncontrado)
        alert(
          "Hola " +
            nombreEstudiante +
            ", tu nota final es: " +
            estudianteEncontrado.notaFinal
        );
      } else {
        console.log("Estudiante no encontrado.")
      }
    } else if (opcion === 0) {
      console.log("Saliendo del programa.")
      alert("¡Hasta pronto!")
    } else {
      console.log("Opción inválida. Por favor, ingrese una opción válida.")
      alert("Opción inválida. Hasta pronto.")
    }
  } while (opcion !== 0)