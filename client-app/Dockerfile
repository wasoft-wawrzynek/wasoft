FROM node:16-alpine as builder
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html

# Copy defaults and replacement script to container
WORKDIR /usr/share/nginx/html
COPY ./env.sh .
COPY .env .

# Make our shell script executable
#RUN chmod +x env.sh

# Replace environment variables and start Nginx server
CMD ["/bin/bash", "-c", "/usr/share/nginx/html/env.sh && nginx -g \"daemon off;\""]