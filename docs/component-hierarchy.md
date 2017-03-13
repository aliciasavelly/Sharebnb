#Component Hierarchy

###AuthFormContainer

* AuthForm Component

###MainContainer

* Navbar
* Searchbar
* DestinationsIndex
 * DestinationsIndexItem
* SpotsIndex
 * SpotsIndexItem

###SearchContainer

* Navbar
* Filterbar
* GoogleMapsAPI
* SpotsIndexContainer

###SpotsIndexContainer

* SpotsIndexItem

###SpotsShowContainer

* Navbar
* SpotSummaryComponent
* SpotBookingComponent
* SpotDetailComponent
* ReviewsIndexContainer

###ReviewsIndexContainer

* ReviewsIndexItem

###MyTripsContainer

* Navbar
* TripsIndexContainer

###TripsIndexContainer

* TripsIndexItem

#Routes

| Path                                | Component               |
| ----------------------------------- | ----------------------- |
| "/sign-up"                          | "AuthFormContainer"     |
| "/sign-in"                          | "AuthFormContainer"     |
| "/main"                             | "MainContainer"         |
| "/search"                           | "SearchContainer"       |
| "/main/spots-index"                 | "SpotsIndexContainer"   |
| "/spots-show/:spotId"               | "SpotsShowContainer"    |
| "/spots-show/:spotId/reviews-index" | "ReviewsIndexContainer" |
| "/my-trips"                         | "MyTripsContainer"      |
| "/my-trips/trips-index"             | "TripsIndexContainer"   |
