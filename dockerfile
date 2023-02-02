FROM node:16.18.1-buster

WORKDIR /src

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm" , "run", "dev"]
