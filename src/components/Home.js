import { BrowserRouter } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import img from "../images/home_background.png";
import React from "react";

function Home() {
  return (
    <BrowserRouter>
      <div
        className="bg-top pb-36 sm:pb-54 sm:bg-100"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="flex flex-row justify-between text-yellow-500 px-8 py-5 text-xs font-poppins font-thin sm:px-48">
          <div className="flex flex-row gap-2 items-center">
            {/* svg_mail */}
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
            <a href="mailto:youremail@gmail.com">youremail@gmail.com</a>
          </div>
          <div className="flex flex-row gap-2 items-center">
            {/* svg_phone */}
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
            <a href="tel:+046123467"> (046) 123 - 4567</a>
          </div>
        </div>

        <div className="bg-white/5 flex flex-row justify-between px-12 py-4 font-crimson-text sm:px-48 items-center">
          <p className="text-4xl text-yellow-500">BARBERS</p>
          <div className="sm:hidden ">
            {/* svg_burger */}
            <button className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="40px"
                viewBox="0 0 24 24"
                width="40px"
                fill="#FFFFFF"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
              </svg>
            </button>
          </div>
          <ul className="hidden sm:flex flex-row text-white gap-4 font-poppins text-xs ">
            <li className="hover:text-yellow-500">
              <HashLink smooth to="#">
                Home
              </HashLink>
            </li>
            <li className="hover:text-yellow-500 ">
              <HashLink smooth to="#about">
                About Us
              </HashLink>
            </li>
            <li className="hover:text-yellow-500">
              <HashLink smooth to="#services">
                Services
              </HashLink>
            </li>
            <li className="hover:text-yellow-500">
              <HashLink smooth to="#testimonials">
                Testimonials
              </HashLink>
            </li>
            <li className="hover:text-yellow-500">
              <HashLink smooth to="#our-team">
                Our Team
              </HashLink>
            </li>
            <li className="hover:text-yellow-500">
              <HashLink smooth to="#contact-us">
                Contact Us
              </HashLink>
            </li>
          </ul>
        </div>

        <div className="text-yellow-500 pt-60 pb-32 px-12 sm:px-48">
          <h1 className="font-crimson-text text-white text-4xl py-4 sm:flex flex-row gap-2 sm:text-5xl">
            Quality Barber <span className="block">Shop</span>
          </h1>
          <p className="text-xs text-white w-72 sm:w-96">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
          <div className="flex flex-col gap-2 pt-6 text-white sm:flex sm:flex-row sm:text-sm">
            <button className="border-2 rounded-full h-10 w-40 bg-transparent sm:w-32 hover:bg-yellow-500 hover:border-yellow-500">
              LEARN MORE
            </button>
            <button className="border-2 rounded-full h-10 w-40 bg-transparent sm:w-32 hover:bg-yellow-500 hover:border-yellow-500">
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Home;
