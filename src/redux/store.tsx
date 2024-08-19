import { configureStore } from "@reduxjs/toolkit";
import featureSlice from "./slice/featuresSlice";

export const store = configureStore({
  reducer: {
    features: featureSlice,
  },
});
