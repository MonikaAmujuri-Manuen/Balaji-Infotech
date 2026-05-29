import { motion, AnimatePresence, easeOut } from "framer-motion";
import lmsHero from "../assets/lmshero.png"
import {
  Play, Link2, Box, Sparkles, Clock3, FlaskConical,ArrowRight, FolderDown, NotebookPen, Download,
  FileText, FileSpreadsheet, Database, FileArchive, MonitorPlay, Globe, Plus
} from "lucide-react";

import {
  FaYoutube,
} from "react-icons/fa";

import basicsImg from "../assets/basics.png";
import gstImg from "../assets/gst.png";
import inventoryImg from "../assets/inventory.png";
import payrollImg from "../assets/payroll.jpg"
import reportsImg from "../assets/reports.jpg"
import advancedImg from "../assets/advanced.jpg"

export default function LMS() {

  const roadmapData = [
  {
    step: "01",
    level: "Beginner",
    title: "Basics & Ledgers",
    description:
      "Learn company creation, ledgers, voucher entries, journals, and accounting fundamentals.",
    time: "3–4 Hours",
    image: basicsImg,
  },

  {
    step: "02",
    level: "Intermediate",
    title: "GST & Taxation",
    description:
      "Master GST configuration, invoices, returns, debit notes, and compliance workflows.",
    time: "6–8 Hours",
    image: gstImg,
  },

  {
    step: "03",
    level: "Intermediate",
    title: "Inventory & Stock",
    description:
      "Understand stock items, godowns, batching, reorder levels, and manufacturing basics.",
    time: "4–6 Hours",
    image: inventoryImg,
  },

  {
    step: "04",
    level: "Advanced",
    title: "Payroll Management",
    description:
      "Learn employee setup, salary structures, PF/ESI deductions, and payroll processing.",
    time: "5–7 Hours",
    image: payrollImg,
  },

  {
    step: "05",
    level: "Advanced",
    title: "Reports & MIS",
    description:
      "Generate profit & loss reports, balance sheets, ratio analysis, and MIS dashboards.",
    time: "4–5 Hours",
    image: reportsImg,
  },

  {
    step: "06",
    level: "Expert",
    title: "Advanced TallyPrime",
    description:
      "Security controls, multi-company workflows, backup & restore, and advanced customization.",
    time: "6–9 Hours",
    image: advancedImg,
  },
];

const exerciseData = [
  {
    title: "GST Invoice Challenge",
    description:
      "Create GST invoices, configure taxes, and manage debit/credit notes.",
    time: "25 Minutes",
    level: "Intermediate",
  },

  {
    title: "Payroll Workflow Setup",
    description:
      "Configure employee salary structures and process payroll entries.",
    time: "40 Minutes",
    level: "Advanced",
  },

  {
    title: "Inventory Stock Transfer",
    description:
      "Practice godown transfers, batching, and stock management workflows.",
    time: "30 Minutes",
    level: "Intermediate",
  },
];

const downloadData = [
  {
    title: "GST Cheat Sheet",
    description:
      "Quick GST rates, shortcuts, filing process, and invoice formats.",
    type: "PDF FILE",
    icon: <FileText className="w-7 h-7" />,
  },

  {
    title: "Sample Company Data",
    description:
      "Practice with real-world TallyPrime business datasets and ledgers.",
    type: "ZIP FILE",
    icon: <Database className="w-7 h-7" />,
  },

  {
    title: "Payroll Templates",
    description:
      "Ready-to-use employee salary structure and payroll templates.",
    type: "XLS FILE",
    icon: <FileSpreadsheet className="w-7 h-7" />,
  },

  {
    title: "TallyPrime Notes",
    description:
      "Detailed learning notes covering accounting, GST, and inventory.",
    type: "DOC FILE",
    icon: <FileArchive className="w-7 h-7" />,
  },
];
  return (
    <>
    {/* ================= LMS HERO SECTION ================= */}
<section className="relative overflow-x-hidden pt-32 sm:pt-28 lg:pt-32 pb-14 sm:pb-20">

  {/* BACKGROUND IMAGE */}
  <div className="absolute inset-0">
    <img
      src={lmsHero}
      alt="LMS Hero"
      className="w-full h-full object-cover"
    />

    {/* DARK OVERLAY */}
    <div className="absolute inset-0 bg-[#020817]/70" />

    {/* GRADIENT OVERLAY */}
    <div className="
      absolute inset-0
      bg-gradient-to-r
      from-[#020817]/80
      via-[#020817]/50
      to-[#020817]/35
    " />
  </div>

  {/* GLOW EFFECT */}
  <div className="
    absolute
    top-0 left-1/2
    -translate-x-1/2
    w-[400px] h-[400px]
    sm:w-[550px]
    sm:h-[550px]
    lg:w-[700px]
    lg:h-[700px]
    bg-[#3B82F6]/20
    blur-[160px]
    rounded-full
  " />

  <div className="
    relative z-10
    max-w-7xl mx-auto
    px-4 sm:px-6
  ">

    <div className="
      grid lg:grid-cols-2
      gap-10
      lg:gap-16
      items-center
    ">

      {/* ================= LEFT CONTENT ================= */}
      <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView ={{ opacity: 1, y: 0 }}
            transition= {{ duration: 0.8 }}
            viewport={{ once: true }}
      >
      <div className="min-w-0">

        {/* BADGE */}
        <div className="
          flex flex-wrap items-center justify-center sm:justify-start gap-2
          px-5 py-2
          rounded-full
          border border-white/15
          bg-white/10
          backdrop-blur-xl
          text-[#3B82F6]
          text-sm font-semibold
          mb-8
        ">
          <span>Certified</span>
          <span>•</span>
          <span>Hands-on</span>
          <span>•</span>
          <span>Job-ready</span>
        </div>

        {/* HEADING */}
        <h1 className="
            text-[26px]
            sm:text-5xl
            lg:text-6xl
            font-black
            font-semibold
            leading-[1.1]
            tracking-[-1px]
            text-white
            break-words
            max-w-full

        ">
          Complete TallyPrime LMS —
          <span className="
            block
            mt-3
            leading-[1.15]
            break-words
            bg-gradient-to-r
            from-[#3B82F6]
            to-[#8B5CF6]
            bg-clip-text
            text-transparent
          ">
            From Basics To Payroll & GST
          </span>
        </h1>

        {/* DESCRIPTION */}
        <p className="
          mt-6 sm:mt-8
          text-[15px]
          sm:text-[16px]
          md:text-[17px]
          leading-8
          sm:leading-9
          text-white/70
          max-w-2xl
        ">
          Structured curriculum, practical exercises,
          downloadable resources, and free trusted references
          to learn Tally ERP & TallyPrime fast.
        </p>

        {/* CTA BUTTONS */}
        <div className="
          mt-8 sm:mt-10
          flex flex-col sm:flex-row
          items-stretch sm:items-center
          gap-4 sm:gap-5
          w-full
        ">

          {/* PRIMARY BUTTON */}
          <button
          onClick={() =>
            window.open(
              "https://www.youtube.com/@balajiinfotechguntur7060",
              "_blank"
            )
          }
          className="
            w-full
            sm:w-auto
            justify-center
            px-6
            sm:px-8
            py-4
            rounded-2xl
            bg-gradient-to-r
            from-[#2563EB]
            to-[#3B82F6]
            text-white
            font-semibold
            text-lg
            shadow-[0_20px_50px_rgba(37,99,235,0.35)]
            hover:scale-[1.03]
            transition-all duration-300
            flex items-center gap-3
          "
        >
          <Play size={20} fill="white" />
          Start Learning
        </button>

                  {/* SECONDARY BUTTON */}
                  <button
          className="
          w-full
          sm:w-auto
          justify-center
          px-6
          sm:px-8
          py-4
          rounded-2xl
          border border-white/15
          bg-white/10
          backdrop-blur-xl
          text-white
          font-semibold
          text-lg
          hover:bg-white/15
          transition-all duration-300
          flex items-center gap-3
        "
        >
          <Link2 size={20} />
          Free Resources
        </button>

        </div>
      </div>
      </motion.div>

      {/* ================= RIGHT GLASS CARD ================= */}
      <motion.div
      className="
      relative
      flex justify-center lg:justify-end
      order-1 lg:order-2"

      initial = {{ opacity: 0, x:100 }}
      whileInView={{ opacity: 1, x:0 }}
      transition={{
        duration : 1,
        ease: "easeOut",
        delay: "0.2",
      }}
      viewport={{ once: true}}
      >
      <div className="relative mt-4 lg:mt-0">

        {/* FLOATING CARD */}
        <div className="
          relative
          rounded-[24px]
          sm:rounded-[32px]
          border border-white/15
          bg-white/10
          backdrop-blur-2xl
          p-5
          sm:p-8
          md:p-10
          shadow-[0_25px_80px_rgba(0,0,0,0.45)]
        ">

          {/* TOP */}
          <div className="
            flex flex-col sm:flex-row
            items-start justify-between
            gap-5 sm:gap-6
          ">

            <div>
              <p className="
                text-sm
                font-semibold
                uppercase
                tracking-[2px]
                text-[#3B82F6]
              ">
                Course Snapshot
              </p>

              <h3 className="
                mt-3
                text-[26px]
                sm:text-3xl
                font-black
                text-white
                leading-tight
              ">
                TallyPrime
                <span className="text-[#3B82F6]"> • GST • </span>
                Payroll
              </h3>
            </div>

            {/* LEVEL BADGE */}
            <div className="
            w-full sm:w-auto
              px-3
              sm:px-4
              py-3
              rounded-2xl
              bg-white/10
              border border-white/10
              text-center
            ">
              <p className="text-xs text-white/60">
                Level
              </p>

              <h4 className="
                mt-1
                text-base sm:text-lg
                break-words
                font-bold
                text-white
              ">
                Beginner →
                <span className="text-[#3B82F6]">
                  Advanced
                </span>
              </h4>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="
            h-px
            bg-white/10
            my-8
          " />

          {/* TOPICS */}
          <div>

            <p className="
              text-sm
              text-white/60
              mb-5
            ">
              Core Topics
            </p>

            <div className="
              flex flex-wrap
              gap-3
            ">
              {[
                "Accounting",
                "GST",
                "Inventory",
                "Payroll",
                "Banking",
                "Reports",
              ].map((topic, index) => (
                <div
                  key={index}
                  className="
                    px-4 py-2
                    rounded-full
                    bg-white/10
                    border border-white/10
                    text-white
                    text-sm
                    font-medium
                  "
                >
                  {topic}
                </div>
              ))}
            </div>
          </div>

          {/* STATS */}
          <div className="
            mt-10
            grid grid-cols-1
            sm:grid-cols-3
            gap-4
          ">

            {[
              {
                number: "40+",
                label: "Modules",
              },
              {
                number: "120+",
                label: "Videos",
              },
              {
                number: "25+",
                label: "Assignments",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="
                  rounded-2xl
                  border border-white/10
                  bg-white/5
                  p-4
                  sm:p-5
                  text-center
                "
              >
                <h4 className="
                  text-2xl
                  font-black
                  text-white
                ">
                  {item.number}
                </h4>

                <p className="
                  mt-1
                  text-sm
                  text-white/60
                ">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* BOTTOM BADGES */}
          <div className="
            mt-10
            flex flex-wrap
            gap-4
          ">

            <button
            onClick={() =>
              window.open(
                "https://tallysolutions.com/",
                "_blank"
              )
            }
            className="
              px-5 py-3
              rounded-2xl
              bg-gradient-to-r
              from-[#2563EB]
              to-[#7C3AED]
              text-white
              font-semibold
              flex items-center gap-3
            "
          >
            <Box size={18} />
            TallyOfficial
          </button>

                      <button
            onClick={() =>
              window.open(
                "https://www.youtube.com/@balajiinfotechguntur7060",
                "_blank"
              )
            }
            className="
              px-5 py-3
              rounded-2xl
              bg-white/10
              border border-white/10
              text-white
              font-semibold
              flex items-center gap-3
            "
          >
            <FaYoutube size={18} />
            YouTube Tutorials
          </button>

          </div>
        </div>

      </div>
      </motion.div>

    </div>
  </div>
</section>

{/* ================= LMS ROADMAP ================= */}
<section className="relative py-14 sm:py-16 md:py-20 overflow-hidden bg-[#F8FAFC]">

  {/* BACKGROUND GLOW */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/10 blur-[140px] rounded-full" />

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

    {/* SECTION HEADER */}
    <div className="text-center max-w-3xl mx-auto mb-20">

      <div className="
        inline-flex items-center gap-2
        px-5 py-2
        rounded-full
        border border-[#CBD5E1]
        bg-white
        text-[#2563EB]
        text-sm font-semibold
        shadow-sm
      ">
        <Sparkles className="w-4 h-4" />
        Interactive Learning Journey
      </div>

      <h2 className="
        mt-6
        text-[30px]
        sm:text-4xl
        md:text-5xl
        font-black
        tracking-tight
        text-[#0F172A]
        leading-tight
      ">
        Master TallyPrime{" "}
        <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
          Step By Step
        </span>
      </h2>

      <p className="
        mt-6
        text-[15px]
        sm:text-[16px]
        md:text-[17px]
        text-[#64748B]
        leading-8
      ">
        A structured roadmap designed to take you from accounting
        fundamentals to advanced GST, payroll, inventory, and reporting workflows.
      </p>

    </div>

    {/* ROADMAP GRID */}
    <div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

      {roadmapData.map((item, index) => (

        <div
          key={index}
          className="
            group
            relative
            rounded-[24px]
            sm:rounded-[30px]
            border border-[#E2E8F0]
            bg-white/70
            backdrop-blur-xl
            overflow-hidden
            shadow-[0_10px_40px_rgba(15,23,42,0.05)]
            hover:-translate-y-2
            hover:shadow-[0_25px_70px_rgba(37,99,235,0.15)]
            transition-all duration-500
          "
        >

          {/* TOP GRADIENT */}
          <div className="
            absolute top-0 left-0
            h-1.5 w-full
            bg-gradient-to-r from-[#2563EB] to-[#7C3AED]
            scale-x-0
            group-hover:scale-x-100
            origin-left
            transition-transform duration-500
          " />

          {/* STEP NUMBER */}
          <div className="
            absolute top-5 right-5
            text-5xl
            font-black
            text-[#E2E8F0]
            select-none
          ">
            {item.step}
          </div>

          {/* IMAGE */}
          <div className="relative h-[200px] sm:h-[220px] overflow-hidden">

            <img
              src={item.image}
              alt={item.title}
              className="
                w-full h-full
                object-cover
                group-hover:scale-110
                transition-transform duration-700
              "
            />

            {/* OVERLAY */}
            <div className="
              absolute inset-0
              bg-gradient-to-t
              from-black/60
              via-black/10
              to-transparent
            " />

            {/* LEVEL BADGE */}
            <div className="
              absolute top-5 left-5
              px-4 py-2
              rounded-full
              bg-white/20
              backdrop-blur-md
              border border-white/20
              text-white
              text-sm
              font-semibold
            ">
              {item.level}
            </div>

          </div>

          {/* CONTENT */}
          <div className="p-5 sm:p-7">

            <h3 className="
              text-[22px]
              sm:text-2xl
              font-black
              text-[#0F172A]
              leading-snug
            ">
              {item.title}
            </h3>

            <p className="
              mt-4
              text-[#64748B]
              leading-7
            ">
              {item.description}
            </p>

            {/* TAGS */}
            <div className="
              mt-7
              flex flex-wrap gap-3
            ">

              {/* TIME */}
              <div className="
                flex items-center gap-2
                px-4 py-2
                rounded-full
                bg-[#EFF6FF]
                text-[#2563EB]
                text-sm
                font-semibold
              ">
                <Clock3 className="w-4 h-4" />
                {item.time}
              </div>

              {/* LAB */}
              <div className="
                flex items-center gap-2
                px-4 py-2
                rounded-full
                bg-[#F5F3FF]
                text-[#7C3AED]
                text-sm
                font-semibold
              ">
                <FlaskConical className="w-4 h-4" />
                Hands-on Labs
              </div>

            </div>

            {/* CTA */}
            <button className="
              mt-8
              flex items-center gap-2
              text-[#2563EB]
              font-bold
              group-hover:gap-4
              transition-all duration-300
            ">
              Start Module
              <ArrowRight className="w-5 h-5" />
            </button>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>

{/* ================= INTERACTIVE LEARNING TOOLS ================= */}
<section className="relative py-14 sm:py-16 md:py-20 bg-[#F8FAFC] overflow-hidden">

  {/* BACKGROUND GLOW */}
  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full" />
  <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-500/10 blur-[120px] rounded-full" />

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

    {/* SECTION HEADER */}
    <div className="text-center max-w-3xl mx-auto mb-20">

      <div className="
        inline-flex items-center gap-2
        px-5 py-2
        rounded-full
        border border-[#CBD5E1]
        bg-white
        text-[#2563EB]
        text-sm font-semibold
        shadow-sm
      ">
        <Sparkles className="w-4 h-4" />
        Interactive LMS Resources
      </div>

      <h2 className="
        mt-6
        text-3xl md:text-5xl
        font-black
        tracking-tight
        text-[#0F172A]
        leading-tight
      ">
        Practice, Download &
        <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
          {" "}Master Faster
        </span>
      </h2>

      <p className="
        mt-6
        text-[16px] md:text-[17px]
        text-[#64748B]
        leading-8
      ">
        Strengthen your learning with practical exercises,
        downloadable resources, templates, and real-world accounting scenarios.
      </p>

    </div>

    {/* MAIN GRID */}
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">

      {/* ================= PRACTICE EXERCISES ================= */}
      <div className="
        rounded-[28px]
        border border-[#E2E8F0]
        bg-white/70
        backdrop-blur-xl
        p-5
        sm:p-8
        md:p-10
        shadow-[0_20px_60px_rgba(15,23,42,0.05)]
      ">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-10">

          <div>

            <h3 className="
              text-2xl
              sm:text-3xl
              font-black
              text-[#0F172A]
            ">
              Practice Exercises
            </h3>

            <p className="
              mt-3
              text-[#64748B]
              leading-7
            ">
              Real business accounting scenarios designed
              to improve practical TallyPrime skills.
            </p>

          </div>

          <div className="
              hidden md:flex
              items-center justify-center
              w-14 h-14
              rounded-2xl
              bg-gradient-to-br from-[#2563EB] to-[#7C3AED]
              shadow-lg shadow-blue-500/20
            ">
            <NotebookPen className="w-7 h-7 text-white stroke-[2.5]" />
          </div>

        </div>

        {/* EXERCISE LIST */}
        <div className="space-y-5">

          {exerciseData.map((item, index) => (

            <div
              key={index}
              className="
                group
                flex flex-col md:flex-row md:items-center md:justify-between
                gap-6
                rounded-[24px]
                border border-[#E2E8F0]
                bg-white
                p-5
                sm:p-6
                hover:-translate-y-1
                hover:shadow-[0_20px_50px_rgba(37,99,235,0.10)]
                transition-all duration-300
              "
            >

              {/* LEFT */}
              <div>

                <h4 className="
                  text-xl
                  font-black
                  text-[#0F172A]
                ">
                  {item.title}
                </h4>

                <p className="
                  mt-2
                  text-[#64748B]
                  leading-7
                ">
                  {item.description}
                </p>

                {/* BADGES */}
                <div className="flex flex-wrap gap-3 mt-5">

                  <div className="
                    flex items-center gap-2
                    px-4 py-2
                    rounded-full
                    bg-[#EFF6FF]
                    text-[#2563EB]
                    text-sm font-semibold
                  ">
                    <Clock3 className="w-4 h-4" />
                    {item.time}
                  </div>

                  <div className="
                    flex items-center gap-2
                    px-4 py-2
                    rounded-full
                    bg-[#F5F3FF]
                    text-[#7C3AED]
                    text-sm font-semibold
                  ">
                    <FlaskConical className="w-4 h-4" />
                    {item.level}
                  </div>

                </div>

              </div>

              {/* BUTTON */}
              <button className="
                shrink-0
                flex items-center justify-center gap-2
                px-6 py-4
                rounded-2xl
                bg-gradient-to-r from-[#2563EB] to-[#7C3AED]
                text-white
                font-semibold
                shadow-lg shadow-blue-500/20
                hover:scale-105
                transition-all duration-300
              ">
                Start
                <ArrowRight className="w-5 h-5" />
              </button>

            </div>

          ))}

        </div>

      </div>

      {/* ================= DOWNLOAD CENTER ================= */}
      <div className="
        rounded-[32px]
        border border-[#E2E8F0]
        bg-white/70
        backdrop-blur-xl
        p-8 md:p-10
        shadow-[0_20px_60px_rgba(15,23,42,0.05)]
      ">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-10">

          <div>

            <h3 className="
              text-3xl
              font-black
              text-[#0F172A]
            ">
              Download Center
            </h3>

            <p className="
              mt-3
              text-[#64748B]
              leading-7
            ">
              Access cheat sheets, sample company data,
              GST templates, and learning resources.
            </p>

          </div>

          <div className="
            hidden md:flex
            items-center justify-center
            w-14 h-14
            rounded-2xl
            bg-gradient-to-br from-[#2563EB] to-[#7C3AED]
            shadow-lg shadow-blue-500/20
          ">
            <FolderDown className="w-7 h-7 text-white stroke-[2.5]" />
          </div>

        </div>

        {/* DOWNLOAD GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

          {downloadData.map((item, index) => (

            <div
              key={index}
              className="
                group
                rounded-[20px]
                sm:rounded-[24px]
                border border-[#E2E8F0]
                bg-white
                p-6
                hover:-translate-y-1
                hover:shadow-[0_20px_50px_rgba(37,99,235,0.10)]
                transition-all duration-300
              "
            >

              {/* ICON */}
              <div className="
                flex items-center justify-center
                w-14 h-14
                rounded-2xl
                bg-gradient-to-br from-[#2563EB] to-[#7C3AED]
                text-white
                shadow-lg
              ">
                {item.icon}
              </div>

              {/* CONTENT */}
              <h4 className="
                mt-6
                text-xl
                font-black
                text-[#0F172A]
              ">
                {item.title}
              </h4>

              <p className="
                mt-3
                text-[#64748B]
                leading-7
              ">
                {item.description}
              </p>

              {/* FOOTER */}
              <div className="
                mt-6
                flex items-center justify-between
              ">

                <span className="
                  text-sm
                  font-semibold
                  text-[#2563EB]
                ">
                  {item.type}
                </span>

                <button className="
                  flex items-center gap-2
                  text-[#7C3AED]
                  font-bold
                  hover:gap-3
                  transition-all duration-300
                ">
                  Download
                  <Download className="w-4 h-4" />
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  </div>

</section>

{/* ================= BENTO RESOURCE GRID ================= */}
<section className="py-14 sm:py-20 px-4 sm:px-6 bg-[#F8FAFC]">

  <div className="max-w-7xl mx-auto">

    {/* HEADING */}
    <div className="max-w-3xl mb-14">

      <span className="
        inline-flex items-center gap-2
        px-4 py-2
        rounded-full
        border border-[#CBD5E1]
        bg-white
        text-sm font-semibold
        text-[#2563EB]
      ">
        Learning Resources
      </span>

      <h2 className="
        mt-6
        text-[30px] sm:text-4xl
        font-black
        leading-tight
        text-[#0F172A]
      ">
        Explore Learning
        <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
          {" "}Platforms & Tools
        </span>
      </h2>

      <p className="
        mt-5
        text-[16px] md:text-[17px]
        leading-8
        text-[#64748B]
      ">
        Access curated resources, practice environments,
        video tutorials, cheat sheets, and external learning
        platforms to accelerate your TallyPrime mastery.
      </p>

    </div>

    {/* BENTO GRID */}
    <div className="
      grid grid-cols-1
      lg:grid-cols-4
      gap-6
    ">

      {/* LARGE FEATURE CARD */}
      <div className="
        lg:col-span-2
        lg:row-span-2
        rounded-[32px]
        overflow-hidden
        relative
        bg-gradient-to-br from-[#0F172A] to-[#1E293B]
        p-6
        sm:p-10
        min-h-[420px]
        sm:min-h-[520px]
        group
      ">

        <div className="
          absolute inset-0
          opacity-20
          bg-[radial-gradient(circle_at_top_right,#3B82F6,transparent_40%)]
        " />

        <div className="relative z-10">

          <div className="
            w-16 h-16
            rounded-2xl
            bg-white/10
            backdrop-blur-md
            flex items-center justify-center
          ">
            <MonitorPlay className="w-8 h-8 text-white" />
          </div>

          <h3 className="
            mt-8
            text-2xl
            sm:text-3xl
            font-black
            text-white
          ">
            TallyPrime Video Learning Hub
          </h3>

          <p className="
            mt-5
            text-[16px] md:text-[17px]
            leading-8
            text-white/70
            max-w-xl
          ">
            Step-by-step visual walkthroughs covering
            accounting workflows, GST filing, inventory,
            payroll, banking, and business reporting.
          </p>

          <div className="
            mt-10
            flex flex-wrap gap-3
          ">

            {[
              "GST Tutorials",
              "Payroll Setup",
              "Inventory",
              "Advanced Reports",
            ].map((item, index) => (

              <div
                key={index}
                className="
                  px-4 py-2
                  rounded-full
                  bg-white/10
                  border border-white/10
                  text-sm
                  font-medium
                  text-white
                "
              >
                {item}
              </div>

            ))}

          </div>

          <button
  onClick={() =>
    window.open(
      "https://www.youtube.com/@balajiinfotechguntur7060",
      "_blank"
    )
  } className="
            mt-10
            inline-flex items-center gap-3
            px-7 py-4
            rounded-2xl
            bg-white
            text-[#0F172A]
            font-bold
            hover:scale-[1.03]
            transition-all duration-300
          ">
            Start Watching
            <ArrowRight className="w-5 h-5" />
          </button>

        </div>

      </div>

      {/* CARD 2 */}
      <div className="
        rounded-[28px]
        border border-[#E2E8F0]
        bg-white
        p-6
        sm:p-8
        group
        hover:-translate-y-2
        transition-all duration-500
      ">

        <div className="
          w-14 h-14
          rounded-2xl
          bg-gradient-to-br from-[#2563EB] to-[#7C3AED]
          flex items-center justify-center
        ">
          <FileSpreadsheet className="w-7 h-7 text-white" />
        </div>

        <h3 className="
          mt-6
          text-2xl
          font-black
          text-[#0F172A]
        ">
          GST Cheat Sheets
        </h3>

        <p className="
          mt-4
          text-[#64748B]
          leading-7
        ">
          Download quick GST references,
          invoice formats, tax rates,
          and filing shortcuts.
        </p>

      </div>

      {/* CARD 3 */}
      <div className="
        rounded-[28px]
        border border-[#E2E8F0]
        bg-white
        p-6 sm:p-8
        group
        hover:-translate-y-2
        transition-all duration-500
      ">

        <div className="
          w-14 h-14
          rounded-2xl
          bg-gradient-to-br from-[#2563EB] to-[#7C3AED]
          flex items-center justify-center
        ">
          <Database className="w-7 h-7 text-white" />
        </div>

        <h3 className="
          mt-6
          text-2xl
          font-black
          text-[#0F172A]
        ">
          Sample Company Data
        </h3>

        <p className="
          mt-4
          text-[#64748B]
          leading-7
        ">
          Practice real accounting scenarios
          using prebuilt TallyPrime datasets.
        </p>

      </div>

      {/* WIDE CARD */}
      <div className="
        lg:col-span-2
        rounded-[28px]
        border border-[#E2E8F0]
        bg-white
        p-8
        flex flex-col md:flex-row
        items-start md:items-center
        justify-between
        gap-8
      ">

        <div>

          <div className="
            w-14 h-14
            rounded-2xl
            bg-gradient-to-br from-[#2563EB] to-[#7C3AED]
            flex items-center justify-center
          ">
            <Globe className="w-7 h-7 text-white" />
          </div>

          <h3 className="
            mt-6
            text-2xl
            sm:text-3xl
            font-black
            text-[#0F172A]
          ">
            External Learning Platforms
          </h3>

          <p className="
            mt-4
            text-[#64748B]
            leading-7
            max-w-2xl
          ">
            Access official Tally resources,
            certification guides, community forums,
            and advanced business workflows.
          </p>

        </div>

        <button className="
          px-6 py-4
          rounded-2xl
          bg-gradient-to-r from-[#2563EB] to-[#7C3AED]
          text-white
          font-bold
          whitespace-nowrap
        ">
          Explore Resources
        </button>

      </div>

    </div>

  </div>

</section>

{/* ================= FAQ SECTION ================= */}
<section className="py-14 sm:py-20 px-4 sm:px-6 bg-white">

  <div className="max-w-5xl mx-auto">

    {/* HEADING */}
    <div className="text-center max-w-3xl mx-auto">

      <span className="
        inline-flex items-center gap-2
        px-4 py-2
        rounded-full
        border border-[#CBD5E1]
        bg-[#F8FAFC]
        text-sm font-semibold
        text-[#2563EB]
      ">
        Learning Support
      </span>

      <h2 className="
        mt-6
        text-[30px]
        sm:text-4xl
        font-black
        leading-tight
        text-[#0F172A]
      ">
        Quick
        <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
          {" "}Questions
        </span>
      </h2>

      <p className="
        mt-5
        text-[16px] md:text-[17px]
        leading-8
        text-[#64748B]
      ">
        Everything you need to know about the LMS,
        learning roadmap, exercises, downloads,
        and certification support.
      </p>

    </div>

    {/* FAQ LIST */}
    <div className="mt-16 space-y-5">

      {[
        {
          question: "Do I need accounting knowledge before starting?",
          answer:
            "No. The LMS roadmap starts from absolute basics including company creation, ledgers, vouchers, and accounting workflows.",
        },

        {
          question: "Will I get practice exercises and sample company data?",
          answer:
            "Yes. Every major module includes practical exercises, downloadable datasets, GST templates, and workflow simulations.",
        },

        {
          question: "Can I learn GST, payroll, and inventory together?",
          answer:
            "Absolutely. The roadmap is designed as a complete business accounting workflow covering GST, payroll, banking, inventory, and reports.",
        },

        {
          question: "Is this suitable for job preparation?",
          answer:
            "Yes. The LMS includes real-world accounting scenarios, hands-on labs, invoice exercises, and business reporting workflows used in companies.",
        },

        {
          question: "Do you provide certification guidance?",
          answer:
            "Yes. We help learners prepare for Tally certifications and provide guidance for practical business accounting implementation.",
        },

      ].map((faq, index) => (

        <details
          key={index}
          className="
            group
            rounded-[28px]
            border border-[#E2E8F0]
            bg-[#F8FAFC]/70
            backdrop-blur-xl
            p-5 sm:p-7 md:p-8
            hover:border-[#CBD5E1]
            hover:shadow-[0_15px_50px_rgba(37,99,235,0.08)]
            transition-all duration-500
          "
        >

          <summary className="
            flex items-center justify-between
            cursor-pointer
            list-none
          ">

            <h3 className="
              text-[15px] sm:text-base md:text-lg
              font-bold
              text-[#0F172A]
              pr-8
            ">
              {faq.question}
            </h3>

            <div className="
              flex items-center justify-center
              w-11 h-11
              rounded-2xl
              bg-gradient-to-br from-[#2563EB] to-[#7C3AED]
              text-white
              shrink-0
              transition-transform duration-500
              group-open:rotate-45
            ">
              <Plus className="w-5 h-5" />
            </div>

          </summary>

          <div className="
            overflow-hidden
            transition-all duration-500
          ">

            <p className="
              pt-6
              text-[#64748B]
              leading-8
              text-[15px]
              sm:text-[16px]
              md:text-[17px]
              max-w-4xl
            ">
              {faq.answer}
            </p>

          </div>

        </details>

      ))}

    </div>

  </div>

</section>
</>
  )
}
