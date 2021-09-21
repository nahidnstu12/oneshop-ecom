import { useState, useEffect } from "react";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import Link from "next/link";

// navlinks clickable
export const DropDown = ({ lists, styles, width, hoverText }) => {
  const [state, setstate] = useState(false);
  const [val, setVal] = useState(lists[0].type);
  const handleClick = () => {
    setstate(!state);
  };
  const activeCategory = (category) => {
    setVal(category);
    setstate(!state);
  };
  return (
    <div className="flex flex-col relative">
      <a
        onClick={handleClick}
        className={`flex justify-between p-2  h-10  rounded-l-md cursor-pointer focus:outline-none ${styles} ${width} ${
          "hover:" + hoverText
        }`}
      >
        {val}

        {state ? (
          <ExpandLess className="text-gray-500 " />
        ) : (
          <ExpandMore className="text-gray-500 " />
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

// navlinks hover
export const DropDownHover = ({ text, lists, children }) => {
  return (
    <div className="relative group">
      <div className="flex text-base font-medium text-white mr-3 h-full p-4 cursor-pointer">
        <span>{text}</span>
        {children}
      </div>
      <ul className="bg-white absolute w-36 hidden group-hover:block transition">
        {lists &&
          lists.map((data) => (
            <li
              className="hover:text-primary cursor-pointer px-4 py-1"
              key={data.id}
            >
              {data.type}
            </li>
          ))}
      </ul>
    </div>
  );
};

/*
hoverable category & clik for subcategory
facing some issues
1) hover not working
2) every child rendering with same subcategory
3) add more btn if have subcategory
*/
export const DropDownHoverCategory = ({ lists, sublists }) => {
  const [department, setDepartment] = useState([]);
  const [subdept, setSubdept] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setDepartment(lists);
  }, [department]);

  useEffect(() => {
    // setShow(!show);
    if (subdept.length !== 0) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [subdept]);

  const handleBoxToggle = (id) => {
    setSubdept(
      sublists.filter((data) => {
        return id === data.categoryId;
      })
    );
  };
  return (
    <ul className="bg-white absolute w-full hidden  group-hover:block transition ">
      {lists &&
        lists.map((data) => (
          <li
            className={`hover:bg-gray-200 cursor-pointer px-8 py-1`}
            key={data.id}
            onClick={() => handleBoxToggle(data.id)}
          >
            <span className="mr-2 text-primary">{data.icon}</span>
            <span>{data.categoryName}</span>

            {subdept.length !== 0 && (
              <ul
                className={`absolute -right-24 top-0 w-28 transition ${
                  show ? "block" : "hidden"
                }`}
              >
                {subdept.map((subdeptdata) => (
                  <li
                    key={subdeptdata.id}
                    className="cursor-pointer px-4 py-1 hover:text-primary"
                  >
                    <span>{subdeptdata.subCategoryName}</span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
    </ul>
  );
};

/*
clickable category(modernize)
*/
export const DropDownClickCategory = () => {};
