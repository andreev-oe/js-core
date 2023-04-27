const once = fn => {
    let once = true
    return function () {
        if (once) {
            once = false
            fn()
        }
    }
};

// const f = () => console.log('hi!');
// const onceF = once(f);
// onceF(); // hi!
// onceF(); // nothing