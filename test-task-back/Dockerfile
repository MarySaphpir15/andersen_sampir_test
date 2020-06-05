FROM node:12.18-alpine
RUN mkdir -p /usr/src/applicaion
WORKDIR /usr/src/applicaion
COPY package.json /usr/src/applicaion
RUN npm install
COPY . /usr/src/applicaion
EXPOSE 3000
CMD ["npm", "start"]
