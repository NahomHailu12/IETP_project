"use client";

import Header from "@/components/layouts/header";

const AboutImageCard = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundImage: "url('/homepagebg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="m-0 py-4 flex flex-col justify-around items-center leading-[2.8rem]"
    >
      <Header index={2} />
      <div className="w-2/3">
        <p className="p-4 lg:mx-20 text-7xl font-bold text-center text-white mb-16 leading-[5.8rem]">
          About Us
        </p>
      </div>
      <div className="w-2/3 mb-6"></div>
    </div>
  );
};

export default AboutImageCard;
