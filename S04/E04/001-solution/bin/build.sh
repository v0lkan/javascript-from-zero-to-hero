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

flow-copy-source ./src ./lib
flow-remove-types ./src -d ./lib --all --pretty
