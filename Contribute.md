## Manual Installation
- Install Node.js Locally()
- Clone Repo 
- Install dependencies  (npm install)
-  Start DB locally  
    - docker run  docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
    - Go to neon.tech and create your New db
- change the .env file and update your db credentials
- npx prisma migrate 
- npx prisma generate 
- npm run build 
- npm run start 

## Docker Installation 
- Install docker 
- Start postgress 
    -  docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
- build the images -  `docker build -t user-projects`
- start the image - `docker run -p 3000:3000 user-projects` 

## docker compose install steps 
- install docker , docker-compose 
- Run -  `docker-compose up`





