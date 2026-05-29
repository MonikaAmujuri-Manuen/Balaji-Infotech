import { Link } from "react-router-dom";
import {
  Mail,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (

    <footer className="relative overflow-hidden bg-[#071426] text-white">

  {/* BACKGROUND GLOW */}
  <div className="absolute inset-0 overflow-hidden">

    <div
      className="
        absolute
        top-0
        left-[-10%]
        w-[500px]
        h-[480px]
        bg-[#2F80FF]/10
        blur-3xl
        rounded-full
      "
    />

    <div
      className="
        absolute
        bottom-[-20%]
        right-[-10%]
        w-[500px]
        h-[500px]
        bg-[#7B61FF]/10
        blur-3xl
        rounded-full
      "
    />
  </div>

  <div
    className="
      relative
      max-w-7xl
      mx-auto
      px-4 sm:px-6 lg:px-8
      py-12
      sm:py-14
    "
  >

    {/* TOP GRID */}
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        gap-10
        lg:gap-12
        items-start
      "
    >

      {/* COLUMN 1 */}
      <div>

        {/* LOGO */}
        <div className="flex items-center gap-3 sm:gap-4 mb-4">

          <div
            className="
              w-12 h-12
              sm:w-14 sm:h-14
              rounded-2xl
              bg-gradient-to-br
              from-[#2F80FF]
              to-[#7B61FF]
              flex
              items-center
              justify-center
              text-white
              text-2xl
              font-bold
              shadow-[0_10px_30px_rgba(47,128,255,0.35)]
            "
          >
            B
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold">
              Balaji Infotech
            </h3>

            <p className="text-gray-400 text-sm">
              Tally Solutions Partner
            </p>
          </div>
        </div>

        {/* DESCRIPTION */}
        <p
          className="
            text-gray-400
            leading-7
            text-sm
            sm:text-[16px]
            max-w-sm
          "
        >
          Empowering businesses with modern Tally solutions,
          enterprise support, automation services, and
          smart accounting infrastructure.
        </p>

        {/* SOCIALS */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-6 sm:mt-8">

          {[
            {
              icon: FaFacebookF,
              link: "https://facebook.com/balajiinfotechguntur",
            },
            {
              icon: FaInstagram,
              link: "https://www.instagram.com/balaji_ai_infotech_pvt_ltd?",
            },
            {
              icon: FaLinkedinIn,
              link: "https://linkedin.com",
            },
            {
              icon: Mail,
              link: "mailto:gunturtally@gmail.com",
            },
          ].map((item, index) => {

  const Icon = item.icon;

  return (
    <a
      key={index}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        w-11 h-11
        sm:w-12 sm:h-12
        rounded-2xl
        bg-white/5
        border border-white/10
        flex
        items-center
        justify-center
        transition-all
        duration-300
        hover:-translate-y-1
        hover:bg-gradient-to-br
        hover:from-[#2F80FF]
        hover:to-[#7B61FF]
        hover:border-transparent
        hover:shadow-[0_10px_25px_rgba(47,128,255,0.35)]
      "
    >
      <Icon
        size={20}
        className="
          text-gray-300
          transition-all
          duration-300
          group-hover:text-white
        "
      />
    </a>
  );
})}
        </div>
      </div>

      {/* COLUMN 2 */}
      <div>

        <h4
          className="
            text-lg
            sm:text-xl
            font-semibold
            mb-6
          "
        >
          Quick Links
        </h4>

        <div className="space-y-3">

  {[
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Education", path: "/education" },
    { name: "LMS", path: "/lms" },
    { name: "Contact", path: "/contact" },
  ].map((item, index) => (

    <Link
      key={index}
      to={item.path}
      className="
        group
        flex
        items-center
        gap-2
        text-gray-400
        hover:text-white
        transition-all
        duration-300
      "
    >
      <ArrowRight
        size={16}
        className="
          opacity-0
          -translate-x-2
          transition-all
          duration-300
          group-hover:opacity-100
          group-hover:translate-x-0
        "
      />

      <span>{item.name}</span>
    </Link>
  ))}
</div>
      </div>

      {/* COLUMN 3 */}
      <div>

        <h4
          className="
            text-lg
            sm:text-xl
            font-semibold
            mb-7
          "
        >
          Services
        </h4>

        <div className="space-y-4">

        {[
          { name: "Tally Software", path: "/services/tally-software" },
          { name: "Tally Services", path: "/services/tally-services" },
          { name: "Tally ERP Solutions", path: "/services/tally-erp" },
          { name: "TallyPrime Server", path: "/products/tally-server" },
          { name: "Tally Add-Ons", path: "/services/tally-addons" },
          { name: "Tally Mobile Apps", path: "/services/mobile-apps" },
        ].map((item, index) => (

          <Link
            key={index}
            to={item.path}
            className="
              block
              text-gray-400
              hover:text-white
              transition-all
              duration-300
              hover:translate-x-1
            "
          >
            {item.name}
          </Link>
        ))}
        </div>
      </div>

      {/* COLUMN 4 */}
      <div>

        <h4
          className="
            text-lg
            sm:text-xl
            font-semibold
            mb-8
          "
        >
          Contact
        </h4>

        <div className="space-y-5">

          {/* ADDRESS */}
          <div className="flex items-start gap-4">

            <div
              className="
                w-11
                h-11
                rounded-xl
                bg-white/5
                border border-white/10
                flex
                items-center
                justify-center
                shrink-0
              "
            >
              <MapPin
                size={18}
                className="text-[#7B61FF]"
              />
            </div>

            <div>
              <p className="text-gray-300 leading-6">
                Brodipet, Guntur,
                Andhra Pradesh 522002
              </p>
            </div>
          </div>

          {/* PHONE */}
          <div className="flex gap-4">

            <div
              className="
                w-11
                h-11
                rounded-xl
                bg-white/5
                border border-white/10
                flex
                items-center
                justify-center
                shrink-0
              "
            >
              <Phone
                size={18}
                className="text-[#2F80FF]"
              />
            </div>

            <div>
              <p className="text-gray-300">
                +91 98494 31943
              </p>
            </div>
          </div>

          {/* EMAIL */}
          <div className="flex gap-4">

            <div
              className="
                w-11
                h-11
                rounded-xl
                bg-white/5
                border border-white/10
                flex
                items-center
                justify-center
                shrink-0
              "
            >
              <Mail
                size={18}
                className="text-[#7B61FF]"
              />
            </div>

            <div>
              <p className="text-gray-300">
                gunturtally@gmail.com
              </p>
            </div>
          </div>
        </div>

        
      </div>
    </div>

    {/* BOTTOM BAR */}
    <div
      className="
        mt-3
        pt-1
        border-t border-white/10
        flex
        flex-col
        md:flex-row
        items-center
        justify-between
        gap-4
        text-center
        md:text-left
      "
    >

      <p className="text-gray-500 text-sm">
        © 2026 Balaji Infotech. All rights reserved.
      </p>

      <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 sm:gap-5">

        <a
          href="#"
          className="
            text-gray-500
            text-sm
            hover:text-white
            transition-all
            duration-300
          "
        >
          Privacy Policy
        </a>

        <a
          href="#"
          className="
            text-gray-500
            text-sm
            hover:text-white
            transition-all
            duration-300
          "
        >
          Terms & Conditions
        </a>
      </div>
    </div>
  </div>
</footer>
  );
}