# Use Node 18
FROM node:18 AS frontend-build

# Set working directory for frontend
WORKDIR /app/

# Copy frontend files
COPY frontend/ ./
# Install frontend dependencies
RUN npm install

RUN npm run build

# Stage 2: Build the backend
FROM node:18

# Set working directory for backend
WORKDIR /app/

# Copy backend files
COPY backend/ ./
# Install backend dependencies
RUN npm install

COPY --from=frontend-build /app/dist ./dist

# Expose the port your backend listens on
EXPOSE 3000

# Start the server
CMD ["node", "server.js"]
