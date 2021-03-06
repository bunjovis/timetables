FROM node:13.7.0
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
RUN yarn build
COPY . .
EXPOSE 3000
CMD ["yarn", "start"]
