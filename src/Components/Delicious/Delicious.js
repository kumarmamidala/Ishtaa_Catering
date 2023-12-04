import React, { useEffect } from "react";
import WOW from "wow.js";
import "fullpage.js/dist/fullpage.css";
import fullpage from "fullpage.js";
import "./Delicious.css";
import pizza from "./pngimg.com - pizza_PNG44092.png";
import Fade from "react-reveal/Fade";

import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
  "programmer",
  "developer",
  "animator",
  "copy writer",
  "designer",
  "marketer",
  "publicist",
  "team",
];

const TEXTS2 = [
  "emails",
  "ads",
  "brands",
  "websites",
  "campaigns",
  "solutions",
];

const MyComponent = () => {
  useEffect(() => {
    // Activate wow.js
    new WOW().init();

    // Apply color to each section from array
    let int = -1;
    const colorArray = [
      "#1abc9c",
      "#c0392b",
      "#9b59b6",
      "#3498db",
      "#f1c40f",
      "#16a085",
    ];

    document.querySelectorAll("section").forEach((section) => {
      int++;
      section.classList.add(`grid-item-${int}`);
      section.style.backgroundColor = colorArray[int];
    });

    // Activate fullpage.js
    new fullpage("#fullpage", {
      scrollBar: false,
      navigation: false,
      navigationTooltips: ["Slide 1", "Slide 2", "Slide 3", "Slide 4"],
      loopBottom: false,
      sectionSelector: "section",
      parallax: true,
    });
  }, []); // Empty dependency array to run the effect only once on mount

  const [index1, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index1) => index1 + 1),
      2000 // every 3 seconds
    );
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id="fullpage">
      {/* Your sections go here */}
      <section>
        <div className="div1 common-div">
          <h1>
            <span className="text-[60px]">[</span>&nbsp;&nbsp;
            Terces&nbsp;&nbsp; <span className="text-[60px]">]</span>
          </h1>
          <p className="my-[20px]">
            A tech company for food and retail businesses
          </p>
          <hr className="w-[400px]" />
          <p className="mt-[20px] text-[grey]">958-326-3214</p>
          <p className="mb-[20px] text-[grey]">support@terces.io</p>
        </div>
      </section>
      <section>
        <div className="div2 common-div">
          <Fade top>
            <h1>You</h1>
          </Fade>
          <Fade bottom>
            <p className="mt-[40px]">are looking for a </p>
            <p className="mt-[40px] team-text">
              [&nbsp;&nbsp;{" "}
              <TextTransition
                springConfig={presets.gentle}
                className="font-['Open_sans'] !inline-block  "
              >
                {TEXTS[index1 % TEXTS.length]}
              </TextTransition>{" "}
              &nbsp;&nbsp;]
            </p>

            <p className="mt-[40px]">to help craft</p>
            <p className="mt-[40px] team-text">
              [&nbsp;&nbsp;{" "}
              <TextTransition
                springConfig={presets.gentle}
                className="font-['Open_sans'] !inline-block  "
              >
                {TEXTS2[index1 % TEXTS2.length]}
              </TextTransition>{" "}
              &nbsp;&nbsp;]
            </p>
          </Fade>
        </div>
      </section>
      <section>
        {" "}
        <div className="div3 common-div">
          <Fade top>
            <h1>We</h1>
          </Fade>
          <Fade bottom>
            <p className="mt-[40px] w-[400px]">
              are a fun and down-to-earth group of people. We also happen to be
              highly capable designers, developers and strategists.
              <br />
              <br />
              For <span className="font-bold">[ 10 ]</span> years, we've worked
              tirelessly to keep our select roster of clients consistently{" "}
              <span className="italic">over the moon.</span>
            </p>
          </Fade>
        </div>
      </section>
      <section>
        {" "}
        <div className="div3 common-div">
          <Fade top>
            <h1>Us</h1>
          </Fade>
          <Fade bottom>
            <p className="mt-[40px] w-[400px]">
              is a powerful word. From here on, us is how we’ll refer to your
              team and ours. Because we’re in this thing together. And sharing a
              vision is key.
              <br />
              <br /> Let’s connect and make exceptional work together.
            </p>
          </Fade>
        </div>
      </section>
      <section>
        {" "}
        <div className="div4 common-div">
          <img src={pizza} alt="" className="pizza-img" />
          <h1 className="mt-[40px]">Keep it simple. </h1>
          <p className="mt-[40px] text-center">
            © 2023 Delicious Simplicity,
            <br /> LLC. 818.850.1705
            <br />
            info@delicious-simplicity.com
          </p>
        </div>
      </section>
    </div>
  );
};

export default MyComponent;
