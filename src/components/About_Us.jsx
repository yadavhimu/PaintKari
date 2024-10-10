import React from "react";
import { Link } from "react-router-dom";

const About_Us = () => {
  return (
    <div>
      <div>
        <h1 className="text-4xl text-center mt-10">About Us</h1>
      </div>
      <div className="mt-20 flex flex-col sm:flex-row">
        <div className=" w-full items-cente hover:scale-110 transition ease-in-out">
          <img
            className=" rounded-lg w-[550px] "
            src="./images/asset 1.jpeg"
            alt="Saree Image"
          />
        </div>
        <div className="w-full ">
          <p className="text-lg mt-20">
            Established in 2023 in the heart of Uttar Pradesh, India, Paintkari
            is a celebration of Indian artistry and craftsmanship. Our passion
            lies in transforming everyday essentials into extraordinary pieces
            through the magic of handpainting.
          </p>
          <p className="text-lg mt-10">
            We believe that fashion is a form of self-expression, and our
            handpainted sarees, jute bags, t-shirts, shoes, and kidswear are
            designed to empower individuals to showcase their unique style. Each
            product is a labor of love, created by skilled artisans who infuse
            their creativity into every stroke.
          </p>
          <div className="text-center sm:text-left">
            <Link to="/contact"><button className="text-lg rounded-full mt-20 bg-yellow-300 w-36 h-14">
              Contact Us
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_Us;
