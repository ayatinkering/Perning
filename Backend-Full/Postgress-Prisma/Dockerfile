#INSTRUCTION SHEET TO GET OUR APP RUNNING

#use an official node.js runtime as a parent image (SNAPSHOT of the ENVIRONMENT)
FROM node:22-alpine

# set working directory
WORKDIR /app

# copy package.json, package.lock.json into the container from SOURCE .DEST
COPY package*.json .

# install all dependancies
RUN npm install 

# copy the rest of application (from current file to current working directory dest)
COPY . .

# expose port that the app runs on, tell env to OPEN up this port
EXPOSE 5000 

# define cmd to run app
CMD ["node", "./src/server.js"] 



