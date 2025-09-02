import { createSlice } from "@reduxjs/toolkit";

export interface BalanceState {
    balance: number;
}

const initialState: BalanceState = {
    balance: 10000,
};

export const balanceSlice = createSlice({
    name: "balance",
    initialState,
    reducers: {
        setBalance: (state, action) => {
            state.balance = action.payload;
        },
    },
});

export const { setBalance } = balanceSlice.actions;

export default balanceSlice.reducer;