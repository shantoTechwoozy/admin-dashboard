import { createStore } from "easy-peasy";
import { tripFilterModel } from "./models/tripFilterModel";

export const store = createStore({
  tripFilter: tripFilterModel,
});
