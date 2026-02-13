export default function HeroSection() {
  return (
    <section id="home">
      {/* Helpdesk Banner */}
      <div className="bg-[#2d3436] text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute bottom-0 left-0 right-0 h-32"
            style={{
              background:
                "linear-gradient(135deg, #9e9e9e 25%, transparent 25%, transparent 50%, #bdbdbd 50%, #bdbdbd 75%, transparent 75%)",
            }}
          />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Looking for HELPDESK ?
          </h1>
          <p className="text-gray-300 mb-8 text-lg">
            For issues on Registration / Application / Payment-failure please
            click &apos;Helpdesk&apos; after Login.
          </p>
          <a
            href="#"
            className="inline-block border-2 border-[#e67e22] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#e67e22] transition-colors"
          >
            Tech.Support
          </a>
        </div>
      </div>

      {/* Diagonal Gradient Divider */}
      <div className="relative h-16 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(170deg, #2d3436 30%, #9e9e9e 30%, #9e9e9e 50%, #bdbdbd 50%, #bdbdbd 70%, #e0e0e0 70%)",
          }}
        />
      </div>

      {/* Register / Login Section */}
      <div className="bg-[#fdf6e3] py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold text-[#2d3436] mb-4">
              Register / Login
            </h2>
            <p className="text-gray-600 mb-2 max-w-2xl">
              You will be redirected to the &quot;Application Portal&quot;
              maintained by an agency whose service is governed by NEST.
            </p>
            <p className="text-gray-600 mb-2">
              LOGIN button is used to Apply / Edit / Download AdmitCard / View
              Result &amp; Scorecard.
            </p>
            <p className="text-[#e67e22] italic">
              Application process started on 05 Jan 2026, 12:00 pm.
            </p>
          </div>
          <div className="flex flex-col gap-4">
              <a
                href="/login?tab=register"
                className="bg-[#e67e22] text-white px-10 py-3 rounded-full font-semibold text-center hover:bg-[#d35400] transition-colors flex items-center gap-2 justify-center"
              >
                New Registration
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
              </svg>
            </a>
              <a
                href="/login"
                className="border-2 border-[#e67e22] text-[#e67e22] px-10 py-3 rounded-full font-semibold text-center hover:bg-[#e67e22] hover:text-white transition-colors flex items-center gap-2 justify-center"
              >
                LOGIN
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
