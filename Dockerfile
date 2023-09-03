FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY . /app
WORKDIR /app

FROM base AS prod-deps
RUN  pnpm install --prod --frozen-lockfile

FROM base AS build
RUN  pnpm install --frozen-lockfile
RUN pnpm run build


FROM base
WORKDIR /app
COPY --from=build /app/package*.json ./
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=prod-deps /app/node_modules ./node_modules
ENV NODE_ENV=production
EXPOSE 3000
CMD [ "pnpm", "start" ]
