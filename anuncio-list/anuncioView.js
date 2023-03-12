export function buildAnuncioView(anuncio) {
  const newAnuncioElement = document.createElement('article');
  newAnuncioElement.classList.add('anuncio')

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


  newAnuncioElement.innerHTML = `
  <table>
  <tr>
    <td>
      <a href="/anuncio-detail.html?anuncioId=${anuncio.id}">
        <h3>${anuncio.nombre}</h3>
      </a>
      <p>Descripción: <b>${anuncio.descripcion}</b></p>
      <p>Precio: <b>${anuncio.precio}</b></p>
      <p>Tipo: <b>${compraVentaTexto}</b></p>
    </td>
    <td>
      <img src=${imagenUrl} alt=${altUrl}>
    </td>
  </tr>
</table>
  `;

  return newAnuncioElement;
}

export function buildSpinnerView() {
  return `<div class="spinner"><div></div><div></div><div></div></div>`
}

export function buildErrorLoadingAnuncios() {
  return `<p class="load-error">Ha habido un problema cargando los anuncios. Inténtalo de nuevo más tarde</p>`
}

export function buildEmptyAnuncioList() {
  return `<p>No hay resultados disponibles</p>`;
}
