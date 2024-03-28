import React from "react";

export const ChatSearchBar = () => {
  const [openSearch, setOpenSearch] = React.useState(false);
  return (
    <div className="flex gap-10 items-center flex-wrap-reverse">
      {openSearch ? (
        <div className="bg-white px-6 rounded-full border  h-[60px] w-auto  md:w-[500px] lg:w-[650px] xl:w-[695px] flex justify-center items-center gap-5">
          <div>
            <div className="w-10 flex justify-center items-center h-10  bg-btn text-white font-bold text-lg rounded-full">
              KR
            </div>
          </div>

          <div className="w-full ">
            <input
              type="text"
              id="simple-search"
              className=" bg-transparent border border-none text-gray-900 text-sm  focus:ring-0 focus:border-transparent focus:outline-none block w-full ps-2 p-2.5 "
              placeholder="Hi! Ask me anything about your data..."
              required
            />
          </div>
          <button
            type="submit"
            className="h-10 w-24  text-md font-bold text-white bg-btn rounded-full border border-blue hover:bg-btn focus:ring-4 focus:outline-none focus:ring-blue-300 "
          >
            Ask
          </button>
        </div>
      ) : (
        ""
      )}
      <div
        className="bg-white w-[60px] h-[60px]  border rounded-full shadow-lg flex justify-center items-center cursor-pointer"
        onClick={() => setOpenSearch(!openSearch)}
      >
        {openSearch ? (
          <img
            className="w-[20px]  h-[20px] bg-white"
            src="/images/searchclose.png"
            alt="logo"
          />
        ) : (
          <img
            className="w-[30px]  h-[30px] bg-white"
            src="/images/msg.png"
            alt="logo"
          />
        )}
      </div>
    </div>
  );
};
