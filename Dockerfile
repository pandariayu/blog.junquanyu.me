FROM node:24-alpine

RUN apk add --no-cache git

WORKDIR /app

COPY package.json .
COPY docs/ docs/

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "docs:dev", "--", "--host", "0.0.0.0"]