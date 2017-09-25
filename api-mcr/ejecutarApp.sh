sudo forever start --uid "mcr" --append -l /opt/forever/logtail-mcrApp -e /opt/forever/logtail-mcrApp.e -o /opt/forever/logtail-mcrApp.o bin/www

