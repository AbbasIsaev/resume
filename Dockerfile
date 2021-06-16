FROM node:15
LABEL maintainer="Isaev Abbas"

# Клиент
WORKDIR /usr/src/app/client
COPY ./package*.json ./
RUN npm install
COPY . .

RUN npm run build

# Выставляем порт
EXPOSE 5000

# Команда запуска приложения
CMD npm run start