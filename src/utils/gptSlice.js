import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
  },
  reducers: {
    //wo gpt serch ka jo humne button banaya hai na usko dispatch krne ke lie disptach krebge headermein jake
    toggleGptSerachView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
  },
});
export const { toggleGptSerachView } = gptSlice.actions;

export default gptSlice.reducer;
