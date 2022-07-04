import { configureStore } from "@reduxjs/toolkit";
import { colorSlice, InputSlice } from "./slices";

export default configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ["input/total"],
        // Ignore these field paths in all actions
        ignoredActionPaths: ["meta.arg", "payload.predicate"],
        // Ignore these paths in the state
        ignoredPaths: ["InputSlice.currentResult"],
      },
    }),
  reducer: {
    colorSlice: colorSlice.reducer,
    InputSlice: InputSlice.reducer,
  },
});
