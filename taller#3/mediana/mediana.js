function calcularMediaAritmetica(lista){
  const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento){
      return valorAcumulado + nuevoElemento;
    }
  );
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

// const lista = [
//   100,
//   200,
//   500,
//   40000000000,
// ];


function calcularMediana(listado) {
  let ordenado = listado.sort((a,b) => a - b);
  console.log(ordenado)
  let mitadLista = parseInt(listado.length / 2);

  function esPar(numerito) {
    if(numerito % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }


  if(esPar(listado.length)) {
    const elemento1 = ordenado[mitadLista - 1];
    const elemento2 = ordenado[mitadLista];

    const promedioElemento1y2 = calcularMediaAritmetica([ elemento1, elemento2, ]);
    return  promedioElemento1y2;
  } else {
    return ordenado[mitadLista]
  }
}
