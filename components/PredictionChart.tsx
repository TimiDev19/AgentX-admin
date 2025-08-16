// // "use client";
// // import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

// // interface PredictionChartProps {
// //   title: string;
// //   categories: { name: string; color: string }[]; // Inner labels (e.g., Soccer, Cricket…)
// //   values: { name: string; value: number; color: string }[]; // Outer segments (e.g., Win/Loss…)
// // }



// // export default function PredictionChart({
// //   title,
// //   categories,
// //   values,
// // }: PredictionChartProps) {
// //   return (
// //     <div className="bg-white rounded-2xl shadow-sm p-4 flex flex-col items-center w-full">
// //       {/* Header */}
// //       <div className="flex justify-between items-center w-full mb-4">
// //         <h2 className="font-semibold">{title}</h2>
// //         <span className="material-symbols-outlined text-gray-500">
// //           calendar_today
// //         </span>
// //       </div>

// //       {/* Chart */}
// //       <div className="w-48 h-48">
// //         <ResponsiveContainer>
// //           <PieChart>
// //             {/* Inner circle (categories) */}
// //             <Pie
// //               data={categories}
// //               dataKey="value"
// //               nameKey="name"
// //               innerRadius={40}
// //               outerRadius={70}
// //               paddingAngle={0}
// //             >
// //               {categories.map((cat, idx) => (
// //                 <Cell key={idx} fill={cat.color} />
// //               ))}
// //             </Pie>

// //             {/* Outer circle (values/predictions) */}
// //             <Pie
// //               data={values}
// //               dataKey="value"
// //               nameKey="name"
// //               innerRadius={70}
// //               outerRadius={90}
// //               paddingAngle={0}
// //               label
// //             >
// //               {values.map((val, idx) => (
// //                 <Cell key={idx} fill={val.color} />
// //               ))}
// //             </Pie>
// //           </PieChart>
// //         </ResponsiveContainer>
// //       </div>
// //     </div>
// //   );
// // }



// "use client";
// import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

// interface ChartData {
//   name: string;
//   value: number;
//   color: string;
// }

// interface PredictionChartProps {
//   title: string;
//   categories: ChartData[]; // Inner ring
//   values: ChartData[]; // Outer ring
// }

// export default function PredictionChart({
//   title,
//   categories,
//   values,
// }: PredictionChartProps) {
//   // Custom label renderer (centers label inside slice)
//   const renderLabel = (props: any) => {
//     const RADIAN = Math.PI / 180;
//     const radius = props.innerRadius + (props.outerRadius - props.innerRadius) / 2;
//     const x = props.cx + radius * Math.cos(-props.midAngle * RADIAN);
//     const y = props.cy + radius * Math.sin(-props.midAngle * RADIAN);

//     return (
//       <text
//         x={x}
//         y={y}
//         fill="white"
//         textAnchor="middle"
//         dominantBaseline="central"
//         fontSize="12"
//         fontWeight="500"
//       >
//         {props.name}
//       </text>
//     );
//   };

//   return (
//     <div className="bg-white rounded-2xl shadow-sm p-4 flex flex-col items-center w-full">
//       {/* Header */}
//       <div className="flex justify-between items-center w-full mb-4">
//         <h2 className="font-semibold">{title}</h2>
//         <span className="material-symbols-outlined text-gray-500">
//           calendar_today
//         </span>
//       </div>

//       {/* Chart */}
//       <div className="w-56 h-56">
//         <ResponsiveContainer>
//           <PieChart>
//             {/* Inner circle (categories) */}
//             <Pie
//               data={categories}
//               dataKey="value"
//               nameKey="name"
//               innerRadius={40}
//               outerRadius={70}
//               label={renderLabel}
//               isAnimationActive={false}
//             >
//               {categories.map((cat, idx) => (
//                 <Cell key={idx} fill={cat.color} />
//               ))}
//             </Pie>

//             {/* Outer circle (sub-values) */}
//             <Pie
//               data={values}
//               dataKey="value"
//               nameKey="name"
//               innerRadius={70}
//               outerRadius={95}
//               label={renderLabel}
//               isAnimationActive={false}
//             >
//               {values.map((val, idx) => (
//                 <Cell key={idx} fill={val.color} />
//               ))}
//             </Pie>
//           </PieChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// }



"use client";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

interface ChartData {
  name: string;
  value: number;
  color: string;
}

interface PredictionChartProps {
  title: string;
  categories: ChartData[]; // Inner ring
  values: ChartData[]; // Outer ring
}

export default function PredictionChart({
  title,
  categories,
  values,
}: PredictionChartProps) {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white rounded-2xl shadow-sm p-4 flex flex-col items-center w-full">
      {/* Header */}
      <div className="flex justify-between items-center w-full mb-4">
        <h2 className="font-semibold">{title}</h2>
        <span className="material-symbols-outlined text-black dark:text-white">
          calendar_today
        </span>
      </div>

      {/* Chart */}
      <div className="w-56 h-56">
        <ResponsiveContainer>
          <PieChart>
            {/* Inner circle (categories) */}
            <Pie
              data={categories}
              dataKey="value"
              nameKey="name"
              innerRadius={40}
              outerRadius={70}
              isAnimationActive={false}
            >
              {categories.map((cat, idx) => (
                <Cell key={idx} fill={cat.color} />
              ))}
            </Pie>

            {/* Outer circle (sub-values) */}
            <Pie
              data={values}
              dataKey="value"
              nameKey="name"
              innerRadius={70}
              outerRadius={95}
              isAnimationActive={false}
            >
              {values.map((val, idx) => (
                <Cell key={idx} fill={val.color} />
              ))}
            </Pie>

            {/* Tooltip on hover */}
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                borderRadius: "8px",
                padding: "6px 10px",
                border: "1px solid #ddd",
              }}
              itemStyle={{ fontSize: "13px" }}
              cursor={{ fill: "rgba(0,0,0,0.05)" }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
