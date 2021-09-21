import { DropDown } from "../common/DropDown";
import { currency, language } from "../../utils/services";
import { supportEmail, authenticated } from "../../utils/constant";
import Link from "next/link";

export default function TopHeader() {
  return (
    <div className="border-b ">
      <div className="container flex items-center justify-between p-1">
        <Link href="#">
          <a className="hover:text-primary text-sm">{supportEmail}</a>
        </Link>

        <div className="flex items-center space-x-4">
          {authenticated && (
            <Link href="#">
              <a className="hover:text-primary text-sm">Track My Order</a>
            </Link>
          )}
          {!authenticated && (
            <Link href="#">
              <a className="hover:text-primary text-sm">Login</a>
            </Link>
          )}
          {!authenticated && (
            <Link href="#">
              <a className="hover:text-primary text-sm">Register</a>
            </Link>
          )}
          <DropDown
            lists={language}
            width="w-28"
            hoverText="text-primary"
            styles="text-sm"
          />
          <DropDown
            lists={currency}
            width="w-28"
            hoverText="text-primary"
            styles="text-sm"
          />
        </div>
      </div>
    </div>
  );
}
