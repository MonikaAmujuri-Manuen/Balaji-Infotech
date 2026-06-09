import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const QuoteForm = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    employees: "",
    invoices: "",
    product: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const savedData = localStorage.getItem("quoteForm");

    if (savedData) {
      setForm(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "quoteForm",
      JSON.stringify(form)
    );
  }, [form]);

  const validate = (name, value) => {
    let error = "";

    if (
      ["employees", "invoices"].includes(name) &&
      value !== ""
    ) {
      const num = Number(value);

      if (isNaN(num) || num < 0) {
        error = "Please enter a valid number";
      }

      if (name === "employees" && num > 10000) {
        error = "Employee count too large";
      }

      if (name === "invoices" && num > 1000000) {
        error = "Invoice count too large";
      }
    }

    if (name === "email" && value !== "") {
      const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(value)) {
        error = "Enter valid email";
      }
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });

    validate(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const hasErrors = Object.values(errors).some(
      (error) => error !== ""
    );

    if (hasErrors) return;

    console.log("Submitted Form:", form);

    alert("Quote request submitted successfully!");

    localStorage.removeItem("quoteForm");

    setForm({
      name: "",
      email: "",
      phone: "",
      company: "",
      employees: "",
      invoices: "",
      product: "",
    });
  };

  return (
    <>
      {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
              relative
            "
          >

            <form
            onSubmit={handleSubmit}
            className="
            relative
                border
                border-white/60
                bg-white/70
                backdrop-blur-2xl
                rounded-3xl
                p-5
                sm:p-6
                lg:p-7
                shadow-[0_20px_60px_rgba(0,0,0,0.08)]
              "
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* INPUTS */}
                {[
                  {
                    name: "name",
                    placeholder: "Full Name",
                    type: "text",
                  },
                  {
                    name: "email",
                    placeholder: "Business Email",
                    type: "email",
                  },
                  {
                    name: "phone",
                    placeholder: "Phone Number",
                    type: "tel",
                  },
                  {
                    name: "employees",
                    placeholder: "Employees",
                    type: "number",
                  },
                  {
                    name: "invoices",
                    placeholder: "Monthly Invoices",
                    type: "number",
                  },
                  {
                    name: "outgoing invoices",
                    placeholder: "Outgoing Invoices",
                    type: "number",
                  }
                ].map((field, index) => (
                  <div
                    key={index}
                    className="
                      flex
                      flex-col
                    "
                  >
                    <input
                    required
                      type={field.type}
                      name={field.name}
                      value={form[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className={`
                        h-12
                        rounded-xl
                        px-4
                        text-sm
                        border
                        bg-white/80
                        outline-none
                        transition-all
                        duration-300
                        text-[#071426]
                        placeholder:text-gray-400
                        focus:border-[#2F80FF]
                        focus:ring-4
                        focus:ring-[#2F80FF]/10
                        ${
                          errors[field.name]
                            ? "border-red-400"
                            : "border-gray-200"
                        }
                      `}
                    />

                    {errors[field.name] && (
                      <span
                        className="
                          text-red-500
                          text-sm
                          mt-2
                        "
                      >
                        {errors[field.name]}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* DROPDOWN */}
              <div className="mt-4">
                <select
                required
                  name="product"
                  value={form.product}
                  onChange={handleChange}
                  className="
                    w-full
                    h-12
                    rounded-xl
                    px-4
                    text-sm
                    border
                    border-gray-200
                    bg-white/80
                    outline-none
                    transition-all
                    duration-300
                    text-[#071426]
                    focus:border-[#2F80FF]
                    focus:ring-4
                    focus:ring-[#2F80FF]/10
                  "
                >
                  <option value="">
                    Interested Product
                  </option>

                  <option>TallyPrime</option>
                  <option>TallyPrime Server</option>
                  <option>
                    TallyPrime AWS
                  </option>
                  <option>Customization</option>
                  <option>Training</option>
                </select>
              </div>

              {/* BUTTON */}
              <motion.button
                type="submit"
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }} 
                className="
                  group
                  w-full
                  mt-5
                  h-12
                  rounded-xl
                  text-sm
                  bg-gradient-to-r
                  from-[#2F80FF]
                  to-[#7B61FF]
                  text-white
                  font-semibold
                  shadow-[0_15px_35px_rgba(47,128,255,0.35)]
                  flex
                  items-center
                  justify-center
                  gap-3
                "
              >
                Get Free Quote

                <ArrowRight
                  className="
                    w-5
                    h-5
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </motion.button>
            </form>
          </motion.div>
    </>
  );
};

export default QuoteForm;
