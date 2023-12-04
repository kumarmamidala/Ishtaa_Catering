import React from "react";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "./../Media/footer-log.avif";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div
      className="px-4 py-8 footer-part1"
      //   style={{ backgroundColor: "#006D77" }}
    >
      <footer className="p-8 font-[Philosopher]">
        <section>
          <div className="sm:flex flex-row">
            <div className="basis-1/4 m-4 space-y-6">
              <h1 className="text-2xl my-2 text-white footer-heading">
                <img src={logo} alt="" />
              </h1>
              <div className="text-white font-light text-lg">
                <p>
                  Pandora is known for customizable bracelets and high-quality,
                  hand-finished jewelry pieces.
                </p>
              </div>
              <div className="footer-icons-section">
                <BsFacebook className="footer-icon" />
                <BsInstagram className="footer-icon" />
                <BsTwitter className="footer-icon" />
              </div>
            </div>

            <div className="basis-1/4 m-4 space-y-6 ">
              <h1 className="text-2xl my-2 text-white footer-heading">
                CATEGORIES
              </h1>
              <div className="text-white font-light text-lg ">
                <p>Rings</p>
                Earrings
                <p>Bracelets</p>
                <p>Pendants</p>
                <p>Diamonds</p>
                <p>All collections</p>
              </div>
            </div>
            <div className="basis-1/4 m-4 space-y-6">
              <h1 className="text-2xl my-2 text-white footer-heading">
                QUICK LINKS
              </h1>
              <div className="text-white font-light  text-lg">
                <ul>
                  <li>
                    <Link to="/AboutUs">About Us</Link>
                  </li>
                  <li>
                    <Link to="/ContactUs">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/">FAQ's</Link>
                  </li>
                  <li>
                    <Link to="/">Shipping & Return Policy</Link>
                  </li>
                  <li>
                    <Link to="/">Inquiry for wholesale</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="basis-1/4 m-4 space-y-6">
              <h1 className="text-2xl my-2 text-white footer-heading">
                GET THE NEWS LETTER
              </h1>
              <div className="text-white font-light text-lg">
                <p>
                  Stay up-to-date. Subscribe to our newsletter for the latest
                  updates.
                </p>
                <br />
                <div className="flex flex-row bg-white py-1 rounded-md text-black">
                  <input
                    type="text"
                    placeholder="Enter Your Email"
                    className="p-2 border-0 w-full focus:outline-none"
                  />
                  <button className="mr-3" style={{ color: "#006D77" }}>
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-8 py-2 text-white font-light text-xl">
          <p className="text-center">
            Developed by{" "}
            <a href="#" rel="noreferrer" target="_blank">
              <b>
                <u>Kranthi Kumar M</u>
              </b>
            </a>
          </p>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
