function filtrarArrayDeNumeros(arrayDeNumeros, filtrarNumero) {
  const arrayResultado = [];

  for (let posicion = 0; posicion < arrayDeNumeros.length; posicion++) {
    const num = arrayDeNumeros[posicion];

    if (filtrarNumero(num)) {
      arrayResultado.push(num);
    }
  }

  return arrayResultado;
}

console.log(
  filtrarArrayDeNumeros([1, 2, 3, 4, 5, 6], (num) => {
    return num % 2 === 0;
  })
);

function filtrarNumeroImpar(num) {
  return num % 2 !== 0;
}

function filtrarCincos(num) {
  return num === 5;
}

console.log(filtrarArrayDeNumeros([7, 4, 2, 6, 9, 0, 10], filtrarNumeroImpar));
console.log(filtrarArrayDeNumeros([1, 2, 3, 4, 5, 6], filtrarCincos));
