# Stage 1 - Build
FROM node:20-slim AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Stage 2 - Production
FROM node:20-slim
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .
RUN groupadd -r appgroup && useradd -r -g appgroup appuser
USER appuser
EXPOSE 5000
CMD ["node", "server.js"]
