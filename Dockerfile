FROM node:20.12.0
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
ENV NODE_ENV=production
EXPOSE 8082
RUN npm run build
CMD ["node", "dist/main"]