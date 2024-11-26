function sumFiveAndMultiplyByTwo(num) {
  return (num + 5) * 2;
}

function substractTwo(num) {
  return num - 2;
}

function f1(x) {
  console.log(x);
}

// Un callback es cuando a un parámetro se le da como valor una función. Por ejemplo, aquí abajo al parámetro 'x' de f1 le estoy asignando como valor la función 'substractTwo', por lo que 'x' es un callback.
f1(substractTwo);

// Aquí 'x' no sería un callback, porque como valor le estoy asignando lo que me devuelve 'substractTwo(10)', que es el número 8.
f1(substractTwo(10));
