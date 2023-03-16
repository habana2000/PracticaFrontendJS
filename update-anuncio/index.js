import { updateAnuncioController } from "./updateAnuncioController.js";

// leer de la url el id del anuncio
const params = new URLSearchParams(window.location.search)
const anuncioId = params.get('anuncioId');

const token = localStorage.getItem('token')

if (!token) {
  window.location = './'
} else {
  const updateAnuncioFormElement = document.querySelector('#updateAnuncioForm');
  
  updateAnuncioController(updateAnuncioFormElement, anuncioId)
}
