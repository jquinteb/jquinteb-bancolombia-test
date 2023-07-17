# Define la imagen base
FROM node:14

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de tu proyecto al directorio de trabajo en el contenedor
COPY package.json package-lock.json /app/
COPY . /app

# Instala las dependencias del proyecto
RUN npm install

# Expone el puerto en el que se ejecutará tu aplicación
EXPOSE 3000

# Define el comando de inicio de tu aplicación
CMD ["npm", "start"]
