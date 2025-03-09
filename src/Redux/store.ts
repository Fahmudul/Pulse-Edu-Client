import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
} from "redux-persist";
import authReducer from "./Features/Auth/AuthSlice";
import newsReducer from "./Features/News/News.slice";
import storage from "./storage";
import { baseApi } from "./api/baseApi";
export const authPersistConfig = {
  key: "auth",
  storage,
};
export const newsPersistConfig = {
  key: "news",
  storage,
};
const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
const persistedNewsReducer = persistReducer(newsPersistConfig, newsReducer);
export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: persistedAuthReducer,
      [baseApi.reducerPath]: baseApi.reducer,
      news: persistedNewsReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(baseApi.middleware),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
