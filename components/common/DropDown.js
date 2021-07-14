import { useState } from "react";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import Link from "next/link";

const DropDown = ({ lists, styles, width }) => {
  const [state, setstate] = useState(false);
  const [val, setVal] = useState(lists[0].type);
  const handleClick = () => {
    setstate(!state);
  };
  const activeCategory = (category) => {
    setVal(category);
  };
  return (
    <div className="flex flex-col relative">
      <a
        onClick={handleClick}
        className={`flex justify-between p-2  h-10  rounded-l-md cursor-pointer focus:outline-none ${styles} ${width}`}
      >
        {val}
        
        {state ? (
          <ExpandLess className="text-gray-500 ml-3" />
        ) : (
          <ExpandMore className="text-gray-500 ml-3" />
        )}
      </a>

      <ul
        className={`bg-white shadow px-2 py-2 rounded-md z-10 absolute top-10 ${width} ${
          !state ? "hidden" : "block"
        }`}
      >
        {lists.map((data) => (
          <Link href="#" key={data.id}>
            <li
              onClick={() => activeCategory(data.type)}
              className={`cursor-pointer hover:bg-gray-100 ${
                val === data.type ? "font-bold" : "font-normal"
              }`}
            >
              {data.type}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default DropDown;
