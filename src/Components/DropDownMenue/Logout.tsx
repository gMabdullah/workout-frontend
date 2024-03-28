import React, { useState, useRef, useEffect } from "react";
import { appRoles, appRoute } from "../../utils";
import { useNavigate } from "react-router-dom";
import { ToggleModeButton } from "../Buttons";
import { useSelector } from "react-redux";
import { useLogout } from "../../hooks/Auth/useLogout";
import { PageLoader } from "../PageLoader.tsx";
import { loginUser } from "../../store/slices";

export const Logout = () => {
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const _loginUser = useSelector(loginUser);

  const navigate = useNavigate();
  const { handleLogout, loading, setLoading } = useLogout();
  const toggleDropdown = (): void => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event: Event): void => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownOpen(false);
    }
  };
  const handleLogoutClick = async () => {
    // Prevent the default behavior of the anchor tag
    setLoading(true);

    await handleLogout();
    setLoading(false);
    navigate(appRoute.login);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      {loading && <PageLoader />}

      <div className="relative inline-block text-left" ref={dropdownRef}>
        <div>
          <button
            type="button"
            className="flex  gap-3 items-center px-3   "
            id="menu-button"
            onClick={toggleDropdown}
            aria-expanded={isDropdownOpen}
            aria-haspopup="true"
          >
            <span className="text-[14px]">
              Welcome {_loginUser?.details?.name || "Jhon"}
            </span>
          </button>
        </div>
        {isDropdownOpen && (
          <div
            className="absolute right-0 z-10 mt-2 w-auto  origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
          >
            <div className="py-1 px-5 " role="none">
              <ToggleModeButton />

              <a
                // href="#"
                onClick={handleLogoutClick}
                className="text-gray-700 block px-4 py-2 text-sm font-bold hover:text-blue-500"
                role="menuitem"
                tabIndex={-1}
                id="menu-item-0"
              >
                Log out
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
