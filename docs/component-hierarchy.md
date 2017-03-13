#Component Hierarchy

###AppContainer
* AuthFormContainer
* MainContainer
* SearchPageContainer
* SpotsShowContainer
* MyTripsContainer

###AuthFormContainer

* AuthForm Component

###MainContainer

* NavbarComponent
<!-- * SearchbarComponent -->
* DestinationsIndexComponent
 * DestinationsIndexItem
* SpotsIndexComponent
 * SpotsIndexItem

###SearchPageContainer

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

| Path                  | Component            |
| --------------------- | -------------------- |
| "/"                   | "App"
| "/sign-up"            | "AuthFormContainer"  |
| "/sign-in"            | "AuthFormContainer"  |
| "/main"               | "MainContainer"      |
| "/search-page"        | "SearchPageContainer"    |
| "/spots-show/:spotId" | "SpotsShowContainer" |
| "/my-trips"           | "MyTripsContainer"   |
