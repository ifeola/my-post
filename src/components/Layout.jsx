import { Outlet } from "react-router-dom";
import Header from "./Header";
import Aside from "./Aside";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="grid grid-cols-[auto_1fr]">
        <Aside />
        <section className="pt-16 px-6 h-screen overflow-auto">
          <Outlet />
        </section>
      </main>
    </>
  );
};
export default Layout;
