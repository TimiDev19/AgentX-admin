// "use client"
// import BarChart from "@/components/charts/BarChart";
// import DoughnutChart from "@/components/charts/DoughnutChart";
// import Homepage from "@/components/Homepage/Homepage";
// import { IconArrowDown, IconArrowUp, IconCalendar, IconGlobe, IconNetwork, IconRefresh } from "@tabler/icons-react";
// import { useState } from "react";
// import loginLogo from "@/assets/login_logo.png"
// import Image from "next/image";
// import dummyData from "@/helpers/helpers";
// import Link from "next/link";
// import ellipse from "@/assets/biggest.png"
// import ellipse1 from "@/assets/second-biggest.png"
// import ellipse2 from "@/assets/Ellipse 15.png"
// import ellipse3 from "@/assets/Ellipse 14.png"
// import ellipse4 from "@/assets/Ellipse 13.png"
// import ellipse5 from "@/assets/Ellipse 12.png"
// import { useRouter } from 'next/navigation'

// export default function Home() {
//   const [phone, setPhone] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const router = useRouter();
//   return (
//     <div className=" z-[100] h-[100vh] w-[100vw] bg-[#F5F5F5] dark:bg-[#121212] relative flex items-center justify-center overflow-y-hidden">
//       <div className=' absolute h-full w-full bg-transparent flex items-center justify-center z-[3]'>
//         <Image
//           src={ellipse}
//           alt=''
//           className=''
//         />
//       </div>
//       <div className=' absolute h-full w-full bg-transparent flex items-center justify-center z-[3]'>
//         <Image
//           src={ellipse1}
//           alt=''
//           className=''
//         />
//       </div>
//       <div className=' absolute h-full w-full bg--transparent flex items-center justify-center z-[4]'>
//         <Image
//           src={ellipse2}
//           alt=''
//           className=''
//         />
//       </div>
//       <div className=' absolute h-full w-full bg-g-transparent flex items-center justify-center z-[5]'>
//         <Image
//           src={ellipse3}
//           alt=''
//           className=''
//         />
//       </div>
//       <div className=' absolute h-full w-full bg-g-transparent flex items-center justify-center z-[6]'>
//         <Image
//           src={ellipse4}
//           alt=''
//           className=''
//         />
//       </div>
//       <div className=' absolute h-full w-full bg-g-transparent flex items-center justify-center z-[7]'>
//         <Image
//           src={ellipse5}
//           alt=''
//           className=''
//         />
//       </div>
//       <div className=" z-[10] max-h-[452px] w-[378px] bg-white dark:bg-black rounded-3xl p-[30px] flex flex-col items-center justify-start">
//         <Image
//           src={loginLogo}
//           alt=""
//           className=" mb-[20px]"
//         />
//         <h1 className=" font-bold text-[20px] mb-[20px] dark:text-white">Welcome To Agent X</h1>
//         <div className=" w-[95%] mb-[20px]">
//           <label className=" text-[#0000008C] dark:text-[#FFFFFF8C] text-[13px] mb-3">Mobile No.</label>
//           <div className=" flex items-center justify-center border border-[#0000001A] dark:border-[#FFFFFF1A] rounded-xl w-full p-[5px]">
//             <select className=" w-[25%] border-r border-r-[#000000] dark:border-r-[#FFFFFF1A] bg-transparent dark:text-white appearance-none focus:outline-none" name="" id="">
//               <option value="">+966</option>
//             </select>
//             <input type="number" className="w-[75%] bg-transparent dark:text-white border-l border-l-[#0000001A] focus:outline-none px-2" />
//           </div>
//         </div>

//         <div className=" w-[95%] mb-[20px]">
//           <label className=" text-[#0000008C] dark:text-[#FFFFFF8C] text-[13px] mb-3">Password</label>
//           <div className=" flex items-center justify-center border border-[#0000001A] dark:border-[#FFFFFF1A] rounded-xl w-full p-[5px]">

//             <input type="password" className="w-full bg-transparent dark:text-white focus:outline-none px-2" />
//           </div>
//         </div>

