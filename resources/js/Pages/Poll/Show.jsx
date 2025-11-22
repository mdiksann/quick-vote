// resources/js/Pages/Poll/Show.jsx
import React from "react";
import { Head, useForm, Link } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import VotingResultBar from "@/Components/VotingResultBar";

const PollShow = ({
    poll,
    options,
    totalVotes,
    hasVoted,
    canVote,
    isLoggedIn,
    errors,
}) => {
    const { data, setData, post, processing } = useForm({
        option_id: "",
    });

    const submitVote = (e) => {
        e.preventDefault();
        post(route("polls.vote", poll.id));
    };

    return (
        <GuestLayout fullWidth={true}>
            <Head title={poll.title} />
            <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-8 md:py-12">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Back Button */}
                    <Link
                        href={route("polls.index")}
                        className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium mb-6 transition-all duration-200 group"
                    >
                        <svg
                            className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                        Kembali ke Daftar Poll
                    </Link>

                    {/* Header Poll - Modern Card with Gradient */}
                    <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 p-8 md:p-10 shadow-2xl rounded-2xl mb-8 overflow-hidden">
                        {/* Decorative circles */}
                        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-40 h-40 bg-white opacity-10 rounded-full"></div>
                        <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-32 h-32 bg-white opacity-10 rounded-full"></div>

                        <div className="relative z-10">
                            <div className="flex items-start justify-between mb-4">
                                <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight max-w-2xl">
                                    {poll.title}
                                </h1>
                                <span
                                    className={`px-4 py-2 rounded-full text-sm font-semibold ${
                                        poll.status === "active"
                                            ? "bg-green-400 text-green-900"
                                            : "bg-red-400 text-red-900"
                                    }`}
                                >
                                    {poll.status === "active"
                                        ? "🟢 AKTIF"
                                        : "🔴 SELESAI"}
                                </span>
                            </div>
                            <p className="text-indigo-100 text-lg mb-6 max-w-3xl">
                                {poll.description}
                            </p>
                            <div className="flex items-center space-x-6 text-white">
                                <div className="flex items-center space-x-2">
                                    <svg
                                        className="w-6 h-6"
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
                                    <span className="text-2xl font-bold">
                                        {totalVotes}
                                    </span>
                                    <span className="text-indigo-200">
                                        Total Suara
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Area Voting / Pesan */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                                <div className="flex items-center space-x-3 mb-6">
                                    <div className="p-2 bg-indigo-100 rounded-lg">
                                        <svg
                                            className="w-6 h-6 text-indigo-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                            />
                                        </svg>
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-900">
                                        Hasil Real-Time
                                    </h2>
                                </div>

                                {/* Menampilkan Hasil Voting (Semua Orang Melihat Ini) */}
                                <div className="space-y-4">
                                    {options.map((option, index) => (
                                        <div
                                            key={option.id}
                                            className="transform transition-all duration-300 hover:scale-[1.02]"
                                        >
                                            <VotingResultBar
                                                optionText={option.option_text}
                                                voteCount={option.vote_count}
                                                percentage={option.percentage}
                                            />
                                        </div>
                                    ))}
                                </div>

                                {totalVotes === 0 && (
                                    <div className="text-center py-12 text-gray-400">
                                        <svg
                                            className="w-16 h-16 mx-auto mb-4 opacity-50"
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
                                        <p className="text-lg font-medium">
                                            Belum ada yang memberikan suara
                                        </p>
                                        <p className="text-sm">
                                            Jadilah yang pertama!
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Sidebar Aksi */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
                                {canVote && (
                                    // 3A. User Boleh Vote
                                    <>
                                        <div className="flex items-center space-x-2 mb-6">
                                            <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg">
                                                <svg
                                                    className="w-5 h-5 text-white"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900">
                                                Pilih Opsi Anda
                                            </h3>
                                        </div>

                                        <form onSubmit={submitVote}>
                                            <div className="space-y-3 mb-6">
                                                {options.map((option) => (
                                                    <label
                                                        key={option.id}
                                                        className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                                                            data.option_id ===
                                                            option.id.toString()
                                                                ? "border-indigo-600 bg-indigo-50 shadow-md scale-105"
                                                                : "border-gray-200 hover:border-indigo-300 hover:bg-gray-50"
                                                        }`}
                                                    >
                                                        <input
                                                            type="radio"
                                                            name="option_id"
                                                            value={option.id}
                                                            checked={
                                                                data.option_id ===
                                                                option.id.toString()
                                                            }
                                                            onChange={(e) =>
                                                                setData(
                                                                    "option_id",
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            className="form-radio h-5 w-5 text-indigo-600 focus:ring-indigo-500"
                                                        />
                                                        <span className="ml-3 text-gray-800 font-medium">
                                                            {option.option_text}
                                                        </span>
                                                    </label>
                                                ))}
                                            </div>

                                            {errors.option_id && (
                                                <div className="mb-3 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm flex items-center">
                                                    <svg
                                                        className="w-5 h-5 mr-2"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                    {errors.option_id}
                                                </div>
                                            )}

                                            <button
                                                type="submit"
                                                disabled={
                                                    processing ||
                                                    !data.option_id
                                                }
                                                className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
                                            >
                                                {processing ? (
                                                    <>
                                                        <svg
                                                            className="animate-spin h-5 w-5 text-white"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <circle
                                                                className="opacity-25"
                                                                cx="12"
                                                                cy="12"
                                                                r="10"
                                                                stroke="currentColor"
                                                                strokeWidth="4"
                                                            ></circle>
                                                            <path
                                                                className="opacity-75"
                                                                fill="currentColor"
                                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                            ></path>
                                                        </svg>
                                                        <span>
                                                            Memproses...
                                                        </span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <svg
                                                            className="w-5 h-5"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M5 13l4 4L19 7"
                                                            />
                                                        </svg>
                                                        <span>
                                                            Vote Sekarang
                                                        </span>
                                                    </>
                                                )}
                                            </button>

                                            {errors.poll && (
                                                <div className="mt-4 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg text-red-700 text-sm">
                                                    {errors.poll}
                                                </div>
                                            )}
                                        </form>
                                    </>
                                )}

                                {/* Status Vote Lainnya */}
                                {!canVote && (
                                    <div className="text-center">
                                        {hasVoted && (
                                            // 3B. User Sudah Vote
                                            <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200">
                                                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                                    <svg
                                                        className="w-8 h-8 text-white"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M5 13l4 4L19 7"
                                                        />
                                                    </svg>
                                                </div>
                                                <p className="text-green-700 font-bold text-lg">
                                                    Terima Kasih!
                                                </p>
                                                <p className="text-green-600 text-sm mt-2">
                                                    Suara Anda telah tercatat
                                                </p>
                                            </div>
                                        )}
                                        {!isLoggedIn && (
                                            // 3C. Anonim Belum Bisa Vote
                                            <div className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border-2 border-indigo-200">
                                                <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                                    <svg
                                                        className="w-8 h-8 text-white"
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
                                                </div>
                                                <p className="text-indigo-900 font-bold text-lg mb-2">
                                                    Login untuk Vote
                                                </p>
                                                <p className="text-indigo-600 text-sm mb-4">
                                                    Bergabunglah untuk
                                                    memberikan suara Anda
                                                </p>
                                                <Link
                                                    href={route("login")}
                                                    className="inline-block w-full py-3 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                                                >
                                                    Login / Daftar
                                                </Link>
                                            </div>
                                        )}
                                        {poll.status !== "active" &&
                                            !hasVoted &&
                                            isLoggedIn && (
                                                // 3D. Poll Sudah Selesai/Draft
                                                <div className="p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl border-2 border-orange-200">
                                                    <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                                        <svg
                                                            className="w-8 h-8 text-white"
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
                                                    </div>
                                                    <p className="text-orange-700 font-bold text-lg">
                                                        Poll Berakhir
                                                    </p>
                                                    <p className="text-orange-600 text-sm mt-2">
                                                        Voting sudah ditutup
                                                    </p>
                                                </div>
                                            )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
};

export default PollShow;
