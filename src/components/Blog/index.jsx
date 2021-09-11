/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import styled from "styled-components";
// import { Link } from "react-scroll";
import profile from "../../assets/profile.png";
// import Button from "../Button";
import { LogoSVG } from "../../utils/svgComponent";
import { RangeSlider } from "../rangeSlider";

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  margin: 10px 0;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  /* padding: 4em; */
  /* background: #dfd9d0; */
  border: 4px solid #f4edea;
  border-radius: 4px;
  background: linear-gradient(-45deg, #ffffff, #ce6e3f, #e9c0ac, #ffffff);
  background-size: 400% 400%;
  position: fixed;
  top: 0;
  right: 1em;
  left: 1em;
  /* width: 100%; */
  height: 100%;

  /**** Sections */
  .headSection {
    position: fixed;
    top: 0;
    right: 1em;
    left: 1em;
    /* width: 100%; */
    /* background: antiquewhite; */
  }
  .contentSection {
    position: fixed;
    top: 11.6em;
    right: 1em;
    left: 1em;
    height: calc(100% - 200px);
    overflow-y: auto;
  }

  .summary {
    height: auto;
    display: inline-flex;
    flex-direction: row;
    justify-content: start;
    margin: 20px;
    padding: 16px 20px;
    text-align: justify;
    border-radius: 5px;
    box-shadow: 1px 2px 3px 0px red;
  }
  .componentSummary {
    display: flex;
    height: auto;
    margin: 10px;
    padding: 0px;
    text-align: justify;
    border-radius: 5px;
    box-shadow: 1px 2px 3px 0px red;
  }
  .summaryData > p {
    margin: 0;
  }
  .summaryTitle {
    margin: 10px 0;
    text-transform: capitalize;
    color: #717db3;
    text-align: left;
  }
  .summaryData {
    /* font-family: "ProximalNova"; */
    color: #838383;
    font-weight: normal;
    font-size: 4vh;
  }
  .summaryData > p > a {
    color: #ce6e3f;
    cursor: pointer;
  }
  .summary > img {
    border-radius: 50%;
    height: 300px;
    padding: 0 60px;
    float: left;
  }
  .skillSummary {
    height: auto;

    margin: 20px;
    padding: 16px 20px;
    border-radius: 5px;
    box-shadow: 1px 2px 3px 0px red;
  }
  .skillWrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
  .sidebar {
    width: 20%;
  }
  .contentBox {
    width: 80%;
  }
  .boxTitle {
    margin: 10px 0;
    text-transform: capitalize;
    color: #717db3;
    text-align: center;
  }
`;

const Header = styled.div`
  width: 100%;
  height: 55px;
  width: 100%;
  height: auto;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  .nav-wrapper {
    width: 100%;
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
    background-color: #fff;
  }

  .grad-bar {
    width: 100%;
    height: 5px;
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    -webkit-animation: gradbar 15s ease infinite;
    -moz-animation: gradbar 15s ease infinite;
    animation: gradbar 15s ease infinite;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  }

  /* NAVIGATION */

  .navbar {
    display: grid;
    grid-template-columns: 1fr 0.02fr;
    align-items: center;
    height: 50px;
    overflow: hidden;
    background: #f0f8ff73;
    /* background: linear-gradient( 
-45deg,#23bcc1,#87dedb,#f5fcfc,#ffffff); */
    background-size: 400% 400%;
  }

  .navbar label {
    height: 40px;
    color: black;
    line-height: 2;
    width: auto;
    justify-self: start;
    margin-left: 20px;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: copy;
  }

  .navbar ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(5, 0fr);
    grid-gap: 40px;
    justify-self: end;
    text-transform: uppercase;
    /* margin-right: 20px; */
    margin: 0 20px 0 0;
    cursor: pointer;
  }
  .nav-item {
    padding: 13px 20px;
    /* background: transparent; */
  }
  .nav-active {
    padding: 13px 20px;
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    border-radius: 5px;
    font-weight: bold;
  }
  .nav-item a {
    color: #000;
    font-size: 0.9rem;
    font-weight: 400;
    text-decoration: none;
    transition: color 0.3s ease-out;
    font-family: system-ui;
    font-weight: bold;
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .nav-item a:hover {
    color: #3498db;
  }
  /* MOBILE MENU & ANIMATION */

  .menu-toggle .bar {
    width: 25px;
    height: 3px;
    background-color: #3f3f3f;
    margin: 5px auto;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  .menu-toggle {
    justify-self: end;
    margin-right: 25px;
    display: none;
    z-index: 1;
  }

  .menu-toggle:hover {
    cursor: pointer;
  }

  #mobile-menu.is-active .bar:nth-child(2) {
    opacity: 0;
  }

  #mobile-menu.is-active .bar:nth-child(1) {
    -webkit-transform: translateY(8px) rotate(45deg);
    -ms-transform: translateY(8px) rotate(45deg);
    -o-transform: translateY(8px) rotate(45deg);
    transform: translateY(8px) rotate(45deg);
  }

  #mobile-menu.is-active .bar:nth-child(3) {
    -webkit-transform: translateY(-8px) rotate(-45deg);
    -ms-transform: translateY(-8px) rotate(-45deg);
    -o-transform: translateY(-8px) rotate(-45deg);
    transform: translateY(-8px) rotate(-45deg);
  }

  /* KEYFRAME ANIMATIONS */

  @-webkit-keyframes gradbar {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @-moz-keyframes gradbar {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes gradbar {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  /* Media Queries */

  /* Mobile Devices - Phones/Tablets */

  @media only screen and (max-width: 720px) {
    .features {
      flex-direction: column;
      padding: 50px;
    }

    /* MOBILE HEADINGS */

    h1 {
      font-size: 1.9rem;
    }

    h2 {
      font-size: 1rem;
    }

    p {
      font-size: 0.8rem;
    }

    /* MOBILE NAVIGATION */

    .navbar ul {
      display: flex;
      flex-direction: column;
      position: fixed;
      justify-content: start;
      top: 50px;
      background-color: #fff;
      width: 100%;
      height: calc(100vh - 55px);
      transform: translate(-101%);
      text-align: center;
      overflow: hidden;
    }

    .navbar li {
      padding: 15px;
    }

    .navbar li:first-child {
      margin-top: 50px;
    }

    .navbar li a {
      font-size: 1rem;
    }

    .menu-toggle,
    .bar {
      display: block;
      cursor: pointer;
    }

    .mobile-nav {
      transform: translate(0%) !important;
    }
  }
`;
const LogoDiv = styled.div`
  margin: 10px auto;
  text-align: center;
`;

const slides = [
  {
    id: 1,
    isVideo: true,
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    // src: "https://images.unsplash.com/photo-1422568374078-27d3842ba676?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
  {
    id: 2,
    isVideo: false,
    src: "https://i.pinimg.com/originals/2c/1d/b1/2c1db1248b475e8ea7ff1bb534fa8884.jpg",
    // src: "https://images.unsplash.com/photo-1422568374078-27d3842ba676?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
  {
    id: 3,
    isVideo: false,
    src: "https://wallpaperaccess.com/full/3985814.jpg",
    // src: "https://images.unsplash.com/photo-1422568374078-27d3842ba676?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
  {
    id: 4,
    isVideo: false,
    src: "https://i0.wp.com/zeeoii.com/wp-content/uploads/2020/08/Amazing-Nature-4K-Wallpapper-3840-x-2160-8.jpg?resize=1536%2C864&ssl=1",
    // src: "https://images.unsplash.com/photo-1422568374078-27d3842ba676?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
  {
    id: 5,
    isVideo: false,
    src: "https://images.unsplash.com/photo-1422568374078-27d3842ba676?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
  {
    id: 6,
    isVideo: false,
    src: "https://images.unsplash.com/photo-1422568374078-27d3842ba676?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
  {
    id: 7,
    isVideo: false,
    src: "https://images.unsplash.com/photo-1422568374078-27d3842ba676?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
  {
    id: 8,
    isVideo: false,
    src: "https://i.picsum.photos/id/243/536/354.jpg?hmac=LfqhpnBszg-pS8BQHemVFexSLyoiFYP8Pw14oAiPpE4",
  },
];
const Blog = (props) => {
  const [active, setActive] = useState(false);
  const [blogContent, setBlogContent] = useState("about");

  const renderSwitch = (param) => {
    switch (param) {
      case "skils":
        return (
          <div id="skils" className="skillSummary">
            <h2 className="summaryTitle">Skils</h2>
            <div className="skillWrapper">
              <div>Col one</div>
              <div>Col Two</div>
              <div>Col Three</div>
              <div>Col Four</div>
            </div>
          </div>
        );
      case "experience":
        return (
          <div id="experience" className="summary">
            <h2 className="summaryTitle">experience</h2>
          </div>
        );
      case "contact":
        return (
          <div id="contact" className="summary">
            <h2 className="summaryTitle">Contact</h2>
          </div>
        );
      case "component":
        return (
          <div id="contact" className="componentSummary">
            <div className="sidebar">
              <h2 className="boxTitle">component</h2>
              <ul>
                <li>RangeSlider</li>
              </ul>
            </div>
            <div className="contentBox">
              <RangeSlider
                autoSlideDelay={2000}
                autoSlide={false}
                media={slides}
                slideRange={3}
              />
            </div>
          </div>
        );
      default:
        return (
          <div id="summary" className="summary">
            <img src={profile} alt="My Profile" />
            <div className="summaryData">
              <h2 className="summaryTitle">Intro</h2>
              <p>
                I’m a <b>Front-End</b> Developer with <b>5+</b> year of
                experience located in Pune India. I have a serious passion for
                UI effects, animations and creating intuitive, dynamic user
                experiences. <br />
                Well-organised person, problem solver, independent employee with
                high attention to detail. Interested in the entire frontend
                spectrum and working on ambitious projects with positive people.
                <br />
                <a onClick={() => setBlogContent("contact")}>
                  Let’s make something special.
                </a>
                <br />
              </p>
            </div>
          </div>
        );
    }
  };

  const menuList = ["about", "skils", "experience", "contact", "component"];

  return (
    <Wrapper>
      <div className="headSection">
        <LogoDiv>
          <LogoSVG height="40px" width="100px" />
        </LogoDiv>
        <Title>Yogesh Satale</Title>
        <Header>
          <div className="nav-wrapper">
            <div className="grad-bar" />
            <nav className="navbar">
              <label>
                mobile: <b>+918623836848 </b>
                mail: <b> satale.yogesh88@gmail.com</b>
              </label>

              <div
                onClick={() => setActive(!active)}
                className={active ? "menu-toggle is-active" : "menu-toggle"}
                id="mobile-menu"
              >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </div>
              <ul
                className={
                  active ? "mobile-nav nav no-search" : "nav no-search"
                }
              >
                {menuList.map((item) => (
                  <li
                    className={item === blogContent ? "nav-active" : "nav-item"}
                  >
                    <a onClick={() => setBlogContent(item)}>{item}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="grad-bar" />
          </div>
        </Header>
      </div>
      <div className="contentSection">{renderSwitch(blogContent)}</div>
    </Wrapper>
  );
};

export default Blog;
