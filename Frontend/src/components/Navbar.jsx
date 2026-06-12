import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"


export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {/* BACKGROUND WRAPPER */}
      {/* BACKGROUND WRAPPER */}
<header
  className="
    fixed
    top-0
    left-0
    right-0
    z-50
    bg-white/95
    backdrop-blur-md
    border-b
    border-slate-200
  "
>
  
  {/* GLASS NAVBAR */}
  <nav
    className="
      max-w-7xl mx-auto 
      flex items-center justify-between
      px-4 lg:px-5
      py-3
      bg-white/95
      backdrop-blur-md
      border-b border-slate-200
    "
  >

    {/* LOGO */}
    <div className="flex items-center gap-3">
  <img
    src={logo}
    alt="Balaji Infotech"
    className="h-12 w-auto object-contain"
  />

  <div>
    <h1 className="text-[15px] font-semibold text-[#071426]">
      Balaji Infotech
    </h1>

    <p className="text-xs text-slate-500">
      Tally Solutions Partner
    </p>
  </div>
</div>

    {/* DESKTOP MENU */}
    <div className="hidden lg:flex items-center gap-2 xl:gap-3">

      <NavLink
        to="/"
        className={({ isActive }) =>
          `
          relative
          px-2
          py-2
          rounded-full
          transition-all
          ${
            isActive
              ? "bg-[#EEF4FF] text-[#155A96] font-medium"
              : "text-slate-700 hover:text-[#155A96]"
          }
          
        `
        }
        
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          `relative
           px-4 py-2.5
           rounded-full
           transition-all duration-300
           ${
             isActive
              ? "bg-[#EEF4FF] text-[#155A96] font-medium"
              : "text-slate-700 hover:text-[#155A96]"
           }`
        }
      >
        About
      </NavLink>

      {/* PRODUCTS */}
      <div className="relative group">

        <NavLink
          to="/products"
          className={({ isActive }) =>
            `relative
            px-4 py-2.5
            rounded-full
            transition-all duration-300
            flex items-center gap-1
            ${
             isActive
               ? "bg-[#EEF4FF] text-[#155A96] font-medium"
              : "text-slate-700 hover:text-[#155A96]"
           }`
          }
        >
          Products

          <ChevronDown
            size={18}
            className="
              transition-transform duration-300
              group-hover:rotate-180
            "
          />
        </NavLink>

        {/* DROPDOWN */}
        <div
          className="
            absolute
            top-[120%]
            left-1/2
            -translate-x-1/2
            w-[300px]
            rounded-2xl
            bg-white
            border border-slate-200
            shadow-xl
            shadow-[0_20px_60px_rgba(0,0,0,0.35)]
            overflow-hidden
            opacity-0
            invisible
            translate-y-3
            group-hover:opacity-100
            group-hover:visible
            group-hover:translate-y-0
            transition-all duration-300
            z-50
          "
        >
          {[
            {
              name: "TallyPrime",
              link: "/products/tallyprime",
            },
            {
              name: "TallyPrime Server",
              link: "/products/tally-server",
            },
            {
              name: "TallyPrime powered by AWS",
              link: "/products/aws",
            },
            {
              name: "TallyPrime with WhatsApp",
              link: "/products/whatsapp",
            },
          ].map((item, index) => (
            <NavLink
              key={index}
              to={item.link}
              className="
                block
                px-6 py-4
                text-[15px]
                font-medium
                text-black
                hover:text-[#155A96]
                hover:bg-[#F8FAFC]
                transition-all duration-300
                border-b border-slate-100
                last:border-none
              "
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <div className="relative group">

        <NavLink
          to="/services"
          className={({ isActive }) =>
            `relative
            px-4 py-2.5
            rounded-full
            transition-all duration-300
            flex items-center gap-1
            ${
             isActive
              ? "bg-[#EEF4FF] text-[#155A96] font-medium"
              : "text-slate-700 hover:text-[#155A96]"
           }`
          }
        >
          Services

          <ChevronDown
            size={18}
            className="
              transition-transform duration-300
              group-hover:rotate-180
            "
          />
        </NavLink>

        {/* DROPDOWN */}
        <div
          className="
            absolute
            top-[120%]
            left-1/2
            -translate-x-1/2
            w-[300px]
            rounded-2xl
            bg-white
            border border-slate-200
            shadow-xl
            overflow-hidden
            opacity-0
            invisible
            translate-y-3
            group-hover:opacity-100
            group-hover:visible
            group-hover:translate-y-0
            transition-all duration-300
            z-50
          "
        >
          {[
            {
              name: "Tally Software",
              link: "/services/tally-software",
            },
            {
              name: "Tally Services",
              link: "/services/tally-services",
            },
            {
              name: "Tally Apps For Mobile",
              link: "/services/tally-mobile",
            },
            {
              name: "Tally Solutions",
              link: "/services/tally-solutions",
            },
            {
              name: "Tally ERP 9 Solutions",
              link: "/services/tally-erp",
            },
            {
              name: "Tally Add-Ons",
              link: "/services/tally-addon",
            },
          ].map((item, index) => (
            <NavLink
              key={index}
              to={item.link}
              className="
                block
                px-6 py-4
                text-[15px]
                font-medium
                text-slate-600
                hover:text-[#155A96]
                hover:bg-[#F8FAFC]
                transition-all duration-300
                border-b border-slate-100
                last:border-none
              "
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>

      <NavLink
        to="/education"
        className={({ isActive }) =>
          `relative
           px-4 py-2.5
           rounded-full
           transition-all duration-300
           ${
             isActive
              ? "bg-[#EEF4FF] text-[#155A96] font-medium"
              : "text-slate-700 hover:text-[#155A96]"
           }`
        }
      >
        Education
      </NavLink>

      <NavLink
        to="/lms"
        className={({ isActive }) =>
          `relative
           px-4 py-2.5
           rounded-full
           transition-all duration-300
           ${
             isActive
              ? "bg-[#EEF4FF] text-[#155A96] font-medium"
              : "text-slate-700 hover:text-[#155A96]"
           }`
        }
      >
        LMS
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `relative
           px-4 py-2.5
           rounded-full
           transition-all duration-300
           ${
             isActive
              ? "bg-[#EEF4FF] text-[#155A96] font-medium"
              : "text-slate-700 hover:text-[#155A96]"
           }`
        }
      >
        Contact
      </NavLink>
    </div>

    {/* RIGHT SIDE BUTTON */}
    <div className="hidden lg:flex items-center gap-4">

  <button
    onClick={() => navigate("/contact#contact-form")}
    className="
      px-4 py-2.5
      rounded-lg
      text-sm
      whitespace-nowrap
      text-white
      font-medium
      bg-[#155A96]
      hover:scale-105
      transition duration-300
    "
  >
    Get Started
  </button>

</div>

    {/* MOBILE MENU BUTTON */}
    <button
      onClick={() => setMobileMenu(!mobileMenu)}
      className="
        lg:hidden
        text-[#155A96]
        flex items-center justify-center
      "
    >
      {mobileMenu ? <X size={28} /> : <Menu size={28} />}
    </button>
  </nav>

  {/* MOBILE MENU */}
  {mobileMenu && (
    <div
      className="
        lg:hidden
        mt-3
        rounded-2xl
        bg-white
border border-slate-200
shadow-xl
        p-6
        shadow-2xl
        mx-1
      "
    >
      <div className="flex flex-col gap-1">

        <NavLink
          to="/"
          className="text-[#155A96] py-3 border-b border-slate-200"
          onClick={() => setMobileMenu(false)}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className="text-[#155A96] py-3 border-b border-slate-200"
          onClick={() => setMobileMenu(false)}
        >
          About
        </NavLink>

        <NavLink
          to="/products"
          className="text-[#155A96] py-3 border-b border-slate-200"
          onClick={() => setMobileMenu(false)}
        >
          Products
        </NavLink>

        <NavLink
          to="/services"
          className="text-[#155A96] py-3 border-b border-slate-200"
          onClick={() => setMobileMenu(false)}
        >
          Services
        </NavLink>

        <NavLink
          to="/education"
          className="text-[#155A96] py-3 border-b border-slate-200"
          onClick={() => setMobileMenu(false)}
        >
          Education
        </NavLink>

        <NavLink
          to="/lms"
          className="text-[#155A96] py-3 border-b border-slate-200"
          onClick={() => setMobileMenu(false)}
        >
          LMS
        </NavLink>

        <NavLink
          to="/contact"
          className="text-[#155A96] py-3"
          onClick={() => setMobileMenu(false)}
        >
          Contact
        </NavLink>

        <button
          className="
            mt-5
            w-full
            py-3
            rounded-xl
            bg-[#155A96]
            text-white
            font-medium
          "
        >
          Get Started
        </button>
      </div>
    </div>
  )}
</header>
    </>
  );
}