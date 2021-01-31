## Docker Compose Example

This app uses a docker compose file to run a Vue app, Express Server, and MongoDB instace.


- Express app runs the `npm run start` script which runs using a nodemon server.

- Vue app runs the `npm run serve` script which runs the vue cli server command.

- Mongo DB instance runs using a base image of the latest version of MongoDB.

#
## `To run apps`


`Build docker images:`

This uses the dockerfile/image associated with each app to build a snapshot of what will be run using the `up` command.

```
docker-compose build
```


`Run docker containers based on images:`

After building snapshots of our apps we can now run these as containers

```
docker-compose up
```