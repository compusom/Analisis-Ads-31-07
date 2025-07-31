# Usa Node.js 18 en una imagen liviana
FROM node:18-alpine

# Directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia sólo package.json para aprovechar la cache de Docker
COPY package*.json ./

# Instala dependencias (solo producción)
RUN npm ci --omit=dev

# Copia el resto del código
COPY . .

# Genera el build (Vite crea dist/)
RUN npm run build

# Expone el puerto en el que correrá el servidor
ENV PORT=3000
EXPOSE 3000

# Comando por defecto para arrancar tu backend
CMD ["npm", "run", "start"]
