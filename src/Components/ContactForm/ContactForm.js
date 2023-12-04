import React from "react";
import { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
  const [showModal] = useState(false);
  const [imgUrls] = useState([]);

  return (
    <div>
      <div class="bg-[#f1feef] pb-[40px]  post-a-bid-part mt-[-80px]">
        <div className="max-w-3xl mx-auto p-3  flex flex-col !items-center justify-center sm:p-12  rounded-md  post-a-bid-box">
          <div className="   text-center mt-[50px] mb-[80px]">
            <h1 className="font-bold text-[45px]  title">
              View our Catering Menu
            </h1>
            <p className="text-[16px] mt-[20px] ">
              We understand the value of food when it comes to family gatherings
              and our specially designed menu that caters any and every family
              gathering brings you the time to add the fun elements you crave
              for in your own functions!
            </p>
          </div>
          <p className="text-left mb-[40px] mr-auto">
            Please Fill the form below and we’ll get in touch with you at the
            earliest.
          </p>
          <form className="flex flex-col  w-full">
            <div className=" w-full">
              <div className="flex space-x-2 mt-[40px]">
                <div className="flex flex-col w-2/4">
                  <label
                    htmlFor="location"
                    aria-required
                    class="heading text-black"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="location"
                    // placeholder="Enter final price"
                    className="w-full input-section"
                  />
                </div>
                <div className="w-2/4">
                  <label htmlFor="mileage" class="heading text-black">
                    Mobile Number
                  </label>
                  <input
                    type="number"
                    min={0}
                    name="mileage"
                    // placeholder="Enter deadline"
                    className="w-full input-section"
                  />
                </div>
              </div>
              <div className="flex space-x-2 mt-[40px]">
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="location"
                    aria-required
                    class="heading text-black"
                  >
                    Email (Optional)
                  </label>
                  <input
                    type="text"
                    name="location"
                    // placeholder="Enter domain name"
                    className="w-full   input-section"
                  />
                </div>
              </div>
              <div className="flex space-x-2 mt-[40px]">
                <div className="flex flex-col w-2/4">
                  <label
                    htmlFor="category"
                    aria-required
                    class="heading text-black"
                  >
                    Catering Date (Optional)
                  </label>
                  <input
                    type="date"
                    id="category"
                    name="category"
                    className="input-section"
                    // placeholder="Enter platform name"
                  ></input>
                </div>
                <div className="w-2/4">
                  <label htmlFor="year" class="heading text-black">
                    Catering Slot (Optional)
                  </label>
                  <input
                    type="text"
                    min={0}
                    name="year"
                    // placeholder="Enter Price"
                    className="w-full input-section"
                  />
                </div>
              </div>

              {/* <div className="w-full">
                <label htmlFor="price" class="heading text-black">
                  Domain Expiry Date
                </label>
                <input
                  type="number"
                  min={0}
                  name="price"
                  placeholder="Enter domain expiry date"
                  className="w-full input-section"
                />
              </div> */}

              <div className="flex space-x-2 mt-[40px]">
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="description"
                    aria-required
                    class="heading text-black"
                  >
                    Message
                    <textarea
                      // placeholder="Enter description"
                      name="description"
                      className="w-full min-h-[100px] p-3 focus:outline-none focus:border-slate-500 mt-1 paragraph input-section"
                    />
                  </label>
                </div>
              </div>
            </div>
            {/* {showModal ? (
              <div className="flex overflow-scroll space-x-2">
                {products.map((item, idx) => (
                  <img
                    src={item.pic}
                    className="w-[248px] aspect-video object-cover"
                  />
                ))}
              </div>
            ) : null} */}

            <button
              type="submit"
              className="  custom-btn main-button w-full mt-[20px]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
