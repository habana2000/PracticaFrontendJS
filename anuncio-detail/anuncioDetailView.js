
export const buildAnuncioDetail = (anuncio) => {
  return `
  <table>
    <tr>
      <td>
        <p>Nombre: ${anuncio.nombre}</p>
        <p>Descripción: ${anuncio.descripcion}</p>
        <p>Precio: ${anuncio.precio}</p>
        <p>Compra/Venta: ${anuncio.compraventa}</p>
      </td>
      <td>
        <img src="${anuncio.imagen}" alt="${anuncio.imagen}" width=100% max-width=500px>
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <button id="deleteAnuncio">borrar anuncio</button>
      </td>
    </tr>
  </table>
  `
}
