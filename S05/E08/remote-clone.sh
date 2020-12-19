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

pssh -h pssh-hosts -t 100 -p -I \
-x "-i ./volkan-north-cal.pem" \
< pssh-nightly-clone-command