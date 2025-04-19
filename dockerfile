# 使用官方 Node.js 镜像
FROM node:18-alpine AS builder

# 设置工作目录
WORKDIR /app

# 复制依赖文件（利用 Docker 缓存）
COPY package*.json ./
RUN npm install --registry=https://registry.npm.taobao.org

# 复制源码并构建
COPY . .
RUN npm run build

# 最终阶段（仅保留构建产物）
FROM alpine:latest AS output
WORKDIR /output
COPY --from=builder /app/.output .