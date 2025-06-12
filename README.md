# Investigacion-de-integracion-React-APIs

El objetivo es investigar como integrar react con apis externas para consumir informacion.

La libreria que vamos a utilizar para integrarnos con las apis sera AXIOS (https://axios-http.com/es/docs/intro).

Recuerden que un buen momento para consumir apis es dentro de nuestro useEffect.

Les paso un par de urls de apis publicas para que prueben consumirlas.

## 1. JSONPlaceholder (simula endpoints comunes de una app real)
URL base: https://jsonplaceholder.typicode.com

Ejemplo: https://jsonplaceholder.typicode.com/posts

Permite obtener usuarios, posts, comentarios, etc.

Ideal para practicar CRUD falso.

No requiere API key.

## 2. PokeAPI (Pokémon)
URL base: https://pokeapi.co/api/v2

Ejemplo: https://pokeapi.co/api/v2/pokemon/charizard

Datos de Pokémon, habilidades, tipos, imágenes.

Sin autenticación.

## 3. The Cat API (fotos de gatos)
URL base: https://api.thecatapi.com/v1/images/search

Ejemplo: https://api.thecatapi.com/v1/images/search

Devuelve una imagen aleatoria de un gato.

Sin key para uso básico (opcional registrarse para más features).

## 4. Advice Slip API (consejos aleatorios)
URL base: https://api.adviceslip.com

Ejemplo: https://api.adviceslip.com/advice

Devuelve un consejo aleatorio.

Muy simple y didáctico.

## 5. Bored API (ideas para no aburrirse)
URL base: https://www.boredapi.com/api/activity

Ejemplo: https://www.boredapi.com/api/activity

Devuelve una actividad para hacer.

Ideal para ejemplos de botón + fetch.

## 6. OpenWeatherMap (clima – requiere key)
URL base: https://api.openweathermap.org/data/2.5/weather

Ejemplo: https://api.openweathermap.org/data/2.5/weather?q=Buenos%20Aires&appid=TU_API_KEY

Necesita clave gratuita que se consigue registrándose.

Muy útil para ejemplos de input + fetch.

## 7. Fake Store API
URL base: https://fakestoreapi.com

Ejemplo: https://fakestoreapi.com/products

Devuelve un array de productos con nombre, imagen, precio, categoría y descripción.

Ideal para simular un e-commerce.

El objetivo del TP es que cada grupo pueda armar un ejemplo en react consumiendo alguna de estas apis o alguna otra que investiguen y les parezcan interesantes.
