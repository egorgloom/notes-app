import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reducer } from "./slices/notesSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';



const persistConfig = {
  key: 'root',
  storage: storage,
}

const rootReducer = combineReducers({
  task: reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type StoreDispatch = typeof store.dispatch;
export type StoreState = ReturnType<typeof store.getState>;