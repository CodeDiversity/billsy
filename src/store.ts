import { combineReducers, configureStore } from "@reduxjs/toolkit";

// Define the root reducer by combining individual reducers
const rootReducer = combineReducers({
  // Add individual reducers here as they are created
});

// Create the main store instance
export const store = configureStore({
  reducer: rootReducer,
});

// Setup function for creating store instances (useful for testing)
export function setupStore(preloadedState = {}) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

// Type definitions for TypeScript
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];