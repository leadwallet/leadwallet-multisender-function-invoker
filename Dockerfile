FROM node:14-alpine
COPY src ./src
COPY *.json ./
RUN npm install
COPY . .
EXPOSE $PORT
ENTRYPOINT ["npm", "start"]