/**
 * Similar al método String.format() en c#, Transforma un string en el formato '{0}' a un nuevo string asignando la posicion de sus argumentos
 * @param {string} str - El string que va a matchear con los argumentos
 * @param  {...any} args - Los argumentos que se pasarán al string
 *
 * @returns {string} - El nuevo string Formateado con sus argumentos
 */
export const format = (str: string, ...args: any[]): string => {
  return str.replace(/{(\d+)}/g, (match, number) => {
    return args[number] != undefined ? args[number] : match;
  });
};

/**
 * Devuelve el factorial de un numero
 * @param n Numero en donde se va a calcular su factorial
 */
export const factorial = (n: number): number => {
  let total: number = 1;

  for (let i = 1; i <= n; i++) {
    total *= i;
  }

  return total;
};
