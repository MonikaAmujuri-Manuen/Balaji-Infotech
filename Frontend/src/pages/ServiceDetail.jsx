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
  console.log(service.cta.secondaryLink);

  return (
    <>
      
      {/* HERO SECTION */}
      {service.hero && (
        <section className="relative overflow-hidden bg-white">

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
    pt-20
    sm:pt-24
    lg:pt-24
    pb-10
    sm:pb-12
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
      text-[30px]
      sm:text-[40px]
      lg:text-[48px]
      leading-[1]
      font-[800]
      text-[#071426]
      max-w-5xl
      mx-auto
    ">

      {service.hero.title}

      <span className="text-[#2563EB]">
        {service.hero.highlight}
      </span>

    </h1>

    {/* DESCRIPTION */}
    <p className="
      mt-6
      text-[15px]
      sm:text-[15px]
      md:text-[16px]
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
        bg-[#2563EB]
        hover:bg-[#1D4ED8]
        text-white
        font-semibold
        text-lg
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
      <section className="py-8 sm:py-10 md:py-12 px-4 sm:px-4 bg-white">

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
        text-[26px]
        sm:text-3xl
        lg:text-4xl
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
        bg-white
        overflow-hidden"
    >

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
                      ? "bg-[#2563EB] text-white border-transparent"
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


          <AnimatePresence mode="wait">

            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.35 }}
              className="
                p-5
                sm:p-6
                md:p-8
                lg:p-10
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
                text-[22px]
                sm:text-[24px]
                md:text-[28px]
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
                mt-8
                gap-x-6
                gap-y-4
                grid grid-cols-1 sm:grid-cols-2
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
        <section className="py-8 sm:py-10 md:py-12 px-4 sm:px-4 bg-white">
            

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
              text-[26px]
              sm:text-3xl
              lg:text-4xl
              font-bold
              leading-tight
              text-[#071426]
            ">
              {service.cta.title}
            </h2>

            {/* DESCRIPTION */}
            <p className="
              mt-5
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
              mt-6
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
                bg-[#2563EB]
                hover:bg-[#1D4ED8]
                text-white
                font-semibold
                text-lg
                hover:scale-[1.03]
                transition-all duration-300
              ">
                {service.cta.primaryBtn}
              </button>
              </Link>

               <a href={service.cta.secondaryLink}>
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
              </a>
            </div>

          </div>

        </section>
      )}

    </>
  );
};

export default ServiceDetail;