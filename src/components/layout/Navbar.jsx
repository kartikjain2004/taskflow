import { useState } from "react";
import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import darkmode from "../../assets/darkmode.png";
import lightmode from "../../assets/lightmode.png";
import notification from "../../assets/notification.png";
import profile from "../../assets/profile.png";

function Navbar() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };
  const linkHover =
    "transition-all duration-300 hover:text-blue-600 hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.7)]";
  return (
    <nav className="flex items-center justify-between px-6 py-3">
      {/* Pages Links and logo */}
      <div className="flex items-center justify-between">
        <div className="size-10 m-3">
          <img src={logo} alt="Logo" className="w-full h-full object-contain" />
        </div>
        <ul className="flex items-center gap-6">
          <li>
            <a href="#" className={linkHover}>
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className={linkHover}>
              My Tasks
            </a>
          </li>
          <li>
            <a href="#" className={linkHover}>
              Projects
            </a>
          </li>
          <li>
            <a href="#" className={linkHover}>
              Calendar
            </a>
          </li>
          <li>
            <a href="#" className={linkHover}>
              AI Insights
            </a>
          </li>
        </ul>
      </div>

      {/* Search bar, notification, theme, profile */}
      <div className="flex items-center">
        {/* Search bar */}
        <div className="flex items-center h-10 bg-white rounded-3xl px-3 py-1">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none "
          />
          <img
            src={search}
            alt="Search"
            className="size-6 ml-2 cursor-pointer"
          />
        </div>

        <button
          aria-label="Notifications"
          className="flex size-8 items-center justify-center m-3 rounded-3xl bg-white cursor-pointer"
        >
          <img src={notification} alt="Notifications" className="size-6" />
        </button>

        <button
          onClick={toggleTheme}
          aria-label="Toggle Theme"
          className="flex size-8 items-center justify-center m-3 rounded-3xl bg-white cursor-pointer"
        >
          <img
            src={isDark ? lightmode : darkmode}
            alt="Theme Icon"
            className="size-6"
          />
        </button>

        <button
          aria-label="Profile"
          className="flex size-8 items-center justify-center m-3 rounded-3xl bg-white overflow-hidden cursor-pointer"
        >
          <img src={profile} alt="Profile" className="size-8 object-cover" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
