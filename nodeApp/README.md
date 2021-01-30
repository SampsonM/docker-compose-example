Build docker app 

```
docker build -t node-docker .
```

Running express app in watch mode.

```
docker run -d -p 3031:9090 -v $(pwd):/app node-docker
```
