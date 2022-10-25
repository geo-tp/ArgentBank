import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/auth";
import { userReducer } from "./reducers/user";

export default configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
});
