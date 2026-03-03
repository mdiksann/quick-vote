import React from "react";
import { Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import GuestLayout from "@/Layouts/GuestLayout";
import { Link } from "@inertiajs/react";
import { format } from "date-fns";
import { id } from "date-fns/locale";

const PollIndex = ({ auth, polls }) => {
    const Layout = auth.user ? AuthenticatedLayout : GuestLayout;

    return (
        <Layout user={auth.user} fullWidth={true}>
            <Head title="VoteHub - Platform Voting Modern" />

            {/* Hero Section - Only for guests */}
            {!auth.user && (
                <div className="relative bg-white overflow-hidden">
                    {/* Decorative blob */}
                    <div className="absolute -top-20 -right-20 w-[500px] h-[500px] opacity-15 pointer-events-none">
                        <svg viewBox="0 0 500 500" fill="none"><path d="M400 50C460 80 500 150 480 230C460 310 400 350 340 390C280 430 200 460 140 430C80 400 40 330 30 260C20 190 50 120 100 80C150 40 220 20 290 20C360 20 340 20 400 50Z" fill="#818CF8"/></svg>
                    </div>

                    {/* Navigation Bar */}
                    <nav className="relative z-10 px-4 sm:px-6 lg:px-12 py-5">
                        <div className="max-w-7xl mx-auto flex items-center justify-between">
                            <Link href="/" className="flex items-center space-x-2.5">
                                <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                    </svg>
                                </div>
                                <span className="text-xl font-bold text-gray-800">VoteHub</span>
                            </Link>

                            <div className="flex items-center space-x-3">
                                <Link href={route("login")} className="px-5 py-2 text-gray-600 font-medium text-sm hover:text-indigo-600 transition">
                                    Login
                                </Link>
                                <Link href={route("register")} className="px-5 py-2.5 bg-indigo-600 text-white font-semibold text-sm rounded-full hover:bg-indigo-700 transition shadow-md">
                                    Register
                                </Link>
                            </div>
                        </div>
                    </nav>

                    {/* Hero Content */}
                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 md:py-24">
                        <div className="text-center max-w-3xl mx-auto">
                            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                                Platform Voting
                                <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                    Modern & Interaktif
                                </span>
                            </h1>
                            <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto leading-relaxed">
                                Buat polling dengan mudah, kumpulkan opini, dan
                                lihat hasil real-time. Suara Anda penting untuk
                                membuat keputusan bersama.
                            </p>

                            {/* Feature Badges */}
                            <div className="flex flex-wrap justify-center gap-3 mb-10">
                                <div className="flex items-center space-x-2 bg-indigo-50 border border-indigo-100 px-4 py-2 rounded-full text-indigo-700">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="font-medium text-sm">Hasil Real-Time</span>
                                </div>
                                <div className="flex items-center space-x-2 bg-purple-50 border border-purple-100 px-4 py-2 rounded-full text-purple-700">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="font-medium text-sm">Mudah Digunakan</span>
                                </div>
                                <div className="flex items-center space-x-2 bg-amber-50 border border-amber-100 px-4 py-2 rounded-full text-amber-700">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="font-medium text-sm">Gratis Selamanya</span>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <a
                                    href="#polls"
                                    className="inline-flex items-center justify-center px-7 py-3.5 bg-gradient-to-r from-amber-400 to-yellow-400 text-gray-900 font-bold text-sm rounded-full hover:from-amber-500 hover:to-yellow-500 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
                                >
                                    <span>Lihat Poll Aktif</span>
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </a>
                                <Link
                                    href={route("register")}
                                    className="inline-flex items-center justify-center px-7 py-3.5 border-2 border-indigo-200 text-indigo-600 font-semibold text-sm rounded-full hover:bg-indigo-50 transition-all duration-200"
                                >
                                    Mulai Sekarang
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="flex justify-center pb-8 animate-bounce">
                        <a href="#polls" className="text-indigo-300 hover:text-indigo-500 transition">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </a>
                    </div>
                </div>
            )}

            {/* Polls Section */}
            <div
                id="polls"
                className={`min-h-screen bg-gray-50 ${
                    auth.user ? "py-8 md:py-12" : "py-16 md:py-20"
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    {/* Header Section */}
                    <div
                        className={`text-center ${
                            auth.user ? "mb-8" : "mb-12"
                        }`}
                    >
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                                Poll Aktif
                            </span>
                        </h2>
                        <p className="text-gray-500 text-sm max-w-xl mx-auto">
                            Berikan suara Anda pada topik yang paling menarik
                        </p>
                    </div>

                    {polls.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {polls.map((poll) => (
                                <div
                                    key={poll.id}
                                    className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1"
                                >
                                    {/* Card Header accent */}
                                    <div className="h-1.5 bg-gradient-to-r from-indigo-500 to-purple-600"></div>

                                    <div className="p-6">
                                        {/* Title */}
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                                            {poll.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                            {poll.description}
                                        </p>

                                        {/* Meta Information */}
                                        <div className="space-y-2 mb-6">
                                            <div className="flex items-center text-sm text-gray-500">
                                                <svg
                                                    className="w-4 h-4 mr-2 text-indigo-500"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                                    />
                                                </svg>
                                                <span className="font-medium text-gray-700">
                                                    {poll.creator.name}
                                                </span>
                                            </div>

                                            <div className="flex items-center text-sm text-gray-500">
                                                <svg
                                                    className="w-4 h-4 mr-2 text-indigo-500"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                                    />
                                                </svg>
                                                <span className="font-bold text-indigo-600">
                                                    {poll.total_votes}
                                                </span>
                                                <span className="ml-1">
                                                    suara
                                                </span>
                                            </div>

                                            {poll.ends_at && (
                                                <div className="flex items-center text-sm text-gray-500">
                                                    <svg
                                                        className="w-4 h-4 mr-2 text-indigo-500"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                        />
                                                    </svg>
                                                    <span>
                                                        {format(
                                                            new Date(
                                                                poll.ends_at
                                                            ),
                                                            "d MMM yyyy, HH:mm",
                                                            { locale: id }
                                                        )}
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                        {/* CTA Button */}
                                        <Link
                                            href={`/polls/${poll.id}`}
                                            className="block w-full text-center py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-sm hover:shadow-md text-sm"
                                        >
                                            <span className="flex items-center justify-center">
                                                <svg
                                                    className="w-5 h-5 mr-2"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                    />
                                                </svg>
                                                Lihat & Vote
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <div className="inline-block p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
                                <svg
                                    className="w-20 h-20 mx-auto mb-6 text-gray-200"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                                    />
                                </svg>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                    Belum Ada Poll Aktif
                                </h3>
                                <p className="text-gray-500 text-lg">
                                    Nantikan poll menarik yang akan datang!
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default PollIndex;
