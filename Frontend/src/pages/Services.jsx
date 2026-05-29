import { services } from "../data/servicesData";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <>

    <section className="
      relative
      lg:min-h-screen
      text-white
      overflow-hidden
      bg-[#071426]
      border-b border-white/5
      px-4 sm:px-6 lg:px-10
      pt-24
      sm:pt-28
      lg:pt-0
      flex items-center">

  
  {/* BACKGROUND GLOW */}
      <div
          className="
            absolute
            top-[-200px]
            left-1/2
            -translate-x-1/2
            w-[450px]
            h-[450px]
            sm:w-[650px]
            sm:h-[650px]
            lg:w-[900px]
            lg:h-[900px]
            bg-gradient-to-r
            from-[#2F80FF]/20
            to-[#7B61FF]/20
            blur-3xl
            rounded-full
          "
        />

  {/* CONTENT */}
  <div className="relative z-10 max-w-7xl mx-auto px-0 py-14 sm:py-20 md:py-24">

    <div className="max-w-4xl">

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
                border border-white/10
                bg-white/5
                backdrop-blur-xl
                text-white/70
                text-sm
                mb-8
              "
            >
              Services
            </p>

      {/* HEADING */}
      <h1 className="
        text-[36px]
        sm:text-5xl
        md:text-6xl
        font-black
        leading-[1.05]
        tracking-tight
        max-w-4xl
      ">
        Transform Your Business <br/>
        <span className=" bg-gradient-to-r
                  from-[#2F80FF]
                  to-[#7B61FF]
                  bg-clip-text
                  text-transparent">
          With Smart Tally Services
        </span>
      </h1>

      {/* DESCRIPTION */}
      <p className="
        mt-8
        text-[15px]
        sm:text-lg
        md:text-xl
        text-[#B6C2D1]
        leading-relaxed
        max-w-3xl
      ">
        From implementation and customization to cloud hosting and
        support, we help businesses streamline operations, improve
        efficiency, and scale confidently with Tally solutions.
      </p>

      {/* BUTTONS */}
      <div className="mt-10
            flex
            flex-col
            sm:flex-row
            sm:flex-wrap
            gap-4">
        
        <a href="#services">
        <button className="
          w-full sm:w-auto
          px-6
          sm:px-8
          py-4 rounded-2xl
          bg-gradient-to-r from-[#1178D4] to-[#6C63FF]
          hover:scale-105
          transition-all duration-300
          font-semibold
          shadow-[0_0_40px_rgba(17,120,212,0.35)]
        ">
          Explore Services
        </button>
        </a>

        <a href="tel:+919849431943">
        <button className="
          w-full sm:w-auto
          px-6
          sm:px-8
          py-4 rounded-2xl
          border border-white/10
          bg-white/5
          hover:bg-white/10
          transition-all duration-300
          backdrop-blur-md
          font-semibold
        ">
          Talk To Experts
        </button>
        </a>

      </div>

    </div>
  </div>

    </section>

    <section id="services" className="relative bg-[#F8FBFF] py-16 sm:py-20 md:py-24 overflow-hidden">

  {/* BACKGROUND GLOW */}
  <div className="absolute inset-0">

    <div className="
      absolute top-0 left-0
      w-[500px] h-[500px]
      bg-[#1178D4]
      opacity-[0.08] blur-[140px]
      rounded-full
    " />

    <div className="
      absolute bottom-0 right-0
      w-[400px] h-[400px]
      bg-[#6C63FF]
      opacity-[0.06] blur-[120px]
      rounded-full
    " />

  </div>

  <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">

    {/* SECTION HEADER */}
    <div className="text-center max-w-3xl mx-auto mb-20">

      <div className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              bg-[#2F80FF]/10
              text-[#2F80FF]
              text-sm
              font-medium
              mb-6
            ">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Our Services
            </div>

      <h2 className="
        text-[32px]
        sm:text-5xl
        md:text-6xl
        font-black
        text-[#071426]
        leading-tight
      ">
        Smart Solutions For
        <span className="block text-[#071426]/90">
          Modern Businesses
        </span>
      </h2>

      <p className="
        mt-6
        text-[15px]
        sm:text-lg
        text-[#A8B3C7]
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
              border border-[#E5EAF2]
              bg-white
              p-6
              sm:p-8
              lg:p-10
              transition-all duration-500
              hover:bg-[#F5F7FF]
              hover:-translate-y-2
              hover:shadow-[0_20px_60px_rgba(17,120,212,0.12)]
              "
          >

            {/* CARD GLOW */}
            <div className="
          absolute inset-0
          opacity-0
          group-hover:opacity-100
          transition duration-500
          bg-gradient-to-br
          from-[#2F80FF]/10
          to-[#7B61FF]/10
        " />
        
            {/* ICON */}
            <div
              className="
              w-14 h-14
              sm:w-16 sm:h-16 rounded-3xl
              bg-[#F5F7FF]
              border border-[#E8EEFF]
              flex items-center justify-center
              transition-all duration-500
              group-hover:bg-gradient-to-br
              group-hover:from-[#1178D4]
              group-hover:to-[#6C63FF]
              group-hover:shadow-[0_10px_30px_rgba(108,99,255,0.25)]
            "
            >

              <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#1178D4] transition-all duration-500 group-hover:text-white" />

            </div>

            {/* TITLE */}
            <h3 className="
                text-[24px]
                sm:text-[30px]
                md:text-[34px]
                font-[700]
                text-[#071426]
                mb-4
                ">
              {service.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="
                text-[15px]
                sm:text-[17px]
                leading-[1.8]
                text-[#5B6475]
                ">
              {service.description}
            </p>

            {/* FOOTER */}
            <div className="
                mt-10 flex items-center gap-3
                text-[#1178D4]
                font-[600]
                text-[17px]
                transition-all duration-300
                group-hover:text-[#6C63FF]
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
              bg-gradient-to-r from-[#1178D4] to-[#6C63FF]
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

<section className="relative py-16 sm:py-20 bg-white overflow-hidden">

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
          bg-gradient-to-r
          from-[#2F80FF]/10
          to-[#7B61FF]/10
          blur-3xl
          rounded-full
        "
      />

  {/* SOFT BACKGROUND GLOWS */}
  <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#1178D4]/[0.05] blur-[120px] rounded-full" />

  <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#6C63FF]/[0.05] blur-[120px] rounded-full" />

  <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">

    {/* BADGE */}
    
    <div
      className="
      inline-flex items-center
      px-5 py-2
      rounded-full
      border border-[#D8E6FF]
      bg-[#F8FBFF]
      text-[#1178D4]
      text-sm font-semibold
      tracking-[0.22em]
      uppercase
      mb-8
      "
    >
      Free Consultation
    </div>

    {/* HEADING */}
    <h2
      className="
      text-[32px]
      sm:text-[45px]
      md:text-[60px]
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
      mt-8
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
    <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-5">

      {/* PRIMARY BUTTON */}
      <a href="/contact">
      <button
        className="
        w-full
        sm:w-auto
        px-6
        sm:px-10
        py-4
        sm:py-5
        rounded-2xl
        bg-gradient-to-r
        from-[#1178D4]
        to-[#6C63FF]
        text-white
        text-[17px]
        font-semibold
        shadow-[0_10px_40px_rgba(108,99,255,0.25)]
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
        px-10 py-5
        rounded-2xl
        border border-[#DDE7F5]
        bg-white
        text-[#071426]
        text-[17px]
        font-semibold
        transition-all duration-300
        hover:border-[#1178D4]
        hover:text-[#1178D4]
        hover:shadow-[0_10px_30px_rgba(17,120,212,0.08)]
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