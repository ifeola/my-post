import { Link } from "react-router-dom";
import Profile from "./Profile";
import {
  HelpCircle,
  LogOut,
  PackagePlus,
  Settings,
  Wallet,
} from "lucide-react";

const Dropdown = ({ className }) => {
  return (
    <div
      className={`absolute top-14 right-0 w-64 bg-background-clr border border-transparent rounded-xl transition-[height] ${className}`}>
      <div className="flex items-center gap-2 p-4">
        <Profile className="w-12 h-12" />
        <div>
          <h4 className="font-bold">
            Abayomi{" "}
            <span className="px-1 py-0 bg-teal-700 border-2 rounded-lg border-teal-950 text-teal-950">
              PRO
            </span>
          </h4>
          <span className="text-sm font-semibold text-gray-400">
            abayomia@gmail.com
          </span>
        </div>
      </div>
      <ul className="p-2 border-y border-y-gray-700">
        <li>
          <Link
            to=""
            className="flex items-center gap-2 px-2 py-2 transition-colors rounded-lg hover:bg-gray-800">
            <Settings />
            <span>Profile Settings</span>
          </Link>
        </li>
        <li>
          <Link
            to=""
            className="flex items-center gap-2 px-2 py-2 transition-colors rounded-lg hover:bg-gray-800">
            <HelpCircle />
            <span>Help Center</span>
          </Link>
        </li>
        <li>
          <Link
            to=""
            className="flex items-center gap-2 px-2 py-2 transition-colors rounded-lg hover:bg-gray-800">
            <Wallet />
            <span>Billings</span>
          </Link>
        </li>
        <li>
          <Link
            to=""
            className="flex items-center gap-2 px-2 py-2 transition-colors rounded-lg hover:bg-gray-800">
            <PackagePlus />
            <span>Upgrade Plan</span>
          </Link>
        </li>
      </ul>
      <button className="flex items-center gap-2 p-4">
        <LogOut />
        <span>Sign Out</span>
      </button>
    </div>
  );
};
export default Dropdown;
