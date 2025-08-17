"use client"
import DoughnutChart from '@/components/charts/DoughnutChart'
import { IconFilter, IconRefresh, IconSearch } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import dummyData from '@/helpers/helpers'
import { webpack } from 'next/dist/compiled/webpack/webpack'
import { useRouter } from 'next/navigation'

const page = () => {

    const router = useRouter()

    const nav = () => {
        router.push('/customerCare/ticketDetails/')
    }

    const predictions = dummyData.Issues.filter((issue) => {
        return issue.type === "predictions"
    })

    const payments = dummyData.Issues.filter((issue) => {
        return issue.type === "payments"
    })

    const payouts = dummyData.Issues.filter((issue) => {
        return issue.type === "payouts"
    })

    const nia = dummyData.Issues.filter((issue) => {
        return issue.type === "nia"
    })

    const didNotLike = dummyData.Issues.filter((issue) => {
        return issue.type === "not-like"
    })

    const wcs = dummyData.Issues.filter((issue) => {
        return issue.type === "wcs"
    })

    const other = dummyData.Issues.filter((issue) => {
        return issue.type === "other"
    })

    const whatsapp = dummyData.Issues.filter((issue) => {
        return issue.channel === "whatsapp"
    })

    const inapp = dummyData.Issues.filter((issue) => {
        return issue.channel === "in-app"
    })

    const webPage = dummyData.Issues.filter((issue) => {
        return issue.channel === "webpage"
    })

    const telegram = dummyData.Issues.filter((issue) => {
        return issue.channel === "telegram"
    })

    const wechat = dummyData.Issues.filter((issue) => {
        return issue.channel === "wechat"
    })

    const closed = dummyData.Issues.filter((issue) => {
        return issue.status === "closed"
    })

    const pending = dummyData.Issues.filter((issue) => {
        return issue.status === "pending"
    })

    const open = dummyData.Issues.filter((issue) => {
        return issue.status === "open"
    })

    return (
        <div className='pl-[20vw] pr-[3vw] h-[100vh] w-[100vw] scrollbar-hide overflow-y-scroll bg-[#EDEDED] dark:bg-[#121212] py-[10px] text-black'>
            <div className=" w-full h-[35px] flex items-center justify-between mb-[20px]">
                <div className=" bg-white dark:bg-[#000000] dark:text-white rounded-xl text-sm font-semibold max-h-[35px] p-2">
                    23/06/2023 - 12:23 AM
                </div>

                <div className=" bg-white dark:bg-[#000000] rounded-xl text-sm font-semibold max-h-[35px] p-2 text-green-500 flex items-center justify-center">
                    <IconRefresh size={14} className=" mr-2" stroke={3} />
                    Refresh
                </div>
            </div>

            <div className=' w-full min-h-[370px] py-[20px] flex items-start justify-between text-[#00000080] dark:text-[#FFFFFF80]'>
                <div className=' h-full w-[32%] p-[15px] bg-white dark:bg-black rounded-2xl'>
                    <h1 className=' text-black font-semibold text-[18px] dark:text-white mb-[10px]'>Issue Type</h1>
                    <DoughnutChart
                        labels={['Predictions', 'Payments', 'Payouts', 'Not Interested Anymore', 'I Did Not Like It', 'Weak Customer Support', 'Other']}
                        data={[predictions.length, payments.length, payouts.length, nia.length, didNotLike.length, wcs.length, other.length]}
                        colors={['#4DAAE2', '#B4304F', '#5D2FD1', '#DC2797', '#F88A36', '#4DED7B', '#282828']} // blue, green, gray
                    />

                    <div className=' w-full'>
                        <div className=' w-full flex items-center justify-between mb-4'>
                            <div className=' flex items-center justify-start w-[50%]'>
                                <div className=' h-[12px] w-[12px] rounded-full bg-[#4DAAE2] mr-2'></div>
                                Predictions
                            </div>

                            <div className=' flex items-center justify-start w-[50%]'>
                                <div className=' h-[12px] w-[12px] rounded-full bg-[#F03D68] mr-2'></div>
                                Payments
                            </div>
                        </div>

                        <div className=' w-full flex items-center justify-between mb-4'>
                            <div className=' flex items-center justify-start w-[50%]'>
                                <div className=' h-[12px] w-[12px] rounded-full bg-[#8659FC] mr-2'></div>
                                Payouts
                            </div>

                            <div className=' flex items-center justify-start w-[50%]'>
                                <div className=' h-[12px] w-[12px] rounded-full bg-[#DC2797] mr-2'></div>
                                Not Interested Anymore
                            </div>
                        </div>

                        <div className=' w-full flex items-center justify-between mb-4'>
                            <div className=' flex items-center justify-start w-[50%]'>
                                <div className=' h-[12px] w-[12px] rounded-full bg-[#F88A36] mr-2'></div>
                                I did not like it
                            </div>

                            <div className=' flex items-center justify-start w-[50%]'>
                                <div className=' h-[12px] w-[12px] rounded-full bg-[#4DED7B] mr-2'></div>
                                Weak customer support
                            </div>
                        </div>

                        <div className=' w-full flex items-center justify-between mb-4'>
                            <div className=' flex items-center justify-start w-[50%]'>
                                <div className=' h-[12px] w-[12px] rounded-full bg-[#2B874E] mr-2'></div>
                                Other
                            </div>
                        </div>
                    </div>
                </div>

                <div className=' h-full w-[32%] p-[15px] bg-white dark:bg-black rounded-2xl'>
                    <h1 className=' text-black font-semibold text-[18px] dark:text-white mb-[10px]'>User Category</h1>
                    <DoughnutChart
                        labels={['Whatsapp', 'In-app', 'Web Page', 'Telegram', 'WeChat']}
                        data={[whatsapp.length, inapp.length, webPage.length, telegram.length, wechat.length]}
                        colors={['#4DAAE2', '#F03D68', '#8659FC', '#A9A9A9', '#2B874E']} // blue, green, gray
                    />

                    <div className=' w-full'>
                        <div className=' w-full flex items-center justify-between mb-4'>
                            <div className=' flex items-center justify-start w-[50%]'>
                                <div className=' h-[12px] w-[12px] rounded-full bg-[#4DAAE2] mr-2'></div>
                                Whatsapp
                            </div>

                            <div className=' flex items-center justify-start w-[50%]'>
                                <div className=' h-[12px] w-[12px] rounded-full bg-[#F03D68] mr-2'></div>
                                In-app
                            </div>
                        </div>

                        <div className=' w-full flex items-center justify-between mb-4'>
                            <div className=' flex items-center justify-start w-[50%]'>
                                <div className=' h-[12px] w-[12px] rounded-full bg-[#8659FC] mr-2'></div>
                                Web Page
                            </div>

                            <div className=' flex items-center justify-start w-[50%]'>
                                <div className=' h-[12px] w-[12px] rounded-full bg-[#A9A9A9] mr-2'></div>
                                Telegram
                            </div>
                        </div>

                        <div className=' w-full flex items-center justify-between mb-4'>
                            <div className=' flex items-center justify-start w-[50%]'>
                                <div className=' h-[12px] w-[12px] rounded-full bg-[#2B874E] mr-2'></div>
                                WeChat
                            </div>
                        </div>
                    </div>
                </div>

                <div className=' h-full w-[32%] p-[15px] bg-white dark:bg-black rounded-2xl'>
                    <h1 className=' text-black font-semibold text-[18px] dark:text-white mb-[10px]'>Issue Status</h1>
                    <DoughnutChart
                        labels={['Closed', 'Open', 'Pending']}
                        data={[closed.length, open.length, pending.length]}
                        colors={['#4DAAE2', '#DC2797', '#F88A36']} // blue, green, gray
                    />

                    <div className=' w-full'>
                        <div className=' w-full flex items-center justify-between mb-4'>
                            <div className=' flex items-center justify-start w-[50%]'>
                                <div className=' h-[12px] w-[12px] rounded-full bg-[#4DAAE2] mr-2'></div>
                                Closed
                            </div>

                            <div className=' flex items-center justify-start w-[50%]'>
                                <div className=' h-[12px] w-[12px] rounded-full bg-[#F03D68] mr-2'></div>
                                Open
                            </div>
                        </div>

                        <div className=' w-full flex items-center justify-between mb-4'>
                            <div className=' flex items-center justify-start w-[50%]'>
                                <div className=' h-[12px] w-[12px] rounded-full bg-[#E0944C] mr-2'></div>
                                Pending
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=' w-full h-[470px] bg-white dark:bg-black rounded-xl p-[20px]'>
                <div className=' w-full flex items-center justify-between'>
                    <div className=' flex w-[75%] h-[48px] bg-[#F5F5F5] dark:bg-[#121212] rounded-xl text-[#00000080] dark:text-[#FFFFFF80] items-center justify-center'>
                        <div className='pr-[15px] h-full border-r border-r-[#0000001A] dark:border-r-[#FFFFFF1A] flex items-center justify-center'>
                            <IconFilter stroke={1} size={28} className='mx-2' />
                            <select name="" id="" className=' bg-transparent focus:outline-none'>
                                <option value="">Filters</option>
                            </select>
                        </div>
                        <IconSearch stroke={1} size={28} className='mx-2' />
                        <input
                            type="text"
                            className=' w-[80%] bg-transparent text-[#00000080] dark:text-[#FFFFFF80] placeholder:text-[#00000080] dark:placeholder:text-[#FFFFFF80] p-1 focus:outline-none'
                            placeholder='Search'
                        />
                    </div>
                    <Link href={'/exportReport'} className=' h-[48px] px-[10px] rounded-xl min:w-[137px] flex items-center justify-center text-white dark:bg-[#AB4FA8] bg-black'>
                        Export Report
                    </Link>
                </div>

                <div className=' w-full overflow-x-scroll mt-[20px] h-[600px] overflow-y-scroll scrollbar-hide'>
                    <Table>
                        <TableHeader className=' text-[#00000080] dark:text-[#FFFFFF80] border-b dark:border-b-[#1A1A1A] border-b-[#0000001A]'>
                            <TableRow>
                                <TableHead>ID</TableHead>
                                <TableHead>Ticket No</TableHead>
                                <TableHead>Date & Time</TableHead>
                                <TableHead>CC Centre</TableHead>
                                <TableHead>User ID</TableHead>
                                <TableHead>Channel</TableHead>
                                <TableHead>Creator</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody onClick={nav} className=' cursor-pointer'>
                            {
                                dummyData.Issues.map((issue, index) => (
                                    <TableRow key={index} className=' border-b dark:text-white dark:border-b-[#1A1A1A] border-b-[#0000001A] mb-[10px] h-[80px]'>
                                        <TableCell className=' text-[#AB4FA8]'>{issue.id}</TableCell>
                                        <TableCell>{issue.ticketNo}</TableCell>
                                        <TableCell>{issue.date}</TableCell>
                                        <TableCell>{issue.cccenter}</TableCell>
                                        <TableCell className=' text-[#AB4FA8]'>{issue.userID}</TableCell>
                                        <TableCell>{issue.channel}</TableCell>
                                        <TableCell>{issue.creator}</TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default page