"use client";

import Header from "@/components/layouts/header";

const ImageCard = () => {
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
      className="m-0 py-4 flex flex-col justify-center items-center leading-[2.8rem]"
    >
      <Header index={0} />
      <div className="w-2/3">
        <p className="p-4 lg:mx-20 text-7xl font-bold text-center text-white mb-16 leading-[5.8rem]">
          HEAVY MACHINERY SOLUTIONS FOR YOUR INDUSTRIAL NEEDS
        </p>
      </div>
      <div className="w-2/3">
        <p className="p-4 lg:mx-35 text-xl text-gray-200 font-bold leading-loose text-center text-white-600">
          Providing durable Equipment for Construction, Mining, and Agriculture
          industries. While running on cutting-edge technology, our machinery
          ensures optimal performance and efficiency in the toughest
          environments.
        </p>
      </div>
      <div className="w-2/3 mb-6">
        <button className="text-white text-xl px-6 py-3 rounded-full font-extrabold mx-auto block my-4 bg-amber-500 hover:bg-white hover:outline-none hover:text-amber-500">
          Explore Our Products
        </button>
      </div>
    </div>
  );
};

export default ImageCard;