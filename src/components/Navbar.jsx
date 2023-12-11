import { navLinks } from "../index";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

const Navbar = () => {
    return (
        <header
        className={`w-full dark:bg-slate-800/75 dark:text-slate-100 bg-slate-200/75 fixed top-0 z-10 backdrop-blur-xl`}
      >
        <nav className="w-full xl:max-w-screen-xl mx-auto p-8 sm:p-12 py-5">
          <div className="flex items-center justify-between">
            <div className="w-40">
              <a href="#home">
                <span className="gradientText text-4xl italic pr-2">Nazmul</span>
              </a>
            </div>
            <ul className="list-none md:flex hidden gap-3">
              {navLinks.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`text-sm font-semibold p-2  duration-300`}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
  
            <div className="flex items-center justify-center gap-5">
              <div
                className="h-6 w-12 flex items-center justify-center border-0 border-amber-500 bg-white rounded-full relative cursor-pointer"
              >
                <BsMoonFill className="text-amber-500 w-5" />
                <BsSunFill className="text-amber-500 w-5" />{" "}
                <button
                  className="w-5 h-5 rounded-full bg-amber-500 absolute left-0 border-0"
                  
                ></button>
              </div>
              <div
                className="md:hidden block text-xl dark:text-slate-100 cursor-pointer"
              >
                <div
                  className={`absolute top-20 right-0 dark:bg-slate-800 bg-slate-200 border-t-[1px] dark:border-slate-900 border-slate-300 p-6 w-full`}
                >
                  <ul className="list-none flex flex-col items-center fl">
                    {navLinks.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className={`text-sm font-semibold p-2 duration-300`}
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
};

export default Navbar;