import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import tallyPrime from "../assets/tallyPrime.png";
import tallyServer from "../assets/tallyServer.png";
import tallyAws from "../assets/tallyAws.png"
import tallyMobile from "../assets/tallyMobile.png"
import dashboardImage from "../assets/products-dashboard.png";


export default function Products() {
  return (
    <>

      {/* ================= HERO SECTION ================= */}
      {false && (
      <section
  className="
    relative
    overflow-hidden
    pt-24
    sm:pt-28
    lg:pt-32
    pb-8
    sm:pb-10
    bg-white
  "
>
        <div
          className="
            absolute
            top-0
            left-1/2
            -translate-x-1/2
            w-[450px]
            h-[450px]
            sm:w-[600px]
            sm:h-[600px]
            lg:w-[700px]
            lg:h-[700px]
            bg-gradient-to-r
            from-[#2F80FF]/10
            to-[#7B61FF]/10
            blur-3xl
            rounded-full
          "
        />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

          <div className="text-center max-w-4xl mx-auto">

            <p
              className="
                inline-flex
                items-center
                gap-2
                px-4
                sm:px-5
                py-2
                rounded-full
                border border-slate-200
                bg-white
                text-[#2563EB]
                text-sm
                mb-8
              "
            >
              Enterprise Tally Solutions
            </p>

            <h1
              className="
                text-[38px]
                sm:text-5xl
                md:text-6xl
                font-black
                leading-[1.05]
                text-[#071426]
                mb-8
              "
            >
              Powerful Products
              <br />

              <span className="text-[#2563EB]">
                Built For Growth
              </span>
            </h1>

            <p
              className="
                text-[15px]
                sm:text-lg
                md:text-xl
                text-slate-600
                leading-relaxed
                max-w-2xl
                sm:max-w-3xl
                mx-auto
              "
            >
              Explore intelligent Tally solutions designed for
              accounting, automation, cloud infrastructure,
              business management, and enterprise productivity.
            </p>
          </div>
        </div>
      </section>
      )}

      <section
  className="
    relative
    pt-24
    pb-10
    lg:pt-24
    lg:pb-12
    overflow-hidden
    bg-gradient-to-br
    from-slate-50
    via-white
    to-blue-50
  "
>
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
      from-[#2563EB]/10
      to-[#7B61FF]/10
      rounded-full
      blur-3xl
    "
  />

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

      {/* LEFT CONTENT */}
      <div>

        <span
          className="
            inline-flex
            items-center
            px-5
            py-2
            rounded-full
            bg-white
            border
            border-slate-200
            text-[#2563EB]
            text-sm
            font-medium
            shadow-sm
          "
        >
          Enterprise Tally Solutions
        </span>

        <h1
          className="
            mt-5
            text-3xl sm:text-4xl lg:text-[44px]
            font-black
            leading-tight
            text-[#071426]
          "
        >
          Smart Tally Solutions
          <br />

          <span className="text-[#2563EB]">
            For Modern Businesses
          </span>
        </h1>

        <p
          className="
            mt-4
            text-base lg:text-lg
            text-slate-600
            leading-8
            max-w-xl
          "
        >
          Explore intelligent Tally solutions designed for accounting,
          automation, cloud infrastructure, business management and
          enterprise productivity.
        </p>

        {/* CTA BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button
            className="
              px-7
              py-3.5
              rounded-xl
              bg-[#2563EB]
              text-white
              font-semibold
              shadow-lg
              hover:shadow-xl
              transition
            "
          >
            Explore Products
          </button>

          <button
            className="
              px-7
              py-3.5
              rounded-xl
              border
              border-slate-300
              bg-white
              font-semibold
              hover:bg-slate-50
              transition
            "
          >
            Book Free Demo
          </button>
        </div>

        {/* STATS */}
        <div className="flex flex-wrap gap-8 mt-8">

          <div>
            <h3 className="text-2xl font-bold text-[#071426]">
              5000+
            </h3>
            <p className="text-slate-500 text-sm">
              Businesses Served
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#071426]">
              15+
            </h3>
            <p className="text-slate-500 text-sm">
              Years Experience
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#071426]">
              24/7
            </h3>
            <p className="text-slate-500 text-sm">
              Support
            </p>
          </div>

        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="relative">

        <div className="
        absolute
        top-8
        right-8
        bg-white
        rounded-xl
        shadow-lg
        px-4
        py-3
        ">
          <p className="text-xs text-slate-500">
            Trusted Solution
          </p>
          <p className="font-semibold">
            TallyPrime Partner
          </p>
        </div>

        {/* Illustration Container */}
        <div
          className="
            relative
            p-4
          "
        >
          <img
            src={dashboardImage}
            alt="Business Dashboard"
            className="w-[80%] mx-auto h-auto"
          />
        </div>

      </div>

    </div>
  </div>
      </section>

      {/* ================= PRODUCTS GRID ================= */}
      <section
        className="
          relative
          py-14
          sm:py-16
          md:py-20
          bg-[#F8FAFC]
          overflow-hidden
        "
      >
        {/* GLOW */}
        <div
          className="
            absolute
            top-0
            left-1/2
            -translate-x-1/2
            w-[450px]
            h-[450px]
            sm:w-[600px]
            sm:h-[600px]
            lg:w-[700px]
            lg:h-[700px]
            bg-gradient-to-r
            from-[#2F80FF]/10
            to-[#7B61FF]/10
            blur-3xl
            rounded-full
          "
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">

          {/* HEADING */}
          <div className="text-center mb-16">

            <p
              className="
                text-[#2F80FF]
                font-semibold
                uppercase
                tracking-[0.2em]
                mb-4
              "
            >
              Our Products
            </p>

            <h2
              className="
                text-[32px]
                sm:text-4xl
                md:text-5xl
                font-bold
                text-[#0F172A]
                leading-tight
                mb-6
              "
            >
              Smart Tally Solutions
              <br />
              For Modern Businesses
            </h2>

            <p
              className="
                max-w-3xl
                mx-auto
                text-[15px]
                sm:text-[16px]
                md:text-[17px]
                text-[#64748B]
                leading-relaxed
              "
            >
              Professional Tally products engineered to streamline
              operations, improve accounting workflows, and enhance
              enterprise productivity.
            </p>
          </div>

          {/* GRID */}
          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-6
              sm:gap-8
            "
          >

            {[
              {
                title: "TallyPrime",
                desc: "Complete business accounting and GST management software.",
                image: tallyPrime,
                features: [
                  "GST Billing",
                  "Inventory Management",
                  "Financial Reports",
                ],
                route: "/products/tallyprime",
              },

              {
                title: "TallyPrime Server",
                desc: "Enterprise-grade data security and multi-user performance.",
                image: tallyServer,
                features: [
                  "Centralized Data",
                  "High Performance",
                  "Data Reliability",
                ],
                route: "/products/tally-server",
              },

              {
                title: "TallyPrime powered by AWS",
                desc: "Secure cloud-based Tally access from anywhere.",
                image: tallyAws,
                features: [
                  "Cloud Access",
                  "Remote Work",
                  "AWS Security",
                ],
                route: "/products/aws",
              },

              {
                title: "TallyPrime with WhatsApp",
                desc: "Automate customer communication and invoice sharing.",
                image: tallyMobile,
                features: [
                  "Invoice Sharing",
                  "Auto Notifications",
                  "Customer Engagement",
                ],
                route: "/products/whatsapp",
              },
            ].map((product, index) => (

              <Link
                key={index}
                to={product.route}
                className="
                  group
                  relative
                  rounded-[20px]
                  sm:rounded-[24px]
                  overflow-hidden
                  bg-white/80
                  backdrop-blur-xl
                  border border-white/40
                  shadow-[0_10px_40px_rgba(0,0,0,0.06)]
                  hover:shadow-[0_20px_60px_rgba(47,128,255,0.15)]
                  transition-all duration-500
                  hover:-translate-y-2
                "
              >

                {/* IMAGE */}
                <div className="relative overflow-hidden h-[180px] sm:h-[200px]">

                  <img
                    src={product.image}
                    alt={product.title}
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-transform duration-700
                      group-hover:scale-105
                    "
                  />

                  {/* OVERLAY */}
                  <div
                    className="
                      absolute inset-0
                      bg-gradient-to-t
                      from-black/50
                      via-black/10
                      to-transparent
                    "
                  />
                </div>

                {/* CONTENT */}
                <div className="p-5 sm:p-6">

                  <h3
                    className="
                      text-[22px]
                      sm:text-[24px]
                      font-bold
                      text-[#0F172A]
                      mb-3
                      group-hover:text-[#2F80FF]
                      transition-colors duration-300
                    "
                  >
                    {product.title}
                  </h3>

                  <p
                    className="
                      text-[#64748B]
                      leading-relaxed
                      mb-6
                    "
                  >
                    {product.desc}
                  </p>

                  {/* FEATURES */}
                  <div className="space-y-3 mb-6">

                    {product.features.map((feature, i) => (
                      <div
                        key={i}
                        className="
                          flex items-center gap-2 sm:gap-3
                          text-sm
                          text-[#475569]
                        "
                      >
                        <div
                          className="
                            w-2 h-2
                            rounded-full
                            bg-gradient-to-r
                            from-[#2F80FF]
                            to-[#7B61FF]
                          "
                        />

                        {feature}
                      </div>
                    ))}

                  </div>

                  {/* BUTTON */}
                  <div
                    className="
                      flex items-center gap-2 flex-wrap
                      text-[#2F80FF]
                      font-semibold
                      group-hover:gap-4
                      transition-all duration-300
                    "
                  >
                    Explore Product
                    <ArrowRight size={18} />
                  </div>

                </div>

              </Link>

            ))}

          </div>
        </div>
      </section>
    </>
  );
}