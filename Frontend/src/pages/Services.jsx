import { services } from "../data/servicesData";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <>

    <section
  className="
    relative
    lg:min-h-[50vh]
    overflow-hidden
    bg-[#F5F7FF]
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
            bg-[#EFF6FF]
            text-[#2563EB]
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
            text-[32px]
            sm:text-[42px]
            md:text-[52px]
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
            sm:flex-row
            gap-4
          "
        >
          <a href="#services">
            <button
              className="
                w-full sm:w-auto
                px-6 sm:px-8
                py-4
                rounded-2xl
                bg-gradient-to-r
                from-[#1178D4]
                to-[#6C63FF]
                text-white
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
                w-full sm:w-auto
                px-6 sm:px-8
                py-4
                rounded-2xl
                border
                border-slate-200
                bg-white
                text-[#071426]
                font-semibold
                hover:bg-slate-50
                transition-all
                duration-300
              "
            >
              Talk To Experts
            </button>
          </a>
        </div>

      </div>

      {/* RIGHT SIDE BENEFITS CARD */}
      <div
        className="
          hidden
          lg:block
        "
      >
        <div
          className="
            p-8
          "
        >

          <span
            className="
              inline-flex
              items-center
              px-4 py-2
              rounded-full
              bg-[#EFF6FF]
              text-[#2563EB]
              text-sm
              font-medium
              mb-6
            "
          >
            Business Benefits
          </span>

          <h3
            className="
              text-2xl
              font-bold
              text-[#071426]
              mb-6
            "
          >
            What You Gain
          </h3>

          <div className="space-y-5">

            <div className="flex items-center gap-3">
              <CheckCircle
                size={18}
                className="text-[#2563EB]"
              />
              <span className="text-slate-700 font-medium">
                Faster Accounting
              </span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle
                size={18}
                className="text-[#2563EB]"
              />
              <span className="text-slate-700 font-medium">
                Simplified GST Filing
              </span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle
                size={18}
                className="text-[#2563EB]"
              />
              <span className="text-slate-700 font-medium">
                Better Inventory Control
              </span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle
                size={18}
                className="text-[#2563EB]"
              />
              <span className="text-slate-700 font-medium">
                Automated Payroll
              </span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle
                size={18}
                className="text-[#2563EB]"
              />
              <span className="text-slate-700 font-medium">
                Accurate Business Reports
              </span>
            </div>

          </div>

        </div>
      </div>

    </div>
  </div>
</section>

    <section id="services" className="relative bg-[#F8FBFF] py-10 sm:py-12 md:py-14 overflow-hidden">

  <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">

    {/* SECTION HEADER */}
    <div className="text-center max-w-3xl mx-auto mb-12">

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
        text-[28px]
        sm:text-[38px]
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
          bg-gradient-to-r
          from-[#2F80FF]/10
          to-[#7B61FF]/10
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
      border border-[#D8E6FF]
      bg-[#F8FBFF]
      text-[#1178D4]
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
        w-full
        sm:w-auto
        px-5 sm:px-7
        py-3 sm:py-4
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