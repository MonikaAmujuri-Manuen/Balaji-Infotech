import { MapPin, Phone, Mail, ArrowRight,MapPinned, Building2, MessageCircle } from "lucide-react";
import contactHero from "../assets/contact-hero.png";
import QuoteForm from "../components/QuoteForm";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Contact() {
  const location = useLocation();

useEffect(() => {
  if (location.hash) {
    const element = document.querySelector(location.hash);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  }
}, [location]);
  return (

    <>
    {/* ================= CONTACT HERO ================= */}
  <section className="
    relative
    overflow-hidden
    pt-32 sm:pt-36 md:pt-36
    pb-14 sm:pb-16 md:pb-24
    bg-white
  ">

    {/* BACKGROUND GLOW */}
    <div className="
      absolute inset-0
      bg-[radial-gradient(circle_at_top_right,rgba(17,120,212,0.08),transparent_35%)]
    " />

    <div className="
      relative
      max-w-7xl mx-auto
      px-4 sm:px-6
      grid lg:grid-cols-2
      gap-10 sm:gap-14 lg:gap-20
      items-center
    ">

      {/* ================= LEFT CONTENT ================= */}
      <motion.div
        initial = {{ opacity:0, x: -80 }}
        whileInView={{ opacity: 1, x: 0}}
        transition={{
          duration : 0.8,
          ease : "easeOut",
        }}
        viewport={{ once: true }}
      >

        {/* BADGE */}
        <div className="
          inline-flex items-center
          gap-2
          px-4 py-2
          rounded-full
          border border-[#1178D4]/15
          bg-[#F8FBFF]
          mb-6
        ">

          <div className="
            w-2 h-2
            rounded-full
            bg-[#1178D4]
          " />

          <span className="
            text-sm font-semibold
            tracking-wide
            text-[#1178D4]
            uppercase
          ">
            Get In Touch
          </span>

        </div>

        {/* HEADING */}
        <h1 className="
          text-[32px]
          sm:text-4xl
          lg:text-5xl
          font-black
          leading-[1.05]
          tracking-[-0.03em]
          text-[#0F172A]
        ">
          Let’s Build
          <br />

          <span className="
            bg-gradient-to-r
            from-[#1178D4]
            to-[#6C63FF]
            bg-clip-text
            text-transparent
          ">
            Better Business
          </span>

          <br />
          Solutions Together
        </h1>

        {/* DESCRIPTION */}
        <p className="
          mt-6 sm:mt-8
          text-[15px] sm:text-[16px] md:text-[17px]
          leading-8 sm:leading-9
          text-[#475569]
          max-w-2xl
        ">
          Whether you need Tally solutions, professional training,
          cloud services, or business automation support, our experts
          are ready to help your business grow smarter and faster.
        </p>

        {/* QUICK CONTACT PILLS */}
        <div className="
          flex flex-col sm:flex-row sm:flex-wrap
          gap-4
          mt-8 sm:mt-10
        ">

          {/* LOCATION */}
          <div className="
          w-full sm:w-auto
            flex items-center
            gap-3
            px-5 py-3
            rounded-2xl
            border border-[#E2E8F0]
            bg-white
            shadow-[0_10px_30px_rgba(15,23,42,0.04)]
          ">

            <MapPin className="w-5 h-5 text-[#1178D4]" />

            <span className="
              text-sm md:text-base
              font-medium
              text-[#334155]
            ">
              Guntur, Andhra Pradesh
            </span>

          </div>

          {/* PHONE */}
          <div className="w-full sm:w-auto
            flex items-center
            gap-3
            px-5 py-3
            rounded-2xl
            border border-[#E2E8F0]
            bg-white
            shadow-[0_10px_30px_rgba(15,23,42,0.04)]
          ">

            <Phone className="w-5 h-5 text-[#1178D4]" />

            <span className="
              text-sm md:text-base
              font-medium
              text-[#334155]
            ">
              +91 9849431943
            </span>

          </div>

          {/* EMAIL */}
          <div className="w-full sm:w-auto
            flex items-center
            gap-3
            px-5 py-3
            rounded-2xl
            border border-[#E2E8F0]
            bg-white
            shadow-[0_10px_30px_rgba(15,23,42,0.04)]
          ">

            <Mail className="w-5 h-5 text-[#1178D4]" />

            <span className="
              text-sm md:text-base
              font-medium
              text-[#334155]
            ">
              gunturtally@gmail.com
            </span>

          </div>

        </div>

        {/* BUTTONS */}
        <div className="
          flex flex-col sm:flex-row
          items-stretch sm:items-center
          gap-4 sm:gap-5
          mt-10 sm:mt-12
        ">

          {/* PRIMARY BUTTON */}
          <a href="#contact-form">
          <button 
          className="w-full sm:w-auto
            group
            inline-flex items-center justify-center
            gap-3
            px-8 py-5
            rounded-2xl
            bg-gradient-to-r
            from-[#1178D4]
            to-[#6C63FF]
            text-white
            font-semibold
            text-lg
            shadow-[0_20px_50px_rgba(17,120,212,0.20)]
            hover:scale-[1.02]
            transition-all duration-300
          ">

            Request A Quote

            <ArrowRight className="
              w-5 h-5
              transition-transform duration-300
              group-hover:translate-x-1
            " />

          </button>
          </a>

          {/* SECONDARY BUTTON */}
          <a href="tel:91 9849431943">
          <button className="w-full sm:w-auto
            inline-flex items-center justify-center
            gap-3
            px-8 py-5
            rounded-2xl
            border border-[#DCE3EE]
            bg-white
            text-[#0F172A]
            font-semibold
            text-lg
            hover:border-[#1178D4]/30
            hover:bg-[#F8FBFF]
            transition-all duration-300
          ">

            <Phone className="w-5 h-5 text-[#1178D4]" />

            Call Our Team

          </button>
          </a>

        </div>
      </motion.div>
      

      {/* ================= RIGHT VISUAL ================= */}
      <motion.div
      className="relative
      flex justify-center lg:justify-end
      order-1 lg:order-2"

      initial ={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0}}
      transition ={{
        duration : 1,
        ease: "easeOut",
        delay: "0.2",
      }}
      viewport={{ once: true }}
      >
      <div className="relative">

        {/* MAIN IMAGE CONTAINER */}
        <div className="
          relative
          rounded-[36px]
          overflow-hidden
          border border-[#E2E8F0]
          shadow-[0_30px_80px_rgba(15,23,42,0.10)]
        ">

          {/* IMAGE */}
          <img
            src={contactHero}
            alt="Contact Balaji Infotech"
            className="
              w-full
              h-[420px]
              sm:h-[520px]
              lg:h-[620px]
              object-cover
            "
          />

          {/* OVERLAY */}
          <div className="
            absolute inset-0
            bg-gradient-to-tr
            from-[#0F172A]/55
            via-[#1178D4]/10
            to-transparent
          " />

        </div>

        {/* FLOATING CARD 1 */}
        <div className="
          absolute
          top-4 left-4
          sm:top-8 sm:-left-6
          bg-white/90
          backdrop-blur-xl
          border border-white/60
          rounded-3xl
          px-4 sm:px-6
          py-4 sm:py-5
          shadow-[0_20px_60px_rgba(15,23,42,0.12)]
        ">

          <p className="
            text-2xl sm:text-3xl
            font-black
            text-[#0F172A]
          ">
            500+
          </p>

          <p className="
            mt-1
            text-sm
            font-medium
            text-[#475569]
          ">
            Businesses Supported
          </p>

        </div>

        {/* FLOATING CARD 2 */}
        <div className="
          absolute
          bottom-4 right-4
          sm:bottom-8 sm:-right-6
          bg-white/90
          backdrop-blur-xl
          border border-white/60
          rounded-3xl
          px-4 sm:px-6
          py-4 sm:py-5
          shadow-[0_20px_60px_rgba(15,23,42,0.12)]
        ">

          <p className="
            text-2xl sm:text-3xl
            font-black
            text-[#0F172A]
          ">
            24/7
          </p>

          <p className="
            mt-1
            text-sm
            font-medium
            text-[#475569]
          ">
            Expert Support Team
          </p>

        </div>
      </div>
      </motion.div>
    </div>
    

  </section>

  {/* ================= CONTACT FORM ================= */}
<section id="contact-form" className="
  relative
  py-16 sm:py-24 md:py-32
  bg-[#F8FBFF]
  overflow-hidden
">

  {/* BACKGROUND GLOW */}
  <div className="
    absolute inset-0
    bg-[radial-gradient(circle_at_top_left,rgba(17,120,212,0.08),transparent_30%)]
  " />

  <div className="
    relative
    max-w-6xl mx-auto
    px-4 sm:px-6
  ">

    {/* SECTION HEADER */}
    <div className="
      text-center
      max-w-3xl
      mx-auto
      mb-16
    ">

      {/* BADGE */}
      <div className="
        inline-flex items-center
        gap-2
        px-4 py-2
        rounded-full
        border border-[#1178D4]/15
        bg-white
        mb-6
      ">

        <div className="
          w-2 h-2
          rounded-full
          bg-[#1178D4]
        " />

        <span className="
          text-sm
          font-semibold
          tracking-wide
          uppercase
          text-[#1178D4]
        ">
          Contact Our Team
        </span>

      </div>

      {/* HEADING */}
      <h2 className="
        text-[30px]
        sm:text-4xl
        md:text-5xl
        font-black
        leading-tight
        tracking-[-0.03em]
        text-[#0F172A]
      ">
        Let’s Discuss Your
        <span className="
          bg-gradient-to-r
          from-[#1178D4]
          to-[#6C63FF]
          bg-clip-text
          text-transparent
        ">
          {" "}Business Requirements
        </span>
      </h2>

      {/* DESCRIPTION */}
      <p className="
        mt-6
        text-[15px]
        sm:text-lg
        leading-7 sm:leading-8
        leading-8
        text-[#64748B]
      ">
        Connect with our experts for Tally solutions,
        professional training, cloud services, and business
        automation support tailored to your organization.
      </p>

    </div>

    {/* MAIN GRID */}
    <div className="
      grid lg:grid-cols-[0.9fr_1.1fr]
      gap-10
      items-start
    ">

      {/* ================= LEFT SIDE ================= */}
      <div className="
  flex flex-col
  justify-center
  h-full
  space-y-8 sm:space-y-10
">

  {[
    {
      icon: MapPin,
      title: "Office Address",
      info: [
        "#5-37-197, Opp: Celekt Mobile Showroom,Upstairs.",
        "Siddartha Photo city, 4/9 Brodipet, GUNTUR-522002.",
      ],
    },
    {
      icon: Phone,
      title: "Phone Support",
      info: [
        "+91 9849431943",
        "+91 92962 53948",
      ],
    },
    {
      icon: Mail,
      title: "Email Address",
      info: [
        "gunturtally@gmail.com",
      ],
    },
  ].map((item, index) => {

    const Icon = item.icon;

    return (
      <div
        key={index}
        className="
          group
          flex items-start gap-5
          transition-all duration-300
          hover:translate-x-2
        "
      >

        {/* ICON */}
        <div className="
          w-14 h-14
          rounded-2xl
          bg-gradient-to-br from-[#1178D4] to-[#6C63FF]
          flex items-center justify-center
          shadow-[0_10px_30px_rgba(17,120,212,0.18)]
          shrink-0
        ">

          <Icon className="w-7 h-7 text-white" />

        </div>

        {/* CONTENT */}
        <div>

          <h3 className="
            text-[22px]
            sm:text-[25px]
            font-bold
            text-[#0F172A]
            mb-2
            transition-colors duration-300
            group-hover:text-[#1178D4]
          ">
            {item.title}
          </h3>

          <div className="space-y-1">
            {item.info.map((text, i) => (
              <p
                key={i}
                className="
                  text-[#475569]
                  text-[15px] md:text-[16px]
                  leading-relaxed
                "
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    );
  })}

  {/* ================= FOLLOW US ================= */}
<div className="pt-4">

  <h4 className="
    text-2xl
    font-bold
    text-[#0F172A]
    mb-5
  ">
    Follow Us
  </h4>

  <div className="flex flex-wrap items-center gap-4">

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
          className="
            group
            w-14 h-14
            rounded-2xl
            border border-[#E2E8F0]
            bg-white
            flex items-center justify-center
            transition-all duration-300
            hover:-translate-y-1
            hover:border-transparent
            hover:bg-gradient-to-br
            hover:from-[#1178D4]
            hover:to-[#6C63FF]
            hover:shadow-[0_10px_30px_rgba(17,120,212,0.25)]
          "
        >

          <Icon className="
            w-5 h-5
            text-[#475569]
            transition-colors duration-300
            group-hover:text-white
          " />

        </a>
      );
    })}

  </div>

</div>


</div>

      {/* ================= RIGHT SIDE ================= */}
<div className="space-y-5">

  {/* HEADING */}
  <div className="mb-8">

    <h3 className="
      text-2xl
      md:text-4xl
      font-black
      text-[#0F172A]
    ">
      Request A
      <span className="bg-gradient-to-r from-[#1178D4] to-[#6C63FF] bg-clip-text text-transparent">
        {" "}Free Quote
      </span>
    </h3>

    <p className="
      mt-4
      text-[#64748B]
      leading-6
      max-w-xl
    ">
      Fill out the form below and our experts will
      contact you with the best solution for your business.
    </p>

  </div>

  {/* FORM */}
  <QuoteForm />

</div>

    </div>

  </div>

</section>

{/* ================= MAP SECTION ================= */}
<section className="
  py-10 sm:py-12 md:py-15
  px-4 sm:px-6
  bg-[#F8FAFC]
">

  <div className="max-w-7xl mx-auto">

    {/* SECTION HEADER */}
    <div className="
      text-center
      mb-14
    ">

      <div className="
        inline-flex items-center
        gap-2
        px-5 py-2
        rounded-full
        border border-[#DCE7F7]
        bg-white
        mb-5
      ">

        <MapPinned className="w-4 h-4 text-[#1178D4]" />

        <span className="
          text-sm
          font-semibold
          text-[#1178D4]
        ">
          Visit Our Office
        </span>

      </div>

      <h2 className="
        text-[30px]
        sm:text-4xl
        md:text-5xl
        font-black
        leading-tight
        text-[#0F172A]
      ">
        Find Us In
        <span className="
          bg-gradient-to-r
          from-[#1178D4]
          to-[#6C63FF]
          bg-clip-text
          text-transparent
        ">
          {" "}Guntur
        </span>
      </h2>

      <p className="
        mt-5
        max-w-2xl
        mx-auto
        text-[15px]
        sm:text-lg
        leading-7 sm:leading-8
        text-[#64748B]
      ">
        Visit our office for personalized consultation,
        product demos, and expert Tally solutions.
      </p>

    </div>

    {/* MAP CONTAINER */}
    <div className="
      relative
      overflow-hidden
      rounded-[32px]
      border border-[#E2E8F0]
      shadow-[0_20px_60px_rgba(15,23,42,0.08)]
    ">

      {/* MAP */}
      <iframe
        src="https://www.google.com/maps?q=Balaji%20Infotech%20Upstairs:%20Siddartha%20Photo%20City,%204/9,%20Brodipet,%20Guntur,%20Andhra%20Pradesh%20522002&output=embed"
        width="100%"
        height="420"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="border-0"
      />

      {/* FLOATING CARD */}
      <div className="
        absolute
        left-6 bottom-6
        hidden md:flex
        items-start gap-4
        bg-white/95
        backdrop-blur-xl
        border border-white/50
        rounded-3xl
        p-5
        shadow-[0_10px_40px_rgba(15,23,42,0.12)]
      ">

        <div className="
          w-14 h-14
          rounded-2xl
          bg-gradient-to-br
          from-[#1178D4]
          to-[#6C63FF]
          flex items-center justify-center
          shrink-0
        ">

          <Building2 className="w-6 h-6 text-white" />

        </div>

        <div>

          <h4 className="
            text-lg
            font-bold
            text-[#0F172A]
          ">
            Balaji AI Infotech
          </h4>

          <p className="
            mt-1
            text-[#64748B]
            leading-7
          ">
            Guntur, Andhra Pradesh, India
          </p>

        </div>

      </div>

    </div>

  </div>

</section>

</>
  );
}