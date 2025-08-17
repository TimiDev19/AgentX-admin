import { IconRefresh } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'

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
          className=' text-black dark:text-white mr-[15px]'
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
          className=' mr-[15px] hover:text-black dark:hover:text-white duration-500'
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
        <h1 className=' text-black dark:text-white font-extrabold text-[18px] mb-2'>Privacy Policy</h1>
        <p className=' text-[#00000080] dark:text-[#FFFFFF80] mb-6'>Update Privacy Policy</p>

        <div className=' p-[20px] w-full h-[60%] border rounded-2xl dark:border-[#FFFFFF1A] dark:text-[#FFFFFF80] border-[#0000001A] text-[#00000080]'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper commodo, pellentesque libero aenean metus. Odio auctor luctus vitae mollis aenean euismod id leo. Velit dolor sollicitudin eu quisque vulputate. Eget feugiat fames auctor etiam sit. Sed id tempus morbi in nulla morbi neque quam. Ut gravida mi, massa consectetur mauris, scelerisque mauris. Magna odio tristique nisi, sodales nisi, consectetur nunc. Adipiscing eu, id massa varius. Volutpat feugiat risus ut non. Amet risus est mi ornare donec mauris. Morbi volutpat phasellus viverra nibh sed venenatis euismod. Tincidunt vitae iaculis
          </p>
        </div>

        <div className=' w-full flex items-center justify-end mt-[15px]'>
          <Link
            href={"/masterControl/privacyPolicyOTP"}
            className=' h-[48px] px-[10px] flex items-center justify-center bg-black text-white dark:bg-[#AB4FA8] rounded-2xl'
          >
            Save Changes
          </Link>
        </div>
      </div>
    </div>
  )
}

export default page