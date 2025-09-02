// type BoardProps = {
//   setHoveredNums: (nums: number[]) => void;
// };

// export const Board = ({ setHoveredNums }: BoardProps) => {
//   const rows = [
//     [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36],
//     [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35],
//     [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34],
//   ];

//   const ranges: Record<string, number[]> = {
//     "1-12": range(1, 12),
//     "13-24": range(13, 24),
//     "25-36": range(25, 36),
//     even: evenNums(),
//     odd: oddNums(),
//   };

//   return (
//     <div className="w-full h-full flex items-center justify-center pb-2">
//       <div className="w-[85%] aspect-[14/5] h-full p-2 rounded-md flex flex-col gap-1">
//         {/* Top grid */}
//         <div className="grid grid-cols-[40px_repeat(12,1fr)_40px] grid-rows-3 gap-1">
//           {/* Zero */}
//           <div
//             className="row-span-3 flex items-center justify-center bg-green-600 text-white font-semibold rounded cursor-pointer"
//             onMouseEnter={() => setHoveredNums([0])}
//             onMouseLeave={() => setHoveredNums([])}
//           >
//             0
//           </div>

//           {rows.map((row) =>
//             row.map((n) => (
//               <div
//                 key={n}
//                 className={`flex items-center justify-center font-semibold text-sm rounded cursor-pointer ${
//                   isRed(n)
//                     ? "bg-red-800 text-white"
//                     : "bg-blue-950 text-white"
//                 }`}
//                 onMouseEnter={() => setHoveredNums([n])}
//                 onMouseLeave={() => setHoveredNums([])}
//               >
//                 {n}
//               </div>
//             ))
//           )}
//         </div>

//         {/* Dozens */}
//         <div className="grid grid-cols-[40px_repeat(12,1fr)_40px] gap-1">
//           <div />
//           {Object.keys(ranges).slice(0, 3).map((d) => (
//             <div
//               key={d}
//               className="col-span-4 flex items-center justify-center bg-black/30 text-white text-xs rounded cursor-pointer"
//               onMouseEnter={() => setHoveredNums(ranges[d])}
//               onMouseLeave={() => setHoveredNums([])}
//             >
//               {d}
//             </div>
//           ))}
//           <div />
//         </div>

//         {/* Even/Odd row */}
//         <div className="grid grid-cols-[40px_repeat(12,1fr)_40px] gap-1">
//           <div />
//           <div
//             className="col-span-2 flex items-center justify-center bg-black/30 text-white text-xs rounded cursor-pointer"
//             onMouseEnter={() => setHoveredNums(range(1, 18))}
//             onMouseLeave={() => setHoveredNums([])}
//           >
//             1 to 18
//           </div>
//           <div
//             className="col-span-2 flex items-center justify-center bg-black/30 text-white text-xs rounded cursor-pointer"
//             onMouseEnter={() => setHoveredNums(ranges.even)}
//             onMouseLeave={() => setHoveredNums([])}
//           >
//             even
//           </div>
//           <div
//             className="col-span-2 bg-red-800 cursor-pointer"
//             onMouseEnter={() => setHoveredNums(redNums())}
//             onMouseLeave={() => setHoveredNums([])}
//           />
//           <div
//             className="col-span-2 bg-blue-950 cursor-pointer"
//             onMouseEnter={() => setHoveredNums(blackNums())}
//             onMouseLeave={() => setHoveredNums([])}
//           />
//           <div
//             className="col-span-2 flex items-center justify-center bg-black/30 text-white text-xs rounded cursor-pointer"
//             onMouseEnter={() => setHoveredNums(ranges.odd)}
//             onMouseLeave={() => setHoveredNums([])}
//           >
//             odd
//           </div>
//           <div
//             className="col-span-2 flex items-center justify-center bg-black/30 text-white text-xs rounded cursor-pointer"
//             onMouseEnter={() => setHoveredNums(range(19, 36))}
//             onMouseLeave={() => setHoveredNums([])}
//           >
//             19 to 36
//           </div>
//           <div />
//         </div>
//       </div>
//     </div>
//   );
// };

// function range(start: number, end: number) {
//   return Array.from({ length: end - start + 1 }, (_, i) => start + i);
// }
// function evenNums() { return range(1, 36).filter(n => n % 2 === 0); }
// function oddNums() { return range(1, 36).filter(n => n % 2 !== 0); }
// function redNums() {
//   return [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36];
// }
// function blackNums() {
//   return range(1,36).filter(n => !redNums().includes(n));
// }
// function isRed(n: number) {
//   const reds = new Set([1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36]);
//   return reds.has(n);
// }

