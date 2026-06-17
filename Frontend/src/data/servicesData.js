import {
  User,
  Database,
  Smartphone,
  Puzzle,
  Cloud,
  ShieldCheck,
  Settings2,
  TrendingUp,
  User2,
  Users,
  ShieldUser,
  FileSearch,
  Headset,
  Handshake,
  CloudCog,
  DatabaseZap,
  GraduationCap,
  FileText,
  BadgeCheck,
  BarChart,
  WalletCards,
  BarChart3,
  Workflow,
  RefreshCcw,
  FileSpreadsheet,
  ReceiptText,
  HandCoins,
  Building2,
  GitBranch,
  Barcode,
  ListOrdered,
  PackageCheck,
  LineChart,
  Receipt,
  FileSignature,
  BellRing,
  Boxes,
} from "lucide-react";

export const services = [
    {
        title: "Tally Software",
        description: "Complete Tally solutions for accounting, GST, inventory, payroll, and business management.",
        icon: Database,
        path: "/services/tally-software"
    },
    {
        title: "Tally Services",
        description:"Professional support, implementation, migration and training services for businesses.",
        icon: ShieldCheck,
        path: "/services/tally-services",
    },
    {
        title: "Tally Apps For Mobile",
        description: "Access reports, inventory, and business insights securely from anywhere on mobile.",
        icon: Smartphone,
        path: "/services/tally-mobile",
    },
    {
        title: "Tally Solutions",
        description: "Tailor-made integrations and workflow automations designed for your operations.",
        icon: Puzzle,
        path: "/services/tally-solutions",
    },
    {
        title: "Tally ERP 9 Solutions",
        description: "Advanced ERP solutions for enterprise accounting, reporting, and multi-user management.",
        icon: TrendingUp,
        path: "/services/tally-erp",
    },
    {
        title: "Tally Add-Ons",
        description: "Powerful Tally add-ons for scalability. Seamless connectivity and secure operations in one platform",
        icon: Settings2,
        path: "/services/tally-addon",
    },

]

