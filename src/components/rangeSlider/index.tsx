/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useState, useEffect } from "react";

import update from "immutability-helper";
import { AiOutlineCaretRight, AiOutlinePause } from "react-icons/ai";

import { Slide } from "./slide";
import { Wrapper, MainDiv, ActionDiv, ButtonsDiv } from "./style";

import GreenIMg from "../../images/green.png";
import OrangeIMg from "../../images/orange.png";
import WhiteIMg from "../../images/white.png";

interface Imedia {
  id: number;
  isVideo: boolean;
  src: string;
}

interface rangeSliderProps {
  media: Imedia[];
  autoSlide: boolean;
  autoSlideDelay: number;
  slideRange: number;
}

interface IallState {
  firstSlide: number;
  lastSlide: number;
  activeSlides: Imedia[];
  zoomInImage: string;
  isShowImage: boolean;
  template: {
    slideOne: Function;
  };
}
interface ISlideProps {
  slide: Imedia;
  isShowImage: boolean;
  zoomInImage: string;
  zoomIn: Function;
  isHover:boolean;
}
export const RangeSlider: FC<rangeSliderProps> = (props) => {
  const {
    media = [
      {
        id: 1,
        isVideo: false,
        src: OrangeIMg,
      },
      {
        id: 2,
        isVideo: false,
        src: WhiteIMg,
      },
      {
        id: 3,
        isVideo: false,
        src: GreenIMg,
      },
    ],
    autoSlide = false,
    autoSlideDelay = 3000,
    slideRange = 3,
  } = props;
  //   const [range, setRange] = useState(slideRange);
  const [autoPlay, setAutoPlay] = useState(autoSlide);
  const [isHover, setIsHover] = useState(false);

  const defaultMedia = media.slice(0, slideRange);

  const [currentAllState, setCurrentAllState] = useState<IallState>({
    firstSlide: 0,
    lastSlide: slideRange,
    activeSlides: defaultMedia,
    zoomInImage: "",
    isShowImage: false,
    template: {
      slideOne: ({ ...paramas }: ISlideProps) => <Slide {...paramas} />,
    },
  });

  const {
    firstSlide,
    lastSlide,
    activeSlides,
    zoomInImage,
    isShowImage,
    template,
  } = currentAllState;

  useEffect(() => {
    if (autoPlay) {
      let interval = setTimeout(() => {
        next();
      }, autoSlideDelay);
      return () => clearTimeout(interval);
    }
  }, [currentAllState, autoPlay]);

  const next = () => {
    let slides = [];
    let length = media.length;
    let first = firstSlide + slideRange; // 3 - 6
    let last = lastSlide + slideRange; // 6 - 9
    if (first >= length) {
      first = first % length;
    }
    if (last >= length) {
      last = last % length;
      let arr1 = media.slice(first, length); // getting first items
      let arr2 = media.slice(0, last); // getting last items
      slides = arr1.concat(arr2);
    } else {
      slides = media.slice(first, last);
    }
    let temp = update(currentAllState, {
      $merge: { firstSlide: first, lastSlide: last, activeSlides: slides },
    });
    setCurrentAllState(temp);
  };

  const prev = () => {
    let slides = [];
    let length = media.length;
    let first = currentAllState.firstSlide - slideRange; //-3
    let last = currentAllState.lastSlide - slideRange; // -6

    if (last < 0) {
      last = last + length; // 3
    }
    if (first < 0) {
      first = first + length;
      let arr1 = media.slice(first, length);
      let arr2 = media.slice(0, last);
      slides = arr1.concat(arr2);
    } else {
      slides = media.slice(first, last);
    }

    let temp = update(currentAllState, {
      $merge: { firstSlide: first, lastSlide: last, activeSlides: slides },
    });
    setCurrentAllState(temp);
  };

  const zoomIn = (val: Imedia) => {
    let { isShowImage } = currentAllState;
    let temp = update(currentAllState, {
      $merge: { zoomInImage: val.src, isShowImage: !isShowImage },
    });
    setCurrentAllState(temp);
  };
  console.log("props 136=>", props, activeSlides);
  return (
    <Wrapper slides={slideRange}>
      {Object.keys(currentAllState).length > 0 && (
        <MainDiv
          className="mainDiv"
          data-testid="slidediv"
          slides={slideRange}
          mediaLength={media.length}
          isHover={isHover}
        >
          <div
            className={isHover ? "leftSlide" : "slide"}
            // src="http://lorempixel.com/output/cats-q-c-100-100-4.jpg"
            // alt="slide"
          >
            <h2 style={{ textAlign: "right", margin: " 140px 0" }}>Wel &lt;</h2>
          </div>
          <div
            className={isHover ? "rightSlide" : "slide1"}
            // src="http://lorempixel.com/output/cats-q-c-100-100-4.jpg"
            // alt="slide1"
          >
            <h2 style={{ marginLeft: "-3px", margin: " 140px -3px 0" }}>
              &gt; Come
            </h2>
          </div>
          {activeSlides.map((slide) => {
            let args = {
              zoomIn,
              isShowImage,
              zoomInImage,
              slide,
              key: slide.id,
              isHover,
            };
            return template.slideOne({ ...args });
          })}
        </MainDiv>
      )}
      <ButtonsDiv>
        <button
          //   onClick={() => setIsHover(!isHover)}
          title="range"
          className="rangebutton"
        >
          {slideRange}
        </button>
        <button
          onClick={() => setIsHover(!isHover)}
          title="Door"
          className="rangebutton"
        >
          {isHover ? "Close Door" : "Open Door"}
        </button>
        <button className="button" onClick={() => setAutoPlay(!autoPlay)}>
          {!autoPlay ? (
            <AiOutlineCaretRight color="white" title="Play" />
          ) : (
            <AiOutlinePause title="Pause" />
          )}
        </button>
      </ButtonsDiv>
      <ActionDiv slides={slideRange}>
        <label className="prev" data-testid="prevbutton" onClick={prev}>
          &#10094;
        </label>
        <label className="next" data-testid="nextbutton" onClick={next}>
          &#10095;
        </label>
      </ActionDiv>
    </Wrapper>
  );
};
