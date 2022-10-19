FROM node:19-alpine AS prod
WORKDIR /app
COPY ./package.json ./
COPY ./yarn.lock ./
RUN yarn install
COPY  . ./
RUN yarn build
EXPOSE 3000
CMD ["yarn", "start:prod"]