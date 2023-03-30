# `npm i mercadopago`
Damos inicio instalando la libreria de Mercadopago


## `router.post("/payments")`
Continuamos creando la ruta 


## `import mercadopago from "mercadopago"`
Importamos la libreria de Mercadopago en la ruta 


## `mercadopago.configure({ access_token: process.env.MERCADOPAGO_KEY })`
Configuramos la variable de entorno de Mercadopago // esta key la obtenemos directamente del perfil de Mercadopago que definamos para el vendedor


## `let don = req.body`
definimos el objeto que vamos a recibir (en este caso del pago de una donacion)


## `let preference = { items, back_urls, auto_return, binary_mode }`
Definimos la preferencia que viene siendo la plantila o modelo que tiene Mercadopago para recibir nuestro pago


## `mercadopago.preferences`
Creamos la preferencias de Mercadopago basado en las preferencias que definimos anteriormente y asi damos respuesta en la parte del front 


## Si la peticion back_urls fue exitosa se re dirige al usuario a la pagina web nuevamente
success: [http://localhost:3000]


