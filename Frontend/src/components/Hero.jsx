import React from "react";
import {
  ArrowRight,
  ShieldCheck,
  BadgeCheck,
  Headphones,
  PhoneCall,
  MessageCircleCheck,
} from "lucide-react";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
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
                src="/images/dashboard.png"
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
  );
}