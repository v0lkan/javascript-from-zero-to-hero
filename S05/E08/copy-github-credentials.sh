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

pscp.pssh -h pssh-hosts -v -r -x "-i ./volkan-north-cal.pem" \
/home/ec2-user/.ssh/github_rsa /home/ec2-user/.ssh

pscp.pssh -h pssh-hosts -v -r -x "-i ./volkan-north-cal.pem" \
/home/ec2-user/.ssh/github_rsa.pub /home/ec2-user/.ssh/github_rsa.pub

pscp.pssh -h pssh-hosts -v -r -x "-i ./volkan-north-cal.pem" \
/home/ec2-user/.ssh/config /home/ec2-user/.ssh/config

pscp.pssh -h pssh-hosts -v -r -x "-i ./volkan-north-cal.pem" \
/home/ec2-user/.ssh/known_hosts /home/ec2-user/.ssh/known_hosts
