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

| Path                     | Component              |
| ------------------------ | ---------------------- |
| "/"                      | "App"                  |
| "/main"                  | "MainContainer"        |
| "/login"                 | "SessionFormContainer" |
| "/signup"                | "SessionFormContainer" |
| "/spots-search"          | "SpotsIndexContainer"  |
| "/spots/:spotId"         | "SpotShowContainer"    |
| "/spots/:spotId/reviews" | "ReviewFormContainer"  |
| "/new-listing"           | "SpotCreateContainer"  |
| "/edit-listing"          | "SpotCreateContainer"  |
| "/my-trips"              | "MyTripsContainer"     |
| "/my-listings"           | "MyListingsContainer"  |
