FROM node:14.3.0-alpine

RUN apk update && apk add build-base git python jq

COPY package*.json ./
COPY ./src ./src
COPY tsconfig* ./
COPY jest.config.js ./
COPY ormconfig.json ./

RUN npm install --production

ENV PORT 8080
EXPOSE 8080
ENV NODE_ENV production

CMD ["build:server"]
