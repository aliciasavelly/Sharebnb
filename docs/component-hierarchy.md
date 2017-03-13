#Component Hierarchy

###AppContainer
* AuthFormContainer
* MainContainer
* SpotsSearchContainer
* SpotsShowContainer
* MyTripsContainer

###AuthFormContainer

* AuthForm Component

###MainContainer

* NavbarComponent
* DestinationsIndexComponent
 * DestinationsIndexItem
* SpotsIndexComponent
 * SpotsIndexItem
* BONUS: SearchbarComponent

###SpotsSearchContainer

* NavbarComponent
* FilterbarComponent
* GoogleMapsAPI
* SpotsIndexComponent
 * SpotsIndexItem

###SpotsShowContainer

* NavbarComponent
* SpotSummaryComponent
* SpotBookingComponent
* SpotDetailComponent
* ReviewsIndexComponent
 * ReviewsIndexItem

###MyTripsContainer

* NavbarComponent
* TripsIndexComponent
 * TripsIndexItem

#Routes

| Path             | Component              |
| ---------------- | ---------------------- |
| "/"              | "App"                  |
| "/sign-up"       | "AuthFormContainer"    |
| "/sign-in"       | "AuthFormContainer"    |
| "/main"          | "MainContainer"        |
| "/spots-search"  | "SpotsSearchContainer" |
| "/spots/:spotId" | "SpotsShowContainer"   |
| "/my-trips"      | "MyTripsContainer"     |
