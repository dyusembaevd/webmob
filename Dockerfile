# Stage 1: Install dependencies and build the app
FROM node:18-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (if available)
COPY package.json package-lock.json ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN yarn build

# Stage 2: Production image
FROM node:18-alpine AS runner

# Set NODE_ENV to production for optimization
ENV NODE_ENV=production

# Set the working directory for the production environment
WORKDIR /app

# Copy the build output and necessary files from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Expose the port the app runs on
EXPOSE 3000

ENV NEXT_PUBLIC_API_BASE=https://inboost.kz
ENV NEXT_PUBLIC_BASE_URL=https://inboost.kz
# Start the Next.js application
CMD ["yarn", "start"]
