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
                    href={"/userManagement"}
                    className=' mr-[15px] hover:text-black dark:hover:text-white duration-500'
                >
                    Customers
                </Link>

                <Link
                    href={"/userManagement/management"}
                    className=' mr-[15px] hover:text-black dark:hover:text-white duration-500'
                >
                    Management
                </Link>

                <Link
                    href={"/userManagement/departments"}
                    className=' text-black dark:text-white mr-[15px]'
                >
                    Departments
                </Link>
            </div>

            <div className=' w-full h-[700px] bg-white dark:bg-black rounded-xl p-[20px]'>
                <div className=' w-full flex items-center justify-between mb-[30px]'>
                    <div className=' flex w-[65%] h-[48px] bg-[#F5F5F5] dark:bg-[#121212]  rounded-xl text-[#00000080] dark:text-[#FFFFFF80] items-center justify-center'>
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
                    <Link href={'/userManagement/departments/addDepartment'} className=' text-center h-[48px] px-[10px] rounded-xl min:w-[137px] flex items-center justify-center text-white dark:bg-[#AB4FA8] bg-black'>
                        Create Department
                    </Link>
                </div>

                <Table>
                    <TableHeader className=' text-[#00000080] dark:text-[#FFFFFF80] border-b dark:border-b-[#1A1A1A] border-b-[#0000001A]'>
                        <TableRow>
                            <TableHead>Sport Name</TableHead>
                            <TableHead>Sport Country</TableHead>
                            <TableHead>Prediction Type</TableHead>
                            <TableHead>Entry Price</TableHead>
                            <TableHead>Win Value</TableHead>
                            <TableHead>Currency</TableHead>
                            <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow className=' border-b dark:text-white dark:border-b-[#1A1A1A] border-b-[#0000001A] mb-[10px] h-[80px]'>
                            <TableCell>Cricket</TableCell>
                            <TableCell>England</TableCell>
                            <TableCell>Main</TableCell>
                            <TableCell>200</TableCell>
                            <TableCell>1000</TableCell>
                            <TableCell>SAR</TableCell>
                            <TableCell>
                                <div className=' h-[80px] flex items-center justify-start text-white'>
                                    <Link href={"/userManagement/departments/editDepartment"} className=' py-[10px] px-[20px] rounded-xl bg-black dark:bg-[#AB4FA8] mr-[15px]'>
                                        Edit
                                    </Link>
                                    <Link href={"/userManagement/departments/deleteDepartment"} className=' py-[10px] px-[20px] rounded-xl bg-red-500 mx-[15px]'>
                                        Delete
                                    </Link>
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

export default page