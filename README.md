# spyroplate

Welcome to my boilerplate. It's pretty minimal and not very well maintained. Use at your own risk

---------------------

## Installing

Start by running 
```npm i``` 
to install all dependencies

You will also need `mongodb` on your machine so head [here](https://docs.mongodb.com/manual/administration/install-community/) for instructions on how to install it.

Once it's installed, run `mkdir localdb` to create your DB folder. You can choose whatever name / directory you want but if it's located inside the codebase, make sure you add it to the `.gitignore`.

---------------------

## Running locally

You'll need 3 different processes to run.

### 1. MongoDB

`mongod --dbpath {your path here}`

### 2. Server

`npm run server`

### 3. Client

`npm run client`


