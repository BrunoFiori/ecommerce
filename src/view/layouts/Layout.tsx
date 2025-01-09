import { Outlet } from "react-router-dom";
import Menu from "../pages/components/Menu";

const Layout = () => {
  return (
    <>
      <Menu />
      <div className="bg-azulPrimario-1 flex h-screen pt-8  sm:pl-[72px]">
        <Outlet />
      </div>
      {/* <div className="overflow-auto w-full"> */}
      {/* <div className="bg-azulPrimario-1 flex h-screen sm:pl-[72px]">*/}
    </>
  );
};

export default Layout;
