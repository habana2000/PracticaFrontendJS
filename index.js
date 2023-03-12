import { notificationController } from "./notifications/notificationController.js"
import { anuncioListController } from "./anuncio-list/anuncioListController.js"
//import { userActionsController } from "./user-actions/userActionsController.js"

const anuncioListElement = document.querySelector('.anuncio-list')
const notificationsElement = document.querySelector('.notifications')
//const userActionsElement = document.querySelector('.user-actions')

notificationController(notificationsElement)
anuncioListController(anuncioListElement)
//userActionsController(userActionsElement)

