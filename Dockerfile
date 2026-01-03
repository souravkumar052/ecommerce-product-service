# Stage 1: Build stage
FROM node:18-alpine AS build

# Set working directory inside container
WORKDIR /app

# Copy dependency files first for caching
COPY package*.json ./

# Install dependencies
RUN npm install --only=production

# Copy the rest of the code
COPY . .

# Expose port
EXPOSE 3000

# Start the app
CMD ["node", "app.js"]

