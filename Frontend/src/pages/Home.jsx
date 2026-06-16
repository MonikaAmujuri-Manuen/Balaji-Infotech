import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  GraduationCap, Handshake, Headphones, BriefcaseBusiness, Code2,
  Settings2, MonitorCog, Headset, Smartphone, Puzzle, CheckCircle2,
  Server, Cloud, MessageCircleCheckIcon, Star, Quote, Award, Check, 
  Building2, Users, FileText, ShieldCheck, BadgeCheck, ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import QuoteForm from "../components/QuoteForm";

import "swiper/css";

import aboutImage from "../assets/about.png";
import testimonial from "../assets/testimonial.png";

import tallysoftware from "../assets/tally-software.png"
import tallyservices from "../assets/tally-services.png"
import tallyapps from "../assets/tally-apps.png"
import tallysolutions from "../assets/tally-solutions.png"
import tallyerp from "../assets/tally-erp.png"
import tallyaddon from "../assets/tally-addon.png"


import tallyPrime from "../assets/tallyPrime.png";
import tallyServer from "../assets/tallyServer.png";
import tallyAws from "../assets/tallyAws.png"
import tallyMobile from "../assets/tallyMobile.png"



const Home = () => {
  const navigate = useNavigate();

  const products = [
  {
    id: "prime",
    path: "tallyprime",
    label: "TallyPrime",
    icon: <CheckCircle2 className="w-4 h-4" />,
    title: "Optimize Business Operations With TallyPrime",
    description:
      "TallyPrime is a comprehensive business management software tailored to simplify and enhance the way businesses handle their financial and operational workflows. TallyPrime enables businesses to manage accounts, inventory, payroll, and taxation with unmatched efficiency.",

    features: [
      "Simplified accounting workflows",
      "Inventory & GST management",
      "Multi-user collaboration",
      "Customizable to Business Needs",
      "Data Accuracy and Security",
      "Reliable performance & support",
    ],

     image: tallyPrime,
  },

  {
    id: "server",
    path: "tally-server",
    label: "TallyPrime Server",
    icon: <Server className="w-4 h-4" />,
    title: "Enhance Business Efficiency With TallyPrime Server",
    description:
      "TallyPrime Server is a powerful solution designed to revolutionize how businesses manage their financial and operational data. Whether you’re a growing business or an established enterprise, TallyPrime Server offers tools that streamline operations and boost productivity.",

    features: [
      "Centralized Data Management",
      "Enhanced data security",
      "Server-Based Architecture",
      "Streamlined Troubleshooting",
      "Customization and Integration",
      "Improved Multi-User Efficiency",
    ],

     image: tallyServer,
  },

  {
    id: "aws",
    path: "aws",
    label: "TallyPrime Powered by AWS",
    icon: <Cloud className="w-4 h-4" />,
    title: "Cloud-Powered Tally Experience With AWS",
    description:
      "TallyPrime powered by AWS is a cutting-edge solution that leverages the flexibility and scalability of the cloud to revolutionize how businesses manage their financial and operational data. TallyPrime on AWS offers tools that boost productivity and streamline operations.",

    features: [
      "Cloud-Based Accessibility",
      "High Performance and Scalability",
      "Streamlined Integration",
      "Scalable deployment",
      "Business continuity support",
      "Enhanced Data Security",
    ],

    image: tallyAws,
  },

  {
    id: "Whatsapp",
    path: "whatsapp",
    label: "Tally Prime Server Whatsapp",
    icon: <MessageCircleCheckIcon className="w-4 h-4" />,
    title: "Simplify Business Interactions With Tally On Whatsapp",
    description:
      "Tally on WhatsApp revolutionizes the way businesses communicate and manage key operations by integrating TallyPrime with the power of WhatsApp. This feature enables businesses to access important financial and operational information instantly, ensuring faster decision-making and better collaboration.",

    features: [
      "Instant Reports on Demand",
      "Easy Setup and Integration",
      "Automated Notifications",
      "Enhanced User Convenience",
      "Seamless Communication",
      "Secure and Reliable",
    ],

    image: tallyMobile,
  },
];

const testimonials = [
  {
    name: "Rajesh Verma",
    role: "Managing Director",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Balaji AI InfoTech transformed our business operations with TallyPrime. Their support team is always available, ensuring we maximize the software’s potential.",
  },
  {
    name: "Sneha Kulkarni",
    role: "HR Manager",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "Balaji AI Infotech made managing our business finances a breeze. Their expertise in TallyPrime and their ability to customize it for our needs have helped us save time and focus on growth.",
  },
  {
    name: "Priya Sharma",
    role: "Finance Head",
    image:
      "https://randomuser.me/api/portraits/women/68.jpg",
    review:
      "Thanks to Balaji AI InfoTech, our switch to TallyPrime was effortless. The cloud integration powered by AWS allows my team to work from anywhere, ensuring business continuity.",
  },
  {
    name: "Ankit Mehta",
    role: "Business Owner",
    image:
      "https://randomuser.me/api/portraits/men/75.jpg",
    review:
      "Balaji AI InfoTech introduced us to TallyPrime, and we couldn’t be happier. It’s the perfect tool for managing our growing enterprise.",
  },
  {
    name: "Karan Sharma",
    role: "Business Owner",
    image:
      "https://randomuser.me/api/portraits/men/75.jpg",
    review:
      "The automated data backup and robust security features give us peace of mind. Onboarding, reliable support, and smooth migration to TallyPrime. Highly recommended."
  },
];

const services = [
  {
    title: "Tally Software",
    description:
      "Complete accounting, GST billing, inventory, and business management.",
    image: tallysoftware,
    link: "/services/tally-software",
  },
  {
    title: "Tally Services",
    description:
      "Professional installation, troubleshooting, remote support, and operational assistance.",
    image: tallyservices,
    link: "/services/tally-services",
  },
  {
    title: "Tally Apps for Mobile",
    description:
      "Access business reports, invoices, and analytics securely from anywhere using mobile integrations.",
    image: tallyapps,
    link: "/services/tally-mobile",
  },
  {
    title: "Tally Solutions",
    description:
      "Tailored enterprise solutions designed to simplify workflow automation.",
    image: tallysolutions,
    link: "/services/tally-solutions",
  },
  {
    title: "Tally ERP 9 Solutions",
    description:
      "Legacy Tally ERP 9 implementation, migration support, and business continuity services.",
    image: tallyerp,
    link: "/services/tally-erp",
  },
  {
    title: "Tally Add-Ons",
    description:
      "Enhance Tally functionality with specialized plugins, integrations, and smart business tools.",
    image: tallyaddon,
    link: "/services/tally-addon",
  },
];

const [activeTab, setActiveTab] = useState(products[0]);


  return (
    <>
    <Helmet>
      <title>
        Balaji Infotech | Tally Solutions Partner in Guntur
      </title>

      <meta
        name="description"
        content="Balaji Infotech provides TallyPrime software, Tally services, GST solutions, cloud hosting, ERP implementation, training and support in Guntur."
      />

      <meta
        name="keywords"
        content="TallyPrime, Tally Software, Tally Services, Tally Partner Guntur, GST Software, Accounting Software, Tally Training"
      />

      <meta
        property="og:title"
        content="Balaji Infotech | Tally Solutions Partner"
      />

      <meta
        property="og:description"
        content="Authorized Tally solutions partner offering TallyPrime, cloud hosting, training and support."
      />

      <meta
        property="og:type"
        content="website"
      />
    </Helmet>

      <Hero />

      {/* WHY CHOOSE US */}
      {false && (
      <section className="relative py-14 md:py-20 px-4 sm:px-6 bg-white overflow-hidden">
        <div className="max-w-3xl mx-auto text-center mb-12"> 

          <p className="
            text-sm
            tracking-[0.25em]
            uppercase
            text-[#2F80FF]
            font-semibold
            mb-4
          ">
            Why Choose Us
          </p>

          <h2 className="
            text-3xl
            md:text-5xl
            font-bold
            text-[#071426]
            mb-6
          ">
            Trusted Expertise
          </h2>

          <p className="
            text-[15px] md:text-[16px]
            text-gray-500
            leading-relaxed
          ">
            Over two decades of experience delivering innovative
            Tally solutions for modern businesses.
          </p>

        </div>
        <div
          className="
            max-w-6xl
            mx-auto
            grid
            grid-cols-1
            lg:grid-cols-3
            gap-6"
        >
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-6">

            {/* CARD 1 */}
            <div
              className="group
                relative
                overflow-hidden
                rounded-[32px]
                border border-[#E5E7EB]
                bg-white
                p-6 sm:p-8
                hover:-translate-y-2
                hover:border-[#7B61FF]/30
                hover:shadow-[0_20px_60px_rgba(123,97,255,0.12)]
                transition-all
                duration-500"
              >
              <div className="
                    absolute
                    top-[-30px]
                    right-[-30px]
                    w-[120px]
                    h-[120px]
                    rounded-full
                    bg-[#7B61FF]/10
                    blur-[60px]
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-700
                  "
              />

              <div
                className="
                  absolute
                  inset-0
                  rounded-[32px]
                  bg-gradient-to-br
                  from-white/80
                  via-transparent
                  to-transparent
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-700
                  pointer-events-none
                "
              />
              <div className="relative z-10">

                <div className="flex items-start gap-4 mb-6">

                  <div
                    className="
                      w-14 h-14
                      rounded-2xl
                      bg-gradient-to-br
                      from-[#2F80FF]
                      to-[#7B61FF]
                      flex items-center justify-center
                      text-white
                      shadow-lg
                      shrink-0
                      transition-all
                      duration-500
                      group-hover:scale-110
                      group-hover:rotate-3
                    "
                  >
                    <GraduationCap size={26} />
                  </div>

                  <div>
                    <h3
                      className="
                        text-3xl
                        font-semibold
                        text-[#071426]
                        leading-tight
                      "
                    >
                      Authorized Training Programs
                    </h3>
                  </div>
                </div>

                <p
                  className="
                    text-gray-500
                    group-hover:text-[#071426]/70
                    transition-colors
                    duration-500
                    leading-relaxed
                  "

                >
                  TEPL-certified programs designed to enhance professional accounting and ERP skills.
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div
              className="
                group
                relative
                overflow-hidden
                rounded-[32px]
                border border-[#E5E7EB]
                bg-white
                p-8
                hover:-translate-y-2
                hover:border-[#7B61FF]/30
                hover:shadow-[0_20px_60px_rgba(123,97,255,0.12)]
                transition-all
                duration-500
              "
            >

              <div
                className="
    absolute
    top-[-30px]
    right-[-30px]
    w-[120px]
    h-[120px]
    rounded-full
    bg-[#7B61FF]/10
    blur-[60px]
    opacity-0
    group-hover:opacity-100
    transition-all
    duration-700
  "
              />

              <div className="flex items-start gap-4 mb-6">

                <div
                  className="
      w-14 h-14
      rounded-2xl
      bg-gradient-to-br
      from-[#2F80FF]
      to-[#7B61FF]
      flex items-center justify-center
      text-white
      shadow-lg
      shrink-0
      transition-all
      duration-500
      group-hover:scale-110
      group-hover:rotate-3
    "
                >
                  <Headphones size={26} />
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-[#071426] leading-tight">
                    Comprehensive Support
                  </h3>
                </div>
              </div>
              <p
                className="
                  text-gray-500
                  leading-relaxed
                  text-[16px]
                "
              >
                Dedicated assistance to ensure seamless operations.
              </p>
            </div>
          </div>

          {/* BIG RIGHT CARD */}
          <div
            className=" group
              relative
              overflow-hidden
              rounded-[36px]
              lg:col-span-2
              relative
              overflow-hidden
              rounded-[36px]
              bg-white
              border border-[#E5E7EB]
              text-[#071426]
              p-10
              min-h-auto lg:min-h-[420px]
              hover:-translate-y-2
              hover:border-[#7B61FF]/30
              hover:shadow-[0_20px_60px_rgba(123,97,255,0.12)]
              transition-all
              duration-500
            "
          >

            <div
              className="
                absolute
                top-[-30px]
                right-[-30px]
                w-[120px]
                h-[120px]
                rounded-full
                bg-[#7B61FF]/10
                blur-[60px]
                opacity-0
                group-hover:opacity-100
                transition-all
                duration-700
              "
            />
            {/* GLOW */}
            <div
              className="
                absolute
                top-[-120px]
                right-[-80px]
                w-[260px]
                h-[260px]
                bg-[#7B61FF]/10
                blur-[100px]
                rounded-full
              "
            />

            {/* CONTENT */}
            <div className="relative z-10">

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-4 py-2
                  rounded-full
                  bg-white/10
                  border border-black/10
                  backdrop-blur-lg
                  text-[#071426]
                  text-sm
                  mb-8
                "
              >
                <span className="w-2 h-2 rounded-full bg-green-400" />
                Enterprise Support
              </div>

              <div className="flex items-start gap-4 mb-6 ">

                <div
                  className="
                    w-14 h-14
                    rounded-2xl
                    bg-gradient-to-br
                    from-[#2F80FF]
                    to-[#7B61FF]
                    flex items-center justify-center
                    text-white
                    shadow-lg
                    shrink-0
                    transition-all
                    duration-500
                    group-hover:scale-110
                    group-hover:rotate-3
                  "
                >
                  <Handshake size={26} />
                </div>

                <div>
                  <h3
                    className="
                      text-3xl
                      font-semibold
                      text-[#071426]
                      leading-tight
                    "
                  >
                    Customer-Centric Approach
                  </h3>
                </div>
              </div>

              <p
                className="
                  text-[#071426]
                  text-[16px] md:text-[17px]
                  leading-relaxed
                  max-w-[580px]
                  mb-10
                "
              >
                We prioritize business growth with tailored solutions, reliable service, and long-term support.
                Your success is our priority with personalized solutions and support.
              </p>

              {/* STATS */}
              <div
                className="
                  grid
                  grid-cols-2
                  md:grid-cols-3
                  gap-4
                  max-w-[580px]
                "
              >
                <div
                  className="
                    rounded-2xl
                    border border-white/10
                    bg-gradient-to-br
                    from-[#2F80FF]
                    to-[#7B61FF]
                    backdrop-blur-xl
                    p-5
                  "
                >
                  <p className="text-white text-sm mb-2">
                    Clients Served
                  </p>

                  <h4 className="text-3xl text-white font-semibold">
                    500+
                  </h4>
                </div>

                <div
                  className="
                    rounded-2xl
                    border border-white/10
                    bg-gradient-to-br
                    from-[#2F80FF]
                    to-[#7B61FF]
                    backdrop-blur-xl
                    p-5
                    "
                >
                  <p className="text-white text-sm mb-2">
                    Years Experience
                  </p>

                  <h4 className="text-3xl text-white font-semibold">
                    20+
                  </h4>
                </div>

                <div
                  className="rounded-2xl
                    border border-white/10
                    bg-gradient-to-br
                    from-[#2F80FF]
                    to-[#7B61FF]
                    backdrop-blur-xl
                    p-5"
                >
                  <p className="text-white text-sm mb-2">
                    Support Access
                  </p>

                  <h4 className="text-3xl text-white font-semibold">
                    24/7
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      )}

      <section className="relative py-14 lg:py-16 px-4 sm:px-6 overflow-hidden bg-white">

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
      rounded-full
      bg-[#155A96]/5
      blur-3xl
    "
  />

  <div className="max-w-4xl mx-auto text-center mb-14">

  <div
    className="
      inline-flex
      items-center
      gap-2
      px-4 py-2
      rounded-full
      border
      border-[#155A96]/10
      bg-[#155A96]/5
      text-[#155A96]
      text-sm
      font-medium
      mb-5
    "
  >
    <ShieldCheck size={16}/>
    Why Choose Balaji
  </div>

  <h2
    className="
      text-3xl
      md:text-4xl
      font-bold
      text-[#071426]
      leading-tight
      mb-5
    "
  >
    Trusted Expertise
  </h2>

  <div
  className="
    w-20
    h-1
    bg-[#F0AE11]
    rounded-full
    mx-auto
    mt-5
    mb-6
  "
/>

</div>

  <div
    className="
      relative
      max-w-7xl
      mx-auto
      grid
      grid-cols-1
      lg:grid-cols-2
      gap-6 lg:gap-8
      items-center
    "
  >
    {/* LEFT CONTENT */}
    <div>
      {/* FEATURES */}
      <div className="space-y-4">

        <h3 className="
      text-xl
      md:text-2xl
      lg:text-3xl
      font-semibold
      text-[#071426]
      leading-tight
      mb-4
    ">
      Built on Experience. Driven by Results.
        </h3>

        <p
    className="
      text-slate-600
      max-w-2xl
      mx-auto
      leading-8
    "
  >
    Over two decades of experience delivering innovative Tally solutions.
  </p>

        {[
          "Authorized Training Programs",
          "TallyPrime Implementation",
          "GST & Accounting Solutions",
          "Dedicated Technical Support",
        ].map((item) => (
          <div
            key={item}
            className="
              flex
              items-center
              gap-4
            "
          >
            <div
              className="
                flex
                items-center
                justify-center
                w-7
                h-7
                rounded-full
                bg-[#155A96]
                shrink-0
              "
            >
              <BadgeCheck
                size={14}
                className="text-white"
              />
            </div>

            <span
              className="
                text-[#071426]
                font-medium
                text-lg
              "
            >
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>

    {/* RIGHT STATS */}
    <div
      className="
        grid
        grid-cols-2
        gap-5
      "
    >
      {/* CARD 1 */}
      <div
        className="
          bg-white
          border
          border-slate-200
          rounded-[28px]
          p-6
          shadow-sm
          hover:-translate-y-1
          hover:shadow-lg
          transition-all
          duration-300
        "
      >
        <h3
          className="
            text-4xl
            font-bold
            text-[#155A96]
            text-center
          "
        >
          500+
        </h3>

        <p className="mt-3 text-center text-slate-500">
          Businesses Served
        </p>
      </div>

      {/* CARD 2 */}
      <div
        className="
          bg-white
          border
          border-slate-200
          rounded-[28px]
          p-6
          shadow-sm
          hover:-translate-y-1
          hover:shadow-lg
          transition-all
          duration-300
        "
      >
        <h3
          className="
            text-4xl
            font-bold
            text-center
            text-[#155A96]
          "
        >
          20+
        </h3>

        <p className="mt-3 text-center text-slate-500">
          Years Experience
        </p>
      </div>

      {/* CARD 3 */}
      <div
        className="
          bg-white
          border
          border-slate-200
          rounded-[28px]
          p-6
          shadow-sm
          hover:-translate-y-1
          hover:shadow-lg
          transition-all
          duration-300
        "
      >
        <h3
          className="
            text-4xl
            font-bold
            text-center
            text-[#155A96]
          "
        >
          24/7
        </h3>

        <p className="mt-3 text-center text-slate-500">
          Support Assistance
        </p>
      </div>
      <div
        className="
          bg-white
          border
          border-slate-200
          rounded-[28px]
          p-6
          shadow-sm
          hover:-translate-y-1
          hover:shadow-lg
          transition-all
          duration-300
        "
      >
        <h3
          className="
            text-4xl
            text-center
            font-bold
            text-[#155A96]
          "
        >
          100+
        </h3>

        <p className="mt-3 text-center text-slate-500">
          Students Trained
        </p>
      </div>

      
    </div>
  </div>
      </section>
      
{false && (
<section className="relative py-20 lg:py-24 bg-white overflow-hidden">

  {/* Background Glow */}
  <div
    className="
      absolute
      top-0
      left-1/2
      -translate-x-1/2
      w-[700px]
      h-[700px]
      bg-gradient-to-r
      from-[#2F80FF]/10
      to-[#7B61FF]/10
      blur-3xl
      rounded-full
    "
  />

  <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

      {/* LEFT CONTENT */}
      <div>

        <span
          className="
            inline-flex
            items-center
            px-4
            py-2
            rounded-full
            border
            border-slate-200
            bg-white
            text-[#2563EB]
            text-sm
            font-medium
            shadow-sm
          "
        >
          Why Choose Us
        </span>

        <h2
          className="
            mt-6
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-[#071426]
            leading-tight
          "
        >
          Trusted By Businesses
          <span className="block text-[#2563EB]">
            For Over 20 Years
          </span>
        </h2>

        <p
          className="
            mt-6
            text-base
            lg:text-lg
            text-slate-600
            leading-relaxed
            max-w-xl
          "
        >
          We help businesses streamline accounting,
          inventory management, compliance, and enterprise
          operations through trusted Tally solutions and
          professional training programs.
        </p>

        {/* FEATURES */}
        <div className="mt-8 space-y-5">

          <div className="flex items-start gap-4">
            <ShieldCheck
              className="text-[#2563EB] shrink-0 mt-1"
              size={22}
            />
            <div>
              <h4 className="font-semibold text-[#071426]">
                Authorized Tally Partner
              </h4>
              <p className="text-slate-500 text-sm">
                Certified implementation and support services.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <GraduationCap
              className="text-[#2563EB] shrink-0 mt-1"
              size={22}
            />
            <div>
              <h4 className="font-semibold text-[#071426]">
                TEPL Certified Training
              </h4>
              <p className="text-slate-500 text-sm">
                Industry-recognized professional programs.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Headphones
              className="text-[#2563EB] shrink-0 mt-1"
              size={22}
            />
            <div>
              <h4 className="font-semibold text-[#071426]">
                Dedicated Support Team
              </h4>
              <p className="text-slate-500 text-sm">
                Fast assistance whenever your business needs it.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Award
              className="text-[#2563EB] shrink-0 mt-1"
              size={22}
            />
            <div>
              <h4 className="font-semibold text-[#071426]">
                20+ Years Of Experience
              </h4>
              <p className="text-slate-500 text-sm">
                Proven expertise serving businesses across industries.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="relative">

        <div
          className="
            bg-white
            border
            border-slate-200
            rounded-[32px]
            p-8
            shadow-xl
          "
        >

          <img
            src={dashboardImage}
            alt="Business Growth"
            className="w-full max-w-md mx-auto"
          />

          {/* STATS */}
          <div className="grid grid-cols-2 gap-4 mt-8">

            <div
              className="
                rounded-2xl
                bg-slate-50
                border
                border-slate-200
                p-5
              "
            >
              <p className="text-slate-500 text-sm">
                Clients Served
              </p>

              <h3 className="text-3xl font-bold text-[#071426] mt-2">
                500+
              </h3>
            </div>

            <div
              className="
                rounded-2xl
                bg-slate-50
                border
                border-slate-200
                p-5
              "
            >
              <p className="text-slate-500 text-sm">
                Experience
              </p>

              <h3 className="text-3xl font-bold text-[#071426] mt-2">
                20+
              </h3>
            </div>

            <div
              className="
                rounded-2xl
                bg-slate-50
                border
                border-slate-200
                p-5
              "
            >
              <p className="text-slate-500 text-sm">
                Support
              </p>

              <h3 className="text-3xl font-bold text-[#071426] mt-2">
                24/7
              </h3>
            </div>

            <div
              className="
                rounded-2xl
                bg-slate-50
                border
                border-slate-200
                p-5
              "
            >
              <p className="text-slate-500 text-sm">
                Success Rate
              </p>

              <h3 className="text-3xl font-bold text-[#071426] mt-2">
                99%
              </h3>
            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
)}

      {/* ABOUT US */}
    <section className="py-10 md:py-14 px-4 sm:px-6 bg-white">
      
      <div className="max-w-6xl mx-auto">

        {/* TOP CONTENT */}
        <div className="text-center max-w-4xl mx-auto mb-8">

          {/* BADGE */}
    <div
      className="
        inline-flex
        items-center
        gap-2
        px-4
        py-2
        rounded-full
        bg-[#155A96]/5
        border
        border-[#155A96]/10
        text-[#155A96]
        text-sm
        font-medium
        mb-5
      "
    >
      <BadgeCheck
        size={16}
        className="text-[#155A96]"
      />
      Trusted Tally Partner
    </div>

          <h2 className="
            text-3xl
            sm:text-4xl
            font-bold
            text-[#071426]
            leading-tight
            mb-5
          ">
            About Balaji AI Infotech
          </h2>

          {/* GOLD ACCENT */}
    <div
  className="
    w-20
    h-1
    bg-[#F0AE11]
    rounded-full
    mx-auto
    mt-5
    mb-6
  "
/>

        </div>

        {/* MAIN GRID */}
        {/* MAIN GRID */}
<div
  className="
    grid
    lg:grid-cols-[1fr_1fr]
    gap-10
    items-center
  "
>
  {/* LEFT SIDE */}
  <div>

    {/* IMAGE */}
    <div
      className="
        overflow-hidden
        rounded-[32px]
        border
        border-slate-200
        
        shadow-sm
      "
    >
      <img
        src={aboutImage}
        alt="About Balaji AI Infotech"
        className="
          w-full
          h-[460px]
          object-cover
          
        "
      />
    </div>
  </div>

  {/* RIGHT SIDE */}
  <div>

    {/* HEADING */}
    <h3
      className="
        text-3xl
        md:text-3xl
        font-semibold
        text-[#155A96]
        leading-tight
        mb-5
      "
    >
        Your Trusted Tally Partner
    </h3>

    {/* DESCRIPTION */}
    <p
      className="
        text-slate-600
        leading-8
        text-lg
        mb-8
      "
    >
      Since 2000, Balaji AI Infotech has been helping
      businesses streamline accounting, GST compliance,
      inventory management, payroll processing, and
      financial operations through trusted Tally
      solutions and certified training programs.
    </p>

    {/* SERVICES */}
    <div className="space-y-5 mt-8">

  {[
    "Tally Software Sales and Support",
    "Tally API Service",
    "Training and Consultation",
    "Tally Customization",
  ].map((item) => (
    <div
      key={item}
      className="
        flex
        items-center
        gap-3
        pb-3
        
      "
    >
      <div
        className="
          w-8
          h-8
          rounded-xl
          bg-[#155A96]
          flex
          items-center
          justify-center
          shrink-0
        "
      >
        <BadgeCheck
          size={18}
          className="text-white"
        />
      </div>

      <h4
        className="
          text-xl
          font-semibold
          text-[#071426]
        "
      >
        {item}
      </h4>
    </div>
  ))}

</div>

  </div>
</div>
      </div>
    </section>

  
    {/* SERVICES SECTION */}
<section className="relative py-10 md:py-14 bg-white overflow-hidden">

  {/* Background Glow */}
  <div
    className="
      absolute
      top-0
      left-1/2
      -translate-x-1/2
      w-[700px]
      h-[700px]
      rounded-full
      bg-[#155A96]/5
      blur-[140px]
    "
  />

  <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

    {/* Header */}
    <div className="text-center max-w-3xl mx-auto mb-12">

      <p
        className="
          text-[#155A96]
          uppercase
          tracking-[0.25em]
          text-sm
          font-semibold
          mb-4
        "
      >
        Services
      </p>

      <h2
        className="
          text-3xl
          md:text-4xl
          font-bold
          text-[#071426]
          mb-5
        "
      >
        Complete Tally Solutions
      </h2>

      <p
        className="
          text-slate-600
          text-lg
          leading-relaxed
        "
      >
        Everything your business needs—from implementation and cloud hosting
        to customization, training, and ongoing support.
      </p>
    </div>

    {/* Horizontal Scroll */}
    <div
      className="
        flex
        gap-5
        overflow-x-auto
        snap-x
        snap-mandatory
        pt-3
    pb-4
        pb-3
        scrollbar-hide
      "
    >

      {services.map((service, index) => (
        <Link
        to={service.link}
          key={index}
          className="
            min-w-[300px]
            md:min-w-[320px]
            max-w-[320px]
            snap-start
            shrink-0
            rounded-[28px]
            bg-[#F8FBFF]
            border
            border-slate-200
            overflow-hidden
            hover:scale-[1.01]
            hover:shadow-xl
            transition-all
            duration-300
          "
        >

          {/* Image */}
          <div className="h-50 bg-[#F5F9FF] overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="
                w-full
                h-full
                object-cover
                transition-transform
                duration-500
              "
            />
          </div>

          {/* Content */}
          <div className="p-5">

            <h3
              className="
                text-2xl
                font-bold
                text-[#071426]
                mb-3
              "
            >
              {service.title}
            </h3>

            <p
              className="
                text-slate-600
                leading-relaxed
                mb-4
              "
            >
              {service.description}
            </p>

            <Link
            to={service.link}
            className="
              inline-flex
              items-center
              gap-2
              text-[#155A96]
              font-semibold
              hover:gap-3
              transition-all
              duration-300
            "
          >
            Learn More →
          </Link>

          </div>

        </Link>
      ))}
    </div>

    {/* Scroll Hint */}
    <div className="flex justify-center mt-4">
      <div
        className="
          px-4
          py-2
          rounded-full
          bg-[#F0AE11]/10
          text-[#F0AE11]
          text-sm
          font-medium
        "
      >
        ← Scroll to explore services →
      </div>
    </div>

  </div>
</section>

{/* PRODUCTS SECTION */}
    <section className="relative pt-4 pb-10 md:pt-6 md:pb-14 overflow-hidden bg-white">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#155A96]/8 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-10 w-72 h-72 bg-[#F0AE11]/8 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-8">

          <p className="
            text-[#155A96]
            uppercase
            tracking-[0.3em]
            text-sm
            font-semibold
            mb-4
          ">
            PRODUCTS
          </p>

          <h2
            className="
              text-3xl
              md:text-4xl
              font-bold
              text-[#071426]
              leading-tight
              tracking-tight
            "
          >
            Solutions Built For Your Business
          </h2>

          {/* GOLD ACCENT */}
          <div
          className="
            w-20
            h-1
            bg-[#F0AE11]
            rounded-full
            mx-auto
            mt-5
            mb-6
          "
        />

          <p
            className="
              mt-4
              text-[16px] md:text-[17px]
              text-slate-600
              leading-relaxed
            "
          >
            Powerful Tally products designed to simplify accounting,
            automation, reporting, and business operations.
          </p>
        </div>

        {/* TAB SWITCHER */}
        <div className="flex justify-center mb-8">

          <div
            className="
              flex
              flex-nowrap md:flex-wrap
              overflow-x-auto
              scrollbar-hide
              items-center
              gap-2
              p-2
              rounded-full
              bg-[#F5F7FB]
              border border-gray-200
              shadow-sm
            "
          >
            {products.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item)}
                className={`
                  relative
                  flex
                  items-center
                  gap-2
                  px-4 sm:px-5 py-3
                  rounded-full
                  text-[12px] sm:text-sm
                  font-medium
                  transition-all
                  duration-300

                  ${
                    activeTab.id === item.id
                      ? "bg-[#155A96] text-white shadow-lg"
                      : "text-gray-500 hover:text-[#071426]"
                  }
                `}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* PRODUCT CARD */}
        <div
          className="
            relative
            rounded-[36px]
            border border-gray-200
            bg-white/80
            backdrop-blur-xl
            shadow-[0_10px_50px_rgba(0,0,0,0.06)]
            overflow-hidden
          "
        >
          <AnimatePresence mode="wait">

            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.45 }}
              className="
                grid
                grid-cols-1
                lg:grid-cols-2
                gap-6 lg:gap-8
                items-center
                p-5 sm:p-6 md:p-8
              "
            >

              {/* LEFT CONTENT */}
              <div>

                <h3
                  className="
                    text-xl
                    sm:text-2xl
                    md:text-2xl
                    font-bold
                    text-[#071426]
                    leading-tight
                    tracking-tight
                    mb-5
                  "
                >
                  {activeTab.title}
                </h3>

                <p
                  className="
                    text-gray-500
                    text-[15px] md:text-[16px]
                    leading-relaxed
                    mb-6
                  "
                >
                  {activeTab.description}
                </p>

                {/* FEATURES */}
                <div className="space-y-3 mb-6">

                  {activeTab.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.08,
                      }}
                      className="
                        flex
                        items-start
                        gap-3
                      "
                    >
                      <div
                        className="
                          w-6 h-6
                          rounded-full
                          bg-[#155A96]
                          flex
                          items-center
                          justify-center
                          mt-0.5
                          shrink-0
                        "
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                      </div>

                      <span
                        className="
                          text-gray-700
                          leading-relaxed
                        "
                      >
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="flex flex-wrap gap-4">

                  <button
  onClick={() => navigate(`/products/${activeTab.path}`)}

  className="
    inline-flex items-center justify-center
    px-5 py-3
rounded-xl
    bg-[#155A96]
    hover:bg-[#124C80]
    text-white
    font-medium
    shadow-lg
    hover:scale-[1.03]
    transition-all
    duration-300
  "
>
  Explore Features
</button>

                  
                </div>
              </div>

              {/* RIGHT IMAGE */}
<motion.div
  className="relative"
>

  {/* GLOW */}
  <div
    className="
      absolute
      inset-0
      bg-[#155A96]/10
      blur-3xl
      rounded-full
      scale-90
    "
  />

  <div
    className="
      relative
      h-[260px]
      sm:h-[340px]
      lg:h-[430px]
      rounded-[32px]
      overflow-hidden
      border border-gray-200
      shadow-[0_20px_60px_rgba(0,0,0,0.12)]
      bg-white
    "
  >
    <img
      src={activeTab.image}
      alt={activeTab.label}
      className="
        w-full
        h-full
        object-cover
      "
    />
  </div>
</motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
    
  {/* Testimonials SECTION */}
  {false && (
    <section className=" relative py-10 md:py-14">

      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
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
        <div className="text-center mb-8">
          <p
            className="
              text-[#2F80FF]
              font-semibold
              tracking-[0.25em]
              uppercase
              mb-4
            "
          >
            Testimonials
          </p>

          <h2
            className="
              text-2xl
              sm:text-3xl
              md:text-4xl
              font-bold
              text-[#071426]
              leading-tight
            "
          >
            What Our Clients Say
          </h2>

          <p
            className="
              max-w-2xl
              mx-auto
              mt-4
              text-sm sm:text-[15px]
              text-gray-500
              leading-relaxed
            "
          >
            Trusted by businesses across industries for seamless
            Tally solutions, expert support, and scalable services.
          </p>
        </div>

        {/* CAROUSEL */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1.1}
          centeredSlides={true}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.3,
            },
            1024: {
              slidesPerView: 2.2,
            },
            1280: {
              slidesPerView: 2.6,
            },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{
                  y: -10,
                  scale: 1.01,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="!overflow-visible
                  group
                  relative
                  h-full
                  min-h-[260px] sm:min-h-[300px]
                  rounded-[28px]
                  border
                  border-white/60
                  bg-white
                  
                  shadow-[0_10px_30px_rgba(0,0,0,0.04)]
                  p-4 sm:p-5
                  overflow-hidden
                "
              >
                {/* HOVER GLOW */}
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
                    to-[#7B61FF]/5
                  "
                />

                {/* QUOTE ICON */}
                <Quote
                  className="
                    absolute
                    right-8
                    bottom-8
                    w-10 h-10
                    text-[#2F80FF]/10
                  "
                />

                {/* STARS */}
                <div className="flex gap-1 mb-6 relative z-10">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="
                        w-5
                        h-5
                        fill-yellow-400
                        text-yellow-400
                      "
                    />
                  ))}
                </div>

                {/* REVIEW */}
                <p
                  className="
                    text-gray-600
                    leading-7
                    text-sm
                    mb-6
                    relative
                    z-10
                  "
                >
                  “{item.review}”
                </p>

                {/* USER */}
                <div
                  className="
                    flex
                    items-center
                    gap-4
                    relative
                    z-10
                  "
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="
                      w-10 h-10
                      rounded-full
                      object-cover
                      border-2
                      border-white
                      shadow-md
                    "
                  />

                  <div>
                    <h4
                      className="
                        text-base sm:text-lg
                        font-semibold
                        text-[#071426]
                      "
                    >
                      {item.name}
                    </h4>

                    <p className="text-sm text-gray-500">
                      {item.role}
                    </p>
                  </div>
                </div>

              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )}
    
    <section className="py-10 lg:py-14 bg-[#F8FAFC]">
  <div className="max-w-6xl mx-auto px-4 sm:px-6">

    {/* Main White Container */}
    <div
      className="
        bg-white
        rounded-[40px]
        border border-slate-200
        p-5 md:p-6
        shadow-sm
      "
    >

      <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">

        {/* LEFT SIDE */}
        <div className="relative">

          {/* IMAGE */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[32px]
              h-[600px]
            "
          >
            <img
              src={testimonial}
              alt="Client Success"
              className="
                w-full
                h-full
                object-cover
              "
            />
          </div>

          {/* FLOATING TITLE CARD */}
          <div
            className="
              absolute
              top-0
              left-0
              bg-white
              px-8
              py-7
              max-w-[340px]
              rounded-tl-[30px]
              rounded-tr-[32px]
              rounded-br-[80px]
            "
          >
            <h2
              className="
                text-3xl
                font-bold
                text-[#071426]
                leading-tight
              "
            >
              Hear From Our
              <br />
              Satisfied Clients
            </h2>

            <div className="mt-5">
              <p className="text-[#155A96] font-semibold">
                Trusted By 500+ Businesses
              </p>

              <p className="text-slate-500 text-sm mt-1">
                Delivering Tally excellence since 2000.
              </p>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-4">

          {[
            {
              name: "Rajesh Kumar",
              role: "Manufacturing Business",
              quote:
                "Excellent support during TallyPrime implementation. The team handled migration and training smoothly."
            },
            {
              name: "Suresh Reddy",
              role: "Retail Store Owner",
              quote:
                "Quick GST setup and reliable technical assistance whenever required. Highly recommended."
            },
            {
              name: "Anita Sharma",
              role: "Accounting Professional",
              quote:
                "The training programs were practical and easy to understand. Great experience overall."
            }
          ].map((item, index) => (
            <div
              key={index}
              className={`
              rounded-[28px]
              border
              p-3
              transition-all
              hover:shadow-md

              ${
                index === 0
                  ? `
                    bg-[#155A96]
                    backdrop-blur-xl
                    border-white/20
                    shadow-[0_10px_40px_rgba(21,90,150,0.25)]
                  `
                  : `
                    bg-[#FCFCFD]
                    border-slate-200
                  `
              }
            `}
            >
              {/* Glass Highlight */}
              {index === 0 && (
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-white/10
                    via-transparent
                    to-transparent
                    pointer-events-none
                    rounded-[28px]
                  "
                />
              )}
              <div
                className={`
                  text-base mb-3
                  ${index === 0 ? "text-[#F0AE11]" : "text-[#F0AE11]"}
                `}
              >
                ★★★★★
              </div>

              <p
                className={`
                  leading-relaxed mb-3
                  ${
                    index === 0
                      ? "text-white/90"
                      : "text-slate-600"
                  }
                `}
              >
                "{item.quote}"
              </p>

              <div>
                <h4
                  className={`
                    text-lg font-bold
                    ${
                      index === 0
                        ? "text-white"
                        : "text-[#071426]"
                    }
                  `}
                >
                  {item.name}
                </h4>

                <p
                  className={
                    index === 0
                      ? "text-white/70"
                      : "text-slate-500"
                  }
                >
                  {item.role}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>

      {/* Bottom CTA */}
      <div
        className="
          mt-4
          bg-[#155A96]
          rounded-[28px]
          px-5
          py-3
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-4
        "
      >
        <h3
          className="
            text-white
            text-2xl
            font-semibold
          "
        >
          Ready To Simplify Your Business Operations?
        </h3>

        <button onClick={() => navigate(`/contact`) }
          className="
            bg-white
            text-[#155A96]
            px-5
            py-3
            rounded-xl
            font-semibold
            hover:scale-105
            transition-all
          "
        >
          Get Started
        </button>
      </div>

    </div>

  </div>
</section>

    {/* CTA SECTION */}
    <section className=" relative py-10 md:py-14 overflow-hidden bg-[#F8FAFC]">    
      {/* BACKGROUND GLOW */}
      

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-8 lg:gap-10
            items-center
          "
        >
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* TAG */}
            <div
              className="
                inline-flex
                items-center
                gap-2
                px-4
                py-1.5
                mb-4
                text-sm
                rounded-full
                bg-[#155A96]/10
                border border-[#155A96]/20
                text-[#155A96]
                font-medium
                
              "
            >
              <BadgeCheck className="w-4 h-4" />
              Free Consultation
            </div>

            {/* HEADING */}
            <h2
              className="
                text-3xl
                sm:text-4xl
                md:text-5xl
                font-bold
                text-[#071426]
                leading-tight
                mb-4
              "
            >
              Request A
              <span className="text-[#155A96]">
                {" "}
                Quote
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                text-sm sm:text-[15px]
                leading-7
                mb-6
                text-gray-600
                leading-relaxed
                max-w-lg
                mb-10
              "
            >
              Let our certified Tally experts help you
              choose the right solution for your
              business operations, accounting workflows,
              and scalable growth.
            </p>

            {/* TRUST POINTS */}
            <div className="space-y-3 mb-6">
              {[
                {
                  icon: ShieldCheck,
                  title: "Certified Tally Experts",
                },
                {
                  icon: Headphones,
                  title: "24/7 Technical Support",
                },
                {
                  icon: Building2,
                  title: "Trusted By 500+ Businesses",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="
                    flex
                    items-center
                    gap-4
                  "
                >
                  <div
                    className="
                      w-10
                      h-10
                      rounded-xl
                      flex
                      items-center
                      justify-center
                      bg-[#155A96]
                      shadow-lg
                    "
                  >
                    <item.icon className="w-4 h-4 text-white" />
                  </div>

                  <p
                    className="
                      text-sm sm:text-base
                      font-medium
                      text-[#071426]
                    "
                  >
                    {item.title}
                  </p>
                </motion.div>
              ))}
            </div>

          </motion.div>

          <QuoteForm />
        </div>
      </div>
    </section>

    </>
  );
};

export default Home;