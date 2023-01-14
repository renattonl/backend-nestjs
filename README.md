<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Reto Tècnico para el puedo Backend NodeJS

A continuaciòn se detalla la instalaciòn y los endpoints realizados.

## Instalaciòn de paquetes

```bash
$ npm install
```

## Corriendo la aplicaciòn

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Ejercicio 1

- Diseñar un servicio simulado tipo GET

```
GET: http://localhost:3333/ejercicio1
```

## Ejercicio 2

- Diseñar una API Rest con las operaciones básicas (CRUD).
- Arquitectura del proyecto.
- Buenas prácticas.
- Mapeado de entidad a un DTO (Data Transfer Object).
- Micro commits.

_Escenario 1: Crear organización:_

```
POST: http://localhost:3333/ejercicio2
BODY:
{
  "name": "Banco Pichincha",
  "status": "1"
}
```

_Escenario 2: Editar organización_

```
PATH: http://localhost:3333/ejercicio2/1
{
  "name": "Banco Pichincha",
  "status": "1"
}
```

_Escenario 3: Obtener organizaciones_

```
GET: http://localhost:3333/ejercicio2
GET: http://localhost:3333/ejercicio2/1
```

_Escenario 4: Eliminar organizaciones_

```
DELETE: http://localhost:3333/ejercicio2/1
```

## Ejercicio 3

- Relaciones entre de entidades.
- Control de excepciones.
- Pruebas unitarias por comportamientos.
- Formato de respuesta requerida.
- Uso correcto de enumerados y constantes.

_Escenario 1: Obtener métricas de repositorios por tribu:_

```
GET: http://localhost:3333/ejercicio3/escenario1/:id_tribe
EXAMPLE: http://localhost:3333/ejercicio3/escenario1/1
```

_Escenario 2: Tribu inexistente._

```
GET: http://localhost:3333/ejercicio3/escenario2/:id_tribe
EXAMPLE: http://localhost:3333/ejercicio3/escenario2/10
```

_Escenario 3: Información de verificación._

```
GET: http://localhost:3333/ejercicio3/escenario3/:id_tribe
EXAMPLE: http://localhost:3333/ejercicio3/escenario3/1
```

_Escenario 4: Tribu no tiene repositorios que cumplan con la cobertura._

```
GET: http://localhost:3333/ejercicio3/escenario4/:id_tribe
EXAMPLE: http://localhost:3333/ejercicio3/escenario4/1
```

## Ejercicio 4

- Generar reporte en csv a través de un endpoint.

_Escenario 1: Generar reporte_

```
GET: http://localhost:3333/ejercicio4/escenario1/:id_tribe
EXAMPLE: http://localhost:3333/ejercicio4/escenario1/1
```

## Detalle del Autor

Pedro Renatto Neciosup Liza
renattonl@gmail.com
