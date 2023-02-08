FROM node:16.18.1-buster

LABEL version="1.0"
LABEL description="Ojwang is an application that make it seamless for investors to track their CBK bond investments"
LABEL maintainer = ["leroythomas051@gmail.com"]

WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
# COPY package.json /app
# COPY pnpm-lock.yaml /app

COPY  ["package.json", "pnpm-lock.yaml","./"]

RUN npm install -g pnpm
RUN pnpm install

COPY . .
RUN pnpm build

# start app
CMD ["pnpm", "dev"]