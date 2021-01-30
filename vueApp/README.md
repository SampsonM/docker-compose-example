# vue-docker-example

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

## Docker image

Build docker app 

```
docker build -t docker-vue-app .
```

Run docker vue app in watch mode

```
docker run -d -p 8080:8080 -v $(pwd):/app docker-vue-app
```

// build with no cache
docker-compose build --no-cache

// start the services
docker-compose up

// list the services
docker-compose ps

// list the containers
docker ps

// stop services
docker-compose stop
