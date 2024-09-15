import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FliterState {
    stops: number;
    airlines: number;
    selectedStop: number | null;
    selectedAirline: number | null;
}

const initialState: FliterState = {
    stops: 0,
    airlines: 0,
    selectedStop: null,
    selectedAirline: null
}

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setStops(state, action: PayloadAction<number>) {
            state.selectedStop = action.payload;
        },
        setAirline(state, action: PayloadAction<number>) {
            state.selectedAirline = action.payload;
        },
    },

});

export const { setStops, setAirline } = filterSlice.actions;
const filterReducer = filterSlice.reducer
export default filterReducer;