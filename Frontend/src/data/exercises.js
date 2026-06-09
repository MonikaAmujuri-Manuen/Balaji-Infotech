export const sidebarNavigation = [
  {
    id: "learn",
    label: "What You'll Learn",
  },
  {
    id: "steps",
    label: "Lab Steps",
  },
  {
    id: "dataset",
    label: "Practice Dataset",
  },
  {
    id: "quiz",
    label: "Quiz Assessment",
  },
];

export const exercises = [
  {
    slug: "company-setup",
    id: 1,
    slug: "company-setup",
    title: "Company Setup & Opening Balances",
    level: "Beginner",
    duration: "30-45 mins",

    description:
      "Create a new company, configure financial year, create ledgers and enter opening balances.",

    objectives: [
      "Create a company",
      "Configure financial year",
      "Create primary ledgers",
      "Generate Trial Balance",
    ],

    heroHighlights: [
      "Hands-on Practice",
      "Real-world Scenario",
      "Quiz Assessment",
    ],

    checklist: [
      "Company created",
      "Ledgers created",
      "Opening balances entered",
      "Trial Balance generated",
    ],

    steps: [
    {
      id: 1,
      title: "Create Company",
      duration: "5 mins",
      objective: "Create a new company in Tally Prime.",

      instructions: [
        "Open Gateway of Tally",
        "Select Create Company",
        "Enter company name as DemoCo Pvt Ltd",
        "Set Financial Year Start Date",
        "Save the company"
      ],

      expectedResult:
        "Company is created successfully and opens in Gateway of Tally.",
    },

    {
      id: 2,
      title: "Set Preferences",
      duration: "3 mins",

      objective:
        "Configure company preferences for accounting.",

      instructions: [
        "Open Company Features",
        "Enable required accounting options",
        "Enable Opening Balance option",
        "Save settings"
      ],

      expectedResult:
        "Company settings are configured correctly.",
    },

    {
      id: 3,
      title: "Create Ledgers & Groups",
      duration: "10 mins",

      objective:
        "Create the required ledgers for the exercise.",

      instructions: [
        "Create Cash ledger",
        "Create HDFC Bank ledger",
        "Create Capital Account ledger",
        "Create Outstanding Expenses ledger"
      ],

      expectedResult:
        "All required ledgers are available.",
    },

    {
      id: 4,
      title: "Enter Opening Balances",
      duration: "10 mins",

      objective:
        "Enter opening balances using the provided dataset.",

      instructions: [
        "Open Ledger Alteration",
        "Enter opening balances",
        "Verify debit and credit values",
        "Save changes"
      ],

      expectedResult:
        "All balances are entered successfully.",
    },

    {
      id: 5,
      title: "Reconcile & Adjust",
      duration: "5 mins",

      objective:
        "Balance debits and credits if required.",

      instructions: [
        "Check Trial Balance",
        "Identify difference",
        "Create adjustment entry",
        "Verify totals"
      ],

      expectedResult:
        "Trial Balance is balanced.",
    },

    {
      id: 6,
      title: "Generate Trial Balance",
      duration: "5 mins",

      objective:
        "Generate and export Trial Balance report.",

      instructions: [
        "Open Reports",
        "Select Trial Balance",
        "Verify balances",
        "Export PDF"
      ],

      expectedResult:
        "Trial Balance report exported successfully.",
    },
    ],

    practiceDataset: {
      title: "Opening Balance Dataset",

      description:
        "Use these sample balances while completing the exercise.",

      columns: [
        "Ledger",
        "Group",
        "Opening Balance",
      ],

      entries: [
        {
          ledger: "Capital Account",
          group: "Capital",
          balance: "300,000 (Cr)",
        },
        {
          ledger: "Cash",
          group: "Cash-in-Hand",
          balance: "8,000 (Dr)",
        },
        {
          ledger: "HDFC Bank",
          group: "Banks",
          balance: "22,000 (Dr)",
        },
        {
          ledger: "Stock in Hand",
          group: "Assets",
          balance: "50,000 (Dr)",
        },
        {
          ledger: "Outstanding Expenses",
          group: "Liabilities",
          balance: "4,000 (Cr)",
        },
      ],

      note:
        "Total Debits and Credits may require adjustment depending on migration data.",
    },

    quiz: [
      {
        id: 1,
        question:
          "Which voucher type is commonly used to enter opening balances?",
        options: [
          "Payment Voucher",
          "Receipt Voucher",
          "Journal Voucher",
          "Contra Voucher",
        ],
        correctAnswer: "Journal Voucher",
      },
      {
        id: 2,
        question:
          "Which report helps verify ledger balances?",
        options: [
          "Day Book",
          "Trial Balance",
          "Cash Flow",
          "Purchase Register",
        ],
        correctAnswer: "Trial Balance",
      },
      {
        id: 3,
        question:
          "Which ledger group should HDFC Bank belong to?",
        options: [
          "Capital",
          "Banks",
          "Expenses",
          "Liabilities",
        ],
        correctAnswer: "Banks",
      },
    ],
  },

  {
    id: 2,
    slug: "gst-invoice-return",

    title: "GST Invoice & Return",

    level: "Intermediate",

    duration: "60-90 mins",

    description:
      "Create GST-compliant invoices, post sales and purchase vouchers, generate GSTR-1 and GSTR-3B summaries, and reconcile outward supplies.",

    objectives: [
      "Configure GST settings",
      "Create GST invoices",
      "Generate GSTR-1",
      "Prepare GSTR-3B summary",
    ],

    checklist: [
      "GST enabled & tax ledgers created",
      "Customer & supplier GSTIN validated",
      "Invoices raised with HSN/SAC & tax breakup",
      "GSTR-1 & GSTR-3B prepared",
      "Reconciliation completed",
      "Quiz completed",
    ],

    steps: [
      {
        id: 1,
        title: "Enable GST & Create Tax Ledgers",
        duration: "10 mins",

        objective:
          "Configure GST in company settings and create tax ledgers.",

        instructions: [
          "Open Company Features",
          "Enable GST",
          "Set GST Registration Type",
          "Create CGST 9% ledger",
          "Create SGST 9% ledger",
          "Create IGST 18% ledger",
        ],

        expectedResult:
          "GST is enabled and tax ledgers are available."
      },

      {
        id: 2,
        title: "Create Customer & Supplier Masters",
        duration: "10 mins",

        objective:
          "Create party ledgers with GST details.",

        instructions: [
          "Create customer ledger",
          "Enter GSTIN",
          "Select state and registration type",
          "Create supplier ledger",
          "Save all parties"
        ],

        expectedResult:
          "Customer and supplier masters are ready."
      },

      {
        id: 3,
        title: "Raise GST Invoices",
        duration: "15 mins",

        objective:
          "Create B2B, B2C and Export invoices.",

        instructions: [
          "Create Sales Voucher",
          "Select customer",
          "Enter item details",
          "Apply GST taxes",
          "Save invoice"
        ],

        expectedResult:
          "All invoices are generated successfully."
      },

      {
        id: 4,
        title: "Post Purchase & Sales Entries",
        duration: "10 mins",

        objective:
          "Record GST transactions correctly.",

        instructions: [
          "Create purchase voucher",
          "Create sales voucher",
          "Verify GST calculation",
          "Save entries"
        ],

        expectedResult:
          "Sales and purchase vouchers are recorded."
      },

      {
        id: 5,
        title: "Generate GSTR-1",
        duration: "10 mins",

        objective:
          "Generate outward supplies report.",

        instructions: [
          "Open GST Reports",
          "Select GSTR-1",
          "Choose return period",
          "Verify values",
          "Export CSV"
        ],

        expectedResult:
          "GSTR-1 report generated successfully."
      },

      {
        id: 6,
        title: "Prepare GSTR-3B Summary",
        duration: "10 mins",

        objective:
          "Review tax liability and summary values.",

        instructions: [
          "Open GSTR-3B report",
          "Review taxable supplies",
          "Verify tax liability",
          "Save summary"
        ],

        expectedResult:
          "GSTR-3B summary is prepared."
      },

      {
        id: 7,
        title: "Reconcile GST Reports",
        duration: "15 mins",

        objective:
          "Match invoices with GST returns.",

        instructions: [
          "Compare sales register",
          "Verify invoice values",
          "Identify mismatches",
          "Document corrections"
        ],

        expectedResult:
          "GST reconciliation completed successfully."
      },
    ],

    practiceDataset: {
      title: "GST Invoice Dataset",

      description:
        "Use the following invoices while completing the lab.",
      
      columns: [
        "Invoice",
        "Type",
        "Tax",
        "Amount",
      ],

      entries: [
        {
          invoice: "INV-2001",
          type: "B2B (Taxable)",
          tax: "CGST 9% + SGST 9%",
          amount: "₹50,000",
        },
        {
          invoice: "INV-2002",
          type: "B2C (Taxable)",
          tax: "IGST 18%",
          amount: "₹2,500",
        },
        {
          invoice: "INV-2003",
          type: "Export (Zero Rated)",
          tax: "Nil (Export)",
          amount: "₹120,000",
        },
      ],

      note:
        "Ensure HSN/SAC codes and GST rates are entered correctly."
    },

    quiz: [
      {
        id: 1,
        question:
          "Which GST return contains outward supply details?",

        options: [
          "GSTR-1",
          "GSTR-2A",
          "GSTR-3B",
          "GSTR-9"
        ],

        correctAnswer: "GSTR-1",
      },

      {
        id: 2,
        question:
          "Which tax applies to an interstate taxable supply?",

        options: [
          "CGST",
          "SGST",
          "IGST",
          "CESS"
        ],

        correctAnswer: "IGST",
      },

      {
        id: 3,
        question:
          "What is required for GST invoice reporting?",

        options: [
          "PAN only",
          "GSTIN",
          "Aadhaar",
          "Passport"
        ],

        correctAnswer: "GSTIN",
      },
    ],
  },

  {
    id: 3,

    slug: "inventory-stock",

    title: "Inventory Movement & Stock Valuation",

    level: "Intermediate",

    duration: "45-60 mins",

    description:
      "Create stock items, configure godowns, perform stock transfers, record stock journals and generate stock valuation reports.",

    objectives: [
      "Create stock items",
      "Configure godowns",
      "Transfer inventory",
      "Generate valuation reports",
    ],

    checklist: [
      "Stock items created",
      "Godowns configured",
      "Stock transfer completed",
      "Stock journal recorded",
      "Valuation report generated",
      "Quiz completed",
    ],

    steps: [
      {
        id: 1,

        title: "Create Stock Items & UOM",

        duration: "10 mins",

        objective:
          "Create stock masters with units of measure and opening quantities.",

        instructions: [
          "Open Stock Item Creation",
          "Enter item name and code",
          "Assign UOM",
          "Enter opening quantity",
          "Save stock item",
        ],

        expectedResult:
          "Stock items are created successfully.",
      },

      {
        id: 2,

        title: "Configure Godowns",

        duration: "5 mins",

        objective:
          "Create warehouses for inventory tracking.",

        instructions: [
          "Open Godown Creation",
          "Create Main Warehouse",
          "Create Branch Warehouse",
          "Save configuration",
        ],

        expectedResult:
          "Godowns are available for stock movement.",
      },

      {
        id: 3,

        title: "Transfer Stock Between Godowns",

        duration: "10 mins",

        objective:
          "Move inventory from one warehouse to another.",

        instructions: [
          "Open Stock Transfer Voucher",
          "Select source godown",
          "Select destination godown",
          "Enter transfer quantity",
          "Save transaction",
        ],

        expectedResult:
          "Inventory transferred successfully.",
      },

      {
        id: 4,

        title: "Create Stock Journal Entry",

        duration: "10 mins",

        objective:
          "Record production and consumption entries.",

        instructions: [
          "Open Stock Journal",
          "Select raw materials",
          "Enter consumption quantity",
          "Enter finished goods quantity",
          "Save journal",
        ],

        expectedResult:
          "Stock journal entry recorded successfully.",
      },

      {
        id: 5,

        title: "Generate Stock Valuation Report",

        duration: "5 mins",

        objective:
          "Review stock value and inventory balances.",

        instructions: [
          "Open Inventory Reports",
          "Select Stock Valuation",
          "Choose valuation method",
          "Verify balances",
          "Export report",
        ],

        expectedResult:
          "Stock valuation report generated.",
      },

      {
        id: 6,

        title: "Perform Inventory Reconciliation",

        duration: "5 mins",

        objective:
          "Compare physical stock with system stock.",

        instructions: [
          "Review stock balances",
          "Compare physical count",
          "Identify differences",
          "Record adjustments",
        ],

        expectedResult:
          "Inventory reconciliation completed.",
      },
    ],

    practiceDataset: {
      title: "Stock Inventory Dataset",

      description:
        "Use the following stock items while completing the lab.",

      columns: [
        "Item Code",
        "Description",
        "UOM",
        "Opening Qty",
      ],

      entries: [
        {
          itemCode: "RM-COT-001",
          description: "Cotton Fabric",
          uom: "m",
          openingQty: "500",
        },

        {
          itemCode: "RM-WOOD-01",
          description: "Timber",
          uom: "kg",
          openingQty: "200",
        },

        {
          itemCode: "FG-CH-01",
          description: "Wooden Chair",
          uom: "pcs",
          openingQty: "50",
        },

        {
          itemCode: "PK-BOX-01",
          description: "Packaging Box",
          uom: "pcs",
          openingQty: "200",
        },
      ],

      note:
        "Ensure opening quantities and UOM values are entered correctly.",
    },

    quiz: [
      {
        id: 1,

        question:
          "Which inventory valuation method assumes oldest stock is consumed first?",

        options: [
          "FIFO",
          "Weighted Average",
          "Standard Cost",
          "Moving Average",
        ],

        correctAnswer: "FIFO",
      },

      {
        id: 2,

        question:
          "Which feature is used to transfer stock between warehouses?",

        options: [
          "Payment Voucher",
          "Receipt Voucher",
          "Stock Transfer",
          "Contra Voucher",
        ],

        correctAnswer: "Stock Transfer",
      },

      {
        id: 3,

        question:
          "What is the purpose of a godown in inventory management?",

        options: [
          "Customer Management",
          "Tax Calculation",
          "Stock Storage",
          "Payroll Processing",
        ],

        correctAnswer: "Stock Storage",
      },
    ],
  },

  {
    id: 4,

    slug: "payroll-management",

    title: "Payroll Month End",

    level: "Advanced",

    duration: "60 mins",

    description:
      "Create employee records, configure salary structures, process attendance, compute payroll and generate payslips with statutory deductions.",

    objectives: [
      "Create employee masters",
      "Configure salary templates",
      "Process attendance",
      "Generate payslips",
    ],

    checklist: [
      "Employees created with PAN & bank details",
      "Salary templates configured",
      "Attendance imported / verified",
      "Payroll processed successfully",
      "Payslips generated & bank file exported",
      "Quiz completed",
    ],

    steps: [
      {
        id: 1,

        title: "Create Employee Masters",

        duration: "10 mins",

        objective:
          "Create employee records with personal, bank and statutory details.",

        instructions: [
          "Create employee master",
          "Enter PAN details",
          "Enter bank details",
          "Assign department",
          "Save employee record",
        ],

        expectedResult:
          "Employee masters are created successfully.",
      },

      {
        id: 2,

        title: "Define Salary Templates",

        duration: "10 mins",

        objective:
          "Configure salary structures and earning components.",

        instructions: [
          "Create salary template",
          "Add Basic Pay",
          "Add HRA",
          "Add Special Allowance",
          "Configure deductions",
        ],

        expectedResult:
          "Salary templates are configured.",
      },

      {
        id: 3,

        title: "Process Attendance",

        duration: "10 mins",

        objective:
          "Import or enter monthly attendance records.",

        instructions: [
          "Open attendance module",
          "Import attendance data",
          "Verify working days",
          "Check leave entries",
          "Save attendance",
        ],

        expectedResult:
          "Attendance records processed successfully.",
      },

      {
        id: 4,

        title: "Compute Payroll",

        duration: "10 mins",

        objective:
          "Calculate gross salary, deductions and net pay.",

        instructions: [
          "Run payroll process",
          "Verify earnings",
          "Verify deductions",
          "Check PF and ESI",
          "Approve payroll",
        ],

        expectedResult:
          "Payroll calculated successfully.",
      },

      {
        id: 5,

        title: "Process Loan & Recoveries",

        duration: "5 mins",

        objective:
          "Apply employee loan deductions and recoveries.",

        instructions: [
          "Open employee loan details",
          "Enter recovery amount",
          "Verify deduction",
          "Save payroll changes",
        ],

        expectedResult:
          "Loan deductions processed successfully.",
      },

      {
        id: 6,

        title: "Generate Payslips",

        duration: "10 mins",

        objective:
          "Generate employee payslips and salary reports.",

        instructions: [
          "Open payroll reports",
          "Generate payslips",
          "Review salary details",
          "Export PDF",
        ],

        expectedResult:
          "Payslips generated successfully.",
      },

      {
        id: 7,

        title: "Export Bank File & Reports",

        duration: "5 mins",

        objective:
          "Generate bank transfer file and statutory reports.",

        instructions: [
          "Generate bank file",
          "Review PF report",
          "Review ESI report",
          "Export reports",
        ],

        expectedResult:
          "Payroll reports exported successfully.",
      },
    ],

    practiceDataset: {
      title: "Employee Salary Dataset",

      description:
        "Use the following employee data while completing the payroll exercise.",

      columns: [
        "Emp Code",
        "Name",
        "Template",
        "CTC (₹)",
      ],

      entries: [
        {
          empCode: "EMP001",
          name: "Asha Rao",
          template: "Monthly-Fixed",
          ctc: "600000",
        },

        {
          empCode: "EMP002",
          name: "Ravi Kumar",
          template: "Monthly-Fixed",
          ctc: "480000",
        },

        {
          empCode: "EMP003",
          name: "Neha Singh",
          template: "Hourly-Contract",
          ctc: "240000",
        },

        {
          empCode: "EMP004",
          name: "Vikram Patel",
          template: "Monthly-Fixed",
          ctc: "720000",
        },
      ],

      note:
        "Verify attendance, deductions and salary structure before processing payroll.",
    },

    quiz: [
      {
        id: 1,

        question:
          "Which document provides salary details to an employee?",

        options: [
          "Invoice",
          "Payslip",
          "Purchase Order",
          "Voucher",
        ],

        correctAnswer: "Payslip",
      },

      {
        id: 2,

        question:
          "Which deduction is commonly applicable to salaried employees in India?",

        options: [
          "GST",
          "PF",
          "Custom Duty",
          "Excise Duty",
        ],

        correctAnswer: "PF",
      },

      {
        id: 3,

        question:
          "What is calculated after deducting taxes and deductions from gross salary?",

        options: [
          "CTC",
          "Net Pay",
          "Basic Pay",
          "HRA",
        ],

        correctAnswer: "Net Pay",
      },
    ],
  }
];