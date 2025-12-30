"import client";
import React from "react";
import HomeProduct from "./product";
import OrderProcess from "./productProcessing";

const ProductParent = () => {
  const [type, setType] = React.useState<"0" | "1" | "2" | "3">("0");
  return (
    <div className="grid px-4 mx:px-8 mx-4 md:mx-8 grid-cols-1 gap-6 md:grid-cols-3">
      {type == "0" && (
        <>
          <HomeProduct
            imageUrl="url('/product1.jpg')"
            title="Excavator ZX350LC-6"
            power="257 HP"
            price="$120,000"
            item="1"
            setType = {setType}
          />
          <HomeProduct
            imageUrl="url('/product1.jpg')"
            title="Tractor ZX350LC-6"
            power="679 HP"
            price="$500,000"
            item="2"
            setType = {setType}
          />
          <HomeProduct
            imageUrl="url('/product1.jpg')"
            title="EXcavator ZX350LC-6"
            power="1200 HP"
            price="$670,000"
            item="3"
            setType = {setType}
          />
        </>
      )}
      {type != "0" && (<div className="col-span-3"><OrderProcess type={type} setType={setType}/></div>)}
    </div>
  );
};

export default ProductParent;
