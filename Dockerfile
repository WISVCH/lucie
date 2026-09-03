FROM node:24-bookworm AS builder
WORKDIR /src

# Keep dependencies in a separate layer so source-only changes reuse them.
COPY web/package.json web/yarn.lock ./
RUN yarn install --frozen-lockfile --non-interactive

COPY web/ ./
RUN yarn build

FROM ghcr.io/wisvch/nginx
COPY --from=builder /src/build /srv/
