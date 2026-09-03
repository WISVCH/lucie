FROM node:24-bookworm AS builder
WORKDIR /src
COPY /web .
RUN yarn
RUN yarn build

FROM ghcr.io/wisvch/nginx
COPY --from=builder /src/build /srv/