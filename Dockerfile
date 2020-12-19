FROM node:8 As build-stage

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
#ENTRYPOINT [ "npm", "run","dev" ]

FROM nginx:1.14.2

COPY /nginx/nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

COPY  --from=build-stage /var/www/dist /usr/share/nginx/html

##ENTRYPOINT [ "npm", "run","dev" ]


