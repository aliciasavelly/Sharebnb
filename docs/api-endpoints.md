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
 * Spots index/search
 * accepts ```check_in``` date, ```check_out``` date, ```destination``` city, ```price_low```, and ```price_high``` query params to sort spots
* ```GET /api/spots/spotID```

###MyTrips

* ```POST api/trips```
* ```GET /api/trips```
* ```DELETE /api/trips```
