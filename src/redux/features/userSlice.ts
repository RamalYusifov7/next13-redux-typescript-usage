import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
  user: {
    name: string;
    email: string;
  };
};

const initialState = {
  user: {
    name: "",
    email: "",
  },
} as initialStateType;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (_, action) => {
      return initialState;
    },
  },
});

export const { logout, setUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