type BoardProps = {
  setHoveredNums: (nums: number[]) => void;
  hoveredNums: number[];
};
export const Board = ({ setHoveredNums, hoveredNums }: BoardProps) => {
  const rows = [
    [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36], // top row
    [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35], // middle row
    [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34], // bottom row
  ];

  const ranges: Record<string, number[]> = {
    "1-12": range(1, 12),
    "13-24": range(13, 24),
    "25-36": range(25, 36),
    "1-18": range(1, 18),
    "19-36": range(19, 36),
    even: evenNums(),
    odd: oddNums(),
  };

  return (
    <div className="w-full h-full flex items-center justify-center pb-2">
      <div className="w-[85%] aspect-[14/5] h-full p-2 rounded-md flex flex-col gap-1">
        {/* Top grid: 0, numbers, 2:1 */}
        <div className="grid grid-cols-[40px_repeat(12,1fr)_40px] grid-rows-3 gap-1 flex-3 ">
          {/* Zero column */}
          <div
            className="row-span-3 flex items-center justify-center bg-green-600 text-white font-semibold rounded hover:cursor-pointer hover:translate-y-[-2px] hover:brightness-150"
            onMouseEnter={() => setHoveredNums([0])}
            onMouseLeave={() => setHoveredNums([])}
          >
            0
          </div>

          {rows.map((row, rIdx) => (
            <>
              {row.map((n) => {
                const isHighlighted = hoveredNums.includes(n);
                return (
                  <div
                    onMouseEnter={() => setHoveredNums([n])}
                    onMouseLeave={() => setHoveredNums([])}
                    key={n}
                    className={`flex items-center justify-center font-semibold text-sm rounded
                      ${isHighlighted ? "brightness-200" : "brightness-100"}
                    ${
                      isRed(n)
                        ? "bg-red-800 text-white hover:translate-y-[-2px] hover:brightness-200 cursor-pointer hover:border-b-2 border-red-950"
                        : "bg-blue-950 contrast-200 text-white hover:translate-y-[-2px] hover:brightness-200 cursor-pointer hover:border-b-2 border-black"
                    }`}
                  >
                    {n}
                  </div>
                );
              })}

              <div
                onMouseEnter={() => setHoveredNums(rows[rIdx])}
                onMouseLeave={() => setHoveredNums([])}
                key={`2:1-${rIdx}`}
                className="flex hover:cursor-pointer hover:translate-y-[-2px] items-center justify-center bg-black/30 text-white text-sm font-medium rounded hover:bg-green-700 duration-300"
              >
                2:1
              </div>
            </>
          ))}
        </div>

        {/* Dozens row (only spans the 12 middle columns, space left + right stays empty) */}
        <div className="grid grid-cols-[40px_repeat(12,1fr)_40px] gap-1 flex-1">
          <div />
          {["1-12", "13-24", "25-36"].map((d) => (
            <div
              onMouseEnter={() => setHoveredNums(ranges[d])}
              onMouseLeave={() => setHoveredNums([])}
              key={d}
              className="col-span-4 flex items-center justify-center bg-black/30 text-white text-xs font-medium rounded hover:cursor-pointer hover:translate-y-[-2px] hover:bg-white/30"
            >
              {d}
            </div>
          ))}
          <div /> {/* empty under 2:1 */}
        </div>

        {/* Even-money row (only spans 12 middle columns too) */}
        <div className="grid grid-cols-[40px_repeat(12,1fr)_40px] gap-1 flex-1">
          <div /> {/* empty under 0 */}
          <div
            onMouseEnter={() => setHoveredNums(ranges["1-18"])}
            onMouseLeave={() => setHoveredNums([])}
            className="col-span-2 hover:cursor-pointer hover:translate-y-[-2px] hover:bg-white/30 flex items-center justify-center bg-black/30 text-white text-xs font-medium rounded"
          >
            1 to 18
          </div>
          <div
            onMouseEnter={() => setHoveredNums(ranges["even"])}
            onMouseLeave={() => setHoveredNums([])}
            className="col-span-2 hover:cursor-pointer hover:translate-y-[-2px] hover:bg-white/30 flex items-center justify-center bg-black/30 text-white text-xs font-medium rounded"
          >
            even
          </div>
          <div
            onMouseEnter={() => setHoveredNums(redNums())}
            onMouseLeave={() => setHoveredNums([])}
            className="col-span-2 hover:cursor-pointer hover:translate-y-[-2px] hover:brightness-200 flex items-center justify-center bg-red-800 text-white text-xs font-medium rounded"
          ></div>
          <div
            onMouseEnter={() => setHoveredNums(blueNums())}
            onMouseLeave={() => setHoveredNums([])}
            className="col-span-2 hover:cursor-pointer hover:translate-y-[-2px] hover:brightness-200 flex items-center justify-center bg-blue-950 contrast-200 text-white text-xs font-medium rounded"
          ></div>
          <div
            onMouseEnter={() => setHoveredNums(ranges["even"])}
            onMouseLeave={() => setHoveredNums([])}
            className="col-span-2 hover:cursor-pointer hover:translate-y-[-2px] hover:bg-white/30 flex items-center justify-center bg-black/30 text-white text-xs font-medium rounded"
          >
            odd
          </div>
          <div
            onMouseEnter={() => setHoveredNums(ranges["1-18"])}
            onMouseLeave={() => setHoveredNums([])}
            className="col-span-2 hover:cursor-pointer hover:translate-y-[-2px] hover:bg-white/30 flex items-center justify-center bg-black/30 text-white text-xs font-medium rounded"
          >
            19 to 36
          </div>
          <div /> {/* empty under 2:1 */}
        </div>
      </div>
    </div>
  );
};

function isRed(n: number) {
  const reds = new Set([
    1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36,
  ]);
  return reds.has(n);
}

function range(start: number, end: number) {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}
function evenNums() {
  return range(1, 36).filter((n) => n % 2 === 0);
}
function oddNums() {
  return range(1, 36).filter((n) => n % 2 !== 0);
}
function redNums() {
  return [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
}
function blueNums() {
  return range(1, 36).filter((n) => !redNums().includes(n));
}
