FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY . /app
WORKDIR /app
RUN  pnpm install --frozen-lockfile
RUN pnpm run build
ENV NODE_ENV=production
EXPOSE 3000
CMD [ "pnpm", "start" ]