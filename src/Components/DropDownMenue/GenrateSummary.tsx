import React, { useState, useRef, useEffect } from "react";
import { PageLoader } from "../PageLoader.tsx";

interface IGenerateSummary {
  setPayload?: (() => void) | undefined;
  loading?: boolean;
  handleRedirect?: () => void;
}
export const GenerateSummary = (props: IGenerateSummary) => {
  const { setPayload, loading, handleRedirect } = props;
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {loading && <PageLoader />}
      <div>
        <button
          type="button"
          className="flex w-full justify-center items-center gap-x-1.5 rounded-lg px-5 h-10  bg-btn text-sm  text-white shadow-sm ring-1 ring-inset  hover:bg-btn"
          id="menu-button"
          onClick={toggleDropdown}
          aria-expanded={isDropdownOpen}
          aria-haspopup="true"
        >
          Generate
          <svg
            className="-mr-1 h-5 w-5 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isDropdownOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-0"
              onClick={setPayload}
            >
              Admission Summary
            </a>
            <a
              className="text-gray-700 block px-4 py-2 text-sm cursor-pointer"
              role="menuitem"
              tabIndex={-1}
              onClick={handleRedirect}
            >
              Prior-Authorization
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
