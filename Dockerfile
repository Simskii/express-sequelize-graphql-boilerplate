FROM mhart/alpine-node:latest
RUN mkdir /app
RUN npm install nodemon -g
RUN npm install cross-env -g
RUN npm install babel-cli -g
WORKDIR /app
COPY package.json /app
RUN npm install
COPY ./src /app
CMD ["npm", "run", "docker"]
