FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN yarn install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 80

# ARG APP_DB_HOST=${APP_DB_HOST}
# ARG APP_DB_USER=${APP_DB_USER}
# ARG APP_DB_PASS=${APP_DB_PASS}
# ARG APP_DB_NAME=${APP_DB_NAME}
# ARG APP_SERVER_PORT=${SERAPP_SERVER_PORTVER_NAME}

CMD [ "yarn", "start"]