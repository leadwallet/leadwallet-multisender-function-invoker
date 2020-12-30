FROM node:14-alpine
COPY src ./src
COPY *.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE $PORT
ENTRYPOINT ["npm", "start"]