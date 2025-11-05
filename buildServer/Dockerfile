FROM node:25

WORKDIR /app

RUN apt-get update && apt-get install -y git curl \
    && curl -O https://dl.min.io/client/mc/release/linux-amd64/mc \
    && chmod +x mc \
    && mv mc /usr/local/bin

COPY build.sh /app/build.sh
RUN chmod +x /app/build.sh

ENTRYPOINT [ "/app/build.sh" ]