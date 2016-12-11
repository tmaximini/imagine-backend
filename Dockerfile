FROM node:6.9.1

MAINTAINER tmaximini@gmail.com

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 3333

# currently used for development only
CMD ["./node_modules/.bin/nodemon", "index.js"]