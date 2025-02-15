# Builder stage: install dependencies and build the Next.js app
FROM node:20-bullseye-slim AS builder

# Set working directory
WORKDIR /app

# Install pnpm globally using npm (avoiding corepack issues)
RUN npm install -g pnpm@latest

# Copy package.json (and optionally pnpm-lock.yaml if available)
COPY package.json ./
COPY pnpm-lock.yaml ./

# Install dependencies (without lock file if it's not present)
RUN pnpm install --no-lockfile

# Copy the rest of the application code (without node_modules thanks to .dockerignore)
COPY . .

# Build the Next.js app
RUN pnpm run build

# Runner stage: create a lean image for production
FROM node:20-bullseye-slim AS runner

WORKDIR /app

# Install pnpm globally in the runner as well
RUN npm install -g pnpm@latest

# Copy necessary files from the builder stage
COPY --from=builder /app/package.json ./
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

# Expose Next.js port
EXPOSE 3000

# Start the application
CMD ["pnpm", "start"]
