function debounce(func, delay) {
    let timeoutId;

    return function (...args) {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
}

const handleResize = () => {
    console.log("Window resized!");
};

const debouncedResize = debounce(handleResize, 500);

setInterval(() => {
    debouncedResize();
}, 100);
