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

### Documentación endpoints API
Para revisar la documentación de la API digirase al siguiente link => https://documenter.getpostman.com/view/14217451/2s8YesqWr4

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

### Estructura del proyecto
![alt text](https://res.cloudinary.com/dnh6zyzds/image/upload/v1668290860/estructura_backend_dxq7xl.png)

- **common**: Dentro de esta carpeta se guardarán todos los archivos los cuales su uso sea comun dentro del proyecto, como por ejemplo enums, interfaces, middlewares, etc.
- **config**: Dentro de esta carpeta se guardarán los archivos, clases, constantes que tengan que ver con al configuración de una libreria o archivo propio del proyecto. Por ejemplo una clase que controle la conexión de la base de datos.
- **modules**: Dentro de esta carpeta se guardarán los modulos que se trabajarán dentro del proyecto. Por ejemplo dentro de la carpeta products se guardará su controlador y servicio que son los encargados de la manipulación de la data.
- **routes**: Dentro de esta carpeta se configurarán las rutas de cada modulo.
- **main.ts**: Este archivo es el que permite correr el servidor.
- **.env**: Este archivo contiene las variables de entorno definidas.


