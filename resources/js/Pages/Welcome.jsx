import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';

function VotingIllustration() {
    return (
        <svg viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            {/* Background decorative blob */}
            <path d="M480 80C520 40 580 60 590 120C600 180 560 220 540 260C520 300 540 340 500 380C460 420 400 440 340 420C280 400 260 360 240 320C220 280 180 260 200 200C220 140 260 120 300 100C340 80 440 120 480 80Z" fill="#EBF0FF" />

            {/* Monitor/Screen */}
            <rect x="200" y="80" width="280" height="200" rx="12" fill="#FFFFFF" stroke="#4F46E5" strokeWidth="3"/>
            <rect x="200" y="80" width="280" height="36" rx="12" fill="#4F46E5"/>
            {/* Window dots */}
            <circle cx="220" cy="98" r="5" fill="#FCD34D"/>
            <circle cx="238" cy="98" r="5" fill="#34D399"/>
            <circle cx="256" cy="98" r="5" fill="#F87171"/>
            
            {/* Poll bars inside screen */}
            <rect x="225" y="135" width="140" height="14" rx="7" fill="#818CF8" opacity="0.8"/>
            <rect x="225" y="160" width="200" height="14" rx="7" fill="#6366F1"/>
            <rect x="225" y="185" width="110" height="14" rx="7" fill="#818CF8" opacity="0.8"/>
            <rect x="225" y="210" width="170" height="14" rx="7" fill="#A5B4FC" opacity="0.7"/>
            
            {/* Checkmark on screen */}
            <circle cx="440" cy="165" r="24" fill="#FCD34D" opacity="0.9"/>
            <path d="M430 165L437 172L452 157" stroke="#4F46E5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            
            {/* Monitor stand */}
            <rect x="310" y="280" width="60" height="16" rx="4" fill="#C7D2FE"/>
            <rect x="290" y="296" width="100" height="10" rx="5" fill="#A5B4FC"/>

            {/* Person 1 - Left (voting) */}
            {/* Head */}
            <circle cx="160" cy="260" r="26" fill="#FCD34D"/>
            {/* Body */}
            <path d="M140 290C140 290 135 340 138 370" stroke="#4F46E5" strokeWidth="8" strokeLinecap="round"/>
            <path d="M180 290C180 290 185 340 182 370" stroke="#4F46E5" strokeWidth="8" strokeLinecap="round"/>
            <ellipse cx="160" cy="320" rx="28" ry="35" fill="#6366F1"/>
            {/* Arm reaching to screen */}
            <path d="M185 310C200 295 215 285 225 280" stroke="#FCD34D" strokeWidth="7" strokeLinecap="round"/>
            {/* Legs */}
            <path d="M148 355L135 400" stroke="#1E1B4B" strokeWidth="7" strokeLinecap="round"/>
            <path d="M172 355L185 400" stroke="#1E1B4B" strokeWidth="7" strokeLinecap="round"/>
            {/* Shoes */}
            <ellipse cx="130" cy="403" rx="14" ry="6" fill="#4F46E5"/>
            <ellipse cx="190" cy="403" rx="14" ry="6" fill="#4F46E5"/>

            {/* Person 2 - Center (presenting) */}
            {/* Head */}
            <circle cx="340" cy="300" r="24" fill="#FBBF24"/>
            {/* Body */}
            <ellipse cx="340" cy="365" rx="26" ry="32" fill="#F97316"/>
            {/* Arms */}
            <path d="M315 350C295 335 285 310 290 290" stroke="#FBBF24" strokeWidth="7" strokeLinecap="round"/>
            <path d="M365 350C385 335 395 310 390 290" stroke="#FBBF24" strokeWidth="7" strokeLinecap="round"/>
            {/* Legs */}
            <path d="M328 395L318 440" stroke="#1E1B4B" strokeWidth="7" strokeLinecap="round"/>
            <path d="M352 395L362 440" stroke="#1E1B4B" strokeWidth="7" strokeLinecap="round"/>
            {/* Shoes */}
            <ellipse cx="314" cy="443" rx="14" ry="6" fill="#F97316"/>
            <ellipse cx="366" cy="443" rx="14" ry="6" fill="#F97316"/>

            {/* Person 3 - Right (analyzing) */}
            {/* Head */}
            <circle cx="490" cy="280" r="22" fill="#FCD34D"/>
            {/* Body */}
            <ellipse cx="490" cy="340" rx="24" ry="30" fill="#EC4899"/>
            {/* Arms */}
            <path d="M468 325C450 315 440 300 445 285" stroke="#FCD34D" strokeWidth="6" strokeLinecap="round"/>
            <path d="M512 325C525 310 530 295 525 280" stroke="#FCD34D" strokeWidth="6" strokeLinecap="round"/>
            {/* Legs */}
            <path d="M478 368L470 410" stroke="#1E1B4B" strokeWidth="6" strokeLinecap="round"/>
            <path d="M502 368L510 410" stroke="#1E1B4B" strokeWidth="6" strokeLinecap="round"/>
            {/* Shoes */}
            <ellipse cx="466" cy="413" rx="12" ry="5" fill="#EC4899"/>
            <ellipse cx="514" cy="413" rx="12" ry="5" fill="#EC4899"/>

            {/* Lightbulb (idea) */}
            <circle cx="520" cy="100" r="30" fill="#FCD34D" opacity="0.3"/>
            <circle cx="520" cy="100" r="20" fill="#FCD34D"/>
            <rect x="514" y="122" width="12" height="8" rx="2" fill="#FBBF24"/>
            <path d="M510 95C510 85 520 78 530 85" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round"/>

            {/* Gear 1 */}
            <g transform="translate(130, 380)">
                <circle cx="0" cy="0" r="22" fill="#FCD34D" opacity="0.8"/>
                <circle cx="0" cy="0" r="10" fill="#FFFFFF"/>
                <rect x="-3" y="-26" width="6" height="10" rx="3" fill="#FCD34D" opacity="0.8"/>
                <rect x="-3" y="16" width="6" height="10" rx="3" fill="#FCD34D" opacity="0.8"/>
                <rect x="-26" y="-3" width="10" height="6" rx="3" fill="#FCD34D" opacity="0.8"/>
                <rect x="16" y="-3" width="10" height="6" rx="3" fill="#FCD34D" opacity="0.8"/>
            </g>

            {/* Gear 2 */}
            <g transform="translate(168, 415)">
                <circle cx="0" cy="0" r="16" fill="#A5B4FC" opacity="0.8"/>
                <circle cx="0" cy="0" r="7" fill="#FFFFFF"/>
                <rect x="-2.5" y="-20" width="5" height="8" rx="2.5" fill="#A5B4FC" opacity="0.8"/>
                <rect x="-2.5" y="12" width="5" height="8" rx="2.5" fill="#A5B4FC" opacity="0.8"/>
                <rect x="-20" y="-2.5" width="8" height="5" rx="2.5" fill="#A5B4FC" opacity="0.8"/>
                <rect x="12" y="-2.5" width="8" height="5" rx="2.5" fill="#A5B4FC" opacity="0.8"/>
            </g>

            {/* Small decorative plants */}
            <line x1="80" y1="420" x2="80" y2="380" stroke="#34D399" strokeWidth="3"/>
            <circle cx="80" cy="375" r="10" fill="#34D399" opacity="0.7"/>
            <circle cx="72" cy="383" r="7" fill="#6EE7B7" opacity="0.6"/>
            <circle cx="88" cy="383" r="7" fill="#6EE7B7" opacity="0.6"/>

            <line x1="540" y1="420" x2="540" y2="390" stroke="#34D399" strokeWidth="2.5"/>
            <circle cx="540" cy="385" r="8" fill="#34D399" opacity="0.7"/>
            <circle cx="533" cy="392" r="6" fill="#6EE7B7" opacity="0.5"/>
            <circle cx="547" cy="392" r="6" fill="#6EE7B7" opacity="0.5"/>
            
            {/* Ballot paper floating */}
            <g transform="translate(100, 140) rotate(-15)">
                <rect width="50" height="65" rx="4" fill="#FFFFFF" stroke="#C7D2FE" strokeWidth="2"/>
                <rect x="10" y="12" width="30" height="4" rx="2" fill="#A5B4FC"/>
                <rect x="10" y="22" width="25" height="4" rx="2" fill="#C7D2FE"/>
                <rect x="10" y="32" width="30" height="4" rx="2" fill="#A5B4FC"/>
                <circle cx="15" cy="48" r="5" stroke="#6366F1" strokeWidth="2" fill="none"/>
                <path d="M13 48L15 50L19 45" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
        </svg>
    );
}

