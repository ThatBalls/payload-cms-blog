#! /bin/bash
screen -S payload;
yarn serve;
screen -d payload;