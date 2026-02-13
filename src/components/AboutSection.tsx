export default function AboutSection() {
  return (
    <section id="about" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-10">
          <p className="text-gray-400 text-sm tracking-widest uppercase flex items-center gap-3">
            ABOUT
            <span className="w-16 h-0.5 bg-[#e67e22] inline-block" />
          </p>
          <h2 className="text-4xl font-bold text-[#2d3436] mt-1">NEST</h2>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 text-gray-600 leading-7">
          <div>
            <p className="mb-4">
              The <strong>National Entrance Screening Test</strong> (NEST) is a
              compulsory online computer-based test for admission to the
              five-year Integrated MSc programme offered by the{" "}
              <strong>National Institute of Science Education and Research</strong>{" "}
              (NISER) and the{" "}
              <strong>
                University of Mumbai - Department of Atomic Energy Centre for
                Excellence in Basic Sciences
              </strong>{" "}
              (UM-DAE CEBS). NISER and UM-DAE CEBS are autonomous institutions
              established by the Department of Atomic Energy (DAE), Government
              of India, in 2007. These institutes were started with the mandate
              of providing research-oriented teaching in basic sciences by
              faculties of practising scientists aimed at creating a national
              pool of human resources to lead the nation to excellence in
              teaching and research in basic and applied sciences.
            </p>
            <p className="mb-6">
              NEST 2026 will be conducted in around{" "}
              <strong className="text-[#e67e22]">387</strong> cities across
              India.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-[#e67e22] text-white px-8 py-3 rounded font-semibold hover:bg-[#d35400] transition-colors"
            >
              Centre List
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
          <div>
            <p className="mb-4">
              The candidates admitted to the Integrated MSc program are eligible
              to receive an annual scholarship of &#8377;60,000 through the
              DISHA program of the Department of Atomic Energy, Government of
              India. In addition, the scholarship recipients receive a grant of
              &#8377;20,000/- per annum for summer internships. Candidates
              selected by DST for the INSPIRE-SHE program are endorsed for the
              INSPIRE scholarship by NISER and UM-DAE CEBS. A vast majority of
              students graduating from the integrated MSc programs offered in the
              two institutes pursue doctoral research at universities and
              institutions of repute in India and abroad, including NISER or CEBS
              and join academia or industry primarily in research positions. The
              placements of the graduated students from NISER and UM-DAE CEBS
              provide testimony to the success of this program.
            </p>
            <p>
              NISER, Bhubaneswar and UM-DAE CEBS, Mumbai are in compliance with
              the UGC and Govt. of India guidelines on anti-ragging. Ragging in
              any form is a punishable offense and hence is totally prohibited on
              these campuses. Any complaint regarding ragging can be made at the
              24x7 toll-free National Anti-Ragging Help Line number{" "}
              <a href="tel:18001805522" className="text-[#00bcd4]">
                1800-180-5522
              </a>{" "}
              and/or at the email-ID{" "}
              <a
                href="mailto:helpline@antiragging.in"
                className="text-[#e67e22]"
              >
                helpline@antiragging.in
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
