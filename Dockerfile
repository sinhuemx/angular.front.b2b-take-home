# Stage 1: Construir la biblioteca shared-ui
FROM node:18 AS shared-ui-builder
WORKDIR /app/shared-ui
COPY shared-ui/package*.json ./
RUN npm ci
COPY shared-ui/ .
RUN npm run build

# Stage 2: Construir la aplicación principal
FROM node:18 AS app-builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
# Copiar la biblioteca shared-ui compilada
COPY --from=shared-ui-builder /app/shared-ui/dist ./dist/shared-ui
RUN npm run build

# Stage 3: Servir la aplicación con Nginx
FROM nginx:alpine
COPY --from=app-builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
