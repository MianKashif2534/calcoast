"use client";

import { motion, type Variants } from "framer-motion";
import { useState } from "react";

const freightTypes = [
  "Full Truckload",
  "Less Than Truckload (LTL)",
  "Fresh Produce",
  "General Freight",
  "Refrigerated",
  "Other",
];

const easeOut = [0.22, 1, 0.36, 1] as const;

const viewport = { once: true, margin: "-60px" };

const sectionBg = {
  background:
    "radial-gradient(1200px 520px at 50% -120px, rgba(52, 116, 244, 0.28), rgba(52, 116, 244, 0) 60%), radial-gradient(900px 420px at 12% 26%, rgba(90, 168, 255, 0.18), rgba(90, 168, 255, 0) 65%), radial-gradient(900px 420px at 88% 18%, rgba(30, 64, 175, 0.12), rgba(30, 64, 175, 0) 60%), linear-gradient(180deg, rgba(255, 255, 255, 0.55) 0%, rgba(52, 116, 244, 0.1) 60%, rgba(240, 244, 248, 1) 100%), #f0f4f8",
};

const headerBlock: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.06 },
  },
};

const headerEyebrow: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

const headerTitle: Variants = {
  hidden: { opacity: 0, y: 18, rotateX: -6 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.55, ease: easeOut },
  },
};

const headerSub: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

const cardShell: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: easeOut },
  },
};

const formRoot: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.08 },
  },
};

const formRow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.04 },
  },
};

const fieldPair: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.02 },
  },
};

const fieldLabel: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.32, ease: easeOut },
  },
};

const fieldControl: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.99 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.38, ease: easeOut },
  },
};

const submitBtn: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: easeOut },
  },
};

const inputClassName =
  "w-full rounded-lg border border-transparent bg-[linear-gradient(#ffffff,#ffffff)_padding-box,linear-gradient(90deg,rgba(52,116,244,0.55),rgba(90,168,255,0.55),rgba(52,116,244,0.55))_border-box] px-4 py-3 text-[#1A1A1A] placeholder:text-[#8A93A3] shadow-[0_0_0_1px_rgba(52,116,244,0.12),0_10px_22px_rgba(15,23,42,0.05)] transition-[box-shadow,transform] duration-200 outline-none shadow-[0_0_0_2px_rgba(52,116,244,0.25),0_0_28px_rgba(52,116,244,0.18),0_16px_28px_rgba(15,23,42,0.07)]";

const selectClassName =
  "w-full appearance-none rounded-lg border border-transparent bg-[linear-gradient(#ffffff,#ffffff)_padding-box,linear-gradient(90deg,rgba(52,116,244,0.55),rgba(90,168,255,0.55),rgba(52,116,244,0.55))_border-box] px-4 py-3 pr-10 text-[#1A1A1A] shadow-[0_0_0_1px_rgba(52,116,244,0.12),0_10px_22px_rgba(15,23,42,0.05)] transition-[box-shadow,transform] duration-200 outline-none shadow-[0_0_0_2px_rgba(52,116,244,0.25),0_0_28px_rgba(52,116,244,0.18),0_16px_28px_rgba(15,23,42,0.07)] [&>option]:text-[#1A1A1A] [&>option[value='']]:text-[#8A93A3]";

function buildQuoteEmailBody(fields: {
  fullName: string;
  email: string;
  phone: string;
  freightType: string;
  origin: string;
  destination: string;
  details: string;
}): string {
  const dash = (v: string) => (v.trim() ? v.trim() : "—");
  return [
    "══════════════════════════════════════",
    "  NEW FREIGHT QUOTE REQUEST",
    "══════════════════════════════════════",
    "",
    "CONTACT",
    "───────",
    `  Name:          ${dash(fields.fullName)}`,
    `  Email:         ${dash(fields.email)}`,
    `  Phone:         ${dash(fields.phone)}`,
    "",
    "SHIPMENT",
    "────────",
    `  Freight type:  ${dash(fields.freightType)}`,
    `  Origin:        ${dash(fields.origin)}`,
    `  Destination:   ${dash(fields.destination)}`,
    "",
    "ADDITIONAL DETAILS",
    "──────────────────",
    fields.details.trim() || "  (none provided)",
    "",
    "— Sent via website quote form",
  ].join("\n");
}

