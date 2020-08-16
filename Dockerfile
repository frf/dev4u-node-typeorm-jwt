FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY . .

RUN yarn global add pm2 

RUN yarn install

RUN pm2 install typescript

RUN yarn build

ENV APP_DB_HOST=${APP_DB_HOST}
ENV APP_DB_USER=${APP_DB_USER}
ENV APP_DB_PASS=${APP_DB_PASS}
ENV APP_DB_NAME=${APP_DB_NAME}

ENV REFRESH_TOKEN_SECRET=${REFRESH_TOKEN_SECRET}
ENV ACCESS_TOKEN_SECRET=${ACCESS_TOKEN_SECRET}

ENV APP_SERVER_PORT=${APP_SERVER_PORT}

RUN export

EXPOSE 3333

CMD ["pm2-runtime", "start", "pm2.json"]
