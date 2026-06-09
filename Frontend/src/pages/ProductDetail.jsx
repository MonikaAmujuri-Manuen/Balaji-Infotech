import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  CheckCircle, ArrowRight, BarChart3, ShieldCheck, CheckCircle2
} from "lucide-react";
import PricingCard from "../components/PricingCard";
import { productsData } from "../data/productsData";


export default function ProductDetail() {
  const { slug } = useParams();

  const product = productsData[slug];
  const pricing = product?.pricing || [];
  const ProductIcon = product.icon;
  
  

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center px-4">
        <div>
          <h1 className="text-4xl font-bold mb-4">
            Product Not Found
          </h1>

          <Link
            to="/products"
            className="text-[#2F80FF] font-semibold"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>

      {/* ================= HERO SECTION ================= */}

      <section
        className="
          relative
          overflow-hidden
          pt-20
          sm:pt-24
          md:pt-28

          pb-10
          sm:pb-12
          md:pb-16
          bg-[#F5F7FF]
        "
      >

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div
            className="
              grid
              lg:grid-cols-2
              gap-6
              lg:gap-10
              lg:gap-16
              items-center
            "
          >
            {/* LEFT CONTENT */}

            <div>
              <div
                className="
                  inline-flex
                  items-center
                  gap-3
                  px-4
                  sm:px-5
                  py-3
                  rounded-full
                  bg-white
                  border border-[#E5E7EB]
                  shadow-sm
                  mb-5
                "
              >
                <div
                  className="
                    w-10
                    h-10
                    sm:w-12
                    sm:h-12
                    rounded-2xl
                    bg-gradient-to-r
                    from-[#2F80FF]
                    to-[#7B61FF]
                    flex
                    items-center
                    justify-center
                    text-white
                  "
                >
                  <ProductIcon size={28} />
                </div>

                <span
                  className="
                    text-[#111827]
                    font-semibold
                    text-[15px]
                    sm:text-lg
                  "
                >
                  {product.title}
                </span>
              </div>

              <p
                className="
                  text-[#2F80FF]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  mb-3
                "
              >
                Professional Tally Solution
              </p>

              <h1
                className="
                  text-[28px]
                  sm:text-[36px]
                  md:text-[40px]
                  font-black
                  leading-tight
                  text-[#111827]
                  mb-4
                "
              >
                {product.subtitle}
              </h1>

              <p
                className="
                  text-[15px]
                  sm:text-base
                  md:text-lg
                  leading-relaxed
                  text-[#6B7280]
                  mb-6
                  max-w-xl
                "
              >
                {product.description}
              </p>

              {/* CTA BUTTONS */}

              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4">
                <a href="tel:+919849431943">
                <button
                  className="
                    px-6
                    sm:px-8
                    py-4
                    rounded-2xl
                    bg-gradient-to-r
                    from-[#2F80FF]
                    to-[#7B61FF]
                    text-white
                    font-semibold
                    shadow-lg
                    hover:scale-105
                    transition-all
                    duration-300
                  "
                >
                  Request Demo
                </button>
                </a>

                <Link
                  to="/products"
                  className="
                    px-8
                    py-4
                    rounded-2xl
                    border
                    border-[#D1D5DB]
                    bg-white
                    text-[#111827]
                    font-semibold
                    hover:border-[#2F80FF]
                    hover:text-[#2F80FF]
                    transition-all
                    duration-300
                  "
                >
                  Back to Products
                </Link>
              </div>
            </div>

            {/* RIGHT IMAGE */}

            <div className="relative">
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-[#2F80FF]/20
                  to-[#7B61FF]/20
                  blur-3xl
                  rounded-[40px]
                "
              />

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[24px]
                  sm:rounded-[32px]
                  border
                  border-white/40
                  bg-white/70
                  backdrop-blur-xl
                  shadow-[0_20px_80px_rgba(0,0,0,0.12)]
                "
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="
                    w-full
                    h-[200px]
                    sm:h-[300px]
                    lg:h-[380px]
                    object-cover
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= KEY FEATURES SECTION ================= */}
       
      <section className="relative py-10 sm:py-12 md:py-16 bg-white overflow-hidden">
        

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

          {/* HEADING */}

          <div className="text-center mb-12">
            <p
              className="
                text-[#2F80FF]
                font-semibold
                uppercase
                tracking-[0.2em]
                mb-4
              "
            >
              Key Features
            </p>

            <h2
              className="
                text-[28px]
                sm:text-[36px]
                md:text-[42px]
                font-black
                text-[#111827]
                mb-6
              "
            >
              Powerful Features Designed
              For Business Growth
            </h2>

            <p
              className="
                text-[15px]
                sm:text-lg
                text-[#6B7280]
                leading-relaxed
                max-w-3xl
                mx-auto
              "
            >
              Discover enterprise-grade capabilities that simplify
              accounting, improve productivity, and help businesses
              operate more efficiently.
            </p>
          </div>

          {/* FEATURES LIST */}

          <div className="space-y-12 sm:space-y-16">

            {product.keyFeatures.map((feature, index) => {
              const FeatureIcon = feature.icon;

              return (

              <div
                key={index}
                className="
                  relative
                  group
                "
              >

                {/* DIVIDER */}

                {index !== 0 && (
                  <div
                    className="
                      absolute
                      -top-8
                      left-0
                      w-full
                      h-[1px]
                      bg-gradient-to-r
                      from-transparent
                      via-[#D1D5DB]
                      to-transparent
                    "
                  />
                )}

                <div
                  className="
                    flex
                    flex-col
                    md:flex-row
                    gap-8
                    md:gap-10
                  "
                >

                  {/* ICON */}

                  <div
                    className="
                      relative
                      flex-shrink-0
                    "
                  >

                    {/* ICON BOX */}

                    <div
                      className="
                        relative
                        w-14
                        h-14
                        rounded-[20px]
                        bg-gradient-to-r
                        from-[#2F80FF]
                        to-[#7B61FF]
                        flex
                        items-center
                        justify-center
                        text-white
                       
                      "
                    >
                      <FeatureIcon size={20} />
                    </div>
                  </div>

                  {/* CONTENT */}

                  <div className="flex-1">

                    {/* TAG */}

                    <div
                      className="
                        inline-flex
                        items-center
                        px-4
                        py-2
                        rounded-full
                        bg-[#EEF4FF]
                        text-[#2F80FF]
                        font-semibold
                        text-sm
                        mb-5
                      "
                    >
                      {feature.tag}
                    </div>

                    {/* TITLE */}

                    <h3
                      className="
                        text-[20px]
                        sm:text-2xl
                        md:text-3xl
                        font-black
                        text-[#111827]
                        leading-tight
                        mb-5
                      "
                    >
                      {feature.title}
                    </h3>

                    {/* DESCRIPTION */}

                    <p
                      className="
                        text-[16px] md:text-[17px]
                        text-[#6B7280]
                        leading-relaxed
                        max-w-3xl
                        mb-8
                      "
                    >
                      {feature.description}
                    </p>

                    {/* POINTS */}

                    <div
                      className="
                        grid
                        sm:grid-cols-2
                        gap-4
                      "
                    >

                      {feature.points.map((point, idx) => (

                        <div
                          key={idx}
                          className="
                            flex
                            items-center
                            gap-3
                            rounded-2xl
                            border
                            border-[#E5E7EB]
                            bg-[#FAFBFF]
                            px-4
                            sm:px-5
                            py-4
                          "
                        >

                          <div
                            className="
                              w-8
                              h-8
                              rounded-full
                              bg-gradient-to-r
                              from-[#2F80FF]
                              to-[#7B61FF]
                              flex
                              items-center
                              justify-center
                              text-white
                              flex-shrink-0
                            "
                          >
                            <CheckCircle size={16} />
                          </div>

                          <p
                            className="
                              text-[#374151]
                              font-medium
                            "
                          >
                            {point}
                          </p>

                        </div>

                      ))}

                    </div>

                  </div>
                </div>
              </div>
              );
              })}
          
          </div>
        </div>
      </section>
      

      {/* ================= KEY FEATURES SECTION ================= */}
     {false && (
<section className="relative py-16 sm:py-20 md:py-32 bg-white overflow-hidden">
        {/* BACKGROUND GLOW */}
        <div
          className="
            absolute
            top-0
            left-1/2
            -translate-x-1/2
            w-[700px]
            h-[700px]
            bg-gradient-to-r
            from-[#2F80FF]/10
            to-[#7B61FF]/10
            blur-3xl
            rounded-full
          "
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">

          {/* HEADING */}

          <div className="text-center mb-24">
            <p
              className="
                text-[#2F80FF]
                font-semibold
                uppercase
                tracking-[0.2em]
                mb-4
              "
            >
              Key Features
            </p>

            <h2
              className="
                text-[32px]
                sm:text-4xl
                md:text-5xl
                font-black
                text-[#111827]
                mb-6
              "
            >
              Powerful Features Designed
              For Business Growth
            </h2>

            <p
              className="
                text-[15px]
                sm:text-lg
                text-[#6B7280]
                leading-relaxed
                max-w-3xl
                mx-auto
              "
            >
              Discover enterprise-grade capabilities that simplify
              accounting, improve productivity, and help businesses
              operate more efficiently.
            </p>
          </div>

          {/* FEATURES LIST */}

          <div className="space-y-24">

  {product.keyFeatures.map((feature, index) => {
    const FeatureIcon = feature.icon;
    const isEven = index % 2 === 0;

    return (
      <div key={index}>

        {index !== 0 && (
          <div className="mb-20 border-t border-[#E5E7EB]" />
        )}

        <div
          className={`
            grid
            lg:grid-cols-2
            gap-12
            items-center
            ${!isEven ? "lg:[&>*:first-child]:order-2" : ""}
          `}
        >

          {/* CONTENT */}
          <div>

            <div
              className="
                inline-flex
                px-4 py-2
                rounded-full
                bg-[#EEF4FF]
                text-[#2F80FF]
                font-semibold
                text-sm
                mb-5
              "
            >
              {feature.tag}
            </div>

            <h3
              className="
                text-3xl
                md:text-4xl
                font-black
                text-[#111827]
                mb-5
              "
            >
              {feature.title}
            </h3>

            <p
              className="
                text-[#6B7280]
                text-lg
                leading-relaxed
                mb-8
              "
            >
              {feature.description}
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
  <span className="px-3 py-2 rounded-full bg-[#EEF4FF] text-[#2F80FF] text-sm font-medium">
    Saves Time
  </span>

  <span className="px-3 py-2 rounded-full bg-[#EEF4FF] text-[#2F80FF] text-sm font-medium">
    Better Decisions
  </span>

  <span className="px-3 py-2 rounded-full bg-[#EEF4FF] text-[#2F80FF] text-sm font-medium">
    Increased Productivity
  </span>
</div>


          </div>

          {/* VISUAL SIDE */}
<div
  className="
    relative
    rounded-[32px]
    p-8
    bg-gradient-to-br
    from-[#F8FBFF]
    to-[#EEF4FF]
    border
    border-[#E5E7EB]
    overflow-hidden
  "
>

  {/* TOP */}
  <div className="flex items-center gap-4 mb-8">

    <div
      className="
        w-16 h-16
        rounded-2xl
        bg-gradient-to-r
        from-[#2F80FF]
        to-[#7B61FF]
        flex
        items-center
        justify-center
        text-white
        shadow-lg
      "
    >
      <FeatureIcon size={28} />
    </div>

    <div>
      <p className="text-sm text-[#6B7280] font-medium">
        Feature Dashboard
      </p>

      <h4 className="text-xl font-bold text-[#111827]">
        {feature.tag}
      </h4>
    </div>

  </div>

  {/* FEATURE POINTS */}
  <div className="space-y-3">

    {feature.points.map((point, idx) => (

      <div
        key={idx}
        className="
          flex
          items-center
          gap-3
          bg-white
          border
          border-[#E5E7EB]
          rounded-2xl
          px-4
          py-3
        "
      >
        <div
          className="
            w-8
            h-8
            rounded-full
            bg-gradient-to-r
            from-[#2F80FF]
            to-[#7B61FF]
            text-white
            flex
            items-center
            justify-center
            text-sm
            font-semibold
            shrink-0
          "
        >
          {idx + 1}
        </div>

        <span className="font-medium text-[#111827]">
          {point}
        </span>

      </div>

    ))}

  </div>

  {/* BOTTOM STATS */}
  <div className="grid grid-cols-2 gap-4 mt-8">

    <div
      className="
        rounded-2xl
        bg-white
        border
        border-[#E5E7EB]
        p-4
        text-center
      "
    >
      <p className="text-3xl font-black text-[#2F80FF]">
        {feature.points.length}
      </p>

      <p className="text-sm text-[#6B7280]">
        Capabilities
      </p>
    </div>

    <div
      className="
        rounded-2xl
        bg-gradient-to-r
        from-[#2F80FF]
        to-[#7B61FF]
        p-4
        text-center
        text-white
      "
    >
      <p className="text-3xl font-black">
        ✓
      </p>

      <p className="text-sm">
        Business Ready
      </p>
    </div>

  </div>

</div>
        </div>
      </div>
    );
  })}
</div>
        </div>
      </section>
      )}

       
      {/* ================= WHY CHOOSE SECTION ================= */}
{product?.whyChooseCards?.length > 0 && (
<section className="relative py-10 sm:py-12 md:py-16 px-4 sm:px-6 overflow-hidden bg-[#F7FAFF]">

  {/* BACKGROUND GLOW */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-3xl rounded-full" />

  <div className="relative max-w-7xl mx-auto">

    {/* HEADING */}
    <div className="text-center max-w-4xl mx-auto mb-10 md:mb-12">

      <p className="text-sm md:text-base tracking-[0.3em] uppercase text-[#1E73E8] font-semibold mb-4">
        Why Choose
      </p>

      <h2 className="text-[28px]
sm:text-[38px]
md:text-[44px] font-bold leading-tight text-[#0B132B]">

        Why Businesses Choose{" "}

        <span className="bg-gradient-to-r from-[#1E73E8] to-[#4F8CFF] bg-clip-text text-transparent">
          TallyPrime Server
        </span>

      </h2>

      <p className="mt-6 text-lg md:text-xl text-[#5B6475] leading-relaxed">
        Built for growing businesses that need speed, security,
        multi-user efficiency, and uninterrupted access to critical data.
      </p>

    </div>

    {/* CARDS */}
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

      {product.whyChooseCards.map((card, index) => {
        const Icon = card.icon;

        return (
          <div
            key={index}
            className="
              group relative
              bg-white
              border border-[#E7ECF3]
              rounded-[28px]
              p-6
              sm:p-8
              md:p-9
              shadow-[0_10px_40px_rgba(0,0,0,0.04)]
              hover:shadow-[0_20px_60px_rgba(30,115,232,0.12)]
              hover:-translate-y-2
              transition-all duration-500
            "
          >

            {/* ICON */}
            <div className="
              w-16 h-16
              rounded-2xl
              bg-[#EEF5FF]
              flex items-center justify-center
              mb-7
              group-hover:bg-[#1E73E8]
              transition-all duration-500
            ">

              <Icon
                size={30}
                className="
                  text-[#1E73E8]
                  group-hover:text-white
                  transition-all duration-500
                "
              />

            </div>

            {/* TITLE */}
            <h3 className="text-2xl font-bold text-[#111827] leading-snug mb-5">
              {card.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-[17px] leading-8 text-[#5B6475]">
              {card.description}
            </p>

            {/* HOVER BORDER */}
            <div className="
              absolute inset-0
              rounded-[28px]
              border border-transparent
              group-hover:border-[#1E73E8]/20
              transition-all duration-500
              pointer-events-none
            " />

          </div>
        );
      })}

    </div>

  </div>
</section>
)}

 {product?.pricing?.length > 0 && (
  <section   id="pricing" className="relative py-10 sm:py-12 md:py-16 px-4 sm:px-6 bg-[#F8FAFC] overflow-hidden">

    <div className="max-w-5xl mx-auto relative z-10">

      {/* HEADING */}
      <div className="text-center mb-10 md:mb-12">

        <p
          className="
            text-[#2F80FF]
            font-semibold
            uppercase
            tracking-[0.2em]
            mb-4
          "
        >
          Pricing
        </p>

        <h2 className="mt-6 text-[28px] sm:text-[38px] md:text-[46px] font-black tracking-tight text-[#111827]">
          Choose Your {product.title}
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg leading-8 text-[#6B7280]">
          Flexible pricing plans designed for businesses of every size —
          from standalone systems to enterprise-scale infrastructure.
        </p>

      </div>

      {/* PRICING CARDS */}
      <div
        className={`
          grid gap-5 mx-auto
          ${
            product.pricing?.length === 2
              ? "grid-cols-1 md:grid-cols-2 max-w-4xl"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl"
          }
        `}
      >

        {product.pricing.map((plan, index) => (
          <PricingCard
            key={index}
            plan={plan}
          />
        ))}

      </div>

    </div>
  </section>
)}

{/* ================= TESTIMONIALS ================= */}
{product.testimonials && (
<section className="relative py-8 sm:py-10 md:py-12 px-4 sm:px-4 bg-[#F8FAFC] overflow-hidden">

  
  <div className="relative max-w-7xl mx-auto">

    {/* HEADING */}
    <div className="text-center mb-8">

      <span className="inline-block text-[#1178D4] text-sm tracking-[0.25em] uppercase font-semibold mb-5">
        Success Stories
      </span>

      <h2 className="text-[28px] sm:text-[38px] md:text-[46px] font-bold text-[#0F172A] leading-tight">
        What Businesses Say About{" "}{product.name}
      </h2>

      <p className="mt-6 text-[#64748B] text-[16px] md:text-[17px] max-w-3xl mx-auto leading-relaxed">
        Trusted by growing businesses across industries for smarter accounting,
        faster operations, and reliable business management.
      </p>

    </div>

    {/* TESTIMONIAL GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

      {product.testimonials.map((item, index) => (

        <div
          key={index}
          className="
            group relative
            rounded-[32px]
            bg-white
            border border-[#E2E8F0]
            p-6
            sm:p-8
            md:p-10
            shadow-[0_10px_40px_rgba(15,23,42,0.06)]
            hover:shadow-[0_20px_60px_rgba(17,120,212,0.12)]
            hover:-translate-y-2
            transition-all duration-500
            overflow-hidden
          "
        >

          {/* TOP ACCENT */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1178D4] to-[#4F46E5]" />

          
          {/* STAR RATING */}
<div className="flex items-center gap-1 mb-8">

  {[1, 2, 3, 4, 5].map((star) => (
    <svg
      key={star}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[#FBBF24]"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 
        2.424 0l2.082 5.006 5.404.434c1.164.093 
        1.636 1.545.749 2.305l-4.117 3.527 
        1.258 5.273c.271 1.136-.964 2.033-1.96 
        1.425L12 18.354 7.372 21.18c-.996.608-2.231-.29-1.96-1.425 
        l1.258-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305 
        l5.404-.434 2.082-5.005z"
        clipRule="evenodd"
      />
    </svg>
  ))}

</div>

          {/* REVIEW */}
          <p className="
            text-[#334155]
            text-lg
            leading-relaxed
            mb-10
          ">
            “{item.review}”
          </p>

          {/* USER */}
          <div className="flex items-center gap-4">

            <div className="
              w-14 h-14 rounded-full
              bg-gradient-to-br from-[#1178D4] to-[#4F46E5]
              flex items-center justify-center
              text-white font-bold text-lg
              shrink-0
            ">
              {item.name.charAt(0)}
            </div>

            <div>

              <h4 className="text-[#0F172A] font-semibold text-lg">
                {item.name}
              </h4>

              <p className="text-[#64748B] text-sm">
                {item.role}
              </p>

            </div>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>
)}


      {/* ================= CTA SECTION ================= */}
{product.cta && (
<section className="relative py-10 sm:py-12 md:py-14 bg-white overflow-hidden">


  <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">

    {/* BADGE */}
    <div className="
      inline-flex items-center
      px-5 py-2
      rounded-full
      border border-[#D8E6FF]
      bg-[#F8FBFF]
      text-[#1178D4]
      text-sm
      font-semibold
      tracking-[0.22em]
      uppercase
      mb-5
    ">
      {product.cta.badge}
    </div>

    {/* TITLE */}
    <h2 className="
      text-[24px] sm:text-[34px] md:text-[40px]
      leading-[1.05]
      font-[800]
      text-[#071426]
      max-w-4xl
      mx-auto
    ">
      {product.cta.title}
    </h2>

    {/* DESCRIPTION */}
    <p className="
      mt-5
      text-[16px]
      md:text-[17px]
      leading-7
      text-[#5B6475]
      max-w-3xl
      mx-auto
    ">
      {product.cta.description}
    </p>

    {/* BUTTONS */}
    <div className="
      mt-8
      flex flex-col sm:flex-row
      items-center justify-center
      gap-3
    ">

      {/* PRIMARY BUTTON */}
      <a
    href={product.cta.primaryLink}
    target={
      product.cta.primaryLink.includes("http")
        ? "_blank"
        : "_self"
    }
    rel="noopener noreferrer"
  >

      <button className="
        group relative overflow-hidden
        px-5 sm:px-8
        py-3 sm:py-4
        rounded-2xl
        bg-gradient-to-r
        from-[#1178D4]
        to-[#6C63FF]
        text-white
        text-[17px]
        font-semibold
        shadow-[0_10px_40px_rgba(108,99,255,0.25)]
        hover:scale-[1.04]
        transition-all duration-300
      ">

        <span className="relative z-10 flex items-center gap-2">

          {product.cta.primaryBtn}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="
              w-5 h-5
              transition-transform duration-300
              group-hover:translate-x-1
            "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>

        </span>

      </button>
      </a>

      {/* SECONDARY BUTTON */}
      <a href={product.cta.secondaryLink}>

      <button className="
        px-5 sm:px-8
        py-3 sm:py-4
        rounded-2xl
        border border-[#DDE7F5]
        bg-white
        text-[#071426]
        text-[17px]
        font-semibold
        transition-all duration-300
        hover:border-[#1178D4]
        hover:text-[#1178D4]
        hover:shadow-[0_10px_30px_rgba(17,120,212,0.08)]
      ">
        {product.cta.secondaryBtn}
      </button>
      </a>

    </div>

    {/* TRUST POINTS */}
    <div className="
      mt-8
      flex flex-wrap
      items-center justify-center
      gap-3 sm:gap-4
      text-[#64748B]
      text-sm
    ">

      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-[#22C55E]" />
        Trusted Business Solution
      </div>

      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-[#22C55E]" />
        Expert Support Available
      </div>

      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-[#22C55E]" />
        Fast & Secure Setup
      </div>

    </div>

  </div>
</section>
)}
    </>
  );
}