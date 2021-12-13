import { useRef } from "react";
import { useEffect } from "react/cjs/react.development";

const TopBanner = () => {
  const wrapper = useRef();
  const content = useRef();
  let open = true;

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
    <div class="top_banner">
      <div
        class="collapse-wrapper"
        ref={wrapper}
        style={{
          overflow: "hidden",
          transition: "all 300ms ease-in",
        }}
      >
        <div class="collapse-content" ref={content}>
          <div>
            지금 가입하고 인기상품 <b>100원</b>에 받아가세요!
            <img
              src="https://res.kurly.com/pc/ico/1908/ico_arrow_fff_84x84.png"
              className="bnr_arr"
              alt="top_banner_>"
            />
            <div className="bnr_top">
              <div className="inner_top_close">
                <button
                  id="btn"
                  className="btn_top_bnr"
                  onClick={toggleOpen}
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
