FROM node:6.7

MAINTAINER tmaximini@gmail.com

RUN useradd --user-group --create-home --shell /bin/false app

ENV HOME=/home/app

COPY package.json $HOME/imagine/
RUN chown -R app:app $HOME/*

USER app
WORKDIR $HOME/imagine
RUN npm install

CMD ["node", "index.js"]