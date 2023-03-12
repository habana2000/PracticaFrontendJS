import { signupController } from "./signupController.js";
import { notificationController } from "../notifications/notificationController.js";

const signupElement = document.querySelector('#createUser')
const notificationsElement = document.querySelector('.notifications')

notificationController(notificationsElement)

signupController(signupElement)
