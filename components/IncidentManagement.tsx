"use client";
import { useState } from "react";

interface Transaction {
    id: string;
    date: string;
    time: string;
    amount: string;
    status: "Success" | "Failed";
}

const sampleData: Transaction[] = [
    { id: "#5719191", date: "28/09/2023", time: "12:30 AM", amount: "Type", status: "Success" },
    { id: "#5719192", date: "28/09/2023", time: "12:40 AM", amount: "Type", status: "Failed" },
    { id: "#5719193", date: "28/09/2023", time: "01:00 AM", amount: "Type", status: "Success" },
    { id: "#5719194", date: "28/09/2023", time: "01:20 AM", amount: "Type", status: "Success" },
    { id: "#5719195", date: "28/09/2023", time: "01:40 AM", amount: "Type", status: "Success" },
    { id: "#5719196", date: "28/09/2023", time: "02:00 AM", amount: "Type", status: "Failed" },
    { id: "#5719197", date: "28/09/2023", time: "02:20 AM", amount: "Type", status: "Success" },
    { id: "#5719198", date: "28/09/2023", time: "02:40 AM", amount: "Type", status: "Success" },
    { id: "#5719199", date: "28/09/2023", time: "03:00 AM", amount: "Type", status: "Success" },
    { id: "#5719200", date: "28/09/2023", time: "03:20 AM", amount: "Type", status: "Failed" },
    { id: "#5719191", date: "28/09/2023", time: "12:30 AM", amount: "Type", status: "Success" },
    { id: "#5719192", date: "28/09/2023", time: "12:40 AM", amount: "Type", status: "Failed" },
    { id: "#5719193", date: "28/09/2023", time: "01:00 AM", amount: "Type", status: "Success" },
    { id: "#5719194", date: "28/09/2023", time: "01:20 AM", amount: "Type", status: "Success" },
    { id: "#5719195", date: "28/09/2023", time: "01:40 AM", amount: "Type", status: "Success" },
    { id: "#5719196", date: "28/09/2023", time: "02:00 AM", amount: "Type", status: "Failed" },
    { id: "#5719197", date: "28/09/2023", time: "02:20 AM", amount: "Type", status: "Success" },
    { id: "#5719198", date: "28/09/2023", time: "02:40 AM", amount: "Type", status: "Success" },
    { id: "#5719199", date: "28/09/2023", time: "03:00 AM", amount: "Type", status: "Success" },
    { id: "#5719200", date: "28/09/2023", time: "03:20 AM", amount: "Type", status: "Failed" },
];

export default function IncidentManagement() {
    const [page, setPage] = useState(1);
    const rowsPerPage = 5;

    const totalPages = Math.ceil(sampleData.length / rowsPerPage);
    const startIndex = (page - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const data = sampleData.slice(startIndex, endIndex);

    console.log("Current page:", page, "Showing IDs:", data.map(d => d.id));

    return (
        <div className="bg-white dark:bg-black py-4 rounded-2xl shadow-sm text-black dark:text-white">
            {/* Header */}
            <div className="flex items-center justify-normal mb-4 p-2">
                <h2 className="text-lg font-semibold mr-2">Incident Management</h2>
                <span className="material-symbols-outlined text-black dark:text-white">calendar_today</span>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="bg-[#F5F5F5] dark:bg-[#121212]">
                        <tr className="text-sm text-black dark:text-white font-semibold">
                            <th className="p-3 font-medium">ID</th>
                            <th className="p-3 font-medium">Incident Type</th>
                            <th className="p-3 font-medium">Date</th>
                            <th className="p-3 font-medium">Time</th>
                            <th className="p-3 font-medium">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((tx, index) => (
                            <tr key={`${tx.id}-${startIndex + index}`} className="border-t dark:border-[#FFFFFF1A] text-sm">
                                <td className="p-3 dark:text-[#AB4FA8]">{tx.id}</td>
                                <td className="p-3">{tx.amount}</td>
                                <td className="p-3">{tx.date}</td>
                                <td className="p-3">{tx.time}</td>
                                <td
                                    className={`p-3 font-medium ${tx.status === "Success" ? "text-green-600" : "text-red-500"
                                        }`}
                                >
                                    {tx.status}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-end items-center gap-2 mt-4 z-10">
                <button
                    onClick={() => setPage(1)}
                    disabled={page === 1}
                    className=" cursor-pointer z-[20] px-2 py-1 text-gray-500  dark:text-[#FFFFFF80] disabled:opacity-30"
                >
                    «
                </button>
                <button
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className=" cursor-pointer z-[20] px-2 py-1 text-gray-500 dark:text-[#FFFFFF80]  disabled:opacity-30"
                >
                    ‹
                </button>

                <span className="px-6 py-1 rounded-full border font-medium bg-white dark:bg-[#220A21] dark:text-white dark:border-[#AB4FA8]">
                    {page}
                </span>

                <button
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                    className=" cursor-pointer z-[20] px-2 py-1 text-gray-500 dark:text-[#FFFFFF80]  disabled:opacity-30"
                >
                    ›
                </button>
                <button
                    onClick={() => setPage(totalPages)}
                    disabled={page === totalPages}
                    className=" cursor-pointer z-[20] px-2 py-1 text-gray-500 dark:text-[#FFFFFF80]  disabled:opacity-30"
                >
                    »
                </button>
            </div>
        </div>
    );
}
