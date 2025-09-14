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
// import ellipse6 from "@/assets/Ellipse 6.png"

// export default function Home() {
//   const labels = [
//     'India', 'Australia', 'England', 'Pakistan', 'Team', 'Team', 'Team',
//     'Team', 'Team', 'XXX', 'XXX', 'XXX', 'XXX', 'XXX', 'XXX', 'XXX'
//   ];
//   const data = [
//     80, 35, 65, 55, 90, 92, 93, 32, 60, 85, 90, 88, 70, 25, 76, 60
//   ];

//   const [isAuthenticated, setIsAuthenticated] = useState(false)

//   const kycTrue = dummyData.users.filter((user) => {
//     return user.kyc === "true"
//   })

//   const kycFalse = dummyData.users.filter((user) => {
//     return user.kyc === "false"
//   })

//   const wins = dummyData.predictions.filter((predictions) => {
//     return predictions.win === "true"
//   })

//   const loss = dummyData.predictions.filter((predictions) => {
//     return predictions.win === "false"
//   })

//   const forFun = dummyData.predictions.filter((pred) => {
//     return pred.reason === "for fun"
//   })

//   const paid = dummyData.predictions.filter((pred) => {
//     return pred.reason === "paid"
//   })

//   const nil = dummyData.predictions.filter((pred) => {
//     return pred.reason === "nil"
//   })

//   const mastercard = dummyData.predictions.filter((pred) => {
//     return pred.payment === "mastercard"
//   })

//   const successfulPayment = dummyData.predictions.filter((pred) => {
//     return pred.payout = true
//   })

//   const failedPayment = dummyData.predictions.filter((pred) => {
//     return pred.payout = false
//   })

//   const wow = dummyData.predictions.filter((pred) => {
//     return pred.customerRating === "wow"
//   })

//   const happy = dummyData.predictions.filter((pred) => {
//     return pred.customerRating === "happy"
//   })

//   const average = dummyData.predictions.filter((pred) => {
//     return pred.customerRating === "average"
//   })

//   const poor = dummyData.predictions.filter((pred) => {
//     return pred.customerRating === "poor"
//   })

//   const whatsapp = dummyData.predictions.filter((pred) => {
//     return pred.channel === "Whatsapp"
//   })

//   const inApp = dummyData.predictions.filter((pred) => {
//     return pred.channel === "in-app"
//   })

//   const webPage = dummyData.predictions.filter((pred) => {
//     return pred.channel === "webpage"
//   })

//   const telegram = dummyData.predictions.filter((pred) => {
//     return pred.channel === "telegram"
//   })

//   const wechat = dummyData.predictions.filter((pred) => {
//     return pred.channel === "wechat"
//   })
//     return (
//       <div className=" z-[100] h-[100vh] w-[100vw] bg-[#F5F5F5] dark:bg-[#121212] relative flex items-center justify-center overflow-y-hidden">
//         <div className=' absolute h-full w-full bg-transparent flex items-center justify-center z-[3]'>
//           <Image
//             src={ellipse}
//             alt=''
//             className=''
//           />
//         </div>
//         <div className=' absolute h-full w-full bg-transparent flex items-center justify-center z-[3]'>
//           <Image
//             src={ellipse1}
//             alt=''
//             className=''
//           />
//         </div>
//         <div className=' absolute h-full w-full bg--transparent flex items-center justify-center z-[4]'>
//           <Image
//             src={ellipse2}
//             alt=''
//             className=''
//           />
//         </div>
//         <div className=' absolute h-full w-full bg-g-transparent flex items-center justify-center z-[5]'>
//           <Image
//             src={ellipse3}
//             alt=''
//             className=''
//           />
//         </div>
//         <div className=' absolute h-full w-full bg-g-transparent flex items-center justify-center z-[6]'>
//           <Image
//             src={ellipse4}
//             alt=''
//             className=''
//           />
//         </div>
//         <div className=' absolute h-full w-full bg-g-transparent flex items-center justify-center z-[7]'>
//           <Image
//             src={ellipse5}
//             alt=''
//             className=''
//           />
//         </div>
//         <div className=" z-[10] max-h-[452px] w-[378px] bg-white dark:bg-black rounded-3xl p-[30px] flex flex-col items-center justify-start">
//           <Image
//             src={loginLogo}
//             alt=""
//             className=" mb-[20px]"
//           />
//           <h1 className=" font-bold text-[20px] mb-[20px] dark:text-white">Welcome To Agent X</h1>
//           <div className=" w-[95%] mb-[20px]">
//             <label className=" text-[#0000008C] dark:text-[#FFFFFF8C] text-[13px] mb-3">Mobile No.</label>
//             <div className=" flex items-center justify-center border border-[#0000001A] dark:border-[#FFFFFF1A] rounded-xl w-full p-[5px]">
//               <select className=" w-[25%] bg-transparent dark:text-white appearance-none focus:outline-none" name="" id="">
//                 <option value="">+966</option>
//               </select>
//               <input type="number" className="w-[75%] bg-transparent dark:text-white border-l border-l-[#0000001A] focus:outline-none px-2" />
//             </div>
//           </div>

