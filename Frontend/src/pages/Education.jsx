import { motion, AnimatePresence, easeOut } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Calculator, GraduationCap,
  BriefcaseBusiness,
  Users,
  Award, } from "lucide-react";

export default function Education() {

  const [activeCategory, setActiveCategory] = useState("Essential");


  const categories = [
  "Essential",
  "Professional",
  "International",
];

const categoryContent = {
  Essential: {
    badge: "Essential Certification Programs",
    title: "Explore Our Essential Courses",
    description:
      "Build strong accounting and Tally foundations with beginner-friendly practical learning.",
  },

  Professional: {
    badge: "Professional Certification Programs",
    title: "Explore Our Professional Courses",
    description:
      "Advanced industry-focused programs for accounting and business professionals.",
  },

  International: {
    badge: "International Accounting Programs",
    title: "Global Finance & Accounting Courses",
    description:
      "Learn international accounting standards and modern business finance workflows.",
  },
};

const courses = [
  {
    category: "Essential",

    title: "TallyPrime Essentials",

    description:
      "Learn accounting, GST, inventory, and billing fundamentals with practical Tally workflows.",

    duration: "2 Months",

    level: "Beginner",

    skills: [
      "Accounting",
      "GST",
      "Inventory",
    ],

    icon: Calculator,
  },
  {
    category: "Essential",

    title: "GST using TallyPrime",

    description:
      "Learn complete guide Goods and Services Tax (GST) with practical Tally workflows.",

    duration: "3 Months",

    level: "Beginner",

    skills: [
      "Accounting",
      "GST",
      "Inventory",
    ],

    icon: Calculator,
  },
  {
    category: "Essential",

    title: "TDS using Tally",

    description:
      "Learn Complete Guide on Tax Deducted at Source (TDS) with practical Tally workflows.",

    duration: "2 Months",

    level: "Beginner",

    skills: [
      "Accounting",
      "GST",
      "TDS",
    ],

    icon: Calculator,
  },
  {
    category: "Essential",

    title: "GCC VAT using TallyPrime",

    description:
      "Learn Complete Guide on GCC VAT Concepts and its Usage with practical Tally workflows.",

    duration: "2 Months",

    level: "Beginner",

    skills: [
      "Accounting",
      "GST",
      "VAT",
    ],

    icon: Calculator,
  },
  {
    category: "Professional",

    title: "TallyPrime Professional",

    description:
      "Complete guide on Advanced Business Accounting and Indian Taxation.",

    duration: "6 Months",

    level: "Advanced",

    skills: [
      "Accounting",
      "GST",
      "Inventory",
    ],

    icon: Calculator,
  },
  {
    category: "Professional",

    title: "GST using TallyPrime",

    description:
      "Learn complete guide Goods and Services Tax (GST) with practical Tally workflows.",

    duration: "6 Months",

    level: "Advanced",

    skills: [
      "Accounting",
      "GST",
      "Inventory",
    ],

    icon: Calculator,
  },
  {
    category: "Professional",

    title: "TDS using Tally",

    description:
      "Learn Complete Guide on Tax Deducted at Source (TDS) with practical Tally workflows.",

    duration: "6 Months",

    level: "Advanced",

    skills: [
      "Accounting",
      "GST",
      "TDS",
    ],

    icon: Calculator,
  },
  {
    category: "Professional",

    title: "GCC VAT using TallyPrime",

    description:
      "Learn Complete Guide on GCC VAT Concepts and its Usage with practical Tally workflows.",

    duration: "6 Months",

    level: "Advanced",

    skills: [
      "Accounting",
      "GST",
      "VAT",
    ],

    icon: Calculator,
  },

  {
    category: "International",

    title: "TallyEssential International",

    description:
      "A Complete Guide on Business Accounting in Middle East Countries.",

    duration: "6 Months",

    level: "Advanced",

    skills: [
      "Accounting",
      "GST",
      "Inventory",
    ],

    icon: Calculator,
  },
  {
    category: "International",

    title: "TallyEssential Oman",

    description:
      "A Complete Guide on Fundamental to Advanced Accounting.",

    duration: "6 Months",

    level: "Advanced",

    skills: [
      "Accounting",
      "GST",
      "Inventory",
    ],

    icon: Calculator,
  },
  {
    category: "International",

    title: "TallyACE International",

    description:
      "A Complete Guide on Business Accounting in Middle East Countries.",

    duration: "6 Months",

    level: "Advanced",

    skills: [
      "Accounting",
      "GST",
      "Inventory",
    ],

    icon: Calculator,
  },
];

const filteredCourses = courses.filter(
  (course) => course.category === activeCategory
);
  return (

    <>
    {/* ================= EDUCATION HERO SECTION ================= */}

<section className="relative overflow-hidden bg-white pt-20 sm:pt-24 lg:pt-24
pb-10 sm:pb-12 md:pb-14">

  {/* SOFT BACKGROUND GLOWS */}
  <div className="
    absolute top-[-120px] left-[-120px]
    w-[320px] h-[320px]
    bg-[#1178D4]/10
    blur-[120px]
    rounded-full
  " />

  <div className="
    absolute bottom-[-120px] right-[-120px]
    w-[320px] h-[320px]
    bg-[#6C63FF]/10
    blur-[120px]
    rounded-full
  " />

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="
      grid lg:grid-cols-2
      gap-12
      lg:gap-10
      items-center
    ">

      {/* ================= LEFT CONTENT ================= */}
      <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >

        {/* BADGE */}
        <div className="
          inline-flex items-center gap-2
          px-4 py-2
          rounded-full
          border border-[#1178D4]/15
          bg-[#F8FBFF]
          text-[#1178D4]
          text-sm font-semibold
          tracking-wide
          mb-7
        ">

          <div className="
            w-2 h-2 rounded-full
            bg-[#1178D4]
          " />

          Tally Education Programs

        </div>

        {/* HEADING */}
        <h1 className="
          text-[30px]
          sm:text-[38px]
          lg:text-[48px]
          font-bold
          leading-[1.05]
          tracking-[-0.03em]
          text-[#0F172A]
        ">
          Master Tally &
          <span className="
            block
            bg-gradient-to-r
            from-[#1178D4]
            to-[#6C63FF]
            bg-clip-text
            text-transparent
          ">
            Build Industry-Ready Skills
          </span>
        </h1>

        {/* DESCRIPTION */}
        <p className="
          mt-5
          max-w-2xl
          text-[15px]
          sm:text-[16px]
          md:text-[17px]
          leading-relaxed
          text-[#475569]
        ">
          Learn practical accounting, GST, payroll, taxation,
          and business management through expert-led Tally
          certification programs designed for students,
          graduates, and working professionals.
        </p>

        {/* BUTTONS */}
        <div className="
          mt-6
          flex flex-col sm:flex-row
          gap-5
        ">

          {/* PRIMARY BUTTON */}
          <a href="#courses">
          <button className="
            group
            relative overflow-hidden
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
            shadow-[0_15px_40px_rgba(17,120,212,0.25)]
            hover:scale-[1.02]
            transition-all duration-300
          ">

            <span className="
              relative z-10
              flex items-center justify-center gap-2
            ">
              Explore Courses

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="
                  w-5 h-5
                  group-hover:translate-x-1
                  transition-transform
                "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>

            </span>

          </button>
          </a>

          {/* SECONDARY BUTTON */}
          <Link to="/contact">
          <button className="
            w-full
            sm:w-auto
            px-6
            sm:px-8
            py-4
            rounded-2xl
            border border-[#CBD5E1]
            bg-white
            text-[#0F172A]
            font-semibold
            text-lg
            hover:border-[#1178D4]/40
            hover:bg-[#F8FBFF]
            transition-all duration-300
          ">
            Book Free Counseling
          </button>
          </Link>

        </div>

        {/* STATS */}
        <div className="
          mt-8
          flex flex-wrap
          gap-8
          sm:gap-10
        ">

          <div>
            <h3 className="
              text-xl
              sm:text-2xl font-bold
              text-[#0F172A]
            ">
              10K+
            </h3>

            <p className="
              mt-1
              text-[#64748B]
            ">
              Students Trained
            </p>
          </div>

          <div>
            <h3 className="
              text-xl
              sm:text-2xl  font-bold
              text-[#0F172A]
            ">
              100%
            </h3>

            <p className="
              mt-1
              text-[#64748B]
            ">
              Practical Learning
            </p>
          </div>

          <div>
            <h3 className="
              text-xl
              sm:text-2xl  font-bold
              text-[#0F172A]
            ">
              Industry
            </h3>

            <p className="
              mt-1
              text-[#64748B]
            ">
              Recognized Courses
            </p>
          </div>

        </div>

      </motion.div>

      {/* ================= RIGHT SIDE ================= */}
      <motion.div
        className="
        relative
        flex justify-center lg:justify-end
        order-1 lg:order-2"
        
        initial = {{ opacity: 0, x: 100}}
        whileInView={{ opacity: 1, x: 0}}
        transition={{
          duration: 1,
          ease: "easeOut",
          delay: "0.2",
        }}
        viewport={{ once: true }}
        >
      <div className="relative">

        {/* MAIN CARD */}
        <div className="
          relative
          rounded-[24px]
          sm:rounded-[36px]
          border border-[#E2E8F0]
          bg-gradient-to-br
          from-[#F8FBFF]
          to-[#EEF2FF]
          p-4
          sm:p-6
          md:p-7
          shadow-sm
        ">

          {/* TOP BAR */}
          <div className="
            flex items-center justify-between gap-4
            mb-8
          ">

            <div>
              <h3 className="
                text-xl font-bold
                text-[#0F172A]
              ">
                Learning Dashboard
              </h3>

              <p className="
                mt-1
                text-sm
                text-[#64748B]
              ">
                Track your course progress
              </p>
            </div>

            <div className="
              w-12 h-12
              sm:w-14 sm:h-14
              rounded-2xl
              bg-gradient-to-r
              from-[#1178D4]
              to-[#6C63FF]
              flex items-center justify-center
              shadow-lg
            ">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="w-7 h-7 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 14 21 9 12 4 3 9l9 5Zm0 0 6.16-3.422A12.083 12.083 0 0 1 18 14.576c0 1.03-.391 2.03-1.094 2.78C15.773 18.6 14 19 12 19s-3.773-.4-4.906-1.644A3.978 3.978 0 0 1 6 14.576c0-1.4.285-2.75.84-3.998L12 14Z"
                />
              </svg>

            </div>

          </div>

          {/* COURSE LIST */}
          <div className="space-y-3">

            {[
              "Advanced TallyPrime",
              "GST & Taxation",
              "Payroll Management",
              "Business Accounting",
            ].map((course, index) => (

              <div
                key={index}
                className="
                  flex items-center justify-between
                  rounded-2xl
                  border border-white/60
                  bg-white/70
                  backdrop-blur-sm
                  px-4
                  sm:px-5
                  py-4
                "
              >

                <div className="flex items-center gap-4">

                  <div className="
                    w-10 h-10
                    sm:w-12 sm:h-12
                    rounded-xl
                    bg-gradient-to-r
                    from-[#1178D4]
                    to-[#6C63FF]
                    flex items-center justify-center
                    text-white font-bold
                  ">
                    {index + 1}
                  </div>

                  <div>
                    <h4 className="
                      font-semibold
                      text-[#0F172A]
                    ">
                      {course}
                    </h4>

                    <p className="
                      text-[12px]
                      sm:text-sm
                      text-[#64748B]
                    ">
                      Practical Certification Program
                    </p>
                  </div>

                </div>

                <div className="
                  px-3 py-1
                  rounded-full
                  bg-[#DCFCE7]
                  text-[#15803D]
                  text-sm font-medium
                ">
                  Active
                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
      </motion.div>

    </div>

  </div>

</section>

{/* ================= EDUCATION CATEGORY + COURSES ================= */}

<section id="courses" className="relative py-10 sm:py-12 md:py-14 bg-white overflow-hidden">

  {/* BACKGROUND GLOWS */}
  

  <div className="
    absolute bottom-0 right-0
    w-[400px] h-[400px]
    bg-[#6C63FF]/5
    blur-[120px]
    rounded-full
  " />

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* ================= HEADER ================= */}
    <div className="text-center">

      {/* DYNAMIC BADGE */}
      <div className="
        inline-flex items-center gap-2
        px-4 py-2
        rounded-full
        border border-[#1178D4]/15
        bg-[#F8FBFF]
        text-[#1178D4]
        text-sm font-semibold
        tracking-wide
        mb-5
      ">

        <div className="
          w-2 h-2 rounded-full
          bg-[#1178D4]
        " />

        {categoryContent[activeCategory].badge}

      </div>

      {/* DYNAMIC TITLE */}
      <h2 className="
        text-[26px]
        sm:text-3xl
        lg:text-4xl
        font-bold
        tracking-[-0.03em]
        text-[#0F172A]
      ">

        {categoryContent[activeCategory].title.split(" ").slice(0, -1).join(" ")}

        <span className="
          bg-gradient-to-r
          from-[#1178D4]
          to-[#6C63FF]
          bg-clip-text
          text-transparent
        ">
          {" "}
          {categoryContent[activeCategory].title.split(" ").slice(-1)}
        </span>

      </h2>

      {/* DYNAMIC DESCRIPTION */}
      <p className="
        mt-5
        max-w-2xl
        mx-auto
        text-[15px]
        sm:text-[16px]
        md:text-[17px]
        leading-relaxed
        text-[#64748B]
      ">
        {categoryContent[activeCategory].description}
      </p>

    </div>

    {/* ================= TABS ================= */}
    <div className="
      mt-8
      flex justify-center
    ">

      <div className="
        flex items-center
        gap-3
        overflow-x-auto
        scrollbar-hide
        p-2
        rounded-full
        border border-[#E2E8F0]
        bg-white/80
        backdrop-blur-xl
        shadow-[0_10px_40px_rgba(15,23,42,0.06)]
        no-scrollbar
      ">

        {categories.map((category) => {

          const isActive = activeCategory === category;

          return (

            <motion.button
              key={category}
              whileTap={{ scale: 0.96 }}
              onClick={() => setActiveCategory(category)}
              className="
                relative
                px-5
                sm:px-6
                md:px-7
                py-3.5
                rounded-full
                text-sm md:text-base
                font-semibold
                whitespace-nowrap
                transition-all duration-300
              "
            >

              {/* ACTIVE BACKGROUND */}
              {isActive && (
                <motion.div
                  layoutId="activeEducationTab"
                  transition={{
                    type: "spring",
                    bounce: 0.2,
                    duration: 0.5,
                  }}
                  className="
                    absolute inset-0
                    rounded-full
                    bg-gradient-to-r
                    from-[#1178D4]
                    to-[#6C63FF]
                    shadow-[0_10px_30px_rgba(17,120,212,0.20)]
                  "
                />
              )}

              {/* TEXT */}
              <span className={`
                relative z-10
                transition-colors duration-300

                ${isActive
                  ? "text-white"
                  : "text-[#475569] hover:text-[#1178D4]"
                }
              `}>
                {category}
              </span>

            </motion.button>

          );
        })}

      </div>

    </div>

    {/* ================= COURSE GRID ================= */}
    <div className="mt-10">

      <AnimatePresence mode="wait">

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35 }}
          className="
            grid
            md:grid-cols-2
            xl:grid-cols-3
            gap-6
            sm:gap-8
          "
        >

          {filteredCourses.map((course, index) => {

            const Icon = course.icon;

            return (

              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="
                  group
                  relative
                  rounded-[24px]
                  sm:rounded-[32px]
                  border border-[#E2E8F0]
                  bg-white
                  overflow-hidden

                  shadow-[0_10px_40px_rgba(15,23,42,0.06)]

                "
              >

                {/* TOP GRADIENT */}
                <div className="
                  absolute top-0 inset-x-0
                  h-1
                  bg-gradient-to-r
                  from-[#1178D4]
                  to-[#6C63FF]
                " />

                {/* CONTENT */}
                <div className="p-4 sm:p-6">

                  {/* ICON + BADGES */}
                  <div className="
                    flex items-start justify-between
                    gap-5
                  ">

                    {/* ICON */}
                    <div className="
                      w-14 h-14
                      sm:w-16 sm:h-16 shrink-0
                      rounded-2xl
                      bg-gradient-to-br
                      from-[#1178D4]
                      to-[#6C63FF]
                      flex items-center justify-center
                      shadow-[0_10px_30px_rgba(17,120,212,0.20)]
                    ">

                      <Icon className="
                        w-8 h-8 text-white
                      " />

                    </div>

                    {/* BADGES */}
                    <div className="
                      flex flex-col
                      items-end
                      gap-3
                    ">

                      <div className="
                        px-3
                        sm:px-4
                        py-2
                        rounded-full
                        bg-[#F8FAFC]
                        border border-[#E2E8F0]
                        text-sm
                        font-semibold
                        text-[#475569]
                      ">
                        ⏱ {course.duration}
                      </div>

                      <div className="
                        px-3
                        sm:px-4
                        py-2
                        rounded-full
                        bg-[#EEF2FF]
                        text-sm
                        font-semibold
                        text-[#4F46E5]
                      ">
                        {course.level}
                      </div>

                    </div>

                  </div>

                  {/* TITLE */}
                  <h3 className="
                    mt-5
                    text-[20px]
                    sm:text-[22px]
                    font-bold
                    leading-tight
                    text-[#0F172A]

                    group-hover:text-[#1178D4]
                    transition-colors duration-300
                  ">
                    {course.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="
                    mt-5
                    text-[15px]
                    sm:text-[17px]
                    leading-[1.8]
                    text-[#64748B]
                  ">
                    {course.description}
                  </p>

                  {/* SKILLS */}
                  <div className="
                    mt-5
                    flex flex-wrap
                    gap-3
                  ">

                    {course.skills.map((skill, idx) => (

                      <div
                        key={idx}
                        className="
                          px-3
                          sm:px-4
                          py-2
                          rounded-full
                          border border-[#E2E8F0]
                          bg-[#F8FAFC]
                          text-sm
                          font-medium
                          text-[#475569]
                        "
                      >
                        {skill}
                      </div>

                    ))}

                  </div>

                  {/* CTA */}
                  <Link to="/contact">
                  <button className="
                    group/btn
                    mt-6
                    w-full
                    flex items-center justify-center gap-3
                    px-5
                    sm:px-6
                    py-4
                    rounded-2xl

                    bg-gradient-to-r
                    from-[#1178D4]
                    to-[#6C63FF]

                    text-white
                    font-semibold
                    text-lg

                    shadow-[0_10px_30px_rgba(17,120,212,0.18)]

                    hover:scale-[1.02]
                    transition-all duration-300
                  ">

                    Enquire Now

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="
                        w-5 h-5
                        group-hover/btn:translate-x-1
                        transition-transform
                      "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>

                  </button>
                  </Link>

                </div>

              </motion.div>

            );
          })}

        </motion.div>

      </AnimatePresence>

    </div>

  </div>

</section>

{/* ================= WHY CHOOSE TALLY EDUCATION ================= */}

<section className="relative py-10 sm:py-12 md:py-14 bg-[#F8FBFF] overflow-hidden">


  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* SECTION HEADER */}
    <div className="text-center">

      {/* BADGE */}
      <div className="
        inline-flex items-center gap-2
        px-4 py-2
        rounded-full
        border border-[#1178D4]/15
        bg-white
        text-[#1178D4]
        text-sm
        font-semibold
        tracking-wide
        mb-5
      ">

        <div className="
          w-2 h-2 rounded-full
          bg-[#1178D4]
        " />

        Why Students Choose Us

      </div>

      {/* TITLE */}
      <h2 className="text-[26px]
sm:text-3xl
lg:text-4xl
        font-bold
        tracking-[-0.03em]
        text-[#0F172A]
      ">

        Why Choose
        <span className="
          bg-gradient-to-r
          from-[#1178D4]
          to-[#6C63FF]
          bg-clip-text
          text-transparent
        ">
          {" "}Tally Education
        </span>

      </h2>

      {/* DESCRIPTION */}
      <p className="
        mt-5
        max-w-3xl
        mx-auto
        text-[15px]
        sm:text-lg
        leading-relaxed
        text-[#64748B]
      ">
        Gain practical accounting expertise with
        industry-focused training, expert mentors,
        certification support, and career guidance.
      </p>

    </div>

    {/* ================= BENEFITS GRID ================= */}
    <div className="
      mt-10
      grid
      sm:grid-cols-2
      xl:grid-cols-4
      gap-5
      sm:gap-7
    ">

      {[
        {
          title: "Expert Training",
          description:
            "Learn directly from certified trainers with practical industry expertise.",
          icon: GraduationCap,
        },

        {
          title: "Practical Experience",
          description:
            "Hands-on projects and real business workflows for job-ready skills.",
          icon: BriefcaseBusiness,
        },

        {
          title: "Career Support",
          description:
            "Placement guidance, interview preparation, and career assistance.",
          icon: Users,
        },

        {
          title: "Industry Recognition",
          description:
            "Globally recognized Tally certifications valued across industries.",
          icon: Award,
        },
      ].map((item, index) => {

        const Icon = item.icon;

        return (

          <motion.div
            key={index}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="
              group
              relative
              rounded-[22px]
              sm:rounded-[28px]
              border border-[#E2E8F0]
              bg-white
              p-5
              sm:p-6

              shadow-[0_10px_40px_rgba(15,23,42,0.05)]
            "
          >

            {/* ICON */}
            <div className="
              w-14 h-14
              sm:w-16 sm:h-16
              rounded-2xl
              bg-gradient-to-br
              from-[#1178D4]
              to-[#6C63FF]

              flex items-center justify-center

              shadow-[0_10px_30px_rgba(17,120,212,0.18)]
            ">
              <Icon className="
                w-8 h-8 text-white
              " />

            </div>

            {/* TITLE */}
            <h3 className="
              mt-7
              text-[20px]
              sm:text-[22px]
              font-bold
              text-[#0F172A]
            ">
              {item.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="
              mt-4
              text-[15px]
              sm:text-[16px]
              leading-[1.8]
              text-[#64748B]
            ">
              {item.description}
            </p>

          </motion.div>

        );
      })}

    </div>

  </div>

</section>

</>
    
  );
}