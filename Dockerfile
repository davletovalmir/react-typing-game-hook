# Base stage, used in development environment too
FROM node:16.5-alpine as base
RUN apk update && apk upgrade && apk add bash

WORKDIR /app
COPY package.json ./
RUN yarn install
COPY . .
