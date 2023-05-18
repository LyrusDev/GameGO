FROM node:20-alpine3.16

EXPOSE 3000

COPY src/assets/data/gamego.json /opt/gamego.json

RUN yarn global add json-server

CMD [ "json-server", "-H", "0.0.0.0", "/opt/gamego.json" ]

