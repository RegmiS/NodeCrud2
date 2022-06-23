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
- If it gives an error that a program is already running on that port, had to do:
```bash
sudo kill $(sudo lsof -t -i:5000)
```
  - -i is whatever port is assigned in the .env file
(this solution did not end up working, ended up switching the connection to port 7000)

#### Fix for connecting to mongodb - unable to start the database error
```bash
sudo chown -R mongodb:mongodb /var/lib/mongodb
sudo chown mongodb:mongodb /tmp/mongodb-27017.sock    
sudo service mongod restart
```

#### Routing
After running the app using npm run dev, at this stage, I was able to do a post request in Postman
with post and at http://localhost:7000/api/v1
with the input in body of:
```json
{
  "title":"test of post"
}
```
