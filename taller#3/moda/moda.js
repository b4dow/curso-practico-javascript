const lista = [
  1,
  2,
  3,
  1,
  2,
  3,
  4,
  2,
  2,
  2,
  2,
  3,
  1,
  4,
];

const listaCount = {};


lista.map((elemento) => {
  if (listaCount[elemento]){
    listaCount[elemento] += 1;
  } else {
    listaCount[elemento] = 1;
  }
} );

listaArray = Object.entries(listaCount).sort((a,b) => a[1] - b[1]);

const moda = listaArray[listaArray.length - 1]
