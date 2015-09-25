#!/bin/bash
curl -k http://www.jardimcriativo.org/subscriptions/ >> sub.txt
git add .
git commit -m $1
git push origin master
