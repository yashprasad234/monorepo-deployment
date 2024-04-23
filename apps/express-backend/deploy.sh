#!/bin/bash
export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v21.7.3/bin

cd /home/ubuntu/monorepo-deployment
git pull origin master
yarn install
yarn build
pm2 stop express
pm2 start npm --name "express" -- run "start:express" 
