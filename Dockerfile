# Build stage
FROM node:18-alpine AS build

WORKDIR /wang_wei_ui_garden_build_checks

COPY package.json package-lock.json* ./

RUN npm install

COPY . .

RUN npm run build

# Production stage
FROM nginx:alpine

COPY --from=build /wang_wei_ui_garden_build_checks/build /usr/share/nginx/html

EXPOSE 8018

CMD ["nginx", "-g", "daemon off;"]
