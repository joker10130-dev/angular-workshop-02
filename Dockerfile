FROM node:12.18.2-stretch
WORKDIR /app

COPY package*.json ./
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm install

COPY . .
EXPOSE 80
CMD [ "npm", "start" ]