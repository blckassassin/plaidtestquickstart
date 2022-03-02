FROM node:16-alpine AS frontend

WORKDIR /frontend

COPY ./frontend/.npmrc ./
COPY ./frontend/package*.json ./
RUN npm install

COPY ./frontend ./

RUN npm run build

WORKDIR /backend

RUN chown -R node:node /backend
COPY --chown=node:node ./node/package*.json /backend/

USER node
RUN npm install

COPY --chown=node:node ./node/index.js ./
COPY --chown=node:node ./.env ./

CMD node ../frontend/index.js & node index.js