//           <Link
//             href={"/forgotPassword/otp"}
//             className=" w-full flex items-center justify-center text-white bg-black dark:bg-[#AB4FA8] h-[48px] rounded-2xl"
//           >
//             Verify
//           </Link>
//         </div>
//       </div>
//     )
//   // }
// }

"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import loginLogo from "@/assets/login_logo.png";
import ellipse from "@/assets/biggest.png";
import ellipse1 from "@/assets/second-biggest.png";
import ellipse2 from "@/assets/Ellipse 15.png";
import ellipse3 from "@/assets/Ellipse 14.png";
import ellipse4 from "@/assets/Ellipse 13.png";
import ellipse5 from "@/assets/Ellipse 12.png";

export default function ForgotPassword() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // const handleSendOtp = async () => {
  //   setError("");
  //   setLoading(true);

  //   try {
  //     const res = await fetch("https://api-test.kardiboxes.com/api/adminauth/send-otp", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ phone }),
  //     });

  //     const data = await res.json();

  //     if (!res.ok) {
  //       setError(data.message || "Failed to send OTP");
  //       setLoading(false);
  //       return;
  //     }

  //     // ✅ On success, navigate to OTP page
  //     window.location.href = "/forgotPassword/otp";
  //   } catch (err) {
  //     setError("Something went wrong, please try again.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleSendOtp = async () => {
    try {
      const fullPhone = phone; // adjust if user enters separately
      localStorage.setItem("phone", fullPhone);
  
      const res = await fetch("https://api-test.kardiboxes.com/api/adminauth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: fullPhone }),
      });
  
      const data = await res.json();
  
      if (!res.ok) {
        throw new Error(data.message || "Failed to send OTP");
      }
  
      // ✅ redirect to OTP page
      window.location.href = "/forgotPassword/otp";
    } catch (err: any) {
      console.error(err.message);
    }
  };
  

  return (
    <div className=" z-[100] h-[100vh] w-[100vw] bg-[#F5F5F5] dark:bg-[#121212] relative flex items-center justify-center overflow-y-hidden">
      <div className=" absolute h-full w-full bg-transparent flex items-center justify-center z-[3]">
        <Image src={ellipse} alt="" className="" />
      </div>
      <div className=" absolute h-full w-full bg-transparent flex items-center justify-center z-[3]">
        <Image src={ellipse1} alt="" className="" />
      </div>
      <div className=" absolute h-full w-full bg--transparent flex items-center justify-center z-[4]">
        <Image src={ellipse2} alt="" className="" />
      </div>
      <div className=" absolute h-full w-full bg-g-transparent flex items-center justify-center z-[5]">
        <Image src={ellipse3} alt="" className="" />
      </div>
      <div className=" absolute h-full w-full bg-g-transparent flex items-center justify-center z-[6]">
        <Image src={ellipse4} alt="" className="" />
      </div>
      <div className=" absolute h-full w-full bg-g-transparent flex items-center justify-center z-[7]">
        <Image src={ellipse5} alt="" className="" />
      </div>

      <div className=" z-[10] max-h-[452px] w-[378px] bg-white dark:bg-black rounded-3xl p-[30px] flex flex-col items-center justify-start">
        <Image src={loginLogo} alt="" className=" mb-[20px]" />
        <h1 className=" font-bold text-[20px] mb-[20px] dark:text-white">
          Welcome To Agent X
        </h1>

        {/* Phone Input */}
        <div className=" w-[95%] mb-[20px]">
          <label className=" text-[#0000008C] dark:text-[#FFFFFF8C] text-[13px] mb-3">
            Mobile No.
          </label>
          <div className=" flex items-center justify-center border border-[#0000001A] dark:border-[#FFFFFF1A] rounded-xl w-full p-[5px]">
            <select className=" w-[25%] bg-transparent dark:text-white appearance-none focus:outline-none">
              <option value="+966">+966</option>
            </select>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-[75%] bg-transparent dark:text-white border-l border-l-[#0000001A] focus:outline-none px-2"
              placeholder="Phone number"
            />
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <p className="text-red-500 text-sm mb-3">{error}</p>
        )}

        {/* Verify Button */}
        <button
          onClick={handleSendOtp}
          disabled={loading}
          className=" w-full flex items-center justify-center text-white bg-black dark:bg-[#AB4FA8] h-[48px] rounded-2xl disabled:opacity-50"
        >
          {loading ? "Sending OTP..." : "Verify"}
        </button>
      </div>
    </div>
  );
}
