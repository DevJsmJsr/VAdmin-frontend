FROM node:19.4.0-alpine

# Install AWS CLI
RUN apk add --no-cache \
        python3 \
        py3-pip \
    && pip3 install --upgrade pip \
    && pip3 install awscli \
    && rm -rf /var/cache/apk/*

RUN apk --no-cache update \
    && apk add git \
    && apk --no-cache add g++ make bash zlib-dev libpng-dev \
    && rm -fr /var/cache/apk/*

# Set working directory
WORKDIR /usr/src/app

# Add file for dependencies required
COPY ./package.json /usr/src/app

# Add to `/usr/src/app/node_modules/.bin` $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# Install dependencies
RUN npm install

# Add all files to container
COPY . /usr/src/app

# Start app
CMD ["npm", "run", "dev"]