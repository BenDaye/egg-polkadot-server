FROM registry.cn-hangzhou.aliyuncs.com/aliyun-node/alinode:4.7.2-alpine

WORKDIR /root/app

RUN mkdir -p /root/app

COPY ./package.json ./

# RUN npm config set package-lock false -g && npm install --production && npm cache clean --force
RUN npm install

COPY . ./

EXPOSE 80

CMD npm start