export default function Welcome({ auth }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <Head title="VoteHub - Platform Voting Online" />
            <div className="min-h-screen bg-white relative overflow-hidden">
                {/* Decorative blob top-right */}
                <div className="absolute -top-20 -right-20 w-[500px] h-[500px] opacity-20 pointer-events-none">
                    <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M400 50C460 80 500 150 480 230C460 310 400 350 340 390C280 430 200 460 140 430C80 400 40 330 30 260C20 190 50 120 100 80C150 40 220 20 290 20C360 20 340 20 400 50Z" fill="#818CF8"/>
                    </svg>
                </div>
                <div className="absolute -top-10 -right-10 w-[400px] h-[400px] opacity-10 pointer-events-none">
                    <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M420 80C470 130 490 200 460 270C430 340 360 380 290 400C220 420 150 420 100 380C50 340 20 260 30 190C40 120 90 60 160 30C230 0 370 30 420 80Z" fill="#6366F1"/>
                    </svg>
                </div>

                {/* Header / Navigation */}
                <header className="relative z-20">
                    <div className="container mx-auto px-6 lg:px-12 py-5">
                        <div className="flex items-center justify-between">
                            {/* Logo */}
                            <div className="flex items-center space-x-3">
                                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-2.5 rounded-xl shadow-lg">
                                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                    </svg>
                                </div>
                                <span className="text-xl font-bold text-gray-800">VoteHub</span>
                            </div>

                            {/* Desktop Nav Links */}
                            <nav className="hidden md:flex items-center space-x-8">
                                <Link href={route('welcome')} className="text-indigo-600 font-semibold text-sm hover:text-indigo-800 transition">
                                    Home
                                </Link>
                                <Link href={route('polls.index')} className="text-gray-600 font-medium text-sm hover:text-indigo-600 transition">
                                    Polls
                                </Link>
                                <a href="#features" className="text-gray-600 font-medium text-sm hover:text-indigo-600 transition">
                                    Features
                                </a>
                                <a href="#stats" className="text-gray-600 font-medium text-sm hover:text-indigo-600 transition">
                                    About
                                </a>
                            </nav>

                            {/* Auth Buttons */}
                            <div className="hidden md:flex items-center space-x-3">
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="px-5 py-2.5 bg-indigo-600 text-white rounded-full font-semibold text-sm hover:bg-indigo-700 transition duration-300 shadow-md hover:shadow-lg"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="px-5 py-2 text-gray-700 font-medium text-sm hover:text-indigo-600 transition"
                                        >
                                            Login
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="px-5 py-2.5 bg-indigo-600 text-white rounded-full font-semibold text-sm hover:bg-indigo-700 transition duration-300 shadow-md"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </div>

                            {/* Mobile menu toggle */}
                            <button
                                className="md:hidden text-gray-600 hover:text-indigo-600 transition"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            >
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    {mobileMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>

                        {/* Mobile Menu */}
                        {mobileMenuOpen && (
                            <div className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4 space-y-3">
                                <Link href={route('welcome')} className="block text-indigo-600 font-semibold text-sm">Home</Link>
                                <Link href={route('polls.index')} className="block text-gray-600 font-medium text-sm">Polls</Link>
                                <a href="#features" className="block text-gray-600 font-medium text-sm">Features</a>
                                <a href="#stats" className="block text-gray-600 font-medium text-sm">About</a>
                                <div className="pt-3 border-t border-gray-100 space-y-2">
                                    {auth.user ? (
                                        <Link href={route('dashboard')} className="block px-4 py-2 bg-indigo-600 text-white rounded-lg text-center font-semibold text-sm">Dashboard</Link>
                                    ) : (
                                        <>
                                            <Link href={route('login')} className="block text-gray-700 font-medium text-sm">Login</Link>
                                            <Link href={route('register')} className="block px-4 py-2 bg-indigo-600 text-white rounded-lg text-center font-semibold text-sm">Register</Link>
                                        </>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </header>

                {/* Hero Section - Two Column */}
                <main className="relative z-10">
                    <section className="container mx-auto px-6 lg:px-12 pt-10 pb-20 md:pt-16 md:pb-28">
                        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
                            {/* Left Column - Text */}
                            <div className="flex-1 max-w-xl">
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                                    Platform
                                    <br />
                                    <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                        Voting Online
                                    </span>
                                </h2>
                                <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-8 max-w-md">
                                    Buat polling dengan mudah, kumpulkan suara secara real-time, dan dapatkan hasil voting yang akurat. VoteHub adalah cara modern untuk membuat keputusan bersama.
                                </p>
                                <div className="flex items-center gap-4">
                                    <Link
                                        href={auth.user ? route('dashboard') : route('register')}
                                        className="inline-flex items-center px-7 py-3.5 bg-gradient-to-r from-amber-400 to-yellow-400 text-gray-900 rounded-full font-bold text-sm hover:from-amber-500 hover:to-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                                    >
                                        Mulai Sekarang
                                    </Link>
                                    <Link
                                        href={route('polls.index')}
                                        className="inline-flex items-center px-6 py-3.5 border-2 border-indigo-200 text-indigo-600 rounded-full font-semibold text-sm hover:bg-indigo-50 transition-all duration-300"
                                    >
                                        Lihat Polls
                                        <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>

                            {/* Right Column - Illustration */}
                            <div className="flex-1 max-w-lg w-full">
                                <VotingIllustration />
                            </div>
                        </div>

                        {/* Scroll down indicator */}
                        <div className="flex justify-center mt-12 md:mt-16">
                            <a href="#features" className="animate-bounce text-indigo-300 hover:text-indigo-500 transition">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                            </a>
                        </div>
                    </section>

                    {/* Features Section */}
                    <section id="features" className="bg-gray-50 py-20">
                        <div className="container mx-auto px-6 lg:px-12">
                            <div className="text-center mb-14">
                                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Fitur Unggulan</h3>
                                <p className="text-gray-500 max-w-xl mx-auto">Semua yang Anda butuhkan untuk mengelola polling dan voting secara profesional</p>
                            </div>
                            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                                {/* Feature 1 */}
                                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                                    <div className="bg-gradient-to-br from-indigo-500 to-purple-500 w-14 h-14 rounded-xl flex items-center justify-center mb-5 shadow-md">
                                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-3">Cepat & Mudah</h4>
                                    <p className="text-gray-500 leading-relaxed text-sm">
                                        Buat polling dalam hitungan detik dan mulai kumpulkan suara langsung dengan antarmuka yang intuitif.
                                    </p>
                                </div>

                                {/* Feature 2 */}
                                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                                    <div className="bg-gradient-to-br from-emerald-500 to-teal-500 w-14 h-14 rounded-xl flex items-center justify-center mb-5 shadow-md">
                                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-3">Voting Aman</h4>
                                    <p className="text-gray-500 leading-relaxed text-sm">
                                        Polling Anda dilindungi untuk memastikan hasil yang adil dan autentik untuk setiap suara.
                                    </p>
                                </div>

                                {/* Feature 3 */}
                                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                                    <div className="bg-gradient-to-br from-amber-500 to-orange-500 w-14 h-14 rounded-xl flex items-center justify-center mb-5 shadow-md">
                                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-3">Hasil Real-time</h4>
                                    <p className="text-gray-500 leading-relaxed text-sm">
                                        Lihat suara masuk secara langsung dengan visualisasi data dan dashboard analitik yang detail.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Stats Section */}
                    <section id="stats" className="py-20">
                        <div className="container mx-auto px-6 lg:px-12">
                            <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
                                <div className="text-center p-6 rounded-2xl bg-indigo-50 border border-indigo-100">
                                    <div className="text-4xl font-extrabold text-indigo-600 mb-1">10K+</div>
                                    <div className="text-gray-500 font-medium text-sm">Polling Aktif</div>
                                </div>
                                <div className="text-center p-6 rounded-2xl bg-purple-50 border border-purple-100">
                                    <div className="text-4xl font-extrabold text-purple-600 mb-1">50K+</div>
                                    <div className="text-gray-500 font-medium text-sm">Total Suara</div>
                                </div>
                                <div className="text-center p-6 rounded-2xl bg-amber-50 border border-amber-100">
                                    <div className="text-4xl font-extrabold text-amber-600 mb-1">5K+</div>
                                    <div className="text-gray-500 font-medium text-sm">Pengguna</div>
                                </div>
                                <div className="text-center p-6 rounded-2xl bg-emerald-50 border border-emerald-100">
                                    <div className="text-4xl font-extrabold text-emerald-600 mb-1">99.9%</div>
                                    <div className="text-gray-500 font-medium text-sm">Uptime</div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                {/* Footer with colored bottom bar */}
                <footer className="border-t border-gray-100">
                    <div className="container mx-auto px-6 lg:px-12 py-8">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <div className="text-gray-500 text-sm font-medium">
                                © 2026 VoteHub. All rights reserved.
                            </div>
                            <div className="flex space-x-6">
                                <a href="#" className="text-gray-500 hover:text-indigo-600 transition text-sm font-medium">Privacy Policy</a>
                                <a href="#" className="text-gray-500 hover:text-indigo-600 transition text-sm font-medium">Terms of Service</a>
                                <a href="#" className="text-gray-500 hover:text-indigo-600 transition text-sm font-medium">Contact</a>
                            </div>
                        </div>
                    </div>
                    {/* Bottom accent bar like in the design */}
                    <div className="h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500"></div>
                </footer>
            </div>
        </>
    );
}
