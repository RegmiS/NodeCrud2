# NodeCrud2
Another crud app for node, used to learn some more packages, and this time MongoDb

### Uses Mongodb, to replicate the project, make sure to have Mongodb installed

#### Make sure to make a .env file with 
```env
PORT = 5000
DATABASE_URL = mongodb://localhost/databasename
```

Ran into a problem where it displayed that
```
Error: Cannot find module 'express'
```
Solved this error by doing npm i --save express dotenv helmet cors


#### Run script by doing npm run dev

