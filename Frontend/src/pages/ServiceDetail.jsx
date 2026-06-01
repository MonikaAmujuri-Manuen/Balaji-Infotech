import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Phone } from "lucide-react";
import { Link } from "react-router-dom";

import { servicesData } from "../data/servicesData";

const ServiceDetail = () => {

  const { slug } = useParams();

  const service = servicesData.find(
    (item) => item.slug === slug
  );

  const [activeTab, setActiveTab] = useState(
  service?.subServices?.[0] || null
);

  useEffect(() => {
    if (service?.subServices?.length > 0) {
      setActiveTab(service.subServices[0]);
    }
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
        Service Not Found
      </div>
    );
  }

  const ActiveIcon = activeTab?.icon;

  return (
    <>
      
      {/* HERO SECTION */}
      {service.hero && (
        <section className="relative overflow-hidden bg-white">

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

  {/* LIGHT GRADIENTS */}
  <div className="absolute inset-0 overflow-hidden">

    <div className="
      absolute top-[-200px] left-[-150px]
      w-[420px] h-[420px]
      bg-[#1178D4]/10
      blur-[120px]
      rounded-full
    " />

    <div className="
      absolute bottom-[-200px] right-[-150px]
      w-[420px] h-[420px]
      bg-[#6C63FF]/10
      blur-[120px]
      rounded-full
    " />

  </div>

  <div className="
    relative z-10
    max-w-7xl mx-auto
    px-4 sm:px-6
    pt-24
    sm:pt-28
    lg:pt-32
    pb-16
    sm:pb-24
    text-center
  ">

    {/* BADGE */}
    <div className="
      inline-flex items-center
      px-4
      sm:px-5
      py-2
      rounded-full
      border border-[#DCEBFF]
      bg-[#F1F6FE]
      text-[#7B61FF]
      text-sm
      font-semibold
      tracking-[0.2em]
      uppercase
      mb-8
    ">
      {service.hero.badge}
    </div>

    {/* TITLE */}
    <h1 className="
      text-[34px]
      sm:text-[48px]
      lg:text-[60px]
      leading-[1]
      font-[800]
      text-[#071426]
      max-w-5xl
      mx-auto
    ">

      {service.hero.title}

      <span className="
                bg-gradient-to-r
                from-[#2F80FF]
                to-[#7B61FF]
                bg-clip-text
                text-transparent
              ">
        {service.hero.highlight}
      </span>

    </h1>

    {/* DESCRIPTION */}
    <p className="
      mt-8
      text-[15px]
      sm:text-[16px]
      md:text-[17px]
      leading-[1.9]
      text-[#475569]
      max-w-3xl
      mx-auto
    ">
      {service.hero.description}
    </p>

    {/* BUTTONS */}
    <div className="
      mt-10
      flex flex-col sm:flex-row
      items-center justify-center
      gap-5
    ">

      {/* PRIMARY */}
      <a href={service.hero.primaryLink}>
      <button className="
        w-full
        sm:w-auto
        px-6
        sm:px-8
        py-4
        rounded-2xl
        bg-gradient-to-r
        from-[#1178D4]
        to-[#6C63FF]
        text-white
        font-semibold
        text-lg
        shadow-[0_10px_40px_rgba(17,120,212,0.20)]
        hover:scale-[1.03]
        transition-all duration-300
      ">
        {service.hero.primaryBtn}
      </button>
      </a>

    </div>

  </div>

</section>
      )}

      
      {/* TABS SECTION */}
      {service.subServices &&(
      <section className="py-14 sm:py-20 md:py-24 px-4 sm:px-6 bg-white">

      <div className="max-w-7xl mx-auto">

    {/* SECTION TITLE */}
    <div className="text-center mb-14">

      <div className="
        inline-flex items-center
        px-5 py-2
        rounded-full
        bg-[#F1F6FE]
        border border-[#DCEBFF]
        text-[#1178D4]
        text-sm
        font-semibold
        tracking-[0.15em]
        uppercase
        mb-6
      ">
        Explore Services
      </div>

      <h2 className="
        text-[30px]
        sm:text-4xl
        lg:text-5xl
        font-bold
        text-[#071426]
        leading-tight
      ">
        Business Solutions Tailored For You
      </h2>

    </div>

    {/* MAIN CONTAINER */}
    <div className="
        relative
        rounded-[24px]
        sm:rounded-[36px]
        border border-[#D9E3F0]
        bg-gradient-to-br
        from-white
        to-[#F8FBFF]
        overflow-hidden

        shadow-[0_10px_40px_rgba(15,23,42,0.06)]

        before:absolute
        before:inset-0
        before:rounded-[36px]
        before:border
        before:border-white/60
        before:pointer-events-none"
    >
        <div className="
            absolute inset-0
            bg-[radial-gradient(circle_at_top_left,rgba(17,120,212,0.05),transparent_35%)]
            pointer-events-none
            " />

      <div className="flex flex-col lg:flex-row">

        {/* ===================================== */}
        {/* LEFT SIDEBAR TABS */}
        {/* ===================================== */}

        <div className="
            lg:w-[300px]
            flex
            flex-col
            justify-center
            self-stretch
            border-b lg:border-b-0 lg:border-r
            border-[#E2E8F0]
            bg-[#F8FAFC]
            ">

          <div className="
            flex lg:flex-col
            gap-4
            overflow-x-auto
            p-4
            sm:p-6
            scrollbar-hide
            h-full
            ">

            {service.subServices.map((item) => {

              const isActive = activeTab?.id === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item)}
                  className={`
                    group
                    relative
                    px-5
                    sm:px-6
                    py-4
                    sm:py-5
                    rounded-2xl
                    text-left
                    border
                    whitespace-normal
                    break-words
                    transition-all duration-300
                    shrink-0

                    ${isActive
                      ? "bg-gradient-to-r from-[#1178D4] to-[#6C63FF] text-white border-transparent shadow-[0_10px_30px_rgba(17,120,212,0.20)]"
                      : "bg-white border-[#E2E8F0] text-[#0F172A] hover:border-[#1178D4]/40 hover:bg-[#F8FBFF]"
                    }
                  `}
                >

                  <div className="
                    flex items-start justify-between
                    gap-4
                  ">

                    <span className="
                      font-semibold
                      text-[15px]
                      sm:text-base
                      leading-snug
                      pr-2
                    ">
                      {item.tab}
                    </span>

                    <ArrowRight className={`
                      w-5 h-5
                      transition-all duration-300

                      ${isActive
                        ? "text-white translate-x-1"
                        : "text-[#94A3B8] group-hover:text-[#1178D4]"
                      }
                    `} />

                  </div>

                </button>
              );
            })}

          </div>

        </div>

        {/* ===================================== */}
        {/* RIGHT CONTENT */}
        {/* ===================================== */}

        <div className="flex-1 relative overflow-hidden">

            <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[350px]
          h-[350px]
          sm:w-[500px]
          sm:h-[500px]
          lg:w-[700px]
          lg:h-[700px]
          bg-gradient-to-r
          from-[#2F80FF]/10
          to-[#7B61FF]/10
          blur-3xl
          rounded-full
        "
      />

            <div className="
            absolute top-[-120px] right-[-120px]
            w-[320px] h-[320px]
            bg-[#1178D4]/10
            blur-[100px]
            rounded-full
            " />

            <div className="
            absolute bottom-[-120px] left-[-120px]
            w-[320px] h-[320px]
            bg-[#6C63FF]/10
            blur-[100px]
            rounded-full
            " />

          <AnimatePresence mode="wait">

            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.35 }}
              className="
                p-5
                sm:p-8
                md:p-12
                lg:p-16
              "
            >

            <div className="flex items-center gap-4 sm:gap-5">

            {/* ICON */}
            <div className="
                w-14 h-14
                sm:w-16 sm:h-16
                min-w-[56px]
                min-h-[56px]
                sm:min-w-[64px]
                sm:min-h-[64px]
                flex items-center justify-center
                rounded-2xl
                bg-gradient-to-br from-[#1178D4] to-[#6C63FF]
                shadow-[0_10px_30px_rgba(17,120,212,0.20)]
                shrink-0
              ">

                {ActiveIcon && (
  <ActiveIcon className="w-8 h-8 text-white" />
)}

            </div>

            {/* TITLE */}
            <div>

                <p className="
                text-sm
                font-semibold
                tracking-[0.2em]
                uppercase
                text-[#1178D4]
                mb-2
                ">
                Business Solution
                </p>

                <h3 className="
                text-[24px]
                sm:text-2xl
                md:text-3xl
                font-bold
                text-[#071426]
                leading-tight
                ">
                {activeTab.title}
                </h3>

            </div>

            </div>

              {/* DESCRIPTION */}
              <p className="
                mt-6
                text-[15px]
                sm:text-lg
                leading-[1.9]
                text-[#475569]
                max-w-3xl
              ">
                {activeTab.description}
              </p>

              {/* FEATURES */}
              <div className="
                mt-10
                grid grid-cols-1 sm:grid-cols-2
                gap-x-10
                gap-y-6
                max-w-4xl
              ">

                {activeTab.points.map((point, index) => (

                  <div
                    key={index}
                    className="flex items-start gap-4"
                  >

                    {/* ICON */}
                    <div className="
                      w-9 h-9
                      rounded-full
                      bg-[#F1F6FE]
                      flex items-center justify-center
                      shrink-0
                    ">

                      <Check className="
                        w-4 h-4
                        text-[#1178D4]
                      " />

                    </div>

                    {/* TEXT */}
                    <span className="
                      text-[#334155]
                      text-[15px]
                      sm:text-[17px]
                      leading-relaxed
                    ">
                      {point}
                    </span>

                  </div>

                ))}

              </div>

            </motion.div>

          </AnimatePresence>

        </div>

      </div>

    </div>

  </div>

      </section>
      )}

      
      {/* CTA SECTION */}
      {service.cta && (
        <section className="py-14 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
            

          <div className="max-w-5xl mx-auto text-center">

            {/* BADGE */}
            <div className="
              inline-flex items-center
              px-5 py-2
              rounded-full
              bg-[#F1F6FE]
              border border-[#DCEBFF]
              text-[#1178D4]
              text-sm
              font-semibold
              tracking-[0.15em]
              uppercase
              mb-8
            ">
              {service.cta.badge}
            </div>

            {/* TITLE */}
            <h2 className="
              text-[30px]
              sm:text-5xl
              lg:text-6xl
              font-bold
              leading-tight
              text-[#071426]
            ">
              {service.cta.title}
            </h2>

            {/* DESCRIPTION */}
            <p className="
              mt-8
              text-[15px]
              sm:text-lg
              md:text-xl
              leading-[1.9]
              text-[#64748B]
              max-w-3xl
              mx-auto
            ">
              {service.cta.description}
            </p>

            {/* BUTTONS */}
            <div className="
              mt-10
              flex flex-col sm:flex-row
              items-center justify-center
              gap-5
            ">

               <Link to={service.cta.primaryLink}>
              <button className="
                w-full
                sm:w-auto
                px-6
                sm:px-8
                py-4
                rounded-2xl
                bg-gradient-to-r
                from-[#1178D4]
                to-[#6C63FF]
                text-white
                font-semibold
                text-lg
                shadow-[0_10px_40px_rgba(17,120,212,0.20)]
                hover:scale-[1.03]
                transition-all duration-300
              ">
                {service.cta.primaryBtn}
              </button>
              </Link>

               <Link to={service.cta.secondaryLink}>
              <button className="
                w-full
                sm:w-auto
                px-6
                sm:px-8
                py-4
                rounded-2xl
                border border-[#CBD5E1]
                bg-white
                text-[#071426]
                font-semibold
                text-lg
                hover:border-[#1178D4]
                hover:text-[#1178D4]
                transition-all duration-300
              ">
                {service.cta.secondaryBtn}
              </button>
              </Link>
            </div>

          </div>

        </section>
      )}

      
      {/* FLOATING BUTTON */}

      <button className="
        fixed bottom-6 right-6 z-50
        w-14 h-14
        sm:w-16 sm:h-16
        rounded-full
        bg-gradient-to-r
        from-[#1178D4]
        to-[#6C63FF]
        text-white
        shadow-[0_15px_50px_rgba(17,120,212,0.35)]
        flex items-center justify-center
        hover:scale-110
        transition-all duration-300
      ">

        <Phone className="w-6 h-6 sm:w-7 sm:h-7" />

      </button>

    </>
  );
};

export default ServiceDetail;