"use client";
import { Contact, Mail, MessageCircle, PhoneCall, User } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
interface ContactFormData {
  fullname: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm = () => {
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
    const formData = new FormData();
    setIsloading(true);
    formData.append("entry.837781771", data.fullname);
    formData.append("entry.1301334933", data.email);
    formData.append("entry.1382919883", data.phone);
    formData.append("entry.1517393507", data.message);
    const url =
      "https://docs.google.com/forms/d/e/1FAIpQLSdVYZj_lpa2qvnYMLoqJ91Hp01UUiObs9UOUVBrlOlKsLH4uQ/formResponse";
    try {
      await fetch(url, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : "Unable to send your message. Please try again later.";
      alert(message);
      setIsloading(false);
      return;
    }
    alert("submitted successfully");
    setIsloading(false);
    reset();
  };
  return (
    <div className="w-5/6 mx-8 my-16 h-min-30rem border border-gray-100 p-6 bg-gray-50 rounded-lg text-black shadow-sm">
      <h1 className="block font-bold text-3xl text-amber-300 text-center my-6">
        <Contact className="inline mx-3 text-amber-500 mb-1 mr-2" size={60} />{" "}
        {"  "}
        SHARE US YOUR THOUGHTS
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
            Phone Number
          </label>
          <input
            type="text"
            {...register("phone", {
              pattern: {
                value: /^\+?[0-9\s\-()]{7,15}$/,
                message: "Invalid phone number format",
              },
            })}
            className="mx-8 p-2 border border-gray-200 rounded-md w-5/6 block focus:border-amber-400 focus:outline-none  h-12 my-4"
            name="phone"
            placeholder="Ex. +251-945-67-890"
            required
          />
          {errors.phone && (
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
            Leave Us Message
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
          
            ${isloading ? "bg-amber-200" : "bg-amber-500"} hover:bg-amber-200`}
          type="submit"
          // disabled={
          //   errors.fullname || errors.email || errors.phone || errors.message || isloading
          //     ? true
          //     : false
          // }
          value={isloading ? "Loading..." : "Get in Touch"}
        />
      </form>
    </div>
  );
};

export default ContactForm;
{
  /* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdVYZj_lpa2qvnYMLoqJ91Hp01UUiObs9UOUVBrlOlKsLH4uQ/formResponse?embedded=true" width="640" height="780" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */
}
