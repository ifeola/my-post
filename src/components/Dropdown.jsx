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
      <div className="p-4 flex items-center gap-2">
        <Profile className="w-12 h-12" />
        <div>
          <h4 className="font-bold">
            Abayomi{" "}
            <span className="px-1 py-0 bg-teal-700 border-2 border-teal-950 text-teal-950 rounded-lg">
              PRO
            </span>
          </h4>
          <span className="font-semibold text-sm text-gray-400">
            abayomia@gmail.com
          </span>
        </div>
      </div>
      <ul className="border-y border-y-gray-700 p-2">
        <li>
          <Link
            to=""
            className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-gray-800 transition-colors">
            <Settings />
            <span>Profile Settings</span>
          </Link>
        </li>
        <li>
          <Link
            to=""
            className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-gray-800 transition-colors">
            <HelpCircle />
            <span>Help Center</span>
          </Link>
        </li>
        <li>
          <Link
            to=""
            className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-gray-800 transition-colors">
            <Wallet />
            <span>Billings</span>
          </Link>
        </li>
        <li>
          <Link
            to=""
            className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-gray-800 transition-colors">
            <PackagePlus />
            <span>Upgrade Plan</span>
          </Link>
        </li>
      </ul>
      <button className="p-4 flex items-center gap-2">
        <LogOut />
        <span>Sign Out</span>
      </button>
    </div>
  );
};
export default Dropdown;
