import { Link } from "@inertiajs/react";

export default function GuestLayout({ children, fullWidth = false }) {
    if (fullWidth) {
        return <>{children}</>;
    }
    return (
        <div className="flex min-h-screen flex-col items-center bg-gray-50 pt-6 sm:justify-center sm:pt-0">
            <div>
                <Link href="/" className="flex items-center space-x-2.5">
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                        </svg>
                    </div>
                    <span className="text-xl font-bold text-gray-800">VoteHub</span>
                </Link>
            </div>

            <div className="mt-6 w-full overflow-hidden bg-white px-6 py-6 shadow-sm border border-gray-100 sm:max-w-md sm:rounded-2xl">
                {children}
            </div>
        </div>
    );
}
