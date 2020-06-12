#!/bin/bash

# USER=qwer
# REPO=0963e10c-780e-4546-a12b-730378712459

echo "http://gitlab.ppojin.com/${USER}/${REPO}.git"
git clone "http://gitlab.ppojin.com/${USER}/${REPO}.git"

echo ${REPO}
cd $REPO
pwd
mvn -Duser.home=/var/maven test