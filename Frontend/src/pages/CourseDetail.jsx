import { useParams } from "react-router-dom";
import { courses } from "../data/courseData";
import { motion, scale } from "framer-motion";
import {
  CheckCircle2, Download, Receipt, Landmark, Info, Building2,
  BookOpen, Briefcase, FileText, BarChart3, ArrowDown, Wallet, TrendingUp,
  ArrowUpRight, ArrowDownLeft, Repeat, ChevronDown, ChevronUp, ShoppingCart, ArrowDownCircle,
  RefreshCw, CheckCircle, Scale, ChartColumn, Building, ChartPie, User2, Shield, Globe, Settings,
} from "lucide-react";


import { useState } from "react";

const iconMap = {
  download: Download,
  building: Building2,
  book: BookOpen,
  receipt: Receipt,
  scale: Scale,
  chartcolumn: ChartColumn,
  building: Building,
  chartpie: ChartPie,
  users: User2,
  shield: Shield,
  wallet: Wallet,
  globe: Globe,
  settings: Settings,


};
const groupIcons = {
  Assets: Wallet,
  Liabilities: Landmark,
  Income: TrendingUp,
  Expenses: Receipt,
};
const voucherIcons = {
  payment: Wallet,
  receipt: ArrowDownCircle,
  contra: Repeat,
  journal: BookOpen,

  purchase: ShoppingCart,
  sales: Receipt,
};
const returnsIcons = {
  returns: FileText,
  rcm: RefreshCw,
  notes: Receipt,
};

const badgeStyles = {
  payment: "bg-blue-50 text-[#155A96]",
  receipt: "bg-blue-50 text-[#155A96]",
  contra: "bg-blue-50 text-[#155A96]",
  journal: "bg-blue-50 text-[#155A96]",
};

export default function CourseDetail() {

  const { slug } = useParams();
  console.log(slug);

  const course = courses.find(
    (item) => item.slug === slug
  );

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Course Not Found
      </div>
    );
  }

  const [openIndex, setOpenIndex] = useState(0);
  const [answers, setAnswers] = useState({});
const [score, setScore] = useState(null);
const [activeSection, setActiveSection] = useState("overview");
const isMobile = window.innerWidth < 1024;

const handleQuizSubmit = (quiz) => {
  let correct = 0;

  quiz.forEach((q, index) => {
    if (answers[index] === q.answer) {
      correct++;
    }
  });

  setScore(correct);
};

