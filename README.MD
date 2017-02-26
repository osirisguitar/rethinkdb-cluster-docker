# Demonstration of how to set up a cluster for RethinkDB in Docker

## Get started

1) 
    $:>docker-compose build && docker-compose run

2) Go into the rethink ui (http://localhost:8081), add a database called `clustertest` and a table called `importantData`. Add a document containing anything into this table.

Now you can start terrorizing the system.

Kill a rethink server:

    $:>docker-compose stop rethinkdb2

You can kill two servers and the test app should continue working nicely. The app complains about not being able to access all servers in the cluster, but all DB operations are operational.

If you kill three servers you have less than half a cluster, so it will go offline.

Restart a rethink server:

    $:>docker-compose start rethinkdb2

No matter how many of the server containers are down, they will all start and join the cluster.