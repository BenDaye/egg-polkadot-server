FROM registry.cn-hangzhou.aliyuncs.com/aliyun-node/alinode:4

WORKDIR /root/app

RUN mkdir -p /root/app

COPY ./package.json ./

RUN npm config set package-lock false -g && npm install --production && npm cache clean --force

COPY ./app ./config ./app.js ./

EXPOSE 7001

CMD npm start
