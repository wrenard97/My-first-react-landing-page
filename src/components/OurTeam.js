import React from "react";
import teamOne from "../images/team-img1.png";
import teamTwo from "../images/team-img2.png";
import teamThree from "../images/team-img3.png";

function OurTeam() {
  return (
    <div
      className="bg-gray-200 pt-24 pb-28 px-12 text-center font-poppins text-gray-600 text-sm sm:px-44"
      id="our-team"
    >
      <div>
        <p className="font-crimson-text text-lg">PROFESSIONAL</p>
        <p className="font-crimson-text text-4xl text-yellow-500 pb-4">
          OUR TEAM
        </p>
      </div>

      <div className="sm:flex sm:flex-row sm:justify-items-center sm:gap-12">
        <div className="pb-6 hover:shadow-2xl sm:pb-0">
          <img src={teamOne} alt="" className="sm:h-96 sm:w-80" />
          <div className="border-x-2 border-b-2 border-gray-300">
            <p className="text-lg font-bold text-black pt-6">PAUL NARCH</p>
            <p className="pb-6">BARBER</p>
          </div>
        </div>

        <div className="pb-6 hover:shadow-2xl sm:pb-0">
          <img src={teamTwo} alt="" className="sm:h-96 sm:w-80" />
          <div className="border-x-2 border-b-2 border-gray-300">
            <p className="text-lg font-bold text-black pt-6">STEVEN JOSEPHIN</p>
            <p className="pb-6">BARBER</p>
          </div>
        </div>

        <div className="pb-6 hover:shadow-2xl sm:pb-0">
          <img src={teamThree} alt="" className="sm:h-96 sm:w-80" />
          <div className="border-x-2 border-b-2 border-gray-300">
            <p className="text-lg font-bold text-black pt-6">ALEXANDER DAVID</p>
            <p className="pb-6">SHAVER</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
