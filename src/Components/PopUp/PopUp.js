import React from "react";
import "./PopUp.css";
import Popup from "reactjs-popup";
import { MdPhone, MdPhoneCallback } from "react-icons/md";

import call from "./Media/callcenter.png";

function PopUp() {
  return (
    <div className="popup-part">
      {/* <button className="popup-btn"></button> */}
      <Popup trigger={<button className="popup-btn">PopUp</button>} modal>
        {(close) => (
          <div className="justify-end">
            <a
              className="close text-4xl absolute mr-2 cursor-pointer !text-black"
              onClick={close}
            >
              X
            </a>
            <div className="container-fluid">
              <div className="popup-content  row">
                <div className="col-md-6 p-0">
                  <img src={call} alt="" className="popup-image" />
                </div>
                <div className="col-md-6 popup-right">
                  <h1 className="heading">CALL TO SPEAK</h1>
                  <p className="paragraph">Live concierge available 24/7</p>
                  <button className="send-msg-btn">
                    <MdPhone />
                    968-324-1254
                  </button>
                  <div className="hr-or-div">
                    <hr />
                    <p className="or">Or</p>
                  </div>
                  <h1 className="heading">REQUEST A FREE CALL BACK</h1>
                  <p className="paragraph">
                    Get a call from travel expert and free advice within minutes
                  </p>
                  <div className="flex call-input">
                    <h1 className="w-[20%] country-code">+91</h1>
                    <input
                      className="w-[70%] p-[4px]"
                      placeholder="Enter Phone"
                    ></input>
                    <button className="w-[10%] p-[4px] bg-[#044b61]">
                      <MdPhoneCallback className="text-[white] m-auto" />
                    </button>
                  </div>
                  <p className="paragraph text-[grey]">
                    One of our Travel Agents will call you back within the next
                    <span className="font-bold"> few minutes.</span> By
                    submitting your phone number you agree to be contracted for
                    travel information via automated phone and text messages.
                    Your consent to receive such messages is not a condition of
                    purchase. <span className="font-bold">No spam &</span>
                    <span className="text-[black] font-bold">
                      100% Data safety.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
}

export default PopUp;
