import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import expireReducer from "redux-persist-expire";
import storage from "redux-persist/lib/storage";
import getRootReducer from "./reducers";

const rootPersistConfig = {
  key: `adexocean:seller`,
  storage,
  blacklist: ["User"],
};
const userPersistConfig = {
  key: "adexocean",
  storage,
  transforms: [expireReducer("user", { expireSeconds: 3600 * 24, expiredState: null })],
};

export let store = null;

const configureStore = (preloadedState) => {

  const middlewares = [];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];

  const persistedReducer = persistReducer(rootPersistConfig, getRootReducer(userPersistConfig));

  const isDevelopment = process.env.NODE_ENV === "development";
  if (isDevelopment && typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__) {
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true, traceLimit: 25 }));
  }

  const composedEnhancers = compose(...enhancers);

  store = createStore(persistedReducer, preloadedState, composedEnhancers);
  let persistor = persistStore(store);

  return { store, persistor };
};

export default configureStore;
