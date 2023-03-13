
export const buildAnuncioDetail = (anuncio) => {

  // Tratamos el valor booleano de compraventa y lo convertimos en texto
  let compraVentaTexto;
  anuncio.compraventa === true ? (compraVentaTexto = 'Compra') : (compraVentaTexto = 'Venta');

  // Tratamos el caso en que no venga imagen
  let imagenUrl;
  let altUrl;
  if (anuncio.imagen) {
    imagenUrl = anuncio.imagen
    altUrl = anuncio.imagen
  } else {
    // imagen en blanco, no disponible
    imagenUrl = "https://sonatacranes.com/wp-content/uploads/2020/10/imagen-no-disponible.png"
    altUrl = "Anuncio sin imágenes"
  }


  return `
  <table>
    <tr>
      <td>
        <h3>${anuncio.nombre}</h3>
        <p>Descripción: <b>${anuncio.descripcion}</b></p>
        <p>Precio: <b>${anuncio.precio}</b></p>
        <p>Tipo: <b>${compraVentaTexto}</b></p>
      </td>
      <td>
        <img src="${imagenUrl}" alt="${altUrl}">
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <button id="deleteAnuncio">borrar anuncio</button>
        <button id="volverLista" onClick="history.back ()">volver a la lista</button>       
      </td>
    </tr>
  </table>
  `
}
