"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function DashboardPage() {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userData, setUserData] = useState({
        registrationNo: "",
        name: "Student Name",
    });

    useEffect(() => {
        // Check authentication status
        const authStatus = localStorage.getItem("isAuthenticated");
        const regNo = localStorage.getItem("registrationNo");

        if (authStatus === "true" && regNo) {
            setIsAuthenticated(true);
            setUserData({
                registrationNo: regNo,
                name: "Student Name", // You can customize this
            });
        } else {
            // Redirect to login if not authenticated
            router.push("/login");
        }
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("registrationNo");
        router.push("/login");
    };

    const handleDownloadAdmitCard = () => {
        // Open the PDF in a new tab
        window.open("/NEST(UG) Exam 2026.pdf", "_blank");
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#e67e22] mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading...</p>
                </div>
            </div>
        );
    }

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
                    <button
                        onClick={handleLogout}
                        className="bg-[#e67e22] hover:bg-[#d35400] px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                    >
                        Logout
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto py-8 px-4">
                {/* Welcome Banner */}
                <div className="bg-gradient-to-r from-[#2d3436] to-[#3d4a4c] text-white rounded-2xl p-8 mb-6">
                    <h1 className="text-3xl font-bold mb-2">
                        Welcome to NEST 2026 Portal
                    </h1>
                    <p className="text-gray-300">
                        Registration No: <span className="font-semibold text-[#e67e22]">{userData.registrationNo}</span>
                    </p>
                </div>

                {/* Dashboard Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Application Status Card */}
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-800">Application Status</h3>
                        </div>
                        <p className="text-gray-600 mb-3">Download your application form</p>
                        <button
                            onClick={handleDownloadAdmitCard}
                            className="w-full bg-[#e67e22] hover:bg-[#d35400] text-white py-2 rounded-lg font-semibold transition-colors"
                        >
                            Download Application
                        </button>
                    </div>

                    {/* Admit Card */}
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-800">Admit Card</h3>
                        </div>
                        <p className="text-gray-600 mb-3">Available from 15 July 2026</p>
                        <button className="w-full bg-gray-300 text-gray-600 py-2 rounded-lg font-semibold cursor-not-allowed">
                            Not Available Yet
                        </button>
                    </div>

                    {/* Results */}
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-800">Results</h3>
                        </div>
                        <p className="text-gray-600 mb-3">Results will be announced soon</p>
                        <button className="w-full bg-gray-300 text-gray-600 py-2 rounded-lg font-semibold cursor-not-allowed">
                            Not Available Yet
                        </button>
                    </div>

                    {/* Profile */}
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-800">My Profile</h3>
                        </div>
                        <p className="text-gray-600 mb-3">View and edit your profile</p>
                        <button className="w-full bg-[#e67e22] hover:bg-[#d35400] text-white py-2 rounded-lg font-semibold transition-colors">
                            View Profile
                        </button>
                    </div>

                    {/* Payment History */}
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
                                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-800">Payment History</h3>
                        </div>
                        <p className="text-gray-600 mb-3">View your payment records</p>
                        <button className="w-full bg-[#e67e22] hover:bg-[#d35400] text-white py-2 rounded-lg font-semibold transition-colors">
                            View Payments
                        </button>
                    </div>

                    {/* Help & Support */}
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-800">Help & Support</h3>
                        </div>
                        <p className="text-gray-600 mb-3">Get help with your application</p>
                        <button className="w-full bg-[#e67e22] hover:bg-[#d35400] text-white py-2 rounded-lg font-semibold transition-colors">
                            Contact Support
                        </button>
                    </div>
                </div>

                {/* Important Notice */}
                <div className="mt-6 bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6">
                    <div className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <div>
                            <h4 className="font-bold text-amber-900 mb-1">Important Notice</h4>
                            <p className="text-amber-800 text-sm">
                                Please complete your application form before the last date: <strong>06 April 2026 (11:30 pm)</strong>.
                                Make sure all documents are uploaded and application fee is paid.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
