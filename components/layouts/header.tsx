"use client";
import Link from "next/link";
import React from "react";
interface HeaderProps {
  index: number;
}

const Header: React.FC<HeaderProps> = ({ index }: HeaderProps) => {
  return (
    <div className="my-12 mx-8 px-15 py-5 w-3/4 border-2 border-amber-300 rounded-full item-center backdrop-blur-xs flex justify-between">
      <div className="text-center text-amber-200 font-bold text-3xl">
        FarmEquip
      </div>
      <div className="mr-16">
        <ul className="flex justify-between gap-8 text-xl font-semibold">
          <li
            className={`cursor-pointer hover:text-amber-500 underline-offset-2 
                    ${
                      index === 0
                        ? "text-amber-500 border-b-3 border-b-amber-500"
                        : "text-red border-b-3 border-b-transparent"
                    }
                    `}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={`cursor-pointer hover:text-amber-500 underline-offset-2 
                    ${
                      index === 1
                        ? "text-amber-500 border-b-3 border-b-amber-500"
                        : "text-red border-b-3 border-b-transparent"
                    }
                    `}
          >
            Products
          </li>
          <li
            className={`cursor-pointer hover:text-amber-500 underline-offset-2 
                    ${
                      index == 2
                        ? "text-amber-500 border-b-3 border-b-amber-500"
                        : "text-red border-b-3 border-b-transparent"
                    }
                    `}
          >
            <Link href="/About">About Us</Link>
          </li>
          <li
            className={`cursor-pointer hover:text-amber-500 underline-offset-2 
                    ${
                      index === 3
                        ? "text-amber-500 border-b-3 border-b-amber-500"
                        : "text-red border-b-3 border-b-transparent"
                    }
                    `}
          >
            <Link href="/Contact">Contact</Link>
          </li>
        </ul>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Header;
