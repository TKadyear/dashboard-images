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
```
KEY_PRUEBA = "EstoNoEsUnaApiKey"
KEY_SECRETA_PRUEBA = "NingunaSeDebeVerDesdeElCliente"
```

Nota: Normalmente los nombres de las variables de entorno, suelen ir en SNAKE_UPPER_CASE.


## Hacer peticiones a la API
### ¿Dónde hay que hacer las peticiones?
- ``https://api.unsplash.com/``

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