const visibleSections =
  activeSection === "overview"
    ? []
    : course.sections.filter(
        (section) => section.id === activeSection
      );

  return (

    <main className="bg-[#F8FAFC]">

      {/* HERO */}

      <section className="relative min-h-[420px] md:min-h-[520px] lg:h-[600px] overflow-hidden">

  {/* Background Image */}
  <img
    src={course.heroImage}
    alt={course.title}
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/70" />

  {/* Content */}
  <div className="
  relative z-10
  max-w-6xl mx-auto
  px-4 sm:px-6
  h-full
  flex items-center justify-center
  py-20
  lg:py-0
">

  <div className="
    max-w-4xl
    text-center
  ">

      {/* Badge Row */}
      <div
  className="
    flex flex-wrap
    justify-center
    gap-2
    mb-5
  "
>
  <span
    className="
      px-3
      py-1
      rounded-full
      bg-white/15
      backdrop-blur-sm
      text-white
      text-xs
      font-medium
    "
  >
    {course.level}
  </span>

  <span
    className="
      px-3
      py-1
      rounded-full
      bg-white/15
      backdrop-blur-sm
      text-white
      text-xs
      font-medium
    "
  >
    {course.duration}
  </span>
</div>

      {/* Title */}
      <h1 className="
        text-3xl
sm:text-4xl
lg:text-6xl
        font-black
        text-white
        leading-[1.1]
        ">
        {course.title}
      </h1>

      {/* Subtitle */}
      <p className="
        mt-4 sm:mt-6
        mx-auto
        max-w-3xl
        text-sm
sm:text-base
lg:text-xl
        text-white/80
        leading-relaxed
      ">
        {course.subtitle}
      </p>

      {/* Buttons */}
      <div className="mt-5 flex justify-center">

        <a
  href="#overview"
  className="
    px-5
    py-2.5
    sm:px-8
    sm:py-4
    rounded-xl
    bg-[#155A96]
    text-white
    text-sm
    sm:text-base
    font-semibold
    transition-all
    duration-300
  "
>
  Start Learning
</a>

      </div>

      {/* Stats */}
      <div
  className="
    mt-6
    flex flex-wrap
    justify-center
    gap-2 sm:gap-3
  "
>
  <div className="px-3 py-1.5 text-xs sm:text-sm rounded-full bg-white/10 backdrop-blur-md text-white/80">
    4 Lessons
  </div>

  <div className="px-3 py-1.5 text-xs sm:text-sm rounded-full bg-white/10 backdrop-blur-md text-white/80">
    Practice Exercises
  </div>

  <div className="px-3 py-1.5 text-xs sm:text-sm rounded-full bg-white/10 backdrop-blur-md text-white/80">
    Certificate Guidance
  </div>
</div>

    </div>

  </div>

</section>

      {/* CONTENT AREA */}

      <section
  className="
    max-w-7xl
    mx-auto
    px-4 sm:px-6
    mt-8 lg:mt-14
    lg:h-[calc(100vh-96px)]
    lg:overflow-hidden
  "
>

<div
  className="
    lg:hidden
    flex
    gap-2
    overflow-x-auto
    pb-2
    mb-6
  "
>
  <button
  onClick={() => setActiveSection("overview")}
  className={`
    whitespace-nowrap
    px-4 py-2
    rounded-xl
    text-sm
    font-medium
    ${
      activeSection === "overview"
        ? "bg-[#155A96] text-white"
        : "bg-white border border-slate-200"
    }
  `}
>
  Overview
</button>
  {course.sections
  .filter((section) => section.id !== "overview")
  .map((section) => (
    <button
      key={section.id}
      onClick={() => setActiveSection(section.id)}
      className={`
        whitespace-nowrap
        px-4 py-2
        rounded-xl
        text-sm
        font-medium
        ${
          activeSection === section.id
            ? "bg-[#155A96] text-white"
            : "bg-white border border-slate-200"
        }
      `}
    >
      {section.title}
    </button>
  ))}
</div>

  <div
  className="
    grid grid-cols-1 lg:grid-cols-[360px_1fr]
    gap-6 lg:gap-8
    lg:h-[calc(100vh-100px)]
    lg:overflow-hidden
  "
>

    {/* SIDEBAR */}

    <aside
  className="
    sidebar-scroll
    sticky
    top-24
    h-full
    overflow-y-auto
    hidden lg:block
  "
>

      <div
        className="
          bg-white
          rounded-[32px]
          border
          border-[#E2E8F0]
          p-8
          shadow-sm
        "
      >

        {/* Course Header */}

        <div className="flex items-center gap-4 mb-8">

          <div
            className="
              w-14 h-14
              rounded-2xl
              bg-[#155A96]
              flex
              items-center
              justify-center
              text-white
              text-xl
            "
          >
            <BookOpen className="w-7 h-7" />
          </div>

          <div>
            <h3
              className="
                font-bold
                text-xl
                text-[#071426]
              "
            >
              Course Contents
            </h3>

            <p
              className="
                text-sm
                text-slate-500
              "
            >
              {course.level} • {course.duration}
            </p>
          </div>

        </div>

        {/* Lessons */}

        <div className="space-y-2">

          {course.sections.map((section, index) => (

            <a
              key={section.id}
              href={`#${section.id}`}
              className="
                flex
                items-center
                gap-4
                px-4
                min-h-[64px]
                rounded-2xl
                hover:bg-[#F8FAFC]
                transition-colors
                duration-300
                group
              "
            >

              <div
                className="
                  w-9
                  h-9
                  rounded-full
                  bg-[#EEF4FF]
                  text-[#155A96]
                  flex
                  items-center
                  justify-center
                  font-bold
                  text-sm
                  shrink-0
                "
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              <button
              onClick={() => setActiveSection(section.id)}
              className="
                group
                flex
                items-center
                gap-4
                flex-1
              "
            >
              <span
                className={`
                  h-10
                  flex
                  items-center
                  leading-5
                  text-sm
                  transition-colors
                  duration-200
                  ${
                    activeSection === section.id
                      ? "text-[#155A96] font-semibold"
                      : "text-[#334155] font-medium group-hover:text-[#155A96]"
                  }
                `}
              >
                {section.title}
              </span>
            </button>

            </a>

          ))}

        </div>

      </div>

    </aside>

    {/* CONTENT AREA */}

    <main
  className="
    lg:h-full
    lg:overflow-y-auto
    pr-1
    scroll-smooth
    content-scroll
  "
>

      {/* OVERVIEW */}

      <section
  id="overview"
  className={`
    mb-12 lg:mb-16
    scroll-mt-32
    ${
      isMobile &&
      activeSection !== "overview"
        ? "hidden"
        : ""
    }
  `}
>
  <h2
    className="
      text-2xl sm:text-3xl lg:text-4xl
      font-black
      text-[#071426]
      mb-4
    "
  >
    What You'll Learn
  </h2>

  <div className="space-y-5 lg:space-y-6">

    {/* RIGHT CONTENT */}

    <div>

      <p
        className="
          text-base lg:text-lg
          text-slate-700
          leading-7 lg:leading-9
          mb-6
        "
      >
        {
          course.sections.find(
            item => item.id === "overview"
          )?.content
        }
      </p>

      <div className="space-y-5">

        {course.sections
          .find(item => item.id === "overview")
          ?.learn.map((item, index) => {

            const Icon = iconMap[item.icon] || BookOpen;

            return (

              <div
                key={index}
                className="
                grid
                md:grid-cols-[240px_1fr]
                gap-1
                items-start
                pb-3
                border-b
                border-slate-100
                "
              >

                <h3
                  className="
                    text-[15px]
                    font-bold
                    text-[#155A96]
                    min-w-[240px]
                    shrink-0
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    text-slate-700
                    leading-7
                  "
                >
                  {item.description}
                </p>

              </div>

            );

          })}

      </div>

      {/* NOTE */}

      <div
        className="
          mt-10
          bg-[#ECFEFF]
          border border-[#A5F3FC]
          rounded-[24px]
          p-4 sm:p-6
          flex flex-col sm:flex-row gap-4
        "
      >

        <Info
          className="
            w-6 h-6
            text-cyan-600
            shrink-0
            mt-1
          "
        />

        <p
          className="
            text-slate-700
            leading-7
          "
        >
          <span className="font-bold">
            Double-entry Rule:
          </span>{" "}
          {
            course.sections.find(
              item => item.id === "overview"
            )?.note
          }
        </p>

      </div>

    </div>

  </div>

</section>


    {course.sections
  .filter((section) => {
    if (window.innerWidth >= 1024) {
      return section.id !== "overview";
    }

    return (
      section.id !== "overview" &&
      section.id === activeSection
    );
  })
  .map((section) => {

    // STEPS LAYOUT
    if (section.type === "steps") {

      return (

        <section
          key={section.id}
          id={section.id}
          className="mb-12 lg:mb-16"
        >

          <h2
            className="
              text-2xl lg:text-3xl
              font-bold
              text-[#071426]
              mb-4
            "
          >
            {section.title}
          </h2>

          <p
            className="
              text-lg
              text-slate-600
              leading-7 lg:leading-8
              mb-10
            "
          >
            {section.description}
          </p>

          <div className="space-y-8">

            {section.steps?.map((step, index) => (

              <div
                key={index}
                className="
                flex
                flex-col sm:flex-row
                gap-4 sm:gap-6
                items-start
              "
              >

                <div
                  className="
                    w-10 h-10
                    rounded-full
                    bg-[#155A96]
                    text-white
                    flex
                    items-center
                    justify-center
                    font-bold
                    shrink-0
                  "
                >
                  {index + 1}
                </div>

                <div>

                  <h3
                    className="
                      text-lg
                      font-bold
                      text-[#071426]
                      mb-2
                    "
                  >
                    {step.title}
                  </h3>

                  <p
                    className="
                      text-slate-600
                      leading-8
                    "
                  >
                    {step.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

          {section.note && (

            <div
              className="
                mt-6
                bg-amber-50
                border
                border-amber-200
                rounded-[24px]
                p-6
              "
            >

              <h4
                className="
                  font-bold
                  text-amber-800
                  mb-2
                "
              >
                Important Note
              </h4>

              <p className="text-amber-700">
                {section.note}
              </p>

            </div>

          )}

        </section>

      );

    }

    // LEDGER LAYOUT
    if (section.type === "ledger") {

      return (

        <section
          key={section.id}
          id={section.id}
          className="mb-16 scroll-mt-32"
        >

          <h2 className="
            text-2xl sm:text-3xl 
            font-bold
            text-[#071426]
            mb-2
          ">
            {section.title}
          </h2>

          <p
            className="
              text-slate-600
              text-base
              lg:text-lg
              leading-7
              lg:leading-8
              mb-6
              lg:mb-10
            "
          >
            {section.description}
          </p>

          <div className="space-y-5 lg:space-y-6">

  {/* GROUP CARDS */}

  <div>
    <h3 className="text-lg sm:text-xl font-bold text-[#071426] mb-4">
      Major Account Groups
    </h3>

    <div
  className="
    grid
    grid-cols-1
    md:grid-cols-2
    gap-3
    md:gap-5
  "
>

  {section.groups?.map((group, index) => {

    const Icon =
      groupIcons[group.title];

    return (

      <div
        key={index}
        className="
  bg-white
  border
  border-slate-200
  rounded-xl
  sm:rounded-2xl
  lg:rounded-3xl
  p-4
  sm:p-5
  lg:p-6
  overflow-hidden
"
      >

        <div
          className="
            flex
            items-center
            gap-3
            mb-4
          "
        >

          {Icon && (
            <Icon
              className="
                w-6 h-6
                text-[#155A96]
              "
            />
          )}

          <h4
            className="
              text-lg
              sm:text-xl
              font-bold
              text-[#071426]
            "
          >
            {group.title}
          </h4>

        </div>

        <p
  className="
    text-slate-600
    text-sm
    sm:text-base
    leading-5
    break-words
  "
>
          {group.description}
        </p>

      </div>

    );

  })}

</div>
  </div>

  {/* LEDGER EXAMPLES */}

  <div>

  <h3
    className="
      text-xl
      font-bold
      text-[#071426]
      mb-6
    "
  >
    Creating Ledgers
  </h3>

  <div className="
  grid
  grid-cols-1
  md:grid-cols-2
  gap-4
  md:gap-x-6
  md:gap-y-4
">

  {section.examples?.map((example, index) => (

    <div
      key={index}
      className="
    group
    flex
    items-start
    gap-3
    sm:gap-4
    py-2
    min-w-0
  "
    >

      <div className="pt-2 overflow-visible">

  <div
    className="
      w-3 h-3
      rounded-full
      bg-[#155A96]
      
    "
  />

</div>

      <div
  className="
    min-w-0
    flex-1
    
  "
>

        <h4
          className="
            text-lg
            sm:text-xl
            font-semibold
            text-[#071426]
          "
        >
          {example.ledger}
        </h4>

        <p className="text-slate-600 mt-1">
          Group:
          <span
            className="
              ml-2
              font-medium
              text-slate-700
              
            "
          >
            {example.group}
          </span>
        </p>

      </div>

    </div>

  ))}

  </div>

</div>

  {/* TABLE */}

  <div
  className="
    overflow-x-auto
    w-full
    rounded-xl
    sm:rounded-2xl
    lg:rounded-3xl
    border
    border-slate-200
    bg-white
    -mx-4
    sm:mx-0
  "
>

    <table className="min-w-[650px] w-full
  overflow-hidden
  rounded-[24px]
  border
  border-slate-200
  bg-white
  shadow-sm
">

      <thead className="
  bg-gradient-to-r
  from-[#EEF4FF]
  to-[#F5F3FF]
">

        <tr className="
  hover:bg-slate-50
  transition-colors
">

          <th className="p-4 text-left">
            Ledger
          </th>

          <th className="p-4 text-left">
            Group
          </th>

          <th className="p-4 text-left">
            Type
          </th>

          <th className="p-4 text-left">
            Notes
          </th>

        </tr>

      </thead>

      <tbody>

        {section.table?.map((row, index) => (

          <tr
            key={index}
            className="border-t"
          >

            <td className="p-4">
              {row.ledger}
            </td>

            <td className="p-4">
              {row.group}
            </td>

            <td className="px-6 py-4">
              <span
                className="
                  px-3 py-1
                  rounded-full
                  text-sm
                  font-medium
                  bg-[#EEF4FF]
                  text-[#155A96]
                "
              >
                {row.type}
              </span>
            </td>

            <td className="p-4">
              {row.notes}
            </td>

          </tr>

        ))}

      </tbody>

    </table>

  </div>

  {/* NOTE */}

  {section.note && (

    <div
  className="
    mt-6
    bg-gradient-to-r
    from-amber-50
    to-orange-50
    border
    border-amber-200
    rounded-2xl
    lg:rounded-3xl
    p-4
    sm:p-6
  "
>

  <h4
    className="
      text-lg
      font-bold
      text-amber-800
      mb-2
    "
  >
    ⚠ Best Practice
  </h4>

  <p
    className="
      text-amber-700
      leading-8
    "
  >
    {section.note}
  </p>

</div>

  )}

</div>

        </section>

      );

    }

    if (section.type === "voucher") {
  return (
    <section
      key={section.id}
      id={section.id}
      className="mb-16 scroll-mt-32"
    >

      <h2
        className="
          text-2xl
          sm:text-3xl
          lg:text-4xl
          font-black
          text-[#071426]
          mb-3
        "
      >
        {section.title}
      </h2>

      <p
        className="
          text-sm
          sm:text-base
          lg:text-lg
          leading-8
          text-slate-600
          mb-6
        "
      >
        {section.description}
      </p>

      {/* GOLDEN RULES */}

      <div
        className="
          p-4
          sm:p-6
          lg:p-8
          rounded-xl
          sm:rounded-2xl
          lg:rounded-[24px]
          bg-slate-50
          border
          border-slate-200
          mb-6
        "
      >

        <h3
          className="
            text-lg
            sm:text-xl
            font-bold
            text-[#071426]
            mb-4
          "
        >
          Golden Rules
        </h3>

        <ul className="space-y-3">

          {section.rules?.map((rule, index) => (

            <li
              key={index}
              className="
                text-slate-700
                leading-6
                sm:leading-8
                font-semibold
              "
            >
              • {rule}
            </li>

          ))}

        </ul>

      </div>

      {/* ACCORDION */}

      <div
  className="
    overflow-hidden
    rounded-xl
    sm:rounded-2xl
    lg:rounded-[28px]
    border
    border-slate-200
    bg-white
  "
>

        {section.vouchers?.map((voucher, index) => (

          <div
  key={index}
  className="
    border-b
    border-slate-200
    last:border-b-0
  "
>

            <button
  onClick={() =>
  setOpenIndex(
    openIndex === index ? null : index
  )
}
  className="
    w-full
    px-4
sm:px-6
lg:px-8
py-4
sm:py-5
lg:py-6
    flex
    items-center
    justify-between
    hover:bg-slate-50
    transition-all
    duration-300
    group
  "
>
  <div className="flex items-start gap-3 min-w-0">

    {(() => {
      const Icon = voucherIcons[voucher.type];
      return (
        <div
          className="
            mt-1
            text-[#155A96]
            group-hover:translate-x-1
            transition-transform
            duration-300
          "
        >
          <Icon size={22} />
        </div>
      );
    })()}

   <div className="text-left min-w-0 flex-1">

      <span
        className={`
          inline-flex
          items-center
          px-3
          py-1
          rounded-full
          text-xs
          font-semibold
          tracking-wide
          mb-3
          ${badgeStyles[voucher.type]}
        `}
      >
        {voucher.badge}
      </span>

      <h3
        className="
          text-base
sm:text-lg
lg:text-xl
          font-bold
          text-[#071426]
          group-hover:text-[#155A96]
          transition-colors
        "
      >
        {voucher.title}
      </h3>

      <p
        className="
          text-slate-500
          mt-1
        "
      >
        {voucher.subtitle}
      </p>

    </div>

  </div>

  {openIndex === index ? (
    <ChevronUp size={24} />
  ) : (
    <ChevronDown size={24} />
  )}
</button>

            {openIndex === index && (

              <div
                className="
                  px-4
sm:px-6
lg:px-8
pb-4
sm:pb-6
lg:pb-8
                  border-t
                  border-slate-100
                "
              >

                <p
                  className="
                    mt-4
                    text-slate-700
                    leading-8
                  "
                >
                  <strong>
                    Use when:
                  </strong>{" "}
                  {voucher.useWhen}
                </p>

                {/* ENTRY TABLE */}

                {voucher.entry && (

                  <div
                  className="
                    mt-4
                    overflow-x-auto
                    rounded-xl
                    sm:rounded-2xl
                    border
                    border-slate-200
                    w-full
                  "
                >

                    <table className="min-w-[650px] w-full">

                      <thead
                        className="
                          bg-[#EEF4FF]
                        "
                      >

                        <tr>

                          <th className="px-3 py-3sm:px-4 sm:py-4 text-left">
                            Date
                          </th>

                          <th className="px-3 py-3sm:px-4 sm:py-4 text-left">
                            Particulars
                          </th>

                          <th className="px-3 py-3sm:px-4 sm:py-4 text-left">
                            Dr
                          </th>

                          <th className="px-3 py-3sm:px-4 sm:py-4 text-left">
                            Cr
                          </th>

                        </tr>

                      </thead>

                      <tbody>

                        {voucher.entry.map(
                          (row, i) => (

                            <tr
                              key={i}
                              className="
                                border-t
                              "
                            >

                              <td className="p-4">
                                {row.date}
                              </td>

                              <td className="p-4">
                                {row.particulars}
                              </td>

                              <td className="p-4">
                                {row.dr}
                              </td>

                              <td className="p-4">
                                {row.cr}
                              </td>

                            </tr>

                          )
                        )}

                      </tbody>

                    </table>

                  </div>

                )}

                {voucher.narration && (

                  <div
                    className="
                      mt-4
                      text-slate-600
                    "
                  >

                    <strong>
                      Narration:
                    </strong>{" "}
                    {voucher.narration}

                  </div>

                )}

              </div>

            )}

          </div>

        ))}

      </div>

      {/* COMMON MISTAKES */}

      <div
        className="
          mt-6
          p-4 sm:p-6 lg:p-8
          rounded-[24px]
          border
          border-amber-200
          bg-amber-50
        "
      >

        <h3
          className="
            text-lg
            sm:text-xl
            font-bold
            text-amber-900
            mb-4
          "
        >
          Common Mistakes To Avoid
        </h3>

        <ul className="space-y-3">

          {section.mistakes?.map(
            (mistake, index) => (

              <li
                key={index}
                className="
                  text-amber-800
                  leading-6
                  sm:leading-8
                "
              >
                • {mistake}
              </li>

            )
          )}

        </ul>

      </div>

    </section>

  );

    };

    if (section.type === "roadmap") {
  return (
    <section
      key={section.id}
      id={section.id}
      className="mb-16 lg:mb-24 scroll-mt-32"
    >
      {/* HEADING */}
      <h2
        className="
          text-xl
          sm:text-2xl
          lg:text-3xl
          font-bold
          text-[#071426]
          mb-3
        "
      >
        {section.title}
      </h2>

      {/* ================= MOBILE TIMELINE ================= */}
      <div className="lg:hidden mt-6">

        <div className="relative pl-8">

          {/* Vertical Line */}
          <div
            className="
              absolute
              left-2
              top-0
              bottom-0
              w-[2px]
              bg-[#155A96]
            "
          />

          {section.steps.map((item, index) => (

            <div
              key={index}
              className="relative pb-6"
            >

              {/* Dot */}
              <div
                className="
                  absolute
                  -left-[31px]
                  top-4
                  w-5
                  h-5
                  rounded-full
                  bg-white
                  border-4
                  border-[#155A96]
                "
              />

              {/* Card */}
              <div
                className="
                  bg-white
                  border
                  border-slate-200
                  rounded-xl
                  p-4
                "
              >

                <span
                  className="
                    text-xs
                    font-semibold
                    text-[#155A96]
                  "
                >
                  STEP {item.step}
                </span>

                <h3
                  className="
                    mt-2
                    text-lg
                    font-bold
                    text-[#071426]
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    text-slate-600
                    leading-6
                  "
                >
                  {item.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* ================= DESKTOP TIMELINE ================= */}
      <div className="hidden lg:block mt-12">

        <div
  className="
    relative
    flex
    flex-col
    md:flex-row
    md:justify-between
    items-start
    gap-6
    md:gap-0
    pb-6
  "
>

          {/* Left Dot */}
          <div
            className="
              absolute
              top-5
              left-0
              w-3
              h-3
              rounded-full
              bg-[#155A96]
              -translate-y-1/2
            "
          />

          {/* Line */}
          <div
            className="
              absolute
              top-5
              left-0
              right-0
              h-[2px]
              bg-[#155A96]
            "
          />

          {/* Right Dot */}
          <div
            className="
              absolute
              top-5
              right-0
              w-3
              h-3
              rounded-full
              bg-[#155A96]
              -translate-y-1/2
            "
          />

          {section.steps.map((item, index) => (

            <div
              key={index}
              className="
                relative
                z-10
                flex
                flex-col
                items-center
                text-center
                w-40
              "
            >

              {/* Circle */}
              <div
                className="
                  w-12
                  h-12
                  rounded-full
                  bg-white
                  border-4
                  border-[#155A96]
                  flex
                  items-center
                  justify-center
                  font-bold
                  text-[#155A96]
                "
              >
                {item.step}
              </div>

              <h3
                className="
                  mt-5
                  text-lg
                  font-bold
                  text-[#071426]
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-2
                  text-sm
                  text-slate-500
                  leading-6
                "
              >
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
    }

    if (section.type === "practice") {
  return (
    <section
      key={section.id}
      id={section.id}
      className="mb-16 scroll-mt-32"
    >
      <h2
        className="
          text-2xl
          sm:text-3xl
          lg:text-4xl
          font-bold
          text-[#071426]
          mb-3
        "
      >
        {section.title}
      </h2>

      <p
        className="
          text-lg
          text-slate-600
          mb-6
        "
      >
        {section.description}
      </p>

      <div
        className="
          grid
          md:grid-cols-2
          xl:grid-cols-3
          gap-6
        "
      >
        {section.labs.map((lab, index) => (

          <div
            key={index}
            className="
              group
              bg-white
              border
              border-slate-200
              rounded-[28px]
              p-4
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-xl
            "
          >

            {/* Top */}

            <div
              className="
                flex
                items-center
                justify-between
                mb-4
              "
            >

              <span
                className="
                  text-sm
                  font-bold
                  text-[#155A96]
                  uppercase
                  tracking-wider
                "
              >
                Lab {index + 1}
              </span>

              <span
                className="
                  px-3
                  py-1
                  rounded-full
                  bg-[#EEF4FF]
                  text-[#155A96]
                  text-sm
                  font-medium
                "
              >
                {lab.duration}
              </span>

            </div>

            <h3
              className="
                text-lg
                font-bold
                text-[#071426]
                mb-4
              "
            >
              {lab.title}
            </h3>

            <span
              className={`
                inline-block
                mb-4
                px-3 py-1
                rounded-full
                text-sm
                font-medium
                ${
                  lab.difficulty === "Easy"
                    ? "bg-green-100 text-green-700"
                    : "bg-amber-100 text-amber-700"
                }
              `}
            >
              {lab.difficulty}
            </span>

            <ul className="space-y-2">

              {lab.tasks.map((task, i) => (

                <li
                  key={i}
                  className="
                    flex
                    gap-3
                    text-slate-600
                  "
                >

                  <span className="text-[#155A96]">
                    ✓
                  </span>

                  <span>{task}</span>

                </li>

              ))}

            </ul>

          </div>
        
        ))}
      </div>
    {section.quiz?.length > 0 && (
      <div
  className="
    mt-8
    bg-white
    border
    border-slate-200
    rounded-[28px]
    p-6
  "
>
  <h3
    className="
      text-xl
      font-bold
      text-[#071426]
      mb-6
    "
  >
    Self Check Quiz
  </h3>

  <div className="space-y-6">

    {section.quiz.map((q, index) => (

      <div key={index}>

        <p
          className="
            font-medium
            text-[#071426]
            mb-3
          "
        >
          {index + 1}. {q.question}
        </p>

        <select
  value={answers[index] || ""}
  onChange={(e) =>
    setAnswers({
      ...answers,
      [index]: e.target.value,
    })
  }
  className="
    w-full
    border
    border-slate-200
    rounded-xl
    px-4
    py-3
  "
>
  <option value="">Select Answer</option>

  {q.options.map((option) => (
    <option key={option} value={option}>
      {option}
    </option>
  ))}
</select>

      </div>

    ))}

    <button
  onClick={() => handleQuizSubmit(section.quiz)}
  className="
    px-5
    py-2
    rounded-xl
    bg-[#155A96]
    text-white
    font-medium
  "
>
  Submit Quiz
</button>

{score !== null && (
  <div className="mt-4">
    <p
      className={`
        font-semibold text-lg
        ${
          score === 3
            ? "text-green-600"
            : score >= 2
            ? "text-amber-600"
            : "text-red-600"
        }
      `}
    >
      {score === 3
        ? ` Excellent! Score: ${score}/3`
        : score >= 2
        ? ` Good Job! Score: ${score}/3`
        : ` Keep Practicing! Score: ${score}/3`}
    </p>
  </div>
)}


  </div>
</div>
)}
    </section>
  );
    }

    if (section.type === "invoiceTypes") {
  return (
    <section
      key={section.id}
      id={section.id}
      className="mb-24 scroll-mt-32"
    >
      <h2
        className="
          text-3xl
          sm:text-4xl
          lg:text-5xl
          font-bold
          text-[#071426]
          mb-5
        "
      >
        {section.title}
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {section.invoices.map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-slate-200 p-6 bg-white"
          >
            <h3 className="text-xl font-bold mb-2">
              {item.title}
            </h3>

            <p className="text-slate-600 mb-5">
              {item.description}
            </p>

            <div className="rounded-2xl bg-[#020C24] text-white p-5 font-mono text-sm">
              {item.invoice.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-2xl bg-amber-50 border border-amber-200 p-5 text-amber-800">
        {section.note}
      </div>
    </section>
  );
    }

    if (section.type === "gstReturns") {
    return (
    <section
      key={section.id}
      id={section.id}
      className="mb-16 scroll-mt-32"
    >
  <h2
        className="
          text-2xl
          sm:text-3xl
          lg:text-4xl
          font-bold
          text-[#071426]
          mb-4
        "
      >
        {section.title}
      </h2>

  <div className="grid md:grid-cols-2 gap-8">
  {section.cards.map((card, index) => {
    const Icon =
      index === 0
        ? FileText
        : RefreshCw;

    return (
      <div
        key={card.title}
        className="
          group
          rounded-2xl
          border
          border-slate-200
          p-6
          bg-white
          transition-all
          duration-300
          hover:-translate-y-2
          hover:shadow-xl
          hover:border-blue-200
        "
      >
        <div className="flex items-center gap-3 mb-5">
          <div
            className="
              w-12 h-12
              rounded-2xl
              bg-blue-50
              flex items-center justify-center
              text-[#155A96]
              transition-all
              duration-300
              group-hover:bg-[#155A96]
              group-hover:text-white
            "
          >
            <Icon size={24} />
          </div>

          <h3 className="text-xl font-bold text-[#071426]">
            {card.title}
          </h3>
        </div>

        <p className="text-slate-600 leading-relaxed">
          {card.content}
        </p>
      </div>
    );
  })}
</div>

  <div
  className="
    mt-6
    rounded-3xl
    border
    border-slate-200
    p-6
    bg-white
    transition-all
    duration-300
    hover:shadow-xl
    hover:border-blue-200
  "
>
  <div className="flex items-center gap-3 mb-5">
    <div
      className="
        w-12 h-12
        rounded-2xl
        bg-blue-50
        flex items-center justify-center
        text-[#155A96]
      "
    >
      <Receipt size={24} />
    </div>

    <h3 className="text-xl font-bold text-[#071426]">
      {section.creditDebitNote.title}
    </h3>
  </div>

  <p className="text-slate-600 leading-relaxed">
    {section.creditDebitNote.content}
  </p>
</div>

  <div
  className="
    mt-4
    rounded-2xl
    bg-gradient-to-r
    from-blue-50
    to-cyan-50
    border
    border-blue-200
    p-4
    text-[#0F172A]
    font-medium
    shadow-sm
  "
>
  {section.tip}
</div>
</section>
   ) }

   if (section.type === "eInvoice") {
  return (
    <section
      key={section.id}
      id={section.id}
      className="mb-16 scroll-mt-32"
    >
      <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-8 lg:p-10">

        <h2 className="text-2xl
          sm:text-3xl
          lg:text-4xl font-bold text-[#071426] mb-6">
          {section.title}
        </h2>

        <p className="text-slate-600 text-lg leading-relaxed mb-6">
          {section.description}
        </p>

        <div className="space-y-5 pl-6">
          {section.process.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4"
            >
              <div
                className="
                  w-8 h-8
                  rounded-full
                  bg-blue-100
                  text-blue-600
                  flex items-center justify-center
                  font-bold
                  shrink-0
                "
              >
                {index + 1}
              </div>

              <p className="text-lg text-slate-700">
                {item}
              </p>
            </div>
          ))}
        </div>

        <div
          className="
            mt-6
            rounded-2xl
            bg-amber-50
            border
            border-amber-200
            p-4
            text-slate-700
          "
        >
          <span className="font-semibold">
            Note:
          </span>{" "}
          {section.note}
        </div>

      </div>
    </section>
  );
   }

   if (section.type === "faq") {
  return (
    <section
      key={section.id}
      id={section.id}
      className="mb-16 scroll-mt-32"
    >
      <h2
        className="
          text-2xl
          sm:text-3xl
          lg:text-4xl
          font-bold
          text-[#071426]
          mb-6
        "
      >
        {section.title}
      </h2>

      <div className="space-y-4">
        {section.questions.map((faq, index) => (
          <details
            key={index}
            className="
              group
              bg-white
              border
              border-slate-200
              rounded-2xl
              overflow-hidden
            "
          >
            <summary
              className="
                cursor-pointer
                list-none
                px-6
                py-4
                text-[15px] sm:text-[18px] lg:text-[14px]
                text-[#071426]
                flex
                items-center
                justify-between
              "
            >
              {faq.question}

              <span
                className="
                  transition-transform
                  duration-300
                  group-open:rotate-180
                "
              >
                ▼
              </span>
            </summary>

            <div
              className="
                px-6
                pb-5
                text-slate-600
                leading-relaxed
                border-t
                border-slate-100
              "
            >
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
   }

   if (section.type === "inventoryCards") {
  return (
    <section
      key={section.id}
      id={section.id}
      className="mb-16 scroll-mt-32"
    >
      <h2
        className="
          text-2xl
          sm:text-3xl
          lg:text-4xl
          font-bold
          text-[#071426]
          mb-4
        "
      >
        {section.title}
      </h2>

      <p
        className="
          text-lg
          text-slate-600
          leading-relaxed
          mb-5 lg:mb-8
        "
      >
        {section.description}
      </p>

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
        {section.cards.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: index * 0.08
            }}
            className="
              flex
              items-start
              gap-4
              group
            "
          >
            <div
              className="
                w-3
                h-3
                rounded-full
                bg-[#155A96]
                mt-2.5
                group-hover:scale-125
                transition-transform
              "
            />

            <div>
              <h3
                className="
                  text-[16px]
                  font-semibold
                  text-[#071426]
                  mb-2
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  text-slate-600
                  text-base
                  leading-relaxed
                "
              >
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div
        className="
          mt-6
          p-4
          rounded-2xl
          bg-cyan-50
          border
          border-cyan-200
        "
      >
        <span className="font-semibold">
          Tip:
        </span>{" "}
        {section.tip}
      </div>
    </section>
  );
   }

   if (section.type === "warehouse") {
  return (
    <section
      key={section.id}
      id={section.id}
      className="mb-16 scroll-mt-32"
    >
      <h2
        className="
          text-2xl
          sm:text-3xl
          lg:text-4xl
          font-bold
          text-[#071426]
          mb-4
        "
      >
        {section.title}
      </h2>

      <p
        className="
          text-lg
          text-slate-600
          mb-7
        "
      >
        {section.description}
      </p>

      {/* Setup Points */}

      <div className="space-y-6 mb-10 mt-6">
        
          {section.setupPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
              }}
              className="
                flex
                items-start
                gap-4
              "
            >
              <div
                className="
                  w-3
                  h-3
                  rounded-full
                  bg-[#155A96]
                  mt-2.5
                  shrink-0
                "
              />

              <p
                className="
                  text-lg
                  text-slate-700
                  leading-relaxed
                "
              >
                {point}
              </p>
            </motion.div>
          ))}
      </div>

      {/* Use Cases */}

      <div className="grid md:grid-cols-2 gap-6">
        {section.useCases.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: index * 0.1,
            }}
            className="
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-6
              hover:border-[#155A96]
              hover:shadow-lg
              transition-all
              duration-300
            "
          >
            <h3
              className="
                text-xl
                font-bold
                text-[#071426]
                mb-4
              "
            >
              {item.title}
            </h3>

            <p
              className="
                text-slate-600
                leading-relaxed
              "
            >
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Tip */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="
          mt-6
          rounded-2xl
          bg-cyan-50
          border
          border-cyan-200
          p-4
        "
      >
        <span className="font-semibold text-[#0F766E]">
          Tip:
        </span>{" "}
        <span className="text-slate-700">
          {section.tip}
        </span>
      </motion.div>
    </section>
  );
   }
   
   if (section.type === "batching") {
  return (
    <section
      key={section.id}
      id={section.id}
      className="mb-16 scroll-mt-32"
    >
      <h2
        className="
          text-2xl
          sm:text-3xl
          lg:text-4Sxl
          font-bold
          text-[#071426]
          mb-4
        "
      >
        {section.title}
      </h2>

      <p
        className="
          text-lg
          text-slate-600
          leading-relaxed
          mb-6
        "
      >
        {section.description}
      </p>

      {/* Points */}
      <div className="space-y-5 mb-10">
        {section.points.map((point, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: index * 0.08,
            }}
            className="
              flex items-start gap-4
              group
              cursor-pointer
              transition-all
              duration-300
              hover:translate-x-2
            "
          >
            <div
              className="
                w-3 h-3
                rounded-full
                bg-[#155A96]
                mt-3
                shrink-0
                transition-all
                duration-300
                group-hover:scale-125
              "
            />

            <p
            className="
              text-lg
              text-slate-700
              leading-relaxed
            "
          >
            <span
              className="
                font-bold
                text-[#071426]
                transition-colors
                duration-300
              "
            >
              {point.title}
            </span>

            <span className="text-slate-600">
              {" "}— {point.description}
            </span>
          </p>
          </motion.div>
        ))}
      </div>

      {/* Best Practice */}
      {section.bestPractice?.length > 0 && (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="
          rounded-3xl
          border
          border-amber-200
          bg-amber-50
          p-6
          mb-4
        "
      >
        <h3
          className="
            text-xl
            font-bold
            text-amber-900
            mb-3
          "
        >
          Best Practice
        </h3>

        <p
          className="
            text-lg
            text-amber-800
            leading-relaxed
          "
        >
          {section.bestPractice}
        </p>
      </motion.div>
      )}

      {/* Tip */}
      <div
        className="
          rounded-2xl
          bg-blue-50
          border
          border-blue-200
          p-4
        "
      >
        <p className="text-blue-900 text-lg">
          {section.tip}
        </p>
      </div>
    </section>
  );
   }

   if (section.type === "bom") {
  return (
    <section
      key={section.id}
      id={section.id}
      className="mb-16 scroll-mt-32"
    >
      <h2
        className="
          text-2xl
          sm:text-3xl
          lg:text-4xl
          font-bold
          text-[#071426]
          mb-4
        "
      >
        {section.title}
      </h2>

      <p
        className="
          text-lg
          text-slate-600
          leading-relaxed
          mb-6
        "
      >
        {section.description}
      </p>

      {/* Points */}
      <div className="space-y-5 mb-10">
        {section.points.map((point, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: index * 0.08,
            }}
            className="
              flex items-start gap-4
              group
              cursor-pointer
              transition-all
              duration-300
              hover:translate-x-2
            "
          >
            <div
              className="
                w-3 h-3
                rounded-full
                bg-[#155A96]
                mt-3
                shrink-0
                transition-all
                duration-300
                group-hover:scale-125
              "
            />

            <p className="text-lg leading-relaxed">
              <span
                className="
                  font-bold
                  text-[#071426]
                  transition-colors
                  duration-300
                  group-hover:text-[#155A96]
                "
              >
                {point.title}
              </span>

              <span className="text-slate-600">
                {" "}— {point.description}
              </span>
            </p>
          </motion.div>
        ))}
      </div>

      {/* Example BOM */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="
          rounded-3xl
          bg-[#071426]
          text-white
          p-6
          mb-6
          font-mono
        "
      >
        <h3 className="font-bold text-xl mb-4">
          {section.example.title}
        </h3>

        <div className="space-y-3 text-lg">
          {section.example.items.map((item, index) => (
            <p key={index}>• {item}</p>
          ))}
        </div>

        <div className="mt-5 pt-5 border-t border-white/20">
          Assembly Time: {section.example.assemblyTime}
        </div>
      </motion.div>

      {/* Tip */}
      <div
        className="
          rounded-2xl
          bg-blue-50
          border
          border-blue-200
          p-5
        "
      >
        <p className="text-blue-900 text-lg">
           {section.tip}
        </p>
      </div>
    </section>
  );
   }

   if (section.type === "report") {
  return (
    <section
      key={section.id}
      id={section.id}
      className="mb-16 scroll-mt-32"
    >
      <h2
        className="
          text-2xl
          sm:text-3xl
          lg:text-4xl
          font-bold
          text-[#071426]
          mb-4
        "
      >
        {section.title}
      </h2>

      <p
        className="
          text-lg
          text-slate-600
          leading-relaxed
          mb-6
        "
      >
        {section.description}
      </p>

      {/* Key Points */}
      <div className="space-y-4 mb-8">
        {section.points.map((point, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: index * 0.08,
            }}
            className="
              flex items-start gap-4
              group
              cursor-pointer
              transition-all
              duration-300
              hover:translate-x-2
            "
          >
            <div
              className="
                w-3 h-3
                rounded-full
                bg-[#155A96]
                mt-3
                shrink-0
                transition-all
                duration-300
                group-hover:scale-125
              "
            />

            <p className="text-lg leading-relaxed">
              <span
                className="
                  font-bold
                  text-[#071426]
                  transition-colors
                  duration-300
                  group-hover:text-[#155A96]
                "
              >
                {point.title}
              </span>

              <span className="text-slate-600">
                {" "}— {point.description}
              </span>
            </p>
          </motion.div>
        ))}
      </div>

      {/* Sample Report */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="
          rounded-3xl
          bg-[#071426]
          text-white
          p-6
          mb-6
          overflow-x-auto
        "
      >
        <h3 className="font-bold text-xl mb-5">
          {section.sampleTitle}
        </h3>

        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-white/20">
              <th className="pb-3">Ledger</th>
              <th className="pb-3">Debit (₹)</th>
              <th className="pb-3">Credit (₹)</th>
            </tr>
          </thead>

          <tbody>
            {section.sample.map((row, index) => (
              <tr
                key={index}
                className="border-b border-white/10"
              >
                <td className="py-3">{row.ledger}</td>
                <td className="py-3">{row.debit}</td>
                <td className="py-3">{row.credit}</td>
              </tr>
            ))}

            <tr className="font-bold">
              <td className="pt-4">Total</td>
              <td className="pt-4">{section.totalDebit}</td>
              <td className="pt-4">{section.totalCredit}</td>
            </tr>
          </tbody>
        </table>
      </motion.div>

      {/* Note */}
      <div
        className="
          rounded-2xl
          bg-blue-50
          border
          border-blue-200
          p-5
        "
      >
        <p className="text-blue-900 text-lg">
          {section.note}
        </p>
      </div>
    </section>
  );
   }

   {/*
   if (section.type === "gallery") {
  return (
    <section
      key={section.id}
      id={section.id}
      className="mb-24 scroll-mt-32"
    >
      <h2 className="text-4xl font-bold text-[#071426] mb-4">
        {section.title}
      </h2>

      <p className="text-slate-600 mb-10">
        {section.description}
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {section.images.map((image, index) => (
          <div
            key={index}
            className="
              group
              overflow-hidden
              rounded-3xl
              bg-white
              border border-slate-200
              hover:shadow-xl
              transition-all
              duration-300
            "
          >
            <div className="overflow-hidden">
              <img
                src={image.src}
                alt={image.title}
                className="
                  h-64
                  w-full
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
              />
            </div>

            <div className="p-5">
              <h3 className="font-bold text-xl text-[#071426] mb-2">
                {image.title}
              </h3>

              <p className="text-slate-600 text-sm">
                {image.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
   }
  */}
    return null;

})}

    </main>

  </div>

</section>

    </main>

  );
}