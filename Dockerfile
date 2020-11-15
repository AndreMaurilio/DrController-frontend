FROM node:8

RUN npm install -g http-server

#ENV APP_URL = IP_HOST

#ENV VUE_APP_BASE_URL="http://${IP_HOST}:8020/drcontroll"


WORKDIR /var/www

COPY package.json /var/www
COPY package-lock.json /var/www

RUN hash -r
RUN npm install 
COPY . /var/www

RUN npm run build

EXPOSE 8081
ENTRYPOINT [ "npm", "run","dev" ]

