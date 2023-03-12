import { createAnuncio } from "./createAnuncio.js";
import { pubSub } from "../pubSub.js";

export const createAnuncioController = async (createAnuncioFormElement) => {
  createAnuncioFormElement.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(createAnuncioFormElement);
    const anuncioNombre = formData.get('anuncioNombre');
    const anuncioDescripcion = formData.get('anuncioDescripcion');
    const anuncioPrecio = formData.get('anuncioPrecio');
    const anuncioImagen = formData.get('anuncioImagen');
    const anuncioCompraVenta = formData.get('anuncioCompraVenta');

    
    try {
      // tratamiento de los radio-buttons de compraventa
      const booleanCompraVenta = isCompraVentaOK(anuncioCompraVenta)
      await createAnuncio(anuncioNombre, anuncioDescripcion, anuncioPrecio, booleanCompraVenta, anuncioImagen)
      window.location = '/'
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
