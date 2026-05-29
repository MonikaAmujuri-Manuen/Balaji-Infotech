import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { useEffect, useState, useRef } from "react";
import {
  ArrowRight,
  ShieldCheck,
  BadgeCheck,
  Clock3,
  Users,
  Target, Eye, Flag
} from "lucide-react";

import aboutImg from "../assets/about-hero.png";

  const AnimatedCounter = ({ end, suffix = "" }) => {
  const [count, setCount] = useState(0);

  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin : "-100px"
  });

  useEffect(() => {

    if(!isInView) return;

    let start = 0;

    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, isInView]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

export default function About() {
  const navigate = useNavigate();
  return (

    <>
    {/*  HERO SECTION  */}
    <section
      className="
        relative
        overflow-hidden
        bg-[#F8FAFC]
        lg:min-h-[85vh]
        flex
        items-center
        pt-28
        sm:pt-32
        pb-16
        sm:pb-20
      "
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 overflow-hidden">

        <div
          className="
            absolute
            top-[-10%]
            left-[-10%]
            w-[500px]
            h-[500px]
            rounded-full
            bg-[#2F80FF]/10
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
              bg-white
              border border-gray-200
              shadow-sm
              mb-6
            "
          >

            <ShieldCheck
              size={18}
              className="text-[#2F80FF]"
            />

            <span
              className="
                text-sm
                font-medium
                text-[#071426]
              "
            >
              Trusted Tally Solutions Partner
            </span>
          </div>

          {/* HEADING */}
          <h1
            className="
              text-[42px]
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
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
                bg-gradient-to-r
                from-[#2F80FF]
                to-[#7B61FF]
                bg-clip-text
                text-transparent
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
              mt-6
              sm:mt-8
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
              flex-col
              sm:flex-row
              flex-wrap
              gap-4
              mt-10
              sm:mt-12
            "
          >

            <button
            onClick={() => navigate("/contact")}
              className="
                group
                w-full
                sm:w-auto
                justify-center
                px-7
                py-4
                rounded-2xl
                bg-gradient-to-r
                from-[#2F80FF]
                to-[#7B61FF]
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
                w-full
                sm:w-auto
                px-7
                py-4
                rounded-2xl
                bg-white
                border border-gray-200
                text-[#071426]
                font-medium
                transition-all
                duration-300
                hover:border-[#2F80FF]
                hover:text-[#2F80FF]
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
            className="relative mt-4 lg:mt-0
              rounded-[36px]
              overflow-hidden
              border border-white/50
              shadow-[0_20px_80px_rgba(0,0,0,0.12)]
              bg-white
            "
          >

            <img
              src={aboutImg}
              alt="About Balaji Infotech"
              className="
                w-full
                h-[320px]
                sm:h-[420px]
                lg:h-[520px]
                object-cover
              "
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>

          {/* FLOATING CARD */}
          <div
            className="
              absolute
              -bottom-6
              left-4
              sm:left-8
              bg-white/80
              backdrop-blur-xl
              border border-white/60
              rounded-3xl
              px-5
              sm:px-6
              py-4
              sm:py-5
              shadow-[0_20px_40px_rgba(0,0,0,0.08)]
            "
          >

            <p
              className="
                text-sm
                text-gray-500
              "
            >
              Trusted by Businesses
            </p>

            <h3
              className="
                text-3xl
                font-bold
                text-[#071426]
                mt-1
              "
            >
              5000+
            </h3>
          </div>
        </motion.div>
      </div>
    </section>

    {/* MISSION SECTION */}
  <section
  className="
    relative
    py-14
    sm:py-16
    md:py-20
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
      bg-gradient-to-r
      from-[#2F80FF]/10
      to-[#7B61FF]/10
      blur-3xl
      rounded-full
    "
  />

  <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

    {/* HEADING */}
    <div className="text-center max-w-3xl mx-auto mb-16">
      <p
        className="
          text-[#2F80FF]
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
          text-[32px]
          sm:text-4xl
          md:text-6xl
          font-bold
          leading-tight
          text-[#0B1220]
          mb-6
        "
      >
        Mission, Vision & Goals
      </h2>

      <p
        className="
          text-[16px] md:text-[17px]
          text-[#5B6475]
          leading-relaxed
        "
      >
        We empower businesses with reliable Tally solutions,
        enterprise support, and modern accounting systems
        designed for long-term growth.
      </p>
    </div>

    {/* GRID */}
    <div
      className="
        grid
        grid-cols-1
        md:grid-cols-3
        gap-8
      "
    >

      {/* CARD 1 */}
      <motion.div
        whileHover={{
          y: -10,
        }}
        transition={{
          duration: 0.3,
        }}
        className="
          group
          relative
          bg-white/80
          backdrop-blur-xl
          border border-white/60
          rounded-[32px]
          p-7
          sm:p-10
          shadow-[0_20px_60px_rgba(0,0,0,0.06)]
          overflow-hidden
        "
      >

        {/* CARD GLOW */}
        <div
          className="
            absolute
            inset-0
            opacity-0
            group-hover:opacity-100
            transition
            duration-500
            bg-gradient-to-br
            from-[#2F80FF]/5
            to-[#7B61FF]/10
          "
        />

        {/* ICON */}
        <div
          className="
            relative
            w-14
            h-14
            rounded-2xl
            bg-gradient-to-r
            from-[#2F80FF]
            to-[#7B61FF]
            flex
            items-center
            justify-center
            shadow-lg
            mb-8
          "
        >
          <Target className="w-7 h-7 text-white" />
        </div>

        <h3
          className="
            text-2xl
            sm:text-3xl
            font-bold
            text-[#0B1220]
            mb-5
          "
        >
          Our Mission
        </h3>

        <p
          className="
            text-[#5B6475]
            leading-relaxed
            text-[15px] md:text-[16px]
          "
        >
          Our mission is to provide tailored, efficient, and user-friendly solutions that 
          enhance operational efficiency and financial accuracy for our clients.
        </p>

      </motion.div>

      {/* CARD 2 */}
      <motion.div
        whileHover={{
          y: -10,
        }}
        transition={{
          duration: 0.3,
        }}
        className="
          group
          relative
          bg-white/80
          backdrop-blur-xl
          border border-white/60
          rounded-[32px]
          p-10
          shadow-[0_20px_60px_rgba(0,0,0,0.06)]
          overflow-hidden
        "
      >

        <div
          className="
            absolute
            inset-0
            opacity-0
            group-hover:opacity-100
            transition
            duration-500
            bg-gradient-to-br
            from-[#2F80FF]/5
            to-[#7B61FF]/10
          "
        />

        {/* ICON */}
        <div
          className="
            relative
            w-14
            h-14
            rounded-2xl
            bg-gradient-to-r
            from-[#2F80FF]
            to-[#7B61FF]
            flex
            items-center
            justify-center
            shadow-lg
            mb-8
          "
        >
          <Eye className="w-7 h-7 text-white" />
        </div>

        <h3
          className="
            text-2xl
            sm:text-3xl
            font-bold
            text-[#0B1220]
            mb-5
          "
        >
          Our Vision
        </h3>

        <p
          className="
            text-[#5B6475]
            leading-relaxed
            text-[15px] md:text-[16px]
          "
        >
          To be a leading provider of innovative Tally solutions, recognized for our 
          commitment to excellence, customer satisfaction, and continuous improvement in financial management.
        </p>

      </motion.div>

      {/* CARD 3 */}
      <motion.div
        whileHover={{
          y: -10,
        }}
        transition={{
          duration: 0.3,
        }}
        className="
          group
          relative
          bg-white/80
          backdrop-blur-xl
          border border-white/60
          rounded-[32px]
          p-10
          shadow-[0_20px_60px_rgba(0,0,0,0.06)]
          overflow-hidden
        "
      >

        <div
          className="
            absolute
            inset-0
            opacity-0
            group-hover:opacity-100
            transition
            duration-500
            bg-gradient-to-br
            from-[#2F80FF]/5
            to-[#7B61FF]/10
          "
        />

        {/* ICON */}
        <div
          className="
            relative
            w-14
            h-14
            rounded-2xl
            bg-gradient-to-r
            from-[#2F80FF]
            to-[#7B61FF]
            flex
            items-center
            justify-center
            shadow-lg
            mb-8
          "
        >
          <Flag className="w-7 h-7 text-white" />
        </div>

        <h3
          className="
            text-2xl
            sm:text-3xl
            font-bold
            text-[#0B1220]
            mb-5
          "
        >
          Our Goals
        </h3>

        <p
          className="
            text-[#5B6475]
            leading-relaxed
            text-[15px] md:text-[16px]
          "
        >
          At Balaji Ai Infotech, we are dedicated to delivering comprehensive 
          Tally-based solutions and services that empower businesses to streamline their accounting, 
          inventory, and compliance processes.
        </p>

      </motion.div>

    </div>
  </div>
  </section>

  {/*  STATS SECTION  */}
  <section
    className="
      relative
      py-16 md:py-20
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
        w-[600px]
        h-[600px]
        bg-gradient-to-r
        from-[#2F80FF]/10
        to-[#7B61FF]/10
        blur-3xl
        rounded-full
      "
    />

    <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

      {/* HEADING */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p
          className="
            text-[#2F80FF]
            font-semibold
            tracking-[0.25em]
            uppercase
            mb-4
          "
        >
          Our Achievements
        </p>

        <h2
          className="
            text-3xl
            md:text-5xl
            font-bold
            text-[#0B1220]
            leading-tight
            mb-6
          "
        >
          Trusted By Businesses
          Across Industries
        </h2>

        <p
          className="
            text-[16px] md:text-[17px]
            text-[#5B6475]
            leading-relaxed
          "
        >
          With decades of experience and long-term client trust,
          we continue delivering reliable Tally solutions and
          enterprise support services.
        </p>
      </div>

      
      {/* STATS GRID */}
<div
  className="
    grid
    grid-cols-1
    md:grid-cols-3
    gap-10
    md:gap-12
    text-center
  "
>

  {/* ITEM 1 */}
  <div
    className="
      flex
      flex-col
      items-center
      justify-center
    "
  >
    <h3
  className="
    text-4xl
    md:text-6xl
    font-bold
    bg-gradient-to-r
    from-[#2F80FF]
    to-[#7B61FF]
    bg-clip-text
    text-transparent
    mb-4
  "
>
  <AnimatedCounter end={24} suffix="+" />
</h3>

    <p
      className="
        text-lg
        md:text-xl
        font-semibold
        text-[#0B1220]
      "
    >
      Years of Experience
    </p>
  </div>

  {/* ITEM 2 */}
  <div
    className="
      flex
      flex-col
      items-center
      justify-center
      md:border-x
      border-gray-200
    "
  >
    <h3
  className="
    text-4xl
    md:text-6xl
    font-bold
    bg-gradient-to-r
    from-[#2F80FF]
    to-[#7B61FF]
    bg-clip-text
    text-transparent
    mb-4
  "
>
  <AnimatedCounter end={100} suffix="%" />
</h3>

    <p
      className="
        text-lg
        md:text-xl
        font-semibold
        text-[#0B1220]
      "
    >
      Customer Satisfaction
    </p>
  </div>

  {/* ITEM 3 */}
  <div
    className="
      flex
      flex-col
      items-center
      justify-center
    "
  >
    <h3
  className="
    text-4xl
    md:text-6xl
    font-bold
    bg-gradient-to-r
    from-[#2F80FF]
    to-[#7B61FF]
    bg-clip-text
    text-transparent
    mb-4
  "
>
  <AnimatedCounter end={1000} suffix="+" />
</h3>

    <p
      className="
        text-lg
        md:text-xl
        font-semibold
        text-[#0B1220]
      "
    >
      Happy Clients
    </p>
  </div>

</div>
    </div>
  </section>

  {/* BUSINESS OBJECTIVES SECTION */}
<section
  className="
    relative
    py-14
    sm:py-20
    md:py-24
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
      bg-gradient-to-r
      from-[#2F80FF]/10
      to-[#7B61FF]/10
      blur-3xl
      rounded-full
    "
  />

  <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

    {/* HEADING */}
    <div className="text-center max-w-3xl mx-auto mb-16">

      <p
        className="
          text-[#2F80FF]
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
          md:text-5xl
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
        whileHover={{ y: -6 }}
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
          border border-white/60
          shadow-[0_15px_40px_rgba(0,0,0,0.05)]
        "
      >

        <div
          className="
            min-w-[58px]
            h-[58px]
            rounded-2xl
            bg-gradient-to-r
            from-[#2F80FF]
            to-[#7B61FF]
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
        whileHover={{ y: -6 }}
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
          border border-white/60
          shadow-[0_15px_40px_rgba(0,0,0,0.05)]
        "
      >

        <div
          className="
            min-w-[58px]
            h-[58px]
            rounded-2xl
            bg-gradient-to-r
            from-[#2F80FF]
            to-[#7B61FF]
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
              text-xl
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
        whileHover={{ y: -6 }}
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
          border border-white/60
          shadow-[0_15px_40px_rgba(0,0,0,0.05)]
        "
      >

        <div
          className="
            min-w-[58px]
            h-[58px]
            rounded-2xl
            bg-gradient-to-r
            from-[#2F80FF]
            to-[#7B61FF]
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
        whileHover={{ y: -6 }}
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
          border border-white/60
          shadow-[0_15px_40px_rgba(0,0,0,0.05)]
        "
      >

        <div
          className="
            min-w-[58px]
            h-[58px]
            rounded-2xl
            bg-gradient-to-r
            from-[#2F80FF]
            to-[#7B61FF]
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