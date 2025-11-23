import React, { useState } from "react";
import { Head, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import TextInput from "@/Components/TextInput"; // Asumsi komponen ini ada dari Breeze
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton"; // Tombol utama

const PollCreate = ({ auth }) => {
    // State untuk mengelola input utama Poll
    const { data, setData, post, processing, errors } = useForm({
        title: "",
        description: "",
        ends_at: "",
        options: [{ option_text: "" }, { option_text: "" }], // Mulai dengan 2 opsi kosong
    });

    // Fungsi untuk mengubah teks pada opsi tertentu
    const handleOptionChange = (index, value) => {
        const newOptions = data.options.map((option, i) => {
            if (i === index) {
                return { ...option, option_text: value };
            }
            return option;
        });
        setData("options", newOptions);
    };

    // Fungsi untuk menambah opsi baru
    const addOption = () => {
        setData("options", [...data.options, { option_text: "" }]);
    };

    // Fungsi untuk menghapus opsi (hanya jika opsi > 2)
    const removeOption = (index) => {
        if (data.options.length > 2) {
            setData(
                "options",
                data.options.filter((_, i) => i !== index)
            );
        }
    };

    const submit = (e) => {
        e.preventDefault();
        console.log('Form data being submitted:', data);
        // Kirim data, termasuk array options
        post(route("polls.store"), {
            onSuccess: () => {
                console.log('Poll berhasil dibuat');
            },
            onError: (errors) => {
                console.log('Errors:', errors);
            },
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Buat Poll Baru
                </h2>
            }
        >
            <Head title="Buat Poll" />

            <div className="min-h-screen bg-gray-50 py-8 md:py-12">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <form
                        onSubmit={submit}
                        className="bg-white rounded-xl shadow-sm border border-gray-200"
                    >
                        {/* Header Simple */}
                        <div className="px-6 md:px-8 py-6 border-b border-gray-200">
                            <h1 className="text-2xl font-bold text-gray-900">
                                Buat Poll Baru
                            </h1>
                            <p className="text-sm text-gray-500 mt-1">
                                Isi informasi dibawah untuk membuat poll
                            </p>
                        </div>

                        <div className="p-6 md:p-8 space-y-6">
                            {/* Input Judul */}
                            <div>
                                <InputLabel
                                    htmlFor="title"
                                    value="Judul Poll"
                                />
                                <TextInput
                                    id="title"
                                    type="text"
                                    value={data.title}
                                    placeholder="Masukkan judul poll"
                                    className="mt-1 block w-full"
                                    onChange={(e) =>
                                        setData("title", e.target.value)
                                    }
                                    required
                                />
                                <InputError
                                    message={errors.title}
                                    className="mt-2"
                                />
                            </div>

                            {/* Input Deskripsi (Textarea) */}
                            <div>
                                <InputLabel
                                    htmlFor="description"
                                    value="Deskripsi (Opsional)"
                                />
                                <textarea
                                    id="description"
                                    value={data.description}
                                    placeholder="Tambahkan deskripsi..."
                                    onChange={(e) =>
                                        setData("description", e.target.value)
                                    }
                                    rows="3"
                                    className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm resize-none"
                                ></textarea>
                                <InputError
                                    message={errors.description}
                                    className="mt-2"
                                />
                            </div>

                            {/* Input Waktu Berakhir */}
                            <div>
                                <InputLabel
                                    htmlFor="ends_at"
                                    value="Waktu Berakhir (Opsional)"
                                />
                                <TextInput
                                    id="ends_at"
                                    type="datetime-local"
                                    value={data.ends_at}
                                    className="mt-1 block w-full"
                                    onChange={(e) =>
                                        setData("ends_at", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.ends_at}
                                    className="mt-2"
                                />
                            </div>

                            {/* Divider */}
                            <div className="border-t border-gray-200"></div>

                            {/* Area Opsi Poll Dinamis */}
                            <div>
                                <div className="mb-4">
                                    <h3 className="text-sm font-medium text-gray-900">
                                        Opsi Jawaban
                                    </h3>
                                    <p className="text-xs text-gray-500 mt-1">
                                        Minimal 2 opsi
                                    </p>
                                </div>
                                <InputError
                                    message={errors.options}
                                    className="mb-3"
                                />

                                <div className="space-y-2">
                                    {data.options.map((option, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-2"
                                        >
                                            <span className="text-sm text-gray-500 w-6">
                                                {index + 1}.
                                            </span>
                                            <TextInput
                                                type="text"
                                                value={option.option_text}
                                                placeholder={`Opsi ${
                                                    index + 1
                                                }`}
                                                className="flex-1"
                                                onChange={(e) =>
                                                    handleOptionChange(
                                                        index,
                                                        e.target.value
                                                    )
                                                }
                                                required
                                            />
                                            {data.options.length > 2 && (
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        removeOption(index)
                                                    }
                                                    className="text-gray-400 hover:text-red-600 p-1"
                                                    title="Hapus"
                                                >
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
                                                            d="M6 18L18 6M6 6l12 12"
                                                        />
                                                    </svg>
                                                </button>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                <button
                                    type="button"
                                    onClick={addOption}
                                    className="mt-3 text-sm text-indigo-600 hover:text-indigo-700 font-medium"
                                >
                                    + Tambah Opsi
                                </button>
                            </div>
                        </div>

                        {/* Tombol Submit - Footer Sticky */}
                        <div className="px-6 md:px-8 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
                            <p className="text-sm text-gray-600">
                                {data.options.length} opsi jawaban
                            </p>
                            <button
                                type="submit"
                                disabled={processing}
                                className="px-4 py-1 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors shadow-md hover:shadow-lg"
                            >
                                {processing ? "Memproses..." : "Buat Poll"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default PollCreate;
