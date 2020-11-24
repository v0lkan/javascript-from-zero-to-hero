#!/usr/bin/env bash

#
#  \
#  \\,
#   \\\,^,.,,.                    “Zero to Hero”
#   ,;7~((\))`;;,,               <zerotohero.dev>
#   ,(@') ;)`))\;;',    stay up to date, be curious: learn
#    )  . ),((  ))\;,
#   /;`,,/7),)) )) )\,,
#  (& )`   (,((,((;( ))\,
#

git pull

if [ $? -ne 0 ]; then
  echo "ERROR: failed to pull from git"
  exit 1
fi

yarn install

if [ $? -ne 0 ]; then
  echo "ERROR: failed to install dependencies"
  exit 1
fi

yarn build

if [ $? -ne 0 ]; then
  echo "ERROR: failed to build the project"
  exit 1
fi

# Don’t forget to do a
# `sudo npm install pm2@latest -g`
# to install pm2 globally first.
pm2 stop z2hjs-df
pm2 delete z2hjs-df
pm2 start bin/serve.sh --name z2hjs-df

if [ $? -ne 0 ]; then
  echo "ERROR: failed to start the server"
  exit 1
fi

echo "Everything is awesome!"
exit 0
