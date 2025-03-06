import { RootState } from "@/Redux/store";
import { IStudent } from "@/types/global";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
const initialState: IStudent = {};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IStudent>) => {
      console.log("from auth slice", action.payload);
      return { ...state, ...action.payload };
    },
    removeUser: (state) => {
      state = {};
      return state;
    },
  },
});

export const retrievUuser = (state: RootState) => state.auth;

export const { setUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
