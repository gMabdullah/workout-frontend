import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { appRoute } from "../../../utils";
import { Logout } from "../../DropDownMenue";

export const Header = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const navigate = useNavigate();
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        placeholder={"doc"}
        as="li"
        variant="small"
        color="blue-gray"
        className={`p-1 font-normal ${
          window.location.pathname === appRoute.dashboard
            ? "border-b-2  border-white text-white"
            : ""
        }`}
      >
        <a
          onClick={() => navigate(appRoute.dashboard)}
          className="flex items-center text-[18px] cursor-pointer"
        >
          Dashboard
        </a>
      </Typography>
      <Typography
        placeholder={"doc"}
        as="li"
        variant="small"
        color="blue-gray"
        className={`p-1 font-normal ${
          window.location.pathname === appRoute.workout
            ? "border-b-2  border-white text-white"
            : ""
        }`}
      >
        <a
          onClick={() => navigate(appRoute.workout)}
          className="flex items-center text-[18px] cursor-pointer"
        >
          Workout
        </a>
      </Typography>
      <Typography
        placeholder={"doc"}
        as="li"
        variant="small"
        color="blue-gray"
        className={`p-1 font-normal ${
          window.location.pathname === appRoute.diet
            ? "border-b-2  border-white text-white"
            : ""
        }`}
      >
        <span
          onClick={() => navigate(appRoute.diet)}
          className="flex items-center text-[18px] cursor-pointer"
        >
          Diet
        </span>
      </Typography>
    </ul>
  );

  return (
    <Navbar
      placeholder={""}
      className=" border-none bg-secondary text-white sticky top-0 z-10 max-w-full rounded-none px-4 py-5 md:px-[5%] lg:px-[2%] lg:py-5 shadow-xl"
    >
      <div className="flex items-center justify-between text-blue-gray-900 text-lg">
        <div className="flex items-center">
          <Typography
            placeholder={"doc"}
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            <img
              onClick={() => navigate(appRoute.dashboard)}
              className="w-12 border rounded-full h-12 bg-white"
              src="/images/medicallogo.png"
              alt="logo"
            />
          </Typography>
          <div className="mr-4 hidden lg:block">{navList}</div>
        </div>

        <div className="flex items-center gap-4 cursor-pointer">
          <div className="flex items-center gap-x-1">
            <div className=" justify-center hidden lg:inline-block cursor-pointer">
              {" "}
              <Logout />
            </div>
          </div>
          <IconButton
            placeholder={"doc"}
            variant="text"
            className="mr-10 ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden cursor-pointer flex items-center"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            <div>
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </div>
          </IconButton>
        </div>
      </div>

      {openNav ? (
        <Collapse open={openNav}>
          <div className="flex justify-between">
            <div className="">{navList}</div>
            <div className="flex mt-5 mt-5 justify-center gap-x-1 cursor-pointer">
              <Logout />
            </div>
          </div>
        </Collapse>
      ) : (
        ""
      )}
      {/* </div> */}
    </Navbar>
  );
};
