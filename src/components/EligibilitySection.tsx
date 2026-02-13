import React from "react";

function BoldText({ text }: { text: string }) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? <strong key={i}>{part}</strong> : <React.Fragment key={i}>{part}</React.Fragment>
      )}
    </>
  );
}

export default function EligibilitySection() {
  const criteria = [
    "Candidates should have **at least three** out of the four disciplines of basic sciences, namely, Biology, Chemistry, Mathematics and Physics, in classes XI and XII.",
    "Candidates should have passed the class XII examination from any recognised Board in India in the year **2024** or **2025** or should be appearing for the same in **2026**. The (provisional) certificate declaring the aggregate should be from a single board. Candidates appearing for the board examination in 2026 must satisfy the eligibility criteria at the time of admission into the programme.",
    "Candidates must secure at least **60%** marks in aggregate or equivalent grade in class XII examination. For candidates belonging to scheduled castes (SC), scheduled tribes (ST), and Divyangjan categories, the minimum requirement of marks is **55%** in aggregate or equivalent grade in class XII examination.",
    "Candidate should secure a rank in the NEST 2026 merit list.",
  ];

  const fees = [
    { label: "Female applicants (irrespective of category)", amount: "700" },
    { label: "Applicants of SC/ST/Divyangjan category", amount: "700" },
    { label: "Applicants of Unreserved-EWS (UR-EWS)", amount: "700" },
    { label: "Male/Other applicants of UR/OBC category", amount: "1,400" },
  ];

  return (
    <section id="eligibility" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <p className="text-gray-400 text-sm tracking-widest uppercase flex items-center gap-3">
            ELIGIBILITY
            <span className="w-16 h-0.5 bg-[#e67e22] inline-block" />
          </p>
          <h2 className="text-4xl font-bold text-[#2d3436] mt-1">
            ELIGIBILITY CRITERIA
          </h2>
          <p className="text-[#2d3436] font-bold mt-2 text-sm tracking-wider">
            FOR ADMISSION
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-gray-600 mb-6">
              Candidates must qualify{" "}
              <span className="text-[#e74c3c] font-bold">all FOUR</span>{" "}
              eligibility criteria listed below:
            </p>

            <div className="space-y-6">
              {criteria.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-[#e67e22] flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={3}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-7">
                    <BoldText text={item} />
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-gray-600 italic">
              There is <strong>no upper age limit</strong> for appearing in the
              NEST 2026 examination and admission to either NISER or UM-DAE CEBS
              provided all the above eligibility criteria are fulfilled.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#2d3436] mb-8">
              Application Fee
            </h3>

            <div className="space-y-6">
              {fees.map((fee, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      className="w-6 h-6 text-[#e67e22]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 7l4 4"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-600">
                    {fee.label} :{" "}
                    <strong className="text-[#2d3436]">
                      &#8377;{fee.amount}
                    </strong>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
