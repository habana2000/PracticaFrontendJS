
export async function getAnuncios() {
  const anunciosUrl = 'http://localhost:8000/api/anuncios';
  
  const response = await fetch(anunciosUrl);
  const anuncios = await response.json();

  return anuncios
}
