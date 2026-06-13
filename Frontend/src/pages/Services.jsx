import { services } from "../data/servicesData";
import { ArrowRight, CheckCircle } from "lucide-react";
import {
  Briefcase,
  Cloud,
  Headphones,
  GraduationCap,
  Settings,
  Rocket,
  Database,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <>

    <section
  className="
    relative
    lg:min-h-[50vh]
    overflow-hidden
    bg-[#F4F8FC]
    px-4 sm:px-4 lg:px-8
    pt-12
    
    flex items-center
  "
>
  <div className="relative z-10 max-w-7xl mx-auto w-full py-6 sm:py-8 md:py-10">

    <div
      className="
        grid
        lg:grid-cols-[1.2fr_0.8fr]
        gap-10 lg:gap-16
        items-center
      "
    >

      {/* LEFT CONTENT */}
      <div>

        {/* LABEL */}
        <p
          className="
            inline-flex
            items-center
            gap-2
            px-4
            sm:px-5
            py-2
            rounded-full
            bg-[#EDF4FA]
            text-[#155A96]
            text-sm
            font-medium
            mb-6
          "
        >
          Services
        </p>

        {/* HEADING */}
        <h1
          className="
            text-3xl
            sm:text-4xl
            md:text-[42px]
            font-bold
            text-[#071426]
            leading-[1.05]
            tracking-tight
            max-w-4xl
          "
        >
          Transform Your Business
          <br />
          With Smart Tally Services
        </h1>

        {/* DESCRIPTION */}
        <p
          className="
            mt-6
            text-[15px]
            sm:text-lg
            text-slate-600
            leading-relaxed
            max-w-3xl
          "
        >
          From implementation and customization to cloud hosting and
          support, we help businesses streamline operations, improve
          efficiency, and scale confidently with Tally solutions.
        </p>

        {/* BUTTONS */}
        <div
  className="
    mt-8
    flex
    flex-col
    items-center
    sm:flex-row
    gap-3
  "
>
  <a href="#services">
    <button
      className="
        px-5 sm:px-8
        py-2.5 sm:py-4
        rounded-xl sm:rounded-2xl
        bg-[#155A96]
        hover:bg-[#1D6FB8]
        text-white
        text-sm sm:text-base
        font-semibold
        transition-all
        duration-300
      "
    >
      Explore Services
    </button>
  </a>

  <a href="tel:+919849431943">
    <button
      className="
        px-5 sm:px-8
        py-2.5 sm:py-4
        rounded-xl sm:rounded-2xl
        border
        border-[#D9E7F5]
        hover:border-[#155A96]
        bg-white
        text-[#071426]
        text-sm sm:text-base
        font-semibold
        transition-all
        duration-300
      "
    >
      Talk To Experts
    </button>
  </a>
</div>

      </div>

      {/* RIGHT SIDE SERVICE ECOSYSTEM */}
<div className="hidden lg:flex justify-center items-center">

  <div className="w-[520px]">

    {/* Top */}
    <div className="flex justify-center mb-5">
      <div className="service-pill">
        <Headphones size={18} />
        Support
      </div>
    </div>

    {/* Middle */}
    <div className="flex justify-center gap-4 items-center mb-5">

      <div className="service-pill">
        <Settings size={18} />
        Customization
      </div>

      <div
  className="
    px-7
    py-4
    rounded-2xl
    bg-[#155A96]
    text-white
    shadow-[0_20px_40px_rgba(21,90,150,0.20)]
    flex
    items-center
    gap-4
  "
>
  <div
    className="
      w-10 h-10
      rounded-xl
      bg-white/15
      flex
      items-center
      justify-center
    "
  >
    <Briefcase size={18} />
  </div>

  <div>
    <p className="font-bold text-lg">
      Tally Services
    </p>

  </div>
</div>

      <div className="service-pill">
        <Cloud size={18} />
        Cloud Hosting
      </div>

    </div>

    {/* Bottom */}
    <div className="flex justify-center gap-4">

      <div className="service-pill">
        <GraduationCap size={18} />
        Training
      </div>

      <div className="service-pill">
        <Rocket size={18} />
        Implementation
      </div>

    </div>

  </div>

</div>

    </div>
  </div>
</section>

    <section id="services" className="relative bg-white py-10 sm:py-12 md:py-14 overflow-hidden">

  <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">

    {/* SECTION HEADER */}
    <div className="text-center max-w-3xl mx-auto mb-10">

      <div className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              bg-[#EEF4F8]
              text-[#155A96]
              text-sm
              font-medium
              mb-6
            ">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Our Services
            </div>

      <h2 className="
        text-3xl
        sm:text-4xl
        md:text-[46px]
        font-black
        text-[#071426]
        leading-tight
      ">
        Smart Solutions For
          Modern Businesses
      </h2>

      <p className="
        mt-6
        text-[15px]
        sm:text-lg
        text-[#64748B]
        leading-relaxed
      ">
        From Tally implementation to cloud infrastructure,
        we deliver scalable business solutions tailored for
        growth and efficiency.
      </p>

    </div>

    {/* GRID */}
    <div className="
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      gap-6
      sm:gap-8
    ">

      {services.map((service, index) => {

        const Icon = service.icon;

        return (

          <Link
            key={index}
            to={service.path}
            className="
              group relative overflow-hidden
              rounded-[22px]
              sm:rounded-[28px]
              border border-[#E2E8F0]
              bg-white
              hover:border-[#155A96]/20
              hover:shadow-[0_20px_60px_rgba(21,90,150,0.08)]
              transition-all duration-500
              hover:-translate-y-2
              p-5
              sm:p-6
              lg:p-7
              "
          >

        
            {/* ICON */}
            <div
              className="
              w-14 h-14
              sm:w-16 sm:h-16 rounded-3xl
              bg-[#F4F7FA]
              border border-[#E2E8F0]
              flex items-center justify-center
              transition-all duration-500
              group-hover:bg-gradient-to-br
              group-hover:bg-[#155A96]
              group-hover:shadow-[0_10px_30px_rgba(21,90,150,0.18)]
            "
            >

              <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#155A96] transition-all duration-500 group-hover:text-white" />

            </div>

            {/* TITLE */}
            <h3 className="
                text-[20px]
                sm:text-[24px]
                md:text-[26px]
                font-[700]
                text-[#071426]
                mb-4
                ">
              {service.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="
                text-[14px]
                sm:text-[15px]
                leading-7
                text-[#5B6475]
                ">
              {service.description}
            </p>

            {/* FOOTER */}
            <div className="
                mt-10 flex items-center gap-3
                text-[#155A96]
                group-hover:text-[#0F4D82]
                font-[600]
                text-[17px]
                transition-all duration-300
                
              ">
              <span>Explore Service</span>

              <ArrowRight
                className="
                w-5 h-5
                transition-transform duration-300
                group-hover:translate-x-2
                "
              />
           </div>

            <div className="
              absolute bottom-0 left-0
              h-[3px] w-0
              bg-[#155A96]
              transition-all duration-500
              group-hover:w-full
              " />

          </Link>

        );
      })}

    </div>

  </div>

</section>

{/* ================= CTA SECTION ================= */}

<section className="relative py-10 sm:py-12 bg-white overflow-hidden">

  <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[400px]
          h-[400px]
          sm:w-[550px]
          sm:h-[550px]
          lg:w-[700px]
          lg:h-[700px]
          bg-[#155A96]/10
          blur-3xl
          rounded-full
        "
      />
  
  <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">

    {/* BADGE */}
    
    <div
      className="
      inline-flex items-center
      px-5 py-2
      rounded-full
      border border-[#155A96]
      bg-[#F8FBFF]
      text-[#155A96]
      text-sm font-semibold
      tracking-[0.22em]
      uppercase
      mb-5
      "
    >
      Free Consultation
    </div>

    {/* HEADING */}
    <h2
      className="
      text-[26px]
      sm:text-[34px]
      md:text-[42px]
      leading-[1.05]
      font-[800]
      text-[#071426]
      "
    >
      Let’s Transform Your
      Business Workflow
    </h2>

    {/* DESCRIPTION */}
    <p
      className="
      mt-5
      text-[16px]
      md:text-[17px]
      leading-[1.9]
      text-[#5B6475]
      max-w-4xl
      mx-auto
      "
    >
      Connect with our experts to discover the right
      Tally solutions, services, and automation tools
      tailored for your business growth.
    </p>

    {/* BUTTONS */}
    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">

  {/* PRIMARY BUTTON */}
  <a href="/contact">
    <button
      className="
        px-5 sm:px-7
        py-2.5 sm:py-4
        rounded-xl sm:rounded-2xl
        bg-[#155A96]
        text-white
        text-sm sm:text-[17px]
        font-semibold
        shadow-[0_10px_30px_rgba(21,90,150,0.08)]
        transition-all duration-300
        hover:scale-[1.04]
      "
    >
      Get Free Consultation
    </button>
  </a>

  {/* SECONDARY BUTTON */}
  <a href="tel:+919849431943">
    <button
      className="
        px-5 sm:px-10
        py-2.5 sm:py-5
        rounded-xl sm:rounded-2xl
        border border-[#155A96]
        bg-white
        text-[#071426]
        text-sm sm:text-[17px]
        font-semibold
        transition-all duration-300
        hover:border-[#155A96]
        hover:text-[#1178D4]
        shadow-[0_10px_30px_rgba(21,90,150,0.08)]
      "
    >
      Talk To Experts
    </button>
  </a>

</div>

  </div>
</section>

</>
  );
}