function calcularPromedio() {
    let nombreAlumno = prompt("Ingrese nombre de alumno:");
    let materia = prompt("Ingrese materia:");

    let sumaNotas = 0;

    for (let i = 1; i <= 3; i++) {
        let nota = parseFloat(prompt(`Ingrese la nota ${i} (de 0 a 10):`));

        while (nota < 0 || nota > 10 || isNaN(nota)) {
            nota = parseFloat(prompt(`Nota inválida. Ingrese una nota correcta (entre 0 a 10):`));
        }

        sumaNotas += nota;
    }

    let promedio = sumaNotas / 3;

    if (promedio >= 7) {
        console.log(`¡${nombreAlumno} felicidades! Has aprobado con un promedio de ${promedio.toFixed(2)}.`);
    } else {
        console.log(`${nombreAlumno}, gracias por tu esfuerzo! Nos vemos pronto en clase. El promedio obtenido es ${promedio.toFixed(2)}.`);
    }
}

calcularPromedio();
