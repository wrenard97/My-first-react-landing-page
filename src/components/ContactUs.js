import React from "react";

function ContactUs() {
  return (
    <div
      className="text-center py-20 font-poppins text-gray-700 sm:px-44"
      id="contact-us"
    >
      <p className="font-crimson-text text-xl">CONTACT US</p>
      <p className="font-crimson-text text-3xl text-yellow-500 pb-10">
        MAKE AN APPOINTMENT
      </p>
      <div className="sm:flex sm:flex-row">
        <div className="px-12 sm:w-1/2">
          <p className="text-left pb-10 text-xs">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
          <div className="flex flex-col sm:flex sm:flex-row sm:justify-between">
            <div className="flex flex-col gap-4 pb-10 text-xs">
              <p className="font-bold pb-2">Contact Information:</p>
              <div className="flex items-center gap-4">
                <svg
                  version="1.2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 9 13"
                  width="9"
                  height="13"
                >
                  <defs>
                    <image
                      width="9"
                      height="13"
                      id="img1"
                      href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAANCAMAAABM3rQ0AAAAAXNSR0IB2cksfwAAAGxQTFRF2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg+zge4AAAACR0Uk5TAGPN789me/+CJM56ySqI8u6MrOqrkq5VqZQzOtTaQcwZHIqkWqYkmwAAAFhJREFUeJwtzEcOgDAMRNGBABN6r6Fz/zviBP7CepItA/B8FYSQIto0EJNJmpE5CpayqFijoRK17NCTwziRMxZ+GWB12OTEOO32obzgYYFTdDlB88bfY8cL8FwDwfAFjb8AAAAASUVORK5CYII="
                    />
                  </defs>
                  <style></style>
                  <use href="#img1" x="0" y="0" />
                </svg>
                <p>123 Your Address here</p>
              </div>
              <div className="flex items-center gap-4">
                <svg
                  version="1.2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 9 13"
                  width="9"
                  height="13"
                >
                  <defs>
                    <image
                      width="9"
                      height="13"
                      id="img2"
                      href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAANCAMAAABM3rQ0AAAAAXNSR0IB2cksfwAAAHhQTFRF2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUgttI+VgAAACh0Uk5TKdHplOfULZ7/jqG1sHaPd6yzwFQAS727bme4TLZtjKigoyzV89PXMOrHD5QAAABUSURBVHicjYvXDYAwEMUehHKhXELvPcD+G1LEAFiy5B8Dli2EcFwPPpGUkihAGMXMrHSCNMsfihJV/VbT/q7v7Ur0elCjGqYEMxHx7YJ1Mxvv5jgv3AQIs2sXcYYAAAAASUVORK5CYII="
                    />
                  </defs>
                  <style></style>
                  <use href="#img2" x="0" y="0" />
                </svg>
                <p>(046) 123 - 456</p>
              </div>
              <div className="flex items-center gap-4">
                <svg
                  version="1.2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 12 8"
                  width="12"
                  height="8"
                >
                  <defs>
                    <image
                      width="12"
                      height="8"
                      id="img3"
                      href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAICAMAAAD6Ou7DAAAAAXNSR0IB2cksfwAAAJBQTFRF2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUgHEPCYQAAADB0Uk5TPuj/8epBnWfs72iauzG6vbjyzEenqUbKpgCgoaL9iHfYVlPXeYX+lXt8k2CC+/heN2zqSgAAAF1JREFUeJwlzNkaQlAAReFtnQaRctAgGVJKit7/7XzxX62rJTmYCYulVmuXycbzxTbY/XsfhMgSxQkcjiesDJzTS5ZewSinKKtbfX80PMWrnQfvDn2+9HYYbE/zGwHBPgWZ3/pIFAAAAABJRU5ErkJggg=="
                    />
                  </defs>
                  <style></style>
                  <use href="#img3" x="0" y="0" />
                </svg>
                <p>youremail@gmail.com</p>
              </div>
            </div>

            <div className="flex flex-col gap-4 pb-10 text-xs sm:justify-between">
              <p className="font-bold pb-2">Working Hours:</p>
              <div className="flex justify-between sm:gap-4">
                <p>Monday to Friday</p>
                <p>9 AM - 6 PM</p>
              </div>
              <div className="flex justify-between">
                <p>Saturday</p>
                <p>9 AM - 5 PM</p>
              </div>
              <div className="flex justify-between">
                <p>Sunday</p>
                <p>9 AM - 12 NN</p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-12 sm:px-0 sm:w-1/2">
          <p className="pb-8 text-left text-xs">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua..
          </p>
          <form className="flex flex-col gap-2 text-xs">
            <div className="flex flex-row gap-1 h-8 justify-between">
              <input
                type="text"
                className="w-2/4 pl-2 border-2 border-gray-300"
                placeholder="Name"
              />
              <input
                type="text"
                className="w-2/4 pl-2 border-2 border-gray-300"
                placeholder="Phone Number"
              />
            </div>
            <div className="flex flex-col gap-2">
              <input
                className="h-8 pl-2 border-2 border-gray-300"
                type="text"
                placeholder="Email Address"
              />
              <input
                className="pb-20 pt-4 pl-2 border-2 border-gray-300"
                type="text"
                placeholder="Message"
              />
            </div>
            <div className="self-end">
              <button className="bg-yellow-500 rounded-full w-40 h-10 text-white">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
