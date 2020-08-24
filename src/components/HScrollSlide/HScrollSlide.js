import React, { useRef, Fragment } from 'react';
import SlideControl, {
  useScrollControls,
} from '../Slider/SlideControl/SlideControl';

function HScrollSlider({ children }) {
  const slider = useRef('');

  const { handleLeftScroll, handleRightScroll } = useScrollControls({
    jump: 1,
  });

  return (
    <div className="h-scroll-slider__parent">
      <div ref={slider} className="flex slider scroll-slider h-scroll-slider">
        {children.map((child) => (
          <Fragment className="h-scroll-slider__child">{child}</Fragment>
        ))}
      </div>
      <SlideControl direction="left" onClick={handleLeftScroll(slider)} />
      <SlideControl direction="right" onClick={handleRightScroll(slider)} />
    </div>
  );
}

export default HScrollSlider;
