FROM node:6.4

RUN npm install -g http-server

WORKDIR /var/www

COPY package.json /var/www
COPY package-lock.json /var/www


RUN npm install
COPY . /var/www

RUN npm run build

EXPOSE 8081
ENTRYPOINT [ "npm", "run","dev" ]

