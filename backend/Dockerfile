FROM node:12
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 9000
CMD [ "npm","run","start:docker" ]