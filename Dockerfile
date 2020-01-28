FROM node:13.7.0
WORKDIR /app
COPY package.json ./
RUN yarn install
COPY . .
EXPOSE 3000
CMD ["yarn", "start"]