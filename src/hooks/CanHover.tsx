import { useEffect, useState } from "react"

export default function useCanHover() {
    const [canHover, setCanHover] = useState(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia("(hover: hover) and (pointer:fine)")
        setCanHover(mediaQuery.matches)

        const handler = (e: MediaQueryListEvent) => setCanHover(e.matches)
        mediaQuery.addEventListener("change", handler)
        return () => mediaQuery.removeEventListener("change", handler)
    }, []);

    return canHover;
}    