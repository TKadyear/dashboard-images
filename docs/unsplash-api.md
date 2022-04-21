# Unsplash Api
## Requisitos
- [x] Cuenta de desarrollador, confirmada por correo.
- [X] Registrar la aplicación

## Limitaciones de la API

Son solo 50 request por hora.

## Integración de Unsplash API
Para integrarlo de la manera más sencilla en este caso sería con la librería de Javascript : [Unsplash-js](https://github.com/unsplash/unsplash-js)

---

# ¿Cómo empezar?

Primero hay que saber ocultar las dos Api keys que nos proporciona Unsplash.
Para ello es conveniente mirar :
- [Añadir variables de entorno personalizadas | Create React App](https://create-react-app.dev/docs/adding-custom-environment-variables/)

Basicamente es crear un documento llamado ``.env``, asegurándonos que esta siendo ignorado por el **.gitignore** y declarar ahi las variables de entorno.

Por convención de [React para declarar variables de entorno](https://create-react-app.dev/docs/adding-custom-environment-variables/) se tiene que poner ``REACT_APP_``
```
REACT_APP_KEY_PRUEBA = "EstoNoEsUnaApiKey"
REACT_APP_KEY_SECRETA_PRUEBA = "NingunaSeDebeVerDesdeElCliente"
```

Nota: Normalmente los nombres de las variables de entorno, suelen ir en SNAKE_UPPER_CASE.


## Hacer peticiones a la API
### ¿Dónde hay que hacer las peticiones?
- ``https://api.unsplash.com/``
- ``https://api.unsplash.com/photos/?client_id=TuClaveDeAcceso``

Recomiendan poner en la cabecera(header):  ``Accept-Version: v1``

### ¿Qué se puede hacer?
| Acción | Descripción       |
| ------ | ----------------- |
| GET    | Obtener datos.    |
| POST   | Crear datos.      |
| PUT    | Actualizar datos. |
| DELETE | Eliminar datos.   |



Al contrario que la mayoría de APIs, Unsplash necesita la URL de la imagen o estar embedida en la aplicación . A esto se le llama ``hotlinking``.

## Usando la libreria unsplash
Que te dejan este [Sandbox](https://stackblitz.com/edit/unsplash-js-javascript?file=src%2Findex.js)


# ¿Cómo es la respuesta de la API?
```JSON
  {
    "id": "scy_C022i44",
    "created_at": "2022-04-19T11:16:30-04:00",
    "updated_at": "2022-04-21T05:24:02-04:00",
    "promoted_at": "2022-04-21T05:24:01-04:00",
    "width": 4480,
    "height": 6720,
    "color": "#262626",
    "blur_hash": "LbI=MqDi8_Rk_NRjM_ayE2Rj%LWA",
    "description": "portrait ",
    "alt_description": null,
    "urls": {
      "raw": "https://images.unsplash.com/photo-1650381381140-5bced2f6688f?ixid=MnwzMjA1MTd8MHwxfGFsbHw1fHx8fHx8Mnx8MTY1MDUzNDc4NA\u0026ixlib=rb-1.2.1",
      "full": "https://images.unsplash.com/photo-1650381381140-5bced2f6688f?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=MnwzMjA1MTd8MHwxfGFsbHw1fHx8fHx8Mnx8MTY1MDUzNDc4NA\u0026ixlib=rb-1.2.1\u0026q=85",
      "regular": "https://images.unsplash.com/photo-1650381381140-5bced2f6688f?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwzMjA1MTd8MHwxfGFsbHw1fHx8fHx8Mnx8MTY1MDUzNDc4NA\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080",
      "small": "https://images.unsplash.com/photo-1650381381140-5bced2f6688f?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwzMjA1MTd8MHwxfGFsbHw1fHx8fHx8Mnx8MTY1MDUzNDc4NA\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400",
      "thumb": "https://images.unsplash.com/photo-1650381381140-5bced2f6688f?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwzMjA1MTd8MHwxfGFsbHw1fHx8fHx8Mnx8MTY1MDUzNDc4NA\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200",
      "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1650381381140-5bced2f6688f"
    },
    "links": {
      "self": "https://api.unsplash.com/photos/scy_C022i44",
      "html": "https://unsplash.com/photos/scy_C022i44",
      "download": "https://unsplash.com/photos/scy_C022i44/download?ixid=MnwzMjA1MTd8MHwxfGFsbHw1fHx8fHx8Mnx8MTY1MDUzNDc4NA",
      "download_location": "https://api.unsplash.com/photos/scy_C022i44/download?ixid=MnwzMjA1MTd8MHwxfGFsbHw1fHx8fHx8Mnx8MTY1MDUzNDc4NA"
    },
    "categories": [],
    "likes": 0,
    "liked_by_user": false,
    "current_user_collections": [],
    "sponsorship": null,
    "topic_submissions": {},
    "user": {
      "id": "jsssKfFuO9Y",
      "updated_at": "2022-04-21T05:28:10-04:00",
      "username": "noellejlee",
      "name": "noelle",
      "first_name": "noelle",
      "last_name": null,
      "twitter_username": null,
      "portfolio_url": null,
      "bio": "15 - based in the bay area\r\nfeel free to check out and download my pics :) insta: noellejlphotos",
      "location": "Bay area",
      "links": {
        "html": "https://unsplash.com/@noellejlee",
      },
      "profile_image": {
        "small": "https://images.unsplash.com/profile-1621379062191-725bf101e50eimage?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=32\u0026w=32",
        "medium": "https://images.unsplash.com/profile-1621379062191-725bf101e50eimage?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=64\u0026w=64",
        "large": "https://images.unsplash.com/profile-1621379062191-725bf101e50eimage?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=128\u0026w=128"
      },
      "instagram_username": "noellejlphotos",
      "total_collections": 0,
      "total_likes": 4,
      "total_photos": 203,
      "accepted_tos": true,
      "for_hire": false,
      "social": {
        "instagram_username": "noellejlphotos",
        "portfolio_url": null,
        "twitter_username": null,
        "paypal_email": null
      }
    }
  },
```
De todos estos datos que te devuelve la API, los que me interesan son :

```JSON
{
    "id": "scy_C022i44",
    "width": 4480,
    "height": 6720,
    "description": "portrait ",
     "urls": {
       //... solo serían estas por lo que pone el documento
      "full": "https://images.unsplash.com/photo-1650381381140-5bced2f6688f?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=MnwzMjA1MTd8MHwxfGFsbHw1fHx8fHx8Mnx8MTY1MDUzNDc4NA\u0026ixlib=rb-1.2.1\u0026q=85",
      "thumb": "https://images.unsplash.com/photo-1650381381140-5bced2f6688f?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwzMjA1MTd8MHwxfGFsbHw1fHx8fHx8Mnx8MTY1MDUzNDc4NA\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200"
     },
    "links": {
        "download": "https://unsplash.com/photos/scy_C022i44/download?ixid=MnwzMjA1MTd8MHwxfGFsbHw1fHx8fHx8Mnx8MTY1MDUzNDc4NA",
    },
    "user": {//Porque una de las Directrices de la API es basicamente dar atribución
      "username": "noellejlee",
      "name": "noelle",
      "first_name": "noelle",
            "links": {
        "self": "https://api.unsplash.com/users/noellejlee",
        "html": "https://unsplash.com/@noellejlee",
        "photos": "https://api.unsplash.com/users/noellejlee/photos",
        "likes": "https://api.unsplash.com/users/noellejlee/likes",
        "portfolio": "https://api.unsplash.com/users/noellejlee/portfolio",
        "following": "https://api.unsplash.com/users/noellejlee/following",
        "followers": "https://api.unsplash.com/users/noellejlee/followers"
      },
    },
    "categories": [],
    "likes": 0

}
```
