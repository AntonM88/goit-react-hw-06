import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import filtersSlice from "./filtersSlice";

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersSlice,
  },
});
export default store;
