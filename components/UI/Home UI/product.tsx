import React from "react";
interface HomeProductProps {
  imageUrl: string;
  title: string;
  power: string;
  price: string;
  item: "0" | "1" | "2" | "3";
  setType: React.Dispatch<React.SetStateAction<"0" | "1" | "2" | "3">>;
}
const HomeProduct: React.FC<HomeProductProps> = ({
  imageUrl,
  title,
  power,
  price,
  item,
  setType,
}) => {
  return (
    <div className="flex flex-col border border-gray-100 rounded-2xl p-4 my-12">
      <div
        className="w-full rounded-2xl"
        style={{
          width: "100%",
          height: "50vh",
          backgroundImage: imageUrl,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className="" onClick={() => {}}>
        <p className="text-2xl my-4 text-left font-bold text-black mt-4">
          {title}
        </p>
        <p className="text-lg my-4 text-left text-gray-600 mt-2">
          Net Power: {power}
        </p>
        <p className="text-xl my-4 text-left text-amber-500 font-bold mt-2">
          Price: {price}
        </p>
        <button
          className="bg-amber-500 text-xl text-white rounded-full px-5 py-2 mx-4 my-4 hover:bg-amber-200 pointer-cursor"
          onClick={() => {
            setType(item);
          }}
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default HomeProduct;
