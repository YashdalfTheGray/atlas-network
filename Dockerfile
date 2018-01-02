FROM node:9

# tell node that it's running under docker
ENV NODE_ENV docker

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 8090

CMD [ "npm", "start" ]
