"use client";
import { Contact, LockIcon, Mail, User } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
interface User {
  email: string;
  password: string;
}

const SignIn = () => {
  return (
    <div className="w-full flex item-center justify-center h-full bg-white min-h-screen">
      <SignInCard />
    </div>
  );
};

const SignInCard = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<User>({
    mode: "onBlur",
  });
  const [isloading, setIsloading] = useState(false);
  const handleContact = async (data: User) => {
    // implentation for sign in
    const formData = new FormData();
    setIsloading(true);
    const url = "";
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
    <div className="w-fit  md:mx-8 my-16 h-min-30rem border border-gray-100 p-6 bg-gray-50 rounded-lg text-black shadow-sm">
      <h1 className="block font-bold text-3xl text-amber-300 text-center my-6">
        <Contact className="inline mx-3 text-amber-500 mb-1 mr-2" size={60} />{" "}
        {"  "}
        SIGN IN
      </h1>
      <form className="p-4" onSubmit={handleSubmit(handleContact)}>
        <div className="md:w-150 w-full flex flex-col item-center">
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
            className=" text-amber-500 text-semibold mx-8 p-2 border border-gray-200 rounded-2xl w-5/6 block focus:border-amber-400 focus:outline-none  md:h-16 my-4"
            placeholder="Ex. nahomhailu@gmail.com"
            required
          />
          {errors.email && (
            <p className="text-left text-sm text-red-500">
              Invalid email address
            </p>
          )}
        </div>
        <br />
        <div className="max-w-150 flex flex-col item-center">
          <label className="text-xl font-bold mb-2 text-left text-amber-500">
            <LockIcon
              className="inline mx-3 text-amber-500 mb-1 mr-2"
              size={40}
            />{" "}
            Password
          </label>
          <input
            type="password"
            {...register("password", {
              minLength: {
                value: 8,
                message: "Invalid is too short",
              },
            })}
            className="text-amber-500 text-semibold mx-8 p-2 border border-gray-200 rounded-2xl w-5/6 block focus:border-amber-400 focus:outline-none  md:h-16 my-4"
            name="phone"
            placeholder="password"
            required
          />
          {errors.password && (
            <p className="text-left text-sm text-red-500">
              Invalid password format
            </p>
          )}
        </div>
        <input
          className={`text-semibold py-2.5 w-60 rounded-2xl max-w-44 md:w-max-60 md:h-16
            ${
              isloading
                ? "bg-amber-200 text-amber-500"
                : "bg-amber-500 text-gray-100"
            } hover:bg-amber-200`}
          type="submit"
          // disabled={
          //   errors.fullname || errors.email || errors.phone || errors.message || isloading
          //     ? true
          //     : false
          // }
          value={isloading ? "Loading..." : "Login"}
        />
      </form>
    </div>
  );
};

export default SignIn;
