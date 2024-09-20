# Define base image
FROM node:lts-alpine AS base

# set the working direction
WORKDIR /app


# Dev mode
FROM base AS dev

WORKDIR /app

EXPOSE 5173

CMD [ -d "node_modules" ] && npm run dev || npm install && npm run dev


# Production mode
FROM base AS prod

WORKDIR /app

COPY . /app

# Install dependencies
RUN npm install 

# Build the static site.
RUN npm run build

# Serve
FROM prod AS serve
# Expose the port that Docusaurus will run on.
EXPOSE 3000

RUN npm i -g serve

## Run the production server.
CMD [ "serve", "-s", "dist" ]