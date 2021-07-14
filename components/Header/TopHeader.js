import DropDown from "../common/DropDown";
import { language } from "../../utils/services";
export default function TopHeader() {
  return (
    <div>
      <DropDown lists={language} width="w-32" />
    </div>
  );
}
