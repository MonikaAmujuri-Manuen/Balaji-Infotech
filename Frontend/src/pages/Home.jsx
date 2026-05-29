import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  GraduationCap, Handshake, Headphones, BriefcaseBusiness, Code2,
  Settings2, MonitorCog, Headset, Smartphone, Puzzle, CheckCircle2,
  Server, Cloud, MessageCircleCheckIcon, Star, Quote,
  Building2, Users, FileText, ShieldCheck, BadgeCheck, ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import QuoteForm from "../components/QuoteForm";

import "swiper/css";

import aboutImage from "../assets/about.png";


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


const [activeTab, setActiveTab] = useState(products[0]);



  return (
    <>
      <Hero />

      {/* WHY CHOOSE US */}
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

      {/* ABOUT US */}
    <section className="py-14 md:py-18 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-white to-[#F8FAFC]">
      
      <div className="max-w-6xl mx-auto">

        {/* TOP CONTENT */}
        <div className="text-center max-w-5xl mx-auto mb-10">

          <p className="
            text-[#2F80FF]
            uppercase
            tracking-[0.3em]
            text-sm
            font-semibold
            mb-6
          ">
            ABOUT
          </p>

          <h2 className="
            text-3xl
            sm:text-4xl
            md:text-6xl
            font-bold
            text-[#071426]
            leading-tight
            mb-8
          ">
            About Balaji AI Infotech
          </h2>

          <p className="
            text-[15px] md:text-[16px]
            md:text-xl
            text-gray-600
            leading-relaxed
          ">
            At Balaji Ai Infotech Pvt. Ltd., we are committed to empowering businesses and individuals through Tally
            Application based solutions and training. As a trusted provider of Tally Software as a Service (SAAS) and 
            Tally Education (TEPL), our purpose is to bridge the gap between skill development and accounting automation, 
            ensuring every organization can achieve seamless financial management.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="
          grid
          lg:grid-cols-[1fr_1.1fr]
          gap-10
          items-center
        ">

          {/* LEFT IMAGE */}
          <div className="relative">

            {/* GLOW */}
            <div className="
              absolute
              -top-10
              -left-10
              w-60
              h-60
              bg-[#7B61FF]/10
              blur-[100px]
              rounded-full
            " />

            <div
              className="
                relative
                overflow-hidden
                rounded-[28px] sm:rounded-[36px]

                border border-white/40

                bg-white/40
                backdrop-blur-2xl

                shadow-[0_20px_60px_rgba(0,0,0,0.08)]
              "
            >
              <img
                src={aboutImage}
                alt="About Balaji AI Infotech"
                className="
                  w-full
                  h-full
                  object-cover
                "
              />

              {/* OVERLAY */}
              <div className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#071426]/30
                via-transparent
                to-transparent
              " />
            </div>
            <div
  className="
    mt-6
    rounded-[28px]
    border border-gray-200
    bg-white/70
    backdrop-blur-xl
    p-5 sm:p-6
    shadow-[0_10px_30px_rgba(0,0,0,0.05)]
  "
>
  <div className="flex items-center gap-3 mb-4">
    <div className="
      w-3 h-3
      rounded-full
      bg-green-500
      animate-pulse
    " />

    <p className="
      text-sm
      font-medium
      tracking-wide
      text-[#071426]
    ">
      Trusted by modern businesses
    </p>
  </div>

  <div className="
    grid grid-cols-2
    gap-4
  ">
    <div>
      <p className="text-2xl font-bold text-[#071426]">
        ERP
      </p>
      <p className="text-sm text-gray-500 mt-1">
        Smart accounting workflows
      </p>
    </div>

    <div>
      <p className="text-2xl font-bold text-[#071426]">
        GST
      </p>
      <p className="text-sm text-gray-500 mt-1">
        Seamless tax management
      </p>
    </div>

    <div>
      <p className="text-2xl font-bold text-[#071426]">
        Payroll
      </p>
      <p className="text-sm text-gray-500 mt-1">
        Employee salary automation
      </p>
    </div>

    <div>
      <p className="text-2xl font-bold text-[#071426]">
        TEPL
      </p>
      <p className="text-sm text-gray-500 mt-1">
        Certified training programs
      </p>
    </div>
  </div>
</div>
          </div>

          {/* RIGHT CONTENT */}
          <div>

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
              Enterprise Expertise
            </div>

            <h3 className="
              text-3xl
              md:text-5xl
              font-bold
              text-[#071426]
              leading-tight
              mb-8
            ">
              About Balaji Infotech Tally Experts
            </h3>

            <p className="
              text-[16px] md:text-[17px]
              text-gray-600
              leading-relaxed
              mb-12
            ">
              At Balaji Ai Infotech Pvt Ltd, we make it easier for businesses to manage their accounts and 
              operations using Tally software. Since  2000, we have been helping businesses improve efficiency, 
              manage accounts, track inventory, handle payroll, and meet tax compliance.
            </p>

            {/* CORE COMPETENCIES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              {/* SALES */}
              <div
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  p-6

                  bg-white/70
                  backdrop-blur-2xl

                  border border-white/50

                  shadow-[0_10px_30px_rgba(0,0,0,0.05)]

                  hover:-translate-y-2
                  hover:shadow-[0_20px_60px_rgba(123,97,255,0.12)]

                  transition-all
                  duration-500
                "
              >
                {/* GRADIENT HOVER */}
                <div className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-[#2F80FF]/10
                  via-[#7B61FF]/5
                  to-transparent
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-500
                " />

                {/* GLOW */}
                <div className="
                  absolute
                  -top-10
                  -right-10
                  w-32
                  h-32
                  bg-[#7B61FF]/10
                  blur-[70px]
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-700
                " />

                <div className="relative z-10">

                  <div className="
                    flex
                    items-center
                    gap-4
                    mb-6
                  ">
                    <div className="
                      w-14 h-14
                      rounded-2xl
                      bg-gradient-to-br
                      from-[#2F80FF]
                      to-[#7B61FF]

                      flex items-center justify-center
                      shrink-0
                      text-white
                    ">
                    
                      <BriefcaseBusiness size={24} />
                    </div>

                    <h4 className="
                      text-[20px] sm:text-[22px]
                      font-semibold
                      text-[#071426]
                      leading-tight
                      mb-2
                    ">
                      Tally Sales
                    </h4>
                  </div>

                  <p className="
                    text-gray-500
                    text-sm
                    leading-relaxed
                  ">
                    Expert Software sales and support for modern businesses.
                  </p>
                </div>
              </div>

              {/* API */}
              <div
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  p-6

                  bg-white/70
                  backdrop-blur-2xl

                  border border-white/50

                  shadow-[0_10px_30px_rgba(0,0,0,0.05)]

                  hover:-translate-y-2
                  hover:shadow-[0_20px_60px_rgba(47,128,255,0.12)]

                  transition-all
                  duration-500
                "
              >
                <div className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-[#7B61FF]/10
                  via-[#2F80FF]/5
                  to-transparent
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-500
                " />

                <div className="
                  absolute
                  -top-10
                  -right-10
                  w-32
                  h-32
                  bg-[#2F80FF]/10
                  blur-[70px]
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-700
                " />

                <div className="relative z-10">

                  <div className="flex items-center gap-4 mb-6">

                    <div className="
                      w-14 h-14
                      rounded-2xl
                      bg-gradient-to-br
                      from-[#2F80FF]
                      to-[#7B61FF]

                      flex items-center justify-center
                      shrink-0
                      text-white
                    ">
                      <Code2 size={24} />
                    </div>

                    <h4 className="
                      text-[22px]
                      font-semibold
                      text-[#071426]
                      leading-tight
                      mb-2
                    ">
                      Tally API 
                    </h4>
                  </div>

                  <p className="
                    text-gray-500
                    text-sm
                    leading-relaxed
                  ">
                    Seamless automation and integration services for enterprise workflows.
                  </p>
                </div>
              </div>

              {/* CUSTOMIZATION */}
              <div
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  p-6

                  bg-white/70
                  backdrop-blur-2xl

                  border border-white/50

                  shadow-[0_10px_30px_rgba(0,0,0,0.05)]

                  hover:-translate-y-2
                  hover:shadow-[0_20px_60px_rgba(123,97,255,0.12)]

                  transition-all
                  duration-500
                "
              >
                <div className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-[#2F80FF]/10
                  via-[#7B61FF]/5
                  to-transparent
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-500
                " />

                <div className="relative z-10">

                  <div className="flex items-center gap-4 mb-6">

                    <div className="
                      w-14 h-14
                      rounded-2xl
                      bg-gradient-to-br
                      from-[#2F80FF]
                      to-[#7B61FF]

                      flex items-center justify-center
                      shrink-0
                      text-white
                    ">
                      <Settings2 size={24} />
                    </div>

                    <h4 className="
                      text-[22px]
                      font-semibold
                      text-[#071426]
                    ">
                      Customization
                    </h4>
                  </div>

                  <p className="
                    text-gray-500
                    text-sm
                    leading-relaxed
                  ">
                    Personalized Tally solutions designed specifically around your operations.
                  </p>
                </div>
              </div>

              {/* TRAINING */}
              <div
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  p-6

                  bg-white/70
                  backdrop-blur-2xl

                  border border-white/50

                  shadow-[0_10px_30px_rgba(0,0,0,0.05)]

                  hover:-translate-y-2
                  hover:shadow-[0_20px_60px_rgba(47,128,255,0.12)]

                  transition-all
                  duration-500
                "
              >
                <div className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-[#7B61FF]/10
                  via-[#2F80FF]/5
                  to-transparent
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-500
                " />

                <div className="relative z-10">

                  <div className="flex items-center gap-4 mb-6">

                    <div className="
                      w-14 h-14
                      rounded-2xl
                      bg-gradient-to-br
                      from-[#2F80FF]
                      to-[#7B61FF]

                      flex items-center justify-center
                      shrink-0
                      text-white
                    ">
                      <GraduationCap size={24} />
                    </div>

                    <h4 className="
                      text-[22px]
                      font-semibold
                      text-[#071426]
                    ">
                      Training
                    </h4>
                  </div>

                  <p className="
                    text-gray-500
                    text-sm
                    leading-relaxed
                  ">
                    Industry-focused education and practical Tally expertise programs.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>

    {/* SERVICES SECTION */}
    <section className="relative py-16 md:py-20 px-4 sm:px-6 bg-white overflow-hidden">

  {/* BACKGROUND GLOW */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#2F80FF]/5 blur-[140px] rounded-full" />

  <div className="max-w-6xl mx-auto relative z-10">

    {/* SECTION HEADER */}
    <div className="text-center max-w-3xl mx-auto mb-12">

      <p className="
            text-[#2F80FF]
            uppercase
            tracking-[0.3em]
            text-sm
            font-semibold
            mb-6
          ">
            Services
      </p>

      <h2
        className="
          text-3xl
          md:text-6xl
          font-bold
          tracking-tight
          text-[#071426]
          leading-[1.05]
          mb-6
        "
      >
        What We Do
        <span className="bg-gradient-to-r from-[#2F80FF] to-[#7B61FF] bg-clip-text text-transparent">
          {" "}?
        </span>
      </h2>

      <p
        className="
          text-[16px] md:text-[17px]
          text-gray-600
          leading-relaxed
        "
      >
        Empowering businesses and individuals with tailored Tally solutions, certified training, 
        and exceptional support to simplify accounting and boost productivity.
      </p>
    </div>

    {/* SERVICES GRID */}
    <div
      className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
        gap-5 sm:gap-7
      "
    >

      {/* CARD 1 */}
      <motion.div
        whileHover={{
          y: -8,
        }}
        transition={{
          type: "spring",
          stiffness: 220,
          damping: 18,
        }}
        className="
          group
          relative
          rounded-[28px]
          border border-gray-200
          bg-white/70
          backdrop-blur-xl
          p-5 sm:p-6
          min-h-[240px]
          overflow-hidden
          shadow-[0_10px_40px_rgba(0,0,0,0.05)]
        "
      >
        {/* HOVER GLOW */}
        <div className="
          absolute inset-0
          opacity-0
          group-hover:opacity-100
          transition duration-500
          bg-gradient-to-br
          from-[#2F80FF]/10
          to-[#7B61FF]/10
        " />

        <div className="relative z-10">

          <div
            className="
              w-14 h-14
              rounded-2xl
              flex items-center justify-center
              bg-[#F4F7FF]
              

              group-hover:bg-gradient-to-br
              group-hover:from-[#2F80FF]
              group-hover:to-[#7B61FF]

              group-hover:text-white

              transition-all
              duration-500
            "
          >
            <MonitorCog
              className="
                w-7 h-7
                text-[#4F7DFF]
                group-hover:text-white
                transition-colors duration-500
              "
            />
        </div>

          <h3 className="
            text-[20px] sm:text-[22px]
            font-bold
            text-[#071426]
            mb-4
          ">
            Tally Software
          </h3>
          <p className="
            text-gray-600
            leading-relaxed
            text-[15px] md:text-[16px]
          ">
           Official Tally software solutions for accounting,
           GST billing, inventory, and business management.
          </p>

        </div>
        <div
          className="
            absolute
            bottom-0
            left-0
            h-[3px]
            w-0
            bg-gradient-to-r
            from-[#2F80FF]
            to-[#7B61FF]

            group-hover:w-full

            transition-all
            duration-500
          "
        />
      </motion.div>

      {/* CARD 2 */}
      <motion.div
        whileHover={{
          y: -8,
        }}
        transition={{
          type: "spring",
          stiffness: 220,
          damping: 18,
        }}
        className="
          group
          relative
          rounded-[28px]
          border border-gray-200
          bg-white/70
          backdrop-blur-xl
          p-5 sm:p-6
          min-h-[240px]
          overflow-hidden
          shadow-[0_10px_40px_rgba(0,0,0,0.05)]
        "
      >

        <div className="
          absolute inset-0
          opacity-0
          group-hover:opacity-100
          transition duration-500
          bg-gradient-to-br
          from-[#2F80FF]/10
          to-[#7B61FF]/10
        " />

        <div className="relative z-10">

          <div
            className="
              w-14 h-14
              rounded-2xl
              flex items-center justify-center
              bg-[#F4F7FF]
              

              group-hover:bg-gradient-to-br
              group-hover:from-[#2F80FF]
              group-hover:to-[#7B61FF]

              group-hover:text-white

              transition-all
              duration-500
            "
          >
            <Headset 
            className="
                w-7 h-7
                text-[#4F7DFF]
                group-hover:text-white
                transition-colors duration-500
              "
            />
          </div>

          <h3 className="
            text-[20px] sm:text-[22px]
            font-bold
            text-[#071426]
            mb-4
          ">
            Tally Services
          </h3>

          <p className="
            text-gray-600
            leading-relaxed
            text-[15px] md:text-[16px]
          ">
           Professional installation, troubleshooting,
           remote support, and operational assistance.
          </p>

        </div>
        <div
          className="
            absolute
            bottom-0
            left-0
            h-[3px]
            w-0
            bg-gradient-to-r
            from-[#2F80FF]
            to-[#7B61FF]

            group-hover:w-full

            transition-all
            duration-500
          "
        />
      </motion.div>

      {/* CARD 3 */}
      <motion.div
        whileHover={{
          y: -8,
        }}
        transition={{
          type: "spring",
          stiffness: 220,
          damping: 18,
        }}
        className="
          group
          relative
          rounded-[28px]
          border border-gray-200
          bg-white/70
          backdrop-blur-xl
          p-5 sm:p-6
          min-h-[240px]
          overflow-hidden
          shadow-[0_10px_40px_rgba(0,0,0,0.05)]
        "
      >

        <div className="
          absolute inset-0
          opacity-0
          group-hover:opacity-100
          transition duration-500
          bg-gradient-to-br
          from-[#2F80FF]/10
          to-[#7B61FF]/10
        " />

        <div className="relative z-10">

          <div
            className="
              w-14 h-14
              rounded-2xl
              flex items-center justify-center
              bg-[#F4F7FF]
              

              group-hover:bg-gradient-to-br
              group-hover:from-[#2F80FF]
              group-hover:to-[#7B61FF]

              group-hover:text-white

              transition-all
              duration-500
            "
          >
            <Smartphone 
            className="
                w-7 h-7
                text-[#4F7DFF]
                group-hover:text-white
                transition-colors duration-500
              "
            />
          </div>

          <h3 className="
            text-[20px] sm:text-[22px]
            font-bold
            text-[#071426]
            mb-4
          ">
            Tally Apps For Mobile
          </h3>

          <p className="
            text-gray-600
            leading-relaxed
            text-[15px] md:text-[16px]
          ">
            Access business reports, invoices, and analytics
            securely from anywhere using mobile integrations.
          </p>

        </div>
        <div
          className="
            absolute
            bottom-0
            left-0
            h-[3px]
            w-0
            bg-gradient-to-r
            from-[#2F80FF]
            to-[#7B61FF]

            group-hover:w-full

            transition-all
            duration-500
          "
        />
      </motion.div>

      {/* CARD 4 */}
      <motion.div
        whileHover={{
          y: -8,
        }}
        transition={{
          type: "spring",
          stiffness: 220,
          damping: 18,
        }}
        className="
          group
          relative
          rounded-[28px]
          border border-gray-200
          bg-white/70
          backdrop-blur-xl
          p-5 sm:p-6
          min-h-[240px]
          overflow-hidden
          shadow-[0_10px_40px_rgba(0,0,0,0.05)]
        "
      >
        <div className="
          absolute inset-0
          opacity-0
          group-hover:opacity-100
          transition duration-500
          bg-gradient-to-br
          from-[#2F80FF]/10
          to-[#7B61FF]/10
        " />

        <div className="relative z-10">

          <div
            className="
              w-14 h-14
              rounded-2xl
              flex items-center justify-center
              bg-[#F4F7FF]
              

              group-hover:bg-gradient-to-br
              group-hover:from-[#2F80FF]
              group-hover:to-[#7B61FF]

              group-hover:text-white

              transition-all
              duration-500
            "
          >
            <BriefcaseBusiness 
              className="
                w-7 h-7
                text-[#4F7DFF]
                group-hover:text-white
                transition-colors duration-500
              "
            />
          </div>

          <h3 className="
            text-[20px] sm:text-[22px]
            font-bold
            text-[#071426]
            mb-4
          ">
            Tally Solutions
          </h3>

          <p className="
            text-gray-600
            leading-relaxed
            text-[15px] md:text-[16px]
          ">
           Tailored enterprise solutions designed to simplify
           finance, payroll, taxation, and workflow automation.
          </p>

        </div>
        <div
          className="
            absolute
            bottom-0
            left-0
            h-[3px]
            w-0
            bg-gradient-to-r
            from-[#2F80FF]
            to-[#7B61FF]

            group-hover:w-full

            transition-all
            duration-500
          "
        />
      </motion.div>

      {/* CARD 5 */}
      <motion.div
        whileHover={{
          y: -8,
        }}
        transition={{
          type: "spring",
          stiffness: 220,
          damping: 18,
        }}
        className="
          group
          relative
          rounded-[28px]
          border border-gray-200
          bg-white/70
          backdrop-blur-xl
          p-5 sm:p-6
          min-h-[240px]
          overflow-hidden
          shadow-[0_10px_40px_rgba(0,0,0,0.05)]
        "
      >

        <div className="
          absolute inset-0
          opacity-0
          group-hover:opacity-100
          transition duration-500
          bg-gradient-to-br
          from-[#2F80FF]/10
          to-[#7B61FF]/10
        " />

        <div className="relative z-10">

          <div
            className="
              w-14 h-14
              rounded-2xl
              flex items-center justify-center
              bg-[#F4F7FF]
              text-[#2F80FF]

              group-hover:bg-gradient-to-br
              group-hover:from-[#2F80FF]
              group-hover:to-[#7B61FF]

              group-hover:text-white

              transition-all
              duration-500
            "
          >
            <svg
              className="w-8 h-8 text-[#4F7DFF] group-hover:text-white transition-colors duration-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" />
            </svg>
          </div>

          <h3 className="
            text-[20px] sm:text-[22px]
            font-bold
            text-[#071426]
            mb-4
          ">
            Tally ERP 9 Solutions
          </h3>

          <p className="
            text-gray-600
            leading-relaxed
            text-[15px] md:text-[16px]
          ">
           Professional installation, troubleshooting,
           remote support, and operational assistance.
          </p>

        </div>
        <div
          className="
            absolute
            bottom-0
            left-0
            h-[3px]
            w-0
            bg-gradient-to-r
            from-[#2F80FF]
            to-[#7B61FF]

            group-hover:w-full

            transition-all
            duration-500
          "
        />
      </motion.div>

      {/* CARD 6 */}
      <motion.div
        whileHover={{
          y: -8,
        }}
        transition={{
          type: "spring",
          stiffness: 220,
          damping: 18,
        }}
        className="
          group
          relative
          rounded-[28px]
          border border-gray-200
          bg-white/70
          backdrop-blur-xl
          p-5 sm:p-6
          min-h-[240px]
          overflow-hidden
          shadow-[0_10px_40px_rgba(0,0,0,0.05)]
        "
      >

        <div className="
          absolute inset-0
          opacity-0
          group-hover:opacity-100
          transition duration-500
          bg-gradient-to-br
          from-[#2F80FF]/10
          to-[#7B61FF]/10
        " />

        <div className="relative z-10">

          <div
            className="
              w-14 h-14
              rounded-2xl
              flex items-center justify-center
              bg-[#F4F7FF]
              

              group-hover:bg-gradient-to-br
              group-hover:from-[#2F80FF]
              group-hover:to-[#7B61FF]

              group-hover:text-white

              transition-all
              duration-500
            "
          >
            <Puzzle 
            className="
                w-7 h-7
                text-[#4F7DFF]
                group-hover:text-white
                transition-colors duration-500
              "
            />
          </div>

          <h3 className="
            text-[20px] sm:text-[22px]
            font-bold
            text-[#071426]
            mb-4
          ">
            Tally Add-Ons
          </h3>

          <p className="
            text-gray-600
            leading-relaxed
            text-[15px] md:text-[16px]
          ">
            Enhance Tally functionality with specialized
            plugins, integrations, and smart business tools.
          </p>

        </div>
        <div
          className="
            absolute
            bottom-0
            left-0
            h-[3px]
            w-0
            bg-gradient-to-r
            from-[#2F80FF]
            to-[#7B61FF]

            group-hover:w-full

            transition-all
            duration-500
          "
        />
      </motion.div>

    </div>
  </div>
    </section>

{/* PRODUCTS SECTION */}
    <section className="relative py-16 md:py-20 overflow-hidden bg-white">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-10 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10">

          <p className="
            text-[#2F80FF]
            uppercase
            tracking-[0.3em]
            text-sm
            font-semibold
            mb-6
          ">
            PRODUCTS
          </p>

          <h2
            className="
              text-3xl
              md:text-6xl
              font-bold
              text-[#071426]
              leading-tight
              tracking-tight
            "
          >
            Our Products
          </h2>

          <p
            className="
              mt-6
              text-[16px] md:text-[17px]
              text-gray-500
              leading-relaxed
            "
          >
            Powerful Tally products designed to simplify accounting,
            automation, reporting, and business operations.
          </p>
        </div>

        {/* TAB SWITCHER */}
        <div className="flex justify-center mb-14">

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
                      ? "bg-gradient-to-r from-[#2F80FF] to-[#7B61FF] text-white shadow-lg"
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
                gap-10 lg:gap-14
                items-center
                p-5 sm:p-8 md:p-14
              "
            >

              {/* LEFT CONTENT */}
              <div>

                <h3
                  className="
                    text-2xl
                    sm:text-3xl
                    md:text-4xl
                    font-bold
                    text-[#071426]
                    leading-tight
                    tracking-tight
                    mb-6
                  "
                >
                  {activeTab.title}
                </h3>

                <p
                  className="
                    text-gray-500
                    text-[15px] md:text-[16px]
                    leading-relaxed
                    mb-10
                  "
                >
                  {activeTab.description}
                </p>

                {/* FEATURES */}
                <div className="space-y-5 mb-10">

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
                          bg-gradient-to-r
                          from-[#2F80FF]
                          to-[#7B61FF]
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
    px-7 py-4
    rounded-2xl
    bg-gradient-to-r
    from-[#2F80FF]
    to-[#7B61FF]
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
  animate={{
    y: [0, -10, 0],
  }}
  transition={{
    duration: 5,
    repeat: Infinity,
  }}
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
    <section className=" relative py-16 md:py-20">

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
        <div className="text-center mb-10">
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
              text-3xl
              md:text-6xl
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
              mt-6
              text-[16px] md:text-[17px]
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
          spaceBetween={28}
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
                  min-h-[340px] sm:min-h-[400px]
                  rounded-[28px]
                  border
                  border-white/60
                  bg-white
                  
                  shadow-[0_10px_30px_rgba(0,0,0,0.04)]
                  p-5 sm:p-6 lg:p-7
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
                    w-16
                    h-16
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
                    leading-8
                    text-[15px]
                    md:text-base
                    mb-10
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
                      w-12
                      h-12
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
                        text-lg sm:text-xl
                        font-semibold
                        text-[#071426]
                      "
                    >
                      {item.name}
                    </h4>

                    <p className="text-gray-500">
                      {item.role}
                    </p>
                  </div>
                </div>

                {/* BOTTOM LINE */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[3px]
                    w-0
                    group-hover:w-full
                    transition-all
                    duration-500
                    bg-gradient-to-r
                    from-[#2F80FF]
                    to-[#7B61FF]
                  "
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>

    {/* CTA SECTION */}
    <section className=" relative py-16 md:py-20 overflow-hidden bg-[#F8FAFC]">    
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
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-10 lg:gap-14
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
                px-5
                py-2
                rounded-full
                bg-[#2F80FF]/10
                border border-[#2F80FF]/10
                text-[#2F80FF]
                font-medium
                mb-6
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
                md:text-6xl
                font-bold
                text-[#071426]
                leading-tight
                mb-6
              "
            >
              Request A
              <span
                className="
                  bg-gradient-to-r
                  from-[#2F80FF]
                  to-[#7B61FF]
                  bg-clip-text
                  text-transparent
                "
              >
                {" "}
                Quote
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                text-[16px] md:text-[17px]
                text-gray-600
                leading-relaxed
                max-w-xl
                mb-10
              "
            >
              Let our certified Tally experts help you
              choose the right solution for your
              business operations, accounting workflows,
              and scalable growth.
            </p>

            {/* TRUST POINTS */}
            <div className="space-y-5 mb-10">
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
                      w-12
                      h-12
                      rounded-2xl
                      flex
                      items-center
                      justify-center
                      bg-gradient-to-br
                      from-[#2F80FF]
                      to-[#7B61FF]
                      shadow-lg
                    "
                  >
                    <item.icon className="w-5 h-5 text-white" />
                  </div>

                  <p
                    className="
                      text-base sm:text-lg
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