import img from "../images/luna.jpg";
import { memo } from "react";

const JANK_DELAY = 100;

export default memo(function DisplayImage({ filterStyle }) {
  const expensiveRender = () => {
    const start = performance.now();
    while (performance.now() - start < JANK_DELAY) {}
    return null;
  };

  return (
    <>
      {expensiveRender()}
      <img src={img} alt="luna" style={{ filter: filterStyle }} />
      <p>Last Render: {Date.now()}</p>
    </>
  );
});
