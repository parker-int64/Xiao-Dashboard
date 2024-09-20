<div align="center">
    <h1>Xiao Dashboard</h1>
</div>

<div align="center">
  <img src="./doc/img/screenshot.png" width="800" />
</div>

# Setup

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

Prerequisite: NodeJS 18+ 


Project is made with Vue3 + Vite + NaiveUI. 

+ Clone the repo

```Shell
git clone https://github.com/parker-int64/Xiao-Dashboard
```

+ Change working directory

```Shell
cd Xiao-Dashboard
```

+ Install dependencies

```Shell
npm install
```

+ Run project in development mode

```Shell
npm run dev
```

If you want to build the project:

```Shell
npm run build
```

Serve project:

```Shell
npm run preview
```

# Cooperate with Docker ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

+ If you have docker installed, run project in dev mode:

```Shell
docker compose -f ./dev.compose.yaml up --build 
```

+ Stop the dev server

```Shell
docker compose -f ./dev.compose.yaml down
```

+ To serve the static file with docker:

```Shell
docker compose -f ./serve.compose.yaml up --build 
```

+ Stop serving the static files:

```Shell
docker compose -f ./serve.compose.yaml down
```




