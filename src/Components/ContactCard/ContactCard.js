import React from "react";
import call from "./Sweets.png";
import "./ContactCard.css";

import { MdOutlineWhatsapp, MdOutlineLocationOn } from "react-icons/md";
import { GoMail } from "react-icons/go";

function ContactCard() {
  return (
    <div>
      {" "}
      <div className="container-fluid bg-[#f1feef]">
        <div className="contact-content row">
          <div className="col-md-8 contact-right bg-[#3c5b4c]">
            <h1 className="contact-heading">
              Order authentic sweets for a traditional family gathering!
            </h1>
            <button className="contact-btn">Contact Us</button>
          </div>
          <div className="col-md-4 p-0">
            <img src={call} alt="" className="popup-image" />
          </div>
        </div>
      </div>
      <div className="contact-us-section">
        <h1 className="text-[40px] my-[40px]">Contact us</h1>
        <p>
          For reservations, availability and any other queries, please feel free
          to contact us on
        </p>
        <div className="flex my-[30px] text-[24px]">
          <div className="flex align-items-center gap-[10px] whatsapp pr-[20px]">
            {" "}
            <MdOutlineWhatsapp />
            <span>hello@ishtaa.in</span>
          </div>
          <div className="flex align-items-center gap-[10px] pl-[20px]">
            {" "}
            <GoMail />
            <span>+91 7815863006</span>
          </div>
        </div>
        <MdOutlineLocationOn className="text-[26px] mb-[5px]" />
        <p>
          5-10-173, Vasantha Chambers, Fateh Maidan Lane, Band Colony,
          Basheerbagh,
          <br /> Hyderabad, Telangana 500004, India
        </p>
        <button className="contact-btn2">Get Directions</button>
      </div>
    </div>
  );
}

export default ContactCard;
