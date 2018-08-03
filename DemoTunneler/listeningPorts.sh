# this is EXCELLENT for trying to find why your port is closed
lsof -n -i4TCP:$PORT | grep LISTEN
