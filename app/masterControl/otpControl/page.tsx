import { IconRefresh } from '@tabler/icons-react'
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

const page = () => {
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

            <div className=' w-full py-[15px] px-[10px] text-[#00000080] dark:text-[#FFFFFF80] flex items-center justify-start bg-white dark:bg-black rounded-xl mb-[20px]'>
                <Link
                    href={"/masterControl"}
                    className=' mr-[15px] hover:text-black dark:hover:text-white duration-500'
                >
                    Privacy Policy
                </Link>

                <Link
                    href={"/masterControl/termsAndConditions"}
                    className=' mr-[15px] hover:text-black dark:hover:text-white duration-500'
                >
                    Terms & Conditions
                </Link>

                <Link
                    href={"/masterControl/aboutUs"}
                    className=' mr-[15px] hover:text-black dark:hover:text-white duration-500'
                >
                    About Us
                </Link>

                <Link
                    href={"/masterControl/predictionManagement"}
                    className=' mr-[15px] hover:text-black dark:hover:text-white duration-500'
                >
                    Prediction Management
                </Link>

                <Link
                    href={"/masterControl/otpControl"}
                    className=' text-black dark:text-white mr-[15px]'
                >
                    OTP Control
                </Link>
            </div>

            <div className=' w-full py-[15px] px-[10px] text-[#00000080] dark:text-[#FFFFFF80] flex items-center justify-start bg-white dark:bg-black rounded-xl mb-[20px]'>
                <Link
                    href={""}
                    className=' text-black dark:text-white mr-[15px]'
                >
                    English
                </Link>

                <Link
                    href={""}
                    className=' mr-[15px] hover:text-black dark:hover:text-white duration-500'
                >
                    العربية
                </Link>

                <Link
                    href={""}
                    className=' mr-[15px] hover:text-black dark:hover:text-white duration-500'
                >
                    普通话
                </Link>

                <Link
                    href={""}
                    className=' mr-[15px] hover:text-black dark:hover:text-white duration-500'
                >
                    हिंदी
                </Link>

                <Link
                    href={""}
                    className=' mr-[15px] hover:text-black dark:hover:text-white duration-500'
                >
                    اردو
                </Link>

                <Link
                    href={""}
                    className=' mr-[15px] hover:text-black dark:hover:text-white duration-500'
                >
                    français
                </Link>

                <Link
                    href={""}
                    className=' mr-[15px] hover:text-black dark:hover:text-white duration-500'
                >
                    português
                </Link>

                <Link
                    href={""}
                    className=' mr-[15px] hover:text-black dark:hover:text-white duration-500'
                >
                    español
                </Link>

                <Link
                    href={""}
                    className=' mr-[15px] hover:text-black dark:hover:text-white duration-500'
                >
                    Deutsch
                </Link>

                <Link
                    href={""}
                    className=' mr-[15px] hover:text-black dark:hover:text-white duration-500'
                >
                    русский
                </Link>
            </div>

            <div className=' w-full h-[700px] bg-white dark:bg-black rounded-xl p-[20px]'>
                <div className=' w-full overflow-x-scroll mt-[20px] h-[600px] overflow-y-scroll scrollbar-hide'>
                    <Table>
                        <TableHeader className=' text-[#00000080] dark:text-[#FFFFFF80] border-b dark:border-b-[#1A1A1A] border-b-[#0000001A]'>
                            <TableRow>
                                <TableHead>Module Name</TableHead>
                                <TableHead>Mobile No</TableHead>
                                <TableHead>Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow className=' border-b dark:text-white dark:border-b-[#1A1A1A] border-b-[#0000001A] mb-[10px] h-[80px]'>
                                <TableCell>Dashboard</TableCell>
                                <TableCell>+966 53 627 2789</TableCell>
                                <TableCell>
                                    <div className=' h-[80px] flex items-center justify-start text-white'>
                                        <Link href={"/masterControl/otpControl/addUpdateNumber"} className=' py-[10px] px-[20px] rounded-xl bg-black dark:bg-[#AB4FA8] mx-[0px]'>
                                            Edit
                                        </Link>
                                        {/* <button className=' py-[10px] px-[20px] rounded-xl bg-red-500 mx-[15px]'>
                                            Delete
                                        </button>
                                        <button className=' py-[10px] px-[20px] rounded-xl bg-[#CE2BDD] mx-[15px]'>
                                            Block
                                        </button> */}
                                    </div>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default page