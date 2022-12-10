import React from "react";
import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] p-5">
      <Image
        src="https://images.unsplash.com/photo-1554178286-db408c69256a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
        layout="fill"
        objectFit="cover"
        alt="bannerImage"
      />
      <div className="absolute top-1/4 w-full text-left mx-auto text-white">
        <h1 className="text-lg lg:text-3xl pb-10 font-bold">
          Share your skills, <br />
          Build your community
        </h1>
        <p className="pb-10">
          The art of guiding is rooted in thoughtful practice.
          <br />
          Share your unique skills with your neighbours and <br />
          earn extra income on a schedule that works for you.
        </p>

        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition-200">
          Be Guided
        </button>
      </div>
    </div>
  );
}

export default Banner;
