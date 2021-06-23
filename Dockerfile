FROM node:16

WORKDIR /usr/astrolabe

COPY package*.json ./
COPY ./server ./server
COPY ./src ./src
COPY ./public ./public

ENV NODE_ENV=production
ENV PORT=80

RUN npm ci --only=production
RUN npm run build

EXPOSE 80

CMD [ "npm", "start" ]