import { configureStore } from "@reduxjs/toolkit";
import { boardReducer } from "../../pages/game/model";

export const mainStore = configureStore({
    reducer: {
        board: boardReducer,
    },
});