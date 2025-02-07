import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const navItems = [
    { link: "/eat", item: "Eat & Drink" },
    { link: "", item: "Event" },
    { link: "/club", item: "Club" },
    {
      link: "",
      item: "Things to do",
      subItems: [
        { name: "Product 1", link: "/products/1" },
        { name: "Product 2", link: "/products/2" },
        { name: "Product 3", link: "/products/3" },
      ],
    },
    { link: "", item: "My Profile" },
    { link: "", item: "Pay With Crypto" },
    { link: "", item: "Card" },
    { link: "", item: "Contact Us" },
    { link: "", item: "Log Out" },
  ];

  const account = [
    { link: "/profile", menu: "My Profile" },
    { link: "/history", menu: "My History" },
    { link: "/sign", menu: "Sign Out" },
  ];

  const Todo = [
    { link: "/water", menu: "Water Sports" },
    { link: "/day", menu: "Day Parties" },
    { link: "/out", menu: "Outdoors" },
    { link: "/rent", menu: "Rentals" },
  ];

  const [isTodoDropdownOpen, setTodoDropdownOpen] = useState(false);
  const [isAccountDropdownOpen, setAccountDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const todoRef = useRef(null);
  const accountRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        todoRef.current &&
        !todoRef.current.contains(event.target) &&
        accountRef.current &&
        !accountRef.current.contains(event.target)
      ) {
        setTodoDropdownOpen(false);
        setAccountDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <section className="bg-white fixed w-full top-0 z-50">
      <div className="flex justify-between items-center px-4 sm:py-[13px] sm:px-[100px] relative">
        {/* Logo */}
        <NavLink to="/">
          <img src="Logo.png" alt="logo" className="h-10 w-auto" />
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex">
          <ul className="flex gap-5 text-lg">
            <li>
              <NavLink to="/eat">Eat & Drink</NavLink>
            </li>
            <li className="relative">
              <NavLink to="/club">
                Club
                <span className="bg-blue-500 rounded-2xl text-xs text-white font-semibold px-1 absolute -top-2.5 left-3.5">
                  +HOT
                </span>
              </NavLink>
            </li>
            <li ref={todoRef} className="relative">
              <button
                onClick={() => setTodoDropdownOpen(!isTodoDropdownOpen)}
                className="flex items-center"
              >
                Things to do
                <span
                  className={`ml-1 transform transition-transform ${
                    isTodoDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <img src="Arrow.png" alt="arrow" />
                </span>
              </button>
              {isTodoDropdownOpen && (
                <ul className="absolute mt-2 bg-white w-32 rounded-sm shadow-md">
                  {Todo.map((info, index) => (
                    <li key={index} className="p-1">
                      <NavLink
                        to={info.link}
                        className="hover:bg-[#D6EBFD] rounded-sm p-0.5"
                      >
                        {info.menu}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li className="relative">
              <img src="Card.png" alt="card" />
              <span className="w-5 h-5 text-xs bg-blue-500 absolute rounded-full text-white flex justify-center items-center -top-1.5 -left-1">
                3
              </span>
            </li>
            <li ref={accountRef} className="relative">
              <button
                className="flex items-center gap-1"
                onClick={() => setAccountDropdownOpen(!isAccountDropdownOpen)}
              >
                <img src="User.png" alt="user" className="w-5 h-5" />
                Account
              </button>
              {isAccountDropdownOpen && (
                <ul className="absolute mt-2 bg-white w-28  rounded-sm shadow-md">
                  {account.map((info, index) => (
                    <li key={index} className="py-1">
                      <NavLink
                        to={info.link}
                        className="hover:bg-[#D6EBFD] rounded-sm p-0.5"
                      >
                        {info.menu}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <button className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-400 transition-all">
              Contact Now
            </button>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-xl"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? "✖" : <img src="Menu.png" />}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className='absolute top-full left-0 w-full bg-[#F5FAFF] shadow-md py-4 flex flex-col items-start px-4'>
            <ul className="w-full flex flex-col gap-2 text-lg ">
              {navItems.map((info, index) => (
                <li key={index} className="w-full relative text-left">
                  {index === 3 ? (
                    <div className={`relative ${isDropdownOpen? "mb-36 transition-all":""}`}>
                      <button
                        className="block py-2 w-full text-left hover:bg-blue-100"
                        onClick={() => setDropdownOpen(!isDropdownOpen)}
                      >
                        {info.item} 
                      </button>
                      <hr className={`${isDropdownOpen? "hidden":"flex"}`}/>
                      <span
                  className={`transform transition-transform absolute right-1 top-5 ${
                    isDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <img src="ArrowB.png" alt="arrow" />
                </span>
                      {isDropdownOpen && (
                        <ul className="absolute left-0 w-full bg-blue-50 shadow-md mt-1 flex flex-col">
                          {info.subItems.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <NavLink
                                to={subItem.link}
                                className="block py-2 px-4 hover:bg-blue-200"
                              >
                                {subItem.name}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <NavLink
                      to={info.link}
                      className="block py-2 hover:bg-blue-100"
                    >
                      {info.item}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
            <button className="bg-blue-500 text-white w-[50%] mt-2 p-2 rounded-md hover:bg-blue-400">
              Contact Now
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Navbar;
