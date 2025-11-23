FROM node:18-alpine
RUN adduser -D -u 1001 userapp
WORKDIR /app
 
COPY package*.json ./
RUN npm install


COPY . .

EXPOSE 5000

USER userapp

CMD ["npm", "start"]
