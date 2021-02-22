FROM node:14-alpine

# move to directory, create if not exists
RUN mkdir /usr/src/app -p
WORKDIR /usr/src/app

# install and cache app dependencies
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

# start app
CMD ["npm", "start"]