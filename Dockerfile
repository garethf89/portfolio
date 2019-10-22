FROM node:12-alpine as webpack

ENV APP_DIR=/opt/portfolio
ENV NODE_ENV=production

ARG REACT_APP_API_URL
ARG REACT_APP_PROD

RUN apk update -f && \
   apk add bash

RUN apk add git yarn python make

WORKDIR $APP_DIR

COPY ./package.json $APP_DIR/package.json
COPY ./config $APP_DIR/config
COPY ./public $APP_DIR/public
COPY ./scripts $APP_DIR/scripts
COPY ./src $APP_DIR/src

RUN yarn install
RUN yarn run build
 
FROM nginx:alpine

RUN rm -rf /etc/nginx/conf.d/default.conf
RUN rm -rf /etc/nginx/nginx.conf

COPY /nginx/referral-spam.conf /etc/nginx/
COPY /nginx/gzip.conf /etc/nginx/
COPY /nginx/nginx.conf /etc/nginx/
COPY /nginx/default.conf /etc/nginx/conf.d/

COPY --from=webpack /opt/portfolio/build /usr/share/nginx/html