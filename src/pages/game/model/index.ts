import { Reducer } from "@reduxjs/toolkit";
import { TBoardState } from "./board.slice";

export {
    default as boardReducer,
    setPlayerCoords, addPlayer, addBullet,
} from "./board.slice";

export type { TVector2 } from "./types";

export type TBoardSliceStore = ReturnType<Reducer<{
    board: TBoardState;
}>>

export type {
    TPlayer, TBullet
} from "./board.slice";