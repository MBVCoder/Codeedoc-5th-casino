export const Board = () => {
  const rows = [
    [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36], // top row
    [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35], // middle row
    [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34], // bottom row
  ];

  return (
    <div className="w-full h-full flex items-center justify-center pb-2">
      <div className="w-[85%] aspect-[14/5] h-full p-2 rounded-md flex flex-col gap-1">
        {/* Top grid: 0, numbers, 2:1 */}
        <div className="grid grid-cols-[40px_repeat(12,1fr)_40px] grid-rows-3 gap-1 flex-3 ">
          {/* Zero column */}
          <div className="row-span-3 flex items-center justify-center bg-green-600 text-white font-semibold rounded">
            0
          </div>

          {rows.map((row, rIdx) => (
            <>
              {row.map((n) => (
                <div
                  key={n}
                  className={`flex items-center justify-center font-semibold text-sm rounded
                    ${
                      isRed(n)
                        ? "bg-red-800 text-white hover:translate-y-[-2px] hover:brightness-200 cursor-pointer hover:border-b-2 border-red-950"
                        : "bg-blue-950 contrast-200 text-white hover:translate-y-[-2px] hover:brightness-200 cursor-pointer hover:border-b-2 border-black"
                    }`}
                >
                  {n}
                </div>
              ))}
              {/* 2:1 aligned at the end of each row */}
              <div
                key={`2:1-${rIdx}`}
                className="flex items-center justify-center bg-black/30 text-white text-sm font-medium rounded hover:bg-green-700 duration-300"
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
              key={d}
              className="col-span-4 flex items-center justify-center bg-black/30 text-white text-xs font-medium rounded"
            >
              {d}
            </div>
          ))}
          <div /> {/* empty under 2:1 */}
        </div>

        {/* Even-money row (only spans 12 middle columns too) */}
        <div className="grid grid-cols-[40px_repeat(12,1fr)_40px] gap-1 flex-1">
          <div /> {/* empty under 0 */}
          <div className="col-span-2 flex items-center justify-center bg-black/30 text-white text-xs font-medium rounded">
            1 to 18
          </div>
          <div className="col-span-2 flex items-center justify-center bg-black/30 text-white text-xs font-medium rounded">
            even
          </div>
          <div className="col-span-2 flex items-center justify-center bg-red-800 text-white text-xs font-medium rounded"></div>
          <div className="col-span-2 flex items-center justify-center bg-blue-950 contrast-200 text-white text-xs font-medium rounded"></div>
          <div className="col-span-2 flex items-center justify-center bg-black/30 text-white text-xs font-medium rounded">
            odd
          </div>
          <div className="col-span-2 flex items-center justify-center bg-black/30 text-white text-xs font-medium rounded">
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
