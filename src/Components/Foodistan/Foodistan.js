import React, { useState } from "react";
import "./Foodistan.css";
import one from "./Media/1thousand.jpeg";
import two from "./Media/2Bhadrakali.jpeg";
import three from "./Media/3Fort.webp";
import four from "./Media/4Ramappa.jpeg";
import warangal from "./Media/warangal2.jpeg";

function Foodistan() {
  const [backgroundImage, setBackgroundImage] = useState(warangal);

  const handleHover = (image) => {
    setBackgroundImage(image);
  };

  const handleLeave = () => {
    setBackgroundImage(warangal);
  };

  return (
    <div
      className="foodistan"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1 className="tour-head"> Telangana Tourism Attraction</h1>
      <div className="boxes">
        <div
          onMouseEnter={() => handleHover(one)}
          onMouseLeave={handleLeave}
          className="common-place"
        >
          <h1>Thousand Pillar Temple</h1>
          <p>
            Hyderabad - Warangal Hwy,
            <br />
            Raganna Darwaja,
            <br />
            Brahmanawada, Hanamkonda,
            <br />
            Telangana 506001
          </p>{" "}
        </div>
        <div
          onMouseEnter={() => handleHover(two)}
          onMouseLeave={handleLeave}
          className="common-place"
        >
          <h1>Sri Bhadrakali Devastanam</h1>
          <p>
            Tadkamalla Village,
            <br />
            Warangal,
            <br />
            Telangana 506007
          </p>
        </div>
        <div
          onMouseEnter={() => handleHover(three)}
          onMouseLeave={handleLeave}
          className="common-place"
        >
          <h1>Warangal Fort</h1>
          <p>
            Mathwada,
            <br /> Warangal,
            <br />
            Telangana 506001
          </p>
        </div>
        <div
          onMouseEnter={() => handleHover(four)}
          onMouseLeave={handleLeave}
          className="common-place"
        >
          <h1>Ramappa Temple</h1>
          <p>
            Nandi Mandapam,
            <br />
            Mulugu,
            <br />
            Telangana 506345
          </p>
        </div>
      </div>
    </div>
  );
}

export default Foodistan;
