"use client";
import React from "react";
interface ButtonProps {
  child: string;
}
const ButtonWidget: React.FC<ButtonProps> = ({ child }) => {
  return (
    <button className="bg-amber-500 text-xl text-white rounded-full px-5 py-2 mx-8">
      {child}
    </button>
  );
};

export default ButtonWidget;
