export function buildAnuncioView(anuncio) {
  const newAnuncioElement = document.createElement('article');
  newAnuncioElement.classList.add('anuncio')

  newAnuncioElement.innerHTML = `
  <table>
  <tr>
    <td>
      <a href="/anuncio-detail.html?anuncioId=${anuncio.id}">
        <b>Nombre: ${anuncio.nombre}</b>
      </a>
      <p>Descripción: ${anuncio.descripcion}</p>
      <p>Precio: ${anuncio.precio}</p>
      <p>Compra/Venta: ${anuncio.compraventa}</p>
    </td>
    <td>
      <img src=${anuncio.imagen} alt=${anuncio.imagen}>
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
