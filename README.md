# VisualThinking
Code Challenge Visual Partner-Ship API

Esta API ayudara a consultar la base de datos de estudiantes junto con sus datos.

### Dependencias

Se utilizaron las siguientes dependencias para realizar el proyecto:

- Jest: Se utilizo para realizar las pruebas pertinentes y tener un sustento de que funciona todo correctamente.
- Express: Se utilizo para montar un servidor local y poder probar la API.
- Git: Nuestro control de versiones.


### Diseño

El proyecto esta dividido en 2 partes, la primera que es el servicio que es el encargado de realizar la lógica en como se validan los datos. Y el segundo es el controlador que nos permite hacer la interacción. 

### ¿Cómo consultar la API?

|Urls| Descripción|ejemplo
|:---|:---:|:---|
|localhost:3000/v1/students/|Regresa la lista completa de estudiantes|"name": "Warren","email": "Todd@visualpartnership.xyz",|
|localhost:3000/v1/certified/|Regresa la lista con los correos de los estudiantes que están certificados|"email": "Todd@visualpartnership.xyz"|
|localhost:3000/v1/credits/|Regresa la lista de los estudiantes que tengan 500 o mas créditos|"name": "Lucinda"|

