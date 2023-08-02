import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import pcBuilderReducer from "./features/pcBuilder/pcBuilderSlice";

export default configureStore({
  reducer: {
    pcBuilder: pcBuilderReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
