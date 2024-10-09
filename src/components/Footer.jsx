import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600 text-lg">
            Established in 2023 in the heart of Uttar Pradesh, India, Paintkari
            is a celebration of Indian artistry and craftsmanship. Our passion
            lies in transforming everyday essentials into extraordinary pieces
            through the magic of handpainting.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">Explore</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <Link to={'/'}><li className="text-lg">Home</li></Link>
            <Link to={'about'}><li className="text-lg">About</li></Link>
            <Link to={'contact'}><li className="text-lg">Contact</li></Link>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">Our Product</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li className="text-lg">Saree</li>
            <li className="text-lg">T-Shirt</li>
            <li className="text-lg">Shoes</li>
            <li className="text-lg">Jute Bag</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">Get in Touch</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li className="text-xl font-medium text-black">Phone :</li>
            <li className="text-lg">+91-6393418797</li>
            <li  className="text-xl font-medium text-black">Email :</li>
            <li className="text-lg">kaushalsuperna@gmail.com.com</li>
            <li  className="text-xl font-medium text-black">Address :</li>
            <li className="text-lg">Anand Gooba Garden Rajenclave 9th Floor Kalyanpur, </li>
            <li className="text-lg">U.P. , India - 208017</li>

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
