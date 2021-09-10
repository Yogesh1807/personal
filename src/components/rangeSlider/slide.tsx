import React from "react";

interface Imedia {
  id: number;
  isVideo: boolean;
  src: string;
}

interface ISlideProps {
  slide: Imedia;
  isShowImage: boolean;
  zoomInImage: string;
  zoomIn: Function;
  isHover: boolean;
}

export const Slide = (props: ISlideProps) => {
  const { slide, isShowImage, zoomInImage, zoomIn, isHover } = props;

  return (
    <>
      <div className="fade" key={slide.id}>
        {Object.keys(slide).length > 0 ? (
          <>
            {slide.isVideo ? (
              <video height={270} width={"100%"} controls>
                <source src={slide.src} type="video/mp4" />
              </video>
            ) : (
              <img
                data-testid="imageid"
                onClick={() => zoomIn(slide)}
                height={270}
                width={"100%"}
                alt={"imageOne"}
                src={slide.src}
              />
            )}
            <h3 style={{ textAlign: "center" }}>{slide.id}</h3>
          </>
        ) : (
          <div className="noData">No data</div>
        )}
      </div>
      {isShowImage && (
        <div
          data-testid="zoominView"
          onClick={() => zoomIn(slide)}
          style={{
            background:
              "RGBA(0,0,0,.5) url(" + zoomInImage + ") no-repeat center",
            backgroundSize: "contain",
            width: "100%",
            height: "100%",
            position: "fixed",
            zIndex: 10000,
            top: "0",
            left: "0",
            cursor: "zoom-out",
          }}
          className="zoomIn"
        />
      )}
    </>
  );
};
