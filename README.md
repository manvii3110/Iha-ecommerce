# Iha-ecommerce

This is the Iha's sub branch web App which is currently in development phase

## Requirements

-   Python
-   Django, which can be installed using following command:
    ```
    .\> pip install django
    ```
-   Node js

## Usage

Run the following command to start server

```
.\> npm run start
```

And goto http://127.0.0.1:8000/ to look the web App

## For developement

First you will need to install all packages required for develpoment

```
.\> npm install
```

**If you want to frontend of the website**

If you want to compile the scripts for development, then you'll need to run the following line of code

```
.\> npm run dev
```

> Note: `npm run dev` only recompiles the files which were present, when this line of code was runned. And it recompiles when loaded files are saved.

**If you want to build files for production**

run the following command to make files ready for production.

```
.\> npm run build
```

> Note: This is will only compress the js and css files in .\frontend\static\frontend\\\*_\\_.css(or).js .
