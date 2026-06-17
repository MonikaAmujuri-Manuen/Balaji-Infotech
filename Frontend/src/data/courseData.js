import taxation from "../assets/taxation.png";
import stock from "../assets/stock.jpg";
import reports from "../assets/reportsmis.jpg";
import payrollImg from "../assets/payroll.jpg"
import inventoryWarehouse from "../assets/warehouse.jpg";
import inventoryTracking from "../assets/tracking.jpg";
import inventoryManufacturing from "../assets/manufacturing.jpg";
import advancedImg from "../assets/advanced.jpg"

export const courses = [
  {
    slug: "basics-ledgers",

    title: "Accounting Basics & Ledgers",
    subtitle:
      "Learn company creation, ledgers, voucher entries and accounting fundamentals in TallyPrime.",

    level: "Beginner",
    duration: "3-4 Hours",

    lessons: 4,

    resources: 6,

    heroImage:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f",

    sections: [
      {
        id: "overview",
        type: "overview",
        title: "Overview",

        content:
            "This course introduces accounting fundamentals using TallyPrime. You will learn company creation, ledgers, groups and voucher entries through practical examples.",

        learn: [
            {
            icon: "download",
            title: "Installation",
            description: "Install and set prerequisites."
            },
            {
            icon: "building",
            title: "Company Creation",
            description: "Set up companies with financial year and base currency."
            },

            {
            icon: "book",
            title: "Ledgers & Groups",
            description: "Create chart of accounts and organize transactions."
            },

            {
            icon: "receipt",
            title: "Voucher Entries",
            description: "Record Payment, Receipt, Contra and Journal vouchers."
            },

        ],

        note:
            "Every accounting transaction follows the double-entry system where every debit has an equal credit."
      },

      {
        id: "install",
        type: "steps",
        title: "Installation & Setup",

        duration: "5-10 Minutes",

        intro:
            "Install TallyPrime and configure your environment before creating your first company.",

        steps: [
            {
            title: "Download & Install",
            description:
                "Get the latest installer from the vendor. Choose 64‑bit. Follow default prompts (path, desktop shortcut, allow firewall if asked)."
            },

            {
            title: "Prerequisites",
            description:
                "Ensure you have admin rights, stable internet (for activation), and system date set correctly. Keep your organization’s GSTIN/PAN handy (if applicable)."
            },

            {
            title: "Create Data Folder",
            description:
                "Make a dedicated D:\AccountingData\YourCompany folder. Enable automatic backups in the software to a cloud drive."
            },

            {
            title: "Regional Settings",
            description:
                "Set base currency (INR), locale (India), and financial year start (commonly April 1 in India)."
            }
        ],

        note:
            "Always keep a backup folder on another drive or cloud storage."
      },

      {
        id: "company",
        type: "steps",
        title: "Creating A Company",

        description:
            "Company master for books of accounts.",

        steps: [
            {
            title: "Name & Legal Details",
            description:
                "Enter Company Name, Address, Country, State, GSTIN and PAN details."
            },

            {
            title: "Financial Year",
            description:
                "Set the financial year start date and books beginning date."
            },

            {
            title: "Currency & Symbols",
            description:
                "Configure INR ₹ and number format settings."
            },

            {
            title: "Security",
            description:
                "Set an Admin password and optionally enable user roles such as Data Entry and Auditor."
            },

            {
            title: "Backups",
            description:
                "Enable auto-backup and maintain a weekly offsite backup."
            }
        ],

        note:
            "Keep separate Demo and Live companies. Use Demo for learning and Live for actual business transactions."
      },

      {
        id: "ledgers",
        type: "ledger",
        icon: "book",

        title: "Ledgers & Groups (Chart Of Accounts)",

        description:
            "Groups organize ledgers into major accounting heads.",

        groups: [
            {
            title: "Assets",
            description:
                "Cash, Bank, Debtors, Inventory, Fixed Assets"
            },

            {
            title: "Liabilities",
            description:
                "Creditors, Loans, Duties & Taxes"
            },

            {
            title: "Income",
            description:
                "Sales, Interest Income"
            },

            {
            title: "Expenses",
            description:
                "Purchases, Rent, Salaries, Utilities"
            }
        ],

        examples: [
            {
            ledger: "Cash",
            group: "Cash-in-Hand"
            },

            {
            ledger: "HDFC Bank",
            group: "Banks"
            },

            {
            ledger: "Sales",
            group: "Sales Accounts"
            },

            {
            ledger: "Purchases",
            group: "Purchase Accounts"
            },

            {
            ledger: "Rent Expense",
            group: "Indirect Expenses"
            },

            {
            ledger: "ABC Traders",
            group: "Sundry Debtors"
            },

            {
            ledger: "XYZ Supplies",
            group: "Sundry Creditors"
            }
        ],

        note:
            "Avoid duplicate ledgers. Use one consistent naming convention throughout the organization.",

        table: [
            {
            ledger: "Cash",
            group: "Cash-in-Hand",
            type: "Asset",
            notes: "Petty cash and hand cash balances"
            },

            {
            ledger: "Bank A/C (HDFC)",
            group: "Banks",
            type: "Asset",
            notes: "Enable bank reconciliation"
            },

            {
            ledger: "Sales",
            group: "Sales Accounts",
            type: "Income",
            notes: "Set GST class if applicable"
            },

            {
            ledger: "Purchases",
            group: "Purchase Accounts",
            type: "Expense",
            notes: "Link inventory if stock is used"
            },

            {
            ledger: "Rent Expense",
            group: "Indirect Expenses",
            type: "Expense",
            notes: "Attach landlord details if required"
            },

            {
            ledger: "ABC Traders",
            group: "Sundry Debtors",
            type: "Asset",
            notes: "Customer credit limit and terms"
            },

            {
            ledger: "XYZ Supplies",
            group: "Sundry Creditors",
            type: "Liability",
            notes: "Vendor GSTIN and payment terms"
            }
        ]
      },

      {
        id: "vouchers",
        type: "voucher",

        title: "Basic Voucher Entries",

        description:
            "Payment, Receipt, Contra and Journal vouchers are used to record daily accounting transactions.",

        rules: [
            "Assets/Expenses ↑ → Debit, ↓ → Credit",
            "Liabilities/Income/Capital ↑ → Credit, ↓ → Debit"
        ],

        vouchers: [
            {
            type: "payment",
            badge: "PAYMENT",
            title: "Payment Voucher",
            subtitle: "Cash/Bank going out",

            useWhen:
                "Paying expenses, suppliers, purchases and withdrawals.",

            entry: [
                {
                date: "05-Apr-2025",
                particulars: "Rent Expense A/c Dr",
                dr: "₹25,000",
                cr: ""
                },

                {
                date: "",
                particulars: "To HDFC Bank A/c",
                dr: "",
                cr: "₹25,000"
                }
            ],

            narration:
                "Being office rent for April paid by NEFT."
            },

            {
            type: "receipt",
            badge: "RECEIPT",
            title: "Receipt Voucher",
            subtitle: "Cash/Bank coming in",

            useWhen:
                "Receiving money from customers or other sources.",

             entry: [
                {
                date: "06-Apr-2025",
                particulars: "HDFC Bank A/c Dr",
                dr: "₹40,000",
                cr: ""
                },

                {
                date: "",
                particulars: "To ABC Traders",
                dr: "",
                cr: "₹40,000"
                }
            ],
            narration:
                "Being part payment received against Inv# 112. Add receipt number/UTR."
            },

            {
            type: "contra",
            badge: "CONTRA",
            title: "Contra Voucher",
            subtitle: "Cash ↔ Bank transfers",

            useWhen:
                "Cash deposited into bank or withdrawn from bank.",
            entry: [
                {
                date: "07-Apr-2025",
                particulars: "HDFC Bank A/c Dr",
                dr: "₹15,000",
                cr: ""
                },

                {
                date: "",
                particulars: "To Cash A/c",
                dr: "",
                cr: "₹15,000"
                }
            ],
            narration:
                "Cash deposited into HDFC Bank. No income/expense ledgers involved."
            },

            {
            type: "journal",
            badge: "JOURNAL",
            title: "Journal Voucher",
            subtitle: "Adjustments, Non-cash",

            useWhen:
                "Depreciation, provisions and adjustment entries.",
            entry: [
                {
                date: "30-Apr-2025",
                particulars: "Depreciation Expense A/c Dr",
                dr: "₹5,000",
                cr: ""
                },

                {
                date: "",
                particulars: "To Furniture & Fixtures A/c",
                dr: "",
                cr: "₹5,000"
                }
            ],
            narration:
                "Monthly depreciation provided @ 10% p.a. Attach working papers."
            }
        ],

        mistakes: [
            "Using Payment/Receipt instead of Journal for non-cash adjustments.",
            "Posting sales/purchase without proper tax ledgers configured.",
            "Creating customer/vendor as Income/Expense ledgers."
        ]
      },

      {
        id: "roadmap",
        type: "roadmap",

        title: "Roadmap: From Zero To Confident Beginner",

        description:
            "Follow this learning path step-by-step to build a strong foundation in Tally.",

        steps: [
            {
            step: "01",
            title: "Install & Configure",
            description:
                "Install TallyPrime, set financial year, company data path, users and backups."
            },

            {
            step: "02",
            title: "Create Company & Masters",
            description:
                "Create a company and configure groups, ledgers, customers and vendors."
            },

            {
            step: "03",
            title: "Record Basic Vouchers",
            description:
                "Practice Payment, Receipt, Contra and Journal vouchers."
            },

            {
            step: "04",
            title: "Reconcile & Review",
            description:
                "Perform bank reconciliation and verify accounting accuracy."
            }
        ]
      },

      {
        id: "practice",
        type: "practice",

        title: "Practice Labs & Quick Quiz",

        description:
            "Apply your learning using practical accounting scenarios.",

        labs: [
            {
            title: "Opening Balances",
            difficulty: "Easy",
            duration: "10 min",

            tasks: [
                "Create Cash Ledger ₹8,000",
                "Create HDFC Bank Ledger ₹22,000",
                "Create Capital Ledger ₹30,000",
                "Pass opening balance entry using Journal"
            ]
            },

            {
            title: "Day-To-Day Entries",
            difficulty: "Easy",
            duration: "15 min",

            tasks: [
                "Pay office rent ₹20,000 through bank",
                "Receive ₹35,000 from ABC Traders",
                "Deposit ₹10,000 cash into bank"
            ]
            },

            {
            title: "Adjustments",
            difficulty: "Medium",
            duration: "20 min",

            tasks: [
                "Provide depreciation ₹3,000 on Furniture",
                "Create provision for expenses ₹5,000",
                "Verify ledger balances"
            ]
            }
        ],

        quiz: [
        {
            question: "Which voucher is used for bank deposits?",
            options: [
            "Payment",
            "Receipt",
            "Contra",
            "Journal"
            ],
            answer: "Contra"
        },

        {
            question: "ABC Traders usually belongs to?",
            options: [
            "Sundry Creditors",
            "Sundry Debtors",
            "Indirect Expenses",
            "Sales Accounts"
            ],
            answer: "Sundry Debtors"
        },

        {
            question: "Depreciation entry is normally passed through?",
            options: [
            "Payment",
            "Receipt",
            "Contra",
            "Journal"
            ],
            answer: "Journal"
        }
        ]
      }
    ],
  },

  {
    slug: "gst-taxation",

    title: "GST & Taxation",
    subtitle: "Configure GST, create tax-ledgers, prepare GST invoices, manage returns, RCM, credit/debit notes and learn e-invoice basics with real-world examples.",

    level: "Intermediate",
    duration:"6-8 Hours",

    lessons: 6,

    resources: 6,

    heroImage: taxation,

    sections: [
    {
        id: "overview",
        type: "overview",
        title: "Overview",

        content:
        "Learn GST configuration, tax ledgers, purchase and sales transactions, credit/debit notes, reverse charge mechanism (RCM), GST returns and e-invoicing through practical business examples.",

        learn: [
        {
            icon: "book",
            title: "GST Fundamentals",
            description: "Understand GST concepts, GSTIN, HSN/SAC and tax structure."
        },
        {
            icon: "receipt",
            title: "Tax Ledgers",
            description: "Create CGST, SGST, IGST and GST-related ledgers."
        },
        {
            icon: "building",
            title: "GST Transactions",
            description: "Record GST purchases, sales and expenses."
        },
        {
            icon: "download",
            title: "Returns & Compliance",
            description: "Prepare GST returns and understand filing workflow."
        }
        ],

        note:
        "GST compliance starts with correct ledger creation and accurate transaction recording."
    },

    {
        id: "configure-gst",
        type: "steps",
        title: "Configure GST & Tax Ledgers",

        duration: "15-20 Minutes",

        intro:
            "Learn how to enable GST, create tax ledgers, configure HSN/SAC codes and ensure compliance settings are correctly applied.",

        steps: [
            {
            title: "Enable GST Module",
            description:
                "Enter GSTIN, state and place of supply rules."
            },
            {
            title: "Create Tax Ledgers",
            description:
                "Create CGST, SGST, IGST and Cess ledgers with proper naming conventions."
            },
            {
            title: "Map Tax Rates",
            description:
                "Link ledgers to GST rate slabs and assign them to products and services."
            },
            {
            title: "HSN / SAC Codes",
            description:
                "Configure HSN and SAC codes for products and services to ensure compliance."
            },
            {
            title: "Compliance Settings",
            description:
                "Enable automatic GST calculation in invoices and configure e-way bill settings."
            }
        ],

        checklist: [
            "GSTIN validated",
            "Correct state mapping",
            "Tax ledgers created",
            "HSN/SAC codes added",
            "Auto-calculation enabled"
        ],

        note:
            "For interstate supplies IGST applies. For intrastate transactions GST is split between CGST and SGST. Always verify the place of supply."
    },

    {
    id: "gst-invoices",
    type: "invoiceTypes",

    title: "GST Invoice Types & Creation",

    invoices: [
        {
        title: "B2B Invoice (Taxable)",
        description:
            "Show HSN, tax breakup and GSTINs for both parties.",

        invoice: [
            "Invoice #INV1001",
            "Date: 12-Aug-2025",
            "Buyer: XYZ Pvt Ltd (GSTIN: 27XYZDE6789H1Z2)",
            "Items: Supply – ₹50,000",
            "Tax: CGST 9% ₹4,500 + SGST 9% ₹4,500",
            "Total: ₹59,000"
        ]
        },

        {
        title: "B2C Invoice (Retail)",
        description:
            "Simplified format for consumers; show tax where applicable.",

        invoice: [
            "Invoice #INV1002",
            "Date: 13-Aug-2025",
            "Buyer: Retail Customer",
            "Items: Goods sold – ₹2,000",
            "GST 18%: ₹360",
            "Total: ₹2,360"
        ]
        }
    ],

    note:
        "Always capture HSN/SAC and tax breakup on B2B invoices for proper reconciliation. For exports, ensure LUT/Bond details are included."
    },

    {
        id: "returns-rcm",
        type: "gstReturns",

        title: "Returns, RCM, Credit & Debit Notes",

        cards: [
            {
            title: "Returns Overview",
            content:
                "Know which returns (GSTR-1, GSTR-3B, annual) you need to file and reconcile sales before filing. Learn about due dates, late fees and input tax credit rules."
            },

            {
            title: "Reverse Charge Mechanism (RCM)",
            content:
                "When the recipient pays tax instead of the supplier. Common for imports and notified supplies. Record correctly to avoid mismatches and claim ITC where applicable."
            }
        ],

        creditDebitNote: {
            title: "Credit / Debit Notes",
            content:
            "Reference the original invoice, specify the reason and adjust taxable values in returns. Common reasons include goods returned, price revisions and clerical corrections."
        },

        tip:
            "Always reconcile sales, purchases and GST liability before filing returns to avoid notices and mismatches."
    },

    {
        id: "e-invoice",
        type: "eInvoice",

        title: "E-Invoice Basics",

        description:
            "E-invoice (IRP) applies beyond turnover thresholds. Generate IRN & QR after submitting JSON to IRP. Keep signed JSON for audit trail.",

        process: [
            "Prepare invoice JSON per schema with seller, buyer, item and tax blocks.",
            "Submit to IRP via software to obtain IRN and signed QR code.",
            "Store IRN and signed JSON for compliance and audit requirements."
        ],

        note:
            "Thresholds change periodically. Verify current government rules before enabling e-invoicing. Businesses above prescribed turnover limits must comply."
    },

    {
    id: "faq",
    type: "faq",

    title: "Frequently Asked Questions",

    questions: [
        {
        question: "What is GST and why was it introduced?",
        answer:
            "GST (Goods and Services Tax) is a single indirect tax system replacing multiple taxes like VAT, service tax, and excise duty.It was introduced to simplify taxation, eliminate cascading of taxes (tax on tax), and create a unified market across India.GST (Goods and Services Tax) is a single indirect tax system replacing multiple taxes like VAT, Service Tax and Excise Duty. It was introduced to simplify taxation and eliminate cascading taxes."
        },

        {
        question: "What is the difference between CGST, SGST and IGST?",
        answer:
            "CGST – Central Goods and Services Tax, collected by the central government. SGST – State Goods and Services Tax, collected by the state government for intra-state sales. IGST – Integrated Goods and Services Tax, collected by the central government for inter-state sales.CGST and SGST apply to intra-state transactions, while IGST applies to inter-state transactions."
        },

        {
        question: "What is Reverse Charge Mechanism (RCM)?",
        answer:
            "In RCM, the buyer (recipient of goods/services) is liable to pay GST instead of the seller. Example: Services taken from a lawyer or import of services from abroad.Under RCM, the recipient pays GST instead of the supplier for specified goods and services."
        },

        {
        question: "How are GST returns filed?",
        answer:
            "GST returns are filed online using the GST portal. Common returns include: GSTR-1: Outward supplies (sales), GSTR-3B: Summary of sales, purchases, and tax liability, GSTR-9: Annual return, GSTR-9C: Reconciliation statement (for audits)"
        },

        {
        question: "What is an e-Invoice and who needs to generate it?",
        answer:
            "An e-invoice is a digital invoice authenticated by the GST portal.Businesses with turnover above the government-specified threshold (currently ₹10 crore and above) must generate e-invoices for B2B transactions."
        }
    ]
    }
    ]
  },

  {
    slug: "inventory-stock",

    title:
        "Inventory & Stock Management",
    subtitle: "Master stock tracking and inventory operations in TallyPrime",

    badge: "Inventory & Stock",

    duration: "4-6 Hours",

    heroDescription:
        "Stock items, units of measure, godown setup, batching, transfers, reorder levels and Bill of Materials (BOM). Templates, use-cases and best practices.",

    heroImage: stock,

    level: "Intermediate",

    sections: [
    {
        id: "overview",
        type: "overview",

        title: "Overview",

        content:
            "Learn how to manage inventory efficiently in TallyPrime through stock items, units of measure, godown management, batch tracking, stock transfers, reorder levels and Bill of Materials (BOM). Gain practical experience with real-world inventory workflows used in trading, retail and manufacturing businesses.",

        learn: [
            {
            icon: "package",
            title: "Stock Items",
            description: "Create stock masters and manage item classifications."
            },
            {
            icon: "ruler",
            title: "Units of Measure",
            description: "Configure UOMs for accurate inventory tracking and reporting."
            },
            {
            icon: "building",
            title: "Godown Management",
            description: "Organize inventory across multiple warehouses and locations."
            },
            {
            icon: "arrow-right-left",
            title: "Stock Movement",
            description: "Handle stock transfers, batching, expiry tracking and reorder levels."
            }
        ],

        note:
            "A well-structured inventory system improves stock accuracy, purchasing decisions and overall business efficiency."
    },

    {
        id: "stock-items",
        type: "inventoryCards",

        title: "Stock Items & Item Master",

        description:
            "Stock items represent goods or raw materials. Key fields in the item master include:",

        cards: [
            {
            title: "Item Code & Name",
            description: "Unique identifier used for inventory tracking."
            },
            {
            title: "Category / Group",
            description: "Used for classification and reporting."
            },
            {
            title: "HSN / SKU",
            description: "Optional codes useful for taxation and cataloguing."
            },
            {
            title: "Default UOM",
            description: "Base unit of measure used for transactions."
            },
            {
            title: "Valuation Method",
            description: "FIFO, LIFO or Weighted Average valuation."
            },
            {
            title: "Reorder Levels",
            description: "Configure reorder level and reorder quantity."
            },
            {
            title: "Batch / Serial Tracking",
            description: "Enable tracking when required."
            }
        ],

        tip:
            "Use concise item codes (e.g. RM-CU-001) to prevent duplicates and speed up data entry."
    },

    {
        id: "uom",
        type: "inventoryCards",

        title: "Units Of Measure (UOM)",

        description:
            "Define standard units for quantity tracking and inventory conversions.",

        cards: [
            {
            title: "Piece (pcs)",
            description: "Commonly used for finished goods and individual products."
            },
            {
            title: "Kilogram (kg)",
            description: "Used for raw materials and bulk inventory."
            },
            {
            title: "Meter (m)",
            description: "Suitable for fabrics, wires, cables and rolls."
            },
            {
            title: "Box / Carton",
            description: "Used for packaging and wholesale inventory."
            },
            {
            title: "Litre (ltr)",
            description: "Ideal for liquids, oils and chemicals."
            },
            {
            title: "Dozen",
            description: "Used when items are sold in groups of twelve."
            }
        ],

        tip:
            "Configure UOM conversions (e.g. 1 Box = 12 Pieces) to simplify purchasing, sales and stock reporting."
    },

    {
        id: "godown-setup",
        type: "warehouse",

        title: "Godown / Warehouse Setup",

        description:
            "Organise physical inventory locations and define how stock is stored and moved.",

        setupPoints: [
            "Create godown names (Main Warehouse, Finished Goods, Raw Materials).",
            "Assign default godowns to purchase and sales transactions.",
            "Use zones, racks and bins for detailed storage management.",
            "Enable multi-warehouse stock valuation where supported."
        ],

        useCases: [
            {
            title: "Retail Distribution",
            description:
                "Multiple stores connected to a central distribution warehouse. Stock is replenished and transferred regularly."
            },
            {
            title: "Manufacturing",
            description:
                "Separate Raw Material, Work-in-Progress (WIP) and Finished Goods godowns for better production control."
            }
        ],

        tip:
            "Use separate godowns for raw materials, finished goods and damaged stock to improve inventory visibility."
    },
    {
        id: "batching-expiry",
        type: "batching",

        title: "Batching, Serial Numbers & Expiry Management",

        description:
            "Track inventory using batch numbers, serial numbers and expiry dates for better traceability and stock control.",

        points: [
            {
                title: "Consumables with expiry",
                description: "food, pharma and FMCG products"
            },
            {
                title: "Tracked assets",
                description: "electronics and equipment with serial numbers"
            },
            {
                title: "Manufactured lots",
                description: "use batch numbers for production traceability"
            }
        ],

        bestPractice:
            "Capture batch number, manufacture date and expiry date. Follow FIFO (First In First Out) for expiry-sensitive inventory.",

        tip:
            "Batch tracking helps identify affected stock quickly during recalls and quality checks."
    },
    {
        id: "stock-transfers",
        type: "batching",

        title: "Stock Transfers & Movements",

        description:
            "Track inventory movement across warehouses, production units and business locations while maintaining accurate stock records.",

        points: [
            {
            title: "Inter-godown transfers",
            description: "movement of stock between warehouses or storage locations"
            },
            {
            title: "Material issue / consumption",
            description: "issue raw materials to production or assembly processes"
            },
            {
            title: "Stock adjustments",
            description: "record damage, shrinkage, shortages or write-offs"
            },
            {
            title: "Stock receipts",
            description: "receive inventory from purchases, production or transfers"
            }
        ],

        bestPractice:
            "Maintain proper transfer vouchers and update stock ledgers immediately after every movement to avoid quantity mismatches.",

        tip:
            "Regular stock reconciliation helps identify discrepancies between physical inventory and system records."
    },
    {
        id: "reorder-levels",
        type: "batching",

        title: "Reorder Levels & Safety Stock",

        description:
            "Automate replenishment planning by defining reorder levels, lead times and safety stock requirements.",

        points: [
            {
            title: "Average daily usage",
            description: "track normal consumption or sales quantity per day"
            },
            {
            title: "Lead time",
            description: "number of days required to receive stock from suppliers"
            },
            {
            title: "Safety stock",
            description: "maintain a buffer quantity to handle demand fluctuations"
            },
            {
            title: "Reorder point",
            description: "(Average Daily Usage × Lead Time) + Safety Stock"
            }
        ],

        bestPractice:
            "Review reorder levels regularly based on seasonal demand, supplier performance and historical consumption patterns.",

        tip:
            "Example: If daily usage is 10 pcs, lead time is 7 days and safety stock is 20 pcs, reorder point = (10 × 7) + 20 = 90 pcs."
    },
    {
        id: "bom",
        type: "bom",

        title: "Bill Of Materials (BOM)",

        description:
            "Define components, quantities and production requirements needed to manufacture a finished product.",

        points: [
            {
            title: "BOM Header",
            description: "finished item, unit and version information"
            },
            {
            title: "Component Lines",
            description: "item, quantity, UOM and wastage percentage"
            },
            {
            title: "Routing / Operations",
            description: "optional production or assembly process steps"
            },
            {
            title: "Yield & Scrap",
            description: "account for expected production output and losses"
            }
        ],

        example: {
            title: "Example BOM: Wooden Chair (1 Unit)",

            items: [
            "Seat (1 pcs)",
            "Backrest (1 pcs)",
            "Legs (4 pcs)",
            "Screws (12 pcs)"
            ],

            assemblyTime: "20 mins"
        },

        tip:
            "Maintain BOM versions so changes in materials, quantities and production methods can be tracked over time."
    },
    {
        id: "roadmap",
        type: "roadmap",

        title: "Roadmap: Inventory & Stock Management",

        description:
            "Follow this structured learning path to master inventory control, warehouse management and stock movement workflows in Tally.",

        steps: [
            {
            step: "01",
            title: "Setup Stock Masters",
            description:
                "Create stock items, groups, categories and define inventory masters (30-45 mins)."
            },

            {
            step: "02",
            title: "Configure UOM & Godowns",
            description:
                "Set up units of measure, warehouse locations and inventory structure (30-45 mins)."
            },

            {
            step: "03",
            title: "Manage Batches & Stock Movement",
            description:
                "Track batches, expiry dates, stock transfers and inventory adjustments (45-60 mins)."
            },

            {
            step: "04",
            title: "Reorder Levels & BOM",
            description:
                "Configure reorder controls, safety stock and bill of materials for manufacturing (90–120 mins)."
            }
        ]
    },
    {
        id: "practice",
        type: "practice",

        title: "Practice Labs & Templates",

        description:
            "Apply inventory concepts using practical stock management scenarios.",

        labs: [
            {
            title: "Stock Masters Setup",
            difficulty: "Easy",
            duration: "15 min",

            tasks: [
                "Create 10 stock items with categories and groups",
                "Assign appropriate Units of Measure (UOM)",
                "Enter opening stock quantities",
                "Verify item master reports"
            ]
            },

            {
            title: "Godown & Stock Transfer",
            difficulty: "Medium",
            duration: "20 min",

            tasks: [
                "Create Main Warehouse and Branch Godown",
                "Transfer 100 units between godowns",
                "Verify stock movement reports",
                "Check location-wise stock balances"
            ]
            },

            {
            title: "Batching & Expiry Management",
            difficulty: "Medium",
            duration: "20 min",

            tasks: [
                "Create batch-wise inventory items",
                "Enter manufacturing and expiry dates",
                "Track batch availability",
                "Generate expiry monitoring report"
            ]
            },

            {
            title: "BOM & Production Exercise",
            difficulty: "Advanced",
            duration: "30 min",

            tasks: [
                "Create a BOM for a finished product",
                "Add raw materials and quantities",
                "Record production of finished goods",
                "Verify consumption and stock updates"
            ]
            },

            {
            title: "Reorder & Safety Stock",
            difficulty: "Medium",
            duration: "15 min",

            tasks: [
                "Configure reorder levels for inventory items",
                "Set safety stock quantities",
                "Generate reorder reports",
                "Identify items requiring replenishment"
            ]
            }
        ],

        note:
            "Practice all exercises using a demo company before applying inventory controls to live business data."
    },
    /*
    {
        id: "images",
        type: "gallery",

        title: "Images & Visual Templates",

        description:
            "Visual examples of inventory management, warehouse operations and manufacturing workflows.",

        images: [
            {
            src: inventoryWarehouse,
            title: "Warehouse Storage",
            description:
                "Organized stock racks, bins and warehouse inventory management."
            },

            {
            src: inventoryTracking,
            title: "Inventory Tracking",
            description:
                "Barcode, stock monitoring and item management processes."
            },

            {
            src: inventoryManufacturing,
            title: "Manufacturing & BOM",
            description:
                "Production workflow and bill of materials planning."
            }
        ]
    }
    */
    ],
 },

 {
    slug: "payroll-management",

    title:
        "Payroll Management",
    subtitle: "Process employee payroll and salary management in TallyPrime",


    badge: "Payroll Management",

    duration: "5-7 Hours",

    heroDescription:
        "Employee masters, salary heads, statutory deductions (PF/ESI), payslip generation and monthly payroll processing. Includes templates and compliance notes.",

    heroImage: payrollImg,

    level: "Advanced",

    sections: [

        {
            id: "overview",
            type: "overview",

            title: "Overview",

            content:
                "This module guides students through practical payroll management in Tally, including employee master creation, salary structure configuration, statutory compliance, payslip generation and month-end payroll processing.",

            learn: [
                {
                icon: "users",
                title: "Employee Masters",
                description:
                    "Create employee records with personal, banking and employment details."
                },

                {
                icon: "wallet",
                title: "Salary Structures",
                description:
                    "Configure earnings, deductions and salary templates."
                },

                {
                icon: "shield",
                title: "PF & ESI Compliance",
                description:
                    "Understand statutory payroll deductions and contributions."
                },

                {
                icon: "receipt",
                title: "Payroll Processing",
                description:
                    "Generate payslips and process monthly salaries accurately."
                }
            ],

            note:
                "Accurate employee data and salary structures are essential for compliant payroll processing."
        },

        {
            id: "employee-master",
            type: "batching",

            title: "Employee Master",

            description:
                "Create and maintain employee records with personal, banking and employment details required for payroll processing.",

            points: [
                {
                title: "Employee code & name",
                description:
                    "Unique employee identifier used for payroll records and reporting."
                },

                {
                title: "Personal details",
                description:
                    "PAN, Aadhaar, date of birth, address and contact information."
                },

                {
                title: "Bank details",
                description:
                    "Account number, IFSC code and payment preferences for salary transfers."
                },

                {
                title: "Employment details",
                description:
                    "Date of joining, department, designation and employee category."
                },

                {
                title: "Salary structure",
                description:
                    "Assign earnings, deductions and salary templates to employees."
                },

                {
                title: "Statutory flags",
                description:
                    "Configure PF, ESI and other statutory applicability settings."
                }
            ],

            tip:
                "Use unique employee codes and verify PAN, Aadhaar and bank details before processing payroll to avoid payment failures."
        },
        {
            id: "salary-heads",
            type: "batching",

            title: "Salary Heads & Components",

            description:
                "Configure earnings, deductions and employer contributions that form an employee's salary structure.",

            points: [
                {
                title: "Basic Pay",
                description:
                    "Primary fixed salary component, usually forming the foundation for statutory calculations."
                },

                {
                title: "HRA",
                description:
                    "House Rent Allowance provided to employees for accommodation expenses."
                },

                {
                title: "Conveyance & Allowances",
                description:
                    "Additional benefits such as conveyance, medical and special allowances."
                },

                {
                title: "Gross Pay",
                description:
                    "Total earnings before deductions are applied."
                },

                {
                title: "Deductions",
                description:
                    "Employee PF, Employee ESI, Professional Tax, TDS and other recoveries."
                },

                {
                title: "Employer Contributions",
                description:
                    "Employer PF and ESI contributions maintained separately from employee deductions."
                }
            ],

            tip:
                "Create salary templates with predefined earnings and deductions to simplify employee onboarding and payroll processing."
        },
        {
            id: "statutory-deductions",
            type: "batching",

            title: "Statutory Deductions: PF, ESI & Tax Compliance",

            description:
                "Configure statutory payroll deductions and ensure compliance with government regulations.",

            points: [
                {
                title: "Provident Fund (PF)",
                description:
                    "Configure employee and employer PF contributions, PF numbers and wage categories."
                },

                {
                title: "Employee State Insurance (ESI)",
                description:
                    "Set up ESI eligibility, contribution rates and employee coverage details."
                },

                {
                title: "Professional Tax (PT)",
                description:
                    "Apply state-specific Professional Tax slabs and deduction rules."
                },

                {
                title: "Tax Deducted at Source (TDS)",
                description:
                    "Configure income tax calculations, exemptions and monthly tax deductions."
                },

                {
                title: "Contribution Rates",
                description:
                    "Maintain employee and employer contribution percentages as per current regulations."
                },

                {
                title: "Compliance Monitoring",
                description:
                    "Verify statutory settings regularly to ensure accurate payroll processing and reporting."
                }
            ],

            tip:
                "PF, ESI and tax regulations may change periodically. Always verify the latest contribution rates, salary limits and statutory rules before processing payroll."
        },
        {
            id: "payslip-generation",
            type: "bom",

            title: "Payslip Generation & Templates",

            description:
                "Generate professional payslips with complete salary, deduction and payment details.",

            points: [
                {
                title: "Company & Employee Details",
                description:
                    "Include company information, employee name, code and designation."
                },

                {
                title: "Pay Period & Payment Date",
                description:
                    "Specify salary month, payroll period and payment date."
                },

                {
                title: "Earnings Breakdown",
                description:
                    "Display Basic Pay, HRA, allowances and other earning components."
                },

                {
                title: "Deductions Breakdown",
                description:
                    "Show PF, ESI, Professional Tax, TDS and other deductions."
                },

                {
                title: "Net Pay",
                description:
                    "Calculate final payable salary in numbers and words."
                },

                {
                title: "Bank & Payment Details",
                description:
                    "Display bank account details and payment method."
                }
            ],

            example: {

                title: "Sample Payslip Summary",
                
                items: [
                "Employee: EMP001 - Sai Varma",
                "Payroll Period: August 2025",
                "Gross Earnings: ₹50,000",
                "PF Deduction: ₹6,000",
                "TDS Deduction: ₹1,200",
                "Net Salary: ₹42,800"
                ],

                assemblyTime: "20 mins"
            },

            tip:
                "Provide both PDF payslips and digital copies for employees. Maintain payslip archives for audits and future reference."
        },
        {
            id: "monthly-payroll",
            type: "steps",

            title: "Monthly Payroll Processing",

            duration: "20-30 Minutes",

            intro:
                "Follow a structured payroll workflow from attendance verification to salary disbursement and accounting entries.",

            steps: [
                {
                title: "Verify Attendance & Leaves",
                description:
                    "Review employee attendance, leave records, overtime and attendance exceptions for the payroll period."
                },

                {
                title: "Apply Salary Structures",
                description:
                    "Load salary templates, earnings, allowances, deductions and employee-specific adjustments."
                },

                {
                title: "Process Loans & Recoveries",
                description:
                    "Calculate loan repayments, salary advances and other employee recoveries."
                },

                {
                title: "Compute Statutory Contributions",
                description:
                    "Calculate PF, ESI, Professional Tax, TDS and generate required statutory reports."
                },

                {
                title: "Post Payroll Entries",
                description:
                    "Transfer payroll expenses, liabilities and deduction entries to the accounting system."
                },

                {
                title: "Generate Salary Payments",
                description:
                    "Create bank transfer files, NEFT payment files or salary disbursement reports."
                }
            ],

            checklist: [
                "Attendance approved",
                "Salary structures verified",
                "Loans and recoveries processed",
                "PF, ESI and tax calculations reviewed",
                "Payroll entries posted",
                "Bank payment file generated"
            ],

            note:
                "Always run a payroll preview before final processing. Verify statutory reports, payment amounts and employee balances, and take a backup before posting the final payroll."
        },
        {
            id: "roadmap",
            type: "roadmap",

            title: "Roadmap: From Employee Setup To Payroll Processing",

            description:
                "Follow this learning path step-by-step to master employee management, salary structures, statutory compliance and payroll processing.",

            steps: [
                {
                step: "01",
                title: "Employee Masters",
                description:
                    "Set up employee records with personal details, bank information, salary structures and statutory settings (30–40 mins)."
                },

                {
                step: "02",
                title: "Salary Heads",
                description:
                    "Create earnings, allowances, deductions and employer contribution components (30–40 mins)."
                },

                {
                step: "03",
                title: "Statutory Setup",
                description:
                    "Configure statutory deductions, contribution rates and compliance settings (45–60 mins)."
                },

                {
                step: "04",
                title: "Generate Payslips",
                description:
                    "Create payroll templates, calculate salaries and generate employee payslips (60–90 mins)."
                }
            ]
        },
        {
        id: "practice",
        type: "practice",

        title: "Practice Labs & Templates",

        description:
            "Apply your payroll knowledge using real-world employee, salary and compliance scenarios.",

        labs: [
            {
            title: "Employee Master Setup",
            difficulty: "Easy",
            duration: "15 min",

            tasks: [
                "Create 10 employee masters with unique employee codes",
                "Add PAN, Aadhaar and bank account details",
                "Assign departments and designations",
                "Configure PF and ESI eligibility"
            ]
            },

            {
            title: "Salary Structure Configuration",
            difficulty: "Easy",
            duration: "20 min",

            tasks: [
                "Create monthly and hourly salary templates",
                "Configure Basic, HRA and Special Allowance",
                "Add deduction components for PF, ESI and PT",
                "Assign salary structures to employees"
            ]
            },

            {
            title: "Payroll Processing",
            difficulty: "Medium",
            duration: "25 min",

            tasks: [
                "Run payroll preview for all employees",
                "Verify earnings and deduction calculations",
                "Generate final payslips in PDF format",
                "Review payroll summary reports"
            ]
            },

            {
            title: "Compliance & Payments",
            difficulty: "Medium",
            duration: "20 min",

            tasks: [
                "Generate PF and ESI challans",
                "Prepare monthly TDS summary",
                "Export NEFT bank payment file",
                "Simulate salary disbursement process"
            ]
            }
        ],

        note:
            "Always test payroll on a demo company and verify statutory calculations before processing live employee salaries."
        },
    ]
  },
  {
    slug: "reports-mis",

    title:
        "Reports & MIS",
    subtitle: "Generate business reports and management insights",

    badge: "Reports & MIS",

    duration: "4-5 Hours",

    heroDescription:
        "Learn how to generate accounting reports, analyze business performance, and create management dashboards using Trial Balance, Profit & Loss, Balance Sheet, Ratio Analysis and Daybook reports.",

    heroImage: reports,

    level: "Advanced",

    sections: [

        {
            id: "overview",
            type: "overview",

            title: "Overview",

            content:
                "This module teaches how to generate accounting reports and build MIS dashboards for better business decision-making. Learn to analyze Trial Balance, Profit & Loss, Balance Sheet, Ratio Analysis and Daybook reports while using filters and export options to create meaningful financial insights.",

            learn: [
                {
                icon: "scale",
                title: "Trial Balance",
                description:
                    "Verify ledger balances, analyze groups and validate accounting accuracy."
                },

                {
                icon: "chartcolumn",
                title: "Profit & Loss",
                description:
                    "Evaluate income, expenses and profitability across different periods."
                },

                {
                icon: "building",
                title: "Balance Sheet",
                description:
                    "Understand assets, liabilities and business financial position."
                },

                {
                icon: "chartpie",
                title: "MIS & Ratio Analysis",
                description:
                    "Track key performance indicators and generate management reports."
                }
            ],

            note:
                "Regular review of financial reports helps identify trends, improve decision-making and maintain business control."
        },
        {
            id: "trial-balance",
            type: "report",

            title: "Trial Balance",

            description:
                "Trial balance is a summary of ledger balances used to verify that total debits equal total credits.",

            points: [
                {
                    title: "Group & Ledger Drill-Down",
                    description:
                        "Analyze balances at group and ledger level for detailed review."
                },

                {
                    title: "Period Selection",
                    description:
                        "Generate monthly, quarterly or yearly trial balance reports."
                },

                {
                    title: "Opening & Closing Balances",
                    description:
                        "Include opening balances, closing balances and zero-balance ledgers."
                },

                {
                    title: "Export Options",
                    description:
                        "Export reports to PDF or Excel for audit and management review."
                }
            ],

            sampleTitle: "Sample Trial Balance",

            sample: [
                {
                    ledger: "Cash",
                    debit: "₹120,000",
                    credit: "-"
                },

                {
                    ledger: "Bank",
                    debit: "₹250,000",
                    credit: "-"
                },

                {
                    ledger: "Capital",
                    debit: "-",
                    credit: "₹300,000"
                },

                {
                    ledger: "Sales",
                    debit: "-",
                    credit: "₹70,000"
                }
            ],

            totalDebit: "₹370,000",

            totalCredit: "₹370,000",

            note:
                "A balanced trial balance confirms arithmetic accuracy but does not guarantee that all accounting errors are eliminated."
        },
        {
            id: "profit-loss",
            type: "batching",

            title: "Profit & Loss Account",

            description:
                "Shows revenue and expense performance over a period to help evaluate profitability and business growth.",

            points: [
                {
                    title: "Revenue",
                    description:
                        "Track sales income, service income and other operating revenue."
                },

                {
                    title: "Direct Costs & Gross Profit",
                    description:
                        "Analyze cost of goods sold and calculate gross profit margins."
                },

                {
                    title: "Operating Expenses",
                    description:
                        "Review administrative, selling and operational expenses."
                },

                {
                    title: "Net Profit",
                    description:
                        "Measure overall profitability after deducting all expenses and taxes."
                },

                {
                    title: "Comparative Analysis",
                    description:
                        "Compare current performance with previous periods and identify trends."
                }
            ],

            tip:
                "Use comparative reports and percentage analysis to identify profit drivers and control business costs."
        },
        {
            id: "balance-sheet",
            type: "batching",

            title: "Balance Sheet",

            description:
                "Provides a snapshot of the company's financial position by showing assets, liabilities and owner's equity at a specific date.",

            points: [
                {
                    title: "Assets",
                    description:
                        "View current and non-current assets such as cash, bank balances, inventory, debtors and fixed assets."
                },

                {
                    title: "Liabilities",
                    description:
                        "Track short-term and long-term obligations including creditors, loans and outstanding expenses."
                },

                {
                    title: "Owner's Equity",
                    description:
                        "Analyze capital invested, retained earnings and accumulated profits."
                },

                {
                    title: "Working Capital Analysis",
                    description:
                        "Compare current assets against current liabilities to assess liquidity."
                },

                {
                    title: "Debtor & Creditor Drill-Down",
                    description:
                        "Review ageing analysis and outstanding balances for better financial control."
                }
            ],

            tip:
                "A healthy balance sheet maintains an appropriate balance between assets, liabilities and equity while ensuring sufficient working capital."
        },
        {
            id: "ratio-analysis",
            type: "bom",

            title: "Ratio Analysis",

            description:
                "Financial ratios help evaluate liquidity, profitability, efficiency and leverage to measure business performance and financial health.",

            points: [
                {
                    title: "Liquidity",
                    description:
                        "Current Ratio = Current Assets ÷ Current Liabilities. Measures the ability to meet short-term obligations."
                },

                {
                    title: "Profitability",
                    description:
                        "Net Profit Margin = Net Profit ÷ Net Sales. Indicates overall profitability."
                },

                {
                    title: "Efficiency",
                    description:
                        "Inventory Turnover = Cost of Goods Sold ÷ Average Inventory. Measures inventory utilization."
                },

                {
                    title: "Leverage",
                    description:
                        "Debt-to-Equity Ratio = Total Debt ÷ Equity. Evaluates financial risk and dependence on borrowing."
                }
            ],

            example: {
                title: "Example Ratio Calculation",

                items: [
                    "Current Assets = ₹200,000",
                    "Current Liabilities = ₹100,000",
                    "Current Ratio = 200,000 ÷ 100,000",
                    "Current Ratio = 2.0"
                ],

                assemblyTime: "Analysis Time: 5 mins"
            },

            tip:
                "Compare ratios across multiple periods and industry benchmarks to identify trends and performance gaps."
        },
        {
            id: "daybook",
            type: "batching",

            title: "Daybook / Journal",

            description:
                "Daybook records all accounting transactions in chronological order, helping users review entries, verify activity and trace financial movements.",

            points: [
                {
                    title: "Transaction History",
                    description:
                        "View all vouchers and accounting entries recorded during a selected period."
                },

                {
                    title: "Receipt & Payment Review",
                    description:
                        "Monitor daily cash receipts, bank receipts, payments and fund movements."
                },

                {
                    title: "Error Detection",
                    description:
                        "Identify unusual entries, duplicate vouchers or incorrect postings quickly."
                },

                {
                    title: "Advanced Filtering",
                    description:
                        "Filter transactions by voucher type, ledger, party name, amount or date range."
                },

                {
                    title: "Audit Trail",
                    description:
                        "Trace the source of transactions and drill down into supporting vouchers."
                }
            ],

            tip:
                "Regularly review the daybook to identify posting errors, unusual transactions and missing entries before generating financial reports."
        },
        {
            id: "custom-filters",
            type: "batching",

            title: "Customizable Report Filters",

            description:
                "Use advanced filters to generate focused reports and gain deeper business insights across departments, periods and business segments.",

            points: [
                {
                    title: "Date & Period Filters",
                    description:
                        "Analyze reports by custom date range, month, quarter or financial year."
                },

                {
                    title: "Cost Center Analysis",
                    description:
                        "Filter data by department, branch, project or profit center."
                },

                {
                    title: "Customer & Vendor Segmentation",
                    description:
                        "Review performance and transactions for specific customers, suppliers or business groups."
                },

                {
                    title: "Inventory & SKU Filters",
                    description:
                        "Generate reports for selected products, categories, stock groups or warehouses."
                },

                {
                    title: "Currency & Consolidation",
                    description:
                        "View multi-currency reports and consolidated business performance where applicable."
                }
            ],

            tip:
                "Save frequently used filter combinations as custom views to speed up report generation and improve decision-making."
        },
        {
            id: "roadmap",
            type: "roadmap",

            title: "Roadmap: 2–4 Hour Learning Plan",

            description:
                "Follow this structured path to understand financial reports, analyze business performance and build management information reports.",

            steps: [
                {
                    step: "01",
                    title: "Trial Balance",
                    description:
                        "Learn to verify ledger balances, drill down into accounts and validate accounting accuracy (20–30 mins)."
                },

                {
                    step: "02",
                    title: "Profit & Loss Analysis",
                    description:
                        "Analyze revenue, expenses, gross profit and net profit using comparative reporting (30–45 mins)."
                },

                {
                    step: "03",
                    title: "Balance Sheet",
                    description:
                        "Understand assets, liabilities, equity and evaluate the overall financial position of the business (20–30 mins)."
                },

                {
                    step: "04",
                    title: "Ratio Analysis & MIS",
                    description:
                        "Interpret key financial ratios and use customizable filters to generate business insights (30–40 mins)."
                }
            ]
        },
        {
            id: "practice",
            type: "practice",

            title: "Practice Labs & Report Walkthroughs",

            description:
                "Apply your reporting knowledge through practical exercises that focus on financial analysis, dashboard creation and management reporting.",

            labs: [
                {
                    title: "Trial Balance Review",
                    difficulty: "Easy",
                    duration: "15 min",

                    tasks: [
                        "Generate a Trial Balance for Q1",
                        "Identify debit and credit totals",
                        "Verify ledger balances",
                        "Investigate any differences"
                    ]
                },

                {
                    title: "Profit & Loss Analysis",
                    difficulty: "Medium",
                    duration: "20 min",

                    tasks: [
                        "Generate a Profit & Loss report",
                        "Enable comparative columns",
                        "Identify major expense categories",
                        "Analyze gross profit and net profit trends"
                    ]
                },

                {
                    title: "Balance Sheet & Ratios",
                    difficulty: "Medium",
                    duration: "20 min",

                    tasks: [
                        "Generate a Balance Sheet report",
                        "Calculate working capital",
                        "Compute Current Ratio",
                        "Evaluate liquidity position"
                    ]
                },

                {
                    title: "MIS Dashboard Reporting",
                    difficulty: "Advanced",
                    duration: "25 min",

                    tasks: [
                        "Filter top 5 customers by revenue",
                        "Analyze receivable ageing",
                        "Export reports to Excel",
                        "Prepare a management summary dashboard"
                    ]
                }
            ],

            note:
                "Practice using report filters and saved views regularly to improve reporting efficiency and decision-making."
        }
    ]
  },
  {
    slug: "advanced-tallyprime",

    title:
        "Advanced TallyPrime",
    subtitle:"Master advanced accounting and business automation features",

    badge: "Advanced TallyPrime",

    duration: "4-5 Hours",

    heroDescription:
        "Master advanced TallyPrime features including cost centers, budgets, multi-currency accounting, interest calculations, scenario management, security controls and business automation.",

    heroImage: advancedImg,
    level: "Expert",

    sections: [

        {
            id: "overview",
            type: "overview",

            title: "Overview",

            content:
                "This module focuses on advanced TallyPrime capabilities used by growing businesses and accounting professionals. Learn cost center accounting, budget management, multi-currency transactions, interest calculations, scenario analysis, security controls, audit features and workflow automation to improve operational efficiency and financial decision-making.",

            learn: [
                {
                    icon: "building",

                    title: "Cost Centers & Budgeting",

                    description:
                        "Track department-wise profitability and monitor budget versus actual performance."
                },

                {
                    icon: "globe",

                    title: "Multi-Currency Accounting",

                    description:
                        "Manage foreign currency transactions, exchange rates and international business reporting."
                },

                {
                    icon: "shield",

                    title: "Security & Audit Controls",

                    description:
                        "Configure user permissions, audit trails and data protection settings."
                },

                {
                    icon: "settings",

                    title: "Automation & Productivity",

                    description:
                        "Use voucher classes, recurring transactions and advanced Tally features to reduce manual work."
                }
            ],

            note:
                "Advanced TallyPrime features help organizations improve control, automate processes and gain deeper financial insights for better decision-making."
        },

        {
            id: "cost-centers",
            type: "batching",

            title: "Cost Centers & Cost Categories",

            description:
                "Cost centers help track income and expenses department-wise, project-wise or branch-wise without creating separate companies. They provide deeper insight into business performance and profitability.",

            points: [
                {
                    title: "Cost Centers",
                    description:
                        "Create departments, branches or projects as cost centers to track financial performance individually."
                },

                {
                    title: "Cost Categories",
                    description:
                        "Group multiple cost centers under a common category for consolidated reporting."
                },

                {
                    title: "Department Tracking",
                    description:
                        "Analyze expenses and revenues separately for Sales, Marketing, HR, Production and other departments."
                },

                {
                    title: "Project Profitability",
                    description:
                        "Track project-specific costs and revenues to measure profitability and performance."
                },

                {
                    title: "Branch Performance Analysis",
                    description:
                        "Compare income, expenses and profit across multiple business locations."
                }
            ],

            tip:
                "Use cost centers consistently across vouchers to generate meaningful departmental and project-wise reports."
        },

        {
            id: "budgets-controls",
            type: "steps",

            title: "Budgets & Controls",

            duration: "20-30 Minutes",

            intro:
                "Learn how to create budgets, define spending limits, compare actual performance against targets and use budget controls for effective financial planning.",

            steps: [
                {
                    title: "Create Budget Groups",
                    description:
                        "Define budgets for departments, cost centers, projects or ledger groups."
                },

                {
                    title: "Set Budget Amounts",
                    description:
                        "Enter monthly, quarterly or annual budget targets for income and expenses."
                },

                {
                    title: "Assign Cost Centers",
                    description:
                        "Link budgets to specific cost centers for department-wise monitoring."
                },

                {
                    title: "Monitor Actual vs Budget",
                    description:
                        "Compare actual transactions against budgeted figures and identify variances."
                },

                {
                    title: "Analyze Variances",
                    description:
                        "Review overspending, underutilization and performance gaps using budget reports."
                }
            ],

            checklist: [
                "Budget groups created",
                "Budget targets assigned",
                "Cost centers linked",
                "Variance reports generated",
                "Performance reviewed"
            ],

            note:
                "Budgets are most effective when reviewed regularly. Compare actual results with targets every month to maintain financial discipline and improve planning accuracy."
        },

        {
            id: "interest-calculation",
            type: "batching",

            title: "Interest Calculation",

            description:
                "Automate interest calculations for receivables and payables to improve accuracy, reduce manual effort and monitor outstanding balances effectively.",

            points: [
                {
                    title: "Simple Interest",
                    description:
                        "Calculate interest based on principal amount, rate and time period using standard interest formulas."
                },

                {
                    title: "Compound Interest",
                    description:
                        "Apply interest on both principal and accumulated interest for long-term receivables and payables."
                },

                {
                    title: "Customer Interest",
                    description:
                        "Automatically calculate interest on overdue customer balances and outstanding invoices."
                },

                {
                    title: "Supplier Interest",
                    description:
                        "Track interest payable to suppliers and vendors based on agreed payment terms."
                },

                {
                    title: "Interest Reports",
                    description:
                        "Generate detailed reports showing interest receivable, payable and outstanding amounts."
                }
            ],

            tip:
                "Configure interest parameters directly in ledger masters to automate calculations and ensure consistency across transactions."
        },

        {
            id: "security-audit",
            type: "steps",

            title: "Security & Audit Controls",

            duration: "20-30 Minutes",

            intro:
                "Learn how to secure company data, manage user permissions, maintain audit trails and implement best practices for data protection and compliance.",

            steps: [
                {
                    title: "Create User Roles",
                    description:
                        "Define users such as Administrator, Accountant, Auditor and Data Entry Operator with appropriate responsibilities."
                },

                {
                    title: "Configure Access Rights",
                    description:
                        "Control access to vouchers, reports, masters and company features based on user roles."
                },

                {
                    title: "Enable Security Controls",
                    description:
                        "Set passwords, user authentication rules and company-level security settings."
                },

                {
                    title: "Monitor Audit Trail",
                    description:
                        "Track modifications, deletions and user activities to maintain accountability and transparency."
                },

                {
                    title: "Backup & Data Protection",
                    description:
                        "Schedule regular backups and implement recovery procedures to safeguard business data."
                }
            ],

            checklist: [
                "User roles created",
                "Access rights configured",
                "Security settings enabled",
                "Audit trail reviewed",
                "Backup schedule established"
            ],

            note:
                "Review user permissions regularly and maintain secure backups to prevent unauthorized access, accidental data loss and compliance issues."
        },

        {
            id: "tally-automation",
            type: "batching",

            title: "Tally Automation",

            description:
                "Leverage advanced automation features in TallyPrime to reduce manual effort, improve accuracy and streamline day-to-day accounting operations.",

            points: [
                {
                    title: "Voucher Classes",
                    description:
                        "Automate accounting allocations and ledger postings while recording transactions."
                },

                {
                    title: "Memorandum Vouchers",
                    description:
                        "Record provisional transactions for review without affecting actual books of accounts."
                },

                {
                    title: "Recurring Transactions",
                    description:
                        "Automate repetitive entries such as rent, salaries, subscriptions and utility expenses."
                },

                {
                    title: "Auto Calculations",
                    description:
                        "Configure automatic tax, discount, interest and inventory calculations to minimize errors."
                },

                {
                    title: "Data Import & Export",
                    description:
                        "Import transactions from Excel and export reports in multiple formats for analysis and sharing."
                }
            ],

            tip:
                "Use automation features carefully and test configurations in a demo company before applying them to live business data."
        },

        {
            id: "roadmap",
            type: "roadmap",

            title: "Roadmap: From Advanced Accounting To Business Automation",

            description:
                "Follow this structured learning path to master advanced TallyPrime features used by accountants, finance teams and business managers.",

            steps: [
                {
                    step: "01",
                    title: "Cost Centers & Budgeting",
                    description:
                        "Track department-wise profitability and compare budgeted versus actual performance."
                },

                {
                    step: "02",
                    title: "Interest & Scenario Management",
                    description:
                        "Automate interest calculations and create business scenarios for forecasting and analysis."
                },

                {
                    step: "03",
                    title: "Security & Audit Controls",
                    description:
                        "Configure user permissions, audit trails and data protection mechanisms."
                },

                {
                    step: "04",
                    title: "Tally Automation",
                    description:
                        "Automate recurring transactions, voucher entries, calculations and reporting workflows."
                }
            ]
        },

        {
            id: "practice",
            type: "practice",

            title: "Practice Labs & Advanced Scenarios",

            description:
                "Apply advanced TallyPrime concepts through hands-on exercises involving budgeting, multi-currency accounting, automation and security controls.",

            labs: [
                {
                    title: "Department Cost Tracking",
                    difficulty: "Easy",
                    duration: "15 min",

                    tasks: [
                        "Create Sales and Marketing cost centers",
                        "Allocate expenses to each department",
                        "Record department-wise transactions",
                        "Generate cost center profitability report"
                    ]
                },

                {
                    title: "Budget Variance Analysis",
                    difficulty: "Medium",
                    duration: "20 min",

                    tasks: [
                        "Create an annual sales budget",
                        "Define monthly expense budgets",
                        "Record actual transactions",
                        "Analyze Budget vs Actual reports"
                    ]
                },

                {
                    title: "Multi-Currency Transactions",
                    difficulty: "Medium",
                    duration: "20 min",

                    tasks: [
                        "Create a USD customer ledger",
                        "Record an export sales invoice",
                        "Configure exchange rates",
                        "Review forex gain/loss reports"
                    ]
                },

                {
                    title: "Interest & Scenario Management",
                    difficulty: "Advanced",
                    duration: "25 min",

                    tasks: [
                        "Enable interest calculation for customers",
                        "Generate interest receivable report",
                        "Create optional vouchers",
                        "Analyze business scenarios without affecting actual books"
                    ]
                },

                {
                    title: "Security & Automation Setup",
                    difficulty: "Advanced",
                    duration: "30 min",

                    tasks: [
                        "Create Accountant and Auditor user roles",
                        "Configure access permissions",
                        "Enable audit trail",
                        "Create recurring transaction templates",
                        "Export reports to Excel and PDF"
                    ]
                }
            ],

            note:
                "Complete all labs using a demo company first. Advanced features such as security controls, automation and scenario management should be tested thoroughly before implementation in a live business environment."
        }

    ]
  }
];