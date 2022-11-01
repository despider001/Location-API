# Location API

## Environment
Node.js (version >=14.0.0) should be installed

## Installation
1. First of all, spin up the database
```docker-compose up``` <br>

2. Secondly, we need to load the shapefiles to the database. Modify the variables inside `loadShapeFile.py`, and then run it
```python3 loadShapeFile.py``` <br>

3. `cd` into the `API` directory and start the server (The backend server could easily be combined with the docker-comose file)

```npm i``` <br>
```npm run build``` <br>
```npm start```

If `test_shapefile.zip` shape file is loaded properly, the following url would return a GeoJSON response
`http://localhost:3000/delineated-fields?long=11.185365749239793&lat=60.749728158409454`

## *TODOs*

* ### **Comment thoroughly**
Comments are missing in the code

* ### **Implement logging**
Logging is not implemented

* ### **Proper error handling**
Error has to be handled centrally and properly, which is completely missing

* ### **Unit test and API test**

* ### **Request body validation**
Anything that is coming from outside has to validated and different status code has to returned as required. Validation has to handled away from the main code block.

* ### **docker-compose**
Combine the node.js server with the database in docker-compose file, so that we could easily spip-up the app.


### Author
Sadiqur Rahman
