import { configureStore } from "@reduxjs/toolkit";
import balanceReducer from "./balance/balance";

const store = configureStore({
    reducer: {
        balance: balanceReducer,
    },
});

export default store;