import { Calendar1, MailIcon, PhoneCall, UserCheck } from "lucide-react";
import Image from "next/image";
import React from "react";
export interface Empolyee {
  username: string;
  email: string;
  phone: string;
  role: "client" | "admin" | "super-admin";
  dateJoined: string;
}
const EmployeeCard: React.FC<Empolyee> = ({
  username,
  email,
  phone,
  role,
  dateJoined,
}) => {
  return (
    <div className="m-6 flex flex-col rounded-4xl border font-bold bg-white border-gray-100 shadow-lg mb-6 pb-6">
      <div className="flex flex-col item-left bg-cyan-700 p-4 rounded-t-4xl">
        <Image
          src={"/avatar.png"}
          alt="employee avatar"
          width={80}
          height={80}
          className="rounded-full mb-4"
        />
        <h2 className="block text-black text-bold my-4">{username}</h2>
      </div>
      <div className="flex flex-col item-left bg-white p-4">
        <div className="flex flex-col p-4">
          <div className="text-left text-xl">
            <p className="text-gray-300">
              <UserCheck className="inline mb-1 mr-2 mx-3" size={20} />
              ROLE
              <p className="text-gray-800 ml-20 mb-6">{role}</p>
            </p>
          </div>
          <div className="text-left text-xl">
            <p className="text-gray-300">
              <Calendar1 className="inline mb-1 mr-2 mx-3" size={20} />
              Date Joined
            </p>
            <p className="block text-gray-800 ml-20 mb-6">{dateJoined}</p>
          </div>
        </div>
      </div>
      <div className="mx-4">
        <MailIcon className="inline mb-1 mr-2 mx-3 text-green-300" size={20} />
        <p className="inline text-green-300">{email}</p>
        <br />
        <PhoneCall className="inline mb-1 mr-2 mx-3 text-green-300" size={20} />
        <p className="inline text-green-300">{phone}</p>
      </div>
    </div>
  );
};

export default EmployeeCard;
