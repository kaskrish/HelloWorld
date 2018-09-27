FROM node:carbon-alpine

WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Install all dependencies.
RUN npm install

# Copy Source code
COPY src /app


# Using the port 3000.
EXPOSE 3000

CMD [ "npm", "start"]