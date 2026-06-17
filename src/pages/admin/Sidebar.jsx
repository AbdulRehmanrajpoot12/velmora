import { createContext, useContext, useState } from "react";
import { assets } from "../../assets/assets";

import { FaChevronRight } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";

const SidebarContext = createContext();

const Sidebar = ({ children }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className="sticky top-0 h-screen">
      <nav className="h-full flex flex-col bg-gray-400 rounded-r shadow-sm">
        <div className="p-4 pb-2 flex  items-center justify-between">
          <div
            className={`overflow-hidden flex items-center transition-all ${expanded ? "w-full" : "w-0"}`}
          >
            <img
              src={assets.logo}
              alt=""
              className={`overflow-hidden transition-all ${expanded ? "w-20" : "w-0"}`}
            />
            <h1 className="text-2xl lg:text-3xl">Velmora.</h1>
          </div>

          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? (
              <FaChevronRight />
            ) : (
              <FaChevronRight className="rotate-180" />
            )}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t border-gray-600 flex p-3">
          <img
            src="https://ui-avatars.com/api/?name=Admin"
            alt=""
            className="w-10 h-10 rounded-md"
          />

          <div
            className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}
          >
            <div className="leading-4">
              <h4 className="font-semibold">Admin</h4>
              <span className="text-xs text-gray-600">admin@gmail.com</span>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;

export const SidebarItem = ({ icon, text, path }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = location.pathname === path;
  const { expanded } = useContext(SidebarContext);
  return (
    <li
      onClick={() => navigate(path)}
      className={`group relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors ${isActive ? "bg-linear-to-tr from-gray-200 to-gray-100 text-gray-700" : "hover:bg-gray-50 text-gray-600"}`}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${expanded ? "w-32 ml-3" : "w-0"}`}
      >
        {text}
      </span>
      {!expanded && (
        <div
          className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-gray-100 text-gray-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
        >
          {text}
        </div>
      )}
    </li>
  );
};
