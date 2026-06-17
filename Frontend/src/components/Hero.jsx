import React from "react";
import {
  ArrowRight, CheckCircle, Users, Award, MessageCircle, Phone, Building2,
  ShieldCheck,
  BadgeCheck,
  Headphones,
  PhoneCall,
  MessageCircleCheck, 
} from "lucide-react";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import dashboard from "../assets/dashboard4.png";

export default function HeroSection() {

  return (
    <>

    {false && (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        min-h-[90vh]
        flex
        items-center
        px-4
        sm:px-6
        lg:px-10
      "
    >
      {/* BACKGROUND GLOW */}
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
          relative
          max-w-7xl
          mx-auto
          w-full
          grid
          lg:grid-cols-[1.15fr_0.85fr]
          gap-16
          items-center
          pt-24
        "
      >
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* BADGE */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              border
              border-[#155A96]/15
              bg-[#155A96]/5
              text-[#155A96]
              text-sm
              font-medium
              mb-6
            "
          >
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            Authorized Tally Partner
          </div>

          {/* HEADING */}
          <h1
            className="
              text-[#071426]
              font-bold
              leading-[0.95]
              tracking-[-0.04em]
              text-[32px]
              sm:text-[38px]
              lg:text-[42px]
              xl:text-[48px]
              max-w-[800px]
            "
          >
            Balaji AI Infotech

            <span className="block text-[#155A96] mt-2">
              With Tally Solutions
            </span>
          </h1>

          {/* TYPEWRITER */}
          <div className="mt-5 h-[40px]">
            <TypeAnimation
              sequence={[
                "Authorized Tally Partner",
                2000,
                "GST & Accounting Experts",
                2000,
                "TallyPrime Implementation",
                2000,
                "Training & Business Support",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              className="
                text-lg
                sm:text-xl
                lg:text-2xl
                font-semibold
                text-[#155A96]
              "
            />
          </div>

          {/* DESCRIPTION */}
          <p
            className="
              mt-6
              max-w-[620px]
              text-slate-600
              text-base
              sm:text-lg
              leading-8
            "
          >
            Helping businesses streamline accounting, GST compliance,
            inventory management and financial operations through
            professional Tally solutions, training and dedicated support.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="tel:+919849431943"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                px-8
                py-4
                rounded-2xl
                bg-[#155A96]
                text-white
                font-medium
                shadow-lg
                shadow-[#155A96]/20
              "
            >
              Call Us
              <PhoneCall size={18} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/919849431943"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                px-8
                py-4
                rounded-2xl
                border
                border-slate-200
                bg-white
                text-[#071426]
                font-medium
              "
            >
              WhatsApp Us
              <MessageCircleCheck size={18} />
            </motion.a>
          </div>

          {/* TRUST POINTS */}
          <div
            className="
              mt-10
              flex
              flex-wrap
              gap-5
            "
          >
            <div className="flex items-center gap-3">
              <ShieldCheck
                size={22}
                className="text-[#155A96]"
              />
              <span className="text-slate-700 font-medium">
                20+ Years Experience
              </span>
            </div>

            <div className="flex items-center gap-3">
              <BadgeCheck
                size={22}
                className="text-[#155A96]"
              />
              <span className="text-slate-700 font-medium">
                5000+ Businesses Served
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Award
                size={22}
                className="text-[#155A96]"
              />
              <span className="text-slate-700 font-medium">
                Certified Tally Experts
              </span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
            rotate: -3,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="
            relative
            flex
            justify-center
            lg:justify-end
          "
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              relative
              w-full
              max-w-[520px]
              rounded-[32px]
              overflow-hidden
              border
              border-slate-200
              bg-white
              shadow-2xl
            "
          >
            <img
              src={dashboard}
              alt="Tally Dashboard"
              className="
                w-full
                h-[320px]
                sm:h-[420px]
                object-cover
              "
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
    )}
    
    <section
  className="
    relative
    min-h-[80vh]
    overflow-hidden
    bg-white
    px-4 sm:px-8 lg:px-10
    flex items-center
  "
>
  {/* BACKGROUND GLOW */}
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

  
      {/* MAIN CONTENT */}
      <div
        className="
        relative
        max-w-7xl
        mx-auto
        w-full
        grid
        lg:grid-cols-[1.2fr_1fr]
        items-center
        pt-20 sm:pt-24 lg:pt-24
        pb-6
        gap-8 lg:gap-10
      "
      >
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="order-2 lg:order-1"
        >
          {/* TAG */}
          <div
            className="
          inline-flex
          items-center
          gap-2
          px-4 py-2
          rounded-full
          border border-slate-200
          bg-[#155A96]/5
          text-[#155A96]
          text-sm
          mb-5
          "
          >
            <div
  className="
    flex
    items-center
    justify-center
    w-6
    h-6
    rounded-full
    bg-[#155A96]
  "
>
  <BadgeCheck
    size={14}
    className="text-white"
  />
</div>

            <span className="truncate">
              Trusted Tally Solutions Partner
            </span>
          </div>

          {/* HEADING */}
          <h1
  className="
    text-[#071426]
    text-[34px]
    sm:text-[46px]
    lg:text-[58px]
    font-bold
    leading-[1.05]
    max-w-[700px]
  "
>
  Balaji AI Infotech
</h1>

<div className="mt-3 sm:mt-4">
  <TypeAnimation
    sequence={[
      "Tally solutions and trainings",
      2000,
      "Tally sales and services",
      2000,
      "Tally certified partner",
      2000,
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
    className="
      block
      text-[20px]
      sm:text-[26px]
      lg:text-[30px]
      font-bold
      leading-[1.3]
      text-[#155A96]
    "
  />
</div>

          {/* DESCRIPTION */}
          <p
            className="
              mt-4 sm:mt-5
              max-w-[560px]
              text-[15px] sm:text-base
              leading-7
              text-slate-600
            "
          >
            We specialize in providing professional Tally services that
            enhance your business productivity. From implementation to
            troubleshooting, we ensure smooth operations every step of the
            way.
          </p>

          {/* BUTTONS */}
          <div className="mt-6 flex flex-row  gap-3">
            <a href="tel:+919849431943">
            <button
  className="
    group
    px-4 sm:px-7
    py-3 sm:py-4
    rounded-2xl
    bg-[#155A96]
    text-white
    text-sm sm:text-base
    font-medium
    flex items-center justify-center gap-2
    transition-all duration-300
  "
>
              Call Us

              <PhoneCall
                size={18}
                className="group-hover:translate-x-1 transition"
              />
            </button>
            </a>

            <a
    href="https://wa.me/919849431943"
    target="_blank"
    rel="noopener noreferrer"
  >
            <button
  className="
    group
    px-4 sm:px-7
    py-3 sm:py-4
    rounded-2xl
    border border-slate-200
    bg-white
    text-[#071426]
    text-sm sm:text-base
    flex items-center justify-center gap-2
    hover:bg-slate-50
    transition duration-300
  "
>
              Chat with Us

              <MessageCircleCheck
                size={18}
                className="group-hover:translate-x-1 transition"
              />
            </button>
            </a>
          </div>

          {/* TRUST POINTS */}
          <div
            className="
              mt-4
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-3
            "
          >
            <div
              className="
                flex items-center gap-3
                px-4 sm:px-8
                py-4 sm:py-8
              "
            >
              <ShieldCheck
                className="text-[#155A96] shrink-0"
                size={24}
              />

              <div>
                <h4 className="text-[#155A96] font-medium text-sm sm:text-base">
                  Trusted Experts
                </h4>
              </div>
            </div>

            <div
              className="
                flex items-center gap-3
                px-4 py-4
              "
            >
              <BadgeCheck
                className="text-[#155A96] shrink-0"
                size={24}
              />

              <div>
                <h4 className="text-[#155A96] font-medium text-sm sm:text-base">
                  Experienced
                </h4>
              </div>
            </div>

            <div
              className="
                flex items-center gap-3
                px-4 py-4
              "
            >
              <BadgeCheck
                className="text-[#155A96] shrink-0"
                size={24}
              />

              <div>
                <h4 className="text-[#155A96] font-medium text-sm sm:text-base">
                  Professional
                </h4>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="
            relative
            flex justify-center lg:justify-end
            order-1 lg:order-2
          "
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: 0.2,
          }}
          viewport={{ once: true }}
        >
          {/* IMAGE CARD */}

          <div
  className="
    absolute
    -top-4
    right-10
    bg-[#F4B400]/85
    text-white
    px-4
    py-2
    rounded-xl
    shadow-lg
    font-medium
    z-20
  "
>
  GST Ready ✓
</div>
          
            <div
              className="
                rounded-[28px] sm:rounded-[30px]
                overflow-hidden
              "
            >
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
              <img
                src={dashboard}
                alt="Dashboard"
                className="
                  w-full
                  h-auto
                  object-contain
                "
              />
            </div>
          
        </motion.div>
      </div>
    </section>
    
    
    {false && (
    <section
      className="
      relative
      min-h-screen
      overflow-hidden
      bg-[#071426]
      px-4 sm:px-6 lg:px-10
      flex items-center
    "
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-150px] right-[-100px] w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] bg-[#7B61FF]/30 blur-[120px] sm:blur-[140px] rounded-full" />

      <div className="absolute bottom-[-200px] left-[-100px] w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] bg-[#2F80FF]/20 blur-[130px] sm:blur-[160px] rounded-full" />

      {/* MAIN CONTENT */}
      <div
        className="
        relative
        max-w-7xl
        mx-auto
        w-full
        grid
        lg:grid-cols-[1.2fr_1fr]
        items-center
        pt-28 sm:pt-32 lg:pt-32
        pb-16
        gap-14 lg:gap-16
      "
      >
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="order-2 lg:order-1"
        >
          {/* TAG */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              px-4 py-2
              rounded-full
              border border-white/10
              bg-white/5
              backdrop-blur-lg
              text-white/80
              text-xs sm:text-sm
              mb-6 sm:mb-8
              max-w-full
            "
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />

            <span className="truncate">
              Trusted Tally Solutions Partner
            </span>
          </div>

          {/* HEADING */}
          <h1
            className="
              text-white
              text-[34px]
              sm:text-[44px]
              lg:text-[52px]
              font-bold
              leading-[1.05]
              max-w-[700px]
            "
          >
            Balaji AI Infotech

            <div className="mt-3 sm:mt-4">
              <TypeAnimation
                sequence={[
                  "Tally solutions and trainings",
                  2000,
                  "Tally sales and services",
                  2000,
                  "Tally certified partner",
                  2000,
                ]}
                wrapper="h1"
                speed={50}
                repeat={Infinity}
                className="
                  text-[20px]
                  sm:text-[26px]
                  lg:text-[30px]
                  font-semibold
                  leading-[1.3]
                  text-transparent
                  bg-clip-text
                  bg-gradient-to-r
                  from-[#2F80FF]
                  to-[#7B61FF]
                "
              />
            </div>
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              mt-7 sm:mt-10
              max-w-[620px]
              text-[15px] sm:text-base
              leading-7
              text-white/70
            "
          >
            We specialize in providing professional Tally services that
            enhance your business productivity. From implementation to
            troubleshooting, we ensure smooth operations every step of the
            way.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="tel:+919849431943">
            <button
              className="
                group
                w-full sm:w-auto
                px-7 py-4
                rounded-2xl
                bg-gradient-to-r from-[#2F80FF] to-[#7B61FF]
                text-white
                font-medium
                flex items-center justify-center gap-2
                hover:scale-[1.02]
                transition duration-300
                shadow-[0_10px_30px_rgba(123,97,255,0.35)]
              "
            >
              Call Us

              <PhoneCall
                size={18}
                className="group-hover:translate-x-1 transition"
              />
            </button>
            </a>

            <a
    href="https://wa.me/919849431943"
    target="_blank"
    rel="noopener noreferrer"
  >
            <button
              className="
                group
                w-full sm:w-auto
                px-7 sm:px-10
                py-4
                rounded-2xl
                border border-white/10
                bg-white/5
                backdrop-blur-lg
                text-white
                flex items-center justify-center gap-2
                hover:bg-white/10
                transition duration-300
              "
            >
              Chat with Us

              <MessageCircleCheck
                size={18}
                className="group-hover:translate-x-1 transition"
              />
            </button>
            </a>
          </div>

          {/* TRUST POINTS */}
          <div
            className="
              mt-8
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-4 sm:gap-5
            "
          >
            <div
              className="
                flex items-center gap-3
                border border-white/10
                bg-white/5
                backdrop-blur-2xl
                rounded-2xl
                px-4 py-4
              "
            >
              <ShieldCheck
                className="text-[#2F80FF] shrink-0"
                size={24}
              />

              <div>
                <h4 className="text-white font-medium text-sm sm:text-base">
                  Trusted Experts
                </h4>
              </div>
            </div>

            <div
              className="
                flex items-center gap-3
                border border-white/10
                bg-white/5
                backdrop-blur-lg
                rounded-2xl
                px-4 py-4
              "
            >
              <BadgeCheck
                className="text-[#7B61FF] shrink-0"
                size={24}
              />

              <div>
                <h4 className="text-white font-medium text-sm sm:text-base">
                  Experienced
                </h4>
              </div>
            </div>

            <div
              className="
                flex items-center gap-3
                border border-white/10
                bg-white/5
                backdrop-blur-2xl
                rounded-2xl
                px-4 py-4
              "
            >
              <BadgeCheck
                className="text-[#7B61FF] shrink-0"
                size={24}
              />

              <div>
                <h4 className="text-white font-medium text-sm sm:text-base">
                  Professional
                </h4>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="
            relative
            flex justify-center lg:justify-end
            order-1 lg:order-2
          "
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: 0.2,
          }}
          viewport={{ once: true }}
        >
          {/* IMAGE CARD */}
          <div
            className="
              relative
              w-full
              max-w-[520px]
              rounded-[28px] sm:rounded-[32px]
              p-[2px]
              bg-gradient-to-br
              from-[#2F80FF]/60
              via-[#7B61FF]/40
              to-transparent
              shadow-[0_0_60px_rgba(123,97,255,0.25)]
            "
          >
            <div
              className="
                rounded-[26px] sm:rounded-[30px]
                overflow-hidden
                border border-white/10
                bg-[#0B1120]
                backdrop-blur-xl
              "
            >
              <img
                src={dashboard}
                alt="Dashboard"
                className="
                  w-full
                  h-[260px] sm:h-[420px]
                  object-cover
                  scale-105
                "
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
    )}
    {false && (
    <section
      className="
      relative
      min-h-screen
      overflow-hidden
      bg-[#F2F4F7]
      px-4 sm:px-6 lg:px-10
      flex items-center
    "
    >
      
      {/* MAIN CONTENT */}
      <div
        className="
        relative
        max-w-7xl
        mx-auto
        w-full
        grid
        lg:grid-cols-[1.2fr_1fr]
        items-center
        pt-28 sm:pt-32 lg:pt-32
        pb-16
        gap-14 lg:gap-16
      "
      >
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="order-2 lg:order-1"
        >
          {/* TAG */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              px-4 py-2
              rounded-full
              border-[#C5D0DF] bg-[#DDE3EC] text-[#3A4A5C]
              text-xs sm:text-sm
              mb-6 sm:mb-8
              max-w-full
            "
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />

            <span className="truncate">
              Trusted Tally Solutions Partner
            </span>
          </div>

          {/* HEADING */}
          <h1
            className="
              text-[#1C2B3A]
              text-[34px]
              sm:text-[46px]
              lg:text-[58px]
              font-bold
              leading-[1.05]
              max-w-[700px]
            "
          >
            Balaji AI Infotech

            <div className="mt-3 sm:mt-4">
              <TypeAnimation
                sequence={[
                  "Tally solutions and trainings",
                  2000,
                  "Tally sales and services",
                  2000,
                  "Tally certified partner",
                  2000,
                ]}
                wrapper="h1"
                speed={50}
                repeat={Infinity}
                className="
                  text-[20px]
                  sm:text-[26px]
                  lg:text-[30px]
                  font-semibold
                  leading-[1.3]
                  text-transparent
                  bg-clip-text
                  bg-gradient-to-r
                  from-[#E05A35] to-[#C7522A]
                "
              />
            </div>
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              mt-7 sm:mt-10
              max-w-[620px]
              text-[15px] sm:text-base
              leading-7
              text-[#3A4A5C]
            "
          >
            We specialize in providing professional Tally services that
            enhance your business productivity. From implementation to
            troubleshooting, we ensure smooth operations every step of the
            way.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="tel:+919849431943">
            <button
              className="
                group
                w-full sm:w-auto
                px-7 py-4
                rounded-2xl
                bg-gradient-to-r bg-[#E05A35] 
                text-white
                font-medium
                flex items-center justify-center gap-2
                hover:scale-[1.02]
                transition duration-300
                
              "
            >
              Call Us

              <PhoneCall
                size={18}
                className="group-hover:translate-x-1 transition"
              />
            </button>
            </a>

            <a
    href="https://wa.me/919849431943"
    target="_blank"
    rel="noopener noreferrer"
  >
            <button
              className="
                group
                w-full sm:w-auto
                px-7 sm:px-10
                py-4
                rounded-2xl
                border-[#C5D0DF] bg-white text-[#3A4A5C] hover:bg-[#DDE3EC]
                backdrop-blur-lg
                text-[#E05A35] 
                flex items-center justify-center gap-2
                hover:bg-white/10
                transition duration-300
              "
            >
              Chat with Us

              <MessageCircleCheck
                size={18}
                className="group-hover:translate-x-1 transition"
              />
            </button>
            </a>
          </div>

          {/* TRUST POINTS */}
          <div
            className="
              mt-8
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-4 sm:gap-5
            "
          >
            <div
              className="
                flex items-center gap-3
                rounded-2xl
                px-4 py-4
              "
            >
              <ShieldCheck
                className="text-[#E05A35]  shrink-0"
                size={24}
              />

              <div>
                <h4 className="text-[#1C2B3A] text-sm sm:text-base">
                  Trusted Experts
                </h4>
              </div>
            </div>

            <div
              className="
                flex items-center gap-3
                px-4 py-4
              "
            >
              <BadgeCheck
                className="text-[#E05A35]  shrink-0"
                size={24}
              />

              <div>
                <h4 className="text-[#1C2B3A] text-sm sm:text-base">
                  Experienced
                </h4>
              </div>
            </div>

            <div
              className="
                flex items-center gap-3
                border border-white/10
                bg-white/5
                backdrop-blur-2xl
                rounded-2xl
                px-4 py-4
              "
            >
              <BadgeCheck
                className="text-[#E05A35]  shrink-0"
                size={24}
              />

              <div>
                <h4 className="text-[#1C2B3A] text-sm sm:text-base">
                  Professional
                </h4>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="
            relative
            flex justify-center lg:justify-end
            order-1 lg:order-2
          "
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: 0.2,
          }}
          viewport={{ once: true }}
        >
          {/* IMAGE CARD */}
          <div
            className="
              relative
              w-full
              max-w-[520px]
              rounded-[28px] sm:rounded-[32px]
              p-[2px]
              bg-gradient-to-br
              from-[#E05A35]/40 via-[#DDE3EC]/60
              to-transparent
              shadow-[0_0_40px_rgba(224,90,53,0.15)]
            "
          >
            <div
              className="
                rounded-[26px] sm:rounded-[30px]
                overflow-hidden
                border border-white/10
                bg-white
                backdrop-blur-xl
              "
            >
              <img
                src={dashboard}
                alt="Dashboard"
                className="
                  w-full
                  h-[260px] sm:h-[420px]
                  object-cover
                  scale-105
                "
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
    )}
        
        </>
  );
}

