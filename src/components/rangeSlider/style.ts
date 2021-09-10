import styled from "styled-components";

interface IProps {
  slides: number;
}

interface divProps {
  mediaLength: number;
  slides: number;
  isHover: boolean;
}

export const Wrapper = styled.div`
  /* text-align: center; */
  /* margin: 10px; */
  margin: 10px calc(3em / ${(props: IProps) => props.slides});
`;
export const MainDiv = styled.div`
  background-color: #0e1318;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 315px;
  /* overflow-x: hidden; */
  /* overflow-y: hidden; */
  display: grid;
  grid-template-columns: repeat(${(props: divProps) => props.slides}, auto);
  grid-gap: ${(props: divProps) =>
    props.slides === 3 && props.mediaLength === 3 ? "0px" : "10px"};
  /* padding: 30px 30px 0; */
  /* margin: auto; */
  /* padding: 10px; */
  border-radius: 10px;
  .leftSlide {
    transition: 1s;
    left: -535px;
    position: absolute;
    width: 50%;
    height: 400px;
    background: blue;
  }
  .rightSlide {
    transition: 1s;
    right: -535px;
    position: absolute;
    width: 50%;
    height: 400px;
    background: blue;
  }

  .slide {
    position: absolute;
    left: 0px;
    width: 50%;
    height: 400px;
    background: blue;
    transition: 1s;
    z-index: 1000;
  }
  .slide1 {
    position: absolute;
    right: 0px;
    width: 50%;
    height: 400px;
    background: blue;
    transition: 1s;
    z-index: 1;
  }
  h3,
  h2 {
    color: white;
    margin: 0;
    padding: 0px;
  }
  .fade {
    padding: ${(props: divProps) =>
      props.slides === 3 && props.mediaLength === 3 ? "0px" : "10px"};
    -webkit-animation-name: fade;
    -webkit-animation-duration: 1.5s;
    animation-name: fade;
    animation-duration: 1.5s;
  }
  img:hover {
    cursor: zoom-in;
  }
  .noData {
    color: white;
    text-align: center;
    font-size: 3vw;
    font-weight: bold;
    margin: 130px auto;
    width: 100%;
  }
  @keyframes fade {
    from {
      opacity: 0.4;
    }
    to {
      opacity: 1;
    }
  }

  @media screen and (max-width: 460px) {
  }
`;

export const ButtonsDiv = styled.div`
  display: inline-flex;
  justify-content: space-evenly;
  white-space: nowrap;
  width: 100%;
  margin: 10px;
  .button {
    padding: 0 15px;
    height: 40px;
    font-size: 24px;
    text-align: center;
    cursor: pointer;
    outline: none;
    color: #fff;
    background-color: #04aa6d;
    border: none;
    border-radius: 5px;
    /* box-shadow: 0 9px #999; */
  }
  .button:hover {
    background-color: #3e8e41;
  }
  .button:active {
    background-color: #3e8e41;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
  .rangebutton {
    padding: 0 20px;
    height: 40px;
    font-size: 24px;
    text-align: center;
    cursor: pointer;
    outline: none;
    color: #fff;
    background-color: #04aa6d;
    border: none;
    border-radius: 5px;
  }
  .rangebutton:hover {
    background-color: #3e8e41;
  }
`;
export const ActionDiv = styled.div<IProps>`
  text-align: "center";
  .prev,
  .next {
    cursor: pointer;
    position: absolute;
    top: 32%;
    width: auto;
    padding: 16px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
    /* z-index: 1; */
  }
  .next {
    right: calc(9% / ${(props) => props.slides});
    border-radius: 3px 0 0 3px;
  }
  .prev {
    left: calc(68% / ${(props) => props.slides});
    border-radius: 3px 0 0 3px;
  }
  .prev:hover,
  .next:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;
