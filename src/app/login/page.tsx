"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";

function LoginForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (searchParams.get("tab") === "register") {
      setActiveTab("register");
    }
  }, [searchParams]);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMessage(""); // Clear error when user types
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (activeTab === "login") {
      // Hardcoded credentials check
      const VALID_REGISTRATION_NO = "2630415137";
      const VALID_PASSWORD = "22092007";

      if (formData.email === VALID_REGISTRATION_NO && formData.password === VALID_PASSWORD) {
        // Successful login
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("registrationNo", formData.email);

        // Redirect to dashboard
        router.push("/dashboard");
      } else {
        // Invalid credentials
        setErrorMessage("Invalid registration number or password. Please try again.");
      }
    } else {
      // Registration functionality
      alert("Registration functionality is not connected to a backend yet.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-[#2d3436] text-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#00bcd4] flex items-center justify-center border-2 border-white">
              <span className="text-xs font-bold text-white text-center leading-tight">
                NEST
              </span>
            </div>
            <span className="text-2xl font-bold tracking-wide">
              NEST<span className="text-[#e67e22]">2026</span>
            </span>
          </Link>
          <Link
            href="/"
            className="text-gray-300 hover:text-white text-sm flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto py-10 px-4">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left - Info Panel */}
          <div className="bg-[#2d3436] text-white rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">NEST 2026 Application Portal</h2>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#e67e22] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Apply Online</p>
                  <p className="text-gray-400 text-sm">Fill your application form and upload documents</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#e67e22] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Pay Application Fee</p>
                  <p className="text-gray-400 text-sm">Secure online payment via Net Banking / Card / UPI</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#e67e22] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Download Admit Card</p>
                  <p className="text-gray-400 text-sm">Available from 15 February 2026 (10 am)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#e67e22] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">View Result &amp; Scorecard</p>
                  <p className="text-gray-400 text-sm">Check your result after announcement</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-600">
              <p className="text-[#e67e22] text-sm italic">
                Application process started on 05 Jan 2026, 12:00 pm.
              </p>
              <p className="text-gray-400 text-sm mt-1">
                Last date to apply: 06 April 2026 (11:30 pm)
              </p>
            </div>

            <div className="mt-6 bg-[#3d4a4c] rounded-lg p-4">
              <p className="text-sm font-semibold mb-2">Need Help?</p>
              <p className="text-gray-400 text-sm">
                For issues on Registration / Application / Payment-failure, please click
                &apos;Helpdesk&apos; after Login.
              </p>
            </div>
          </div>

          {/* Right - Form */}
          <div>
            {/* Tabs */}
            <div className="flex mb-6 bg-white rounded-full p-1 shadow-md">
              <button
                onClick={() => setActiveTab("login")}
                className={`flex-1 py-3 rounded-full font-semibold text-sm transition-colors ${activeTab === "login"
                  ? "bg-[#e67e22] text-white"
                  : "text-gray-500 hover:text-gray-700"
                  }`}
              >
                LOGIN
              </button>
              <button
                onClick={() => setActiveTab("register")}
                className={`flex-1 py-3 rounded-full font-semibold text-sm transition-colors ${activeTab === "register"
                  ? "bg-[#e67e22] text-white"
                  : "text-gray-500 hover:text-gray-700"
                  }`}
              >
                NEW REGISTRATION
              </button>
            </div>

            {/* Form Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-[#2d3436] mb-1">
                {activeTab === "login" ? "Welcome Back" : "Create Account"}
              </h3>
              <p className="text-gray-500 text-sm mb-6">
                {activeTab === "login"
                  ? "Login to your NEST 2026 application portal"
                  : "Register for NEST 2026 examination"}
              </p>

              {/* Error Message */}
              {errorMessage && activeTab === "login" && (
                <div className="mb-4 bg-red-50 border border-red-200 rounded-lg p-3 flex items-start gap-2">
                  <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm text-red-800">{errorMessage}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {activeTab === "register" && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e67e22] focus:border-transparent outline-none text-gray-800"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your mobile number"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e67e22] focus:border-transparent outline-none text-gray-800"
                        required
                      />
                    </div>
                  </>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {activeTab === "login" ? "Registration No" : "Email Address"}
                  </label>
                  <input
                    type={activeTab === "login" ? "text" : "email"}
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={activeTab === "login" ? "Enter your registration number" : "Enter your email address"}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e67e22] focus:border-transparent outline-none text-gray-800"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e67e22] focus:border-transparent outline-none text-gray-800 pr-12"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L6.59 6.59m7.532 7.532l3.29 3.29M3 3l18 18" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                {activeTab === "register" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Re-enter your password"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e67e22] focus:border-transparent outline-none text-gray-800"
                      required
                    />
                  </div>
                )}

                {activeTab === "login" && (
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2 text-gray-600">
                      <input type="checkbox" className="accent-[#e67e22]" />
                      Remember me
                    </label>
                    <a href="#" className="text-[#e67e22] hover:underline font-medium">
                      Forgot Password?
                    </a>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-[#e67e22] text-white py-3 rounded-lg font-semibold hover:bg-[#d35400] transition-colors text-lg"
                >
                  {activeTab === "login" ? "LOGIN" : "REGISTER"}
                </button>
              </form>

              <div className="mt-6 text-center text-sm text-gray-500">
                {activeTab === "login" ? (
                  <p>
                    Don&apos;t have an account?{" "}
                    <button
                      onClick={() => setActiveTab("register")}
                      className="text-[#e67e22] font-semibold hover:underline"
                    >
                      Register here
                    </button>
                  </p>
                ) : (
                  <p>
                    Already have an account?{" "}
                    <button
                      onClick={() => setActiveTab("login")}
                      className="text-[#e67e22] font-semibold hover:underline"
                    >
                      Login here
                    </button>
                  </p>
                )}
              </div>

              {activeTab === "register" && (
                <div className="mt-4 bg-amber-50 border border-amber-200 rounded-lg p-3">
                  <p className="text-xs text-amber-700">
                    <strong>Note:</strong> Please use a valid email address and mobile number.
                    All communication regarding your application will be sent to the
                    registered email and mobile number.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#e67e22] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <LoginForm />
    </Suspense>
  );
}
