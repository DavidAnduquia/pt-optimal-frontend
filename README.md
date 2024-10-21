##  Proyecto Formulario HTML básico con basicas de un CRUD


##  Instalación y Configuración local
1. Instalar dependencias

   ```
   npm install -g serve && npm install
   ```
 
2. Ejecutar el servidor local
   ```
   serve -s build
   ```

   ###### La aplicación en esta configuracion estará disponible en http://127.0.0.1:3000

##  Instalación y Configuración con Docker
   1. Se crea archivo dockerfile en la raiz del proyecto  y se agrega instrucciones para configurar el contenedor.
      ``` 
        # Usa una imagen base oficial de Node
        FROM node:18-alpine

        # Establece el directorio de trabajo dentro del contenedor
        WORKDIR /app

        # Copia el archivo package.json y package-lock.json (si existe)
        COPY package*.json ./

        # Instala las dependencias del proyecto
        RUN npm install

        # Copia el resto del código de la aplicación
        COPY . .

        # Construye la aplicación de producción
        RUN npm run build

        # Instala un servidor web simple para servir los archivos estáticos
        RUN npm install -g serve

        # Exponer el puerto en el que se ejecutará la aplicación
        EXPOSE 3000

        # Comando para ejecutar la aplicación
        CMD ["serve", "-s", "build", "-l", "3000"] 
      ```

   2. Construir la Imagen Docker
      ```
      docker build -t pt-optimal-frontend 
      ```

   3. Ejecutar el Contenedor Docker
      ```
      docker run -p 3000:3000 pt-optimal-frontend 
      ```
      ###### La aplicación estará disponible en http://127.0.0.1:3000