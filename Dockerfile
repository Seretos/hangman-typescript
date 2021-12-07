FROM node:17.2 AS dev

RUN npm install -g npm@8.2.0

WORKDIR /app
ENV NODE_OPTIONS=--openssl-legacy-provider

FROM nginx AS prod

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY build/ /app

WORKDIR /app