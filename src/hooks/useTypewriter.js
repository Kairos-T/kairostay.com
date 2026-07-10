import {useEffect, useState} from "react";

// Cycles through `strings`: types each one, holds, deletes, then moves on.
// A single-item array is typed once and left on screen.
const useTypewriter = (
    strings,
    {typeSpeed = 85, deleteSpeed = 40, holdDelay = 2200, startDelay = 400} = {}
) => {
    const [text, setText] = useState("");

    useEffect(() => {
        let index = 0;
        let length = 0;
        let deleting = false;
        let timer;

        const tick = () => {
            const current = strings[index];
            length += deleting ? -1 : 1;
            setText(current.slice(0, length));

            let delay = deleting ? deleteSpeed : typeSpeed;
            if (!deleting && length === current.length) {
                if (strings.length === 1) return; // type once, keep it
                deleting = true;
                delay = holdDelay;
            } else if (deleting && length === 0) {
                deleting = false;
                index = (index + 1) % strings.length;
                delay = typeSpeed * 3;
            }
            timer = setTimeout(tick, delay);
        };

        timer = setTimeout(tick, startDelay);
        return () => clearTimeout(timer);
    }, [strings, typeSpeed, deleteSpeed, holdDelay, startDelay]);

    return text;
};

export default useTypewriter;
