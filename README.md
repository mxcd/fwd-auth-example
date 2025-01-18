# fwd-auth-example

## Context
This repo demonstrates the traefik forward auth functionality and how to create a custom forward auth service.  
The custom forward auth service is written in TypeScript and uses the express framework.

The `docker-compose.yml` bootstraps a compose network with traefik and whoami as services.  

## Usage
To install dependencies:

```bash
bun install
```

To run the forward auth service:

```bash
bun run index.ts
```

To run the compose network:

```bash
docker compose up
```

The application will be available at `http://localhost:8080` and the forward auth service itself will be available at `http://localhost:3000`.  
