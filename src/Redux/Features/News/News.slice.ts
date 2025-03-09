import { RootState } from "@/Redux/store";
import { INews } from "@/types/global";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
const initialState: INews = {};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<INews>) => {
      console.log("from news slice", action.payload);
      return { ...state, ...action.payload };
    },
    removeNews: (state) => {
      state = {};
      return state;
    },
  },
});

export const retrievUuser = (state: RootState) => state.auth;

export const { setNews, removeNews } = newsSlice.actions;

export default newsSlice.reducer;