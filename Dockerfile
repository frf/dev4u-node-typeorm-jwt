FROM node:14

WORKDIR /usr/src/app

COPY . .

RUN yarn install

RUN yarn global add pm2 

RUN yarn build

EXPOSE 8080

CMD ["pm2-runtime", "yarn", "start:prod", "src/server.js"]