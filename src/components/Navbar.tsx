import { useState } from "react";

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="fixed z-50 w-full flex justify-between items-center px-8 py-4 bg-white shadow-md">
            <div className="text-2xl font-extrabold text-blue-700 tracking-wide">
                AyoTidur
            </div>

            <div className="md:hidden flex items-center">
                <button onClick={toggleMobileMenu} className="text-gray-700 hover:text-blue-600">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-6 w-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>

            <ul
                className={`md:flex gap-8 text-gray-700 text-sm md:text-base font-medium ${
                    isMobileMenuOpen ? "flex flex-col absolute top-16 left-0 w-full bg-white shadow-md" : "hidden"
                }`}
            >
                <a href="#hero">
                    <li className="hover:text-blue-600 transition cursor-pointer py-2 px-4 md:px-0">Home</li>
                </a>
                <a href="#about">
                    <li className="hover:text-blue-600 transition cursor-pointer py-2 px-4 md:px-0">About</li>
                </a>
                <a href="#featured">
                    <li className="hover:text-blue-600 transition cursor-pointer py-2 px-4 md:px-0">Listings</li>
                </a>
                <a href="#testimonials">
                    <li className="hover:text-blue-600 transition cursor-pointer py-2 px-4 md:px-0">Testimonials</li>
                </a>
                <a href="#contact">
                    <li className="hover:text-blue-600 transition cursor-pointer py-2 px-4 md:px-0">Contact</li>
                </a>
            </ul>
        </nav>
    );
};

export default Navbar;
