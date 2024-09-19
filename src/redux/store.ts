import { createStore } from "easy-peasy";
import { authModel } from "./models/authModel";
import { searchOneWayFlightModel } from "./models/searchOneWayFlightModel";
import { tripFilterModel } from "./models/tripFilterModel";

export const store = createStore({
  tripFilter: tripFilterModel,
  auth: authModel,
  searchFlight: searchOneWayFlightModel,
});
