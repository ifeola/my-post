import {
  Bookmark,
  Globe,
  Hash,
  History,
  LucideLink,
  MessageSquareIcon,
  Newspaper,
  Users,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import Profile from "./Profile";

const navData = [
  {
    link: "/",
    name: "explore",
    icon: <Newspaper />,
  },
  {
    link: "bookmarks",
    name: "bookmarks",
    icon: <Bookmark />,
  },
  {
    link: "history",
    name: "history",
    icon: <History />,
  },
  {
    link: "tags",
    name: "tags",
    icon: <Hash />,
  },
  {
    link: "discussions",
    name: "discussions",
    icon: <MessageSquareIcon />,
  },
  {
    link: "leaderboard",
    name: "leaderboard",
    icon: <Users />,
  },
  {
    link: "link",
    name: "link",
    icon: <LucideLink />,
  },
  {
    link: "sources",
    name: "sources",
    icon: <Globe />,
  },
];

const Aside = () => {
  return (
    <aside className="flex flex-col h-screen gap-10 pt-20 border-r w-48 border-r-gray-800 bg-background-clr">
      <div>
        <Link to="/" className="mb-10 ml-4 flex items-center gap-2">
          <Profile className="w-12 h-12 block" />
          <div>
            <h4 className="font-bold text-base">A. Abayomi</h4>
            <span className="font-medium text-gray-400 text-sm">
              @abdulwaheed
            </span>
          </div>
        </Link>
        <h4 className="mb-2 ml-4 text-base font-medium">My Feed</h4>
        <ul className="nav__list">
          {navData.slice(0, 3).map((data, index) => {
            return (
              <li key={index}>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "bg-gray-50/10 border-r-teal-600 "
                      : "bg-transparent border-r-transparent"
                  }
                  to={data.link}>
                  <span>{data.icon}</span>
                  <span className="truncate">{data.name}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h4 className="mb-2 ml-4 text-base font-medium">Discover</h4>
        <ul className="nav__list">
          {navData.slice(3, navData.length).map((data, index) => {
            return (
              <li key={index}>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "bg-gray-50/10 border-r-teal-600 "
                      : "bg-transparent border-r-transparent"
                  }
                  to={data.link}>
                  <span>{data.icon}</span>
                  <span className="truncate">{data.name}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};
export default Aside;
