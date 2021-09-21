import { useState, useEffect } from "react";
import {
  ExpandMoreOutlined,
  MenuOutlined,
  PhoneOutlined,
} from "@material-ui/icons";
import {
  categories,
  homepage,
  shoppage,
  subCategory,
} from "../../utils/services";
import { DropDownHover, DropDownHoverCategory } from "../common/DropDown";
import { supportCall } from "../../utils/constant";

export default function Navbar() {
  return (
    <div className="bg-blue-primary w-full h-14">
      <div className="container flex items-center justify-between h-full">
        <div className="flex items-center">
          <div className="relative group">
            <div className="py-4 px-8  bg-primary text-white cursor-pointer">
              <MenuOutlined className="mr-2" />
              <span>All Categories</span>
            </div>
            <DropDownHoverCategory lists={categories} sublists={subCategory} />
          </div>

          <div className="flex ml-10">
            <DropDownHover text="Home" lists={homepage}>
              <ExpandMoreOutlined />
            </DropDownHover>
            <DropDownHover text="Shop" lists={shoppage}>
              <ExpandMoreOutlined />
            </DropDownHover>
            <DropDownHover text="Pages" lists={homepage}>
              <ExpandMoreOutlined />
            </DropDownHover>
            <DropDownHover text="Contacts" />
          </div>
        </div>

        <div className="text-white">
          <PhoneOutlined className="w-10 h-5" />
          <span>Call:</span>
          {supportCall}
        </div>
      </div>
    </div>
  );
}
