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
            <Head title="Poll Aktif" />

            <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-8 md:py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header Section */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                                Poll Aktif
                            </span>
                        </h1>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Berikan suara Anda pada topik yang paling menarik
                        </p>
                    </div>

                    {polls.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {polls.map((poll) => (
                                <div
                                    key={poll.id}
                                    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-indigo-200 transform hover:-translate-y-1"
                                >
                                    {/* Card Header with Gradient */}
                                    <div className="h-2 bg-gradient-to-r from-indigo-500 to-purple-600"></div>

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
                                            className="block w-full text-center py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
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
                            <div className="inline-block p-8 bg-white rounded-2xl shadow-lg">
                                <svg
                                    className="w-24 h-24 mx-auto mb-6 text-gray-300"
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
