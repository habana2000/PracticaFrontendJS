import { pubSub } from "../pubSub.js";
import { getAnuncios } from "./anuncios.js";
import { buildAnuncioView, buildSpinnerView, buildErrorLoadingAnuncios, buildEmptyAnuncioList } from "./anuncioView.js";

export async function anuncioListController(anuncioListElement) {
  anuncioListElement.innerHTML = buildSpinnerView();
  let anuncios = [];

  try {
    anuncios = await getAnuncios()

    pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'Los anuncios se cargaron correctamente')

    if (anuncios.length > 0) {
      drawAnuncios(anuncios, anuncioListElement);
    } else {
      showEmptyMessage(anuncioListElement);
    }

  } catch (error) {
    pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'No hemos podido cargar los anuncios')
  } finally {
    hideSpinner(anuncioListElement)
  }

}

function hideSpinner(anuncioListElement) {
  const spinnerElement = anuncioListElement.querySelector('.spinner');
  spinnerElement.classList.add('hide');
}

function drawAnuncios(anuncios, anuncioListElement) {
  for (const anuncio of anuncios) {
    const newAnuncioElement = buildAnuncioView(anuncio);
    anuncioListElement.appendChild(newAnuncioElement)
  }
}

function showEmptyMessage(anuncioListElement) {
 anuncioListElement.innerHTML = buildEmptyAnuncioList();
}
