**********************************************
# Practica Desarrollo Frontend con JavaScript
**********************************************
Alumno: Xavi Roca
Fecha: 19.MAR.23

## Requisitos

* Proyecto sparrest.js --> https://github.com/kasappeal/sparrest.js
  * OJO! El módulo de `sparrest.js` queda fuera del directorio del proyecto. Se debe instalar aparte
  * Se adjunta `db.json` que deberá cargarse en el directorio correspondiente

## Proyecto Wallapop

### Recursos (sparrest.js)

* users

```json
  "users": [
    {
      "username": "xroca@vilamatica.com",
      "password": "$2b$10$9g74E9vUL7xrfECDP0wuqum/X/38sV/bK0PtMpQcPViy4lkmFFq/a",
      "id": 1
    }
  ]
```

* anuncios

```json
"anuncios": [
    {
      "nombre": "Vendo coche",
      "descripcion": "Perfecto, poco kilómetros",
      "precio": "10000",
      "compraventa": false,
      "imagen": "https://totalrenting.es/wp-content/plugins/shortcode_totalRenting/assets/img/coche-CTA.png",
      "userId": 1,
      "updatedAt": "2023-03-12T11:04:23.455Z",
      "id": 2
    }
]
```

### Modulos

* utils
* notifications
* login
* signup
* user-actions
* anuncio-list
* create-anuncio

### Requisitos 

* Listado de anuncios
* Detalle de anuncio
* Creación de anuncio
* Login
* Registro (Sign up)

### Requisitos opcionales

* Permitir editar un anuncio. 
  * Se accede desde la vista de detalle del anuncio
  * Sólo puede editarlo quien lo creó