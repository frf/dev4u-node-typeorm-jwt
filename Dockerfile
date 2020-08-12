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

EXPOSE 8080

RUN pwd

RUN ls -la 

ARG SERVER_NAME=${SERVER_NAME}

ARG some_variable_name=${some_variable_name}

RUN echo "Oh dang look at that $some_variable_name"

RUN bash -c "sleep 10 && echo SERVER_NAME && yarn knex:migrate" 

CMD [ "yarn", "start" ]