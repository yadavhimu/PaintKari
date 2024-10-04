import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Established in 2023 in the heart of Uttar Pradesh, India, Paintkari
            is a celebration of Indian artistry and craftsmanship. Our passion
            lies in transforming everyday essentials into extraordinary pieces
            through the magic of handpainting.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">Explore</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">Get in Touch</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91-6393418797</li>
            <li>kaushalsuperna@gmail.com.com</li>

          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          {" "}
          Copyright 2024@ deltasoftsystem.in - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