export const servicesData = [
  {
    slug: "tally-software",

    hero: {
      badge: "Business Accounting Solutions",

      title: "Tally Software",
      subtitle: " Smart Tally Software For Every Business",

      description:
        "Manage accounting, GST, inventory, payroll, banking, and business operations seamlessly with powerful Tally software solutions tailored for modern businesses.",

      primaryBtn: "Book Free Demo",
      primaryLink: "tel:+919849431943",
    },

    subServices: [

      // ================= TALLY PRIME SILVER =================

      {
        id: "tally-prime-silver",

        tab: "Tally Prime Silver",

        title: "Tally Prime Silver (Single-User)",

        icon: User,

        description:
          "TallyPrime Silver is a single-user edition designed for small businesses and individual users. This version allows seamless management of accounts, inventory, taxation, and other financial tasks on a single computer. With its intuitive interface and robust features, TallyPrime Silver is perfect for efficient and reliable business operations.",


        points: [
          "Simplified Accounting",
          "Comprehensive GST Support",
          "Inventory Management",
          "Banking Integration",
          "Data Security",
          "Customizable Reports",
        ],
      },

      // ================= TALLY PRIME GOLD =================

      {
        id: "tally-prime-gold",

        tab: "TallyPrime Gold",

        title: "TallyPrime Gold (Multi-User)",

        icon: Users,

        description:
          "TallyPrime Gold is the multi-user edition designed for businesses that require concurrent access to Tally across multiple systems within the same network. It is ideal for organizations with multiple departments or users, enabling seamless collaboration, data sharing, and efficient management of business operations.",

        points: [
          "Multi-User Access",
          "Comprehensive Inventory Management",
          "Efficient Collaboration",
          "Advanced Security Controls",
          "GST Compliance",
          "Real-Time Data Synchronization",
        ],
      },

      // ================= TVU =================

      {
        id: "tvu",

        tab: "TVU",

        title: "Tally Virtual User (TVU)",

        icon: ShieldUser,

        description:
          "The Tally Virtual User (TVU) License is a specially designed licensing option that allows businesses to access TallyPrime over a virtual environment. Ideal for remote work setups or businesses using cloud infrastructure, TVU licenses enable secure and efficient usage of Tally across diverse locations without compromising performance or data security.",

        points: [
          "Remote Accessibility",
          "Cost-Efficient Scalability",
          "Cloud Compatibility",
          "Multi-Device Support",
          "Enhanced Security",
          "Centralized Data Management",
        ],
      },

      // ================= ERP 9 =================

      {
        id: "tally-erp-9",

        tab: "Tally ERP 9",

        title: "Tally ERP 9 Solutions",

        icon: Database,

        description:
          "Tally.ERP 9 is a comprehensive business management software designed to streamline accounting, inventory, payroll, and taxation processes. It is a trusted solution for small to medium-sized businesses, offering advanced features to simplify operations, enhance compliance, and provide valuable insights for decision-making.",

        points: [
          "Complete Accounting Solutions",
          "Advanced Inventory Tracking",
          "Payroll Management",
          "GST & Tax Compliance",
          "Multi-Language Support",
          "Remote Access",
        ],
      },

      // ================= TSS =================

      {
        id: "tss",

        tab: "TSS",

        title: "Tally Software Services (TSS)",

        icon: ShieldCheck,

        description:
          "Tally Software Services (TSS) is a subscription-based service that ensures your TallyPrime software remains up-to-date with the latest features, security patches, and compliance updates. TSS offers access to a range of value-added services, including product support, data synchronization, and cloud access, helping businesses optimize their use of Tally software for smoother operations.",


        points: [
          "Latest Product Updates",
          "Cloud Access",
          "Product Support",
          "Remote Access",
          "Data Synchronization",
          "Enhanced Security",
        ],
      },

      // ================= AUDITOR EDITION =================

      {
        id: "auditors-edition",

        tab: "Auditors Edition",

        title: "TallyPrime Auditors Edition",

        icon: FileSearch,

        description:
          "TallyPrime Auditors Edition is a specialized version of TallyPrime designed to cater to the needs of auditors and tax professionals. It provides advanced features for auditing, compliance, and detailed financial analysis. This edition allows auditors to access client data securely, perform audits efficiently, and ensure complete compliance with regulatory standards.",


        points: [
          "Detailed Financial Reports",
          "Remote Access",
          "Tax Compliance",
          "Data Integrity",
          "Audit Trail",
          "Client Data Management",
        ],
      },
    ],

    cta: {
      badge: "Free Consultation",

      title: "Upgrade Your Business With Tally Solutions",

      description:
        "Connect with our experts to discover the right Tally software package tailored for your accounting and business management needs.",

      primaryBtn: "Enquire Now",
      primaryLink:"/contact",
      
      secondaryBtn: "Talk To Expert",
      secondaryLink: "tel:+919849431943",
    },
  },

  {
    slug: "tally-services",

    hero: {
      badge: "Business Support Services",

      title: "Tally Services",
      subtitle: "Expert Support & Business Assistance",

      description:
        "Get expert assistance for installation, migration, customization, AMC support, troubleshooting, and training services designed to keep your business operations running efficiently.",

      primaryBtn: "Book Free Demo",
      primaryLink: "tel:+919849431943",
    },

    subServices: [

      // ================= TALLY ON CLOUD =================

      {
        id: "tally-on-cloud",

        tab: "Tally On Cloud",

        title: "Simplify Business Operations with Tally on Cloud",

        icon: CloudCog,

        description:
          "Tally on Cloud is a revolutionary solution designed to make TallyPrime accessible from anywhere, anytime. By hosting Tally on a secure cloud platform, businesses can eliminate the need for traditional hardware and infrastructure while enjoying the flexibility and scalability of the cloud. This solution ensures secure data access, enhanced collaboration, and cost efficiency, making it an ideal choice for businesses of all sizes.",


        points: [
          "Anywhere, Anytime Accessibility",
          "Multi-User Collaboration",
          "Cost-Effective Solution",
          "Scalable and Flexible",
          "Enhanced Data Security",
          "Reduced IT Overhead",
        ],
      },
      // ================= TALLY SUPPORT =================

      {
        id: "tally-support",

        tab: "Tally Support",

        title: "Unparalleled Support for Seamless Business Operations",

        icon: Headset,

        description:
          "Support is the backbone of any successful business solution, and with Tally, you get top-notch assistance to ensure your operations run smoothly. Tally’s support services are designed to address your queries, resolve issues promptly, and provide expert guidance to maximize the efficiency of your business processes.",


        points: [
          "24/7 Assistance",
          "Regular Updates and Training",
          "Expert Guidance",
          "Custom Solutions",
          "On-Demand Troubleshooting",
          "Proactive Maintenance",
        ],
      },
      // ================= AMC =================

      {
        id: "amc",

        tab: "AMC",

        title: "Ensure Hassle-Free Operations with Tally Annual Maintenance Contract (AMC)",

        icon: Handshake,

        description:
          "Tally AMC (Annual Maintenance Contract) is designed to provide businesses with continuous support, timely updates, and uninterrupted access to Tally services. With a focus on proactive maintenance and expert assistance, AMC ensures your Tally system operates smoothly and remains up-to-date with the latest features and compliance requirements.",


        points: [
          "Regular Updates and Upgrades",
          "Data Security and Backup Support",
          "Priority Support",
          "Custom Solutions",
          "Proactive System Maintenance",
          "Cost-Effective and Time-Saving",
        ],
      },
      // ================= DATA SYNCHRONIZATION =================

      {
        id: "data-synchronization",

        tab: "Data Synchronization",

        title: "Streamline Business Operations with Tally Data Synchronization",

        icon: DatabaseZap,

        description:
          "Tally Data Synchronization ensures seamless sharing and updating of data across multiple locations, enabling businesses to operate efficiently and maintain consistency in their financial and operational records. This feature is ideal for businesses with distributed operations, ensuring that all users work with the latest and most accurate data.",


        points: [
          "Real-Time Data Updates",
          "Multi-Loacation Accessibility",
          "Centralized Control",
          "Offline Synchronization",
          "Secure Data Exchange",
          "Improved Efficiency",
        ],
      },
      // ================= TALLY TRAINING =================

      {
        id: "tally-training",

        tab: "Tally Training",

        title: "Empower Your Team with Tally Training",

        icon: GraduationCap,

        description:
          "Tally Training is designed to equip businesses and their teams with the skills and knowledge to use Tally solutions effectively. Whether you’re a beginner or an experienced user, comprehensive training programs ensure you unlock the full potential of Tally, driving efficiency and accuracy in your business operations.",


        points: [
          "Comprehensive Learning Modules",
          "Customizable Training Programs",
          "Hands-On Practice",
          "On-site and Online Options",
          "Expert Trainers",
          "Certification for Users",
        ],
      },
      // ================= INVOICE CUSTOMIZATION =================

      {
        id: "invoice-customization",

        tab: "Invoice Customization",

        title: "Billing Your Process with Tally Invoice Customization",

        icon: FileText,

        description:
          "Tally Invoice Customization enables businesses to create personalized invoices that reflect their brand identity and meet their specific operational needs. With the flexibility to design and modify invoice formats, this feature ensures that your billing process is both professional and efficient.",


        points: [
          "Brand Identity Integration",
          "Industry-Specific Templates",
          "Customizable Fields",
          "Language and Regional Adaptability",
          "Multiple Format Options",
          "Seamless Automation",
        ],
      },
      // ================= PRIORITY SUPPORT SERVICES =================

      {
        id: "priority-support-services",

        tab: "Priority Support Services",

        title: "Experience Seamless Assistance with Tally Priority Support Services",

        icon: BadgeCheck,

        description:
          "Tally Priority Support Services are designed to provide businesses with quick and dedicated assistance, ensuring uninterrupted operations and maximum efficiency. With a focus on delivering expert guidance and faster issue resolution, this service ensures your Tally experience remains smooth and hassle-free.",


        points: [
          "Dedicated Support",
          "24/7 Availability",
          "Faster Response Times",
          "Tailored Solutions",
          "Proactive Assistance",
          "Comprehensive Troubleshooting",
        ],
      },
    ],
      cta: {
      badge: "FREE CONSULTATION",

      title: "Need Expert Tally Service Assistance?",

      description:
        "Connect with our specialists for installation, customization, AMC support, migration, and cloud solutions tailored to your business needs.",

      primaryBtn: "Get Started",
      primaryLink:"/contact",

      secondaryBtn: "Talk To Expert",
      secondaryLink:"tel:+919849431943",
    },
  },

  {
    slug: "tally-mobile",

    hero: {
      badge: "Mobile Business Solutions",

      title: "Tally Mobile Apps",
      subtitle: "Access Your Business Anywhere",

      description:
        "Access reports, approvals, inventory, sales, and financial insights securely from your mobile device with powerful Tally-integrated mobile applications.",

      primaryBtn: "Book Free Demo",
      primaryLink: "tel:+919849431943",
    },

    subServices: [

      // ================= BIZANALYST FOR TALLY =================

      {
        id: "bizanalyst-for-tally",

        tab: "BizAnalyst for Tally",

        title: "Unlock Business Insights with BizAnalyst for Tally",

        icon: BarChart3,

        description:
          "BizAnalyst is a powerful mobile and web-based solution designed to work seamlessly with Tally, empowering businesses to access real-time insights and reports on the go. By bridging the gap between your financial data and actionable decisions, BizAnalyst enhances productivity, streamlines operations, and provides better control over your business.",


        points: [
          "Real-Time Access to Data",
          "Seamless Data Synchronization",
          "Smart Notifications",
          "Collaborative Tools",
          "Advanced Business Analytics",
          "Secure and Reliable",
        ],
      },

      // ================= CREDFLOW FOR TALLY =================

      {
        id: "credflow-for-tally",

        tab: "CredFlow for Tally",

        title: "Optimize Cash Flow Management with Credflow for Tally",

        icon: WalletCards,

        description:
          "Credflow is an advanced cash flow management solution integrated with Tally, designed to help businesses manage their finances efficiently. By automating accounts receivables, improving collection processes, and providing real-time insights, Credflow empowers businesses to maintain a healthy cash flow and ensure financial stability.",


        points: [
          "Automated Payment Reminders",
          "Credit Risk Management",
          "Real-Time Cash Flow Tracking ",
          "Seamless Tally Integration",
          "Customizable Reports and Dashboards",
          "Improved Collection Efficiency",
        ],
      },
    ],
      cta: {
      badge: "FREE CONSULTATION",

      title: "Need Mobile Access To Your Tally Business Data?",

      description:
        "Connect with our experts to discover the best Tally mobile apps for analytics, collections, payroll, sales, attendance, and business automation.",

      primaryBtn: "Get Started",
      primaryLink: "/contact",

      secondaryBtn: "Talk To Expert",
      secondaryLink: "tel:+919849431943",
      }
  },

  {
    slug: "tally-solutions",

    hero: {
      badge: "Smart Business Solutions",

      title: "Tally Business Solutions ",
      subtitle: "Complete Solutions For Growing Businesses",

      description:
        "Enhance productivity, automate workflows, streamline reporting, and integrate Tally with advanced business solutions designed for scalable operations.",

      primaryBtn: "Book Free Demo",
      primaryLink: "tel:+919849431943",
      
    },

    subServices: [

      // ================= TALLY API INTEGRATION =================

      {
        id: "tally-api-integration",

        tab: "Tally API Integration",

        title: "Enhance Functionality with Tally API Integration",

        icon: Workflow,

        description:
          "Tally API Integration enables seamless connectivity between Tally and other business applications, allowing for streamlined operations and real-time data synchronization. By integrating Tally with your existing systems, you can automate workflows, reduce manual tasks, and improve efficiency across various business processes.",


        points: [
          "Seamless Data Exchange",
          "Advanced Reporting and Analytics",
          "Custom Workflow Automation",
          "Secure and Reliable Integration",
          "Third-Party Application Compatibility",
          "Scalable Solutions",
        ],
      },

      // ================= QUICKBOOKS AND TALLY INTEGRATION =================

      {
        id: "quickbooks-and-tally-integration",

        tab: "QuickBooks and Integration",

        title: "Streamline Your Accounting with QuickBooks and Tally Integration",

        icon: RefreshCcw,

        description:
          "Integrating QuickBooks with Tally allows businesses to combine the strengths of both platforms—QuickBooks for managing accounting and Tally for financial and operational data. This integration ensures seamless data transfer, improved accuracy, and enhanced business efficiency by eliminating the need for manual data entry and duplication.",


        points: [
          "Automated Data Synchronization",
          "Minimized Data Entry Errors",
          "Simplified Accounting and Taxation",
          "Centralized Financial Management",
          "Efficient Financial Reporting",
          "Customizable Integration",
        ],
      },

      // ================= Excel to Tally Import Utilities =================

      {
        id: "excel-to-tally-import-utility",

        tab: "Excel To Tally Import Utility",

        title: "Simplify Data Import with Excel to Tally Import Utility",

        icon: FileSpreadsheet,

        description:
          "The Excel to Tally Import Utility is a powerful tool designed to simplify the process of transferring data from Excel sheets into Tally. Whether it’s for managing transactions, inventory, or financial data, this utility streamlines data entry, reduces errors, and saves valuable time by automating the import process from Excel to Tally.",


        points: [
          "Effortless Data Transfer",
          "Error-Free Data Mapping",
          "Customizable Import Formats",
          "Real-Time Updates",
          "Bulk Data Import",
          "Seamless Integration",
        ],
      },

      // ================= Tally Invoice Customization =================

      {
        id: "tally-invoice-customization",

        tab: "Tally Invoice",

        title: "Billing Process with Tally Invoice Customization",

        icon: FileText,

        description:
          "Tally Invoice Customization enables businesses to create personalized invoices that reflect their brand identity and meet their specific operational needs. With the flexibility to design and modify invoice formats, this feature ensures that your billing process is both professional and efficient.",


        points: [
          "Brand Identity Integration",
          "Industry-Specific Templates",
          "Customizable Fields",
          "Language and Regional Adaptability",
          "Multiple Format Options",
          "Seamless Automation",
        ],
      },
      
      // ================= Tally Voucher Formats =================

      {
        id: "tally-voucher-customization",

        tab: "Tally Voucher",

        title: "Your Financial Transactions with Tally Voucher Formats Customization",

        icon: ReceiptText,

        description:
          "Tally Voucher Formats Customization allows businesses to modify and design voucher templates to suit their specific accounting needs. Whether it’s for sales, purchases, payments, receipts, or journal entries, this feature ensures that all financial transactions are documented in a format that aligns with your business processes and compliance requirements.",


        points: [
          "Customizable Voucher Layouts",
          "Industry-Specific Formats",
          "Inclusion of Business-Specific Fields",
          "Multi-Language Support",
          "Branding Integration",
          "Flexible Reporting and Export Options",
        ],
      },

      // ================= Tally GST  =================

      {
        id: "tally-gst-reports-customization",

        tab: "Tally GST Reports",

        title: "Simplify GST Compliance with Tally GST Reports Customization",

        icon: HandCoins,

        description:
          "Tally GST Reports Customization allows businesses to tailor their GST reports to meet specific compliance requirements, ensuring accurate tax calculations and streamlined reporting. By customizing GST reports, businesses can generate precise tax summaries, invoices, and returns that align with statutory norms while providing insights into the financial health of the business.",


        points: [
          "Tailored GST Returns",
          "Multi-Period Reporting",
          "Dynamic Tax Classification",
          "Detailed Summary and Ledger Reports",
          "Customizable Tax Rate Setup",
          "Easy Integration with GSTR Filing",
        ],
      },
      
      // ================= Vertical Solutions With Tally  =================

      {
        id: "vertical-solutions",

        tab: "Vertical Solutions",

        title: "Industry-Specific Vertical Solutions with Tally",

        icon: Building2,

        description:
          "Tally’s Vertical Solutions offer customized tools and features tailored to meet the specific needs of different industries. Whether you’re in retail, manufacturing, healthcare, or services, Tally provides specialized solutions designed to streamline operations, improve accuracy, and enhance efficiency across various business functions.",


        points: [
          "Customized Features for Industry Needs",
          "Seamless Integration",
          "Enhanced Reporting for Each Industry",
          "Scalable and Flexible Solutions",
          "Compliance with Industry Regulations",
          "Improved Decision-Making",
        ],
      },
    ],
      cta: {
      badge: "FREE CONSULTATION",

      title: "Need Mobile Access To Your Tally Business Data?",

      description:
        "Connect with our experts to discover the best Tally mobile apps for analytics, collections, payroll, sales, attendance, and business automation.",

      primaryBtn: "Get Started",
      primaryLink: "/contact",

      secondaryBtn: "Talk To Expert",
      secondaryLink: "tel:+919849431943",
      }
  },

  {
    slug: "tally-erp",

    hero: {
      badge: "Enterprise ERP Solutions",

      title: "Tally ERP Solutions",
      subtitle: "Enterprise Accounting & Management",

      description:
        "Optimize inventory, production, sales, finance, and operational workflows with powerful Tally ERP 9 enterprise-grade business solutions.",

      primaryBtn: "Talk To Expert",
      primaryLink: "tel:+919849431943",
    },

    subServices: [

      // ================= Supply Chain Visibility =================

      {
        id: "supply-chain-visibility",

        tab: "Supply Chain Visibility",

        title: "Achieve Full Supply Chain Transparency with Tally’s Supply Chain Visibility",

        icon: GitBranch,

        description:
          "Tally’s Supply Chain Visibility feature provides businesses with real-time insights into their supply chain operations, enabling better decision-making, improved efficiency, and enhanced customer satisfaction. By tracking every step of the process, businesses can optimize inventory, streamline logistics, and reduce bottlenecks.",


        points: [
          "Real-Time Inventory Tracking",
          "Logistics and Shipment Tracking",
          "Order Lifecycle Monitoring",
          "Customizable Supply Chain Reports",
          "Comprehensive Vendor and Supplier Insights",
          "Enhanced Demand Forecasting",
        ],
      },

      // ================= Serial Number Management =================

      {
        id: "serial-number-management",

        tab: "Serial Number Management",

        title: "Streamline Inventory with Tally’s Serial Number Management",

        icon: ListOrdered,

        description:
          "Tally’s Serial Number Management feature enables businesses to track individual products and assets in their inventory through unique serial numbers. This enhances traceability, improves stock control, and simplifies warranty or service management, providing a complete overview of each item in the supply chain.",


        points: [
          "Unique Serial Number Assignment",
          "Batch and Serial Number Integration",
          "Complete Traceability",
          "Inventory Control and Stock Visibility",
          "Warranty and Service Management",
          "Customizable Reporting",
        ],
      },
      
      // ================= KIT Items Sales =================

      {
        id: "kit-items-sales",

        tab: "KIT Items Sales",

        title: "Boost Sales Efficiency with Tally’s KIT Items Sales Management",

        icon: PackageCheck,

        description:
          "Tally’s KIT Items Sales feature enables businesses to manage and sell bundled products or services efficiently. This functionality allows you to combine multiple items into a single sales unit or kit, simplifying the sales process, improving stock management, and providing a better experience for both the business and its customers.",


        points: [
          "Bundling of Multiple Products",
          "Simplified Billing and Invoicing",
          "Automatic Stock Tracking",
          "Comprehensive Sales Reporting",
          "Customizable KIT Configuration",
          "Discounts and Promotions",
        ],
      },

      // ================= Sales Activity Management =================

      {
        id: "sales-activity-management",

        tab: "Sales Activity Management",

        title: "Optimize Sales Performance with Tally’s Sales Activity Management",

        icon: LineChart,

        description:
          "Tally’s Sales Activity Management feature helps businesses track, analyze, and manage their sales activities efficiently. This functionality provides a comprehensive view of sales interactions, customer touchpoints, and performance metrics, empowering businesses to enhance sales productivity, drive growth, and improve customer relationships.",


        points: [
          "Sales Tracking and Monitoring",
          "Task Assignment and Collaboration",
          "Lead and Opportunity Management",
          "Customer Interaction History",
          "Activy-Based Reporting",
          "Sales Performance Analytics",
        ],
      },
      
      // ================= Quality Control =================

      {
        id: "quality-control",

        tab: "Quality Control",

        title: "Ensure Product Excellence with Tally’s Quality Control (QC)",

        icon: ShieldCheck,

        description:
          "Tally’s Quality Control (QC) feature enables businesses to monitor and maintain the quality of their products throughout the manufacturing and procurement process. By incorporating quality checks at every stage, this functionality helps businesses reduce defects, improve product consistency, and meet customer expectations.",


        points: [
          "Customizable Quality Parameters",
          "Batch-wise Quality Control",
          "Multiple Quality Checks",
          "Quality Certificate Management",
          "Defect Tracking and Reporting",
          "Integration with Inventory Management",
        ],
      },
    ],
      cta: {
      badge: "FREE CONSULTATION",

      title: "Need Mobile Access To Your Tally Business Data?",

      description:
        "Connect with our experts to discover the best Tally mobile apps for analytics, collections, payroll, sales, attendance, and business automation.",

      primaryBtn: "Get Started",
      primaryLink: "/contact",

      secondaryBtn: "Talk To Expert",
      secondaryLink: "tel:+919849431943",
      }
  },

   {
    slug: "tally-addon",

    hero: {
      badge: "Powerful Tally Add-Ons",

      title: "Tally Add-ons",
      subtitle: "Extend The Power Of TallyPrime",

      description:
        "Enhance accounting, compliance, billing, inventory, and workflow efficiency with advanced Tally add-ons customized for modern business operations.",

      primaryBtn: "Talk To Expert",
      
    },

    subServices: [

      // ================= E-Way Bill Management =================

      {
        id: "e-way-bill-management",

        tab: "E-Way Bill Management",

        title: "Simplify Compliance with Tally’s E-way Bill Management",

        icon: Receipt,

        description:
          "Tally’s E-way Bill feature allows businesses to generate, track, and manage e-way bills seamlessly, ensuring compliance with GST regulations. This functionality streamlines the process of transporting goods and ensures that businesses stay on top of the documentation required for interstate and intrastate shipments.",


        points: [
          "Automatic E-way Bill Generation",
          "Bulk E-way Bill Generation",
          "Real-Time E-way Bill Tracking",
          "E-way Bill Reports",
          "GST Integration",
          "Validations and Compliance Checks",
        ],
      },

      // ================= Digitally Signed Invoices =================

      {
        id: "digitally-signed-invoices",

        tab: "Digitally Signed Invoices",

        title: "Ensure Authenticity with Digitally Signed Invoices in Tally",

        icon: FileSignature,

        description:
          "Tally’s Digitally Signed Invoice feature enables businesses to generate invoices that are digitally signed, ensuring authenticity, security, and legal compliance. This feature helps streamline invoice validation processes, enhance trust with customers and partners, and ensure that invoices meet regulatory requirements.",


        points: [
          "Secure Digital Signature Integration",
          "Enhanced Invoice Authenticity",
          "Compliance with Legal Requirements",
          "Efficient Invoice Management",
          "Automatic Signature Generation",
          "Audit-Ready Records",
        ],
      },
      
      // ================= GST Reminder =================

      {
        id: "gst-reminder",

        tab: "GST Reminder",

        title: "Stay Compliant with Tally’s GST Reminder Feature",

        icon: BellRing,

        description:
          "Tally’s GST Reminder feature helps businesses stay on top of their tax filing deadlines by sending timely reminders for GST returns and other important compliance dates. This functionality ensures that you never miss a filing deadline, reducing the risk of penalties and ensuring seamless tax compliance.",


        points: [
          "Automated GST Filing Reminders",
          "Reminder Notifications via Email/SMS",
          "Customizable Reminder Settings",
          "Integrated with GST Reports",
          "Multi-Return Support",
          "Dashboard Overview of Due Dates",
        ],
      },

      // ================= Transaction Authorization =================

      {
        id: "transaction-authorization",

        tab: "Transaction Authorization",

        title: "Secure Your Business Operations with Tally’s Transaction Authorization",

        icon: Settings2,

        description:
          "Tally’s Transaction Authorization feature ensures that all financial transactions within your business are authorized by the relevant personnel before being recorded. This adds an extra layer of security and control, preventing unauthorized or erroneous transactions and ensuring accurate financial reporting.",


        points: [
          "Role-Based Authorization",
          "Real-Time Authorization Alerts",
          "Multi-Level Authorization",
          "Customizable Approval Workflow",
          "Audit Trail of Authorizations",
          "Integration with Financial Data",
        ],
      },
      
      // ================= Material Requirement Planning =================

      {
        id: "material-requirement-planning",

        tab: "Material Requirement Planning",

        title: "Optimize Inventory Management with Tally’s Material Requirement Planning",

        icon: Boxes,

        description:
          "Tally’s Material Requirement Planning (MRP) feature enables businesses to forecast and manage their material needs, ensuring that the right materials are available at the right time for production. This functionality helps prevent overstocking or stockouts, reduces costs, and ensures smooth production processes by optimizing material flow.",


        points: [
          "Automated Material Planning",
          "Real-Time Inventory Monitoring",
          "Forecasting and Demand Planning",
          "Vendor and Supplier Integration",
          "Multi-Item and Multi-Level BOM Support",
          "Detailed MRP Reports",
        ],
      },
    ],
      cta: {
    badge: "SMART BUSINESS AUTOMATION",
    title: "Upgrade Your Tally Experience With Powerful Add-Ons",
    description:
      "Connect with our experts to discover custom Tally add-ons that improve productivity, compliance, automation, and business performance.",
    primaryBtn: "Book Free Consultation",
    primaryLink: "/contact",
    secondaryBtn: "Contact Our Team",
    secondaryLink: "tel:+919849431943",
    },
  },
];
