FROM nginx

COPY .circleci/nginx/default.conf /etc/nginx/conf.d/
COPY build/ /app

WORKDIR /app