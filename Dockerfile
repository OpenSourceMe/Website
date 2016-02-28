FROM mhart/alpine-node

ADD . /

RUN npm install

EXPOSE 3000
CMD ["npm", "start"]