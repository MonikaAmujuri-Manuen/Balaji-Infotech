import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import tallyPrime from "../assets/tallyPrime.png";
import tallyServer from "../assets/tallyServer.png";
import tallyAws from "../assets/tallyAws.png"
import tallyMobile from "../assets/tallyMobile.png"


export default function Products() {
  return (
    <>

      {/* ================= HERO SECTION ================= */}
      <section
        className="
          relative
          overflow-hidden
          pt-28
          sm:pt-32
          lg:pt-40
          pb-16
          sm:pb-24
          md:pb-32
          bg-[#0B1120]
        "
      >
        {/* BACKGROUND GLOW */}
        <div
          className="
            absolute
            top-[-200px]
            left-1/2
            -translate-x-1/2
            w-[500px]
            h-[500px]
            sm:w-[700px]
            sm:h-[700px]
            lg:w-[900px]
            lg:h-[900px]
            bg-gradient-to-r
            from-[#2F80FF]/20
            to-[#7B61FF]/20
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
                border border-white/10
                bg-white/5
                backdrop-blur-xl
                text-white/70
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
                text-white
                mb-8
              "
            >
              Powerful Products
              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-[#2F80FF]
                  to-[#7B61FF]
                  bg-clip-text
                  text-transparent
                "
              >
                Built For Growth
              </span>
            </h1>

            <p
              className="
                text-[15px]
                sm:text-lg
                md:text-xl
                text-white/60
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