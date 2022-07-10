import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { UserReducer } from "./user_reducer";

const getRootReducer = (userPersistConfig) => {
  return combineReducers({
    App: persistReducer(
      userPersistConfig,
      combineReducers({
        User: UserReducer,
      })
    ),
  });
};

export default getRootReducer;
