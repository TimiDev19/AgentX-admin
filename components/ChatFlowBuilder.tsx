import React from "react";
import { Plus } from "lucide-react";
import Image from "next/image";
import chatgpt from "@/assets/chatgpt.png"
import { IconMail } from "@tabler/icons-react";

export default function ChatFlowUI() {
    return (
        <div className="min-h-screen bg-transparent text-black dark:text-white p-0">
            {/* Title */}
            <h1 className="text-xl font-semibold mb-8">Create/Reorder Chat Flow</h1>

            {/* Assistant message */}
            <div className="dark:bg-[#0B0F1A] bg-[#E9E9E9] rounded-2xl p-4 mb-6">
                <div className="flex items-start gap-3">
                    <div className="w-[10px] h-[10px] rounded-full bg-[#F5F5F5] dark:bg-[#040C1C] flex items-center justify-center">
                        {/* <Image src={chatgpt} alt="bot" className="w-[20px] h-[20px]" /> */}
                    </div>
                    <div>
                        <p className="text-black dark:text-zinc-100 text-base leading-relaxed">
                            Hey, I am conversational chatbot trained using Generative AI. How can i help you today?
                        </p>
                        <div className="mt-3 w-full flex items-center justify-end">
                            <button className="bg-blue-600 text-white px-4 py-1.5 rounded-xl text-sm">
                                User Replay
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Email message 1 */}
            <div className="flex items-start gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#F5F5F5] dark:bg-zinc-900 flex items-center justify-center">
                    <IconMail stroke={1} />
                </div>
                <div>
                    <p className="text-black dark:text-zinc-100 text-base leading-relaxed bg-[#F5F5F5] dark:bg-[#121212] p-2 rounded-full">What is your email address?</p>
                    <div className="mt-3 w-full flex items-center justify-end">
                        <button className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm">
                            User Replay
                        </button>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-2 my-4">
                <div className="flex-1 h-px bg-[#0000001A] dark:bg-zinc-800" />
                <div className="size-8 rounded-full bg-[#0000001A] dark:bg-black border border-[#0000001A] dark:border-zinc-800 flex items-center justify-center">
                    <Plus className="h-4 w-4 text-black dark:text-purple-500" />
                </div>
                <div className="flex-1 h-px bg-[#0000001A] dark:bg-zinc-800" />
            </div>

            {/* Email message 2 */}
            <div className="flex items-start gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#F5F5F5] dark:bg-zinc-900 flex items-center justify-center">
                    <IconMail stroke={1} />
                </div>
                <div>
                    <p className="text-black dark:text-zinc-100 text-base leading-relaxed bg-[#F5F5F5] dark:bg-[#121212] p-2 rounded-full">What is your email address</p>
                    <div className="mt-3 w-full flex items-center justify-end">
                        <button className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm">
                            User Replay
                        </button>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-2 my-4">
                <div className="flex-1 h-px bg-[#0000001A] dark:bg-zinc-800" />
                <div className="size-8 rounded-full bg-[#0000001A] dark:bg-black border border-[#0000001A] dark:border-zinc-800 flex items-center justify-center">
                    <Plus className="h-4 w-4 text-black dark:text-purple-500" />
                </div>
                <div className="flex-1 h-px bg-[#0000001A] dark:bg-zinc-800" />
            </div>

            {/* Email message 3 */}
            <div className="flex items-start gap-3 w-full">
                <div className="w-8 h-8 rounded-full bg-[#F5F5F5] dark:bg-zinc-900 flex items-center justify-center">
                    <IconMail stroke={1} />
                </div>
                <div>
                    <p className="text-black dark:text-zinc-100 text-base leading-relaxed bg-[#F5F5F5] dark:bg-[#121212] p-2 rounded-full">What is your email address</p>
                    <div className="mt-3 w-full flex items-center justify-end">
                        <button className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm">
                            User Replay
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}