import React from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'; 
import GuestLayout from '@/Layouts/GuestLayout';
import { Link } from '@inertiajs/react';
import { format } from 'date-fns';
import { id } from 'date-fns/locale'; 

// Komponen ini menerima 'polls' sebagai props dari controller Laravel
const PollIndex = ({ auth, polls }) => {
    const Layout = auth.user ? AuthenticatedLayout : GuestLayout;

    return (
        <Layout user={auth.user} header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Daftar Poll Aktif</h2>}>
            <Head title="Poll Aktif" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            {polls.length > 0 ? (
                                <div className="space-y-6">
                                    {polls.map((poll) => (
                                        <div key={poll.id} className="border border-gray-200 p-4 rounded-lg hover:shadow-md transition duration-150">
                                            <h3 className="text-2xl font-bold text-indigo-600 mb-2">{poll.title}</h3>
                                            <p className="text-gray-600 mb-3">{poll.description}</p>
                                            
                                            <div className="text-sm text-gray-500 space-y-1">
                                                <p>Dibuat oleh: <span className="font-medium text-gray-700">{poll.creator.name}</span></p>
                                                <p>Total Votes: <span className="font-bold text-indigo-500">{poll.total_votes}</span></p>
                                                {poll.ends_at && (
                                                    <p>Berakhir: {format(new Date(poll.ends_at), 'd MMMM yyyy HH:mm', { locale: id })} WIB</p>
                                                )}
                                            </div>

                                            {/* Link untuk melihat detail dan voting (akan dibuat di tahap berikutnya) */}
                                            <Link 
                                                href={`/polls/${poll.id}`} 
                                                className="mt-4 inline-block text-white bg-indigo-500 hover:bg-indigo-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                            >
                                                Lihat Detail & Vote
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-center text-gray-500 text-lg">Saat ini belum ada Poll yang aktif.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default PollIndex;