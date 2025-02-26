import { useEffect, RefObject } from "react";

const CloseMenu = (ref: RefObject<HTMLElement | null>, callback: () => void) => {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback();
            }
        };

        // شنیدن رویداد کلیک
        document.addEventListener('mousedown', handleClickOutside);
        
        return () => {
            // حذف رویداد وقتی که کامپوننت از صفحه خارج می‌شود
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref, callback]);
};

export default CloseMenu;
