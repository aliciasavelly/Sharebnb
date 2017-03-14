#API Endpoints

##HTML API

###Root

* ```GET /``` - loads React web app

##JSON API

###Users

* ```POST /api/users```

###Session

* ```POST /api/session```
* ```DELETE /api/session```

###Spots

* ```GET /api/spots```
 * index/search
 * accepts ```check_in``` date, ```check_out``` date, ```destination``` city, ```price_low```, and ```price_high``` query params to sort spots
* ```GET /api/spots/new```
 * new
* ```POST /api/spots```
 * create
* ```GET /api/spots/spotId```
 * show
* ```GET /api/spots/spotId/edit```
 * edit
* ```PATCH /api/spots/spotId```
 * update
* ```DELETE /api/spots/spotId```
 * destroy

###MyTrips

* ```POST api/trips```
* ```GET /api/trips```
* ```DELETE /api/trips```
