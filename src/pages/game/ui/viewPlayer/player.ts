import { useRef } from "react";
import { TPlayer } from "../../model/board.slice";


export const Player = (ctx: CanvasRenderingContext2D, player: TPlayer) => {
    const id = useRef(player.id);

    


    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.arc(player.pos.x, player.pos.y, 20, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath()
}