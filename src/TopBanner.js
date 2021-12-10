import { useRef } from "react";
import { useEffect } from "react/cjs/react.development";

const TopBanner = () => {
    const wrapper = useRef();
    const content = useRef();
    let open = true;

    useEffect(() => {
        console.log(wrapper);
        console.log(wrapper.current);
        console.log(wrapper.current.style.height);
    }, []);

    const toggleOpen = () => {
        if (open) {
            wrapper.current.style.height = "0px";
            open = false;
        } else {
            const height = content.current.getBoundingClientRect().height;
            wrapper.current.style.height = `${height}px`;
            open = true;
        }
    };

    return (
        <div class="collapse">
            <button id="btn" onClick={toggleOpen}>
                Click Me
            </button>
            <div
                class="collapse-wrapper"
                ref={wrapper}
                style={{
                    overflow: "hidden",
                    transition: "all 300ms ease-in",
                    border: "1px solid blue",
                }}
            >
                <div
                    class="collapse-content"
                    ref={content}
                    style={{ border: "1px solid red" }}
                >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Mollitia ut explicabo nesciunt minima pariatur saepe eveniet
                    officia ducimus perferendis suscipit?
                </div>
            </div>
        </div>
    );
};

export default TopBanner;
