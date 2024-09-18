import { createStore } from "easy-peasy";
import { tripFilterModel } from "./models/tripFilterModel";
import { oneWayFilterModel } from "./models/oneWayFilterModel";

export const store = createStore({
  tripFilter: tripFilterModel,
  oneWayFilter: oneWayFilterModel,
});
