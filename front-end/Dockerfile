
# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

COPY front-end/package*.json ./
RUN npm ci

COPY front-end/ .
RUN npm run build

# Production stage
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY front-end/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
