FROM node:9-slim

WORKDIR /nodeApp

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "start"]
