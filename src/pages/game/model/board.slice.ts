import { createSlice } from "@reduxjs/toolkit";
import { TVector2 } from "./types";

export type TPlayer = {
    id: number;
    pos: TVector2;
}

export type TBullet = {
    playerId: number;
    pos: TVector2;
}

export type TBoardState = {
    players: TPlayer[];
    bullets: TBullet[];
}


const initialState: TBoardState = {
    players: [],
    bullets: [],
}

const boardSlice =  createSlice({
    name: "boardSlice",
    initialState,
    reducers: {
        setPlayerCoords(state, action) {
            state.players[action.payload.id] = { ...action.payload.coords };
        },
        addPlayer(state, action) {
            state.players.push({
                id: state.players.length,
                pos: { x: action.payload.x, y: action.payload.y }
            })
        },
        addBullet(state, action) {
            state.bullets.push({
                playerId: action.payload.id,
                pos: { x: action.payload.x, y: action.payload.y }
            });
        },
    }
})

export const {
    setPlayerCoords,
    addPlayer,
    addBullet,
} = boardSlice.actions;

export default boardSlice.reducer;