import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  updates: [],
};

// Define the reducer
const updateSlice = createSlice({
  name: "update",
  initialState,
  reducers: {
    setUpdate: (state, action) => {
      state.updates = action.payload;
    },
  },
});

// Export the action (to set/change the state)
export const { setUpdate } = updateSlice.actions;

// Export the reducer (state / store)
export default updateSlice.reducer;
