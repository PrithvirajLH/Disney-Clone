import { configureStore } from "@reduxjs/toolkit";
import useReducer from "../features/users/userSlice";
import movieReducer from "../features/movies/movieSlice";
export default configureStore({
  reducer: {
    user: useReducer,
    movie: movieReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
