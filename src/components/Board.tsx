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
          <div className="relative row-span-3 flex items-center justify-center">
            <div
              className={`w-full h-full flex items-center justify-center bg-green-600 text-white font-semibold rounded hover:cursor-pointer hover:translate-y-[-2px] ${hoveredNums.includes(0) ? "brightness-150" : "brightness-100" }`}
              onMouseEnter={() => setHoveredNums([0])}
              onMouseLeave={() => setHoveredNums([])}
            >
              0
            </div>
            <div
              onMouseEnter={() => setHoveredNums([0, 3])}
              onMouseLeave={() => setHoveredNums([])}
              className="absolute w-1 h-10 top-0 left-10 bg-yellow-400 cursor-pointer"
            />
            <div
              onMouseEnter={() => setHoveredNums([0, 2])}
              onMouseLeave={() => setHoveredNums([])}
              className="absolute w-1 h-10 left-10 bg-yellow-400 cursor-pointer"
            />
            <div
              onMouseEnter={() => setHoveredNums([0, 1])}
              onMouseLeave={() => setHoveredNums([])}
              className="absolute w-1 h-10 bottom-0 left-10 bg-yellow-400 cursor-pointer"
            />
            <div
              // onClick={() => console.log(hoveredNums)}
              onMouseEnter={() => setHoveredNums([0, 2, 3])}
              onMouseLeave={() => setHoveredNums([])}
              className="absolute size-2 top-10 translate-x-[-2px] translate-y-[-2px] left-10 bg-green-400 cursor-pointer z-10 rounded-2xl"
            />
            <div
              // onClick={() => console.log(hoveredNums)}
              onMouseEnter={() => setHoveredNums([0, 1, 2])}
              onMouseLeave={() => setHoveredNums([])}
              className="absolute size-2 top-21 left-10 translate-x-[-2px] bg-green-400 cursor-pointer z-10 rounded-2xl"
            />
          </div>

          {rows.map((row, rIdx) => (
            <>
              {row.map((n, cIdx) => {
                const right = row[cIdx + 1]; // horizontal split
                const below = rows[rIdx + 1]?.[cIdx]; // vertical split

                const bottomRight = rows[rIdx + 1]?.[cIdx + 1]; // for corner
                const isHighlighted = hoveredNums.includes(n);
                return (
                  <div key={`cell-${n}`} className="relative">
                    <div
                      onMouseEnter={() => setHoveredNums([n])}
                      onMouseLeave={() => setHoveredNums([])}
                      className={`flex size-full items-center justify-center font-semibold text-sm rounded
                      ${isHighlighted ? "brightness-200" : "brightness-100"}
                    ${
                      isRed(n)
                        ? "bg-red-800 text-white hover:brightness-200 cursor-pointer "
                        : "bg-blue-950 contrast-200 text-white hover:brightness-200 cursor-pointer "
                    }`}
                    >
                      {n}
                    </div>
                    {/* Horizontal Split (right) */}
                    {right && (
                      <div
                        onMouseEnter={() => setHoveredNums([n, right])}
                        onMouseLeave={() => setHoveredNums([])}
                        className="absolute w-1 h-full translate-x-9 -translate-y-9 2xl:-translate-y-10 bg-white cursor-pointer"
                      />
                    )}
                    {/* Vertical Split (below) */}
                    {below && (
                      <div
                        onMouseEnter={() => setHoveredNums([n, below])}
                        onMouseLeave={() => setHoveredNums([])}
                        className="absolute bottom-0 left-1/2 h-1 w-full -translate-x-1/2 bg-teal-600 translate-y-1 cursor-pointer"
                      />
                    )}
                    {/* Corner Split (4-cell) */}
                    {below && right && bottomRight && (
                      <div
                        onMouseEnter={() =>
                          setHoveredNums([n, right, below, bottomRight])
                        }
                        onMouseLeave={() => setHoveredNums([])}
                        className="absolute bottom-0 right-0 size-2 translate-x-[6px] bg-green-400 translate-y-[5px] z-10 rounded-full cursor-pointer"
                      />
                    )}
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
