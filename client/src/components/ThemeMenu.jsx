import React from "react";

const handleChangeTheme = (theme) => {
  document.documentElement.classList.remove("dark", "light", "red");
  document.cookie = `theme=${theme}; max-age=${2.592e6}`;
  document.documentElement.classList.add(
    theme,
    "bg-bgPrimary",
    "text-textPrimary"
  );
};

function ThemeMenu() {
  return (
    <>
      <label
        id="theme-menu"
        className="chevron-menu z-50 justify-center cursor-pointer"
      >
        <input type="checkbox" />
      </label>
      <div
        id="theme-sidebar"
        className="flex sidebar flex-col z-[-1] absolute bg-bgSecondary shadow-lg justify-start p-4 rounded-bl-xl text-xl text-textPrimary"
      >
        <div className="flex flex-col">
          <p>Themes</p>
          <div className="flex min-w-36">
            <button
              className="flex w-full justify-between items-center"
              onClick={() => handleChangeTheme("dark")}
            >
              <p className="w-16 text-start flex-start">Dark</p>
              <div className="w-1 h-3/4 rounded-full bg-[#202124] mx-1">
                {""}
              </div>
              <div className="w-1 h-3/4 rounded-full bg-[#28292a] mx-1">
                {""}
              </div>
              <div className="w-1 h-3/4 rounded-full bg-white mx-1">{""}</div>
              <div className="w-1 h-3/4 rounded-full bg-[#454ade] mx-1">
                {""}
              </div>
              <div className="w-1 h-3/4 rounded-full bg-[darkgrey] mx-1">
                {""}
              </div>
            </button>
          </div>
          <div className="flex min-w-36">
            <button
              className="flex w-full justify-between items-center"
              onClick={() => handleChangeTheme("light")}
            >
              <p className="w-16 text-start flex-start">Light</p>
              <div className="w-1 h-3/4 rounded-full bg-[#202124] mx-1">
                {""}
              </div>
              <div className="w-1 h-3/4 rounded-full bg-[#28292a] mx-1">
                {""}
              </div>
              <div className="w-1 h-3/4 rounded-full bg-white mx-1">{""}</div>
              <div className="w-1 h-3/4 rounded-full bg-[#454ade] mx-1">
                {""}
              </div>
              <div className="w-1 h-3/4 rounded-full bg-[darkgrey] mx-1">
                {""}
              </div>
            </button>
          </div>
          <div className="flex min-w-36">
            <button
              className="flex w-full justify-between items-center"
              onClick={() => handleChangeTheme("red")}
            >
              <p className="w-16 text-start flex-start">Red</p>
              <div className="w-1 h-3/4 rounded-full bg-[#202124] mx-1">
                {""}
              </div>
              <div className="w-1 h-3/4 rounded-full bg-[#28292a] mx-1">
                {""}
              </div>
              <div className="w-1 h-3/4 rounded-full bg-white mx-1">{""}</div>
              <div className="w-1 h-3/4 rounded-full bg-[#454ade] mx-1">
                {""}
              </div>
              <div className="w-1 h-3/4 rounded-full bg-[darkgrey] mx-1">
                {""}
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThemeMenu;
