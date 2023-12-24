FROM node:17-alpine

WORKDIR /client 

COPY ./package*.json .

RUN npm ci

COPY . .

EXPOSE 3000

CMD ["npm","run","dev"]