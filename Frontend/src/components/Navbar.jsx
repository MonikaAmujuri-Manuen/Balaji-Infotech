import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {/* BACKGROUND WRAPPER */}
      {/* BACKGROUND WRAPPER */}
<header className="fixed inset-x-0 top-0 z-100 px-3 sm:px-6 lg:px-10 py-0">
  
  {/* GLASS NAVBAR */}
  <nav
    className="
      max-w-7xl mx-auto 
      flex items-center justify-between
      px-4 lg:px-5
      py-3
      rounded-2xl
      bg-white
border border-slate-200
backdrop-blur-2xl
shadow-lg
    "
  >

    {/* LOGO */}
    <div className="flex items-center gap-2 sm:gap-3">

      <div
        className="
          h-9 w-9
          rounded-xl
          bg-gradient-to-br from-[#2F80FF] to-[#7B61FF]
          flex items-center justify-center
          text-white font-bold text-base sm:text-lg
          shadow-lg
          shrink-0
        "
      >
        B
      </div>

      <div className="leading-tight">
        <h1 className="text-[#071426] text-[15px] font-semibold">
          Balaji Infotech
        </h1>

        <p className="text-black text-[10px] sm:text-xs">
          Tally Solutions Partner
        </p>
      </div>
    </div>

    {/* DESKTOP MENU */}
    <div className="hidden lg:flex items-center gap-2 xl:gap-3">

      <NavLink
        to="/"
        className={({ isActive }) =>
          `relative
           px-3 py-2
           text-[15px]
           rounded-full
           transition-all duration-300
           ${
             isActive
               ? "bg-[#EEF4FF] text-[#2563EB] font-medium"
               : "text-slate-600 hover:text-[#2563EB]"
           }`
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
               ? "bg-[#EEF4FF] text-[#2563EB] font-medium"
               : "text-black hover:text-[#2563EB]"
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
               ? "bg-[#EEF4FF] text-[#2563EB] font-medium"
               : "text-black hover:text-[#2563EB]"
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
                hover:text-[#2563EB]
                hover:bg-[#F8FAFC]
                transition-all duration-300
                border-b border-white/5
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
               ? "bg-[#EEF4FF] text-[#2563EB] font-medium"
               : "text-black hover:text-[#2563EB]"
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
                hover:text-[#2563EB]
                hover:bg-[#F8FAFC]
                transition-all duration-300
                border-b border-white/5
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
               ? "bg-[#EEF4FF] text-[#2563EB] font-medium"
               : "text-black hover:text-[#2563EB]"
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
               ? "bg-[#EEF4FF] text-[#2563EB] font-medium"
               : "text-black hover:text-[#2563EB]"
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
               ? "bg-[#EEF4FF] text-[#2563EB] font-medium"
               : "text-black hover:text-[#2563EB]"
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
      bg-gradient-to-r from-[#2F80FF] to-[#7B61FF]
      hover:scale-105
      transition duration-300
      shadow-[0_8px_20px_rgba(123,97,255,0.35)]
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
        text-[#071426]
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
          className="text-black py-3 border-b border-black/50"
          onClick={() => setMobileMenu(false)}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className="text-slate-700 py-3 border-b border-black/50"
          onClick={() => setMobileMenu(false)}
        >
          About
        </NavLink>

        <NavLink
          to="/products"
          className="text-slate-700 py-3 border-b border-black/50"
          onClick={() => setMobileMenu(false)}
        >
          Products
        </NavLink>

        <NavLink
          to="/services"
          className="text-slate-700 py-3 border-b border-black/50"
          onClick={() => setMobileMenu(false)}
        >
          Services
        </NavLink>

        <NavLink
          to="/education"
          className="text-slate-700 py-3 border-b border-black/50"
          onClick={() => setMobileMenu(false)}
        >
          Education
        </NavLink>

        <NavLink
          to="/lms"
          className="text-slate-700 py-3 border-b border-black/50"
          onClick={() => setMobileMenu(false)}
        >
          LMS
        </NavLink>

        <NavLink
          to="/contact"
          className="text-slate-700 py-3"
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
            bg-gradient-to-r
            from-[#2F80FF]
            to-[#7B61FF]
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