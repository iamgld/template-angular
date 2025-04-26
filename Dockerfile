## Build environment
FROM node:22 AS build
WORKDIR /app
# Copy package files first for better caching
COPY package.json pnpm-lock.yaml ./
# Install pnpm and dependencies
RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile
# Copy rest of the code
COPY . .
# Environment variables
# ENV NX_CLOUD=false
ARG GLD_ENVIRONMENT=prod
ENV GLD_ENVIRONMENT=${GLD_ENVIRONMENT}
# Build
RUN pnpm build:${GLD_ENVIRONMENT}

## Runtime environment
FROM node:22-alpine
ARG PORT=3000
ENV PORT=${PORT}
WORKDIR /app

COPY --from=build /app/dist /app/dist
COPY --from=build /app/package.json /app/package.json
COPY --from=build /app/pnpm-lock.yaml /app/pnpm-lock.yaml

RUN npm install -g pnpm
EXPOSE ${PORT}

CMD ["pnpm", "server:ssr"]
