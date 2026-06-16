import { useState, useEffect } from "react";
import { Check, Info, Layers3 } from "lucide-react";
import { Link } from "react-router-dom";

export default function PricingCard({ plan, index }) {
  const isInteractive = plan.variants?.length > 0;

  const [selectedVariant, setSelectedVariant] = useState(
  plan.variants?.[0] || null
);

useEffect(() => {
  setSelectedVariant(plan.variants?.[0] || null);
}, [plan]);

  return (
    <div
  className={`
    relative flex flex-col
    rounded-[30px]
    border
    bg-white
    overflow-hidden
    transition-all duration-300
    hover:-translate-y-2
    hover:shadow-[0_20px_60px_rgba(17,120,212,0.12)]
    ${
      index === 1
        ? "border-[#155A96] shadow-[0_10px_40px_rgba(17,120,212,0.10)]"
        : "border-gray-200"
    }
  `}
>

  {/* TOP BORDER */}
  <div
    className={`
      h-[4px] w-full
      ${
        index === 1
          ? "bg-[#155A96]"
          : "bg-[#D6E6F5]"
      }
    `}
  />

  <div className="p-8 flex flex-col h-full">

    {/* HEADER */}
    <div className="flex flex-col items-center text-center gap-4">

      <div className="w-14 h-14 rounded-2xl bg-[#EDF4FA] flex items-center justify-center shrink-0">
        <Layers3 className="w-7 h-7 text-[#155A96]" />
      </div>

      <div>
        <h3 className="text-[24px] leading-[1.2] font-[800] text-[#0B132B]">
          {plan.name}
        </h3>

        <p className="mt-2 text-[15px] leading-[1.6] text-gray-500 max-w-[280px]">
          {plan.subtitle}
        </p>

        {plan.description && (
        <p className="text-gray-500 text-sm leading-relaxed mt-5 max-w-[300px] mx-auto">
            {plan.description}
        </p>
        )}
      </div>

    </div>

    {/* USER PACKS */}
    {isInteractive && (
      <div className="flex flex-wrap justify-center gap-2 mt-8">

        {plan.variants?.map((variant, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedVariant(variant)}
            className={`
              w-11 h-11 rounded-xl border
              text-[15px] font-semibold
              transition-all duration-300
              ${
                selectedVariant?.pack === variant.pack
                  ? "bg-[#155A96] text-white border-[#155A96]"
                  : "border-[#155A96] text-[#155A96] hover:bg-[#155A96] hover:text-white"
              }
            `}
          >
            {variant.pack}
          </button>
        ))}

      </div>
    )}

    {/* PRICE */}
    <div className="mt-10 text-center">

        {/* PACKAGE LABEL */}
        {isInteractive && (
        <p className="text-[18px] text-gray-500 mb-4">
            {selectedVariant?.packageName}
        </p>
        )}
        

      <div className="flex items-end justify-center gap-2">

        <span className="text-[14px] font-semibold text-gray-500 mb-2">
          INR
        </span>


        <h2 className="text-[30px] leading-none font-[900] text-[#0B132B]">
          {isInteractive
            ? selectedVariant?.price
            : plan.price}
        </h2>

      </div>

      <div className="flex items-center justify-center gap-2 mt-3 relative group">
  <p className="text-gray-500 text-[15px]">
    +18% GST (INR {plan.gst})
  </p>

  <div className="relative">
    <Info
      size={16}
      className="text-[#155A96] cursor-pointer"
    />

    {/* TOOLTIP */}
    <div
      className="
        absolute left-1/2 -translate-x-1/2
        bottom-8
        opacity-0 invisible
        group-hover:opacity-100
        group-hover:visible
        transition-all duration-200
        bg-[#0B1020]
        text-white
        text-xs
        px-3 py-2
        rounded-xl
        whitespace-nowrap
        shadow-2xl
        z-20
      "
    >
      Total Price: INR {plan.total}
    </div>
  </div>
</div>

    </div>

    {/* FEATURES */}
    {((isInteractive && selectedVariant) || plan.features) && (
  <div className="mt-4 space-y-4 flex-1 max-w-[260px] mx-auto">

      {(isInteractive
        ? [
            selectedVariant?.users,
            selectedVariant?.cpu,
            selectedVariant?.ram,
            selectedVariant?.storage,
            selectedVariant?.backup,
          ]
        : plan.features
      )
      ?.filter(Boolean)
    .map((feature, idx) => (
        <div
          key={idx}
          className="flex items-center justify-start gap-3"
        >

          <div className="w-8 h-8 rounded-full bg-[#EDF4FA] flex items-center justify-center shrink-0">
            <Check className="w-4 h-4 text-[#155A96]" />
          </div>

          <span className="text-[15px] text-[#1E293B]">
            {feature}
          </span>

        </div>
      ))}

    </div>
    )}

    {/* BUTTON */}
    <Link
  to="/contact"
  className={`
    mt-6 w-full h-[50px]
    rounded-[18px]
    text-[22px]
    font-[700]
    flex items-center justify-center
    transition-all duration-300
    ${
      index === 1
        ? "bg-[#155A96] text-white hover:bg-[#1D6FB8]"
        : "bg-[#071426] text-white hover:bg-[#0D223C]"
    }
  `}
>
  Buy Now
</Link>
  </div>
</div>
  );
}