import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EyeIcon } from "../../../Components/Icons";
// import Checkbox from "../../../Components/Checkbox";
import { useAuthLogin } from "../../../hooks/Auth/useLogin";
// import { IuserLogin } from "../../../APIs/Auth/interfaces";
import { LoadingBtn } from "../../../Components/Buttons/LoadingBtn";
import { appRoute } from "../../../utils";
import { Inputs } from "../../../Components/Inputs";

export const SignUp = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState<any>({
    firstname: "",
    lastname: "",
    age: "",
    gender: "",
    email: "",
    password: "",
  });
  //   const [remember, setRemember] = useState<boolean>(false);
  const { handleSignUP, loading, error, setError } = useAuthLogin();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    navigate(appRoute.login);
  };

  const handleonChange = (e: ChangeEvent<HTMLInputElement>) => {
    setError("");
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value.trim(),
    });
  };
  const handleSignIn = async (e: any) => {
    e.preventDefault();
    await handleSignUP(loginData);
    navigate(appRoute.login);
  };

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setLoginData({
      ...loginData,
      gender: e.target.value.trim(),
    });
  };

  return (
    <>
      <div className="login flex justify-center pt-20 bg-primary">
        <div className="m-auto  w-full md:w-6/12 lg:w-[45%] flex flex-col items-center">
          <div className=" text-subtext  text-[32px] font-bold font-['Plus Jakarta Sans'] text-center">
            Welcome To Fitness Club
          </div>
          <div className="font-bold text-2xl pt-14 text-subtext text-left w-full">
            Sign Up
          </div>
          <div className="text-[18px] mt-2 text-[#828282] font-medium text-left w-full">
            Create your account
          </div>

          {/* Form */}
          <div className="form mt-5 w-full">
            <form className="w-full" onSubmit={handleSignIn}>
              <div className="grid grid-cols-2 gap-6 ">
                <Inputs
                  label={"First Name"}
                  type={"text"}
                  id={"firstname"}
                  // value={}
                  handleChange={handleonChange}
                  name="firstname"
                />
                <Inputs
                  label={"Last Name"}
                  type={"text"}
                  id={"lastname"}
                  // value={""}s
                  handleChange={handleonChange}
                  name="lastname"
                />
              </div>
              <div className="grid grid-cols-2 gap-6 ">
                <Inputs
                  label={"Age"}
                  type={"text"}
                  id={"firstname"}
                  // value={}

                  handleChange={handleonChange}
                  name="age"
                />
                <div>
                  <label
                    htmlFor="countries"
                    className="block mb-2 text-[16px] font-bold text-subtext dark:text-white"
                  >
                    Gender
                  </label>

                  <select
                    id="countries"
                    name={"gender"}
                    defaultValue={"male"}
                    onChange={handleSelect}
                    // value={props?.value}
                    className="bg-transparent border border-border text-subtext text-sm rounded-lg focus:ring-border focus:border-border block w-full p-2.5 focus-visible:outline-border peer-focus:ring-lightprimary"
                  >
                    <option className="bg-lightprimary " value={"male"}>
                      Male
                    </option>
                    <option className="bg-lightprimary " value={"female"}>
                      Female
                    </option>
                  </select>
                </div>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <label
                  htmlFor="FName"
                  className="block mb-2 text-[16px] font-bold text-subtext dark:text-white"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-transparent border border-border text-subtext text-sm rounded-lg focus:ring-lightprimary focus:border-lightprimary block w-full p-2.5    peer-focus:ring-lightprimary focus-visible:outline-border "
                  placeholder=""
                  name="email"
                  required
                  onChange={handleonChange}
                />
                {error && (
                  <div
                    className={`text-[18px] mt-2 text-red-500 font-medium text-left w-full`}
                  >
                    {error}
                  </div>
                )}
              </div>

              <div className="relative z-0 w-full mb-5 group">
                <label
                  htmlFor="FName"
                  className="block mb-2 text-[16px] font-bold text-subtext dark:text-white"
                >
                  Password
                </label>
                <div className="password-container flex border border-border rounded-lg items-center focus:ring-lightprimary focus:border-lightprimary peer-focus:ring-lightprimary focus-visible:outline-border ">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="Password"
                    className="bg-transparent  text-subtext text-sm   block w-full p-2.5 boder-none focus:outline-none"
                    placeholder=""
                    name="password"
                    required
                    onChange={handleonChange}
                  />

                  <span
                    className="toggle-password cursor-pointer pr-3"
                    onClick={handleTogglePassword}
                  >
                    {showPassword ? <EyeIcon /> : <EyeIcon />}
                  </span>
                </div>
              </div>
              {/* <div className="flex justify-between mb-10">
                <div className="text-xs text-[#9F9F9F] flex justify-center">
                  <Checkbox
                    id={"link-checkbox"}
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                  />
                  Remember Me
                </div>
                <div
                  onClick={handleClickForgotPass}
                  className="text-xs text-[#9F9F9F] hover:text-blue-600 cursor-pointer"
                >
                  Forgot Password?
                </div>
              </div> */}
              <div className="flex mb-10">
                <div className="text-xs text-[#9F9F9F] flex justify-center">
                  Alread have an account?
                </div>
                <div
                  onClick={handleLogin}
                  className="text-xs :text-blue-600 cursor-pointer ml-1"
                >
                  Login
                </div>
              </div>

              {loading ? (
                <LoadingBtn />
              ) : (
                <>
                  <button
                    type="submit"
                    className="text-white bg-btn hover:bg-btn  focus:ring-4 font-medium rounded-lg text-md  w-full px-5 py-2.5 text-center"
                  >
                    Sign Up
                  </button>
                </>
              )}
              {/* <div className="text-center text-xs text-[#9F9F9F] mt-10">
                Facing issues? We are here to assist you.
                <span className="font-semibold text-[#828282] text-[16px]">
                  Customer Support
                </span>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
