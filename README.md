# store-test
API REST creada con las técnologias de nodeJS + expressJS + typescript, que permite comunicarse con la base de datos de productos de una tienda. 
Su funcionalidad principal es entregar los productos filtrados de acuerdo a parámetros enviados desde el cliente (categoria, página, busqueda).

### Tecnologías utilizadas
- NodeJS v16.17.1
- ExpressJS v4.18.2
- Typescript v4.8.4

### Librerias utilizadas
- cors v2.8.5
- dotenv v16.0.3
- mysql2 v2.3.3

### Pasos para utilización
- Clonar repositorio dentro de su equipo.
- Instalar depencias de node con el comando **npm install**
- Crear archivo .env y agregar las siguientes variables de entorno:
  - **PORT**: Puerto en el que se levantará la API.
  - **DATABASE_HOST**: Host donde se encuentra la base de datos.
  - **DATABASE_USER**: Usuario de la base de datos.
  - **DATABASE_PASSWORD**: Contraseña de la base de datos.
  - **DATABASE_NAME**: Nombre de la base de datos.
- Correr proyecto con el comando **npm run start:dev**

### Documentación endpoints API
Para revisar la documentación de la API digirase al siguiente link => https://documenter.getpostman.com/view/14217451/2s8YesqWr4
