From node:alpine

WORKDIR /app

copy package*.json .

run npm install

copy . .

run npm run build

expose 3000

cmd ["npm"], ["start"]