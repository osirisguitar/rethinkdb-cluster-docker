FROM node:6.9.1

# Copy package.json file to docker image.
COPY package.json /app/

# Define working directory.
WORKDIR /app

# Install node files on docker image.
RUN npm install --production

# Copy application files
COPY app.js /app

CMD ["node", "app"]

# Expose port
EXPOSE 3000
