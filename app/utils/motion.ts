export const slideInFromTop = {
    hidden: { y: -100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            duration: 1.25,
            delay: 0.2
        }
    }
};

export const slideInFromLeft = (delay: number) => {
    return {
        hidden: { x: -100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 1.25,
                delay,
            },
        },
    };
};

export const slideInFromRight = (delay: number) => {
    return {
        hidden: { x: 100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 1.25,
                delay,
            },
        },
    };
};