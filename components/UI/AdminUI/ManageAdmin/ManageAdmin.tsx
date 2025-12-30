import React from "react";
import EmployeeCard, { Empolyee } from "./employeeCard";
import { users } from "@/utils/dummy/user";

const ManageAdmin = () => {
  return (
    <div className="p-6 rounded-2xl border border-gray-100 bg-white">
      <h1 className="my-4 text-3xl  text-gray-500 pl-6 font-bold mb-16"></h1>
      <hr className="border-b-2 mt-12 border-b-gray-100 shadow-md" />
      <div className="grid grid-cols-3">
        {users
          .filter((user) => user.role !== "client")
          .map((user: Empolyee, index: number) => (
            <EmployeeCard key={index} {...user} />
          ))}
      </div>
    </div>
  );
};

export default ManageAdmin;
