#!/bin/bash
IFS=';'; dbHostsArray=($DBCLUSTERHOSTS); unset IFS;
joinString=" "

for dbHost in ${dbHostsArray[*]}
do
  hostExists=`getent hosts $dbHost`

  if [ ! -z "$hostExists" ]
  then
    joinString="$joinString --join $dbHost"
  fi
done

rethinkdb $joinString $RETHINKARGS
