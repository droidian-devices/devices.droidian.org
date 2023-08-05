FROM node:18
ENV NODE_ENV prod

WORKDIR /usr/src/app
ADD package.json /usr/src/app
RUN npm install

ADD . /usr/src/app
RUN npm run build

FROM nginx:alpine

COPY --from=0 /usr/src/app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
