export const createAnuncio = async (anuncioNombre, 
                                    anuncioDescripcion,
                                    anuncioPrecio,
                                    booleanCompraVenta,
                                    anuncioImagen) => {

  const newAnuncioElement = {
    nombre: anuncioNombre,
    descripcion: anuncioDescripcion,
    precio: anuncioPrecio,
    compraventa: booleanCompraVenta,
    imagen: anuncioImagen
  }

  const token = localStorage.getItem('token')

  const response = await fetch('http://localhost:8000/api/anuncios', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(newAnuncioElement)
  })

  if (!response.ok) {
    throw new Error('Error creando anuncio')
  }

}
