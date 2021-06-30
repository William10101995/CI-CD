FROM node:10.15.2-alpine
#Area de trabajo
WORKDIR /usr/src/app
#Copio package json y package-lock
COPY package*.json ./
#Instalo dependencias
RUN npm install
#Copio todo al Area de trabajo
COPY . .
#Expongo el puerto 3000
EXPOSE 3000
#Corro el servidor
CMD npm run dev