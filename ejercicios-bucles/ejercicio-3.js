/* #################
 * ## Ejercicio 3 ##
 * #################
 *
 * Llegó el momento de poner en práctica todo lo aprendido hasta ahora para...
 * ¡¡DESACTIVAR UNA BOMBA!! Tranquilos, no tenemos que ser expertos en explosivos.
 * Se trata de crear un juego en el que damos al usuario 5 intentos para tratar de
 * desactivar la bomba.
 *
 * Estos son los pasos que debes seguir para tratar de conseguir el objetivo:
 *
 *  - Generar un nº aleatorio del 0 al 10. Existe una función en JavaScript que nos permite generar un nº al azar, ¿por qué no investigas un poco?
 *
 *  - Una vez hayamos generado el nº de desactivación daremos al usuario un total
 *    de 5 intentos para tratar de averiguar el nº en cuestión.
 *
 *  - Si acierta detenemos el bucle (buscad cómo hacerlo con 'break') y mostramos un mensaje que indica
 *    que la bomba ha sido desactivada. De lo contrario indicamos que la bomba ha explotado.
 *
 */

const password = Math.floor(Math.random() * 11);

for (let tries = 1; tries <= 5; tries++) {
  const userInput = +prompt("Introduce un número para desactivar la bomba:");

  if (userInput === password) {
    alert("¡Has desactivado la bomba!");
    break;
  } else if (tries === 5) {
    alert("La bomba explotó");
  }
}
