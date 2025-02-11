import React from "react";

const Header = () => {
  return <navbar>
      <div class='w-full py-3 border-b'>

        <div class='flex justify-between px-20 items-center font-semibold'>
          <div>
            <h1 class="text-2xl">LOGO</h1>
          </div>
          <div class='flex xl:gap-10 md:gap-8  gap-2'>
            <a href="">Home</a>
            <a href="">Work</a>
            <a href="">About</a>
            <a href="">Services</a>
            <a href="">Testimonial</a>
          </div>
          <div>
            <button class='py-2 px-6 bg-black text-white rounded-3xl font-semibold'>Contact</button>
          </div>
        </div>
        
      </div>
    </navbar>
};

export default Header;
