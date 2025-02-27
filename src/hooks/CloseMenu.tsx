import { useEffect, RefObject } from "react";

const CloseMenu = (ref: RefObject<HTMLElement | null>, callback: () => void) => {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent | TouchEvent | PointerEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('pointerdown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside); 

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('pointerdown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [ref, callback]);
};

export default CloseMenu;
