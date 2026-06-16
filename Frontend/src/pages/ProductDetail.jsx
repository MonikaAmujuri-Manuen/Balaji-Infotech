import { Helmet } from "react-helmet-async";
import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import {
  CheckCircle, ArrowRight, BarChart3, ShieldCheck, CheckCircle2, ChevronRight, ChevronUp
} from "lucide-react";
import PricingCard from "../components/PricingCard";
import { productsData } from "../data/productsData";


export default function ProductDetail() {
  const { slug } = useParams();
  const [expandedFeature, setExpandedFeature] = useState(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

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
    <Helmet>
  <title>{`${product.title} | Balaji Infotech`}</title>

  <meta
    name="description"
    content={product.description}
  />

  <meta
    name="keywords"
    content={`${product.title}, Tally Software, TallyPrime, Business Accounting Software, GST Software, Balaji Infotech`}
  />

  <meta
    property="og:title"
    content={`${product.title} | Balaji Infotech`}
  />

  <meta
    property="og:description"
    content={product.description}
  />

  <meta
    property="og:type"
    content="website"
  />

  <meta
    property="og:image"
    content={product.image}
  />
</Helmet>

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
                    w-6
                    h-6
                    sm:w-12
                    sm:h-12
                    rounded-2xl
                    bg-[#155A96]
                    flex
                    items-center
                    justify-center
                    text-white
                  "
                >
                  <ProductIcon size={20} />
                </div>

                <span
                  className="
                    text-[#071426]
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
                  text-[#155A96]
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

              <div
  className="
    flex
    flex-col
    items-center
    sm:flex-row
    gap-3
  "
>
                <a href="tel:+919849431943">
  <button
    className="
      px-5 sm:px-8
      py-2.5 sm:py-4
      rounded-xl sm:rounded-2xl
      bg-[#155A96]
      hover:bg-[#124A7C]
      text-white
      text-sm sm:text-base
      font-semibold
      shadow-lg
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
    px-5 sm:px-8
    py-2.5 sm:py-4
    rounded-xl sm:rounded-2xl
    border
    border-[#D1D5DB]
    bg-white
    text-[#111827]
    text-sm sm:text-base
    font-semibold
    hover:border-[#155A96]
    hover:text-[#155A96]
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
                  bg-[#155A96]/10
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
                  bg-[#EDF4FB]
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
                text-[#155A96]
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
                sm:text-[34px]
                md:text-[40px]
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

          {/* FEATURES SECTION */}

<div
  className="
    grid
    lg:grid-cols-[320px_1fr]
    gap-8
    lg:gap-12
    items-start
  "
>

  {/* LEFT SIDE */}

  <div className="lg:sticky lg:top-32">

    <p
      className="
        text-[#155A96]
        font-semibold
        uppercase
        tracking-[0.25em]
        mb-4
      "
    >
      Capabilities
    </p>

    <h3
      className="
        text-3xl
        md:text-4xl
        font-bold
        text-[#071426]
        leading-tight
        mb-5
      "
    >
      What Makes
      <br />
      {product.title}
      <br />
      Powerful?
    </h3>

    <p
      className="
        text-[#64748B]
        leading-relaxed
        max-w-sm
      "
    >
      Explore the key capabilities that help businesses
      simplify operations, improve productivity, and
      accelerate growth.
    </p>

  </div>

  {/* RIGHT SIDE */}

  <div
  className="
    flex
    gap-5
    overflow-x-auto
    pt-3
    pb-4
    snap-x
    snap-mandatory
    scrollbar-hide
  "
>

    {product.keyFeatures.map((feature, index) => {
      const FeatureIcon = feature.icon;

      return (

        <div
          key={index}
          className="
            snap-start
            min-w-[300px]
            sm:min-w-[340px]
            lg:min-w-[380px]

            bg-white
            border
            border-[#E5E7EB]
            rounded-[28px]

            p-6

            hover:scale-[1.01]
            hover:border-[#155A96]/20
            hover:shadow-[0_20px_60px_rgba(21,90,150,0.08)]

            transition-all
            duration-300

            relative
            overflow-hidden
          "
        >

          {/* NUMBER */}

          <div
            className="
              absolute
              top-4
              right-6

              text-7xl
              font-black
              text-[#155A96]/10
              select-none
            "
          >
            {String(index + 1).padStart(2, "0")}
          </div>

          {/* ICON */}

          <div
            className="
              w-12
              h-12
              rounded-2xl

              bg-[#155A96]

              flex
              items-center
              justify-center

              text-white

              mb-8
            "
          >
            <FeatureIcon size={24} />
          </div>

          {/* TITLE */}

          <h4
            className="
              text-xl
              font-semibold
              text-[#071426]
              mb-4
              leading-tight
              max-w-[220px]
            "
          >
            {feature.title}
          </h4>

          {/* DESCRIPTION */}

          <p className="text-[#64748B] leading-relaxed mb-4">
          {expandedFeature === index
            ? feature.description
            : `${feature.description.slice(0, 90)}...`}
        </p>

          {/* FOOTER */}

          <button
          onClick={() =>
            setExpandedFeature(
              expandedFeature === index ? null : index
            )
          }
          className="
            flex
            items-center
            gap-2
            text-[#155A96]
            font-semibold
            hover:gap-3
            transition-all
          "
        >
          {expandedFeature === index
            ? "Show Less"
            : "Learn More"}

          {expandedFeature === index
            ? <ChevronUp size={18} />
            : <ChevronRight size={18} />}
        </button>

        </div>

      );
    })}

  </div>

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

  <div className="relative max-w-7xl mx-auto">

    {/* HEADING */}
    <div className="text-center max-w-4xl mx-auto mb-10 md:mb-12">

      <p className="text-[#155A96] font-semibold uppercase tracking-[0.25em] mb-4">
        Why Choose
      </p>

      <h2 className="text-[28px]
sm:text-[38px]
md:text-[40px] font-bold leading-tight text-[#0B132B]">

        Why Businesses Choose{" "}

        <span className="text-[#155A96]">
          {product.title}
        </span>

      </h2>

      <p className="mt-4 text-base md:text-lg text-[#5B6475] leading-relaxed">
        Built for growing businesses that need speed, security,
        multi-user efficiency, and uninterrupted access to critical data.
      </p>

    </div>

    {/* ADVANTAGES TIMELINE */}

<div className="max-w-4xl mx-auto">

  {product.whyChooseCards.map((card, index) => {
    const Icon = card.icon;

    return (

      <div
        key={index}
        className="relative"
      >

        {/* Divider */}

        {index !== 0 && (
          <div
            className="
              w-full
              h-px
              bg-gradient-to-r
              from-transparent
              via-slate-300
              to-transparent
              my-8
            "
          />
        )}

          <div
          className="
            grid
            md:grid-cols-[80px_1fr]
            gap-5
            items-center
          "
        >

          {/* Icon */}

          <div
            className="
              w-14
              h-14
              rounded-2xl
              bg-[#EDF4FB]
              flex
              items-center
              justify-center
            "
          >
            <Icon
              size={25}
              className="text-[#155A96]"
            />
          </div>

          {/* Content */}

          <div>

            <h3
      className="
        text-xl
        md:text-2xl
        font-bold
        text-[#071426]
        mb-3
        leading-tight
      "
    >
      {card.title}
    </h3>

            <p
      className="
        text-[#64748B]
        text-base
        leading-relaxed
        max-w-3xl
      "
    >
      {card.description}
    </p>

          </div>

        </div>

      </div>

    );
  })}

</div>

  </div>
</section>
)}

 {product?.pricing?.length > 0 && (
  <section   id="pricing" className="relative py-10 sm:py-12 md:py-12 px-4 sm:px-6 bg-[#F5F8FB] overflow-hidden">

    <div className="max-w-5xl mx-auto relative z-10">

      {/* HEADING */}
      <div className="text-center mb-10 md:mb-8">

        <p
          className="
            text-[#155A96]
            font-semibold
            uppercase
            tracking-[0.2em]
            mb-3
          "
        >
          Pricing
        </p>

        <h2 className="mt-6 text-3xl sm:text-4xl md:text-[46px] font-black tracking-tight text-[#071426]">
          Choose Your {product.title}
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg leading-8 text-[#64748B]">
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
<section className="relative py-10 md:py-12 bg-[#F8FAFC] overflow-hidden">

  <div className="max-w-7xl mx-auto px-4 sm:px-6">

    {/* Heading */}

    <div className="text-center mb-8">

      <p
        className="
          text-[#155A96]
          font-semibold
          uppercase
          tracking-[0.25em]
          mb-4
        "
      >
        Success Stories
      </p>

      <h2
        className="
          text-3xl
          md:text-4xl
          font-bold
          text-[#071426]
          leading-tight
        "
      >
        What Businesses Say About {product.name}
      </h2>

      <p
        className="
          mt-3
          text-[#64748B]
          max-w-3xl
          mx-auto
          leading-relaxed
        "
      >
        Trusted by businesses across industries for smarter
        accounting, faster operations and reliable management.
      </p>

    </div>

    {/* Main Layout */}

    <div
      className="
        grid
        lg:grid-cols-[320px_1fr]
        gap-4
        items-center
      "
    >

      {/* LEFT STATS */}

      <div
        className="
          bg-white
          border
          border-slate-200
          rounded-[32px]
          p-4
        "
      >

        <div className="mb-6">

          <h3
            className="
              text-4xl
              font-black
              text-[#155A96]
            "
          >
            4.9
          </h3>

          <p className="text-[#64748B] mt-2">
            Average Customer Rating
          </p>

        </div>

        <div className="space-y-5">

          <div>
            <h4 className="text-2xl font-bold text-[#071426]">
              4000+
            </h4>

            <p className="text-[#64748B]">
              Businesses Served
            </p>
          </div>

          <div>
            <h4 className="text-2xl font-bold text-[#071426]">
              98%
            </h4>

            <p className="text-[#64748B]">
              Client Satisfaction
            </p>
          </div>

          <div>
            <h4 className="text-2xl font-bold text-[#071426]">
              24+
            </h4>

            <p className="text-[#64748B]">
              Years Experience
            </p>
          </div>

        </div>

      </div>

      {/* TESTIMONIAL CARD */}

      <div
        className="
          bg-white
          border
          border-slate-200
          rounded-[32px]
          p-6
          md:p-10
          shadow-[0_20px_50px_rgba(0,0,0,0.05)]
        "
      >

        {/* Stars */}

        <div className="flex gap-1 mb-4">

          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className="text-[#F0AE11] text-2xl"
            >
              ★
            </span>
          ))}

        </div>

        {/* Review */}

        <blockquote
          className="
            text-lg
            md:text-xl
            leading-relaxed
            text-[#334155]
            mb-8
          "
        >
          "{product.testimonials[activeTestimonial].review}"
        </blockquote>

        {/* User */}

        <div className="flex items-center justify-between flex-wrap gap-4">

          <div className="flex items-center gap-4">

            <div
              className="
                w-10
                h-10
                rounded-full
                bg-[#155A96]
                text-white
                flex
                items-center
                justify-center
                font-bold
                text-lg
              "
            >
              {product.testimonials[
                activeTestimonial
              ].name.charAt(0)}
            </div>

            <div>

              <h4
                className="
                  font-bold
                  text-[#071426]
                "
              >
                {
                  product.testimonials[
                    activeTestimonial
                  ].name
                }
              </h4>

              <p className="text-[#64748B]">
                {
                  product.testimonials[
                    activeTestimonial
                  ].role
                }
              </p>

            </div>

          </div>

          {/* Navigation */}

          <div className="flex gap-3">

            <button
              onClick={() =>
                setActiveTestimonial(
                  activeTestimonial === 0
                    ? product.testimonials.length - 1
                    : activeTestimonial - 1
                )
              }
              className="
                w-11
                h-11
                rounded-full
                border
                border-slate-200
                hover:border-[#155A96]
              "
            >
              ←
            </button>

            <button
              onClick={() =>
                setActiveTestimonial(
                  activeTestimonial ===
                    product.testimonials.length - 1
                    ? 0
                    : activeTestimonial + 1
                )
              }
              className="
                w-11
                h-11
                rounded-full
                bg-[#155A96]
                text-white
              "
            >
              →
            </button>

          </div>

        </div>

        {/* Dots */}

        <div className="flex gap-2 mt-8">

          {product.testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() =>
                setActiveTestimonial(index)
              }
              className={`
                h-2
                rounded-full
                transition-all
                ${
                  activeTestimonial === index
                    ? "w-8 bg-[#155A96]"
                    : "w-2 bg-slate-300"
                }
              `}
            />
          ))}

        </div>

      </div>

    </div>

  </div>

</section>
)}


      {/* ================= CTA SECTION ================= */}
{product.cta && (
<section className="relative py-10 sm:py-12 md:py-12 bg-white overflow-hidden">

  <div
  className="
    absolute
    top-0
    left-1/2
    -translate-x-1/2
    w-[700px]
    h-[700px]
    rounded-full
    bg-[#155A96]/5
    blur-3xl
  "
/>

  <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">

    {/* BADGE */}
    <div className="
      inline-flex items-center
      px-5 py-2
      rounded-full
      border-[#D9E7F5]
      bg-[#EDF4FA]
      text-[#155A96]
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
        bg-[#155A96]
        hover:bg-[#1D6FB8]
        text-white
        text-[17px]
        font-semibold
        shadow-[0_10px_30px_rgba(21,90,150,0.08)]
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
        hover:border-[#155A96]
        hover:text-[#155A96]
        hover:shadow-[0_10px_30px_rgba(21,90,150,0.08)]
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
        <div className="w-2 h-2 rounded-full bg-[#F0AE11]" />
        Trusted Business Solution
      </div>

      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-[#F0AE11]" />
        Expert Support Available
      </div>

      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-[#F0AE11]" />
        Fast & Secure Setup
      </div>

    </div>

  </div>
</section>
)}
    </>
  );
}