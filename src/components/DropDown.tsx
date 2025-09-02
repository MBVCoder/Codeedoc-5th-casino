import { useState } from "react";

export default function DropDown() {
  const [difficulty, setDifficulty] = useState("easy");

  const handleChange = (event: any) => {
    setDifficulty(event.target.value);
  };

  return (
    <select
      name="difficulty"
      id="difficulty"
      value={difficulty}
      onChange={handleChange}
      className=" bg-gray-900 text-white px-4 py-1 rounded-md border-[1px] border-white focus:outline-none"
    >
      <option value="easy">Easy</option>
      <option value="medium">Medium</option>
      <option value="hard">Hard</option>
    </select>
  );
}