//         <Link
//           href={"/forgotPassword"}
//           className=" font-[14px] text-[#121212] dark:text-[#AB4FA8] mb-[20px] hover:text-[#121212]/60 hover:dark:text-[#AB4FA8]/60 duration-500"
//         >
//           Forgot Password?
//         </Link>

//         <Link
//           href={"/authOTP"}
//           className=" w-full flex items-center justify-center text-white bg-black dark:bg-[#AB4FA8] h-[48px] rounded-2xl"
//         >
//           Verify
//         </Link>
//       </div>
//     </div>
//   )
//   // }
// }

"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

import loginLogo from "@/assets/login_logo.png";
import ellipse from "@/assets/biggest.png";
import ellipse1 from "@/assets/second-biggest.png";
import ellipse2 from "@/assets/Ellipse 15.png";
import ellipse3 from "@/assets/Ellipse 14.png";
import ellipse4 from "@/assets/Ellipse 13.png";
import ellipse5 from "@/assets/Ellipse 12.png";
import Link from "next/link";

export default function Home() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    setError("");
    setLoading(true);
    try {
      const res = await fetch("https://api-test.kardiboxes.com/api/adminauth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
        setLoading(false);
        return;
      }

      // ✅ Redirect after successful login
      router.push("/dashboard");
    } catch (err) {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="z-[100] h-[100vh] w-[100vw] bg-[#F5F5F5] dark:bg-[#121212] relative flex items-center justify-center overflow-y-hidden">
      {/* Background ellipses */}
      <Image src={ellipse} alt="" className="absolute z-[3]" />
      <Image src={ellipse1} alt="" className="absolute z-[3]" />
      <Image src={ellipse2} alt="" className="absolute z-[4]" />
      <Image src={ellipse3} alt="" className="absolute z-[5]" />
      <Image src={ellipse4} alt="" className="absolute z-[6]" />
      <Image src={ellipse5} alt="" className="absolute z-[7]" />

      {/* Login Card */}
      <div className="z-[10] max-h-[452px] w-[378px] bg-white dark:bg-black rounded-3xl p-[30px] flex flex-col items-center justify-start">
        <Image src={loginLogo} alt="Login Logo" className="mb-[20px]" />
        <h1 className="font-bold text-[20px] mb-[20px] dark:text-white">
          Welcome To Agent X
        </h1>

        {/* Phone */}
        <div className="w-[95%] mb-[20px]">
          <label className="text-[#0000008C] dark:text-[#FFFFFF8C] text-[13px] mb-3">
            Mobile No.
          </label>
          <div className="flex items-center border border-[#0000001A] dark:border-[#FFFFFF1A] rounded-xl w-full p-[5px]">
            <select
              className="w-[25%] border-r border-r-[#000000] dark:border-r-[#FFFFFF1A] bg-transparent dark:text-white appearance-none focus:outline-none"
            >
              <option value="+966">+966</option>
            </select>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-[75%] bg-transparent dark:text-white border-l border-l-[#0000001A] focus:outline-none px-2"
              placeholder=""
            />
          </div>
        </div>

        {/* Password */}
        <div className="w-[95%] mb-[20px]">
          <label className="text-[#0000008C] dark:text-[#FFFFFF8C] text-[13px] mb-3">
            Password
          </label>
          <div className="flex items-center border border-[#0000001A] dark:border-[#FFFFFF1A] rounded-xl w-full p-[5px]">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent dark:text-white focus:outline-none px-2"
              placeholder=""
            />
          </div>
        </div>

        {/* Error message */}
        {error && (
          <p className="text-red-500 text-sm mb-3">{error}</p>
        )}

        <Link
          href={"/forgotPassword"}
          className=" font-[14px] text-[#121212] dark:text-[#AB4FA8] mb-[20px] hover:text-[#121212]/60 hover:dark:text-[#AB4FA8]/60 duration-500"
        >
          Forgot Password?
        </Link>

        {/* Login button */}
        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full flex items-center justify-center text-white bg-black dark:bg-[#AB4FA8] h-[48px] rounded-2xl disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>
    </div>
  );
}
