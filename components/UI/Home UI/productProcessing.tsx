"use client";
import { Contact, Mail, MessageCircle, PhoneCall, User } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
interface ContactFormData {
  fullname: string;
  email: string;
  amount: number;
  message: string;
}

interface OrderProcessProp {
  type: "0" | "1" | "2" | "3";
  setType: React.Dispatch<React.SetStateAction<"0" | "1" | "2" | "3">>;
}

const OrderProcess: React.FC<OrderProcessProp> = ({ setType }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    mode: "onBlur",
  });
  const [isloading, setIsloading] = useState(false);
  const handleContact = async (data: ContactFormData) => {
    // implentation for handling contact form submission
    setIsloading(true);
    reset();

    
    setType("0");
    setIsloading(false);
  };
  return (
    <div className="w-5/6 mx-8 my-16 min-h-screen border border-gray-100 p-6 bg-gray-50 rounded-lg text-black shadow-sm">
      <h1 className="block font-bold text-3xl text-amber-300 text-center my-6">
        <Contact className="inline mx-3 text-amber-500 mb-1 mr-2" size={60} />{" "}
        {"  "}
        Order Process
      </h1>
      <form
        className="grid grid-cols-2 p-4 gap-6"
        onSubmit={handleSubmit(handleContact)}
      >
        <div className="">
          <label className="text-xl font-bold mb-2 text-left text-amber-500">
            <User className="inline mx-3 text-amber-500 mb-1 mr-2" size={40} />{" "}
            Full Name / Company
          </label>
          <input
            type="text"
            {...register("fullname", { required: true })}
            className="mx-8 p-2 border  border-gray-200 rounded-md w-5/6 block focus:border-amber-400 focus:outline-none  h-12 my-4"
            placeholder="Ex. Nahom Hailu"
            required
          />
          {errors.fullname && (
            <p className="text-left text-sm text-red-500">
              Full name is required
            </p>
          )}
          
        </div>
        <div className="">
          <label className="text-xl font-bold mb-2 text-left text-amber-500">
            <Mail className="inline mx-3 text-amber-500 mb-1 mr-2" size={40} />{" "}
            Email
          </label>
          <input
            type="email"
            {...register("email", {
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
            className="mx-8 p-2 border border-gray-200 rounded-md w-5/6 block focus:border-amber-400 focus:outline-none  h-12 my-4"
            placeholder="Ex. nahomhailu@gmail.com"
            required
          />
          {errors.email && (
            <p className="text-left text-sm text-red-500">
              Invalid email address
            </p>
          )}
        </div>
        <div className="">
          <label className="text-xl font-bold mb-2 text-left text-amber-500">
            <PhoneCall
              className="inline mx-3 text-amber-500 mb-1 mr-2"
              size={40}
            />{" "}
            Amount
          </label>
          <input
            type="number"
            {...register("amount", {
              min: { value: 1, message: "Amount must be at least 1" },
            })}
            className="mx-8 p-2 border border-gray-200 rounded-md w-5/6 block focus:border-amber-400 focus:outline-none  h-12 my-4"
            name="amount"
            placeholder="Ex. 10"
            required
          />
          {errors.amount && (
            <p className="text-left text-sm text-red-500">
              Invalid phone number format
            </p>
          )}
        </div>
        <div className="">
          <label className="text-xl font-bold mb-2 text-left text-amber-500">
            <MessageCircle
              className="inline mx-3 text-amber-500 mb-1 mr-2"
              size={40}
            />{" "}
            Special Instructions
          </label>

          <textarea
            {...register("message", { required: true })}
            placeholder="Your Message"
            className="mx-8 p-2 border  border-gray-200 rounded-md w-5/6 block focus:border-amber-400 focus:outline-none  h-12 my-4"
          />
          {errors.message && (
            <p className="text-left text-sm text-red-500">
              Message is required
            </p>
          )}
        </div>

        <input
          className={`py-2.5 w-60 rounded-2xl w-max-60 h-10 text-white 
          
            ${
              isloading ? "bg-amber-200" : "bg-amber-500"
            } hover:bg-amber-200 pointer-cursor `}
          type="submit"
          value={isloading ? "Loading..." : "Order"}
        />
        <button
          className=" pointer-cursor py-2.5 w-60 rounded-2xl w-max-60 h-10 text-white bg-red-500 hover:bg-gray-700"
          onClick={() => {
            setType("0");
          }}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default OrderProcess;
{
  /* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdVYZj_lpa2qvnYMLoqJ91Hp01UUiObs9UOUVBrlOlKsLH4uQ/formResponse?embedded=true" width="640" height="780" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */
}