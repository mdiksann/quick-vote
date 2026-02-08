import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="VoteHub - Powerful Online Voting" />
            <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
                {/* Animated Background Overlay */}
                <div className="absolute inset-0">
                    {/* Gradient Orbs */}
                    <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
                    <div className="absolute bottom-0 left-20 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
                    
                    {/* Voting Icon Pattern Overlay */}
                    <div className="absolute inset-0 opacity-5">
                        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="voting-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                                    <circle cx="25" cy="25" r="2" fill="white" />
                                    <circle cx="75" cy="75" r="2" fill="white" />
                                    <path d="M 40 40 L 45 50 L 55 35" stroke="white" strokeWidth="1" fill="none" />
                                </pattern>
                            </defs>
                            <rect x="0" y="0" width="100%" height="100%" fill="url(#voting-pattern)" />
                        </svg>
                    </div>
                </div>

                {/* Content Container */}
                <div className="relative z-10">
                    {/* Header/Navigation */}
                    <header className="container mx-auto px-6 py-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                {/* Logo Icon - Voting Box */}
                                <div className="bg-white p-3 rounded-xl shadow-lg">
                                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                    </svg>
                                </div>
                                <h1 className="text-2xl font-bold text-white drop-shadow-lg">VoteHub</h1>
                            </div>
                            
                            <nav className="flex items-center space-x-4">
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="px-6 py-2.5 bg-white text-purple-600 rounded-full font-semibold hover:bg-yellow-300 hover:text-purple-700 transition duration-300 shadow-lg"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="px-6 py-2.5 text-white hover:text-yellow-300 transition duration-300 font-semibold drop-shadow-md"
                                        >
                                            Login
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="px-6 py-2.5 bg-white text-purple-600 rounded-full font-bold hover:bg-yellow-300 hover:text-purple-700 transition duration-300 shadow-lg hover:shadow-xl"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </div>
                    </header>

                    {/* Hero Section */}
                    <main className="container mx-auto px-6 py-20">
                        <div className="max-w-4xl mx-auto text-center">
                            {/* Tagline */}
                            <p className="text-yellow-300 text-sm md:text-base font-bold tracking-wider uppercase mb-6 drop-shadow-lg">
                                Smart Polling with Perfect Choice
                            </p>
                            
                            {/* Main Heading */}
                            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight drop-shadow-2xl">
                                POWERFUL ONLINE
                                <br />
                                <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-yellow-200 bg-clip-text text-transparent">
                                    VOTING PLATFORM
                                </span>
                            </h2>
                            
                            {/* Description */}
                            <p className="text-white text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-lg font-medium">
                                From make voting poll to easy info merged after each results won!
                                <br />
                                Modern way to poll your decision.
                            </p>
                            
                            {/* CTA Button */}
                            <div className="flex justify-center">
                                <Link
                                    href={auth.user ? route('dashboard') : route('register')}
                                    className="group relative inline-flex items-center px-10 py-5 bg-gradient-to-r from-yellow-300 to-yellow-400 text-purple-900 rounded-full font-black text-xl hover:from-yellow-400 hover:to-yellow-300 transition-all duration-300 shadow-2xl hover:shadow-yellow-300/50 hover:scale-105"
                                >
                                    <span>Get Started</span>
                                    <svg className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        {/* Features Grid */}
                        <div className="mt-24 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {/* Feature 1 */}
                            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-yellow-300/50 transition-all duration-300 hover:scale-105">
                                <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Fast & Easy</h3>
                                <p className="text-gray-700 leading-relaxed font-medium">
                                    Create polls in seconds and start collecting votes immediately with our intuitive interface.
                                </p>
                            </div>

                            {/* Feature 2 */}
                            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-yellow-300/50 transition-all duration-300 hover:scale-105">
                                <div className="bg-gradient-to-br from-indigo-500 to-purple-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Secure Voting</h3>
                                <p className="text-gray-700 leading-relaxed font-medium">
                                    Your polls are protected with enterprise-level security to ensure fair and authentic results.
                                </p>
                            </div>

                            {/* Feature 3 */}
                            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-yellow-300/50 transition-all duration-300 hover:scale-105">
                                <div className="bg-gradient-to-br from-pink-500 to-yellow-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Real-time Results</h3>
                                <p className="text-gray-700 leading-relaxed font-medium">
                                    Watch votes come in live with beautiful charts and detailed analytics dashboard.
                                </p>
                            </div>
                        </div>

                        {/* Stats Section */}
                        <div className="mt-24 grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                            <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 border-2 border-white/30">
                                <div className="text-5xl font-black text-yellow-300 mb-2 drop-shadow-lg">10K+</div>
                                <div className="text-white font-bold drop-shadow-md">Active Polls</div>
                            </div>
                            <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 border-2 border-white/30">
                                <div className="text-5xl font-black text-yellow-300 mb-2 drop-shadow-lg">50K+</div>
                                <div className="text-white font-bold drop-shadow-md">Total Votes</div>
                            </div>
                            <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 border-2 border-white/30">
                                <div className="text-5xl font-black text-yellow-300 mb-2 drop-shadow-lg">5K+</div>
                                <div className="text-white font-bold drop-shadow-md">Happy Users</div>
                            </div>
                            <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 border-2 border-white/30">
                                <div className="text-5xl font-black text-yellow-300 mb-2 drop-shadow-lg">99.9%</div>
                                <div className="text-white font-bold drop-shadow-md">Uptime</div>
                            </div>
                        </div>
                    </main>

                    {/* Footer */}
                    <footer className="container mx-auto px-6 py-12 mt-20">
                        <div className="border-t border-white/30 pt-8">
                            <div className="flex flex-col md:flex-row justify-between items-center">
                                <div className="text-white font-semibold mb-4 md:mb-0 drop-shadow-md">
                                    © 2026 VoteHub. All rights reserved.
                                </div>
                                <div className="flex space-x-6">
                                    <a href="#" className="text-white hover:text-yellow-300 transition font-semibold drop-shadow-md">Privacy Policy</a>
                                    <a href="#" className="text-white hover:text-yellow-300 transition font-semibold drop-shadow-md">Terms of Service</a>
                                    <a href="#" className="text-white hover:text-yellow-300 transition font-semibold drop-shadow-md">Contact</a>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
}
