# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY . .
RUN npm install && npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY prod_nginx.conf /etc/nginx/nginx.conf

RUN chgrp -R root /var/cache/nginx /var/run /var/log/nginx && \
    chmod -R 770 /var/cache/nginx /var/run /var/log/nginx
    
EXPOSE 4200
CMD ["nginx", "-g", "daemon off;"]
