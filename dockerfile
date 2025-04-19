# 阶段 1：构建应用
FROM node:18-alpine AS builder

WORKDIR /app

# 复制依赖文件并安装（利用 Docker 缓存）
COPY package*.json ./
COPY yarn.lock ./
RUN npm install --registry=https://registry.npmmirror.com

# 复制源码并构建
COPY . .
RUN npm run build

# 阶段 2：生产环境运行
FROM node:18-alpine AS production

WORKDIR /app

# 仅复制必要文件
COPY --from=builder /app/.output ./.output
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

# 设置环境变量（按需调整）
ENV NITRO_HOST=0.0.0.0
ENV NITRO_PORT=3000

# 暴露端口并启动
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]