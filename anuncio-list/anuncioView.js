export function buildAnuncioView(anuncio) {
  const newAnuncioElement = document.createElement('article');
  newAnuncioElement.classList.add('anuncio')

  newAnuncioElement.innerHTML = `
    <a href="/anuncio-detail.html?anuncioId=${anuncio.id}">
      <div class="user-info">
      </div>
      <p>${anuncio.nombre}</p>
      <p>${anuncio.descripcion}</p>
      <p>${anuncio.precio}</p>
      <p>${anuncio.compraventa}</p>
      <p>${anuncio.imagen}</p>
    </a>
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
