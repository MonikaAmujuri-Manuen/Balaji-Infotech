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
<header className="fixed inset-x-0 top-0 z-50 px-3 sm:px-6 lg:px-10 py-2">
  
  {/* GLASS NAVBAR */}
  <nav
    className="
      max-w-7xl mx-auto w-full
      flex items-center justify-between
      px-4 sm:px-5 lg:px-7
      py-3
      rounded-2xl
      bg-[#0B1220]/70
      border border-white/10
      backdrop-blur-2xl
      shadow-[0_8px_32px_rgba(0,0,0,0.35)]
    "
  >

    {/* LOGO */}
    <div className="flex items-center gap-2 sm:gap-3">

      <div
        className="
          h-10 w-10 sm:h-11 sm:w-11
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
        <h1 className="text-white text-base sm:text-lg font-semibold">
          Balaji Infotech
        </h1>

        <p className="text-white/60 text-[10px] sm:text-xs">
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
           px-4 py-2.5
           rounded-full
           transition-all duration-300
           ${
             isActive
               ? "bg-white/10 backdrop-blur-xl border border-white/10 text-white shadow-[0_4px_20px_rgba(255,255,255,0.08)]"
               : "text-white/70 hover:text-white hover:bg-white/5"
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
               ? "bg-white/10 backdrop-blur-xl border border-white/10 text-white shadow-[0_4px_20px_rgba(255,255,255,0.08)]"
               : "text-white/70 hover:text-white hover:bg-white/5"
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
                ? "bg-white/10 backdrop-blur-xl border border-white/10 text-white shadow-[0_4px_20px_rgba(255,255,255,0.08)]"
                : "text-white/70 hover:text-white hover:bg-white/5"
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
            bg-[#1F2937]/95
            backdrop-blur-xl
            border border-white/10
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
                text-white/70
                hover:text-white
                hover:bg-white/5
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
                ? "bg-white/10 backdrop-blur-xl border border-white/10 text-white shadow-[0_4px_20px_rgba(255,255,255,0.08)]"
                : "text-white/70 hover:text-white hover:bg-white/5"
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
            bg-[#1F2937]/95
            backdrop-blur-xl
            border border-white/10
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
                text-white/70
                hover:text-white
                hover:bg-white/5
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
               ? "bg-white/10 backdrop-blur-xl border border-white/10 text-white shadow-[0_4px_20px_rgba(255,255,255,0.08)]"
               : "text-white/70 hover:text-white hover:bg-white/5"
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
               ? "bg-white/10 backdrop-blur-xl border border-white/10 text-white shadow-[0_4px_20px_rgba(255,255,255,0.08)]"
               : "text-white/70 hover:text-white hover:bg-white/5"
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
               ? "bg-white/10 backdrop-blur-xl border border-white/10 text-white shadow-[0_4px_20px_rgba(255,255,255,0.08)]"
               : "text-white/70 hover:text-white hover:bg-white/5"
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
      px-5 py-3
      whitespace-nowrap
      rounded-xl
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
        text-white
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
        border border-white/10
        bg-[#071426]/95
        backdrop-blur-xl
        p-6
        shadow-2xl
        mx-1
      "
    >
      <div className="flex flex-col gap-1">

        <NavLink
          to="/"
          className="text-white/90 py-3 border-b border-white/5"
          onClick={() => setMobileMenu(false)}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className="text-white/70 py-3 border-b border-white/5"
          onClick={() => setMobileMenu(false)}
        >
          About
        </NavLink>

        <NavLink
          to="/products"
          className="text-white/70 py-3 border-b border-white/5"
          onClick={() => setMobileMenu(false)}
        >
          Products
        </NavLink>

        <NavLink
          to="/services"
          className="text-white/70 py-3 border-b border-white/5"
          onClick={() => setMobileMenu(false)}
        >
          Services
        </NavLink>

        <NavLink
          to="/education"
          className="text-white/70 py-3 border-b border-white/5"
          onClick={() => setMobileMenu(false)}
        >
          Education
        </NavLink>

        <NavLink
          to="/lms"
          className="text-white/70 py-3 border-b border-white/5"
          onClick={() => setMobileMenu(false)}
        >
          LMS
        </NavLink>

        <NavLink
          to="/contact"
          className="text-white/70 py-3"
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
            bg-gradient-to-r from-[#2F80FF] to-[#7B61FF]
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