import { useState } from "react";
import {
  FavoriteBorderOutlined,
  PersonOutlineOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import Icon from "../common/Icon";
import DropDown from "../common/DropDown";
import Link from "next/link";
import { category } from "../../utils/services";

export default function Header() {
  return (
    <header className="shadow-4 py-4">
      <div className="container flex justify-between ">
        <Link href="/">
          <a>
            <img
              src="/images/logos/logo-2.png"
              alt="logos"
              className="w-24 h-12 object-contain max-w-max mr-4"
            />
          </a>
        </Link>

        <div className="w-full max-w-2xl flex ">
          <DropDown
            lists={category}
            width="w-40"
            styles="border border-primary"
          />

          <input
            type="text"
            placeholder="Search"
            className="flex flex-grow px-5 py-1 border border-primary h-10 focus:outline-none"
          />

          <button className="px-5 py-1 border border-primary h-10 bg-primary text-white font-bold rounded-r-md ">
            Search
          </button>
        </div>

        <div className="flex  space-x-4">
          <Icon text="WishList" url="#" count="true" numberOfItems={4}>
            <FavoriteBorderOutlined fontSize="large" />
          </Icon>
          <Icon text="Cart" url="#" count="true" numberOfItems={6}>
            <ShoppingCartOutlined fontSize="large" />
          </Icon>
          <Icon text="Account" url="#">
            <PersonOutlineOutlined fontSize="large" />
          </Icon>
        </div>
      </div>
    </header>
  );
}
