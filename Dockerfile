FROM node:15-alpine as build
WORKDIR /usr/app
COPY . /usr/app/
RUN npm ci
RUN npm run build

FROM nginxinc/nginx-unprivileged
LABEL maintainer="Isaev Abbas"
EXPOSE 8080
COPY ./docker/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/app/build /usr/share/nginx/html