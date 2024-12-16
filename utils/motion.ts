export const slideInFromLeft = (delay: number) => ({
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { delay } },
});

export const slideInFromRight = (delay: number) => ({
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { delay } },
});

export const slideInFromTop = {
    hidden: { y: -100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            duration: 1.5
        }
    }
}; 