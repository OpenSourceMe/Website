FROM mhart/alpine-node
WORKDIR /app
ADD . /app
EXPOSE 3000
CMD ["npm", "start"]