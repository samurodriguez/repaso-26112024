/**
 *
 *   1. Obtén todos los coches de la marca Audi.
 *   2. Obtén un array con todos los colores de los coches de marca BMW.
 *   3. Obtén un array con los coches automáticos
 *   4. Obtén un array con los coches cuyo precio sea mayor de 50.000€
 *   5. Obtén el precio medio de los coches BMW
 *
 */

"use strict";

const coches = [
  {
    marca: "BMW",
    modelo: "Serie 3",
    year: 2012,
    precio: 30000,
    puertas: 4,
    color: "Blanco",
    transmision: "automatico",
  },
  {
    marca: "Audi",
    modelo: "A4",
    year: 2018,
    precio: 40000,
    puertas: 4,
    color: "Negro",
    transmision: "automatico",
  },
  {
    marca: "Ford",
    modelo: "Mustang",
    year: 2015,
    precio: 20000,
    puertas: 2,
    color: "Blanco",
    transmision: "automatico",
  },
  {
    marca: "Audi",
    modelo: "A6",
    year: 2010,
    precio: 35000,
    puertas: 4,
    color: "Negro",
    transmision: "automatico",
  },
  {
    marca: "BMW",
    modelo: "Serie 5",
    year: 2016,
    precio: 70000,
    puertas: 4,
    color: "Rojo",
    transmision: "automatico",
  },
  {
    marca: "Mercedes Benz",
    modelo: "Clase C",
    year: 2015,
    precio: 25000,
    puertas: 4,
    color: "Blanco",
    transmision: "automatico",
  },
  {
    marca: "Chevrolet",
    modelo: "Camaro",
    year: 2018,
    precio: 60000,
    puertas: 2,
    color: "Rojo",
    transmision: "manual",
  },
  {
    marca: "Ford",
    modelo: "Mustang",
    year: 2019,
    precio: 80000,
    puertas: 2,
    color: "Rojo",
    transmision: "manual",
  },
  {
    marca: "Dodge",
    modelo: "Challenger",
    year: 2017,
    precio: 40000,
    puertas: 4,
    color: "Blanco",
    transmision: "automatico",
  },
  {
    marca: "Audi",
    modelo: "A3",
    year: 2017,
    precio: 55000,
    puertas: 2,
    color: "Negro",
    transmision: "manual",
  },
  {
    marca: "Dodge",
    modelo: "Challenger",
    year: 2012,
    precio: 25000,
    puertas: 2,
    color: "Rojo",
    transmision: "manual",
  },
  {
    marca: "Mercedes Benz",
    modelo: "Clase C",
    year: 2018,
    precio: 45000,
    puertas: 4,
    color: "Azul",
    transmision: "automatico",
  },
  {
    marca: "BMW",
    modelo: "Serie 5",
    year: 2019,
    precio: 90000,
    puertas: 4,
    color: "Blanco",
    transmision: "automatico",
  },
  {
    marca: "Ford",
    modelo: "Mustang",
    year: 2017,
    precio: 60000,
    puertas: 2,
    color: "Negro",
    transmision: "manual",
  },
  {
    marca: "Dodge",
    modelo: "Challenger",
    year: 2015,
    precio: 35000,
    puertas: 2,
    color: "Azul",
    transmision: "automatico",
  },
  {
    marca: "BMW",
    modelo: "Serie 3",
    year: 2018,
    precio: 50000,
    puertas: 4,
    color: "Blanco",
    transmision: "automatico",
  },
  {
    marca: "BMW",
    modelo: "Serie 5",
    year: 2017,
    precio: 80000,
    puertas: 4,
    color: "Negro",
    transmision: "automatico",
  },
  {
    marca: "Mercedes Benz",
    modelo: "Clase C",
    year: 2018,
    precio: 40000,
    puertas: 4,
    color: "Blanco",
    transmision: "automatico",
  },
  {
    marca: "Audi",
    modelo: "A4",
    year: 2016,
    precio: 30000,
    puertas: 4,
    color: "Azul",
    transmision: "automatico",
  },
];

// 1. Obtén todos los coches de la marca Audi.

const cochesAudi = coches.filter((coche) => {
  return coche.marca.toLocaleLowerCase() === "audi";
});

console.log(cochesAudi);

// 2. Obtén un array con todos los colores de los coches de marca BMW.

const cochesBmw = coches.filter((coche) => {
  return coche.marca.toLocaleLowerCase() === "bmw";
});

console.log(cochesBmw);

const coloresBmw = cochesBmw.map((coche) => {
  return coche.color;
});

console.log(coloresBmw);

const setColoresBmw = new Set(coloresBmw);

const coloresBmwSinDuplicados = [...setColoresBmw];

console.log(coloresBmwSinDuplicados);

// 3. Obtén un array con los coches automáticos

const cochesAutomaticos = coches.filter((coche) => {
  return coche.transmision === "automatico";
});

console.log(cochesAutomaticos);

// 4. Obtén un array con los coches cuyo precio sea mayor de 50.000€
const cochesDeMasDeCincuentaMil = coches.filter((coche) => {
  return coche.precio > 50000;
});

console.log(cochesDeMasDeCincuentaMil);

// 5. Obtén el precio medio de los coches BMW

let precioTotalBmw = 0;

for (const coche of cochesBmw) {
  precioTotalBmw += coche.precio;
}

const mediaPrecioBmw = precioTotalBmw / cochesBmw.length;

console.log(mediaPrecioBmw);
