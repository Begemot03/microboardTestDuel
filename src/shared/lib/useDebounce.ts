import { useRef } from "react";

const useDebounce = (cb: (...args: any[]) => any, ms: number) => {
    const waitRef = useRef(false);

    return (...args: any[]) => {
        if (waitRef.current) return;

        waitRef.current = true;
        cb.apply(null, args);

        setTimeout(() => {
            waitRef.current = false;
        }, ms);
    };
};

export {
     useDebounce
}
