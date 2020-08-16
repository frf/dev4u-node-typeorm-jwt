FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY . .

RUN yarn global add pm2 

RUN yarn install

RUN pm2 install typescript

RUN yarn build

ARG APP_DB_HOST=${APP_DB_HOST}
ARG APP_DB_USER=${APP_DB_USER}
ARG APP_DB_PASS=${APP_DB_PASS}
ARG APP_DB_NAME=${APP_DB_NAME}

ARG REFRESH_TOKEN_SECRET=${REFRESH_TOKEN_SECRET}
ARG ACCESS_TOKEN_SECRET=${ACCESS_TOKEN_SECRET}

ARG APP_SERVER_PORT=${APP_SERVER_PORT}

RUN export

EXPOSE 3333

CMD ["pm2-runtime", "start", "pm2.json"]
