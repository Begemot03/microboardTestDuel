import { useEffect, useState } from "react";
import { TVector3 } from "../../pages/game/model";

export type TMouseCoordHandler = (e: MouseEvent) => void;

const useMouseCoords = (global: boolean = false) : [TVector3, TMouseCoordHandler] => {
    const [mouseCoords, setMouseCoords] = useState<TVector3>({ x: 0, y: 0 });

    const mouseHandler: TMouseCoordHandler = (e: MouseEvent) => {
        //@ts-ignore
        const rect = e.target.getBoundingClientRect();

        setMouseCoords({
            x: e.clientX - rect.x,
            y: e.clientY - rect.y,

        });
    };

    useEffect(() => {
        if(global) window.addEventListener("mousemove", mouseHandler);

        return () => {
            if(global) window.removeEventListener("mousemove", mouseHandler);
        };
        
    }, [global])

    return [ mouseCoords, mouseHandler ];
}  

export {
    useMouseCoords
};