/* #################
 * ## Ejercicio 1 ##
 * #################
 *
 * - Crea un bucle "for" que recorra los números del 0 al 100 saltando de 10 en 10.
 *
 * - Posteriormente crea otro bucle "for" que recorra los números del 100 al 0 de
 *   25 en 25.
 */

for (let num = 0; num <= 100; num += 10) {
  console.log(num);
}

for (let num = 100; num >= 0; num -= 25) {
  console.log(num);
}
