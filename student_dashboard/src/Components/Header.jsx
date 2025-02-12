import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <navbar>
      <div class="w-full py-3 border-b">
        <div class="flex justify-between px-20 items-center font-semibold">
          <div>
            <h1 class="text-2xl">
              <span className="text-rose-600">YOUR</span>LOGO
            </h1>
          </div>
          <div class="flex xl:gap-10 md:gap-8  gap-2">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <a href="">Services</a>
            <a href="">Testimonial</a>
          </div>
          <div>
            <Link
              to="/login"
              className="py-2 px-6 bg-black text-white rounded-3xl font-semibold"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </navbar>
  );
};

export default Header;
