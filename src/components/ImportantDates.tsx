export default function ImportantDates() {
  const dates = [
    {
      title: "Online Application Opens",
      date: "05 January 2026",
      time: "(12 noon)",
      icon: (
        <svg className="w-10 h-10 text-[#00bcd4]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
    },
    {
      title: "Online Application Closes",
      date: "06 April 2026",
      time: "(11:30 pm)",
      icon: (
        <svg className="w-10 h-10 text-[#00bcd4]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <circle cx="8" cy="13" r="1" fill="currentColor" />
          <circle cx="12" cy="13" r="1" fill="currentColor" />
          <circle cx="16" cy="13" r="1" fill="currentColor" />
          <circle cx="8" cy="17" r="1" fill="currentColor" />
          <circle cx="12" cy="17" r="1" fill="currentColor" />
        </svg>
      ),
    },
    {
      title: "Correction & Update window",
      date: "13 April 2026",
      time: "(10 am)",
      subtitle: "Until 14 April (10 am)",
      icon: (
        <svg className="w-10 h-10 text-[#00bcd4]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path d="M12 3C7 3 3 7 3 12h3l-4 4-4-4h3c0-6 5-11 11-11z" />
          <path d="M21 12c0 5-4 9-9 9" />
          <circle cx="15" cy="9" r="1" fill="currentColor" />
          <circle cx="18" cy="12" r="1" fill="currentColor" />
        </svg>
      ),
    },
    {
      title: "Mock Test Opens",
      date: "To be announced",
      subtitle: "Link will appear here",
      isAnnounced: false,
      icon: (
        <svg className="w-10 h-10 text-[#00bcd4]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4" />
          <circle cx="12" cy="12" r="10" />
        </svg>
      ),
    },
    {
      title: "Download of Admit Card",
      date: "15 May 2026",
      time: "(10 am)",
      icon: (
        <svg className="w-10 h-10 text-[#00bcd4]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path d="M12 3v12m0 0l-4-4m4 4l4-4" />
          <path d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
        </svg>
      ),
    },
    {
      title: "Date of Examination",
      date: "06 June 2026, Saturday",
      time: "(2 pm)",
      icon: (
        <svg className="w-10 h-10 text-[#00bcd4]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
      ),
    },
    {
      title: "Challenge the Answer Keys",
      date: "To be announced",
      isAnnounced: false,
      icon: (
        <svg className="w-10 h-10 text-[#00bcd4]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M9 9l6 6M15 9l-6 6" />
        </svg>
      ),
    },
    {
      title: "Result Announcement",
      date: "To be announced",
      isAnnounced: false,
      icon: (
        <svg className="w-10 h-10 text-[#00bcd4]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
          <path d="M12 3v12m0 0l-4-4m4 4l4-4" />
        </svg>
      ),
    },
    {
      title: "Scorecard Download",
      date: "To be announced",
      subtitle: "Only for qualified candidates",
      isAnnounced: false,
      icon: (
        <svg className="w-10 h-10 text-[#00bcd4]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path d="M12 3v12m0 0l-4-4m4 4l4-4" />
          <path d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
          <circle cx="12" cy="3" r="2" />
        </svg>
      ),
    },
  ];

  return (
    <section id="important-dates" className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-10">
          <p className="text-gray-400 text-sm tracking-widest uppercase flex items-center gap-3">
            DEADLINES
            <span className="w-16 h-0.5 bg-[#e67e22] inline-block" />
          </p>
          <h2 className="text-4xl font-bold text-[#2d3436] mt-1">
            IMPORTANT DATES
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dates.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-6 flex items-start gap-4 hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0">{item.icon}</div>
              <div>
                <h3 className="text-lg font-bold text-[#2d3436] mb-1">
                  {item.title}
                </h3>
                {item.isAnnounced === false ? (
                  <>
                    <p className="text-gray-400 italic text-sm">{item.date}</p>
                    {item.subtitle && (
                      <p className="text-gray-400 italic text-sm">
                        {item.subtitle}
                      </p>
                    )}
                  </>
                ) : (
                  <>
                    <p className="text-sm">
                      <span className="text-[#e74c3c] font-semibold">
                        {item.date}
                      </span>{" "}
                      {item.time && (
                        <span className="text-gray-600">{item.time}</span>
                      )}
                    </p>
                    {item.subtitle && (
                      <p className="text-gray-500 text-sm italic">
                        {item.subtitle}
                      </p>
                    )}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
