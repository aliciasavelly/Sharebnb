#Component Hierarchy

###AuthFormContainer

* AuthForm Component

###MainContainer

* Navbar
* Searchbar
* DestinationsIndexComponent
 * DestinationsIndexItem
* SpotsIndexComponent
 * SpotsIndexItem

###SearchContainer

* Navbar
* Filterbar
* GoogleMapsAPI
* SpotsIndexComponent
 * SpotsIndexItem

###SpotsShowContainer

* Navbar
* SpotSummaryComponent
* SpotBookingComponent
* SpotDetailComponent
* ReviewsIndexComponent
 * ReviewsIndexItem

###MyTripsContainer

* Navbar
* TripsIndexComponent
 * TripsIndexItem

#Routes

| Path                  | Component            |
| --------------------- | -------------------- |
| "/sign-up"            | "AuthFormContainer"  |
| "/sign-in"            | "AuthFormContainer"  |
| "/main"               | "MainContainer"      |
| "/search"             | "SearchContainer"    |
| "/spots-show/:spotId" | "SpotsShowContainer" |
| "/my-trips"           | "MyTripsContainer"   |
