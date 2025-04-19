#1、基于镜像node版本
FROM node:18.18.0-alpine
#2、作者
MAINTAINER sourcebyte.vip
#3、参数，node的环境为生产环境
ENV NODE_ENV=production
#4、任意ip
ENV HOST 0.0.0.0
#5、容器内创建目录/source-bbs
RUN mkdir -p /source-bbs
#6、复制当前的内容到容器内容部目录/source-bbs
COPY .output/ ./source-bbs
#7、切换工作目录到/source-bbs
WORKDIR /source-bbs
#8、暴露端口3000，默认端口
EXPOSE 3000
#9、start
CMD ["node","./server/index.mjs"]
