# Component Hierarchy

### AppContainer

* AuthFormContainer
* MainContainer
* SpotsSearchContainer
* SpotsShowContainer
* MyTripsContainer
* MyListingsContainer

### AuthFormContainer

* AuthForm Component

### MainContainer

* NavbarComponent
* DestinationsIndexComponent
  * DestinationsIndexItem
* SpotsIndexComponent
  * SpotsIndexItem
* BONUS: SearchbarComponent

### SpotsSearchContainer

* NavbarComponent
* FilterbarComponent
* GoogleMapsAPI
* SpotsIndexComponent
  * SpotsIndexItem

### SpotsShowContainer

* NavbarComponent
* SpotSummaryComponent
* SpotBookingComponent
* SpotDetailComponent
* ReviewsIndexComponent
  * ReviewsIndexItem

### SpotsCreateContainer

* NavbarComponent
* MUST ADD HERE

### MyTripsContainer

* NavbarComponent
* TripsIndexComponent
  * TripsIndexItem

### MyListingsContainer

* NavbarComponent
* ListingsIndexComponent
* ListingsIndexItem

# Routes

| Path             | Component              |
| ---------------- | ---------------------- |
| "/"              | "App"                  |
| "/main"          | "MainContainer"        |
| "/signup"        | "AuthFormContainer"    |
| "/login"         | "AuthFormContainer"    |
| "/spots-search"  | "SpotsSearchContainer" |
| "/spots/:spotId" | "SpotsShowContainer"   |
| "/new-listing"   | "SpotsCreateContainer" |
| "/my-trips"      | "MyTripsContainer"     |
| "/my-listings"   | "MyListingsContainer"
