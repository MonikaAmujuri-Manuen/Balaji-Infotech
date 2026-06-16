import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Fragment } from "react";
import { default as CountUp } from "react-countup";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

import { useEffect, useState, useRef } from "react";
import {
  ArrowRight, Building2, CalendarDays, 
  ShieldCheck,
  BadgeCheck,
  Clock3,
  Users,
  Target, Eye, Flag
} from "lucide-react";

import aboutImg from "../assets/about-hero.png";

function AnimatedCounter({ value, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}
export default function About() {
  const navigate = useNavigate();

  const { ref, inView } = useInView({
  triggerOnce: true,
  threshold: 0.3,
});

const [activeStep, setActiveStep] = useState(0);

const foundationData = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "Our mission is to provide tailored, efficient, and user-friendly Tally solutions that enhance operational efficiency, improve financial accuracy, and support sustainable business growth.",
    chips: ["Efficiency", "Accuracy", "Growth", "Support", "Compliance"],
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be a leading provider of innovative Tally solutions recognized for excellence, customer satisfaction, and continuous improvement in financial management.",
    chips: ["Innovation", "Trust", "Excellence", "Leadership", "Technology"],
  },
  {
    icon: Flag,
    title: "Our Goals",
    description:
      "Deliver comprehensive Tally solutions that simplify accounting, inventory management, payroll processing, taxation, and compliance operations.",
    chips: ["GST", "Payroll", "Inventory", "Training", "Automation"],
  },
];
  return (
    <>
    <Helmet>
  <title>
    About Balaji Infotech | Trusted Tally Partner Since 2000
  </title>

  <meta
    name="description"
    content="Learn about Balaji Infotech, a trusted Tally Solutions Partner in Guntur with over 20 years of experience providing TallyPrime software, training, support, GST solutions, and business automation services."
  />

  <meta
    name="keywords"
    content="About Balaji Infotech, Tally Partner Guntur, TallyPrime Experts, Tally Training, GST Solutions, Accounting Software Support"
  />

  <meta
    property="og:title"
    content="About Balaji Infotech | Trusted Tally Partner"
  />

  <meta
    property="og:description"
    content="20+ years of experience delivering Tally software, implementation, training, support, and business solutions."
  />

  <meta
    property="og:type"
    content="website"
  />
</Helmet>
    {/*  HERO SECTION  */}
    <section
      className="
        relative
        overflow-hidden
        bg-white
        flex
        items-center
        lg:min-h-[70vh]
        pt-24
        sm:pt-28
        pb-10
        sm:pb-14
      "
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 overflow-hidden">

        <div
        className="
          absolute
          top-[-200px]
          right-[-100px]
          w-[700px]
          h-[700px]
          rounded-full
          bg-[#155A96]/10
          blur-3xl
        "
      />

        <div
          className="
            absolute
            bottom-[-20%]
            right-[-10%]
            w-[500px]
            h-[500px]
            rounded-full
            bg-[#7B61FF]/10
            blur-3xl
          "
        />
      </div>

      <div
        className="
          relative
          max-w-7xl
          mx-auto
          px-4 sm:px-6 lg:px-8
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-12
          lg:gap-16
          items-center
        "
      >

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          {/* SMALL LABEL */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              bg-[#155A96]/8
              border-[#155A96]/15
              shadow-sm
              mb-6
            "
          >

            <ShieldCheck
              size={18}
              className="text-[#155A96]"
            />

            <span
              className="
                text-sm
                font-medium
                text-[#155A96]
              "
            >
              Trusted Tally Solutions Partner
            </span>
          </div>

          {/* HEADING */}
          <h1
            className="
              text-[30px]
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              font-bold
              leading-[1.05]
              tracking-[-2px]
              text-[#071426]
            "
          >
            20+ Years
            <br />

            <span
              className="
                text-[#155A96]
                bg-clip-text
                
              "
            >
              of Excellence
            </span>

            <br />
            in Tally Solutions
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              mt-4 sm:mt-5
              leading-7
              text-[15px]
              md:text-[16px]
              leading-8
              sm:leading-9
              text-gray-600
              max-w-2xl
            "
          >
            At Balaji Ai Infotech Pvt Ltd, we make it easier for businesses to manage their accounts and 
            operations using Tally software. Since  2000, we have been helping businesses improve efficiency, 
            manage accounts, track inventory, handle payroll, and meet tax compliance.
          </p>
          

          {/* BUTTONS */}
          <div
           className="
            flex
            flex-row
            
            gap-3
            mt-6 sm:mt-8
          "
          >

            <button
            onClick={() => navigate("/contact")}
              className="
                group
                justify-center
                px-5
sm:px-7
py-3
sm:py-4
text-sm
sm:text-base
                rounded-2xl
                bg-gradient-to-r
                bg-[#155A96]
                hover:bg-[#124A7C]
                text-white
                font-medium
                flex
                items-center
                gap-2
                transition-all
                duration-300
                hover:scale-[1.03]
                hover:shadow-[0_15px_35px_rgba(47,128,255,0.35)]
              "
            >
              Contact Us

              <ArrowRight
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </button>

            <button
            onClick={() => navigate("/services")}
              className="
                px-5
sm:px-7
py-3
sm:py-4
text-sm
sm:text-base
                rounded-2xl
                bg-white
                border border-gray-200
                text-[#071426]
                font-medium
                transition-all
                duration-300
                hover:border-[#155A96]
                hover:text-[#155A96]
                hover:shadow-lg
              "
            >
              Explore Services
            </button>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative"
        >

          {/* GLOW */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-[#2F80FF]/20
              to-[#7B61FF]/20
              blur-3xl
              rounded-full
              scale-90
            "
          />

          {/* IMAGE CARD */}
          <div
  className="
    relative
    rounded-[28px]
    overflow-hidden
    border border-[#155A96]/10
    shadow-[0_20px_80px_rgba(0,0,0,0.12)]
    bg-white
    mb-4 lg:mb-0
  "
>

            <img
              src={aboutImg}
              alt="About Balaji Infotech"
              className="
                w-full
                h-[240px]
                sm:h-[360px]
                lg:h-[460px]
                object-cover
              "
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>

        </motion.div>
      </div>
    </section>

    <section
  ref={ref}
  className="
    relative
    z-20
    mt-6
    lg:-mt-8
  "
>
  <div className="max-w-5xl mx-auto px-4 sm:px-6">

    <div
      className="
        bg-[#155A96]
        rounded-[24px]
        border border-white/10
        shadow-[0_15px_40px_rgba(21,90,150,0.18)]
        overflow-hidden
      "
    >
      <div
        className="
          grid
          grid-cols-2
          lg:grid-cols-4
        "
      >
        {[
          {
            value: 24,
            suffix: "+",
            label: "Years Experience",
            icon: CalendarDays,
          },
          {
            value: 1000,
            suffix: "+",
            label: "Happy Clients",
            icon: Users,
          },
          {
            value: 500,
            suffix: "+",
            label: "Business Partners",
            icon: Building2,
          },
          {
            value: 99,
            suffix: "%",
            label: "Customer Satisfaction",
            icon: BadgeCheck,
          },
        ].map((item, index) => (
          <div 
            key={index}
            className="
              relative
              px-5
              py-3 lg:py-4
              text-center
            "
          >
            {/* Divider */}
            {index !== 3 && (
              <div
                className="
                  hidden
                  lg:block
                  absolute
                  right-0
                  top-1/2
                  -translate-y-1/2
                  h-20
                  w-px
                  bg-white/10
                "
              />
            )}

            <div
              className="
                w-8 h-8
                mx-auto
                mb-3
                rounded-2xl
                bg-white/10
                flex
                items-center
                justify-center
              "
            >
              <item.icon
                className="
                  w-5
                  h-5
                  text-[#F0AE11]
                "
              />
            </div>

            <h3
              className="
                text-2xl lg:text-3xl
                font-bold
                text-white
                mb-2
              "
            >
              {inView && (
                <AnimatedCounter
                  value={item.value}
                  suffix={item.suffix}
                />
              )}
            </h3>

            <p
              className="
                text-white/80
                text-xs lg:text-sm
              "
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>

  </div>
</section>

    {/* MISSION SECTION */}
  <section className="relative py-10 lg:py-14 overflow-hidden">

  {/* Background Glow */}
  <div
    className="
      absolute
      top-1/2
      left-1/2
      -translate-x-1/2
      -translate-y-1/2
      w-[700px]
      h-[700px]
      rounded-full
      bg-[#155A96]/5
      blur-3xl
    "
  />

  <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto mb-10">

      <p
        className="
          text-[#155A96]
          font-semibold
          tracking-[0.25em]
          uppercase
          mb-4
        "
      >
        Our Foundation
      </p>

      <h2
        className="
          text-3xl
          md:text-4xl
          font-bold
          text-[#071426]
          mb-4
        "
      >
        Mission, Vision & Goals
      </h2>

      <p
        className="
          text-[#5B6475]
          text-lg
          leading-relaxed
        "
      >
        We empower businesses with reliable Tally solutions,
        enterprise support, and modern accounting systems
        designed for long-term growth.
      </p>

    </div>
    <div className="grid lg:grid-cols-[180px_1fr] gap-8 items-start">

    {/* Timeline */}
    {/* Vertical Timeline */}
<div className="hidden lg:flex justify-center self-stretch">

  <div className="sticky top-32">

    {/* Grey Line */}
<div
  className="
    absolute
    left-4
    top-8
    h-[320px]
    w-[2px]
    bg-slate-200
  "
/>

{/* Active Blue Line */}
<div
  className="
    absolute
    left-4
    top-4
    w-[2px]
    bg-[#155A96]
    transition-all
    duration-500
  "
  style={{
    height:
      activeStep === 0
        ? "0px"
        : activeStep === 1
        ? "210px"
        : "335px",
  }}
/>

    {[
      "Mission",
      "Vision",
      "Goals"
    ].map((item, index) => (

      <div
        key={index}
        onClick={() => setActiveStep(index)}
        className={`
          relative
          flex
          items-start
          gap-4
          cursor-pointer
          z-10
          ${index !== 2 ? "pb-35" : ""}
        `}
      >
        {/* Circle */}
        <div
          className={`
            w-8
            h-8
            rounded-full
            flex
            items-center
            justify-center
            font-semibold
            z-10
            transition-all
            ${
              activeStep >= index
                ? "bg-[#155A96] text-white"
                : "bg-slate-200 text-slate-500"
            }
          `}
        >
          {index + 1}
        </div>

        {/* Label */}
        <div>
          <h4
            className={`
              text-2xl
              font-bold
              transition-all
              ${
                activeStep === index
                  ? "text-[#155A96]"
                  : "text-slate-500"
              }
            `}
          >
            {item}
          </h4>
        </div>

      </div>
    ))}

  </div>

</div>

    {/* Content Card */}
    <div
      className="
        max-w-3xl
        mx-auto
        bg-white
        rounded-[32px]
        border
        border-slate-200
        p-5
        md:p-8
        shadow-[0_15px_50px_rgba(0,0,0,0.05)]
      "
    >
      {(() => {
        const current = foundationData[activeStep];
        const Icon = current.icon;

        return (
          <>
            <div className="flex items-center gap-5 mb-5">

              <div
  className="
    w-12 h-12
    sm:w-16 sm:h-16
    rounded-2xl
    bg-[#155A96]
    flex items-center justify-center
    shrink-0
  "
>
  <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
</div>

              <div>
                <p className="text-[#155A96] font-medium">
                  Foundation Pillar
                </p>

                <h3
  className="
    text-2xl
    sm:text-3xl
    lg:text-4xl
    font-bold
    text-[#071426]
    leading-tight
  "
>
  {current.title}
</h3>
                <p
  className="
    text-base
    sm:text-lg
    lg:text-xl
    font-medium
    text-[#155A96]
    mt-2
  "
>
  Driving Business Growth Through Smarter Tally Solutions
</p>
              </div>

            </div>

            {/* Description */}
            <p
              className="
                text-[#5B6475]
                leading-8
                text-lg
                max-w-3xl
              "
            >
              {current.description}
            </p>

            {/* Chips */}
            <div className="flex flex-wrap gap-3 mt-8">

              {current.chips.map((chip, index) => (
                <div
                  key={index}
                  className="
                    px-4
                    py-2
                    rounded-full
                    bg-[#155A96]/10
                    text-[#155A96]
                    font-medium
                  "
                >
                  {chip}
                </div>
              ))}

            </div>

            {/* Navigation */}
            <div
              className="
                flex
                justify-between
                items-center
                mt-8
                pt-4
                border-t
                border-slate-200
              "
            >

              <button
                onClick={() =>
                  setActiveStep(
                    Math.max(activeStep - 1, 0)
                  )
                }
                disabled={activeStep === 0}
                className="
                  text-slate-500
                  font-medium
                  disabled:opacity-30
                "
              >
                ← Previous
              </button>

              <button
                onClick={() =>
                  setActiveStep(
                    Math.min(activeStep + 1, 2)
                  )
                }
                disabled={activeStep === 2}
                className="
                  px-5
                  py-3
                  rounded-xl
                  bg-[#155A96]
                  text-white
                  font-medium
                  disabled:opacity-30
                "
              >
                Next →
              </button>

            </div>
          </>
        );
      })()}
    </div>
  </div>
  </div>

</section>

  {/* BUSINESS OBJECTIVES SECTION */}
<section
  className="
    relative
    py-10
sm:py-12
md:py-14
    overflow-hidden
  "
>

  {/* BACKGROUND GLOW */}
  <div
    className="
      absolute
      top-1/2
      left-1/2
      -translate-x-1/2
      -translate-y-1/2
      w-[700px]
      h-[700px]
      bg-[#155A96]/8
      blur-3xl
      rounded-full
    "
  />

  <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

    {/* HEADING */}
    <div className="text-center max-w-3xl mx-auto mb-10">

      <p
        className="
          text-[#155A96]
          font-semibold
          tracking-[0.25em]
          uppercase
          mb-4
        "
      >
        Our Values
      </p>

      <h2
        className="
          text-3xl
          md:text-4xl
          font-bold
          text-[#0B1220]
          leading-tight
          mb-6
        "
      >
        Business Objectives
        & Core Values
      </h2>

      <p
        className="
          text-[16px]
          md:text-[17px]
          text-[#5B6475]
          leading-relaxed
        "
      >
        We focus on innovation, reliability, customer success,
        and modern accounting solutions that help businesses
        grow efficiently.
      </p>
    </div>

    {/* OBJECTIVES GRID */}
    <div
      className="
        grid
        grid-cols-1
        md:grid-cols-2
        gap-6
      "
    >

      {/* ITEM */}
      <motion.div
        whileHover={{
          y: -6,
          boxShadow: "0 20px 50px rgba(21,90,150,0.12)"
        }}
        transition={{ duration: 0.3 }}
        className="
          group
          flex
          flex-col
          sm:flex-row
          gap-5
          items-start
          p-6
          sm:p-7
          rounded-[28px]
          bg-white/80
          backdrop-blur-xl
          border border-slate-200
          hover:border-[#155A96]/30
          transition-all
          duration-300
          shadow-[0_15px_40px_rgba(0,0,0,0.05)]
        "
      >

        <div
          className="
            min-w-[58px]
            h-[58px]
            rounded-2xl
            bg-[#155A96]
            flex
            items-center
            justify-center
            shadow-lg
          "
        >
          <BadgeCheck className="w-6 h-6 text-white" />
        </div>

        <div>
          <h3
            className="
              text-xl
              font-semibold
              text-[#071426]
              mb-3
            "
          >
            Industry-Certified Training
          </h3>

          <p
            className="
              text-[#5B6475]
              leading-relaxed
              text-[15px]
            "
          >
            We provide recognized Tally certification programs
            for students, professionals, and business owners.
          </p>
        </div>
      </motion.div>

      {/* ITEM */}
      <motion.div
        whileHover={{
          y: -6,
          boxShadow: "0 20px 50px rgba(21,90,150,0.12)"
        }}
        transition={{ duration: 0.3 }}
        className="
          group
          flex
          gap-5
          items-start
          p-5
          rounded-[22px]
          bg-white/80
          backdrop-blur-xl
          border border-slate-200
          hover:border-[#155A96]/30
          transition-all
          duration-300
          shadow-[0_15px_40px_rgba(0,0,0,0.05)]
        "
      >

        <div
          className="
            min-w-[58px]
            h-[58px]
            rounded-2xl
            bg-[#155A96]
            flex
            items-center
            justify-center
            shadow-lg
          "
        >
          <Users className="w-6 h-6 text-white" />
        </div>

        <div>
          <h3
            className="
              text-lg
              font-semibold
              text-[#071426]
              mb-3
            "
          >
            Customer-Centric Solutions
          </h3>

          <p
            className="
              text-[#5B6475]
              leading-relaxed
              text-[15px]
            "
          >
            We build scalable accounting and ERP solutions
            tailored for businesses of all sizes.
          </p>
        </div>
      </motion.div>

      {/* ITEM */}
      <motion.div
        whileHover={{
          y: -6,
          boxShadow: "0 20px 50px rgba(21,90,150,0.12)"
        }}
        transition={{ duration: 0.3 }}
        className="
          group
          flex
          gap-5
          items-start
          p-7
          rounded-[28px]
          bg-white/80
          backdrop-blur-xl
          border border-slate-200
          hover:border-[#155A96]/30
          transition-all
          duration-300
          shadow-[0_15px_40px_rgba(0,0,0,0.05)]
        "
      >

        <div
          className="
            min-w-[48px]
            h-[48px]
            rounded-2xl
            bg-[#155A96]
            flex
            items-center
            justify-center
            shadow-lg
          "
        >
          <Clock3 className="w-6 h-6 text-white" />
        </div>

        <div>
          <h3
            className="
              text-xl
              font-semibold
              text-[#071426]
              mb-3
            "
          >
            Operational Efficiency
          </h3>

          <p
            className="
              text-[#5B6475]
              leading-relaxed
              text-[15px]
            "
          >
            We help organizations improve productivity,
            compliance, and financial accuracy through automation.
          </p>
        </div>
      </motion.div>

      {/* ITEM */}
      <motion.div
        whileHover={{
          y: -6,
          boxShadow: "0 20px 50px rgba(21,90,150,0.12)"
        }}
        transition={{ duration: 0.3 }}
        className="
          group
          flex
          gap-5
          items-start
          p-7
          rounded-[28px]
          bg-white/80
          backdrop-blur-xl
          border border-slate-200
          hover:border-[#155A96]/30
          transition-all
          duration-300
          shadow-[0_15px_40px_rgba(0,0,0,0.05)]
        "
      >

        <div
          className="
            min-w-[58px]
            h-[58px]
            rounded-2xl
            bg-[#155A96]
            flex
            items-center
            justify-center
            shadow-lg
          "
        >
          <ShieldCheck className="w-6 h-6 text-white" />
        </div>

        <div>
          <h3
            className="
              text-xl
              font-semibold
              text-[#071426]
              mb-3
            "
          >
            Reliable Long-Term Support
          </h3>

          <p
            className="
              text-[#5B6475]
              leading-relaxed
              text-[15px]
            "
          >
            Our dedicated support ensures businesses receive
            continuous assistance and enterprise-grade reliability.
          </p>
        </div>
      </motion.div>

    </div>
  </div>
</section>
</>
  );
}