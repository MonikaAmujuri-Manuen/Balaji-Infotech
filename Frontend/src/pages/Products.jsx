import { Link } from "react-router-dom";
import { ArrowRight, PieChart, Settings, Users, BarChart3 } from "lucide-react";

import tallyPrime from "../assets/tallyPrime.png";
import tallyServer from "../assets/tallyServer.png";
import tallyAws from "../assets/tallyAws.png"
import tallyMobile from "../assets/tallyMobile.png"
import dashboardImage from "../assets/products-hero.png";


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
    lg:pt-20
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
      bg-[#155A96]/10
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
            text-[#155A96]
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

          <span className="text-[#155A96]">
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
          <a href="#products"
           
            className="
              px-7
              py-3.5
              rounded-xl
              bg-[#155A96]
              text-white
              font-semibold
              shadow-lg
              hover:shadow-xl
              transition
            "
          >
            Explore Products
          
          </a>

          <a href="tel:+919849431943">
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
          </a>
          
        </div>

        {/* STATS */}
        
        <div className="flex flex-wrap gap-8 mt-6">

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
<div className="relative flex justify-center items-center">

  {/* Background Glow */}
  <div
    className="
      absolute
      w-[550px]
      h-[550px]
      rounded-full
      bg-gradient-to-br
      from-[#155A96]/10
      to-[#2F80FF]/5
      blur-3xl
    "
  />

  {/* Soft Circle Background */}
  <div
    className="
      absolute
      w-[400px]
      h-[400px]
      rounded-full
      bg-[#155A96]/5
    "
  />

  {/* Laptop */}
  <img
    src={dashboardImage}
    alt="Tally Dashboard"
    className="
      relative
      z-10
      w-full
      max-w-[650px]
      object-contain
      drop-shadow-[0_40px_60px_rgba(0,0,0,0.15)]
    "
  />

</div>

    </div>
  </div>
      </section>

      {/* ================= PRODUCTS GRID ================= */}
      {false && (
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
      )}

      <section id="products" className="relative py-16 bg-[#F8FAFC] overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-16">
      <p className="text-[#155A96] font-semibold uppercase tracking-[0.25em] mb-4">
        Our Products
      </p>

      <h2 className="text-4xl font-bold text-[#071426] mb-5">
        Smart Tally Solutions
      </h2>

      <p className="max-w-3xl mx-auto text-lg text-slate-600">
        Powerful accounting, cloud and automation solutions
        designed to help businesses grow efficiently.
      </p>
    </div>

    {/* FEATURED PRODUCT */}
    <Link
      to="/products/tallyprime"
      className="
        group
        grid
        lg:grid-cols-2
        gap-10
        items-center
        bg-white
        rounded-[32px]
        border border-slate-200
        overflow-hidden
        shadow-[0_20px_60px_rgba(0,0,0,0.06)]
        hover:-translate-y-1
        transition-all
      "
    >
      {/* Image */}
      <div className="bg-[#EDF4FB] p-10">
        <img
          src={tallyPrime}
          alt="TallyPrime"
          className="
            w-full
            rounded-[28px]
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />
      </div>

      {/* Content */}
      <div className="p-10">

        <div
          className="
            inline-flex
            px-4
            py-2
            rounded-full
            bg-[#155A96]/10
            text-[#155A96]
            font-medium
            mb-5
          "
        >
          Featured Product
        </div>

        <h3 className="text-3xl font-bold text-[#071426] mb-4">
          TallyPrime
        </h3>

        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          Complete business accounting, GST compliance,
          inventory management and financial reporting
          in one powerful platform.
        </p>

        <div className="grid grid-cols-2 gap-4 mb-6">

          {[
            "GST Billing",
            "Inventory",
            "Accounting",
            "Reports",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3"
            >
              <div className="w-2 h-2 rounded-full bg-[#155A96]" />
              <span>{item}</span>
            </div>
          ))}

        </div>

        <div className="flex items-center gap-3 text-[#155A96] font-semibold">
          Explore Product
          <ArrowRight size={18} />
        </div>

      </div>
    </Link>

    {/* SMALL PRODUCTS */}
    <div className="grid md:grid-cols-3 gap-6 mt-10">

      {[
        {
          title: "TallyPrime Server",
          image: tallyServer,
          route: "/products/tally-server",
        },
        {
          title: "TallyPrime on AWS",
          image: tallyAws,
          route: "/products/aws",
        },
        {
          title: "Tally + WhatsApp",
          image: tallyMobile,
          route: "/products/whatsapp",
        },
      ].map((item) => (

        <Link
          key={item.title}
          to={item.route}
          className="
            group
            bg-white
            rounded-[28px]
            border
            border-slate-200
            overflow-hidden
            shadow-[0_10px_40px_rgba(0,0,0,0.05)]
            hover:-translate-y-2
            hover:border-[#155A96]/30
            transition-all
          "
        >

          <div className="bg-[#EDF4FB] p-6">
            <img
              src={item.image}
              alt={item.title}
              className="
                w-full
                h-44
                object-cover
                rounded-2xl
                transition-transform
                duration-700
                group-hover:scale-105
              "
            />
          </div>

          <div className="p-6">

            <h3 className="text-2xl font-bold text-[#071426] mb-3">
              {item.title}
            </h3>

            <div className="flex items-center gap-2 text-[#155A96] font-medium">
              Explore
              <ArrowRight size={16} />
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