export function QuoteFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );
  const [submitMessage, setSubmitMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim() || "2db2bd75-4e8c-457a-b9ae-20916e67e912";
    if (!accessKey) {
      setSubmitStatus("error");
      setSubmitMessage(
        "Form email is not configured. Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to your environment.",
      );
      return;
    }

    const fd = new FormData(form);
    const fullName = String(fd.get("fullName") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const freightType = String(fd.get("freightType") ?? "").trim();
    const origin = String(fd.get("origin") ?? "").trim();
    const destination = String(fd.get("destination") ?? "").trim();
    const details = String(fd.get("details") ?? "").trim();

    const route =
      origin && destination
        ? `${origin} → ${destination}`
        : origin || destination || "Route TBD";
    const subject = `Freight quote: ${route} — ${fullName || email || "Website"}`;

    const formData = new FormData();
    formData.append("access_key", accessKey);
    formData.append("subject", subject);
    formData.append("name", fullName);
    formData.append("email", email);
    formData.append("replyto", email);
    if (phone) formData.append("phone", phone);
    formData.append(
      "message",
      buildQuoteEmailBody({
        fullName,
        email,
        phone,
        freightType,
        origin,
        destination,
        details,
      }),
    );

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setSubmitMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      let data: { success?: boolean; message?: string };
      try {
        data = await response.json();
      } catch {
        setSubmitStatus("error");
        setSubmitMessage(
          "We could not read the server response. Please try again.",
        );
        return;
      }

      if (data.success) {
        setSubmitStatus("success");
        setSubmitMessage(
          "Thanks — your quote request was sent. We will get back to you shortly.",
        );
        form.reset();
      } else {
        setSubmitStatus("error");
        setSubmitMessage(
          data.message?.trim() ||
            "Something went wrong sending your request. Please try again or call us.",
        );
      }
    } catch {
      setSubmitStatus("error");
      setSubmitMessage(
        "Network error — please check your connection and try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <motion.section
      className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      style={sectionBg}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={viewport}
      transition={{ duration: 0.45, ease: easeOut }}
    >
      <div className="mx-auto max-w-3xl">
        <motion.div
          className="mb-10 text-center"
          variants={headerBlock}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.p
            className="text-base font-medium text-[#3474F4] sm:text-lg"
            variants={headerEyebrow}
          >
            Get Started
          </motion.p>
          <motion.h2
            className="mt-2 text-3xl font-bold text-[#1A1A1A] sm:text-4xl lg:text-[2.5rem]"
            style={{ transformStyle: "preserve-3d" }}
            variants={headerTitle}
          >
            Get a Freight Quote Today
          </motion.h2>
          <motion.p
            className="mt-3 text-base text-[#555555] sm:text-lg"
            variants={headerSub}
          >
            Need reliable freight transportation? Contact our team for a fast
            and competitive quote.
          </motion.p>
        </motion.div>

        <motion.div
          variants={cardShell}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <div className="rounded-2xl bg-gradient-to-br from-[#3474F4]/55 via-[#5AA8FF]/55 to-[#1E40AF]/55 p-[2px] shadow-[0_0_0_1px_rgba(52,116,244,0.10),0_0_45px_rgba(52,116,244,0.18),0_18px_40px_rgba(15,23,42,0.10)]">
            <div className="rounded-2xl bg-white/90 p-6 backdrop-blur-[2px] sm:p-8 md:p-10">
              <motion.form
                onSubmit={handleSubmit}
                className="space-y-6"
                variants={formRoot}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
              >
                <motion.div
                  className="grid gap-6 sm:grid-cols-2"
                  variants={formRow}
                >
                  <motion.div className="space-y-2" variants={fieldPair}>
                    <motion.label
                      htmlFor="fullName"
                      className="block text-sm font-semibold text-[#333333]"
                      variants={fieldLabel}
                    >
                      Full Name
                    </motion.label>
                    <motion.input
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="John Deo"
                      required
                      className={inputClassName}
                      variants={fieldControl}
                    />
                  </motion.div>
                  <motion.div className="space-y-2" variants={fieldPair}>
                    <motion.label
                      htmlFor="email"
                      className="block text-sm font-semibold text-[#333333]"
                      variants={fieldLabel}
                    >
                      Email
                    </motion.label>
                    <motion.input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="jenn@calcoast.com"
                      required
                      className={inputClassName}
                      variants={fieldControl}
                    />
                  </motion.div>
                </motion.div>

                <motion.div
                  className="grid gap-6 sm:grid-cols-2"
                  variants={formRow}
                >
                  <motion.div className="space-y-2" variants={fieldPair}>
                    <motion.label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-[#333333]"
                      variants={fieldLabel}
                    >
                      Phone
                    </motion.label>
                    <motion.input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(555) 000-0000"
                      className={inputClassName}
                      variants={fieldControl}
                    />
                  </motion.div>
                  <motion.div className="space-y-2" variants={fieldPair}>
                    <motion.label
                      htmlFor="freightType"
                      className="block text-sm font-semibold text-[#333333]"
                      variants={fieldLabel}
                    >
                      Freight Type
                    </motion.label>
                    <motion.div className="relative" variants={fieldControl}>
                      <motion.select
                        id="freightType"
                        name="freightType"
                        className={selectClassName}
                      >
                        <option value="">Select type...</option>
                        {freightTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </motion.select>
                      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                        <motion.svg
                          className="h-4 w-4 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          aria-hidden
                          initial={{ opacity: 0, y: -4 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={viewport}
                          transition={{
                            delay: 0.15,
                            duration: 0.35,
                            ease: easeOut,
                          }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 9l6 6 6-6"
                          />
                        </motion.svg>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="grid gap-6 sm:grid-cols-2"
                  variants={formRow}
                >
                  <motion.div className="space-y-2" variants={fieldPair}>
                    <motion.label
                      htmlFor="origin"
                      className="block text-sm font-semibold text-[#333333]"
                      variants={fieldLabel}
                    >
                      Origin
                    </motion.label>
                    <motion.input
                      id="origin"
                      name="origin"
                      type="text"
                      placeholder="Fresno, CA"
                      className={inputClassName}
                      variants={fieldControl}
                    />
                  </motion.div>
                  <motion.div className="space-y-2" variants={fieldPair}>
                    <motion.label
                      htmlFor="destination"
                      className="block text-sm font-semibold text-[#333333]"
                      variants={fieldLabel}
                    >
                      Destination
                    </motion.label>
                    <motion.input
                      id="destination"
                      name="destination"
                      type="text"
                      placeholder="Chicago, IL"
                      className={inputClassName}
                      variants={fieldControl}
                    />
                  </motion.div>
                </motion.div>

                <motion.div className="space-y-2" variants={formRow}>
                  <motion.div variants={fieldPair}>
                    <motion.label
                      htmlFor="details"
                      className="block text-sm font-semibold text-[#333333]"
                      variants={fieldLabel}
                    >
                      Additional Details
                    </motion.label>
                    <motion.textarea
                      id="details"
                      name="details"
                      rows={4}
                      placeholder="Tell us about your shipment..."
                      className={`${inputClassName} resize-y`}
                      variants={fieldControl}
                    />
                  </motion.div>
                </motion.div>

                <motion.div variants={submitBtn} className="w-full">
                  <motion.div
                    whileHover={{
                      scale: isSubmitting ? 1 : 1.06,
                      y: isSubmitting ? 0 : -2,
                    }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.96 }}
                    className="relative inline-block w-full rounded-full p-[2px] overflow-hidden"
                  >
                    {/* 🔥 Animated Border */}
                    <span
                      className="absolute inset-0 rounded-full animate-[spin_3s_linear_infinite] blur-[6px] opacity-80"
                      style={{
                        background:
                          "conic-gradient(from 0deg, #ff0000, #ffff00, #ff0000)",
                      }}
                    ></span>

                    {/* 🔥 Inner Glass Layer */}
                    <span className="absolute inset-[2px] rounded-full bg-black/70 backdrop-blur-md"></span>

                    {/* 🔥 Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="relative z-10 w-full rounded-full bg-[#3474F4] px-6 py-4 text-base font-semibold text-white transition-all duration-300
      hover:bg-[#2F6AF0]
      shadow-[0_10px_25px_rgba(0,0,0,0.4),0_0_25px_rgba(52,116,244,0.5)]
      disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Submitting..." : "Request a Quote"}
                    </motion.button>

                    {/* 🔥 Shine Effect */}
                    <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/20 to-transparent opacity-40"></span>
                  </motion.div>
                </motion.div>

                {submitStatus !== "idle" && (
                  <motion.p
                    role="status"
                    aria-live="polite"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, ease: easeOut }}
                    className={
                      submitStatus === "success"
                        ? "rounded-xl border border-emerald-200/80 bg-emerald-50/90 px-4 py-3 text-center text-sm font-medium text-emerald-900"
                        : "rounded-xl border border-red-200/80 bg-red-50/90 px-4 py-3 text-center text-sm font-medium text-red-900"
                    }
                  >
                    {submitMessage}
                  </motion.p>
                )}
              </motion.form>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
