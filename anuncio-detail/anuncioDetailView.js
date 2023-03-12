
export const buildAnuncioDetail = (anuncio) => {
  return `
  <p>Nombre: ${anuncio.nombre}</p>
  <p>Descripción: ${anuncio.descripcion}</p>
  <p>Precio: ${anuncio.precio}</p>
  <p>Compra/Venta: ${anuncio.compraventa}</p>
  <p>Imagen: ${anuncio.imagen}</p>
  <button id="deleteAnuncio">borrar anuncio</button>
  `
}
