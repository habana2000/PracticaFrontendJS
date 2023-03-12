import { createAnuncio } from "./createAnuncio.js";

export const createAnuncioController = async (createAnuncioFormElement) => {
  createAnuncioFormElement.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(createAnuncioFormElement);
    const anuncioNombre = formData.get('anuncioNombre');
    const anuncioDescripcion = formData.get('anuncioDescripcion');
    const anuncioPrecio = formData.get('anuncioPrecio');
    const anuncioCompraVenta = formData.get('anuncioCompraVenta');
    const anuncioImagen = formData.get('anuncioImagen');

    try {
      await createAnuncio(anuncioNombre, anuncioDescripcion, anuncioPrecio, anuncioCompraVenta, anuncioImagen)
      window.location = '/'
    } catch (error) {
      alert(error)
    }
  })
}
