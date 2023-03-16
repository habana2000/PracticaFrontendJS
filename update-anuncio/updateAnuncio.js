export const getAnuncioById = async (anuncioId) => {
  const response = await fetch(`http://localhost:8000/api/anuncios/${anuncioId}`)

  if (!response.ok) {
    throw new Error('El anuncio solicitado no existe')
  }

  const anuncio = await response.json();

  return anuncio;
}


export const updateAnuncio = async (anuncioId,
                                    anuncioNombre, 
                                    anuncioDescripcion,
                                    anuncioPrecio,
                                    booleanCompraVenta,
                                    anuncioImagen) => {

  const updateAnuncioElement = {
    nombre: anuncioNombre,
    descripcion: anuncioDescripcion,
    precio: anuncioPrecio,
    compraventa: booleanCompraVenta,
    imagen: anuncioImagen
  }

  const token = localStorage.getItem('token')

  const response = await fetch('http://localhost:8000/api/anuncios/${anuncioId}', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(updateAnuncioElement)
  })

  if (!response.ok) {
    throw new Error('Error modificando el anuncio')
  }

}
