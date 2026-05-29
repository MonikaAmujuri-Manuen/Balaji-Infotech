import {
  ShieldCheck,
  Database,
  Cloud,
  MessageSquare,
  Server,
  TrendingUp,
  Wallet,
  Zap,
  Network,
  BarChart3,
  BadgeCheck,
  Globe,
  Settings2,
  DatabaseBackup,
  Share2,
  RefreshCw,
  Workflow,
  BriefcaseBusiness,
  MessageCircleMore,
  UsersRound,
  FolderSync,
  ReceiptIndianRupee,
  LayoutTemplate,
  Inbox,
  Activity,
  Users,
} from "lucide-react";

export const productsData = {
  
  // ALL PRODUCTS HERE

  tallyprime: {
    title: "TallyPrime",
    subtitle: "Complete Business Accounting Solution",
    icon: Database,
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1600&auto=format&fit=crop",

    description:
      "TallyPrime helps businesses streamline accounting, inventory, GST compliance, payroll, invoicing, and financial reporting with a simplified and powerful interface.",

    keyFeatures: [
      {
        tag: "Business Growth",

        title: "Your Trusted Partner For Business Growth",

        description:
            "Achieve your business goals effortlessly with TallyPrime, your ultimate growth companion. Designed to empower businesses with insightful decision-making, seamless accounting workflows, and advanced operational control.",

        icon: TrendingUp,

        points: [
            "Multi-company Management",
            "Advanced Financial Reporting",
            "Faster Decision Making",
            "Business Performance Insights",
        ],
        },

        {
        tag: "Cash Flow Management",

        title: "Effortless Cash Flow Management",

        description:
            "TallyPrime simplifies cash flow management with quick and hassle-free bill receivables and payables tracking, ensuring faster payments and better financial control. Monitor stock movement, access real-time insights, and make confident business decisions with ease.",

        icon: Wallet,

        points: [
            "Track Receivables & Payables",
            "Real-Time Cash Flow Insights",
            "Smart Stock Movement Tracking",
            "Instant Financial Reports",
        ],
        },

        {
        tag: "Business Efficiency",

        title: "Boost Your Business Efficiency",

        description:
            "TallyPrime accelerates your workflow by helping you manage tasks faster and more efficiently. Switch between reports, vouchers, and multiple companies seamlessly while gaining deeper operational insights through smart reporting tools.",

        icon: Zap,

        points: [
            "Faster Workflow Management",
            "Multi-Tasking Capabilities",
            "Instant Operational Insights",
            "Seamless Navigation Experience",
        ],
        },

        {
        tag: "Tax Compliance",

        title: "Simplified Tax Compliance",

        description:
            "TallyPrime makes GST and tax compliance effortless with integrated tools for return filing, reconciliation, e-invoicing, and e-way bill generation. Stay compliant, reduce manual errors, and manage taxation confidently from a single platform.",

        icon: ShieldCheck,
        points: [
            "GST Return Filing",
            "E-Invoicing & E-Way Bills",
            "Automatic Tax Reconciliation",
            "Accurate Compliance Reports",
        ],
        },

    ],

    pricing: [
      {
    name: "Silver",
    subtitle: "Single User Edition",
    description: "Perfect for standalone businesses and individual systems.",
    
    price: "22,500",
    gst: "4,050",
    total: "26,550",

  },

  {
    name: "Gold",
    subtitle: "Unlimited Multi-User Edition",
    description: "Ideal for businesses working across multiple systems on LAN.",

    price: "67,500",
    gst: "12,150",
    total: "79,650",

  },
    ],

    testimonials: [
  {
    name: "Sri Balaji Traders",
    role: "Retail Business Owner",
    review:
      "TallyPrime simplified our billing, GST filing, and inventory management. Our daily accounting workflow is now much faster and more organized.",
  },

  {
    name: "Venkateswara Agencies",
    role: "Wholesale Distributor",
    review:
      "The reports and stock tracking features in TallyPrime helped us manage multiple product categories without confusion.",
  },

  {
    name: "Sai Lakshmi Enterprises",
    role: "Manufacturing Business",
    review:
      "We moved from manual accounting to TallyPrime and saw immediate improvement in efficiency and financial accuracy.",
  },
],

cta: {
  badge: "Get Started Today",

  title: "Simplify Your Business Accounting With TallyPrime",

  description:
    "Manage billing, GST, inventory, banking, and accounting seamlessly with a powerful business management solution designed for growing businesses.",

  primaryBtn: "Start Free Trial",
  primaryLink: "#pricing",

  secondaryBtn: "Talk To Expert",
  secondaryLink: "tel:+919849431943",
},
    
  },

  "tally-server": {
    title: "TallyPrime Server",
    subtitle: "Enterprise Data Security & Performance",
    icon: Server,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",

    description:
      "TallyPrime Server delivers centralized data management, enhanced security, high-speed performance, and reliable business continuity for growing enterprises.",

    keyFeatures: [
      {
    icon: Network,
    tag: "High Concurrency",

    title: "Advanced Concurrency For Smooth Business Operations",

    description:
      "With TallyPrime Server, multiple users can effortlessly perform data-intensive operations simultaneously without any delays. Whether it’s loading companies, recording transactions, exporting reports, or taking backups, every activity is executed smoothly in a frictionless environment. This ensures optimal utilization of time and resources, allowing tasks to be completed faster and with greater efficiency.",

    points: [
      "Multi-user simultaneous access",
      "Faster report generation",
      "Smooth data-intensive operations",
      "Improved operational efficiency",
    ],
  },

  {
    icon: ShieldCheck,
    tag: "Advanced Security",

    title: "Secured Operations With Permission-Based Control",

    description:
      "TallyPrime Server ensures enterprise-grade data security with its robust permission-based architecture. Critical operations such as backup, restore, and data management are safeguarded with server-level permissions accessible only through proper authorization. This guarantees enhanced control over user access and ensures your business data remains secure, organized, and protected at all times.",

    points: [
      "Server-level access permissions",
      "Secure backup & restore",
      "Controlled user authorization",
      "Enhanced data protection",
    ],
  },

  {
    icon: BadgeCheck,
    tag: "System Reliability",

    title: "Stay Productive With High System Reliability",

    description:
      "TallyPrime Server delivers uninterrupted productivity by ensuring seamless access to reports and transactions even during backup processes. Any discrepancies are isolated at the client level, ensuring server operations remain unaffected. This reliability minimizes downtime, improves accuracy, and guarantees continuous business performance without disruption.",

    points: [
      "Uninterrupted workflow",
      "Reliable server operations",
      "Minimal downtime",
      "Continuous productivity",
    ],
  },

  {
    icon: BarChart3,
    tag: "Performance Optimization",

    title: "Streamline Operations For Enhanced Business Performance",

    description:
      "TallyPrime Server provides powerful monitoring capabilities that help businesses optimize workflows and track system activities efficiently. Authorized users can manage sessions, monitor active users, and even disconnect operations when necessary. This feature ensures better resource utilization, smoother workflows, and increased business productivity.",

    points: [
      "User session monitoring",
      "Better workflow management",
      "Performance optimization tools",
      "Improved resource utilization",
    ],
  },

    ],

    whyChooseCards: [
  {
    icon: Users,
    title: "Scalable Multi-User Support",
    description:
      "TallyPrime Server enables multiple users to work on the same data simultaneously without performance drops or interruptions. Perfect for growing businesses managing larger teams and expanding operations.",
  },

  {
    icon: ShieldCheck,
    title: "Enhanced Security & Data Control",
    description:
      "With advanced server-level permissions and controlled access, TallyPrime Server keeps sensitive business data secure while giving administrators complete control over operations and backups.",
  },

  {
    icon: Activity,
    title: "Zero Downtime Operations",
    description:
      "Ensure uninterrupted business continuity with reliable access to reports, backups, and company data. TallyPrime Server minimizes downtime and keeps workflows running smoothly at all times.",
  },
],

testimonials: [
  {
    name: "RK Group Of Companies",
    role: "Multi-Branch Business",
    review:
      "TallyPrime Server improved our multi-user performance significantly. Teams can now work simultaneously without slowdowns.",
  },

  {
    name: "Sree Durga Industries",
    role: "Manufacturing Company",
    review:
      "The security controls and uninterrupted access made TallyPrime Server the perfect solution for our growing operations.",
  },

  {
    name: "Navya Distributors",
    role: "Distribution Network",
    review:
      "Data reliability and server stability helped us avoid downtime and maintain smooth business operations every day.",
  },
],

cta: {
  badge: "Scale With Confidence",

  title: "Power Your Team With TallyPrime Server",

  description:
    "Enable secure multi-user collaboration, centralized data access, and uninterrupted business operations with TallyPrime Server.",

  primaryBtn: "Request Demo",
  primaryLink: "tel:+919849431943",

  secondaryBtn: "Contact Sales",
  secondaryLink: "/contact"
},
  },

  "aws": {
    title: "TallyPrime Powered by AWS",
    subtitle: "Secure Cloud Accounting Infrastructure",
    icon: Cloud,
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop",

    description:
      "Run TallyPrime securely on AWS cloud with anywhere access, automatic backups, enterprise-grade infrastructure, and seamless remote collaboration.",

    keyFeatures: [
  {
    icon: Globe,
    tag: "Remote Accessibility",

    title: "Effortless Access To TallyPrime, Anytime, Anywhere",

    description:
      "TallyPrime powered by AWS allows you to securely access your business data from anywhere through web browsers or virtual clients. Whether you're working remotely, traveling, or managing multiple offices, your operations stay connected and uninterrupted. Experience seamless accessibility with enterprise-grade AWS reliability and security.",

    points: [
      "Access from anywhere",
      "Browser & virtual client support",
      "Secure remote connectivity",
      "Reliable AWS infrastructure",
    ],
  },

  {
    icon: ShieldCheck,
    tag: "Advanced Security",

    title: "Dual-Layer Security For Your Peace Of Mind",

    description:
      "Protect your business data with dual-factor authentication powered by AWS. TallyPrime combines Tally.NET credentials with Secure PIN protection to ensure only authorized users can access your system. With advanced cloud security and encrypted access, your operations remain safe, protected, and fully under your control.",

    points: [
      "Dual-factor authentication",
      "Secure PIN protection",
      "Encrypted cloud access",
      "Enterprise-grade security",
    ],
  },

  {
    icon: Settings2,
    tag: "Self-Service Portal",

    title: "Empower Your Workspace With The Self-Service Portal (SSP)",

    description:
      "Manage users, systems, and backups effortlessly through the intuitive Self-Service Portal. Designed for flexibility and control, SSP allows businesses to monitor and manage virtual workspaces with ease. Simplify administrative operations while improving efficiency and user management from a single platform.",

    points: [
      "Centralized management",
      "Easy user administration",
      "Backup monitoring",
      "Flexible workspace control",
    ],
  },

  {
    icon: DatabaseBackup,
    tag: "Data Protection",

    title: "Secure And Effortless Data Backup And Recovery",

    description:
      "Never worry about losing critical business data again. TallyPrime powered by AWS automatically secures backups in the cloud with enhanced encryption and reliable recovery options. Access and restore your data quickly whenever needed while ensuring business continuity without disruptions.",

    points: [
      "Automatic cloud backups",
      "Quick data recovery",
      "Encrypted storage",
      "Business continuity support",
    ],
  },

  {
    icon: Share2,
    tag: "Controlled Sharing",

    title: "Precise Data Sharing With Enhanced Control",

    description:
      "Control how your business data is shared with selective access permissions. Administrators can define who can access, restrict, or manage specific information in TallyPrime. This feature improves confidentiality, enhances collaboration, and gives businesses complete control over sensitive data.",

    points: [
      "Selective access permissions",
      "Controlled data sharing",
      "Enhanced confidentiality",
      "Admin-level control",
    ],
  },

  {
    icon: RefreshCw,
    tag: "Easy Upgrades",

    title: "Seamless Upgrades For A Dynamic Experience",

    description:
      "Stay ahead with effortless upgrades and instant access to the latest TallyPrime features. Businesses can switch between versions smoothly without technical complexity or downtime. AWS-powered infrastructure ensures updates are reliable, fast, and optimized for business growth.",

    points: [
      "Instant feature upgrades",
      "Smooth version transitions",
      "Minimal downtime",
      "Future-ready platform",
    ],
  },

  {
    icon: Workflow,
    tag: "Application Integration",

    title: "Enhance Efficiency With Seamless Application Integration",

    description:
      "Integrate third-party applications with TallyPrime effortlessly to streamline business operations and improve workflow efficiency. Share data securely between systems, automate processes, and unlock greater operational flexibility through robust integration capabilities powered by AWS.",

    points: [
      "Third-party integrations",
      "Secure data exchange",
      "Workflow automation",
      "Operational flexibility",
    ],
  },

  {
    icon: TrendingUp,
    tag: "Scalable Growth",

    title: "Affordable, Scalable Solutions For Growing Businesses",

    description:
      "Scale your business confidently with flexible and cost-effective AWS-powered solutions. TallyPrime adapts to your evolving operational needs while maintaining high performance and reliability. Designed for growing businesses, it provides enterprise-grade capabilities without increasing complexity.",

    points: [
      "Cost-effective scalability",
      "Flexible business plans",
      "Enterprise-level performance",
      "Supports business growth",
    ],
  },

  {
    icon: BriefcaseBusiness,
    tag: "Productivity Suite",

    title: "Integrated Productivity Tools At Your Fingertips",

    description:
      "Boost productivity with built-in tools that simplify document management, collaboration, and daily business tasks. TallyPrime powered by AWS creates a fully integrated virtual workspace where users can manage operations efficiently without switching between multiple platforms.",

    points: [
      "Integrated productivity tools",
      "Simplified collaboration",
      "Document management support",
      "All-in-one virtual workspace",
    ],
  },
    ],

    pricing: [
  {
    name: "Personal And Regular Pack",

    subtitle:
      "TallyPrime latest release pre-installed",

    packageName: "Personal Pack",

    variants: [
      {
        pack: 1,
        packageName: "Personal Pack",
        price: "600",
        gst: "108",
        total: "708",
        users: "Upto 1 User",
        cpu: "2 vCPU",
        ram: "4 GB RAM",
        storage: "5 GB Storage",
        backup: "5 GB Backup Storage",
      },

      {
        pack: 2,
        packageName: "Regular Pack",
        price: "600",
        users: "Upto 2 Users",
        cpu: "2 vCPU",
        ram: "4 GB RAM",
        storage: "5 GB Storage",
        backup: "5 GB Backup Storage",
      },

      {
        pack: 4,
        packageName: "Regular-Plus Pack",
        price: "450",
        users: "Upto 4 Users",
        cpu: "2 vCPU",
        ram: "8 GB RAM",
        storage: "10 GB Storage",
        backup: "10 GB Backup Storage",
      },
      {
        pack: 8,
        packageName: "Regular-Plus Pack",
        price: "450",
        users: "Upto 8 Users",
        cpu: "4 vCPU",
        ram: "16 GB RAM",
        storage: "20 GB Storage",
        backup: "20 GB Backup Storage",
      },
      {
        pack: 12,
        packageName: "Performance Pack",
        price: "450",
        users: "Upto 12 Users",
        cpu: "8 vCPU",
        ram: "32 GB RAM",
        storage: "40 GB Storage",
        backup: "40 GB Backup Storage",
      },
      {
        pack: 16,
        packageName: "Performance-Plus Pack",
        price: "450",
        users: "Upto 16 Users",
        cpu: "8 vCPU",
        ram: "32 GB RAM",
        storage: "40 GB Storage",
        backup: "40 GB Backup Storage",
      },
    ],
  },

  {
    name: "TallyPrime + TallyPrime Server Pack ",

    subtitle:
      "TallyPrime and TallyPrime Server latest release pre-installed",

    packageName: "TPSPerformance Pack",

    variants: [
      {
        pack: 8,
        packageName: "TPSPerformance Pack",
        price: "750",
        users: "Upto 8 User",
        cpu: "8 vCPU",
        ram: "16 GB RAM",
        storage: "20 GB Storage",
        backup: "20 GB Backup Storage",
      },
      {
        pack: 12,
        packageName: "TPSPerformanceMax Pack",
        price: "750",
        users: "Upto 12 Users",
        cpu: "6 vCPU",
        ram: "32 GB RAM",
        storage: "40 GB Storage",
        backup: "40 GB Backup Storage",
      },
      {
        pack: 16,
        packageName: "TPSPerformance-Plus Pack",
        price: "750",
        users: "Upto 16 Users",
        cpu: "6 vCPU",
        ram: "32 GB RAM",
        storage: "40 GB Storage",
        backup: "40 GB Backup Storage",
      },
      {
        pack: 24,
        packageName: "TPSPerformance-MaxPlus Pack",
        price: "750",
        users: "Upto 24 Users",
        cpu: "32 vCPU",
        ram: "64 GB RAM",
        storage: "50 GB Storage",
        backup: "50 GB Backup Storage",
      },
      {
        pack: 32,
        packageName: "TPSPerformance-Pro Pack",
        price: "750",
        users: "Upto 32 Users",
        cpu: "32 vCPU",
        ram: "64 GB RAM",
        storage: "80 GB Storage",
        backup: "80 GB Backup Storage",
      },
    ],
 },

  {
    name: "Enterprises Pack",

    subtitle:
      "TallyPrime and TallyPrime Server latest release pre-installed",

    packageName: "TPSEnterprise Pack",

    variants: [
      {
        pack: 48,
        packageName: "TPSEnterprise Pack",
        price: "750",
        users: "Upto 48 Users",
        cpu: "48 vCPU",
        ram: "96 GB RAM",
        storage: "100 GB Storage",
        backup: "100 GB Backup Storage",
      },
      {
        pack: 64,
        packageName: "TPSEnterprise Pack",
        price: "750",
        users: "Upto 64 Users",
        cpu: "64 vCPU",
        ram: "128 GB RAM",
        storage: "100 GB Storage",
        backup: "100 GB Backup Storage",
      },
      {
        pack: 96,
        packageName: "TPSEnterprise-MaxPlus Pack",
        price: "750",
        users: "Upto 96 Users",
        cpu: "96 vCPU",
        ram: "192 GB RAM",
        storage: "100 GB Storage",
        backup: "100 GB Backup Storage",
      },
      {
        pack: 128,
        packageName: "TPSEnterprise-MaxPlus Pack",
        price: "750",
        users: "Upto 128 Users",
        cpu: "128 vCPU",
        ram: "256 GB RAM",
        storage: "100 GB Storage",
        backup: "100 GB Backup Storage",
      },
    ],
  },
],

whyChooseCards: [
  {
    icon: Globe,

    title: "Secure Anytime Access",

    description:
      "Access your TallyPrime data 24/7 from anywhere with AWS’s secure and reliable cloud infrastructure.",
  },

  {
    icon: Users,

    title: "Seamless Collaboration",

    description:
      "Enable multiple users to work on the same business data in real-time with smooth and uninterrupted collaboration.",
  },

  {
    icon: TrendingUp,

    title: "Scalability For Growth",

    description:
      "Scale your business operations effortlessly with flexible AWS-powered plans designed for businesses of all sizes.",
  },
],

testimonials: [
  {
    name: "Aadhya Retail Solutions",
    role: "Retail Chain",
    review:
      "With TallyPrime on AWS, our team can securely access accounting data from anywhere without depending on local systems.",
  },

  {
    name: "Global Tech Services",
    role: "Remote Operations Team",
    review:
      "The cloud infrastructure and automatic scalability helped us expand operations without worrying about performance.",
  },

  {
    name: "MNR Enterprises",
    role: "Enterprise Business",
    review:
      "AWS integration gave us better backup reliability, remote collaboration, and uninterrupted access to TallyPrime.",
  },
],

cta: {
  badge: "Cloud Accounting Simplified",

  title: "Access TallyPrime Anywhere With AWS Cloud",

  description:
    "Run TallyPrime securely on AWS cloud infrastructure with scalable performance, remote accessibility, and enterprise-grade reliability.",

  primaryBtn: "Get Started",
  primaryLink:"#pricing",

  secondaryBtn: "Talk To Expert",
  secondaryLink:"tel:+919849431943"
},
  },

  "whatsapp": { 
    title: "TallyPrime with WhatsApp",
    subtitle: "Smart Business Communication Automation",
    icon: MessageSquare,
    image:
      "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=1600&auto=format&fit=crop",

    description:
      "Integrate WhatsApp with TallyPrime to instantly send invoices, payment reminders, statements, and customer updates directly from your business workflow.",

    keyFeatures: [
      
  {
    icon: MessageCircleMore,
    tag: "Instant Sharing",

    title: "Instant Document Sharing Made Simple",

    description:
      "Share invoices, reports, orders, payment reminders, and business documents instantly through WhatsApp with just a single click. Improve communication speed, reduce manual effort, and deliver a smoother customer experience with real-time document delivery.",

    points: [
      "One-click document sharing",
      "Instant customer communication",
      "Faster response time",
      "Improved productivity",
    ],
  },

  {
    icon: UsersRound,
    tag: "Bulk Communication",

    title: "Streamlined Bulk Communication",

    description:
      "Connect with multiple customers simultaneously by sharing documents, updates, and notifications in bulk through WhatsApp. Save time, simplify customer outreach, and manage large-scale communication more efficiently from within TallyPrime.",

    points: [
      "Bulk document sharing",
      "Connect with multiple customers",
      "Save time and effort",
      "Efficient communication management",
    ],
  },

  {
    icon: FolderSync,
    tag: "Flexible Formats",

    title: "Versatile Document Sharing",

    description:
      "Easily share business documents in multiple formats including PDF, JPEG, and Excel. Provide customers and teams with the flexibility to access files in the format most convenient for them while maintaining seamless communication workflows.",

    points: [
      "PDF, JPEG & Excel support",
      "Flexible file sharing",
      "Easy customer access",
      "Smooth document management",
    ],
  },

  {
    icon: ReceiptIndianRupee,
    tag: "Payment Collection",

    title: "Simplify Invoicing And Payment Collection",

    description:
      "Speed up payment collection by sending invoices directly through WhatsApp with embedded payment links and QR codes. Help customers make payments quickly while reducing delays and improving cash flow management for your business.",

    points: [
      "Embedded payment links",
      "QR code enabled invoices",
      "Faster payment collection",
      "Improved cash flow",
    ],
  },

  {
    icon: LayoutTemplate,
    tag: "Message Templates",

    title: "Pre-Designed Message Templates",

    description:
      "Choose from professionally designed and ready-to-use WhatsApp templates for invoices, reminders, confirmations, and customer communication. Deliver consistent and personalized messages while reducing manual typing and repetitive tasks.",

    points: [
      "Ready-to-use templates",
      "Consistent communication",
      "Personalized messaging",
      "Reduced manual effort",
    ],
  },

  {
    icon: Inbox,
    tag: "Centralized Inbox",

    title: "Centralized WhatsApp Inbox",

    description:
      "Manage customer conversations and business communications effortlessly through a dedicated centralized WhatsApp inbox. Keep track of messages, improve response management, and maintain organized communication from a single place.",

    points: [
      "Dedicated communication inbox",
      "Organized customer conversations",
      "Easy response management",
      "Improved communication tracking",
    ],
  },
    ],

    pricing: [
  {
    name: "Recharge Wallet",
    subtitle:
      "Get your wallet recharged to continue uninterrupted messaging experience anytime, using WhatsApp for your Business.",

    variants: [
      {
        pack: "675",
        packageName: "Recharge",

        price: "675",
        gst: "121",
        total: "796",

        validity: "Flexible Usage",
        support: "WhatsApp Messaging",
        access: "Business Communication",
        updates: "Instant Wallet Recharge",
      },

      {
        pack: "2700",
        packageName: "Recharge",

        price: "2700",
        gst: "486",
        total: "3186",
      },
    ],
  },

  {
    name: "Renew Subscription",
    subtitle:
      "Engage with your parties uninterrupted with an active WhatsApp for Business subscription.",

    variants: [
      {
        pack: "Yearly",
        packageName: "Recharge",

        price: "1300",
        gst: "234",
        total: "1534",
      },
    ],
  },
],

testimonials: [
  {
    name: "Karthik Fashions",
    role: "Retail Store",
    review:
      "Sending invoices and payment reminders through WhatsApp improved customer communication and reduced follow-up time.",
  },

  {
    name: "Vasavi Electronics",
    role: "Electronics Distributor",
    review:
      "TallyPrime with WhatsApp helped us instantly connect with customers and share order updates professionally.",
  },

  {
    name: "Srinidhi Mobiles",
    role: "Mobile Accessories Business",
    review:
      "The WhatsApp integration made customer engagement easier and helped us improve response time and service quality.",
  },
],

cta: {
  badge: "Automate Business Communication",

  title: "Connect TallyPrime With WhatsApp Instantly",

  description:
    "Send invoices, payment reminders, notifications, and customer updates directly through WhatsApp using TallyPrime integration.",

  primaryBtn: "Activate WhatsApp",
  primaryLink:"#pricing",
  secondaryBtn: "Schedule Demo",
  secondaryLink:"tel:+919849431943"

},
  },
};


