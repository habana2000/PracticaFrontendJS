import { getAnuncioById,  updateAnuncio } from "./updateAnuncio.js";
import { pubSub } from "../pubSub.js";

export const updateAnuncioController = async (updateAnuncioFormElement, anuncioId) => {
 
  const anuncio = await getAnuncioById(anuncioId);

  const anuncioNombre = updateAnuncioFormElement.querySelector('#anuncioNombre');
  anuncioNombre.setAttribute('value',anuncio.nombre);
  const anuncioDescripcion = updateAnuncioFormElement.querySelector('#anuncioDescripcion');
  anuncioDescripcion.innerHTML = anuncio.descripcion;
  const anuncioPrecio = updateAnuncioFormElement.querySelector('#anuncioPrecio');
  anuncioPrecio.setAttribute('value',anuncio.precio);
  const anuncioImagen = updateAnuncioFormElement.querySelector('#anuncioImagen');
  anuncioImagen.setAttribute('value',anuncio.imagen);

  // Compra/Venta
  var anuncioCompraVenta = '';
  if (anuncio.compraventa) {
    anuncioCompraVenta = updateAnuncioFormElement.querySelector('#compra');
  } else {
    anuncioCompraVenta = updateAnuncioFormElement.querySelector('#venta');
  }
  anuncioCompraVenta.checked = true;

  updateAnuncioFormElement.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const formData = new FormData(updateAnuncioFormElement);
    const anuncioNombre = formData.get('anuncioNombre');
    const anuncioDescripcion = formData.get('anuncioDescripcion');
    const anuncioPrecio = formData.get('anuncioPrecio');
    const anuncioImagen = formData.get('anuncioImagen');
    const anuncioCompraVenta = formData.get('anuncioCompraVenta');

    try {
      // tratamiento de los radio-buttons de compraventa
      const booleanCompraVenta = isCompraVentaOK(anuncioCompraVenta)
      await updateAnuncio(anuncioId, anuncioNombre, anuncioDescripcion, anuncioPrecio, booleanCompraVenta, anuncioImagen)
      window.location = './'
    } catch (error) {
      alert(error)
    }
  })
}

function isCompraVentaOK(anuncioCompraVenta) {
  if (!anuncioCompraVenta) {
    throw(new Error('Se debe indicar el tipo de anuncio: Compra / Venta'))
  }

  return anuncioCompraVenta === "compra"
}
