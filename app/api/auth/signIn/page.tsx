"use client";
import { signIn } from "next-auth/react";
import { Contact, LockIcon, Mail, User } from "lucide-react";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
export interface User {
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
  const searchParams = useSearchParams();
  const [targetUrl, setTargetUrl] = useState("");
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const handleContact = async (data: User) => {
    // implentation for sign in
    const callbackUrl = searchParams.get("callbackUrl") || "/Admin";
    setIsloading(true);
    try {
      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
        callbackUrl: callbackUrl,
      });
      if (res?.error) {
        toast.error("Wrong email or password");
        setIsloading(false);
        reset();
        return;
      }
      toast.success("Wellcome back!");
      setIsloading(false);
      setTargetUrl(res?.url && res.url !== "null" ? res.url : "/Admin")
      setShouldRedirect(true)
      reset();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong");
      setIsloading(false);
      return;
    }
  };
  useEffect(()=>{
    if(shouldRedirect && targetUrl){
      console.log(window.location.href);
      window.location.href = targetUrl;
    }
  },[shouldRedirect, targetUrl])
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
            name="password"
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
