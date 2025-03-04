import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Left - Website Name */}
        <div className="text-2xl font-semibold tracking-wide">MyWebsite</div>

        {/* Center - Navigation Links (Hidden on mobile) */}
        <ul className="hidden md:flex space-x-8 text-lg">
          {["Home", "Services", "About Us", "Blog"].map((item) => (
            <li key={item}>
              <a
                href="#"
                className="hover:text-blue-400 transition duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Right - Login Button */}
        <button className="hidden md:block bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-lg font-medium transition duration-300">
          Login
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <span className="text-3xl">&times;</span> // Close (×) icon
          ) : (
            <span className="text-3xl">&#9776;</span> // Hamburger (☰) icon
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 py-4">
          <ul className="flex flex-col items-center space-y-4 text-lg">
            {["Home", "Services", "About Us", "Blog"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="hover:text-blue-400 transition duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
            <button
              className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-medium transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Login
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
