import { PropsWithChildren, useRef } from "react";

const ActionButton = ({ children}: PropsWithChildren<{}>) => {
  const btnFillRef = useRef<HTMLDivElement>(null);

  const animateBtnFill = (translateY: number, duration: number) => {
    requestAnimationFrame(() => {
      if (btnFillRef.current) {
        btnFillRef.current.animate(
          {
            transform: `translate(-50%, ${translateY}%)`,
          },
          { duration, fill: "forwards", easing: "ease" }
        );
      }
    });
  };

  const handleMouseEnter = () => {
    animateBtnFill(50, 0);
    animateBtnFill(-50, 850);
  };

  const handleMouseLeave = () => {
    animateBtnFill(-150, 850);
  };

  return (
    <button
      className="btn"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={btnFillRef} className="btn-fill" />
      <div className="btn-content">{children}</div>
    </button>
  );
};

export default ActionButton;
