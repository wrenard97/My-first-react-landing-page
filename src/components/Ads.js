import bgad from "../images/barber-brush-comb-897271.png";
import React from "react";

function Ads() {
  return (
    <div
      class="text-center px-12 py-12 bg-black bg-center"
      style={{ backgroundImage: `url(${bgad})` }}
    >
      <h3 className="font-crimson-text text-xl text-yellow-500 sm:text-3xl">
        GET FLAT 25% DISCOUNT!
      </h3>
      <p className="font-poppins text-white pb-4 text-sm">
        Get Flat 25% Discount on every sunday of December. Use the promo code
        below.
      </p>
      <h3 className="font-crimson-text text-white text-3xl pb-6">#BARBEARDS</h3>
      <button className="text-white bg-yellow-600 rounded-full w-56 h-8 text-sm">
        MAKE AN APPOINTMENT NOW
      </button>
    </div>
  );
}

export default Ads;
