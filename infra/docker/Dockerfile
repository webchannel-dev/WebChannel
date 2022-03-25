# base image
FROM node:12.16.1-alpine as development

# maintainer
LABEL maintainer="aj-7885"

RUN apk add --update bash

# set working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY .npmrc package.json yarn.lock ./
RUN yarn install --pure-lockfile --silent 2> /dev/null

# test code, generate coverage data, build package
FROM development as build
ENV CI=true
COPY . /usr/src/app
RUN yarn test && yarn build

# production
FROM nginx:1.21-alpine as production
COPY --from=build /usr/src/app/publish /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
