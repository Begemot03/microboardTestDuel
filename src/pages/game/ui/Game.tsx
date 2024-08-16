import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TBoardSliceStore, addPlayer, TBullet, TPlayer } from "../model";
import { Player } from "./viewPlayer";

export const Game = () => {
    const [playerX, setPlayerX] = useState(100);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const players = useSelector<TBoardSliceStore>(state => state.board.players) as TPlayer[];
    const bullets = useSelector<TBoardSliceStore>(state => state.board.bullets) as TBullet[];
    const dispatch = useDispatch();

    useEffect(() => {
        if(!canvasRef.current) return;
        
        const ctx = canvasRef.current.getContext("2d");
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        console.log("rerender")

        players.forEach(player => Player(ctx, player));

    }, [players, bullets]);

    const clickHandler = () => {
        dispatch(addPlayer({ x: playerX, y: 200 }))
        setPlayerX(prev => prev + 100);
    }


    return (
        <>
            <canvas 
                ref={canvasRef}
                width={960}
                height={540}
            />
            <button
                onClick={clickHandler}
            >добавить игрока</button>
        </>
    )
}
