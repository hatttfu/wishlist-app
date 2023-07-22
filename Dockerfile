#a series of instructions on how to build your container/image.

FROM node:11.13.0-alpine

# create destination directory
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

#Инструкция WORKDIR в Dockerfile позволяет один раз указать конкретный путь
#(каталог на диске), после чего большинство инструкций (например, RUN и COPY)
#будут выполняться в контексте этого каталога.

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

# copy the app, note .dockerignore
COPY . /usr/src/nuxt-app/
RUN npm install
RUN npm run build

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD [ "npm", "start" ]


