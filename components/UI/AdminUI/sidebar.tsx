import { LockIcon, MailIcon } from "lucide-react";
import React from "react";
interface AdminSidebarProps {
  item: number;
  setItem: React.Dispatch<React.SetStateAction<number>>;
}
const Sidebar: React.FC<AdminSidebarProps> = ({ item,setItem }) => {
  return (
    <div className="p-4 w-full bg-gray-100 flex justify-between pt-20 border-2 rounded-2xl my-2 border-gray-100 shadow-md">
      <div className="w-full flex justify-around">
        <div
          className={`${
            item == 1 ? "py-4 border-b-6 border-b-red-800" : "my-4"
          }`}
        onClick = {() => setItem(1)}
        >
          <div
            className={`pl-6 text-gray ${
              item == 1 ? "text-red-500 bg-red-100" : "text-gray-200 "
            } px-12 py-6 font-bold text-xl mx-4 rounded-2xl hover:bg-red-300 cursor-pointer`}
          >
            <LockIcon className="inline mb-1 mr-2 mx-3" size={30} />
            Admins
          </div>
        </div>
        <div
          className={`${
            item == 2 ? "py-4 border-b-6 border-b-red-800" : "my-4"
          }`}
        >
          <div
            className={`pl-6 text-gray ${
              item == 2 ? "text-red-500 bg-red-100" : "text-gray-200 "
            } px-12 py-6 my-4 font-bold text-xl mx-4 rounded-2xl hover:bg-red-300 cursor-pointer`}
          onClick = {() => setItem(2)}
          >
            <MailIcon className="inline mb-1 mr-2 mx-3" size={30} />
            Orders
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
