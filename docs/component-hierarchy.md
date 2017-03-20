# Component Hierarchy

### AppContainer

* AuthFormContainer
* MainContainer
* SpotsIndexContainer
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

### SpotsIndexContainer

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
* ReviewFormContainer

### ReviewFormContainer
* ReviewFormComponent

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

| Path                    | Component              |
| ----------------------- | ---------------------- |
| "/"                     | "App"                  |
| "/main"                 | "MainContainer"        |
| "/signup"               | "AuthFormContainer"    |
| "/login"                | "AuthFormContainer"    |
| "/spots-search"         | "SpotsIndexContainer"  |
| "/spots/:spotId"        | "SpotsShowContainer"   |
| "/spots/:spotId/review" | "ReviewFormContainer"  |
| "/new-listing"          | "SpotsCreateContainer" |
| "/my-trips"             | "MyTripsContainer"     |
| "/my-listings"          | "MyListingsContainer"  |
