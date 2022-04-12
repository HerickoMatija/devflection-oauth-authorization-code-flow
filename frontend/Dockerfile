FROM node:14-alpine AS ui-build
WORKDIR /app
COPY . ./
RUN npm install && npm run build

FROM node:14-alpine AS node-js-build
WORKDIR /app
COPY --from=ui-build /app/build ./build
COPY server/ ./server/
RUN cd server && npm install

EXPOSE 5000

WORKDIR /app/server

CMD ["npm", "start"]