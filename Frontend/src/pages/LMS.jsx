import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence, easeOut } from "framer-motion";
import lmsHero from "../assets/lmshero.png"
import lms from "../assets/lms.png"
import {
  Play, Link2, Box, Sparkles, Clock3, FlaskConical,ArrowRight, FolderDown, NotebookPen, Download,
  FileText, FileSpreadsheet, Database, FileArchive, MonitorPlay, Globe, Plus,
  BookOpen, Receipt, Users, PlayCircle, BadgePercent, ReceiptText, Package, Wallet, FolderArchive,
  Boxes, BadgeCheck, BriefcaseBusiness, Building2, CheckCircle, Briefcase, BarChart3, ClipboardCheck,
  ChevronDown
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

  const navigate = useNavigate();

  const roadmapData = [
  {
    step: "01",
    slug: "basics-ledgers",
    level: "Beginner",
    title: "Basics & Ledgers",
    description:
      "Learn company creation, ledgers, voucher entries, journals, and accounting fundamentals.",
    time: "3–4 Hours",
    image: basicsImg,
  },

  {
    step: "02",
    slug: "gst-taxation",
    level: "Intermediate",
    title: "GST & Taxation",
    description:
      "Master GST configuration, invoices, returns, debit notes, and compliance workflows.",
    time: "6–8 Hours",
    image: gstImg,
  },

  {
    step: "03",
    slug: "inventory-stock",
    level: "Intermediate",
    title: "Inventory & Stock",
    description:
      "Understand stock items, godowns, batching, reorder levels, and manufacturing basics.",
    time: "4–6 Hours",
    image: inventoryImg,
  },

  {
    step: "04",
    slug: "payroll-management",
    level: "Advanced",
    title: "Payroll Management",
    description:
      "Learn employee setup, salary structures, PF/ESI deductions, and payroll processing.",
    time: "5–7 Hours",
    image: payrollImg,
  },

  {
    step: "05",
    slug: "reports-mis",
    level: "Advanced",
    title: "Reports & MIS",
    description:
      "Generate profit & loss reports, balance sheets, ratio analysis, and MIS dashboards.",
    time: "4–5 Hours",
    image: reportsImg,
  },

  {
    step: "06",
    slug: "advanced-tallyprime",
    level: "Expert",
    title: "Advanced TallyPrime",
    description:
      "Security controls, multi-company workflows, backup & restore, and advanced customization.",
    time: "6–9 Hours",
    image: advancedImg,
  },
];

const resources = [
  {
    title: "Official Tally Resources",
    description:
      "Explore official product documentation, learning materials, certifications, and support resources directly from Tally.",

    points: [
      "Official Documentation",
      "Learning & Certification",
      "Support Knowledge Base",
    ],

    icon: BookOpen,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    lineColor: "bg-blue-500",

    shadowColor:
  "hover:shadow-[0_15px_40px_rgba(59,130,246,0.18)]",

    buttonText: "Official Resources",
    buttonClass:
      "bg-blue-50 text-blue-600 hover:bg-blue-100",

    link: "https://tallysolutions.com",
  },

  {
    title: "Video Tutorials",
    description:
      "Learn through step-by-step video tutorials covering accounting, GST, inventory management, payroll, and business workflows.",

    points: [
      "Beginner Friendly",
      "Practical Examples",
      "Complete Playlists",
    ],

    icon: PlayCircle,
    iconBg: "bg-red-50",
    iconColor: "text-red-500",
    lineColor: "bg-red-500",

    shadowColor:
  "hover:shadow-[0_15px_40px_rgba(239,68,68,0.18)]",

    buttonText: "Watch Tutorials",
    buttonClass:
      "bg-red-50 text-red-500 hover:bg-red-100",

    link: "https://www.youtube.com/results?search_query=tally+prime+tutorial",
  },

  {
    title: "Guides & Documentation",
    description:
      "Access tutorials, knowledge articles, quick references, and detailed documentation to improve your understanding.",

    points: [
      "Step-by-Step Guides",
      "Reference Articles",
      "Quick Learning Notes",
    ],

    icon: FileText,
    iconBg: "bg-slate-100",
    iconColor: "text-slate-700",
    lineColor: "bg-slate-500",

    shadowColor:
  "hover:shadow-[0_15px_40px_rgba(100,116,139,0.18)]",

    buttonText: "View Guides",
    buttonClass:
      "bg-slate-100 text-slate-700 hover:bg-slate-200",

    link: "https://help.tallysolutions.com",
  },

  {
    title: "GST & Compliance",
    description:
      "Stay updated with GST compliance, tax filing procedures, and government resources relevant to business accounting.",

    points: [
      "GST Portal Access",
      "Return Filing Help",
      "Compliance Updates",
    ],

    icon: BadgeCheck,
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
    lineColor: "bg-green-500",

    shadowColor:
  "hover:shadow-[0_15px_40px_rgba(34,197,94,0.18)]",

    buttonText: "GST Resources",
    buttonClass:
      "bg-green-50 text-green-600 hover:bg-green-100",

    link: "https://www.gst.gov.in",
  },

  {
    title: "Practice Materials",
    description:
      "Download sample company data, exercises, worksheets, and practice files to build hands-on experience.",

    points: [
      "Sample Data Files",
      "Practice Exercises",
      "Learning Worksheets",
    ],

    icon: Download,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    lineColor: "bg-purple-500",

    shadowColor:
  "hover:shadow-[0_15px_40px_rgba(168,85,247,0.18)]",

    buttonText: "Download Files",
    buttonClass:
      "bg-purple-50 text-purple-600 hover:bg-purple-100",

    link: "https://tallysolutions.com/download",
  },
];

const practiceExercises = [
  {
    slug: "company-setup",
    level: "Level 01",
    title: "Company Setup & Opening Balances",
    description:
      "Create a new company, set financial year, create primary ledgers and enter opening balances. Generate a trial balance.",
    difficulty: "Beginner",
    duration: "30-45 mins",
    icon: Building2,
    color: "blue",
  },
  {
    slug: "gst-invoice-return",
    level: "Level 02",
    title: "GST Invoice & Return",
    description:
      "Create GST compliant invoices, post sales & purchases, generate GSTR reports and reconcile data.",
    difficulty: "Intermediate",
    duration: "60-90 mins",
    icon: ReceiptText,
    color: "purple",
  },
  {
    slug: "inventory-stock",
    level: "Level 03",
    title: "Inventory Movement",
    description:
      "Configure stock items, manage godowns, stock journals and inventory valuation reports.",
    difficulty: "Intermediate",
    duration: "45-60 mins",
    icon: Package,
    color: "indigo",
  },
  {
    slug: "payroll-management",
    level: "Level 04",
    title: "Payroll Month End",
    description:
      "Create employees, assign salary structures and generate payslips.",
    difficulty: "Advanced",
    duration: "60 mins",
    icon: Wallet,
    color: "orange",
  },
];

const styles = {
  default: {
    dot: "from-[#155A96] to-[#1D6FB8]",
    badge: "bg-[#EAF3F8] text-[#155A96]",
    border: "border-[#155A96]",
    activeBg: "from-[#F4F8FB] to-white",
  },
};

const downloads = {
  software: {
    title: "TallyPrime Software",
    description:
      "Download the latest TallyPrime installer with official updates and business management features.",
    button: "Download Tally",
    link: "https://tallysolutions.com",
  },

  guides: {
    title: "Cheat Sheets & Guides",
    description:
      "GST workflows, voucher shortcuts, accounting references and quick learning PDFs.",
    button: "Download Guides",
    link: "https://tallysolutions.com/download/",
  },

  sampleData: {
    title: "Sample Company Data",
    description:
      "Practice datasets containing companies, ledgers, vouchers and GST transactions.",
    button: "Get Sample Data",
    link: "https://tallysolutions.com/",
  },
};

const careerRoles = [
  {
    title: "Accounts Executive",
    level: "Entry Level",
    salary: "₹2L - ₹4L",
    icon: Briefcase,
    color: "blue",
    description:
      "Manage ledgers, vouchers, bank reconciliation and daily accounting operations.",
  },
  {
    title: "GST Executive",
    level: "Intermediate",
    salary: "₹2.5L - ₹5L",
    icon: ReceiptText,
    color: "purple",
    description:
      "Handle GST filing, compliance reporting, invoices and tax documentation.",
  },
  {
    title: "MIS Analyst",
    level: "Intermediate",
    salary: "₹3L - ₹6L",
    icon: BarChart3,
    color: "emerald",
    description:
      "Generate reports, business insights and data analysis for management.",
  },
  {
    title: "Payroll Executive",
    level: "Advanced",
    salary: "₹3L - ₹5.5L",
    icon: Wallet,
    color: "orange",
    description:
      "Manage employee salaries, statutory deductions and payroll processing.",
  },
];

const [openExercise, setOpenExercise] = useState(0);

  return (
    <>

    <div className="overflow-hidden">
    {/* ================= LMS HERO SECTION ================= */}
<section className=" 
relative
overflow-hidden
scrollbar-hide
bg-white
pt-20 sm:pt-24 lg:pt-24
pb-10 sm:pb-12 md:pb-14
">

<div
  className="
    hidden lg:block
    absolute
    top-0
    left-1/2
    -translate-x-1/2
    w-[700px]
    h-[700px]
    bg-[#155A96]/5
    blur-[150px]
    rounded-full
  "
/>
  <div className="
    relative z-10
    max-w-7xl mx-auto
    px-4 sm:px-6
  ">

    <div className="
      grid lg:grid-cols-2
      gap-8 lg:gap-12
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
          text-[#155A96]
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
            text-3xl
            sm:text-4xl
            lg:text-[48px]
            font-black
            font-bold
            leading-[1.1]
            tracking-[-1px]
            text-[#071426]
            
            max-w-full

        ">
          Complete TallyPrime LMS-
          <span className="text-[#155A96]">
            From Basics To Payroll & GST
          </span>
        </h1>

        {/* DESCRIPTION */}
        <p className="
          mt-5
          text-[15px]
          sm:text-[16px]
          md:text-[17px]
          leading-8
          sm:leading-9
          text-slate-600
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
            px-5 sm:px-7
            py-3
            text-base
            rounded-2xl
            bg-[#155A96]
            hover:bg-[#0F4D82]
            text-white
            font-semibold
            shadow-[0_20px_50px_rgba(21,90,150,0.20)]
            hover:scale-[1.03]
            transition-all duration-300
            flex items-center gap-3
          "
        >
          <Play size={20} fill="white" />
          Start Learning
        </button>

                  {/* SECONDARY BUTTON */}
                  <a href="#resourses">
                  <button
          className="
          w-full
          sm:w-auto
          justify-center
          px-5 sm:px-7
          py-3
          text-base
          rounded-2xl
          border border-[#155A96]/15
          bg-white/10
          backdrop-blur-xl
          text-black
          font-semibold
          hover:bg-white/15
          transition-all duration-300
          flex items-center gap-3
        "
        >
          <Link2 size={20} />
          Free Resources
        </button>
        </a>

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
        <div
  className="
    bg-white
    border border-slate-200
    rounded-[28px]
    p-6
    shadow-sm
    w-full
    max-w-full
    sm:max-w-[500px]
  "
>
  <div className="flex items-center justify-between mb-5">

    <div>
      <p className="text-xs uppercase tracking-wider text-[#155A96] font-semibold">
        Course Snapshot
      </p>

      <h3 className="mt-2 text-2xl font-bold text-[#071426]">
        TallyPrime LMS
      </h3>
    </div>

    <div
      className="
        px-3 py-2
        rounded-xl
        bg-[#EEF4F8]
        text-[#155A96]
        text-sm
        font-medium
      "
    >
      Beginner → Advanced
    </div>

  </div>

  <div className="flex flex-wrap gap-2 mb-6">

    {[
      "Accounting",
      "GST",
      "Inventory",
      "Payroll",
      "Banking",
      "Reports",
    ].map((topic) => (
      <span
        key={topic}
        className="
          px-3 py-1.5
          rounded-full
          bg-[#F8FAFC]
          border border-slate-200
          text-sm
          text-slate-700
        "
      >
        {topic}
      </span>
    ))}

  </div>

  <div className="grid grid-cols-3 gap-3 mb-6">

    <div className="text-center p-4 rounded-2xl bg-[#F8FAFC]">
      <h4 className="text-2xl font-bold text-[#071426]">
        40+
      </h4>

      <p className="text-xs text-[#64748B]">
        Modules
      </p>
    </div>

    <div className="text-center p-4 rounded-2xl bg-[#F8FAFC]">
      <h4 className="text-2xl font-bold text-[#071426]">
        120+
      </h4>

      <p className="text-xs text-[#64748B]">
        Videos
      </p>
    </div>

    <div className="text-center p-4 rounded-2xl bg-[#F8FAFC]">
      <h4 className="text-2xl font-bold text-[#071426]">
        25+
      </h4>

      <p className="text-xs text-[#64748B]">
        Assignments
      </p>
    </div>

  </div>

  <div className="flex flex-wrap gap-3">

    <button 
    onClick={() =>
            window.open(
              "https://tallysolutions.com/",
              "_blank"
            )
          }
      className="
        px-5 py-3
        rounded-xl
        bg-[#155A96]
        hover:bg-[#0F4D82]
        text-white
        font-medium
      "
    >
      Tally Official
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
        rounded-xl
        border border-slate-200
        text-[#071426]
        font-medium
      "
    >
      YouTube Tutorials
    </button>

  </div>
</div>

      </div>
      </motion.div>

    </div>
  </div>
</section>

{/* ================= WHY LEARN TALLY ================= */}
<section className="relative py-10 sm:py-12 md:py-12 px-4 sm:px-6 bg-white overflow-hidden">
  {/* BACKGROUND GLOW */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] h-[350px]
sm:w-[500px] sm:h-[500px]
lg:w-[700px] lg:h-[700px] bg-[#155A96]/5 blur-[150px] rounded-full"/>

  <div className="max-w-7xl mx-auto relative z-10">

    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

      {/* LEFT SIDE */}
      <div>

        <span className="
        inline-flex 
        items-center
        px-3 py-1.5
        rounded-full
        bg-[#EEF4FF]
        text-[#155A96]
        font-medium
        text-sm">
          About TallyPrime
        </span>

        <h2 className="
        mt-6
        text-2xl
sm:text-3xl
md:text-4xl
        font-bold
        text-[#071426]
        leading-tight">
          Why Learn
          <span className="text-[#155A96]">
            {" "}TallyPrime?
          </span>
        </h2>
        <p className="
        mt-4
text-[15px]
        text-slate-600
        leading-relaxed">
          TallyPrime (previously Tally.ERP) is the leading accounting & business management software used
          widely by SMEs and Enterprises. Learn how to manage books perform GST compliance, control inventory
          and process payroll - all within one powerful platform.
        </p>

        {/* LEARNING OUTCOMES */}
        <div className="mt-6 grid sm:grid-cols-2 gap-4">

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#EEF4FF] flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-[#071426]" /> 
            </div>
            <span className="font-medium text-[#071426] text-sm sm:text-base">
              Accounting & BookKeeping
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#EEF4FF] flex items-center justify-center">
              <Receipt className="w-4 h-4 text-[#071426]" />
            </div>
            <span className="font-medium text-[#071426] text-sm sm:text-base">
              GST & TAX compliance
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#EEF4FF] flex items-center justify-center">
              <Boxes className="w-4 h-4 text-[#071426]" />
            </div>
            <span className="font-medium text-[#071426] text-sm sm:text-base">
              Inventory & Stock Management
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#EEF4FF] flex items-center justify-center">
              <Users className="w-4 h-4 text-[#071426]" />
            </div>
            <span className="font-medium text-[#071426] text-sm sm:text-base">
              Payroll Processing
            </span>
          </div>
        </div>
      </div>
      {/* RIGHT SIDE */}

      <div className="
      rounded-3xl sm:rounded-[32px]
      overflow-hidden
      border border-slate-200
      bg-white/ 70
      shadow-sm">

        {/* CONTENT */}
        <div className="p-5 sm:p-6">
          <h3 className="
            text-xl sm:text-2xl
            font-bold
            text-[#071426]
            mb-4"
            >
              Who can Learn?
          </h3>
          <p className="
          text-slate-600
          leading-relaxed
          mb-8">
            Our training programs are designed for beginners as well as professionals looking to strengthen
            their accounting and business management skills.
          </p>
          {/* TARGET AUDIENCE LIST */}
          <div className="flex flex-wrap gap-3 mb-6">

            <span className="px-3 py-1.5 text-sm rounded-full bg-[#F8FAFC] border border-slate-200">
              Students
            </span>

            <span className="px-3 py-1.5 text-sm rounded-full bg-[#F8FAFC] border border-slate-200">
              Accountants
            </span>

            <span className="px-3 py-1.5 text-sm rounded-full bg-[#F8FAFC] border border-slate-200">
              Business Owners
            </span>

            <span className="px-3 py-1.5 text-sm rounded-full bg-[#F8FAFC] border border-slate-200">
              Finance Professionals
            </span>

          </div>
          {/* BENEFITS */}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">

            <div className="text-center">
              <BadgeCheck className="mx-auto mb-3 text-[#155A96]"/>
              <p className="font-medium text-sm">
                No Prior Experience Needed
              </p>
            </div>

            <div className="text-center">
              <BriefcaseBusiness className="mx-auto mb-3 text-[#155A96]"/>
              <p className="font-medium text-sm">
                Practical Exercises
              </p>
            </div>

            <div className="text-center">
              <Building2 className="mx-auto mb-3 text-[#155A96]"/>
              <p className="font-medium text-sm">
                Industry-Relevant Training
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ================= LMS ROADMAP ================= */}
<section className="relative py-10 sm:py-12 md:py-12 overflow-hidden bg-[#FAFBFC]">

  
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

    {/* SECTION HEADER */}
    <div className="text-center max-w-3xl mx-auto mb-6">

      <div className="
        inline-flex items-center gap-2
        px-5 py-1
        rounded-full
        border border-[#D7E5EF]
        bg-[#EEF4F8]
        text-[#155A96]
        text-sm font-semibold
        shadow-sm
      ">
        <Sparkles className="w-4 h-4" />
        Interactive Learning Journey
      </div>

      <h2 className="
        mt-4
        text-2xl
        sm:text-3xl
        md:text-4xl
        font-black
        tracking-tight
        text-[#0F172A]
        leading-tight
      ">
        Master TallyPrime{" "}
        <span className="text-[#155A96]">
          Step By Step
        </span>
      </h2>

      <p className="
        mt-4
text-[14px]
sm:text-[15px]
leading-8
      ">
        A structured roadmap designed to take you from accounting
        fundamentals to advanced GST, payroll, inventory, and reporting workflows.
      </p>

    </div>

    {/* ROADMAP GRID */}
    <div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">

      {roadmapData.map((item, index) => (

        <div
          key={index}
          className="
            group
            relative
            rounded-2xl
            border border-[#D7E5EF]
            bg-white
            overflow-hidden
            shadow-[0_10px_40px_rgba(15,23,42,0.05)]
            hover:-translate-y-2
            hover:shadow-[0_25px_70px_rgba(21,90,150,0.10)]
            transition-all duration-500
          "
        >

          {/* STEP NUMBER */}
          <div className="
            absolute top-5 right-5
            text-3xl
            font-black
            text-[#D7E5EF]
            select-none
          ">
            {item.step}
          </div>

          {/* IMAGE */}
          <div className="relative h-[150px] sm:h-[170px] overflow-hidden">

            <img
  src={item.image}
  alt={item.title}
  className="
    w-full
    h-full
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
              px-3 py-1.5
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
          <div className="p-4 sm:p-5">

            <h3 className="
              text-lg
              sm:text-xl
              font-black
              text-[#0F172A]
              leading-snug
            ">
              {item.title}
            </h3>

            <p className="
              mt-3
              text-sm
              leading-6
              text-[#64748B]
            ">
              {item.description}
            </p>

            {/* TAGS */}
            <div className="
              mt-5
              flex flex-wrap gap-3
            ">

              {/* TIME */}
              <div className="
                flex items-center gap-2
                px-3 py-1.5
                rounded-full
                bg-[#EEF4F8]
                text-[#155A96]
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
                bg-[#EEF4F8]
                text-[#155A96]
                text-xs
                font-semibold
              ">
                <FlaskConical className="w-4 h-4" />
                Hands-on Labs
              </div>

            </div>

            {/* CTA */}
            <Link
              to={`/courses/${item.slug}`}
              className="
                mt-5
                inline-flex
                items-center
                gap-2
                text-[#155A96]
                font-bold
                group-hover:gap-4
                transition-all duration-300
              "
            >
              Start Module
              <ArrowRight className="w-5 h-5" />
            </Link>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>


{/* ================= LEARNING RESOURCES ================= */}
<section id="resourses" className="relative py-10 md:py-12 px-4 sm:px-6 bg-[#F8FAFC] overflow-hidden">

  {/* BACKGROUND GLOW */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#2F80FF]/5 blur-[150px] rounded-full" />

  <div className="max-w-7xl mx-auto relative z-10">

    {/* SECTION HEADER */}
    <div className="text-center max-w-3xl mx-auto mb-6">

      <span
        className="
          inline-flex
          items-center
          px-4 py-2
          rounded-full
          border border-[#D7E5EF]
          bg-[#EEF4F8]
          text-[#155A96]
          font-medium
          text-sm
        "
      >
        Learning Resources
      </span>

      <h2
        className="
          mt-4
          text-2xl
          sm:text-3xl
          md:text-4xl
          font-bold
          text-[#071426]
        "
      >
        Trusted Learning Resources
      </h2>

      <p
        className="
          mt-4
          text-slate-600
          text-base
          sm:text-lg
          leading-relaxed
        "
      >
        Access trusted tutorials, documentation, government resources,
        and practice materials to strengthen your TallyPrime knowledge.
      </p>

    </div>

    {/* RESOURCE HUB */}
<div
  className="
    max-w-6xl
    mx-auto
    grid
    grid-cols-1
    md:grid-cols-3
    gap-5
  "
>
  {resources.map((item, index) => (
    <a
      key={index}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group
        relative
        overflow-hidden
        rounded-[28px]
        border border-[#D7E5EF]
        bg-white
        p-5 sm:p-6
        transition-all duration-500
        hover:-translate-y-2
        hover:shadow-[0_20px_60px_rgba(21,90,150,0.08)]

        ${
          index === 0
            ? "md:col-span-2 md:row-span-1"
            : ""
        }
      `}
    >

      {/* ICON */}
      <div
        className="
          w-14 h-14
          rounded-2xl
          bg-[#EEF4F8]
          flex items-center justify-center
          mb-4
        "
      >
        <item.icon
          className="
            w-7 h-7
            text-[#155A96]
          "
        />
      </div>

      {/* TITLE */}
      <h3
        className="
          text-[22px]
          sm:text-[24px]
          font-bold
          text-[#071426]
          mb-4
        "
      >
        {item.title}
      </h3>

      {/* DESCRIPTION */}
      <p
        className="
          text-[#64748B]
          leading-7
          text-[15px]
          sm:text-base
          mb-6
        "
      >
        {item.description}
      </p>

      {/* CTA */}
      <div
        className="
          flex items-center
          gap-2
          text-[#155A96]
          font-semibold
          group-hover:gap-4
          transition-all duration-300
        "
      >
        Explore Resource

        <ArrowRight
          className="
            w-5 h-5
          "
        />
      </div>

      {/* HOVER ACCENT */}
      <div
        className="
          absolute
          bottom-0
          left-0
          h-[4px]
          w-0
          bg-[#155A96]
          transition-all duration-500
          group-hover:w-full
        "
      />

    </a>
  ))}
</div>
  </div>
</section>

{/* ================= PRACTICE Exercise GRID ================= */}
<section id="practice-cards" className="py-10 bg-white">

  <div className="max-w-6xl mx-auto px-6">

    {/* Header */}
    <div className="text-center mb-12">

      <span
        className="
          inline-flex
          items-center
          px-4 py-2
          rounded-full
          bg-[#EAF3F8]
          text-[#155A96]
          text-sm
          font-medium
        "
      >
        Practice Lab
      </span>

      <h2
        className="
          mt-5
          text-2xl
          sm:text-3xl
          md:text-4xl
          font-bold
          text-[#071426]
        "
      >
        Hands-On Practice Lab
      </h2>

      <p
        className="
          mt-4
          text-slate-600
          text-base
          sm:text-lg
          leading-relaxed
        "
      >
        Apply your knowledge with real-world accounting,
        GST, inventory and payroll scenarios.
      </p>

    </div>

    {/* Accordion */}

    <div className="relative">

      {practiceExercises.map((exercise, index) => {

        console.log("Exercise:", exercise);
  console.log("Slug:", exercise.slug);

  const current = styles.default;
  const Icon = exercise.icon;

  return (

        <div
          key={index}
          className="relative pl-12 pb-8"
        >

          {/* Timeline line */}

          {index !== practiceExercises.length - 1 && (
            <div
              className="
                absolute
                left-[15px]
                top-10
                w-[2px]
                h-full
                bg-slate-200
              "
            />
          )}

          {/* Circle */}

          <div
            className="
              absolute
              left-0
              top-2
              w-10 h-10
              rounded-full
              bg-[#155A96]
              text-white
              flex
              items-center
              justify-center
              font-bold
              shadow-lg
            "
          >
            {index + 1}
          </div>

          {/* Card */}

        <div
            className={`
              rounded-3xl
              overflow-hidden
              border
              border-slate-200
              transition-all
              duration-500

              ${
                openExercise === index
                  ? `border-l-4 ${current.border} bg-[#F4F8FB] ${current.activeBg}`
                  : "bg-white"
              }

              hover:shadow-xl
            `}
          >

            {/* Header */}

            <button
              onClick={() =>
                setOpenExercise(
                  openExercise === index ? null : index
                )
              }
              className="
                w-full
                flex
                items-center
                justify-between
                text-left
                p-6
              "
            >

              <div className="flex items-start gap-4">

                <div
                  className={`
                    w-14 h-14
                    rounded-2xl
                    flex items-center justify-center
                    ${current.badge}
                  `}
                >
                  <Icon size={28} />
                </div>

                <div>

                  <span
                    className="
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[2px]
                      text-[#155A96]
                    "
                  >
                    {exercise.level}
                  </span>

                  <h3
                    className="
                      mt-2
                      text-lg
                      sm:text-xl
                      font-bold
                      text-[#071426]
                    "
                  >
                    {exercise.title}
                  </h3>

                </div>

              </div>

              <div
                className={`
                  transition-transform duration-300
                  ${
                    openExercise === index
                      ? "rotate-180"
                      : ""
                  }
                `}
              >
                <ChevronDown size={20} 
                className={`
                  transition-transform duration-300
                  ${openExercise === index ? "rotate-180" : ""}
                `} />
              </div>

            </button>

            {/* Content */}

            {openExercise === index && (

              <div
                className="
                  px-5
                  pb-5
                  border-t
                  border-slate-100
                "
              >

                <p
                  className="
                    mt-4
                    text-slate-600
                    leading-relaxed
                  "
                >
                  {exercise.description}
                </p>

                <div
                  className="
                    mt-5
                    flex
                    flex-wrap
                    gap-3
                  "
                >

                  <span
                    className={`
                      px-4 py-2
                      rounded-full
                      text-[#155A96]
                      text-sm
                      font-medium
                      ${current.badge}
                    `}
                  >
                    ● {exercise.difficulty}
                  </span>

                  <span
                    className="
                      px-4 py-2
                      rounded-full
                      bg-slate-100
                      text-slate-600
                      text-sm
                      font-medium
                    "
                  >
                    ⏱ {exercise.duration}
                  </span>
        
                </div>
                
                <button
                onClick={() =>
                  navigate(`/lms/${exercise.slug}`)
                }
                  className="
                    mt-4
                    flex
                    items-center
                    gap-2
                    text-[#155A96]
                    hover:text-[#0F4E82]
                    font-semibold
                    hover:gap-4
                    transition-all
                  "
                >
                  Start Exercise →

                </button>

              </div>

            )}

          </div>

        </div>

      );
})}

    </div>

  </div>

</section>

{/* ================= DOWNLOAD MATERIALS ================= */}
<section className="py-10 md:py-12 px-4 sm:px-6 bg-[#F8FAFC]">
  <div className="max-w-7xl mx-auto px-6">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#155A96]/5 blur-[150px] rounded-full" />


    {/* Header */}
    <div className="text-center max-w-3xl mx-auto mb-8">

      <span
        className="
          inline-flex
          items-center
          px-4 py-2
          rounded-full
          bg-[#EAF3F8]
          text-[#155A96]
          text-sm
          font-medium
        "
      >
        Downloads
      </span>

      <h2
        className="
          mt-4
          text-3xl
          md:text-4xl
          font-bold
          text-[#071426]
        "
      >
        Download Center
      </h2>

      <p
        className="
          mt-4
          text-slate-600
          text-lg
          leading-relaxed
        "
      >
        Everything you need to practice, learn, and master TallyPrime.
      </p>

    </div>

    {/* Layout */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">

      {/* Featured Download */}
      <div
          className="
            flex-1
            rounded-[28px]
            border
            border-slate-200
            bg-white
            p-4
            hover:shadow-xl
            transition-all
          "
        >

          <div
            className="
              w-10 h-10
              rounded-2xl
              bg-[#F4F8FB]
              flex
              items-center
              justify-center
            "
          >
            <Download
              size={24}
              className="text-[#155A96]"
            />
          </div>

          <h3
            className="
              mt-4
              text-lg
              font-bold
              text-[#071426]
            "
          >
            {downloads.software.title}
          </h3>

          <p
            className="
              mt-3
              text-slate-600
              text-sm leading-6
            "
          >
            {downloads.software.description}
          </p>

          <a
            href={downloads.software.link}
            className="
              mt-4
              inline-flex
              items-center
              gap-2
              font-semibold
              text-[#155A96]
            "
          >
            {downloads.software.button}
            <ArrowRight size={18} />
          </a>

        </div>

        {/* Guides */}
        <div
          className="
            flex-1
            rounded-[28px]
            border
            border-slate-200
            bg-white
            p-4
            hover:shadow-xl
            transition-all
          "
        >

          <div
            className="
              w-10 h-10
              rounded-2xl
              bg-[#F4F8FB]
              flex
              items-center
              justify-center
            "
          >
            <FileText
              size={24}
              className="text-[#155A96]"
            />
          </div>

          <h3
            className="
              mt-4
              text-lg
              font-bold
              text-[#071426]
            "
          >
            {downloads.guides.title}
          </h3>

          <p
            className="
              mt-3
              text-slate-600
              text-sm leading-6
            "
          >
            {downloads.guides.description}
          </p>

          <a
            href={downloads.guides.link}
            className="
              mt-4
              inline-flex
              items-center
              gap-2
              font-semibold
              text-[#155A96]
            "
          >
            {downloads.guides.button}
            <ArrowRight size={18} />
          </a>

        </div>

        {/* Sample Data */}
        <div
          className="
            flex-1
            rounded-[28px]
            border
            border-slate-200
            bg-white
            p-4
            hover:shadow-xl
            transition-all
          "
        >

          <div
            className="
              w-10 h-10
              rounded-2xl
              bg-[#F4F8FB]
              flex
              items-center
              justify-center
            "
          >
            <FolderArchive
              size={24}
              className="text-[#155A96]"
            />
          </div>

          <h3
            className="
              mt-4
              text-lg
              font-bold
              text-[#071426]
            "
          >
            {downloads.sampleData.title}
          </h3>

          <p
            className="
              mt-3
              text-slate-600
              text-sm leading-6
            "
          >
            {downloads.sampleData.description}
          </p>

          <a
            href={downloads.sampleData.link}
            className="
              mt-4
              inline-flex
              items-center
              gap-2
              font-semibold
              text-[#155A96]
            "
          >
            {downloads.sampleData.button}
            <ArrowRight size={18} />
          </a>

        </div>

      <div
    className="
      rounded-2xl
      border border-slate-200
      bg-white
      p-4
      hover:shadow-xl
      transition-all
    "
  >
    <div
      className="
        w-10 h-10
        rounded-xl
        bg-[#F4F8FB]
        flex items-center justify-center
        mb-4
      "
    >
      <ClipboardCheck
        size={20}
        className="text-[#155A96]"
      />
    </div>

    <h3
      className="
        text-lg
        font-bold
        text-[#071426]
        mb-2
      "
    >
      Practice Worksheets
    </h3>

    <p
      className="
        text-sm
        text-slate-600
        leading-6
        mb-4
      "
    >
      Test your TallyPrime knowledge with practical exercises,
      worksheets, and real-world accounting scenarios.
    </p>

    <a
      href="#practice-cards"
      className="
        inline-flex
        items-center
        gap-2
        text-[#155A96]
        font-semibold
      "
    >
      Start Practice →
    </a>
  </div>

    </div>

  </div>
</section>

{/* ================= CAREER PATH ================= */}
<section className="py-10 md:py-12 px-4 sm:px-6 bg-[#F8FAFC]">
  <div className="container mx-auto px-6">

    <div className="text-center max-w-4xl mx-auto mb-8">
      <span className="inline-flex px-4 py-2 rounded-full bg-[#EAF3F8] text-[#155A96] text-sm font-medium">
        Career Opportunities
      </span>

      <h2 className="mt-4 text-3xl
          md:text-4xl font-bold text-[#071426]">
        Career Impact & Job Roles
      </h2>

      <p className="mt-4 text-lg text-slate-600 leading-relaxed">
        Build practical accounting skills and qualify for multiple
        finance and business operation roles across SMEs,
        retail, manufacturing and enterprise organizations.
      </p>
    </div>
    <div className="relative">

  

  <div className="grid lg:grid-cols-4 gap-6 relative">

    {careerRoles.map((role, index) => {
      const Icon = role.icon;

      return (
        <div
          key={index}
          className="
            group
            bg-white
            rounded-3xl
            border border-slate-200
            p-5
            text-center
            hover:-translate-y-2
            hover:shadow-2xl
            transition-all
            duration-300
          "
        >
          <div
            className="
              w-16 h-16
              mx-auto
              rounded-2xl
              bg-[#EEF4FF]
              flex items-center justify-center
              mb-4
            "
          >
            <Icon className="w-8 h-8 text-[#155A96]" />
          </div>

          <h3 className="text-xl font-bold text-[#071426]">
            {role.title}
          </h3>

          <span
            className="
              inline-flex
              mt-3
              px-4 py-2
              rounded-full
              bg-slate-100
              text-slate-600
              text-sm
            "
          >
            {role.level}
          </span>

          <p className="mt-4 text-slate-600 leading-relaxed">
            {role.description}
          </p>

          <div
            className="
              mt-5
              inline-flex
              px-4 py-2
              rounded-full
              bg-green-50
              text-green-700
              font-semibold
            "
          >
            {role.salary}
          </div>
        </div>
      );
    })}
  </div>
</div>
  </div>
</section>

{/* ================= FAQ SECTION ================= */}
<section className="py-10 sm:py-12 px-4 sm:px-6 bg-white">

  <div className="max-w-6xl mx-auto">

    {/* HEADING */}
    <div className="text-center max-w-3xl mx-auto">

      <span className="
        inline-flex items-center gap-2
        px-4 py-2
        rounded-full
        border border-[#155A96]
        bg-[#EAF3F8]
        text-sm font-semibold
        text-[#155A96]
      ">
        Learning Support
      </span>

      <h2 className="
        mt-4
        text-[30px]
        sm:text-4xl
        font-black
        leading-tight
        text-[#0F172A]
      ">
        Quick
        <span className="text-#155A96">
          {" "}Questions
        </span>
      </h2>

      <p className="
        mt-4
        text-[15px] md:text-[16px]
        leading-8
        text-[#64748B]
      ">
        Everything you need to know about the LMS,
        learning roadmap, exercises, downloads,
        and certification support.
      </p>

    </div>

    {/* FAQ LIST */}
    <div className="mt-8 grid md:grid-cols-2 gap-6">

      {[
        {
          category: "Learning",
          question: "Do I need accounting knowledge before starting?",
          answer:
            "No. The LMS roadmap starts from absolute basics including company creation, ledgers, vouchers, and accounting workflows.",
        },

        {
          category: "Practice",
          question: "Will I get practice exercises and sample company data?",
          answer:
            "Yes. Every major module includes practical exercises, downloadable datasets, GST templates, and workflow simulations.",
        },

        {
          category: "Learning",
          question: "Can I learn GST, payroll, and inventory together?",
          answer:
            "Absolutely. The roadmap is designed as a complete business accounting workflow covering GST, payroll, banking, inventory, and reports.",
        },

        {
          category: "Career",
          question: "Is this suitable for job preparation?",
          answer:
            "Yes. The LMS includes real-world accounting scenarios, hands-on labs, invoice exercises, and business reporting workflows used in companies.",
        },

        {
          category: "Certification",
          question: "Do you provide certification guidance?",
          answer:
            "Yes. We help learners prepare for Tally certifications and provide guidance for practical business accounting implementation.",
        },


      ].map((faq, index) => (

        <details
          key={index}
          className="
            group
            h-fit
            rounded-[25px]
            border border-[#E2E8F0]
            bg-[#F8FAFC]/70
            backdrop-blur-xl
            p-5 sm:p-7 md:p-8
            hover:border-[#CBD5E1]
            hover:shadow-[0_15px_50px_rgba(37,99,235,0.08)]
            transition-all duration-500
            "
        >

          <summary
            className="
              flex items-start justify-between
              gap-6
              cursor-pointer
              list-none
            "
          >

            {/* Left Content */}
            <div className="flex-1">

              <span
                className="
                  inline-flex
                  mb-3
                  px-3 py-1
                  rounded-full
                  bg-[#EEF4FF]
                  text-[#155A96]
                  text-xs
                  font-semibold
                "
              >
                {faq.category}
              </span>

              <h3
                className="
                  text-[15px]
                  sm:text-[18px]
                  font-bold
                  text-[#0F172A]
                  leading-snug
                "
              >
                {faq.question}
              </h3>

            </div>

            {/* Plus Button */}
            <div
              className="
                flex items-center justify-center
                w-12 h-12
                rounded-2xl
                bg-[#155A96]
                text-white
                shrink-0
                transition-transform
                duration-500
                group-open:rotate-180
              "
            >
              <ChevronDown className="w-5 h-5" />
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
              text-[12px]
              sm:text-[15px]
              md:text-[16px]
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
</div>
</>
  )
}
