import { createStore } from "easy-peasy";
import { tripFilterModel } from "./models/tripFilterModel";
import { authModel } from "./models/authModel";

export const store = createStore({
  tripFilter: tripFilterModel,
  auth: authModel,
});
