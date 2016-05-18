FROM mhart/alpine-node
WORKDIR /app
ADD . /app
# alternatively
# RUN npm install
# TODO: work out how to cache npm installs with docker-compose
EXPOSE 3000
CMD ["npm", "start"]